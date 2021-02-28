class Object {
    constructor({positionX,positionY,ScaleX,ScaleY}){
        this.position = {x: positionX, y:positionY};
        this.scale = {x: ScaleX, y: ScaleY};
        this.start();
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