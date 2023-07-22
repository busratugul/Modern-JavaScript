const div = document.createElement('div');
//oluşturmak istediğimiz element türünü girmeliyiz.
div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'My Element');
//özellik eklemek

// div.innerText = 'Hello World';

const text = document.createTextNode('Hello World');
div.appendChild(text);

// document.body.appendChild(div);

document.querySelector('ul').appendChild(div);
