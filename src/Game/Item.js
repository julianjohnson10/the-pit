class Item {
    constructor(name, description, value){
        this.name = name;
        this.description = description;
        this.value = value;
        this.pickedUp = false;
    }
}

class Gold extends Item {
    constructor(name, description, amt){
        super()
    }
}