let animal = {
    sound: "",
    speak: function(msg){
        let msgParts = msg.split(" ");
        let res = "";
        msgParts.forEach(e => {
            res += e + " " + this.sound + " ";
        });
        return res;
    }
}

let lion = Object.create(animal);
lion.sound = "roar";

let tiger = Object.create(animal);
tiger.sound = "grrr";

let cow = Object.create(animal);
cow.sound = "muuu";

console.log(lion.speak("I'm a lion"));
console.log(tiger.speak("Lions suck"));
console.log(cow.speak("I'm afraid of lions and tigers"));


