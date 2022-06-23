/** Fazer os namespaces **/
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Body = Matter.Body;


/** Criar as variaveis **/

let motor;      // o motor da física
let mundo;      // o mundo que iremos trabalhar

let chao;       // corpo do chao (final da tela, para que os corpos nao caiam)
let torre;      // o corpo da torre
let canhao;     // a figura do canhao
let angulo;     // o angulo do canhao
// var bola;

let bolas = []; // array para armazenar as bolas de canhao
let barcos = []; // array para armazenar os barcos


// variaveis de imagens
let backgroundImg;
let torreImg;


/** Criar as funções **/

// função para carregar os arquivos
function preload() {
    backgroundImg = loadImage("./assets/background.gif");
    torreImg = loadImage("./assets/tower.png");

}


// função para fazer as configurações iniciais do nosso programa
function setup() {
    canvas = createCanvas(1200,600);        // tela(canvas)

    // modificações necessarias de modo
    angleMode(DEGREES);

    // definições básicas da biblioteca
    motor = Engine.create();                // cria um motor da física
    mundo = motor.world;                    // cria um mundo que segue as leis do motor

    // definição de opcoes para corpos estaticos
    let opcoes = {
        isStatic: true
    };

    // criação do corpo do chão
    chao = Bodies.rectangle(0, height-1, width*2,1,opcoes);         // chao de altura 1, no final da tela, e com largura 2x o tamanho para que os corpos criados fora nao caiam
    World.add(mundo, chao);                                         // add o chao no nosso mundo

    // criação do corpo da torre
    torre = Bodies.rectangle(160,350,160,310, opcoes);              // construcao da torre
    World.add(mundo, torre);                                        // add a torre no nosso mundo

    // angulo do canhao
    angulo = 15;

    // criacao do canhao
    canhao = new Cannon(180,120,130,100,angulo);

    //bola = new CannonBall(canhao.x, canhao.y);

}

// função para ações constantes
function draw(){
    background("gray");                             // define a cor cinza para o fundo do jogo
    Engine.update(motor);                           // atualiza o motor da física

    image(backgroundImg,0,0,1200,600);              // define a imagem no fundo

    // precisamos percorrer o vetor de bolas para exibir cada uma delas
    for (var i = 0; i < bolas.length; i++){
        verBolas(i);
    }

    canhao.mostrar();                               // desenha o canhao
    verBarcos();                                    // desenha os barcos
    
    push();
    imageMode(CENTER);                                              // faz a posicao passada ser a do centro da imagem
    image(torreImg, torre.position.x,torre.position.y,160,310);     // define a imagem da torre
    pop();
    
}

// funcao para identificar quando solta uma tecla
function keyReleased(){
    if(keyCode === DOWN_ARROW){
        bolas[bolas.length - 1].atirar();                   // atira a ultima bola do vetor
    }
}

// funcao para identificar quando aperta uma tecla
function keyPressed(){
    if(keyCode === DOWN_ARROW) {
        let bola = new CannonBall(canhao.x, canhao.y+4);      // cria a bola de canhao
        bolas.push(bola);                                   // add a bola de canhao no vetor de bolas
        //console.log(bolas);
    }
}

// funcao para desenhar as bolas de canhao
function verBolas(i){
    bolas[i].mostrar();
}

function verBarcos(){
    if(barcos.length > 0){
        // se tem algo no vetor

        // criar outro barco
        if(barcos[barcos.length-1] === undefined ||
           barcos[barcos.length-1].corpo.position.x < width - 300){
            let posicoes = [-40, -60, -70, -20];                        // cria um vetor de possiveis deslocamentos
            let posicao = random(posicoes);                             // escolhe aleatoriamente um valor possivel

            let barco = new Boat(width+75, height-60, 170,170,posicao);
            barcos.push(barco);                         // add barco no vetor de barcos
            
        }


        // dar velocidade e desenhar os barcos
        for(let i=0; i<barcos.length; i++){
            // dar a velocidade
            Body.setVelocity(barcos[i].corpo, {x: -0.9, y: 0});
            // desenhar
            barcos[i].mostrar();
        }
    
    } else {
        // se o vetor está vazio
        let barco = new Boat(width + 75, height - 60, 170, 170, -60); // cria o barco
        barcos.push(barco);             // add a barco de canhao no vetor de barcos
    }
}