let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];

snake[0] = {
  x: 8 * box,
  y: 8 * box

}

let direction = "right";

// Math floor retira a parte flutuante do random, já o random retorna sempre um
// número aleatória até 1 , gera número aleatório tirando "," depois do número
// seta o tamanho do canvas pra ele não ultrapaçar a área do game
let food = {
  x: Math.floor(Math.random() * 15 + 1) * box,
  y: Math.floor(Math.random() * 15 + 1) * box
}


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

function drawFood(){
  context.fillStyle = "red";
  context.fillRect(food.x, food.y, box, box);
}

// Event Listener chama a update conforme a tecla apertada e passa como argumento o evento de tecla que
// setado na função 
document.addEventListener('keydown', update);


function update(event){
  // Muda apenas se a direção setada não for ao contrário da direção atual
  if(event.keyCode == 37 && direction != "right") direction = "left";
  if(event.keyCode == 38 && direction != "down") direction = "up";
  if(event.keyCode == 39 && direction != "left") direction = "right";
  if(event.keyCode == 40 && direction != "up") direction = "down";
}


function startGame(){

  // plano cartesiano vai até de 16 para um lado 0 de outro aumenta e diminui
  // se passar do plano seta a posição para 0
  if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
  if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
  if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
  if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

 
  createBG();
  createSnake();
  drawFood();

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  // Se direção for "exemplo" vai adicionar um quadrado a mais

  if(direction == "right") snakeX += box;
  if(direction == "left") snakeX -= box;
  if(direction == "up") snakeY -= box;
  if(direction == "down") snakeY += box;

  // Caso coma o food vai gerar o mesmo em algumlugar aleatório com o random

  if(snakeX != food.x || snakeY != food.y){
      snake.pop();
  }else{food.x = Math.floor(Math.random() * 15 + 1) * box,
    food.y = Math.floor(Math.random() * 15 + 1) * box
  }

  // Retira o último elemento da array
 

  // Cria nova cabeça com o unshift (metodo que acrescenta o primeiro elemento)
  let newHead = {
    x: snakeX, 
    y: snakeY
  }

  snake.unshift(newHead);
  

}

// Renova a função a cada 100 milesegundos
let game = setInterval(startGame, 100);


