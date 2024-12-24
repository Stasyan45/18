$(document).ready(function () {
    $('#getFact').click(function () {
        const number = $('#numberInput').val().trim(); // Отримати введене значення
        const factContainer = $('#factContainer');

        // Очищення контейнера
        factContainer.empty();

        // Перевірка, чи введено число
        if (isNaN(number) || number === '') {
            factContainer.text('Будь ласка, введіть правильне число');
            return;
        }

        // Відправка AJAX-запиту
        $.ajax({
            url: `http://numbersapi.com/${number}`,
            method: 'GET',
            success: function (response) {
                factContainer.text(response);
            },
            error: function () {
                factContainer.text('Виникла помилка. Спробуйте ще раз.');
            }
        });
    });
});
