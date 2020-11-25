let a: number = 1;
let b: number = 1;
let c: number;
 
function  showProduct(first: number, second: number): number {
    c = first+second; 
    //console.log("The product is: " +  c);
    return first+second;
}

showProduct(a, b);

function imprime (){
    console.log("Oprimiste y la suma es: "+ showProduct( parseInt (document.getElementById("n1").nodeValue),parseInt(document.getElementById("n2").nodeValue))) ;
    console.log("La suma es: "+c);

}

console.log("La suma es: "+c);
