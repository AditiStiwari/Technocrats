const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const contain = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	contain.classList.add("righton");
});

signInButton.addEventListener('click', () => {
	contain.classList.remove("righton");
});