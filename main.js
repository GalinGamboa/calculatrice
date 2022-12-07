
myButton = document.getElementsByClassName ('myButton');

result = document.getElementsByClassName ('result');

function insert (num) {
    console.log('clicked')
    result.ans.value+=parseInt(num)
}

function operador (num) {
    result.ans.value+=(num)
}

resultado = () => {
    result.ans.value = eval(result.ans.value)
    console.log(result.ans.value)
    
    
}

