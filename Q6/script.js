class Pet {
    constructor(name, age, weight,type,likes) {
        this.name = name;
        this.age = age;
        this.weight=weight;
        this.type = type;
        this.likes=likes;
    }
}

window.onload = function(){
    const onClickHandler = function(e){
        e.preventDefault();
        const state = {};
        const v = Array.from(document.querySelectorAll(".input"));
        v.forEach((value)=>{
            state[value.id] = value.value;
        })
        // console.log(state);
        let myPet = new Pet(state.name, state.age, state.weight,state.type,state.likes);
        let myPetJSON = JSON.stringify(myPet)
        // console.log(myPet);
        console.log(myPetJSON);
    }
    const resetHandler = function(e){
        location.reload();
    }
    document.getElementsByTagName("button")[0].addEventListener('click',onClickHandler);
    document.getElementsByTagName("button")[1].addEventListener('click',resetHandler);
}