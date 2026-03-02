1. By getElementById, we can select a specific element and what we like to do with that element. "getElementsByClassName" is used to create an array-like object of those elements contains that class. "querySelector" create an array and returns the first element of that array. On the otherhand, "querySelectorAll" returns an array of elements using a common selector.

2. step-1: select the container where I want to insert the new element.
   step-2: create a new element by using "const newElement = document.createElement(element)"
   step-3: "newElement.innerHTML = ``;" if needed write the inside html codes.
   step-4: append the new element into the container

3. It is mechanism of JS by which an event triggered in a child element is deligated all the way upwards to its parent in th DOM. When a event is triggered in the child element, it starts at the top and travels all the way to the bottom to that event. Then it gradually find its way to the parent it need to go.

4. Event Delegation is the process to handle event listeners precisely. When we include an event listener to a parent, through it we can easliy handle multiple events from the child. So, we don't need to use multiple listeners for a single parent. Code looks cleaner.

5. The main difference is that, event.preventDefault() stops the default behavior of the browser, but event.stopPropagation() stops the event to travel through the whole DOM.