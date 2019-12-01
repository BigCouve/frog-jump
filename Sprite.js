function Sprite(x, y, largura, altura){
  this.x = x;
  this.y = y;
  this.largura = largura;
  this.altura = altura;

  this.desenhar = function(xCanvas, yCanvas){
    ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura, );
  }
}
var spriteFundo = new Sprite(202.188, 45.942, 600, 600),
spriteBoneco = new Sprite(0, 404.301, 71.963, 60),
spriteChao = new Sprite(234.299, 700.977, 600, 70),
perder = new Sprite(1600, 15, 448.234, 415),
jogar = new Sprite(1253, 63.791, 289.282, 274.013),
novoRecorde = new Sprite(869.328, 314.178, 386.297, 298.226);
