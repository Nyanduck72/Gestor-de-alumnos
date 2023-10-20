var datos = [
    { nombre: "Alex", calificaciones: [8,9,10,10,8], matricula: "1122150016" },
    { nombre: "Dani", calificaciones: [9,9,9,10,10], matricula: "1122150018" },
    { nombre: "Richi", calificaciones: [10,10,8,9,8], matricula: "1122150020" },
    { nombre: "Yorsh", calificaciones: [10,10,8,8,9], matricula: "1122150022" },
    { nombre: "Angel", calificaciones: [10,10,10,10,10], matricula: "1122150024" },
    { nombre: "Hector", calificaciones: [10,10,9,9,9], matricula: "1122150026" },
    { nombre: "Carlos", calificaciones: [10,10,7,9,9], matricula: "1122150028" },
    { nombre: "Gael", calificaciones: [10,10,9,8,9], matricula: "1122150030" },
];

var profes = [
    {nombre: "Carlos", grupo: [], id: "\"2\""}
];

function mostrar(){
    var profe = document.getElementById("profe");
    profe.innerHTML = "Bienvenido, "+profes[0].nombre;
    var nombreGrupo = document.getElementById("nombreGrupo");
    nombreGrupo.innerHTML = "Integrantes del grupo "+profes[0].id;
    var t = document.getElementById("cuerpo");
    t.innerHTML = "";
    datos.forEach(alumno => {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");
        td1.innerHTML = alumno.nombre;
        td2.innerHTML = alumno.matricula;
        td3.innerHTML = alumno.calificaciones;
        var promedio = calcularPromedio(alumno.calificaciones);
        td4.innerHTML = promedio;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        t.appendChild(tr);
    })
}

function mostrarGrupo() {
    var grupo = document.getElementById("grupo");
    grupo.innerHTML = "";

    profes[0].grupo.forEach(alumno => {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");
        td1.innerHTML = alumno.nombre;
        td2.innerHTML = alumno.matricula;
        td3.innerHTML = alumno.calificaciones;
        var promedio = calcularPromedio(alumno.calificaciones);
        td4.innerHTML = promedio;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        grupo.appendChild(tr);
    });
}

function agregar(){
    var valor1 = document.getElementById("nombre").value;
    var valor2 = document.getElementById("matricula").value;
    var cal1 = document.getElementById("c1").value;
    var cal2 = document.getElementById("c2").value;
    var cal3 = document.getElementById("c3").value;
    var cal4 = document.getElementById("c4").value;
    var cal5 = document.getElementById("c5").value;
    datos.push({nombre: valor1,  calificaciones: [cal1, cal2, cal3, cal4, cal5], matricula: valor2});
    mostrar();
}

function calcularPromedio(calificaciones) {
    var sum = calificaciones.reduce(function (acumulador, calificacion) {
        return acumulador + parseInt(calificacion, 10);
    }, 0);
    var promedio = sum / calificaciones.length;
    return promedio.toFixed(2); // Redondea el promedio a dos decimales
}

function agregarAGrupo() {
    var nombre = document.getElementById("nombre2").value;
    var matricula = document.getElementById("matricula2").value;

    var alumnoEncontrado = datos.find(function(alumno) {
        return alumno.nombre === nombre && alumno.matricula === matricula;
    });

    if (alumnoEncontrado) {
        profes[0].grupo.push(alumnoEncontrado);
        mostrarGrupo();
        alert("Alumno agregado al grupo "+profes[0].id+" con éxito.");
    } else {
        alert("Alumno no encontrado en la lista de datos.");
    }
}

