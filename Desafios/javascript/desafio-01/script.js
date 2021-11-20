//SOMAR
function somar() {
    //Variaveis
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value
    //Transformando texto em numero
    num1 = Number(num1)
    num2 = Number(num2)
    //Definindo Operação 
    var resultado = num1 + num2
    //Validando e e criando a lógica
    if (num1 == '' || num1 == null) {
        alert('favor digitar um número')
        document.getElementById('num1').focus()
        return false
    } if (num2 == '' || num2 == null) {
        alert('favor digitar um número')
        document.getElementById('num1').focus()
        return false
    } else {

        document.getElementById('resultado').value = resultado

    }

}
//SUBTRAIR
function subtrair() {
    //Variaveis
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value
    //Transformando texto em numero
    num1 = Number(num1)
    num2 = Number(num2)
    //Definindo Operação 
    var resultado = num1 - num2
    //Validando e e criando a lógica
    if (num1 == '' || num1 == null) {
        alert('favor digitar um número')
        document.getElementById('num1').focus()
        return false
    } if (num2 == '' || num2 == null) {
        alert('favor digitar um número')
        document.getElementById('num1').focus()
        return false
    } else {

        document.getElementById('resultado').value = resultado

    }

}
//MULTIPLICAR
function multiplicar() {
    //Variaveis
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value
    //Transformando texto em numero
    num1 = Number(num1)
    num2 = Number(num2)
    //Definindo Operação 
    var resultado = num1 * num2
    //Validando e e criando a lógica
    if (num1 == '' || num1 == null) {
        alert('favor digitar um número')
        document.getElementById('num1').focus()
        return false
    } if (num2 == '' || num2 == null) {
        alert('favor digitar um número')
        document.getElementById('num1').focus()
        return false
    } else {

        document.getElementById('resultado').value = resultado

    }

}
//DIVIDIR
function dividir() {
    //Variaveis
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value
    //Transformando texto em numero
    num1 = Number(num1)
    num2 = Number(num2)
    //Definindo Operação 
    var resultado = num1 / num2
    //Validando e e criando a lógica
    if (num1 == '' || num1 == null) {
        alert('favor digitar um número')
        document.getElementById('num1').focus()
        return false
    } if (num2 == '' || num2 == null) {
        alert('favor digitar um número')
        document.getElementById('num1').focus()
        return false
    } else {

        document.getElementById('resultado').value = resultado

    }

}





