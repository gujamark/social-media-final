import { auth } from '../firebase/firebase';

export class AUTHORIZATION {
  static async SignIn({ email, password }) {
    // const result = {};
    // const users = JSON.parse(localStorage.getItem('users'));
    // const UserObj = users.find((user) => user.username === username);
    // if (!UserObj) {
    //   result.success = false;
    //   result.details = 'Username or Password is incorrect';
    //   return result;
    // }
    // result.success = UserObj.password === password;
    // if (result.success) {
    //   result.auth_token = uuidv4();
    //   result.user_data = UserObj;
    // }
    // if (!result.success) result.details = 'Username or Password is incorrect';
    // return result;

    const result = {};

    await auth
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        result.data = response.user;
        result.success = true;
      })
      .catch((error) => {
        console.log(error.message);
        result.success = false;
        result.message = error.message;
        result.data = {};
      });

    return result;
  }

  static async Register({ email, password }) {
    const result = {};
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response);
        result.data = response.user;
        result.success = true;
      })
      .catch((error) => {
        result.success = false;
        result.message = error.message;
      });

    return result;
  }

  static getUserData(username) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userData = users.find((user) => username === user.username);

    return userData;
  }
}

export class POSTS {
  static createPost(postData) {}
}
