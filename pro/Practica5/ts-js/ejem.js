var a = 1;
var b = 1;
var c;
function showProduct(first, second) {
    c = first + second;
    //console.log("The product is: " +  c);
    return first + second;
}
showProduct(a, b);
function imprime() {
    console.log("Oprimiste y la suma es: " + showProduct(parseInt(document.getElementById("n1").nodeValue), parseInt(document.getElementById("n2").nodeValue)));
    console.log("La suma es: " + c);
}
console.log("La suma es: " + c);
