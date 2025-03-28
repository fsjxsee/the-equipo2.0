// Array de datos
const nombres = [
    { id: 281957, nombre: "Alinne" },
    { id: 260982, nombre: "Robert" },
    { id: 343508, nombre: "Valeria" },
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
