const form = document.getElementById('form');
const email = document.getElementById('email');

function checkEmail(input) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const errorMessage = email.nextElementSibling;
	if (!re.test(input.value.trim())) {
		errorMessage.classList.add('error');
		setTimeout(() => {
			errorMessage.classList.remove('error');
		}, 3000);
	}
}

form.addEventListener('submit', function (e) {
	e.preventDefault();
	console.log('hello from event listener');
	checkEmail(email);
});
