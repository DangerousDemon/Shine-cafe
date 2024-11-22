document.addEventListener('DOMContentLoaded', () => {
    filterMenu('all');
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', (event) => {
            filterMenu(event.target.dataset.category);
        });
    });
    document.getElementById('search-bar').addEventListener('input', (event) => {
        searchMenu(event.target.value);
    });
});

const menuItems = [
    { name: 'Lavazza Black Coffee', category: 'coffee', price: 15, image: 'lavazza_black_coffee.jpg', description: 'A strong and bold espresso base.', outOfStock: false },
    { name: 'Lavazza Milk Coffee', category: 'coffee', price: 18, image: 'lavazza_milk_coffee.jpg', description: 'Espresso with smooth and creamy milk.', outOfStock: false },
    { name: 'Nescafe Black Coffee', category: 'coffee', price: 5, image: 'nescafe_black_coffee.jpg', description: 'A classic coffee option.', outOfStock: false },
    { name: 'Nescafe Milk Coffee', category: 'coffee', price: 10, image: 'nescafe_milk_coffee.jpg', description: 'A creamy and comforting coffee drink.', outOfStock: false },
    { name: 'Nescafe Original', category: 'coffee', price: 15, image: 'nescafe_original.jpg', description: 'A classic instant coffee.', outOfStock: false },
    { name: 'Nescafe Mocha', category: 'coffee', price: 15, image: 'nescafe_mocha.jpg', description: 'A rich and chocolatey coffee drink.', outOfStock: false },
    { name: 'Nescafe Latte', category: 'coffee', price: 15, image: 'nescafe_latte.jpg', description: 'A creamy and milky coffee drink.', outOfStock: false },
    { name: 'Bombay Tea', category: 'tea', price: 10, image: 'bombay_tea.jpg', description: 'A classic Indian black tea.', outOfStock: false },
    { name: 'Cardamom Tea', category: 'tea', price: 10, image: 'cardamom_tea.jpg', description: 'A fragrant and spicy tea.', outOfStock: false },
    { name: 'Masala Tea', category: 'tea', price: 10, image: 'masala_tea.jpg', description: 'A flavorful and aromatic tea with spices.', outOfStock: false },
    { name: 'Black Tea', category: 'tea', price: 3, image: 'black_tea.jpg', description: 'A strong and bold black tea.', outOfStock: false },
    { name: 'Milk Tea', category: 'tea', price: 8, image: 'milk_tea.jpg', description: 'A creamy and comforting tea.', outOfStock: false }
    { name: 'Coca Cola', category: 'soft-drinks', price: 15, image: 'coca_cola.jpg', description: 'A classic carbonated beverage.', outOfStock: false },
    { name: 'Sprite', category: 'soft-drinks', price: 15, image: 'sprite.jpg', description: 'A refreshing lemon-lime soda.', outOfStock: false },
    { name: 'Fanta Orange', category: 'soft-drinks', price: 15, image: 'fanta_orange.jpg', description: 'A classic orange soda.', outOfStock: false },
    { name: 'Fanta Strawberry', category: 'soft-drinks', price: 15, image: 'fanta_strawberry.jpg', description: 'A classic strawberry soda.', outOfStock: false },
    { name: '500ml Water', category: 'water', price: 5, image: '500ml_water.jpg', description: '500ml bottled water.', outOfStock: false },
    { name: '1500ml Water', category: 'water', price: 10, image: '1500ml_water.jpg', description: '1.5L bottled water.', outOfStock: false },
    { name: 'Redbull', category: 'energy-drinks', price: 45, image: 'redbull.jpg', description: 'Redbull energy drink.', outOfStock: false },
    { name: 'XL Mini', category: 'energy-drinks', price: 20, image: 'xl_mini.jpg', description: 'XL Mini energy drink.', outOfStock: false },
    { name: 'XL 250ml', category: 'energy-drinks', price: 30, image: 'xl_250ml.jpg', description: 'XL 250ml energy drink.', outOfStock: false },
    { name: 'Chocolate Ice Cream', category: 'ice-cream', price: 20, image: 'ice_cream_chocolate.jpg', description: 'Rich and decadent chocolate ice cream.', outOfStock: false },
    { name: 'Strawberry Ice Cream', category: 'ice-cream', price: 20, image: 'ice_cream_strawberry.jpg', description: 'Sweet and refreshing strawberry ice cream.', outOfStock: false },
    { name: 'Vanilla Ice Cream', category: 'ice-cream', price: 20, image: 'ice_cream_vanilla.jpg', description: 'Classic and creamy vanilla ice cream.', outOfStock: false },
    { name: 'Pistachio Ice Cream', category: 'ice-cream', price: 15, image: 'ice_cream_pistachio.jpg', description: 'A nutty and flavorful ice cream.', outOfStock: false }
];

function filterMenu(category) {
    const menuContainer = document.getElementById('menu-items');
    menuContainer.innerHTML = '';
    const filteredItems = category === 'all' ? menuItems : menuItems.filter(item => item.category === category);

    let row;
    filteredItems.forEach((item, index) => {
        if (index % 3 === 0) {
            row = document.createElement('div');
            row.classList.add('menu-row');
            menuContainer.appendChild(row);
        }
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
            <div class="image-container">
                <img src="${item.image}" alt="${item.name}">
                ${item.outOfStock ? '<div class="out-of-stock-overlay">Out of Stock</div>' : ''}
            </div>
            <div class="menu-item-details">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p>Price: MVR ${item.price}</p>
            </div>
        `;
        row.appendChild(menuItem);
    });
}

function searchMenu(query) {
    const filteredItems = menuItems.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
    displayMenu(filteredItems);
}

function displayMenu(items) {
    const menuContainer = document.getElementById('menu-items');
    menuContainer.innerHTML = '';
    let row;
    items.forEach((item, index) => {
        if (index % 3 === 0) {
            row = document.createElement('div');
            row.classList.add('menu-row');
            menuContainer.appendChild(row);
        }
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
            <div class="image-container">
                <img src="${item.image}" alt="${item.name}">
                ${item.outOfStock ? '<div class="out-of-stock-overlay">Out of Stock</div>' : ''}
            </div>
            <div class="menu-item-details">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p>Price: MVR ${item.price}</p>
            </div>
        `;
        row.appendChild(menuItem);
    });
}
