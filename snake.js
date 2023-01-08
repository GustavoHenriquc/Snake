export const SNAKE_SPEED = 4

const snakeBody = [{
    x: 11, y: 11
}]

export function update(){

}

export function draw(){
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.x
        snakeElement.style.gridColumnStart = segment.y
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}