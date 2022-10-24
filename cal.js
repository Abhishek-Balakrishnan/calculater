function display(num){
    inputbox.value+=num 
}
function allclear(){
    inputbox.value=""
}
function evaluateexpp(){
    // exp=inputbox.value
    // res=eval(exp)
    inputbox.value=eval(inputbox.value)
}
function remove(){
    cur__exp=inputbox.value
    inputbox.value=cur__exp.slice(0,-1)
}

