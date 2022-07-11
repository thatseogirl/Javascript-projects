const incrementValue = document.getElementById('increment')
const decrementValue = document.getElementById('decrement')
const value = document.getElementById('value')


incrementValue.addEventListener('click', (e) => handleIncrement())
decrementValue.addEventListener('click', (e) => handleDecrement())
 
let counter = 0

function handleDecrement(e){
    counter--
    value.innerHTML = counter
    
}

function handleIncrement(){
    counter++

    value.innerHTML = counter
    console.log(counter)
}
