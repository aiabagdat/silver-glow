console.log('products.js loaded');

document.addEventListener('DOMContentLoaded', () => {
  loadProducts();
});

// делаем функции доступными для onclick из HTML
window.addProduct = addProduct;
window.deleteProduct = deleteProduct;
window.editProduct = editProduct;

async function loadProducts() {
  try {
    const res = await fetch('/api/products');

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`GET /api/products failed: ${res.status} ${text}`);
    }

    const products = await res.json();

    const list = document.getElementById('product-list');
    if (!list) throw new Error('Element #product-list not found in products.html');

    list.innerHTML = '';

    products.forEach(product => {
      const li = document.createElement('li');
      li.className = 'product-card';

      li.innerHTML = `
        <h3>${product.name}</h3>
        <div class="price">$${product.price}</div>
        <p>${product.description}</p>

        <button type="button" onclick="editProduct('${product._id}')">Edit</button>
        <button type="button" class="delete-btn" onclick="deleteProduct('${product._id}')">
          Delete
        </button>
      `;

      list.appendChild(li);
    });
  } catch (err) {
    console.error(err);
    alert('Failed to load products. Open Console for details.');
  }
}

async function addProduct() {
  const name = document.getElementById('name').value.trim();
  const priceRaw = document.getElementById('price').value.trim();
  const description = document.getElementById('description').value.trim();

  if (!name || !priceRaw || !description) {
    alert('All fields are required');
    return;
  }

  const price = Number(priceRaw);
  if (Number.isNaN(price)) {
    alert('Price must be a number');
    return;
  }

  const res = await fetch('/api/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, price, description })
  });

  if (!res.ok) {
    const text = await res.text();
    alert(`Create failed: ${res.status} ${text}`);
    return;
  }

  document.getElementById('name').value = '';
  document.getElementById('price').value = '';
  document.getElementById('description').value = '';

  loadProducts();
}

async function deleteProduct(id) {
  const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });
  if (!res.ok) {
    const text = await res.text();
    alert(`Delete failed: ${res.status} ${text}`);
    return;
  }
  loadProducts();
}

async function editProduct(id) {
  const newName = prompt('Enter new product name:');
  const newPriceRaw = prompt('Enter new price:');
  const newDescription = prompt('Enter new description:');

  if (!newName || !newPriceRaw || !newDescription) return;

  const newPrice = Number(newPriceRaw);
  if (Number.isNaN(newPrice)) {
    alert('Price must be a number');
    return;
  }

  const res = await fetch(`/api/products/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: newName, price: newPrice, description: newDescription })
  });

  if (!res.ok) {
    const text = await res.text();
    alert(`Update failed: ${res.status} ${text}`);
    return;
  }

  loadProducts();
}
