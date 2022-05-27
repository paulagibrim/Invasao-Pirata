/** Fazer os namespaces **/
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Body = Matter.Body;


/** Criar as variaveis **/

var motor;      // o motor da física
var mundo;      // o mundo que iremos trabalhar

var chao;       // corpo do chao (final da tela, para que os corpos nao caiam)
var torre;      // o corpo da torre
var canhao;     // a figura do canhao
var angulo;     // o angulo do canhao

// variaveis de imagens
var backgroundImg;
var torreImg;


/** Criar as funções **/

// função para carregar os arquivos
function preload() {
    backgroundImg = loadImage("./assets/background.gif");
    torreImg = loadImage("./assets/tower.png");

}


// função para fazer as configurações iniciais do nosso programa
function setup() {
    canvas = createCanvas(1200,600);        // tela(canvas)

    // definições básicas da biblioteca
    motor = Engine.create();                // cria um motor da física
    mundo = motor.world;                    // cria um mundo que segue as leis do motor

    // definição de opcoes para corpos estaticos
    var opcoes = {
        isStatic: true
    };

    // criação do corpo do chão
    chao = Bodies.rectangle(0, height-1, width*2,1,opcoes);         // chao de altura 1, no final da tela, e com largura 2x o tamanho para que os corpos criados fora nao caiam
    World.add(mundo, chao);                                         // add o chao no nosso mundo

    // criação do corpo da torre
    torre = Bodies.rectangle(160,350,160,310, opcoes);              // construcao da torre
    World.add(mundo, torre);                                        // add a torre no nosso mundo

    // angulo do canhao
    angulo = 20;

    // criacao do canhao
    canhao = new Cannon(180,110,130,100,angulo);

}

// função para ações constantes
function draw(){
    background("gray");                             // define a cor cinza para o fundo do jogo
    Engine.update(motor);                           // atualiza o motor da física

    image(backgroundImg,0,0,1200,600);              // define a imagem no fundo
    
    push();
    imageMode(CENTER);                                              // faz a posicao passada ser a do centro da imagem
    image(torreImg, torre.position.x,torre.position.y,160,310);     // define a imagem da torre
    pop();

    canhao.mostrar();
    
}