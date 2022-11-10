const container =  document.querySelector('.container');
const createNewButton = document.querySelector('.size');
const rainbow = document.querySelector('.rainbow');
const lines = document.querySelector('.lines');
const shade = document.querySelector('.shade');
let numInputSize = 256;
createNewButton.addEventListener('click', changeSize);
rainbow.addEventListener('click', changeRainbow);
lines.addEventListener('click', toggleLines)


function makeGrid() {
    for (let i = 1; i < 257; i++){
        const div = document.createElement('div');
        div.classList.add('box');
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = "grey";
        });
        container.appendChild(div);
    }

}

function changeSize(){
    getSize();
    container.style.gridTemplateColumns = `repeat(${numInputSize}, 1fr)`;
    removeGrid();
    createNew();
    if(!isNaN(numInputSize)){
        document.querySelector('.resolution').textContent = `${numInputSize}x${numInputSize}`;
    }
    
 
}
function changeRainbow(){
    getSize();
    container.style.gridTemplateColumns = `repeat(${numInputSize}, 1fr)`;
    removeGrid();
    createRainbow();
    if(!isNaN(numInputSize)){
        document.querySelector('.resolution').textContent = `${numInputSize}x${numInputSize}`;
    }
}



function removeGrid(){
    document.querySelectorAll('.box').forEach(e => e.remove());
    
}

function getSize(){
    const inputSize = prompt('Size of grid');
    numInputSize = parseInt(inputSize);
    if (isNaN(numInputSize) || (numInputSize < 1 || numInputSize > 100)){
        const error = document.createElement('div');
        const body = document.querySelector('body');
        error.textContent = "Please input a number";
        error.style.fontSize = "30px";
        error.style.fontWeight = "bold";
        error.style.textAlign = "center";
    
        body.append(error);
    } else {
        return numInputSize;
    }
    
}

function createNew(){
    for (let i = 1; i < (numInputSize*numInputSize)+1; i++){
        const div = document.createElement('div');
        div.classList.add('box');
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = "grey";
        });
        container.appendChild(div);
    }
}

function createRainbow(){
    for (let i = 1; i < (numInputSize*numInputSize)+1; i++){
        const div = document.createElement('div');
        div.classList.add('box');
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        console.log(randomColor);

        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = `#${randomColor}`;
        });
        container.appendChild(div);
    }
}



function toggleLines(){
    const divBorder = document.querySelectorAll('.box');
    divBorder.forEach((div) => div.style.border = div.style.border === 'none' ? '' : 'none');
        
}



// function changeBoxColor(){
//     div.style.backgroundColor = "red"
// }

makeGrid();