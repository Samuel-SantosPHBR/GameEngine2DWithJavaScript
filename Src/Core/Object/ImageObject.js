class ImageObject extends Object{
    constructor({positionX,positionY,ScaleX,ScaleY,image}){
        super({positionX,positionY,ScaleX,ScaleY});
        this.image = new Image();
        this.image.src=image;
        
    }
    
    draw(){
        this.getGame().canvas.drawImage(this.image,this.position.x,this.position.y,this.scale.x,this.scale.y)
    }
}