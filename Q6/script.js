window.onload = function(){
    const onClickHandler = function(e){
        e.preventDefault();
        const state = {};
        const v = Array.from(document.querySelectorAll(".input"));
        v.forEach((value)=>{
            state[value.id] = value.value;
        })
        console.log(state);
    }
    const resetHandler = function(e){
        location.reload();
    }
    document.getElementsByTagName("button")[0].addEventListener('click',onClickHandler);
    document.getElementsByTagName("button")[1].addEventListener('click',resetHandler);
}