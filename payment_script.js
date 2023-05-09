function submitPaymentForm(event) {
	event.preventDefault(); 

	var cardNumber = document.getElementById('cardNumber').value;
	var cardName = document.getElementById('cardName').value;
	var expiryDate = document.getElementById('expiryDate').value;
	var cvv = document.getElementById('cvv').value;
	var billingAddress = document.getElementById('billingAddress').value;
	var email = document.getElementById('email').value;

	if (cardNumber === '' || cardName === '' || expiryDate === '' || cvv === '' || billingAddress === '' || email === '') {
		alert('Please fill in all the fields');
		return;
	}

	alert('Payment details submitted successfully!');
	document.getElementById('cardNumber').value = '';
	document.getElementById('cardName').value = '';
	document.getElementById('expiryDate').value = '';
	document.getElementById('cvv').value = '';
	document.getElementById('billingAddress').value = '';
	document.getElementById('email').value = '';
}