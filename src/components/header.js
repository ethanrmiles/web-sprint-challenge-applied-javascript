const Header = (title, date, temp) => {
  const headerDiv = document.createElement('div');
  const titleObj = document.createElement('h1')
  const dateObj = document.createElement('span');
  const tempObj = document.createElement('span');
  
  titleObj.textContent = title;
  dateObj.textContent = date;
  tempObj.textContent = temp;

  headerDiv.appendChild(titleObj);
  headerDiv.appendChild(dateObj);
  headerDiv.appendChild(tempObj);

  headerDiv.classList.add('header');
  dateObj.classList.add('date');
  titleObj.classList.add('temp');

return headerDiv;
}

const headerAppender = (selector) => {
 document.querySelector(selector).appendChild(Header('Lambda Times', 'February 11, 2022', '73º'));
}

export { Header, headerAppender }
