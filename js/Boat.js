class Boat{
    constructor(x,y,largura, altura, deslocamento){
        // parametros do barco
        this.corpo = Bodies.rectangle(x,y,largura,altura);
        this.largura = largura;
        this.altura = altura;

        this.imagem = loadImage("../assets/boat.png");
        this.deslocamento = deslocamento;

        // add corpo no mundo
        World.add(mundo, this.corpo);
    }

    mostrar(){
        // namespaces uteis
        let pos = this.corpo.position;
        let angle = this.corpo.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        
        imageMode(CENTER);
        image(this.imagem, 0, this.deslocamento, this.largura, this.altura);
        pop();

    }
}