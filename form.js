// form.js
document.getElementById('registrationForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const dob = document.getElementById('dob').value;
  const source = document.querySelector('input[name="source"]:checked').value;

  const formData = {
      fullName: fullName,
      email: email,
      dob: dob,
      source: source
  };

  console.log(formData);

  // Надсилання даних на сервер (припустимо, що у тебе є бекенд-адреса)
  fetch('/submit', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
  })
  .then(response => response.json())
  .then(data => {
      alert('Registration successful!');
      console.log('Success:', data);
  })
  .catch((error) => {
      console.error('Error:', error);
  });
});