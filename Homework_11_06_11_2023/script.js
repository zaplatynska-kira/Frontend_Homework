/*
    Необходимо создать объект stock, представляющий собой склад нашей продукции:

    1. totalCost: 0 // итоговая стоимость всех продуктов
    2. addItem() // добавление товара на склад
    3. removeItem() // удаление товара со склада
    4. updateTotalCost() // обновляет значение totalCost

    item => {name, price, quantity}
*/

const stock = {
    items: [], // 
    totalCost: 0,
    addItem(item) {
        // Проверяем наличие товара на складе
        const existingItem = this.items.find(e => e.name === item.name);
        // Если товар на складе - изменяем кол-во и цену
        if (existingItem) {
            existingItem.quantity += item.quantity;
            existingItem.price =
                existingItem.price < item.price
                    ? item.price : existingItem.price;
        // Если товара на складе нет - добавляем
        } else {
            this.items.push(item);
        };
        this.updateTotalCost();
    },
    removeItem(itemName, count) {
        // Находим индекс искомого элемента в массиве
        const index = this.items.findIndex(e => e.name === itemName); // index or -1
        // Если лемент в массиве есть - удаляем его
        if (index !== -1 && count <= this.items[index].quantity) {
            count === this.items[index].quantity ? this.items.splice(index, 1) : this.items[index].quantity -= count;
            this.updateTotalCost();
        } else {
            console.log("Товара недостаточно на складе для списания, либо товара на складе нет");
        }
    },
    updateTotalCost() {
        // Итоговая стоимость всех товаров на складе
        this.totalCost = this.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        console.log(this.totalCost);
    }
}

add.onclick = addHandler;

function addHandler() {
    const name = productName.value.trim();
    const price = +productPrice.value;
    const quantity = +productQuantity.value;

    if (name && price && quantity) {
        stock.addItem({name, price, quantity});
    };

    productList.innerHTML = '';

    stock.items.forEach(e => {
        const li = document.createElement('li');
        li.textContent = `
            Product name: ${e.name},
            Product price: ${e.price},
            Quantity of product: ${e.quantity}
        `;
        productList.appendChild(li);
    })
}

stats.onclick = function() {
    // Кол-во позиций
    // Итоговая стоимость всех продуктов
    // Итоговое кол-во всех продуктов
    // Максимальная цена
    // Минимальная цена
    // Средняя цена
    if (stock.items.length) {
        const itemsQuantity = stock.items.length; // Кол-во позиций или длина массива
        const totalCost = stock.totalCost;
        const totalQuantity = stock.items.reduce((acc, item) => acc + item.quantity, 0);

        // 1. Math.max(...[{name: 'a', price: 30}, {name: 'a', price: 50}].map(e => e.price))      =>     50;
        const maxPrice = Math.max(...stock.items.map(e => e.price));
        
        const minPrice = stock.items.reduce((min, item) => item.price < min ? item.price : min, Number.MAX_VALUE);

        const avgPrice = totalCost / totalQuantity;

        statsList.innerHTML = `
            <li>
                <p>Number of items: ${itemsQuantity}</p>
                <p>Total cost: ${totalCost}</p>
                <p>Total Quantity: ${totalQuantity}</p>
                <p>Min price: ${minPrice}</p>
                <p>Avg price: ${avgPrice}</p>
                <p>Max price: ${maxPrice}</p>
            </li>
        `
    }
}

// stock.addItem({name: 'milk', price: 2, quantity: 1});
// stock.updateTotalCost();
// console.log(stock.items);

// stock.addItem({name: 'milk', price: 2, quantity: 1});
// stock.updateTotalCost();
// console.log(stock.items);

// stock.addItem({name: 'milk', price: 3, quantity: 3});
// stock.updateTotalCost();
// console.log(stock.items);

// stock.addItem({name: 'bread', price: 1, quantity: 5});
// stock.updateTotalCost();
// console.log(stock.items);

// stock.removeItem('milk', 7);
// stock.updateTotalCost();
// console.log(stock.items);