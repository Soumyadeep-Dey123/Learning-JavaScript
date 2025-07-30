// EVENTS IN JAVASCRIPT
//
//
// MOST IMPORTANT FUNCTION -> addEventListener()    
//
//
// How all these work?


    // document.getElementById('mainDiv').addEventListener('click',(e)=>{ // -> selects element with id=mainDiv and listens if it is clicked 
    //   alert("You clicked the mainDiv") // -> shows this alert when it is clicked
    //   e.stopPropagation() // Stops event Propagation
    // },false);
    //

// Important events :
// type -> keyboard events / any button which is clicked on mouse or keyboard
// timestamp -> used for time related events
// preventDefault -> default activities can be prevented if used 
// target, toELement, srcElement
// clientX, clientY, screenX, screenY, tiltX, tiltY -> to track positions 
//
// for special keys : altkey, shiftkey, ctrlkey, keyCode
//
// Event Propagation 
// |--> Event bubling 
// |     |--> mostly used widely
// |     |--> To use this method, use 'false' keyword after function definition inside of addEventListener -> false is default
// |     |--> follows a bottom up approach (element gets clicked -> gives a resposne -> parent element gives a resposne)
// |--> Event Capturing 
// |     |--> follows a top up approach (element gets clicked -> parent element gives a resposne -> element gives a resposne only after that)
// |     |--> To use this methof, use 'true' keyword after function definition inside of addEventListener 
// |
// |--> can be terminated using stopPropagation() function
//       |--> depending on what kind of Propagation is used (i.e. true/false), the resposne will either be that of the parent element or the child element
//
// SOMETHING INTERESTING

document.getElementById('mainDiv').addEventListener('dblclick',(e)=>{ 
  e.target.remove() 
},false);


