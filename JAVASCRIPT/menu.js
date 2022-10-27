const icono_menu= document.querySelector(".icono_menu");
const opciones = document.querySelector(".opciones")

icono_menu.addEventListener("click",()=>{
    
    opciones.classList.toggle(".opciones_activo") 
})

