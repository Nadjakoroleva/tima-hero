int health;
PImage oboi;
PImage hero, food;
float foodX, foodY, enemyX, enemyY;
int y;
int x;
int dx = 10;
int dy = 10;
int score;
int Health;
int dHealth;

void setup() {
  size (1024, 576);
  hero = loadImage("ДЖЕЙК.png");
  foodX = random(100, 520);
  foodY = random (100, 520);
  food = loadImage("food.jpg");
  enemyX = random(500, 300);
  enemyY = random(500, 300);
  oboi = loadImage("oboi.jpg");
}

void draw() {
  background(oboi);
  oboi.resize (1024, 576);
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
    y = - 1000;
  } else {  
    fill(#03FF22);
    health = 100 - millis() / 1000 + dHealth;
    health = 100 - 5 * millis() / 1000 + dHealth;
    if (health > 100) {
      health = 100;
    }
    rect(width - 200, 50, health, 60);
  }
}

void keyPressed() {
  if (keyCode == RIGHT) {
    x = x + dx;
  } else if (keyCode == LEFT) {
    x = x - dx;
  } else if (keyCode == DOWN) {
    y = y + dy;
  } else if (keyCode == UP)
    y = y - dy;
}