const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', updateOrder);
});

const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', searchItems);

function updateOrder() {
  const orderList = document.getElementById('order-list');
  const totalPrice = document.getElementById('total-price');
  let total = 0;

  orderList.innerHTML = '';

  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      const itemName = checkbox.parentNode.textContent.trim();
      const itemPrice = parseFloat(checkbox.dataset.price);
      total += itemPrice;
      const listItem = document.createElement('li');
      listItem.textContent = itemName;
      orderList.appendChild(listItem);
    }
  });

  totalPrice.textContent = total.toFixed(2);
}

function searchItems() {
  const searchQuery = searchInput.value.toLowerCase();
  checkboxes.forEach(checkbox => {
    const itemName = checkbox.parentNode.textContent.trim().toLowerCase();
    if (itemName.includes(searchQuery)) {
      checkbox.parentNode.style.display = 'block';
    } else {
      checkbox.parentNode.style.display = 'none';
    }
  });
}

const orderForm = document.getElementById('order-form');
orderForm.addEventListener('submit', placeOrder);

function placeOrder(event) {
  event.preventDefault();
  alert('Order placed successfully!');
}
