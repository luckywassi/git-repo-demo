import usersArray from './loginData';

function getCookie(name) {
  name = `${name}=`;
  let myUser = null;
  let successStatus = false;
  const cookie = document.cookie;
  const cookieArr = cookie.split('; ');
  for (let i = 0; i < cookieArr.length; i++) {
    if (cookieArr[i].search(name) === 0) {
      myUser = JSON.parse(cookieArr[i].substring(name.length));
      successStatus = true;
      break;
    }
  }
  return [successStatus, myUser];
}
function login(username, password) {
  for (let i = 0; i < usersArray.length; i++) {
    const user = usersArray[i];
    if (user.username === username && user.password === password) {
      setCookie('myUser', JSON.stringify(user), 1);
      return 'success';
    }
  }

  return 'username or password was incorrent';
}
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  // let expires = "expires="+ d.toUTCString();
  // document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  document.cookie = `${cname}=${cvalue};expires=${d.toUTCString()};path=/; SameSite=None;secure`;
}

export default {
  getCookie,
  login
};
