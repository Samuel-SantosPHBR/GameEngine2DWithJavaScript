class Game {
    constructor({gameObjects,canvas}){
        this.gameObjects = [];
        this.canvas = canvas; 
        this.input = new Input(); 
        this.startGame(gameObjects);
        this.run();
    }

    startGame(gameObjects){
        this.instantiateAllObjects(gameObjects);
        this.gameObjects.forEach((gameObejct) => {
            gameObejct.start();
        })
    }

    updateGame(){
        this.gameObjects.forEach((gameObeject) => {
            gameObeject.update();
            this.render();
        })
        
    }

    instantiateObject(gameObejct){
        gameObejct.setGame(this);
        this.gameObjects.push(gameObejct);
    }

    instantiateAllObjects(gameObjects){
        gameObjects.forEach((element) => {
            this.instantiateObject(element);
        });
    }

    render(){
        this.canvas.clearRect(0, 0, 800, 600)
        this.drawObjects();
    }

    drawObjects(){
        this.canvas.beginPath();
        this.gameObjects.forEach((gameobject)=>{
            this.canvas.rect(gameobject.position.x,gameobject.position.y,gameobject.scale.x,gameobject.scale.y)
        })
        this.canvas.stroke();
    }

    run(){
        window.requestAnimationFrame(()=>{
            this.updateGame();
            window.requestAnimationFrame(()=>{
                this.run()
            })
        })
    }
}




