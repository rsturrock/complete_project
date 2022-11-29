
let backgroundColor = document.querySelector('body');

let changeColorButton = document.querySelector('button');


changeColorButton.onclick = () => {

    const colorArray = ['black','grey','red','yellow','green','purple','orange','violet','pink','teal','salmon'];

    let randomIndex = Math.floor(Math.random() * colorArray.length);

    backgroundColor.style.backgroundColor = colorArray[randomIndex];
}

