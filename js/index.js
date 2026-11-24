function mostrarPracticas(){
    const grilla=document.getElementById("grilla-tarjetas");
    grilla.innerHTML="";


    for(let i=0;i<practicas.length;i++){

        let practica=practicas[i];
    
        //`con estas comillas francesas le estoy diciendo a JS q interprete el texto como HTML y tb va a interpretar cdo estoy hablando de JS
        grilla.innerHTML +=`  
        <article class="card">
                <img src="${practica.imagen}" alt="${practica.nombre}">      
                <div class="card-info">
                    <span class="categoria">${practica.categoria}</span>
                    <h3>${practica.nombre}</h3>
                    <p>${practica.descripcion}</p>
                    <span class="precio">${practica.precio}</span>
                        <button onclick="agregarPractica(${practica.id})">  
                                Reserva tu practica    
                    </button>
                </div>
        </article>
        `;
    }
}



mostrarPracticas();