window.addEventListener('DOMContentLoaded', function (event) {
  console.log("DOM fully loaded and parsed");
});
function onClick(event) {
  let b = document.getElementById("cost");
  b.addEventListener("click", calculateCost);
  event.preventDefault();
  alert("click");
}
function calculateCost() {
    const quantity = parseInt(document.getElementById('quantity').value); 
    const productPrice = parseInt(document.getElementById('product').value); 
    if (quantity <= 0) {
        document.getElementById('result').innerHTML = 'Количество товара должно быть больше нуля.';
        return; 
    }

    const totalCost = quantity * productPrice; 
    document.getElementById('result').innerHTML = `Стоимость заказа: ${totalCost} руб.`;
}
