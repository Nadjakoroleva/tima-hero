let health = 0;
let oboi;
let hero;
let food;
let foodX = 0;
let foodY = 0;
let enemyX = 0;
let enemyY = 0;
let y = 0;
let x = 0;
let dx = 10;
let dy = 10;
let score = 0;
let Health = 0;
let dHealth = 0;

function setup() {
  createCanvas(1024, 576);
  foodX = random(100, 520);
  foodY = random(100, 520);

  enemyX = random(500, 300);
  enemyY = random(500, 300);
}

function preload() {
  // preload() runs once
  hero = loadImage("jake.png");
  food = loadImage("food.jpg");
  oboi = loadImage("oboi.jpg");
}

function draw() {
  background(oboi);
  oboi.resize(1024, 576);
  hero.resize(0, 200);
  image(hero, x, y);
  textSize(50);
  text(score, 400, 100);
  image(food, foodX, foodY);
  fill(250, 0, 0);
  rect(enemyX, enemyY, 75, 75);

  if (x > enemyX) {
    enemyX = enemyX + 1;
  } else if (x < enemyX) {
    enemyX = enemyX - 1;
  }
  if (y > enemyY) {
    enemyY = enemyY + 1;
  } else if (y < enemyY) {
    enemyY = enemyY - 1;
  }
  rect(enemyX, enemyY, 75, 75);

  if (x > enemyX - 30 && x < enemyX + 30) {
    if (y > enemyY - 30 && y < enemyY + 30) {
      dHealth = dHealth - 5;
    }
  }

  //ЕДА
  if (x > foodX - 150 && x < foodX + 50) {
    if (y > foodY - 150 && y < y + 50) {
      foodX = random(100, 500);
      foodY = random(100, 500);
      dHealth = dHealth + 15;
      score = score + 5;
    }
  }

  // поражение
  if (health < 0) {
    textSize(50);
    text("DIE", 30, 100);
    x = 0;
    y = -1000;
  } else {
    fill("#03FF22");
    health = 100 - millis() / 1000 + dHealth;
    health = 100 - (5 * millis()) / 1000 + dHealth;
    if (health > 100) {
      health = 100;
    }
    rect(width - 200, 50, health, 60);
  }
}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    x = x + dx;
  } else if (keyCode == LEFT_ARROW) {
    x = x - dx;
  } else if (keyCode == DOWN_ARROW) {
    y = y + dy;
  } else if (keyCode == UP_ARROW) y = y - dy;
}
