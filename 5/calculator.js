function onClick(event) {
    event.preventDefault();  // Предотвращаем стандартное поведение, если это форма

    // Получаем значения из полей ввода
    const quantity = parseInt(document.getElementById('quantity').value); 
    const productPrice = parseInt(document.getElementById('product').value); 

    // Проверка, чтобы количество было больше нуля
    if (quantity <= 0) {
        document.getElementById('result').innerHTML = 'Количество товара должно быть больше нуля.';
        return; 
    }

    // Расчет стоимости заказа
    const totalCost = quantity * productPrice; 

    // Выводим результат
    document.getElementById('result').innerHTML = `Стоимость заказа: ${totalCost} руб.`;

    // Выводим alert
    alert("click");
}

// Назначаем обработчик клика после загрузки DOM
window.addEventListener('DOMContentLoaded', function () {
    console.log("DOM fully loaded and parsed");

    // Находим кнопку и добавляем обработчик события
    const button = document.getElementById('my-button');
    button.addEventListener('click', onClick);
});
