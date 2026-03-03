var counter = 0;
function inc() {
    counter++; // counter = counter+1
    // counter += 3;
    document.getElementById("count").innerText = counter;
}
function dec(){
    counter--; // counter = counter-1
    // counter -=3;
    document.getElementById("count").innerText = counter;
}
function reset(){
    counter = 0;
    document.getElementById("count").innerText = counter;
}