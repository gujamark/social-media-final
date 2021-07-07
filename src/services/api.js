export class AUTHORIZATION {
  static SignIn({ username, password }) {
    const users = JSON.parse(localStorage.getItem('users'));
    const UserObj = users.find((user) => user.username === username);

    return UserObj.password === password;
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
}
