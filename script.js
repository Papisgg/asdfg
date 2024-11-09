"use script";

// Токен бота и ваш внутренний ID чата
const TELEGRAM_TOKEN = '7716189987:AAFTK8R725u8XfA89v7ArMHYpQAaT4PgVBA'; // Замените на ваш токен
const TELEGRAM_CHATID = '5480279690'// Замените на ваш ID

// Сообщение для отправки
const message = 'Сообщение';

// URL для отправки запроса
const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHATID}&text=${encodeURIComponent(message)}`;

// Функция для отправки сообщения
fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка сети');
        }
        return response.json();
    })
    .then(data => {
        console.log('Успешно отправлено:', data);
    })
    .catch(error => {
        console.error('Ошибка при отправке сообщения:', error);
    });
