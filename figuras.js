
//Codigo del Cuadrado
console.group("Cuadrado")
//const ladoCuadrado = 5;
//console.log("Los lados de cuadrado miden: " + ladoCuadrado + " cm")

function perimetroCuadrado(lado){
    return lado * 4
} 

//console.log("el perimetro de cuadrado es : " + perimetroCuadrado + " cm")

function areaCuadrado(){
    return lado *lado
}

//console.log("el area de cuadrado es : " + areaCuadrado + " cm^2")
console.groupEnd()



//Codigo del Triangulo
console.group("Triangulos")
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo=5.5
// console.log(
//     "Los lados del Triangulo miden: " 
//     + ladoTriangulo1
//     +  "cm, " 
//     + ladoTriangulo2
//     +  "cm, "
//     + baseTriangulo
//     +  "cm"
//     )
    // const alturatriangulo=alturaTriangulo
    // console.log("La altura del Triangulo es: " + alturatriangulo + " cm")

    function perimetrotriangulo(lado1,lado2,base){
        return lado1 + lado2 + base
    } 
    //console.log("el perimetro del Triangulo es : " + perimetrotriangulo + " cm")

    function areaTriangulo(base,altura){
        return (base*altura)/2
    }
    //console.log("el area del Triangulo es : " + areaTriangulo + " cm^2")

    console.groupEnd()

//Codigo del circulo
console.group("Circulos")

//Radio
//const radioCirculo=4
//console.log("el radio del Circulo es: "+ radioCirculo + " cm")
//Diametro

function diametroCirculo(radio){
    return radio*2
}
//console.log("el diametro del circulo es: " + diametroCirculo + " cm")
//PI

const PI= Math.PI
console.log("pi es: " + PI + " cm")
//Circunferencia

function perimetroCirculo(radio){
    const diametro=diametroCirculo(radio)
    return diametro*PI

}
//console.log("el perimetro del circulo es: " + perimetroCirculo + " cm")
// Area

function areaCirculo(radio){
return (radio*radio)*PI
}
//console.log("el darea del circulo es: " + areaCirculo + " cm^2")

console.groupEnd()