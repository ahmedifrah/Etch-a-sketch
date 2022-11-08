const container =  document.querySelector('.container');

function makeGrid() {
    for (let i = 1; i < 257; i++){
        const div = document.createElement('div');
        div.classList.add(`box${i}`);
        div.textContent = ('hello');
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


