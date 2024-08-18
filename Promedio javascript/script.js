function calcularPromedio() {
    const name = document.getElementById("name").value;
    const grade1 = parseFloat(document.getElementById("grade1").value);
    const grade2 = parseFloat(document.getElementById("grade2").value);
    const grade3 = parseFloat(document.getElementById("grade3").value);
    const grade4 = parseFloat(document.getElementById("grade4").value);
  
    if (isNaN(grade1) || isNaN(grade2) || isNaN(grade3) || isNaN(grade4)) {
      alert("Por favor, ingrese calificaciones válidas.");
      return;
    }
  
    const promedio = (grade1 + grade2 + grade3 + grade4) / 4;
    const resultado = `Hola, ${name}. Tu promedio es ${promedio.toFixed(2)}`;
  
    document.getElementById("resultado").textContent = resultado;
  }
  