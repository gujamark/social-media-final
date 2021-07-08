import { v4 as uuidv4 } from 'uuid';

export class AUTHORIZATION {
  static SignIn({ username, password }) {
    const result = {};
    const users = JSON.parse(localStorage.getItem('users'));
    const UserObj = users.find((user) => user.username === username);
    if (!UserObj) {
      result.success = false;
      result.details = 'Username or Password is incorrect';
      return result;
    }
    result.success = UserObj.password === password;
    if (result.success) {
      result.auth_token = uuidv4();
      result.user_data = UserObj;
    }
    if (!result.success) result.details = 'Username or Password is incorrect';
    return result;
  }

  static Register({ username, password, name, birthdate }) {
    const result = {};
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const alreadytExists = users.find((user) => username === user.username);

    if (alreadytExists) {
      result.success = false;
      result.details = 'Account with this username already exists';
      return result;
    }

    users.push({
      username: username,
      password: password,
      name: name,
      birthdate: birthdate,
    });
    localStorage.setItem('users', JSON.stringify(users));
    result.success = true;
    result.details = 'User Registered successfuly';

    return result;
  }

  static getUserData(username) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userData = users.find((user) => username === user.username);

    return userData;
  }
}

export class Feed {
  static getPosts() {}
}
