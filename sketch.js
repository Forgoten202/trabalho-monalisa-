  function setup(){
  createCanvas(400, 400);
  }

  function draw() {
  background('cyan');
  fill("white");
  circle(200,200, 300);
  circle(150,150, 60);
  fill('white');
  circle(250,150, 60);
  fill("red");
  line(140,250,250,250);
  line(110,117,174,116);
  line(222,105,273,102);
  circle(199,197,30);
  fill("black");
  line(222,105,273,102);
    
  fill("pink");
  
    
  fill("black")
  olhoX = map(mouseX, 0, 400, 130, 170);
  olhoY = map(mouseY, 0, 400, 130, 170);

  circle(olhoX, olhoY, 15); // nova pupila esquerda
  circle(olhoX + 100, olhoY, 15); //nova pupila direita
    fill("pink");
    linguaY = map(mouseY, 0, 400,50, 130);
    
   arc(195,250,60,linguaY,0,PI);
   line(200,250,200,200+linguaY);
   if (mouseIsPressed) {
    console.log(mouseX, mouseY);
     fill("black")
  
  }
}

