const form = document.querySelector('#registration-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the form from submitting

  const username = form.elements.username.value;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  // perform validation checks on username, email, and password
  if (username === '' || email === '' || password === '') {
    alert('Please fill in all fields.');
    return;
  }

  // check if user already exists in Local Storage
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    alert('This username is already taken. Please choose another one.');
    return;
  }

  // create new user object and save to Local Storage
  const newUser = { username, email, password };
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));

  alert('Registration successful!');
  form.reset();
});
