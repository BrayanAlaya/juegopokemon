
let ataqueEnemigo
let ataquejugador
let puntajeJugador = 3
let puntajeEnemigo = 3
let combateResultado


function iniciar()
{    
    let cssFinal = document.getElementById("cssFinal")
    cssFinal.disabled = true

    let sectionAtaques = document.getElementById('Sellecion-de-habilidad')
    sectionAtaques.style.display = 'none'

    let sectionBotonReiniciar = document.getElementById('Reinicio')
    sectionBotonReiniciar.style.display = 'none'

    let botonSeleccionarJugador = document.getElementById('boton-seleccionar')
    botonSeleccionarJugador.addEventListener('click',elegirPokemonJugador)
    
    let botonAtaqueFuego = document.getElementById('boton-fuego')
    botonAtaqueFuego.addEventListener('click',ataqueFuego)
    
    let botonAtaqueAgua = document.getElementById('boton-agua')
    botonAtaqueAgua.addEventListener('click',ataqueAgua)
    
    let botonAtaquePlanta = document.getElementById('boton-planta')
    botonAtaquePlanta.addEventListener('click',ataquePlanta)

    let botonReiniciar = document.getElementById('botonr-einiciar')
    botonReiniciar.addEventListener('click',reiniciar)
}


function mensajeFinal(respuesta)
{
    let mensajeRespuesta = document.getElementById('Resultados')

    let mensajeTip = document.createElement('p')
    mensajeTip.innerHTML = 'Has '+ respuesta

    mensajeRespuesta.appendChild(mensajeTip)

    let botonAtaqueFuego = document.getElementById('boton-fuego')
    botonAtaqueFuego.disabled = true

    let botonAtaqueAgua = document.getElementById('boton-agua')
    botonAtaqueAgua.disabled = true

    let botonAtaquePlanta = document.getElementById('boton-planta')
    botonAtaquePlanta.disabled = true

    let selecctionReiniciar = document.getElementById('Reinicio')
    selecctionReiniciar.style.display = 'block'

}


function Resultados()
{
    if (ataquejugador == ataqueEnemigo)
    {combateResultado = 'Empate'

    }
    else if (ataquejugador == 'fuego' && ataqueEnemigo == 'planta' || ataquejugador == 'agua' && ataqueEnemigo == 'fuego' || ataquejugador == 'planta' && ataqueEnemigo == 'agua')
    {
        puntajeEnemigo -= 1
        changeElement('vidaEnemigo',puntajeEnemigo)
        combateResultado = 'Ganaste'
    }
    else
    {
        puntajeJugador -= 1
        changeElement('vidaJugador',puntajeJugador)
        combateResultado = 'Perdiste'
    }
    
    revisarVidas()
}

function revisarVidas()
{   
    ataquesElegidos()

    if (puntajeJugador == 0)
    {
        mensajeFinal('Perdido')
    }
    else if (puntajeEnemigo == 0)
    {
        mensajeFinal('Ganado')
    }
}

function ataquesElegidos()
{
    let mostrarResultados = document.getElementById('Resultados')

    let ataquesResultados = document.createElement('p')
    ataquesResultados.innerHTML = 'Tu elegiste '+ataquejugador+', el enemigo eligio '+ataqueEnemigo+' - '+combateResultado

    mostrarResultados.appendChild(ataquesResultados)
}

function ataqueElementoEnemigo()
{
    let ataqueEnemigoAleatorio = numeroAleatorio(1,3)

    if (ataqueEnemigoAleatorio == 1)
    {
        ataqueEnemigo = 'fuego'
    }
    else if(ataqueEnemigoAleatorio == 2)
    {
        ataqueEnemigo = 'agua'
    }
    else
    {
        ataqueEnemigo = 'planta'
    }

    Resultados()

}

function ataqueFuego()
{
    ataquejugador = 'fuego'
    ataqueElementoEnemigo()
}

function ataqueAgua()
{
    ataquejugador = 'agua'
    ataqueElementoEnemigo()
}

function ataquePlanta()
{
    ataquejugador = 'planta'
    ataqueElementoEnemigo()
}


function checked(element)
{
    return document.getElementById(element).checked
}


function changeElement (pokemonName,element)
{
    return document.getElementById(pokemonName).innerHTML = element
}


function numeroAleatorio(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min)
}


function elegirPokemonEnemigo()
{
    let seleccion = numeroAleatorio(1,3)
    if (seleccion == 1)
    {
        changeElement('mascotaEnemigoNombre','Charizard')
    }
    else if (seleccion == 2)
    {
        changeElement('mascotaEnemigoNombre','Greninja')
    }
    else if (seleccion == 3)
    {
        changeElement('mascotaEnemigoNombre','Sceptile')
    }
    
}


function elegirPokemonJugador()
{
    if (checked("Charmander"))
    {
        changeElement('mascotaJugadorNombre','Charizard')
        ocultarSeleccion()
        elegirPokemonEnemigo()
    }
    else if (checked('Squirtle'))
    {
        changeElement('mascotaJugadorNombre','Greninja')
        ocultarSeleccion()
        elegirPokemonEnemigo()
    }
    else if (checked('Bulbazor'))
    {
        changeElement('mascotaJugadorNombre','Sceptile')
        ocultarSeleccion()
        elegirPokemonEnemigo()
    }
    else
    {
        alert("Elige una opcion.")
    }

}


function ocultarSeleccion()
{
    let mostrarSeccioonAtaque = document.getElementById('Sellecion-de-habilidad')
    mostrarSeccioonAtaque.style.display = 'block'

    let seleccionJugador = document.getElementById('boton-seleccionar')
    seleccionJugador.disabled = true

    let secctionElegirChamp = document.getElementById('seleccion-champ-esconder')
    secctionElegirChamp.style.display = 'none'

    let bodybg = document.getElementById("primer-fondo")
    bodybg.disabled = true

    let cssFinal = document.getElementById("cssFinal")
    cssFinal.disabled = false
}


function reiniciar()
{
    location.reload()
}


window.addEventListener('load', iniciar)

