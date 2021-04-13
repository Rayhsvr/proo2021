let nombre = prompt("Proporciona tu nombre")
let articulo1 = prompt("Proporciona precio primer articulo")
let articulo2 = prompt("Proporciona precio segundo articulo")
let suma = 0
suma = parseInt(articulo1)+parseInt(articulo2)
document.write('<h1>Bienvenido(a) ' + nombre + '</h1>')
document.write('<p>Articulo 1 $' + articulo1 + '</p>')
document.write('<p>Articulo 2 $' + articulo2 + '</p>')
document.write('<p>El importe = $' + suma + '</p>')
