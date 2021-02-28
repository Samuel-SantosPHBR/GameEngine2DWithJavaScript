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