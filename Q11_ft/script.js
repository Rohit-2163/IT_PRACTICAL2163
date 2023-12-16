const singUpButton = document.getElementById("signUp");
const singInButton = document.getElementById("signIn");
const onClickHandler = document.getElementById("singup");
const main = document.getElementById("main");
console.log("check");
singUpButton.addEventListener("click", () => {
    main.classList.add("right-panel-active");
});
singInButton.addEventListener("click", () => {
    main.classList.remove("right-panel-active");
});
class user{
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password=password;
    }
}
onClickHandler.addEventListener("click",(e)=>{
    e.preventDefault();
    const state = {};
    const v = Array.from(document.querySelectorAll(".input1"));
    // console.log(v);
    console.log("gello");
    v.forEach((value)=>{
        state[value.id] = value.value;
        // console.log(value.value);
    })
    console.log(state);
    main.classList.remove("right-panel-active");
});
console.log("pass");
// console.log(main.classList)
