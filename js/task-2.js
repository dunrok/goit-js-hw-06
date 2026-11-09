class Storage {
    #items=null;
    constructor(value){
        this.#items=value;
    }
    getItems(){
        return this.#items;
    }
    addItem(itme){
        this.#items.push(itme);
    }
    removeItem(itme){
        this.#items.splice(this.#items.indexOf(itme),1);
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
