const Tabs = (topics) => {
  const tabsDiv = document.createElement('div');
  const tabItems = document.createElement('div');
  
  tabItems.classList.add('tab');
  tabsDiv.classList.add('topics');

topics.forEach(topic => {
 const content = topic
 tabItems.textContent = content
  console.log("content", tabItems);
})
  return tabsDiv;
}
// Tabs(['a', 'b'])
Tabs(['javascript', 'bootstrap', 'technology'])

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
