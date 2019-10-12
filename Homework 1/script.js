'use strict';
const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';

const CANCEL_ADMIN_LOGIN_INPUT = 'Отменено пользователем!';
const WRONG_ADMIN_LOGIN_INPUT = 'Доступ запрещен,неверный логин!';

const CANCEL_ADMIN_PASSWORD_INPUT = 'Отменено пользователем!';
const WRONG_ADMIN_PASSWORD_INPUT = 'Доступ запрещен,неверный пароль!';

const GREET_USER = 'Добро пожаловать!';

const ADMIN_LOGIN_INPUT = prompt('Пожалуйста, введите ваш логин');

if (ADMIN_LOGIN_INPUT === null) {
  alert (CANCEL_ADMIN_LOGIN_INPUT); 
} else if (ADMIN_LOGIN_INPUT !== adminLogin) {
  alert (WRONG_ADMIN_LOGIN_INPUT);
} else {

  const ADMIN_PASSWORD_INPUT = prompt('Пожалуйста, введите ваш пароль', '');
  
  if (ADMIN_PASSWORD_INPUT === null) {
    alert (CANCEL_ADMIN_PASSWORD_INPUT);
  } else if (ADMIN_PASSWORD_INPUT !== adminPassword) {
    alert (WRONG_ADMIN_PASSWORD_INPUT);
  } else {
    alert (GREET_USER);
  }
}