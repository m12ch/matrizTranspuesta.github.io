function calcularTranspuesta() {
    // Obtener el valor de la matriz desde el textarea
    var matrizTexto = document.getElementById("matrix").value;

    // Convertir el texto de la matriz a una matriz numérica
    var matriz = matrizTexto.split(';').map(row => row.split(',').map(Number));

    // Verificar si la matriz es cuadrada
    if (!matriz.every(row => row.length === matriz.length)) {
        document.getElementById("resultado").innerText = "La matriz ingresada no es cuadrada.";
        return;
    }

    // Calcular la transpuesta
    var transpuesta = matriz[0].map((col, i) => matriz.map(row => row[i]));

    //  matriz original
    var matrizFormateada = matriz.map(row => '[' + row.join(', ') + ']').join('\n');

    // matriz transpuesta
    var transpuestaFormateada = transpuesta.map(row => '[' + row.join(', ') + ']').join('\n');

    // Mostrar el resultado
    var resultadoCadena = "Matriz Original: \n" + matrizFormateada + "\n\n";
    resultadoCadena += "Transpuesta: \n" + transpuestaFormateada;
    document.getElementById("resultado").innerText = resultadoCadena;
}