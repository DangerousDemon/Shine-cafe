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
    { name: 'Milk Tea', category: 'tea', price: 5, image: 'milk_tea.jpg', description: 'A creamy and comforting tea.', outOfStock: false },
    { name: 'Coca Cola', category: 'soft-drinks', price: 15, image: 'coca_cola.jpg', description: 'A classic carbonated beverage.', outOfStock: false },
    { name: 'Sprite', category: 'soft-drinks', price: 15, image: 'sprite.jpg', description: 'A refreshing lemon-lime soda.', outOfStock: false },
    { name: 'Fanta Orange', category: 'soft-drinks', price: 15, image: 'fanta_orange.jpg', description: 'A classic orange soda.', outOfStock: false },
    { name: 'Fanta Strawberry', category: 'soft-drinks', price: 15, image: 'fanta_strawberry.jpg', description: 'A classic strawberry soda.', outOfStock: false },
    { name: '500ml Water', category: 'water', price: 5, image: '500ml_water.jpg', description: '500ml bottled water.', outOfStock: false },
    { name: '1500ml Water', category: 'water', price: 10, image: '1500ml_water.jpg', description: '1.5L bottled water.', outOfStock: false },
    { name: 'Redbull', category: 'energy-drinks', price: 45, image: 'redbull.jpg', description: 'Redbull energy drink.', outOfStock: false },
    { name: 'XL Mini', category: 'energy-drinks', price: 20, image: 'xl_mini.jpg', description: 'XL Mini energy drink.', outOfStock: false },
    { name: 'XL 250ml', category: 'energy-drinks', price: 30, image: 'xl_250ml.jpg', description: 'XL 250ml energy drink.', outOfStock: false },
    { name: 'Chocolate Ice Cream', category: 'ice-cream', price: 10, image: 'ice_cream_chocolate.jpg', description: 'Rich and decadent chocolate ice cream.', outOfStock: false },
    { name: 'Strawberry Ice Cream', category: 'ice-cream', price: 10, image: 'ice_cream_strawberry.jpg', description: 'Sweet and refreshing strawberry ice cream.', outOfStock: false },
    { name: 'Vanilla Ice Cream', category: 'ice-cream', price: 10, image: 'ice_cream_vanilla.jpg', description: 'Classic and creamy vanilla ice cream.', outOfStock: false },
    { name: 'Pistachio Ice Cream', category: 'ice-cream', price: 15, image: 'ice_cream_pistachio.jpg', description: 'A nutty and flavorful ice cream.', outOfStock: false },
    { name: 'Bavarian Chocolate Ice Cream', category: 'ice-cream', price: 20, image: 'ice_cream_bavarian_chocolate.jpg', description: 'A rich and decadent chocolate ice cream with a Bavarian twist.', outOfStock: false },
    { name: 'Three Cheers Chocolate Ice Cream', category: 'ice-cream', price: 20, image: 'ice_cream_three_cheers_chocolate.jpg', description: 'A triple chocolate indulgence.', outOfStock: false },
    { name: 'Cotton Candy Ice Cream', category: 'ice-cream', price: 20, image: 'ice_cream_cotton_candy.jpg', description: 'A sweet and fluffy ice cream.', outOfStock: false },
    { name: 'Mango Ice Cream', category: 'ice-cream', price: 15, image: 'ice_cream_mango.jpg', description: 'A refreshing and tropical ice cream.', outOfStock: false },
    { name: 'Fruit & Nuts Ice Cream', category: 'ice-cream', price: 15, image: 'ice_cream_fruit_nuts.jpg', description: 'A delicious combination of fruits and nuts.', outOfStock: false },
    { name: 'Sugar Cone', category: 'cones', price: 5, image: 'sugar_cone.jpg', description: 'Sugar cone for ice cream.', outOfStock: false },
    { name: 'Normal Cone', category: 'cones', price: 0, image: 'normal_cone.jpg', description: 'Normal cone for ice cream.', outOfStock: false },
    { name: 'Kulhi Boakiba', category: 'short-eats', price: 5, image: 'kulhi_boakiba.jpg', description: 'A delicious Maldivian fish cake.', outOfStock: false },
    { name: 'Kavaabu', category: 'short-eats', price: 3, image: 'kavaabu.jpg', description: 'Deep-fried fritters made with fish and spices.', outOfStock: false },
    { name: 'Mas Roshi', category: 'short-eats', price: 5, image: 'mas_roshi.jpg', description: 'A traditional Maldivian fish flatbread.', outOfStock: false },
    { name: 'Bajiya', category: 'short-eats', price: 5, image: 'Bajiya.jpg', description: 'A savory pastry filled with fish, coconut, and spices.', outOfStock: false },
    { name: 'Rolls', category: 'short-eats', price: 3, image: 'rolls.jpg', description: 'Fried rolls filled with vegetables or meat.', outOfStock: false },
    { name: 'Sausage', category: 'short-eats', price: 5, image: 'sausage.jpg', description: 'Grilled or fried sausages.', outOfStock: false },
    { name: 'Kanamadu Cafe', category: 'short-eats', price: 20, image: 'kanamadu_cafe.jpg', description: 'A delicious Maldivian dessert made with Sea Almonds.', outOfStock: false },
    { name: 'Butter Cake', category: 'short-eats', price: 10, image: 'butter_cake.jpg', description: 'A rich and moist butter cake.', outOfStock: false },
    { name: 'Muffin', category: 'short-eats', price: 10, image: 'muffin.jpg', description: 'A fluffy and sweet chocolate muffin.', outOfStock: false },
    { name: 'Pudding Caramel', category: 'short-eats', price: 10, image: 'pudding_caramel.jpg', description: 'A creamy caramel pudding.', outOfStock: false },
    { name: 'Boiled Egg', category: 'short-eats', price: 5, image: 'boiled_egg.jpg', description: 'A simple and nutritious boiled egg.', outOfStock: false },
{ name: 'Coke Float', category: 'soft-drinks', price: 30, image: 'coke_float.jpg', description: 'A refreshing combination of Coca-Cola and ice cream.', outOfStock: false },
{ name: 'Sandwich', category: 'short-eats', price: 6, image: 'Sandwich.jpg', description: 'A simple and satisfying tuna sandwich.', outOfStock: false },
{ name: 'Pancake', category: 'short-eats', price: 5, image: 'Pancake.jpg', description: 'Fluffy pancakes, golden brown and buttery soft.', outOfStock: false },
{ name: 'Keemiya', category: 'short-eats', price: 3, image: 'Keemiya.jpg', description: 'a popular Maldivian snack,  filled with savory ingredients.', outOfStock: false },
{ name: 'Sausage Rolls', category: 'short-eats', price: 3, image: 'Sausage_Rolls.jpg', description: 'A savory snack with a crispy pastry.', outOfStock: false },
{ name: 'juice', category: 'soft-drinks', price: 5, image: 'juice.jpg', description: 'Refreshing drink.', outOfStock: false },
{ name: 'Chocolate Cake', category: 'short-eats', price: 10, image: 'Chocolate_cake.jpg', description: 'Decadent chocolate cake, moist and fudgy.', outOfStock: false }

]

function filterMenu(category) {
    const filteredItems = category === 'all' ? menuItems : menuItems.filter(item => item.category === category);
    displayMenu(filteredItems);
}

function searchMenu(query) {
    const filteredItems = menuItems.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
    displayMenu(filteredItems);
}

function displayMenu(items) {
    const menuContainer = document.getElementById('menu-items');
    menuContainer.innerHTML = '';
    if (items.length === 0) {
        menuContainer.innerHTML = '<p>No items found</p>';
        return;
    }
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
