# DOM in javascript
![DOM Illustration](..\images\dom-intro.png)


## A few important functions to use in dom manipulation

1. **getElementById** -> fetches an html element by id -> returns the whole html tag section

*Syntax* :
```javascript
const elementById = document.getElementById(*paramaters*) //stores the whole element as an object in elementById

console.log(elementById.id) //Prints the id that was sent in the paramaters

console.log(elementById.getAttribute('class')) //Prints class of that element

elementById.setAttribute('class', 'text-white bg-black') //Sets the class to text-white and bg-black

elementById.style.backgroundColor = "green" //Sets the background color to green
```

*All these things can be added via the console in the browser very effortlessly. getElementById has a lot of inbuilt functions which can be called to refer to that element in the document.*


>getElementById().class doesnt return any class name. Rather, getElementById().className returns the class name. That is how document understands as class name, instead of understanding class. More in it in jsx files.

2. **textContent / innerHTML / innerText** -> fetches data/text present within the element

*Syntax* :
```javascript

const elementById = document.getElementById(*paramaters*) //stores the whole element as an object in elementById

elementById.innerHTML // -> gives all the html content inside of the element

elementById.innerText // -> specifically returns the text content inside of the element 

```

**For example :**

#### Reference HTML section
```html
<div id="mainDiv">
    <p>
        Hello World! This is a paragraph!
    </p>
    <div id="secondDiv">
        <p>
            Hello World! This is a Second paragraph within a nested div!
        </p>
    </div>
</div>
```
 
For the previous html document :

```javascript
const elementById = document.getElementById('mainDiv') //stores the whole div as an object in elementById

elementById.innerHTML 
// |-> returns -> 
//    <p>
//       Hello World! This is a paragraph!
//   </p>
//   <div id="secondDiv">
//       <p>
//           Hello World! This is a Second paragraph within a nested div!
//       </p>
//   </div>

elementById.innerText 
// -> returns Hello World! This is a paragraph! Hello World! This is a Second paragraph within a nested div!

// Allbeit in String format only!!
```

3. **querySelector(`paramaters`) / querySelectorAll(`paramaters`)**   
    -> where `paramaters` can be html tags, ids, classes   
    -> pulls out the element with that particular tag/id/class   
    -> paramaters = selectors  

*Syntax :*
```javascript
document.querySelector('.heading') 
// -> returns that section of the file / that element of the dom tree with class `heading`
// -> will only return the first element it finds which meets the argument (here, class heading)  

document.querySelectorAll('input[type="password"]') 
// -> returns all those input elements which are of type password
```

>Selector should be how we write css selectors

**Special Mention :**
```
const mainDiv = document.querySelector('#mainDiv')
mainDiv.parentElement //-> returns the whole [Html doc](#reference-html-section)

console.log(mainDiv.childNodes) 
// -> prints a complex tree structure of whats inside div of the div with id = 'mainDiv'  
// -> even comments, linebreaks and everything within that html document is taken into consideration
```

3. **createElement :** -> creates an element

*Synatx :*
```javascript
const div = document.createElement('div')

//setting attribute
div.className="bg-grey"
div.id="newDiv"
div.setAttribute("title", "generated div") //preffered the most
//similarly, can add styles as well
div.innerText="This is a generated div"
const addText = document.createTextNode("Hello! using createTextNode")
div.appendChild(addText)

//to attach it to body
document.body.appendChild(div) 

// can also use getElementById to attach it under a certain element/div/section as well

```
