//Crear un script que muestre una frase aleatoria cada vez que cargue el html

let frases = [
    "Hoy vas a tener un gran día",
    "Un viaje inesperado te traerá grandes alegrías",
    "Compra lotería ¡La suerte está de tu lado!",
    "La paciencia es una virtud. Espera un poco y verás resultados",
    "Un persona cercana necesita tu ayuda. Estar atento a las señales",
    "Tu creatividad está en su punto máximo. Es un buen momento para iniciar un nuevo proyecto",
    "Un nuevo amigo regresará a tu vida con noticias emocionantes",
    "La solución a tu problema está más cerca de lo que crees. Mira a tu alrededor",
    "Tu esfuerzo será recompensado pronto. Sigue adelante",
    "Una decisión importante se acerca. Confia en tu intuición",
    "Hoy es un buen día para aprender algo nuevo",
    "Cada día es una nueva oportunidad para cambiar tu vida",
    "Hoy es un buen día para perseguir tus sueños",
    "No es tu día de suerte"
];

let numFrases = frases.length;

let numAleatorio = Math.random() * numFrases;


numAleatorio = parseInt(numAleatorio);


document.getElementById("resultado").textContent = frases[numAleatorio];


//para que al darle al botón se recargue la página
function probarSuerte(){
    location.reload();
}

document.getElementById("probar").addEventListener('click', probarSuerte);