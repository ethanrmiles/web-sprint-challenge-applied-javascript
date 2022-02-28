import axios from "axios";
const Card = (article) => {
  const cardObj = document.createElement('div');
  const headlineObj = document.createElement('div');
  const authorDiv = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const authorName = document.createElement('span');

  imgContainer.appendChild(img);
  authorDiv.appendChild(imgContainer);
  authorDiv.appendChild(authorName);
  cardObj.appendChild(headlineObj);
  cardObj.appendChild(authorDiv)

cardObj.classList.add('card');
headlineObj.classList.add('headline');
authorDiv.classList.add('author');
imgContainer.classList.add('img-container');

// headlineObj.textContent = article.headline
// authorName.textContent = article.authorName
// img.src = article.authorPhoto


  return cardObj
}
// const fakeData = {id: '5efa1378-c91f-49eb-9955-02e477c95920', headline: 'Bootstrap 5: Get a Sneak Peak at all the New Features', authorPhoto: 'https://tk-assets.lambdaschool.com/1891c758-b3f4-4ec7-9d88-590bf7c7ceb2_fido.jpg', authorName: 'FIDO WALKSALOT'}

// document.querySelector('.cards-container').appendChild(Card(fakeData))

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios.get('http://localhost:5000/api/articles')
  .then(resp =>
    console.log(resp.data.articles))
    .catch(err => console.error(err))
}

export { Card, cardAppender }


