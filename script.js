const items = [
  { name: 'Macbook Neo Pro Air', tag: 'Tech', icon: 'MB', price: '$1,299' },
  { name: 'iPhone 13', tag: 'Phone', icon: '13', price: '$699' },
  { name: 'iPhone 14', tag: 'Phone', icon: '14', price: '$799' },
  { name: 'iPhone 15', tag: 'Phone', icon: '15', price: '$899' },
  { name: 'iPhone 16', tag: 'Phone', icon: '16', price: '$999' },
  { name: 'iPhone 17', tag: 'Phone', icon: '17', price: '$1,099' },
  { name: 'iPhone 18', tag: 'Phone', icon: '18', price: '$1,199' },
  { name: 'iPhone Duo', tag: 'Phone', icon: 'DU', price: '$1,499' },
  { name: 'iPad Mini', tag: 'Tablet', icon: 'IP', price: '$499' },
  { name: 'iPad Air', tag: 'Tablet', icon: 'IA', price: '$599' },
  { name: 'iPad Pro', tag: 'Tablet', icon: 'IP', price: '$899' },
  { name: 'iPad A16', tag: 'Tablet', icon: 'A16', price: '$329' },
  { name: 'Brita', tag: 'Home', icon: 'BR', price: '$29' },
  { name: 'School Bags', tag: 'School', icon: 'SB', price: '$39' },
  { name: 'Adidas Sweatpants', tag: 'Fashion', icon: 'AS', price: '$49' },
  { name: 'Adidas Clothes', tag: 'Fashion', icon: 'AC', price: '$59' },
  { name: 'Nike Hoodies', tag: 'Fashion', icon: 'NH', price: '$64' },
  { name: 'Nike Shoes', tag: 'Fashion', icon: 'NS', price: '$89' },
  { name: 'Adidas Hoodies and Shirts', tag: 'Fashion', icon: 'AH', price: '$79' },
  { name: 'Pencils', tag: 'School', icon: 'PN', price: '$8' },
  { name: 'Mechanical Pencils', tag: 'School', icon: 'MP', price: '$12' },
  { name: 'Meta Pens', tag: 'School', icon: 'ME', price: '$15' },
  { name: 'Books', tag: 'Reading', icon: 'BK', price: '$18' }
];

const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const itemCount = document.getElementById('itemCount');

function renderItems(list) {
  productGrid.innerHTML = '';

  list.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'product-card';

    card.innerHTML = `
      <div class="product-visual">${item.icon}</div>
      <span class="product-tag">${item.tag}</span>
      <h4>${item.name}</h4>
      <div class="product-meta">
        <span class="price">${item.price}</span>
        <button class="add-btn">Add</button>
      </div>
    `;

    productGrid.appendChild(card);
  });

  itemCount.textContent = `${list.length} ${list.length === 1 ? 'item' : 'items'}`;
}

function filterItems(query) {
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    renderItems(items);
    return;
  }

  const filtered = items.filter((item) =>
    item.name.toLowerCase().includes(normalized)
  );

  renderItems(filtered);
}

searchInput.addEventListener('input', (event) => {
  filterItems(event.target.value);
});

renderItems(items);
