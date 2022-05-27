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
        // Topo do canhao (tubo)
        push();
        imageMode(CENTER);
        image(this.tuboImg,this.x, this.y, this.largura, this.altura);
        pop();

        // base do canhao
        image(this.baseImg, 70,20,200,200);
    }
}
