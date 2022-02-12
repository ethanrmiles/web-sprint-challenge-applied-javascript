import axios from "axios";

const Tabs = (topics) => {
  const tabsDiv = document.createElement('div');
  tabsDiv.classList.add('topics');

topics.forEach(topic => {
 const content = topic
 const tabItems = document.createElement('div');
 tabItems.classList.add('tab');
 tabsDiv.appendChild(tabItems)
 tabItems.textContent = content
})
  return tabsDiv;
}

const tabsAppender = (selector) => {
axios.get('http://localhost:5000/api/topics')
.then(resp => {
  const injection = resp.data.topics
 const entryPoint = document.querySelector(selector)
  entryPoint.appendChild(Tabs(injection))
})
.catch(err => {
  console.error(err)
})
.finally(() => console.log('done'))
}

export { Tabs, tabsAppender }
