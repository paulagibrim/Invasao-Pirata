class CannonBall{
    constructor(x,y){
        var options = {
            isStatic: true
        };

        // parametros da bola de canhao
        this.raio = 30;
        this.corpo = Bodies.circle(x,y,this.raio, options);
        this.imagem = loadImage("../assets/cannonball.png");

        //adiciona o corpo no mundo
        World.add(mundo, this.corpo);

        // array para fazer a trajetória
        this.trajetoria = [];
    }

    mostrar(){
        // namespace da posição
        const pos = this.corpo.position;

        // obtendo as posicoes x e y para colocar na matriz de trajetória
        if (this.corpo.velocity.x > 0 && pos.x > canhao.x) {
            let posicao = [pos.x, pos.y];
            this.trajetoria.push(posicao);
        }

        // desenhar toda a trajetoria
        for (let i = 0; i < this.trajetoria.length; i++) {
            image(this.imagem, this.trajetoria[i][0], this.trajetoria[i][1], 5,5);
        }

        // encapsulamento de modificações e exibição
        push();
        imageMode(CENTER);
        image(this.imagem, pos.x, pos.y, this.raio, this.raio);
        
        pop();

    }

    atirar(){
        // para seguir o angulo do motor
        var novoAngulo = canhao.angulo - 30;                // para considerar o tamanho do canhao
        novoAngulo = novoAngulo * (3.14/180);               // transforma para graus
        
        var velocidade = p5.Vector.fromAngle(novoAngulo);   // pega a velocidade dividida em x e y para aquele angulo
        velocidade.mult(0.5);                               // multiplica todos os elementos por 0.5 para ficar uma velocidade viável

        Body.setStatic(this.corpo, false);                  // define o setStatic como false para o corpo
        Body.setVelocity(this.corpo, {
            x: velocidade.x*(180/3.14),
            y: velocidade.y*(180/3.14)
        });
    }
}