class Game {
    constructor({frameRate,gameObjects}){
        this.gameObjects = [];
        this.startGame();
        this.frameRate = frameRate;
        this.instantiateAllObjects(gameObjects);
        this.run();
    }

    startGame(){}

    updategame(){
        this.gameObjects.forEach((gameObeject) => {
            gameObeject.update();
        })
    }

    instantiateObject(gameObejct){
        this.gameObjects.push(gameObejct);
    }

    instantiateAllObjects(gameObjects){
        gameObjects.forEach((element) => {
            this.instantiateObject(element);
        });
    }

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
        this.position = {x: 0, y:0};
        this.scale = {x: 0, y: 0};
        this.start();

    }

    start(){

    }

    update(){
        console.log(Math.random());
    }
}


