// Challenge: 
// 1. Update text in the Scrimba mini-browser to match the title of this cast
// 2. Create an h2 with class 'tagline' and text "I can create HTML elements!"
// Add it right under the modified text.

const newTagline = document.querySelector('h1')
newTagline.innerHTML = "creating and modifying htmk element"

const tagLine = document.createElement('h2');
tagLine.className = 'tagLine';

tagLine.innerHTML = ' I can write html elements';

newTagline.append(tagLine);