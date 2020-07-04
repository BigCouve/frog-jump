//função criada para facilitar o criar das imagens do jogo, no caso definir suas posições no arquivo de imagem, além de dimensões.
  function Sprite(x, y, largura, altura){
  this.x = x;
  this.y = y;
  this.largura = largura;
  this.altura = altura;

  //Aqui há o criar do contexto quanto as imagens, respectivamente: o arquivo de imagem inserida, o X da imagem, O Y da imagem, a sua largura, altura e em seguida e inserida na canvas, em X, Y, largura e altura.
  this.desenhar = function(xCanvas, yCanvas){
    ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura, );
  }
}

//variáveis criadas para capturar onde está e como são em dimensões cada imagem do jogo no arquivo de imagem.
var spriteFundo = new Sprite(201.188, 31.04, 600, 600),
spriteBoneco = new Sprite(0, 389.4, 71.963, 60),
spriteChao = new Sprite(235, 686.07, 590, 70),
perder = new Sprite(1652.5, 0.1, 486.234, 415),
jogar = new Sprite(1280, 48.89, 330.282, 285.013),
novoRecorde = new Sprite(856, 299.27, 400.297, 298.226);
