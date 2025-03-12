// 1
  function saludar()
  {
    let nombre = prompt ("¿Cual es tu nombre?")
    console.log('Hola ' + nombre)
  }
// 2
  function Calculadora() 
  {
    let numero1 = prompt ("Decime un numero ")
    let numero2 = prompt ("Decime otro numero")
    let num1 = Number(numero1)
    let num2 = Number(numero2)
    let suma = num1 + num2
    let resta = num1 - num2
    let division = num1 / num2
    let multiplicacion = num1 * num2
    console.log(`Los resultados son: suma ${suma}, resta ${resta}, division ${division}, multiplicacion ${multiplicacion} `)
  }
  // 3
  function par() 
  {
    let numero = prompt ("Decime un numero ")
    let num = Number(numero)
    if (num % 2 == 0 ) 
    {
        console.log("El numero es par")
    }
    else 
    {
        console.log("El numero es impar")
    }
  }
  // 4
   function contadorCaracteres() 
   {
    let palabra = prompt ("Decime una palabra")
    let caracteres = palabra.length
    console.log("Los caracteres son " + caracteres)
   }
  // 5
  function Repetir() 
  {
    let palabra = prompt ("Decime una palabra")
    let numero = prompt ("Decime un numero ")
    for(let i = 1; i <= numero; i++ ) 
    {
        console.log(palabra);
    } 
  }
  //6 
  function TablaMultiplicacion() 
  {
    let numero = prompt ("Decime un numero ")
    for(let i = 1; i <= 10; i++) 
    {
        let resultado = numero*i
        console.log(resultado)
    }
  }
  // 7
  function MAMEIG() 
  {
    var numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    var respuesta = prompt ("Adivina el numero")
    while (respuesta != numeroAleatorio)
    {
        if (numeroAleatorio > respuesta)
        {
            var respuesta = prompt("Es mayor, adivina el numero")
        }    
        else 
        { 
         var respuesta = prompt("Es menor, Adivina el numero")
        }
    }
    console.log("Ganaste!")
    }
    //8 
    function contarVocales() 
    {
        let palabra = prompt ("Decime una palabra")
            let contador = 0;
            const vocales = "aeiou";
            for (let i = 0; i < palabra.length; i++) {
                if (vocales.includes(palabra[i])) {
                   contador++;
                }
            }
            contador;
            console.log("La cantidad de vocales es: " + contador); 
        }
    //9 
    function palabraAlReves() 
    {
        let palabra = prompt ("Decime una palabra")
        let newword = palabra.split("").reverse().join("");
        console.log(newword)
    }
    //10 
    function Palindromo () 
    {  
    let palabra = prompt ("Decime una palabra")
    let newword = palabra.split("").reverse().join("");
    if (palabra == newword)
    {
        console.log("Es palindromo")
    }
    else {console.log("No.")}

    }
        
