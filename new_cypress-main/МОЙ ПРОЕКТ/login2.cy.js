describe('Проверка заполнения формы шаблона', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль\
         
         cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
         cy.get('#loginButton').click(); // Нажал войти
         
         cy.wait(5000);
         
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Провераю что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
         
     })

     it('Неверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль\
        
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio7'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажал войти
        
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Провераю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
        
    })

    it('Верный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль\
        
        cy.get('#mail').type('germandolnikov.ru'); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажал войти
        
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Провераю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
        
    })
    it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль\
        
        cy.get('#forgotEmailButton').click(); // Нажал забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввели верную почту для восстановления
        cy.get('#restoreEmailButton').click(); // Нажал забыли пароль

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Провераю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
        
    })
 })

 
// План
// + Найти поле логин и ввести правильный логин
// + Найти поле пароль и ввести правильный пароль
// + Найти кнопку войти и нажать на нее
// + Проверить, что авторизация прошла успешно
// + Есть крестик и он виден