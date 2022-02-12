const Card = (article) => {
//   const cardObj = document.createElement('div');
//   const headline = document.createElement('div');
//   const authorDiv = document.createElement('div');
//   const imgContainer = document.createElement('div');
//   const img = document.createElement('img');
//   const authorName = document.createElement('span');

//   imgContainer.appendChild(img);
//   authorDiv.appendChild(imgContainer);
//   authorDiv.appendChild(authorName);
//   cardObj.appendChild(headline);
//   cardObj.appendChild(authorDiv)

// cardObj.classList.add('card');
// headline.classList.add('headline');
// authorDiv.classList.add('author');
// imgContainer.classList.add('img-container');

// headline.textContent = ${headline}
// authorName.textContent = ${authorName}
// img.src = imageURL;


// console.log(cardObj)
//   return cardObj
}

Card();

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
