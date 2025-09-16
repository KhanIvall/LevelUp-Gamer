<script>
    const regions = [
    {name: "Región Metropolitana", comunas: ["Santiago", "Las Condes", "Maipú"] },
    {name: "Valparaíso", comunas: ["Valparaíso", "Viña del Mar", "Quilpué"] },
    {name: "Biobío", comunas: ["Concepción", "Chillán", "Los Ángeles"] }
    ];

    const userRegion = document.getElementById("userRegion");
    const userComuna = document.getElementById("userComuna");

  // Cargar regiones
  regions.forEach(r => {
    const option = document.createElement("option");
    option.value = r.name;
    option.textContent = r.name;
    userRegion.appendChild(option);
  });

  // Actualizar comunas según región
  userRegion.addEventListener("change", () => {
    const selected = regions.find(r => r.name === userRegion.value);
    userComuna.innerHTML = '<option value="">Seleccione una comuna</option>';
    if (selected) {
        selected.comunas.forEach(c => {
            const opt = document.createElement("option");
            opt.value = c;
            opt.textContent = c;
            userComuna.appendChild(opt);
        });
    }
  });

    // Validación de correo
    function validarCorreo(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;
    return regex.test(email);
  }

    const addUserForm = document.getElementById("addUserForm");
    addUserForm.addEventListener("submit", function(e){
        e.preventDefault();

    const run = document.getElementById("userRun").value.trim();
    const name = document.getElementById("userName").value.trim();
    const lastName = document.getElementById("userLastName").value.trim();
    const email = document.getElementById("userEmail").value.trim();
    const role = document.getElementById("userRole").value;
    const region = document.getElementById("userRegion").value;
    const comuna = document.getElementById("userComuna").value;
    const address = document.getElementById("userAddress").value.trim();

    // Validaciones básicas
    if(run.length < 7 || run.length > 9){
        alert("El RUN debe tener entre 7 y 9 caracteres, sin puntos ni guion.");
    return;
    }

    if(!name || !lastName || !email || !role || !region || !comuna || !address){
        alert("Por favor complete todos los campos obligatorios.");
    return;
    }

    if(!validarCorreo(email)){
        alert("El correo no es válido. Solo se aceptan @duoc.cl, @profesor.duoc.cl y @gmail.com");
    return;
    }

    alert(`Usuario ${name} ${lastName} agregado correctamente!`);
    addUserForm.reset();
  });
</script>
