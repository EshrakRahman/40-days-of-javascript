console.log("script connected");
const increaseBtn = document.querySelector('.increase');
const decreaseBtn = document.querySelector('.decrease');
const quantity = document.querySelector('.quantity');



let count = 0;
function increase() {
    console.log(`its comming from top increase ${count}`);
    ++count;
    quantity.textContent = count;
    console.log(`its comming from increase ${count}`);
    

}

function disableBtn () {
    count;
    if (count === 0) {
        decreaseBtn.disabled = true;
    } else if (count > 0){
        decreaseBtn.disabled = false;
    }
}

function decrease() {
    disableBtn();
    console.log(`its comming from  top decreser ${count}`);
    if ( count >= 0){
        
        quantity.textContent = count;
        console.log(`its comming from decreser ${count}`);
        --count;
        
    }
    
}

increaseBtn.addEventListener("click", increase);
decreaseBtn.addEventListener("click", decrease);