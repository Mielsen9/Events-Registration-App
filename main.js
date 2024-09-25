// create eventItem
function createCard(title, description, registerLink, viewLink) {
  // creating the main element of the card
  const card = document.createElement('div');
  card.classList.add('card');

  // card title
  const cardTitle = document.createElement('h3');
  cardTitle.textContent = title;

  // card description
  const cardDescription = document.createElement('p');
  cardDescription.textContent = description;

  // link "Register"
  const register = document.createElement('a');
  register.href = registerLink;
  register.textContent = 'Register';

  // link "View"
  const view = document.createElement('a');
  view.href = viewLink;
  view.textContent = 'View';

  // add element to card
  card.appendChild(cardTitle);
  card.appendChild(cardDescription);
  card.appendChild(register);
  card.appendChild(view);

  // add card to conteiner
  document.getElementById('card-container').appendChild(card);
}

// call function to create a card
createCard('Title', 'description', '#register', '#view');
createCard('Title', 'description', '#register', '#view');
createCard('Title', 'description', '#register', '#view');
createCard('Title', 'description', '#register', '#view');
createCard('Title', 'description', '#register', '#view');
createCard('Title', 'description', '#register', '#view');
createCard('Title', 'description', '#register', '#view');
createCard('Title', 'description', '#register', '#view');
createCard('Title', 'description', '#register', '#view');
createCard('Title', 'description', '#register', '#view');
createCard('Title', 'description', '#register', '#view');
createCard('Title', 'description', '#register', '#view');