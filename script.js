const container =  document.querySelector('.container');
const button = document.querySelector('.size');
let numInputSize = 256;
button.addEventListener('click', changeSize);

function makeGrid() {
    for (let i = 1; i < 257; i++){
        const div = document.createElement('div');
        div.classList.add('box');
        // div.textContent = (`${i}`);
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
    document.querySelector('.resolution').textContent = `${numInputSize}x${numInputSize}`;
 


}
function removeGrid(){
    document.querySelectorAll('.box').forEach(e => e.remove());
}

function getSize(){
    const inputSize = prompt('Size of grid');
    numInputSize = parseInt(inputSize);
    return numInputSize;
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



// function changeBoxColor(){
//     div.style.backgroundColor = "red"
// }

makeGrid();