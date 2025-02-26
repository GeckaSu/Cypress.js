import * as data from "../helpers/default_data.json"
import * as main_page from "../locators/main_page.json"
import * as result_page from "../locators/result_page.json"
import * as recovery_page from "../locators/recovery_password_page.json"

describe('Проверка заполнения формы шаблона', function () {


  beforeEach('Начало теста', function () {
        cy.visit('/'); // Зашли на сайт
        cy.get(main_page.forgot_pass_bth).should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль\
          });

    afterEach('Конец теста', function () {
        cy.get(result_page.close).should('be.visible'); // Есть крестик и он виден для пользователя
          });
          
    it('Верный логин и верный пароль', function () {
         cy.get(main_page.email).type(data.login); // Ввели верный логин
         cy.get(main_page.password).type(data.password); // Ввели верный пароль
         cy.get(main_page.login_button).click(); // Нажал войти

         cy.get(result_page.title).contains('Авторизация прошла успешно'); // Провераю что после авторизации вижу текст
         cy.get(result_page.title).should('be.visible'); // Текст виден пользователю
         
     })

    it('Верный логин и неверный пароль', function () {     
        cy.get(main_page.email).type(data.login); // Ввели верный логин
        cy.get(main_page.password).type('iLoveqastudio7'); // Ввели верный пароль
        cy.get(main_page.login_button).click(); // Нажал войти

        cy.get(result_page.title).contains('Такого логина или пароля нет'); // Провераю что после авторизации вижу текст
        cy.get(result_page.title).should('be.visible'); // Текст виден пользователю
    })

    it('Неверный логин и верный пароль', function () {
        cy.get(main_page.email).type('germandolnikov.ru'); // Ввели верный логин
        cy.get(main_page.password).type(data.password); // Ввели верный пароль
        cy.get(main_page.login_button).click(); // Нажал войти
        cy.get(result_page.title).contains('Нужно исправить проблему валидации'); // Провераю что после авторизации вижу текст
        cy.get(result_page.title).should('be.visible'); // Текст виден пользователю
    })

    it('Проверка восстановления пароля', function () {
        cy.get(main_page.forgot_pass_bth).click(); // Нажал забыли пароль
        cy.get(recovery_page.email).type('german@dolnikov.ru'); // Ввели верную почту для восстановления
        cy.get(recovery_page.send_button).click(); // Нажал забыли пароль

        cy.get(result_page.title).contains('Успешно отправили пароль на e-mail'); // Провераю что после авторизации вижу текст
        cy.get(result_page.title).should('be.visible'); // Текст виден пользователю
    })
 })

// План
// + Найти поле логин и ввести правильный логин
// + Найти поле пароль и ввести правильный пароль
// + Найти кнопку войти и нажать на нее
// + Проверить, что авторизация прошла успешно
// + Есть крестик и он виден