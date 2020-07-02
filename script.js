let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];

snake[0] = {
  x: 8 * box,
  y: 8 * box

}

let direction = "right";


function createBG(){
  // Define a cor
  context.fillStyle = "lightgreen";
  // Desenha o retangulo 4 parametros posição x e y 
  context.fillRect(0, 0, 16 * box, 16 * box);

}

function createSnake(){
  for(i=0; i < snake.length; i++){
    context.fillStyle = "green";
    context.fillRect(snake[i].x, snake[i].y, box, box);
  }
}

function startGame(){
  createBG();
  createSnake();

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  // Se direção for "exemplo" vai adicionar um quadrado a mais

  if(direction == "right") snakeX += box;
  if(direction == "left") snakeX -= box;
  if(direction == "up") snakeY -= box;
  if(direction == "down") snakeY += box;

  // Retira o último elemento da array
  snake.pop();

  // Cria nova cabeça com o unshift (metodo que acrescenta o primeiro elemento)
  let newHead = {
    x: snakeX, 
    y: snakeY
  }

  snake.unshift(newHead);
  

}

// Renova a função a cada 100 milesegundos
let game = setInterval(startGame, 100);


