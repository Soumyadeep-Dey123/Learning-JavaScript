const parentDiv = document.querySelector('.parent')
console.log(parentDiv) // Prints the div with parent class
console.log(parentDiv.children) // Prints HTMLCollection -> which is an array of items under the parentDiv variable -> containing the div with parent class
console.log(parentDiv.children[1]) //Prints Tuesday -> Refer test.html


//To print all the innerHTML 
for (let i=0; i<parentDiv.children.length; i++){
	console.log(parentDiv.children[i].innerHTML) 
}

