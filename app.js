
const mondongoaudio = new Audio ("./assets/audio/mondongo.mp3") 
const gatoholaudio = new Audio ("./assets/audio/gatoholasonido.ogg") 
const gatoholaudio2 = new Audio ("./assets/audio/gatoholasonido.ogg") 
const gatoholaudio3 = new Audio ("./assets/audio/gatoholasonido.ogg") 
const tamalno1 = document.querySelector(".tamalno1");
const tamalno2 = document.querySelector(".tamalno2");
const tamalsi = document.querySelector(".tamalsi");
const tamalabierto1 = document.querySelector(".tamalabierto1");
const tamalabierto2 = document.querySelector(".tamalabierto2");
const tamalabiertosi3 = document.querySelector(".tamalabiertosi3");
const mondongo = document.querySelector(".mondongo");
const gatohola = document.querySelector(".gatohola");
const palabras = document.querySelector(".palabras");
const equis = document.querySelector(".equis")
const texto = document.querySelector(".texto")

mondongo.volume = 0.5

function abrirTamal (){ //Gato risa incorrecto 1
    tamalno1.style.display = "none";
    texto.innerText = "Bromita uwu";
    tamalabierto1.classList.add ("tamalabierto12")
    mondongo.classList.add ("mondongoactivo")
    mondongoaudio.play ()
    }


tamalno1?.addEventListener ("click", abrirTamal)

function abrirTamal2 (){ //Gato hola incorrecto 2
    tamalno2.style.display = "none";
    texto.innerText = "Olaolaolaolaolaolaolaolaola";
    tamalabierto2.classList.add ("tamalabierto12")
    gatohola.classList.add ("gatoholaactivo")
    
    setTimeout(() => {
        gatoholaudio.play()
    }, 500)

    setTimeout(() => {
        gatoholaudio2.play()
    }, 1000)

    setTimeout(() => {
        gatoholaudio3.play()
    }, 1500)
}


tamalno2?.addEventListener ("click", abrirTamal2)

function abrirTamal3 (){ //Correcto y tan
    tamalsi.style.display = "none";
    texto.innerText = "❤️";
    tamalabiertosi3.classList.add ("tamalabierto12")
    palabras.classList.add ("palabrasactivo")
}

tamalsi?.addEventListener ("click", abrirTamal3)

function cerrar (){
    console.log("hola")
    palabras.classList.add ("cerrar")
    equis.classList.add ("equiscerrar")
}

equis.addEventListener ("click", cerrar)
