//Example of Parameterized function with User defined Function
function btnClicked(a,b) {
    // let a,b,sum;
    sum=parseInt(a+b);
    alert(sum);
}
document.getElementById("btn").addEventListener("click", function () {
    alert("Anonymous Function called");
})