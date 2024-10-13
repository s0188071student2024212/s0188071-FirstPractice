function calculateCost() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const productPrice = parseInt(document.getElementById('product').value);
    const totalCost = quantity * productPrice;
    document.getElementById('result').innerHTML = `Стоимость заказа: ${totalCost} руб.`;
  }
  
  