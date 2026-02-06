console.log('products.js loaded');

document.addEventListener('DOMContentLoaded', () => {
  loadProducts();
});

async function loadProducts() {
  const res = await fetch('/api/products');
  const products = await res.json();

  const list = document.getElementById('product-list');
  list.innerHTML = '';

  products.forEach(product => {
    const li = document.createElement('li');
    li.className = 'product-card';

    li.innerHTML = `
      <h3>${product.name}</h3>
      <div class="price">$${product.price}</div>
      <p>${product.description}</p>

      <button type="button" onclick="editProduct('${product._id}')">Edit</button>
      <button type="button" class="delete-btn"
        onclick="deleteProduct('${product._id}')">Delete</button>
    `;

    list.appendChild(li);
  });
}

async function addProduct() {
  const name = document.getElementById('name').value.trim();
  const price = document.getElementById('price').value.trim();
  const description = document.getElementById('description').value.trim();

  if (!name || !price || !description) {
    alert('All fields are required');
    return;
  }

  await fetch('/api/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, price, description })
  });

  document.getElementById('name').value = '';
  document.getElementById('price').value = '';
  document.getElementById('description').value = '';

  loadProducts();
}

async function deleteProduct(id) {
  await fetch(`/api/products/${id}`, { method: 'DELETE' });
  loadProducts();
}

async function editProduct(id) {
  const newName = prompt('Enter new product name:');
  const newPrice = prompt('Enter new price:');
  const newDescription = prompt('Enter new description:');

  if (!newName || !newPrice || !newDescription) return;

  await fetch(`/api/products/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: newName, price: newPrice, description: newDescription })
  });

  loadProducts();
}
