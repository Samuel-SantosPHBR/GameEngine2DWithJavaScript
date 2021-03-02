class Object {
    constructor({positionX,positionY,ScaleX,ScaleY}){
        this.position = {x: positionX, y:positionY};
        this.scale = {x: ScaleX, y: ScaleY};
        this.active = true;
        this.collider = false;
        this.start();
    }

    render(){
        if(this.active)
            this.draw();
    }

    draw(){
        this.getGame().canvas.rect(this.position.x,this.position.y,this.scale.x,this.scale.y)
    }
    
    getGame(){
        return this.Game;
    }

    setGame(Game){
        this.Game = Game; 
    }

    start(){
        
    }

    update(){

    }
}