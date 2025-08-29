
Question: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: getElementById('id') returns only one id ar element by id.
        getElementsByClassName('class') returns all the element with the class.
        querySelector('selector') returns the first element that match with css selector.
        querySelectorAll('selector') returns all element that match with css selector
        


Question: How do you create and insert a new element into the DOM?
Answer:

        const newDiv = document.createElement("div");
        newDiv.innerText = "hello world";
        document.body.appendChild(newDiv); 


Question: What is Event Bubbling and how does it work?
Answer: Event bubbling is a concept in the DOM where event starts from the target element. it handles event for it's child element.

for example if a button is clicked and the button is inside the div  that button bubble to the parent div .
That’s event bubbling: event goes from child → parent → document.



Question: What is Event Delegation in JavaScript? Why is it useful?

Answer:

Event Delegation is something that attaching one event listener on a parent element to handle events for its child elements.

it is Useful because it saves memory and works even if new child elements are added dynamically.




Question: What is the difference between preventDefault() and stopPropagation() methods?
Answer:
       preventDefault() stops the default action.
       stopPropagation() stops the event from bubbling up to parent elements.
