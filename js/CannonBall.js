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
    }

    mostrar(){
        // namespace da posição
        const pos = this.corpo.position;
    
        // encapsulamento de modificações e exibição
        push();
        imageMode(CENTER);
        image(this.imagem, pos.x, pos.y, this.raio, this.raio);
        pop();

    }

    atirar(){
        // para seguir o angulo do motor
        var novoAngulo = canhao.angulo - 28;                // para considerar o tamanho do canhao
        novoAngulo = novoAngulo * (3.14/180);               // transforma para graus
        
        var velocidade = p5.Vector.fromAngle(novoAngulo);   // ??
        velocidade.mult(0.5);                               // ??

        Body.setStatic(this.corpo, false);                  // define o setStatic como false para o corpo
        Body.setVelocity(this.corpo, {
            x: velocidade.x*(180/3.14),
            y: velocidade.y*(180/3.14)
        });
    }
}