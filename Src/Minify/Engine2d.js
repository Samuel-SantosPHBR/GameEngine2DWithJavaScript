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

class Input{
    constructor(){
        this.inputs = []
        addEventListener('keydown',(event) => {
            if(!this.getInput(event.key))
                this.inputs.push(event.key);
        })

        addEventListener('keyup',(event) =>{
             if(this.getInput(event.key))
                 this.inputs.splice(this.inputs.indexOf(event.key), 1);
         })
    }

    getInput(key){
        return this.inputs.find(input => input == key) ? true : false;
    }
}