// Array de datos
const nombres = [
    { id: 281957, nombre: "Alinne" },
    { id: 343508, nombre: "Valeria"},
    { id: 552651, nombre: "Jose" },
    { id: 550210, nombre: "Danna" },
    { id: 550222, nombre: "Jessica" },
];

// Referencia al cuerpo de la tabla
const tablaNombres = document.getElementById("tabla-nombres");

// Generar dinámicamente las filas
nombres.forEach(persona => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${persona.id}</td>
        <td>${persona.nombre}</td>
    `;
    tablaNombres.appendChild(fila);
});
