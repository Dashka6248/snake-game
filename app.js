const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d")
const gridSize = 20;
let snakeColor = "green";
let foodColor = "red";
let snake = [{x:12,y:8}];
let food = {x:2,y:1}
let dx=1,dy=0;
function drawfood(){
	ctx.fillStyle = foodColor;
	ctx.fillRect(food.x*gridSize,food.y*gridSize, gridSize,gridSize);
}
function drawSnake(snakeEl){
	snakeEl.forEach(segment =>{
		ctx.fillStyle=snakeColor;
		ctx.fillRect(segment.x*gridSize,segment.y*gridSize,gridSize,gridSize); 
	})
}
function update(){
	let head = {x:snake[0].x+dx, y:snake[0].y+dy}
	snake.unshift(head)
	if(head.x==food.x && head.y==food.y){
		let random1=Math.floor(Math.random()*20)
		let random2=Math.floor(Math.random()*20)
		food = {x:random1,y:random2}
	}else{
		snake.pop();
	}
	if(head.x==20 || head.y==20 || head.x<0 || head.y<0){
		alert("Game over");
		let random3=Math.floor(Math.random()*20)
		let random4=Math.floor(Math.random()*20)
		food = {x:random3,y:random4}
	}
	ctx.clearRect(0,0,canvas.width,canvas.height)
	drawfood();
	drawSnake(snake);
}
setInterval(update,300)
document.addEventListener("keydown",(event)=>{
	console.log(event.key);
	switch(event.key){
		case"ArrowUp":
			if(dy!==1){
				dx=0;
				dy=-1;
			}
			break;
		case "ArrowDown":
			if(dy!==-1){
				dx=0;
				dy=+1;
			}
			break;
		case "ArrowRight":
			if(dx!==-1){
				dx=1;
				dy=0;
			}
			break
		case "ArrowLeft":
			if(dx!==1){
				dx=-1;
				dy=+0;
			}
			break
	}
});