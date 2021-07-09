import moment from 'moment';
import firebase from 'firebase/app';
import { auth, firestore } from '../firebase/firebase';
import { USER_DATA, POST_PER_LOAD, AUTH_TOKEN } from '../utils/constants';

export class AUTHORIZATION {
  static async SignIn({ email, password }) {
    const result = {};

    await auth
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        result.data = response.user;
        result.success = true;
      })
      .catch((error) => {
        result.success = false;
        result.message = error.message;
        result.data = {};
      });

    return result;
  }

  static async Signout() {
    const result = {};

    await auth
      .signOut()
      .then(() => {
        result.success = true;
      })
      .catch((error) => {
        result.success = false;
        result.error = error.message;
      });

    return result;
  }

  static async Register({ email, password }) {
    const result = {};
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        result.data = response.user;
        result.success = true;
        firestore.collection('users').doc(result.data.uid).set({});
      })
      .catch((error) => {
        result.success = false;
        result.message = error.message;
      });

    return result;
  }

  static async getUserData(userid) {
    const query = firestore.collection('users').doc(userid);
    const result = {};

    await query
      .get()
      .then((response) => {
        result.success = true;
        const data = response.data();
        result.data = { ...data, birthdate: data.birthdate.toDate() };
      })
      .catch((error) => {
        result.success = false;
        result.desciption = error.message;
        result.data = {};
      });

    return result;
  }

  static async updateUser({ name, birthdate }) {
    const currentUser = localStorage.getItem(AUTH_TOKEN);
    const result = {};
    await firestore
      .collection('users')
      .doc(currentUser)
      .update({ name: name, birthdate: birthdate })
      .then(() => {
        result.success = true;
      })
      .catch(() => {
        result.success = false;
      });

    console.log(result);
    return result;
  }
}

export class POSTS {
  static async createPost(postData) {
    const authData = JSON.parse(localStorage.getItem(USER_DATA));

    const result = await firestore
      .collection('posts')
      .add({
        ...postData,
        created_on: firebase.firestore.Timestamp.now(),
        created_by: authData.email,
      })
      .then(() => ({
        success: true,
        message: 'Post created successfully',
      }))
      .catch((error) => ({
        success: false,
        message: error.message,
      }));

    return result;
  }

  static async deletePost(postid) {
    const result = {};

    await firestore
      .collection('posts')
      .doc(postid)
      .delete()
      .then(() => {
        result.success = true;
      })
      .catch((error) => {
        result.success = false;
        result.desciption = error.message;
      });

    return result;
  }

  static async getPosts(afterPost) {
    const currentUser = localStorage.getItem(AUTH_TOKEN);
    const { email } = JSON.parse(localStorage.getItem(USER_DATA));

    const result = { data: [], lastDoc: '' };
    let query = firestore.collection('posts').orderBy('created_on', 'desc');

    if (afterPost) query = query.startAfter(afterPost);

    result.total_count = (await firestore.collection('posts').get()).size;

    await query
      .limit(POST_PER_LOAD)
      .get()
      .then((docs) => {
        result.lastDoc = docs.docs[docs.docs.length - 1];

        // result.total_count = .size;

        docs.forEach((doc) => {
          const data = doc.data();
          result.data.push({
            id: doc.id,
            ...data,
            created_on: moment(data.created_on.toDate()).fromNow(),
            liked: data.likes ? data.likes.includes(currentUser) : false,
            like_count: data.likes ? data.likes.length : 0,
            canDelete: data.created_by === email,
          });
        });
      });

    return result;
  }

  static async like(postid) {
    const currentUser = localStorage.getItem(AUTH_TOKEN);
    const result = {};

    await firestore
      .collection('posts')
      .doc(postid)
      .update('likes', firebase.firestore.FieldValue.arrayUnion(currentUser))
      .then(() => {
        result.success = true;
      })
      .catch(() => {
        result.success = false;
      });

    return result;
  }

  static async unlike(postid) {
    const currentUser = localStorage.getItem(AUTH_TOKEN);
    const result = {};

    await firestore
      .collection('posts')
      .doc(postid)
      .update('likes', firebase.firestore.FieldValue.arrayRemove(currentUser))
      .then(() => {
        result.success = true;
      })
      .catch(() => {
        result.success = false;
      });

    return result;
  }
}
