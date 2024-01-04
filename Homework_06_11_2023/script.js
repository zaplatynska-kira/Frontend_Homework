/*
    Необходимо создать объект stock, представляющий собой склад нашей продукции:

    1. totalCost: 0 // итоговая стоимость всех продуктов
    2. addItem() // добавление товара на склад
    3. removeItem() // удаление товара со склада
    4. updateTotalCost // обновляет значение totalCost

    item => {name, price, quantity}
*/ 
const stock = {
    totalCost: 0,
    items: [],
    addItem: function(name, price, quantity) {
        const item = {
            name: name,
            price: price,
            quantity: quantity
        };
        this.items.push(item);
        this.updateTotalCost();
        console.log(`Product added: ${name}, Price: ${price}, Quantity: ${quantity}`);
    },

    updateTotalCost: function() {
        this.totalCost = this.items.reduce((total, item) => total + item.price * item.quantity, 0);
        console.log(`Total cost products in stock: ${this.totalCost}`);
    },

    removeItem: function(name) {
        const index = this.items.findIndex(item => item.name === name);
        if (index !== -1) {
            const removedItem = this.items.splice(index, 1)[0];
            this.totalCost -= removedItem.price * removedItem.quantity;
            console.log(`Product removed: ${removedItem.name}`);
        } else {
            console.log(`Product "${name}" not found.`);
        }
    }
};

stock.addItem('TV', 1000, 5); 
stock.addItem('Mobile phone', 200, 1); 
stock.updateTotalCost();
stock.removeItem('Printer');
stock.updateTotalCost();


