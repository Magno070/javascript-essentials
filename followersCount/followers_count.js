let count = 0;

function increaseCount(){
    count ++;
    displayCount()
    checkCountValue();
}

function resetCount(){
    count = 0;
    displayCount();
    alert(`The counter have been reseted to 0`)
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML = count

}

let nextMessage = 1

function checkCountValue(){
    if(count % 10 == 0){
        if(nextMessage % 2 != 0)
            {
            alert(`Your instagram gained ${count} followers, congratulations!`)
            nextMessage ++;
            }
        else 
            {
                alert(`Your instragram gained ${count} followers, keep it up!`)
                nextMessage ++;
            }
    }
}