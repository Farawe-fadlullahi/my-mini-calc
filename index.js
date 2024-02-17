let Small_s=document.getElementById('small_s')
let Big_s=document.getElementById('big_s')
enableA=false
 let operator=''
 let kept_value=''
function No(numbers) {
    if(enableA==true){
        Big_s.value=''
        enableA=false
    }
    Big_s.value+=(numbers)
}
function sign(symbol){
    if(operator !==''){
        equals()
    }
    Small_s.value=Big_s.value+symbol
    enableA=true
    operator=symbol
    kept_value=Big_s.value
}
function equals() {
    Small_s.value=kept_value+operator+Big_s.value+'='
    if(operator=='-'){
        Big_s.value=kept_value - Big_s.value
    }
    if(operator=='+'){
        Big_s.value=Number(kept_value ) +Number(Big_s.value)
    }
    if(operator=='*'){
        Big_s.value=kept_value * Big_s.value
    }
    if(operator=='/'){
        Big_s.value=kept_value / Big_s.value
    }
    if(operator=='%'){
        let percentage_value=Big_s.value/100
        Big_s.value=Big_s  * percentage_value
    }
}
    
function add() {
    Big_s.value=- +Big_s.value
    
}
function percent() {
    fun_val=Big_s.value*1/100
    Big_s.value=fun_val
}
function inverse() {
    fun_val=1/Big_s.value
    Small_s.value= '1'+ '/ '+Big_s.value +'='
    Big_s.value=fun_val
}
function square() {
    fun_val=Big_s.value**2
    Small_s.value= Big_s.value+'^'+'2'+'='
    Big_s.value=fun_val
}
function  root() {
    fun_val=Math.sqrt(Big_s.value)
    Small_s.value= 'root' +Big_s.value+'='
    Big_s.value=fun_val
}
function cancel(){
    kept_value=''
    Big_s.value=''
    Small_s.value=''
}
function add(){
    Big_s.value= '-'+Big_s.value
}
function unleash() {
    confirm("Farawe's calculator is on d way")
    document.querySelector('.folder').style.display='block'
    
}
function slice() {
    cutable_value=Big_s.value
    Big_s.value=cutable_value.slice(0,-1)
}
