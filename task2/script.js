const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль')
});

const Alert = document.querySelector('#alert');

Alert.addEventListener('click', () => {
    alert('Метод для вывода сообщения на экран монитора')
});

const Prompt = document.querySelector('#prompt');

Prompt.addEventListener('click', () => {
    alert('Метод для вывода диалогового окна с сообщением и кнопками "Продолжить" и "Отмена');
}); 
