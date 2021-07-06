export class AUTHORIZATION {
  static SignIn(username, password) {
    const users = JSON.parse(localStorage.getItem('users'));
    const UserObj = users.find((user) => user.username === username);

    return UserObj.password === password;
  }

  static Register(username, password) {
    const result = {};
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const alreadytExists = users.find((user) => username === user.username);

    if (alreadytExists) {
      result.success = false;
      result.error = 'Account with this username already exists';
      return result;
    }

    users.push({ username: username, password: password });
    localStorage.setItem('users', JSON.stringify(users));
    result.success = true;

    return result;
  }
}
