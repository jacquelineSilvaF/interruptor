function setup() {
    createCanvas(330, 400);
  }
  
  
  let bt = 135;
  let col = 192;
  
  function draw() {
    
    background(col);
    
    //fundo do interruptor
    fill(176, 196, 222);
    stroke(70, 130, 180);
    rect(70, 70, 160, 220, 10);
    
    //parafusos
    fill(119, 136, 153);
    noStroke();
    ellipse(150, 90, 15, 15);
    ellipse(150, 270, 15, 15);
    
    //parte interna interruptor
    fill(224, 255, 255);
    stroke(70, 130, 180);
    rect(110, 110, 80, 140, 15);
    
    //linha interruptor
    fill(70, 130, 180);
    noStroke();
    rect(146, 125, 8, 110, 4);
    
    //botão
    fill(119, 136, 153);
    stroke(65, 105, 225);
    strokeWeight(2);
    ellipse(150, bt, 40, 20);
    
    if (mouseX > 120 && mouseX < 180 && mouseY > 125 && mouseY < 235) {
      
      bt = mouseY;
      col = map(mouseY, 125, 235, 0, 255);
    }
    
  }