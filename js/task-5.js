const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 }
];

const getAllPropValues = function(arr, prop) {
    // твой код
    const name = [];
    const quantity = [];
    const entries = Object.entries(arr);

    for (const entry of entries) {
        let values = Object.values(entry[1]);
        name.push(values[0]);
        quantity.push(values[2]);
    }

    if (prop === 'name') {
        return name;
    } else if (prop === 'quantity') {
        return quantity;
    } else {
        return [];
    }
};

/*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []
