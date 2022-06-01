class Cannon {
    constructor(x,y,width,height,angle){
        // parametros do canhao
        this.x = x;
        this.y = y;
        this.largura = width;
        this.altura = height;
        this.angulo  = angle;

        this.baseImg = loadImage("../assets/cannon_base.png");
        this.tuboImg = loadImage("../assets/CANON.png");
    }

    // funcao para desenhar/exibir um canhao
    mostrar(){
        // Variações de angulo
        if(keyIsDown(RIGHT_ARROW) && this.angulo < 70){
            this.angulo += 2;
        } else if(keyIsDown(LEFT_ARROW) && this.angulo > -30){
            this.angulo -= 1;
        }

        // Topo do canhao (tubo)
        push();
        translate(this.x,this.y);                   // modifica os valores do eixo
        rotate(this.angulo);                        // fala o tanto que irá rotacionar
        imageMode(CENTER);
        image(this.tuboImg,0, 0, this.largura, this.altura);
        pop();

        // base do canhao
        image(this.baseImg, 70,20,200,200);
    }
}
