let arr = [101,102,103,104]

class User {
    constructor(name,status,id,gender){
        this.name = name;
        this.status = status
    }
    current = 1
    genId(){
        return this.current+1
    }
}