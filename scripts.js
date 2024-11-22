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
    { name: 'Lavazza Black Coffee', category: 'coffee', price: 15, image: 'lavazza_black_coffee.jpg', description: 'A strong and bold espresso base.' },
    { name: 'Lavazza Milk Coffee', category: 'coffee', price: 18, image: 'lavazza_milk_coffee.jpg', description: 'Espresso with smooth and creamy milk.' },
    { name: 'Nescafe Black Coffee', category: 'coffee', price: 5, image: 'nescafe_black_coffee.jpg', description: 'A classic coffee option.' },
    { name: 'Nescafe Milk Coffee', category: 'coffee', price: 10, image: 'nescafe_milk_coffee.jpg', description: 'A creamy and comforting coffee drink.' },
    { name: 'Nescafe Original', category: 'coffee', price: 15, image: 'nescafe_original.jpg', description: 'A classic instant coffee.' },
    { name: 'Nescafe Mocha', category: 'coffee', price: 15, image: 'nescafe_mocha.jpg', description: 'A rich and chocolatey coffee drink.' },
    { name: 'Nescafe Latte', category: 'coffee', price: 15, image: 'nescafe_latte.jpg', description: 'A creamy and milky coffee drink.' },
    { name: 'Bombay Tea', category: 'tea', price: 10, image: 'bombay_tea.jpg', description: 'A classic Indian black tea.' },
    { name: 'Cardamom Tea', category: 'tea', price: 10, image: 'cardamom_tea.jpg', description: 'A fragrant and spicy tea.' },
    { name: 'Masala Tea', category: 'tea', price: 10, image: 'masala_tea.jpg', description: 'A flavorful and aromatic tea with spices.' },
    { name: 'Black Tea', category: 'tea', price: 3, image: 'black_tea.jpg', description: 'A strong and bold black tea.' },
    { name: 'Milk Tea', category: 'tea', price: 8, image: 'milk_tea.jpg', description: 'A creamy and comforting tea.' },
    { name: 'Coca Cola', category: 'soft-drinks', price: 15, image: 'coca_cola.jpg', description: 'A classic carbonated beverage.' },
    { name: 'Sprite', category: 'soft-drinks', price: 15, image: 'sprite.jpg', description: 'A refreshing lemon-lime soda.' },
    { name: 'Fanta Orange', category: 'soft-drinks', price: 15, image: 'fanta_orange.jpg', description: 'A classic orange soda.' },
    { name: 'Fanta Strawberry', category: 'soft-drinks', price: 15, image: 'fanta_strawberry.jpg', description: 'A classic strawberry soda.' },
    { name: '500ml Water', category: 'water', price: 5, image: '500ml_water.jpg', description: '500ml bottled water.' },
    { name: '1500ml Water', category: 'water', price: 10, image: '1500ml_water.jpg', description: '1.5L bottled water.' },
    { name: 'Redbull', category: 'energy-drinks', price: 45, image: 'redbull.jpg', description: 'Redbull energy drink.' },
    { name: 'XL Mini', category: 'energy-drinks', price: 20, image: 'xl_mini.jpg', description: 'XL Mini energy drink.' },
    { name: 'XL 250ml', category: 'energy-drinks', price: 30, image: 'xl_250ml.jpg', description: 'XL 250ml energy drink.' },
    { name: 'Chocolate Ice Cream', category: 'ice-cream', price: 20, image: 'ice_cream_chocolate.jpg', description: 'Rich and decadent chocolate ice cream.' },
    { name: 'Strawberry Ice Cream', category: 'ice-cream', price: 20, image: 'ice_cream_strawberry.jpg', description: 'Sweet and refreshing strawberry ice cream.' },
    { name: 'Vanilla Ice Cream', category: 'ice-cream', price: 20, image: 'ice_cream_vanilla.jpg', description: 'Classic and creamy vanilla ice cream.' },
    { name: 'Pistachio Ice Cream', category: 'ice-cream', price: 15, image: 'ice_cream_pistachio.jpg', description: 'A nutty and flavorful ice cream.' },
    { name: 'Bavarian Chocolate Ice Cream', category: 'ice-cream', price: 20, image: 'ice_cream_bavarian_chocolate.jpg', description: 'A rich and decadent chocolate ice cream with a Bavarian twist.' },
    { name: 'Three Cheers Chocolate Ice Cream', category: 'ice-cream', price: 20, image: 'ice_cream_three_cheers_chocolate.jpg', description: 'A triple chocolate indulgence.' },
    { name: 'Cotton Candy Ice Cream', category: 'ice-cream', price: 20, image: 'ice_cream_cotton_candy.jpg', description: 'A sweet and fluffy ice cream.' },
    { name: 'Mango Ice Cream', category: 'ice-cream', price: 15, image: 'ice_cream_mango.jpg', description: 'A refreshing and tropical ice cream.' },
    { name: 'Fruit & Nuts Ice Cream', category: 'ice-cream', price: 15, image: 'ice_cream_fruit_nuts.jpg', description: 'A delicious combination of fruits and nuts.' },
    { name: 'Sugar Cone', category: 'cones', price: 5, image: 'sugar_cone.jpg', description: 'Sugar cone for ice cream.' },
    { name: 'Normal Cone', category: 'cones', price: 0, image: 'normal_cone.jpg', description: 'Normal cone for ice cream.' },
    { name: 'Kulhi Boakiba', category: 'short-eats', price: 5, image: 'kulhi_boakiba.jpg', description: 'A delicious Maldivian fish cake.' },
    { name: 'Kavaabu', category: 'short-eats', price: 5, image: 'kavaabu.jpg', description: 'Deep-fried fritters made with fish and spices.' },
    { name: 'Mas Roshi', category: 'short-eats', price: 8, image: 'mas_roshi.jpg', description: 'A traditional Maldivian fish flatbread.' },
    { name: 'Bajiya', category: 'short-eats', price: 5, image: 'bajiya.jpg', description: 'A savory pastry filled with fish, coconut, and spices.' },
    { name: 'Rolls', category: 'short-eats', price: 6, image: 'rolls.jpg', description: 'Fried rolls filled with vegetables or meat.' },
    { name: 'Sausage', category: 'short-eats', price: 7, image: 'sausage.jpg', description: 'Grilled or fried sausages.' },
    { name: 'Kanamadu Cafe', category: 'short-eats', price: 12, image: 'kanamadu_cafe.jpg', description: 'A delicious Maldivian dessert made with rice and banana.' },
    { name: 'Butter Cake', category: 'short-eats', price: 10, image: 'butter_cake.jpg', description: 'A rich and moist butter cake.' },
    { name: 'Muffin', category: 'short-eats', price: 10, image: 'muffin.jpg', description: 'A fluffy and sweet muffin.' },
    { name: 'Pudding Caramel', category: 'short-eats', price: 12, image: 'pudding_caramel.jpg', description: 'A creamy caramel pudding.' },
    { name: 'Boiled Egg', category: 'short-eats', price: 5, image: 'boiled_egg.jpg', description: 'A simple and nutritious boiled egg.' },
    { name: 'Coke Float', category: 'soft-drinks', price: 25, image: 'coke_float.jpg', description: 'A refreshing combination of Coca-Cola and vanilla ice cream.' }
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
            <img src="${item.image}" alt="${item.name}">
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
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-details">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p>Price: MVR ${item.price}</p>
            </div>
        `;
        row.appendChild(menuItem);
    });
}
