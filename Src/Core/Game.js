class Game {
    constructor({frameRate}){
        this.startGame();
        this.frameRate = frameRate;
        //this.run();
    }

    startGame(){}

    updategame(){}

    instantiateObject(){}

    instantiateAllObjects(){}

    render(){}

    run(){
        setInterval(()=>{
            this.updategame();
            this.render();
        },this.frameRate)
    }
}

class Object {
    constructor(){

    }

    start(){

    }

    update(){

    }
}

class Player extends Object{

}


