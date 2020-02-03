const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 }
];

const calculateTotalPrice = function(allProdcuts, productName) {
    // твой код
    const name = productName;
    let totalPrice = 0;
    const entries = Object.entries(allProdcuts);

    for (const entry of entries) {
        let values = Object.values(entry[1]);
        if (name === values[0]) {
            totalPrice = values[1] * values[2];
        }
    }
    return totalPrice;
};

/*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800
