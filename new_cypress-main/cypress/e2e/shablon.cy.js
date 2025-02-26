describe('Проверка заполнения формы шаблона', function () {

    it('Верны ли введены данные', function () {
         cy.visit('https://www.testograf.ru/ru/blog/feedback-form-template'); //Зашли на сайт
         cy.get('#ttgraf-33');
         cy.get('button button___fd25a2fb454e3f726adc blue___f42ee3b7578def392092 fluid___b8ec6d1bc6ffd588c6ef').should('have.css', 'color', 'rgb(49, 144, 255)'); //Проверяю цвет кнопки 
         cy.get('.control___e16bbac759474cb49f55 transparent___ff454935e0e05f508992').type('Эльмира'); //Ввели имя
         cy.get('inner___b60aaf61d5b77cb1bae5').type('bloom-dragon@bk.ru'); //Ввели E-mail
         cy.get('control___e16bbac759474cb49f55 transparent___ff454935e0e05f508992').type('89000000900'); //Ввели телефон
         cy.get('.title___bb675eac964120e07a92 searchable___f1c57fdf9d3d7789a720-item').trigger('mouseover'); //Наведение
         cy.get('.click(title___bb675eac964120e07a92 searchable___f1c57fdf9d3d7789a720);'); //Кликнули на панель
         cy.get('.option item___a66a0ae47d8145dee2ff top___be532b298b1807030bea small___d330116cc5b0a9fd3054;');//Выбрали цель обращения
         cy.get('.multiline___cc6bb61529c652f37050 control___e16bbac759474cb49f55 control___b7ae007d86d6ea2bb014 transparent___ff454935e0e05f508992').type('Пишу тестовое сообщение для автотеста');//Написали сообщение
         cy.get('.buttonText contents___fcd7c5db228570626c').click(); //Нажимаю отправить
         cy.get('.span').contains('Благодарим за обращение!'); //Проверяю, что после авт. виду текст
         
         
     });
 });

//+План
//Успешная отправка формы с валидными данными
//Ввод валидного email
//Проверка длины имени
//Отправка формы с минимальным набором обязательных данных
//Проверка кнопки "Очистить"
//Отправка длинного сообщения
//Поддержка разных языков
//Ввод данных с пробелами в начале и в конце