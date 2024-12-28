function createPixelArt() {
    const canvas = document.getElementById('pixelCanvas');
    const ctx = canvas.getContext('2d');
    const pixelSize = 2;
    const img = new Image();

    // Add white frame before image starts drawing
    const frameDiv = document.createElement('div');
    frameDiv.className = 'frame-decoration';
    document.querySelector('.pixel-art-container').appendChild(frameDiv);

    // Initialize audio
    const audio = new Audio('/static/miapp/audios/music.mp3');
    audio.loop = true;

    img.onload = function() {
        // Start playing audio when image loads
        audio.play().catch(e => console.log('Audio autoplay prevented:', e));

        const modalWidth = document.querySelector('.pixel-art-content').offsetWidth * 0.6;
        const scale = modalWidth / img.width;
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;

        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        tempCtx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Apply rounded corners to the context
        ctx.beginPath();
        ctx.roundRect(0, 0, canvas.width, canvas.height, 15);
        ctx.clip();

        const imageData = tempCtx.getImageData(0, 0, canvas.width, canvas.height);
        const pixels = imageData.data;
        let x = 0;
        let y = 0;

        function drawNextPixel() {
            for(let i = 0; i < 100; i++) {
                if (y < canvas.height) {
                    const idx = (y * canvas.width + x) * 4;
                    ctx.fillStyle = `rgb(${pixels[idx]},${pixels[idx + 1]},${pixels[idx + 2]})`;
                    ctx.fillRect(x, y, pixelSize, pixelSize);

                    x += pixelSize;
                    if (x >= canvas.width) {
                        x = 0;
                        y += pixelSize;
                    }
                }
            }

            if (y < canvas.height) {
                requestAnimationFrame(drawNextPixel);
            } else {
                showPixelMessage();
            }
        }

        drawNextPixel();
    };

    img.src = '/static/miapp/images/image.png';
}

function showPixelMessage() {
    const message = "Hola mi amorcito, ya son siete meses. Increíble, ¿no? Quién iba a pensar que podríamos construir algo tan puro e ineflable. Quisiera dedicarte algunas de las palabras que salen desde lo más profundo de mí:\n\n" +
    "En estos siete meses de tenerte a mi lado, cada día me enamoro más de esa maravillosa espontaneidad que te hace única. Tu carisma ilumina hasta los momentos más simples, convirtiendo cada instante juntos en algo mágico y especial. No hay palabras suficientes para expresar lo que significas para mí, pero seguiré intentando describírtelo a lo largo de este mensajito.\n\n" +
    "Conoces bien que existe un hilo rojo invisible que une a las almas destinadas, pero lo más hermoso de nuestra historia es cómo ese hilo nos fue acercando poco a poco, como una danza delicada del destino. Durante dos años, el universo nos mantuvo cerca, compartiendo espacios, cruzando caminos, rodeados de las mismas personas, pero esperando el momento perfecto para que nuestros corazones estuvieran listos para reconocerse. Ahora entiendo por qué teníamos que esperar. Cada encuentro casual, cada momento en que estuvimos cerca sin saberlo, cada instante que pasó antes de que nuestros ojos realmente se encontraran, era parte de una hermosa coreografía del destino. El hilo rojo no solo nos conectaba, nos estaba preparando para el amor más profundo y verdadero. Cuando finalmente el momento llegó, cuando nuestros corazones estuvieron listos, fue como si todas las estrellas del universo se alinearan. No fue un flechazo instantáneo de amor como en la mayoría de ocasiones, fue un despertar, un reconocimiento de almas que siempre estuvieron destinadas a encontrarse. Cada día a tu lado me confirma que el tiempo que pasamos cerca sin estar juntos no fue en vano. Era el tiempo puliendo nuestras personalidades, preparándonos para este amor que ahora compartimos. Tu espontaneidad, tu carisma, tu forma única de ser, tu belleza, etc, todo eso siempre estuvo ahí, esperando el momento perfecto para entrar en mi vida y transformarla para siempre.\n\n" +
    "¿Sabes qué es lo más hermoso de nuestras noches compartiendo papas locas? No es solo la comida, es la magia que creamos juntos. Es ver cómo tus ojos brillan mientras decidimos qué serie ver, es sentir tu cabecita recostada en mi hombro, es escuchar tu risa cuando algo te divierte. Son esos momentos aparentemente simples los que se han convertido en los tesoros más preciados de mi corazón. En esos momentos, el mundo entero se reduce a nosotros dos, y no necesito nada más para ser completamente feliz.\n\n" +
    "Sé bien que en estos siete meses hemos enfrentado tanto momentos dulces como desafiantes, y cada uno de ellos ha servido para fortalecer este amor tan bonito que tenemos. Cada prueba que hemos enfrentado, cada obstáculo que hemos superado, cada lágrima y cada sonrisa han sido piedras preciosas que construyen nuestro camino juntos. Por superar de buena forma las diferentes situaciones, cada día estoy más convencido de que este amor está destinado a la eternidad. No es solo un presentimiento, es una certeza que siento en cada latido de mi corazón. Gracias una vez más por estos siete meses de amor puro y verdadero. Gracias por ser esa luz que ilumina mis días, por tu comprensión, por tu amor incondicional.\n\n" +
    "Perdóname por aquellas ocasiones en las que me he comportado mal y no he hecho lo que se debería. Pero ten la seguridad que estoy trabajando en eso para ofrecerte lo mejor que tengo, y con ello, hacerte feliz y enamorarte cada día más. Muchas gracias porque me haces querer ser mejor cada día, me inspiras a crecer, a soñar más alto, a ser el hombre que mereces tener a tu lado. Contigo he aprendido que el amor verdadero no solo se forma o demuestra en los momentos felices, sino también en los que son incómodos y complicados, esos son los que nos hacen crecer juntos, y los que definen lo que somos como equipo. Eres lo mejor que tengo, mi mayor tesoro, la bendición más hermosa que la vida me ha regalado.\n\n" +
    "Quiero que sepas que cuando pienso en nosotros, en nuestro futuro, mi corazón se llena de una emoción indescriptible. Imagino miles de días más comiendo cosas ricas, culeando como nos gusta, con millones de risas e infinitos momentos donde tu espontaneidad me sorprenda y me enamore aún más de ti.\n\n" +
    "Hay algo que me encanta demasiado de este amor lindo, y ese algo es que cada día me enamoro de una nueva faceta tuya, de un nuevo detalle que antes no había notado, de cualquier mínima cualidad que venga de ti. Gracias por ser ese regalo con el que me quedaré por siempre. Gracias por ser mi compañera, mi confidente, mi amor, mi todo. Eres lo mejor que tengo, el tesoro más valioso que la vida me ha regalado, y todas las cosas y palabras lindas que puedas imaginar.\n\n" +
    "Te amo con una intensidad que las palabras no pueden describir mi negrita preciosa, pero que espero que con este mensajito puedas hacerte una pequeña idea de lo que siento por el amor de mi vida. Que estos siete meses sean solo el comienzo de nuestra historia de amor eterna, una historia que el destino escribió con hilos rojos que nos unían en el momento preciso, y que nosotros pintamos cada día con los colores más hermosos del amor.\n\n" +
    "Sigue disfrutando de todas las sorpresas que este sitio web tiene para ti. Te amo, amor de mi única vida ❤️.";
    const messageContainer = document.getElementById('pixelMessage');
    const canvas = document.getElementById('pixelCanvas');
    const messageContainerParent = document.getElementById('pixelMessageContainer');
    messageContainerParent.style.width = `${canvas.width}px`;
    const frameMessage = "Si el universo se destruyera, mi amor por ti perduraría ❤️.";
    const frameMessageElement = document.getElementById('frameMessage');

    let index = 0;

    // Dividir el mensaje en párrafos
    const paragraphs = message.split('\n\n');
    let currentParagraph = 0;
    let charIndex = 0;
    let currentP = document.createElement('p');
    messageContainer.appendChild(currentP);

    function displayNextCharacter() {
        if (currentParagraph < paragraphs.length) {
            if (charIndex < paragraphs[currentParagraph].length) {
                setTimeout(() => {
                    frameMessageElement.textContent = frameMessage;
                    frameMessageElement.style.opacity = '1';
                });

                currentP.textContent += paragraphs[currentParagraph].charAt(charIndex);
                charIndex++;
                setTimeout(displayNextCharacter, 100);
            } else {
                currentParagraph++;
                charIndex = 0;
                if (currentParagraph < paragraphs.length) {
                    currentP = document.createElement('p');
                    messageContainer.appendChild(currentP);
                    setTimeout(displayNextCharacter, 100);
                }
            }
        }
    }

    displayNextCharacter();
}

function closePixelArt() {
    const modal = document.getElementById('pixelArtModal');
    const canvas = document.getElementById('pixelCanvas');
    const audio = document.querySelector('audio');

    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }

    modal.style.display = 'none';

    const backgroundCanvas = canvas.cloneNode(true);
    backgroundCanvas.className = 'background-pixelart';
    document.body.appendChild(backgroundCanvas);

    document.getElementById('selectBox').style.display = 'none';
    document.getElementById('loginBox').style.display = 'block';
}

let currentUser = '';

function showLogin(user) {
    currentUser = user;

    if (user === 'marian') {
        // Primero mostramos el modal con la imagen pixel art
        const modal = document.getElementById('pixelArtModal');
        modal.style.display = 'block';
        createPixelArt();

        // Configuramos el login pero aún no lo mostramos
        document.getElementById('loginTitle').textContent = '¡Bienvenida mi negrita hermosa! ❤️';
        document.getElementById('usernameHint').textContent = 'Tu usuario es el apodo que tiene tu hombre para ti  en WhatsApp y el número del día en que cumplimos mes (escribelo todo en minusculas y sin espacios)';
    } else {
        // Para Mauricio, mostramos directamente el login
        document.getElementById('selectBox').style.display = 'none';
        document.getElementById('loginBox').style.display = 'block';
        document.getElementById('loginTitle').textContent = '¡Bienvenido mi amor! ❤️';
        document.getElementById('usernameHint').textContent = 'Tu usuario es como te dice tú mujer';
    }
}

function validateForm(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (currentUser === 'marian') {
        if (username === 'negrettamia23' && password === '22032024') {
            window.location.href = '/home/';
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    } else {
        if (username === 'mihombre23' && password === '22032024') {
            window.location.href = '/home/';
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    }
}

function createHeartShape(x, y, size) {
    const points = [];
    for (let i = 0; i < 30; i++) {
        const t = (i / 30) * 2 * Math.PI;
        const x1 = 16 * Math.pow(Math.sin(t), 3);
        const y1 = 13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t);
        // Increase the size multiplier from previous value
        points.push({
            x: x + (x1 * size * 2), // Doubled the size multiplier
            y: y + (y1 * size * 2)  // Doubled the size multiplier
        });
    }
    return points;
}

const fireworkShapes = {
    heart: (x, y, size) => createHeartShape(x, y, size),
    ring: (x, y, size) => {
        const points = [];
        for (let i = 0; i < 30; i++) {
            const angle = (i / 30) * 2 * Math.PI;
            points.push({
                x: x + Math.cos(angle) * size * 40, // Increased from 20 to 40
                y: y + Math.sin(angle) * size * 40  // Increased from 20 to 40
            });
        }
        return points;
    },
    infinity: (x, y, size) => {
        const points = [];
        for (let i = 0; i < 60; i++) {
            const t = (i / 30) * Math.PI;
            points.push({
                x: x + size * 40 * Math.cos(t) / (1 + Math.sin(t) * Math.sin(t)), // Increased from 20 to 40
                y: y + size * 40 * Math.cos(t) * Math.sin(t) / (1 + Math.sin(t) * Math.sin(t)) // Increased from 20 to 40
            });
        }
        return points;
    }
};

function createRomanticFirework(x, y) {
    const colors = [
        '#ff4d6d', '#ff758f', '#ff99ac', '#ffb3c1',
        '#ff0000', '#ff69b4', '#ff1493', '#ff00ff',
        '#ffd700', '#ff8c00', '#ff69b4', '#da70d6'
    ];

    // Increase base size range
    const size = Math.random() * 3 + 3; // Increased from (0.5 + 1) to (1.5 + 1.5)
    const points = fireworkShapes[Object.keys(fireworkShapes)[Math.floor(Math.random() * Object.keys(fireworkShapes).length)]](x, y, size);

    points.forEach(point => {
        const particle = document.createElement('div');
        particle.className = 'firework-particle';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        // Increase particle size
        particle.style.width = '12px';  // Increased from 4px
        particle.style.height = '12px'; // Increased from 4px
        particle.style.borderRadius = '50%';
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        // Increase glow effect
        particle.style.boxShadow = `0 0 ${Math.random() * 20 + 10}px ${colors[Math.floor(Math.random() * colors.length)]}`; // Increased from (10 + 5) to (20 + 10)
        document.body.appendChild(particle);

        const duration = Math.random() * 1500 + 1500; // Increased duration for better visibility
        const animation = particle.animate([
            { left: x + 'px', top: y + 'px', opacity: 1 },
            { left: point.x + 'px', top: point.y + 'px', opacity: 0 }
        ], {
            duration: duration,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });

        animation.onfinish = () => particle.remove();
    });

    // Increase emoji size and quantity
    for (let i = 0; i < 8; i++) { // Increased from 5 to 8 emojis
        const emoji = document.createElement('div');
        emoji.className = 'heart-firework';
        emoji.innerHTML = romanticEmojis[Math.floor(Math.random() * romanticEmojis.length)];
        emoji.style.left = x + 'px';
        emoji.style.top = y + 'px';
        emoji.style.fontSize = '30px'; // Increased from 20px
        document.body.appendChild(emoji);

        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 200 + 100; // Increased from (100 + 50) to (200 + 100)
        const duration = Math.random() * 1500 + 2000;

        const animation = emoji.animate([
            {
                transform: 'translate(0, 0) scale(1) rotate(0deg)',
                opacity: 1
            },
            {
                transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0) rotate(${Math.random() * 360}deg)`,
                opacity: 0
            }
        ], {
            duration: duration,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });

        animation.onfinish = () => emoji.remove();
    }

    // Increase text size
    if (Math.random() < 0.3) {
        const text = document.createElement('div');
        text.className = 'love-text';
        text.textContent = loveWords[Math.floor(Math.random() * loveWords.length)];
        text.style.left = x + 'px';
        text.style.top = y + 'px';
        text.style.fontSize = '48px'; // Increased from 24px
        text.style.color = colors[Math.floor(Math.random() * colors.length)];
        document.body.appendChild(text);

        const animation = text.animate([
            { transform: 'translateY(0) scale(1)', opacity: 1 },
            { transform: 'translateY(-200px) scale(2)', opacity: 0 } // Increased rise distance and scale
        ], {
            duration: 2500, // Increased duration
            easing: 'ease-out'
        });

        animation.onfinish = () => text.remove();
    }
}

// Create Cupid's arrow effect
function createCupidArrow(startX, startY, endX, endY) {
    const arrow = document.createElement('div');
    arrow.className = 'cupid-arrow';
    arrow.innerHTML = '🏹';
    arrow.style.left = startX + 'px';
    arrow.style.top = startY + 'px';
    document.body.appendChild(arrow);

    const angle = Math.atan2(endY - startY, endX - startX);
    arrow.style.transform = `rotate(${angle}rad)`;

    const animation = arrow.animate([
        { left: startX + 'px', top: startY + 'px', opacity: 1 },
        { left: endX + 'px', top: endY + 'px', opacity: 0 }
    ], {
        duration: 1000,
        easing: 'ease-out'
    });

    animation.onfinish = () => {
        arrow.remove();
        createRomanticFirework(endX, endY);
    };
}

// Create gifts
const giftMessages = [
    '❤️ Eres mi mayor regalo',
    '💝 Cada día contigo es especial',
    '💌 Te amo infinitamente',
    '💖 Eres mi felicidad',
    '✨ Mi vida es mejor contigo',
    '💞 Tu risa es mi sonido favorito',
    '💕 Eres mi persona para siempre',
    '💓 El amor se inventó pensando en nosotros',
    '✨ Tú eres mi hogar donde quiera que estés'
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createGifts() {
    const giftEmojis = ['🎁', '🎀', '🎊', '🎈', '🎉', '🎆', '🌠', '💫', '🌟'];
    const shuffledEmojis = shuffleArray([...giftEmojis]); // Mezclar emojis

    // Configuración de la cuadrícula 3x3
    const rows = 3;
    const cols = 3;
    const cellWidth = window.innerWidth / cols;
    const cellHeight = window.innerHeight / rows;

    for (let i = 0; i < giftMessages.length; i++) {
        const gift = document.createElement('div');
        gift.className = 'gift';

        // Usar un emoji único para cada regalo
        gift.innerHTML = shuffledEmojis[i];
        gift.style.width = '40px';
        gift.style.height = '40px';
        gift.style.fontSize = '40px';
        gift.style.display = 'flex';
        gift.style.alignItems = 'center';
        gift.style.justifyContent = 'center';
        gift.style.background = 'transparent';
        gift.style.position = 'absolute';
        gift.style.cursor = 'pointer';
        gift.style.zIndex = '1000';

        // Calcular posición en la cuadrícula
        const row = Math.floor(i / cols);
        const col = i % cols;

        const baseX = col * cellWidth;
        const baseY = row * cellHeight;

        // Añadir aleatoriedad dentro de cada celda
        gift.style.left = (baseX + Math.random() * (cellWidth - 40)) + 'px';
        gift.style.top = (baseY + Math.random() * (cellHeight - 40)) + 'px';

        // Asignar mensaje único
        const messageIndex = i;
        gift.addEventListener('click', () => {
            const x = parseInt(gift.style.left) + 30;
            const y = parseInt(gift.style.top) + 30;
            createRomanticFirework(x, y);
            showSurprise(giftMessages[messageIndex], gift);
        });

        document.body.appendChild(gift);

        console.log(`Regalo ${i + 1} creado en posición:`, {
            left: gift.style.left,
            top: gift.style.top
        });
    }
}

function createPuppy() {
    const puppy = document.createElement('div');
    puppy.className = 'puppy';
    puppy.innerHTML = '🐕'; // Usar emoji de perrito
    puppy.style.fontSize = '40px';
    puppy.style.display = 'flex';
    puppy.style.alignItems = 'center';
    puppy.style.justifyContent = 'center';
    puppy.style.background = 'transparent';
    document.body.appendChild(puppy);

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    document.addEventListener('mousemove', (e) => {
        targetX = e.clientX - 25;
        targetY = e.clientY - 25;
    });

    function animatePuppy() {
        const dx = (targetX - currentX) * 0.1;
        const dy = (targetY - currentY) * 0.1;

        currentX += dx;
        currentY += dy;

        puppy.style.left = currentX + 'px';
        puppy.style.top = currentY + 'px';

        // Create heart trail
        if (Math.random() < 0.1) {
            const heart = document.createElement('div');
            heart.className = 'heart-trail';
            heart.innerHTML = '❤️';
            heart.style.left = (currentX + 25) + 'px';
            heart.style.top = (currentY + 25) + 'px';
            document.body.appendChild(heart);

            setTimeout(() => heart.remove(), 1000);
        }

        requestAnimationFrame(animatePuppy);
    }

    animatePuppy();
}

function showSurprise(message, element) {
    const bubble = document.createElement('div');
    bubble.className = 'surprise-bubble';
    bubble.textContent = message;
    bubble.style.left = element.style.left;
    bubble.style.top = parseInt(element.style.top) - 60 + 'px';

    document.body.appendChild(bubble);

    setTimeout(() => bubble.remove(), 2000);
}

// Initialize everything
window.addEventListener('load', () => {
    createGifts();
    createPuppy();
    initializeLoveMessages();

    // Crear random fireworks
    setInterval(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * (window.innerHeight * 0.7);
        createRomanticFirework(x, y);
    }, 2000);

    // Random Cupid's arrows
    setInterval(() => {
        const startX = -50;
        const startY = Math.random() * window.innerHeight;
        const endX = Math.random() * window.innerWidth;
        const endY = Math.random() * window.innerHeight;
        createCupidArrow(startX, startY, endX, endY);
    }, 4000);
});

// Modal functionality
const modal = document.getElementById('loveModal');
const modalImage = modal.querySelector('.modal-image');
const modalText = modal.querySelector('.modal-text');
const closeBtn = modal.querySelector('.close-modal');

// Event listeners for messages
document.querySelectorAll('.message').forEach(message => {
    message.addEventListener('click', () => {
        const imagePath = message.getAttribute('data-image');
        const messageText = message.getAttribute('data-text');

        modalImage.src = imagePath;
        modalText.textContent = messageText;
        modal.classList.add('active');
    });
});

// Close modal when clicking close button or outside
closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// Definir arrays al inicio del archivo
const romanticEmojis = ['❤️', '💘', '💝', '💖', '💗', '💓', '💕', '💞', '💌'];
const loveWords = [
    'Eres la razón de mi sonrisa',
    'Mi vida tiene sentido contigo',
    'Cada día a tu lado es un regalo',
    'Eres mi mejor sueño hecho realidad',
    'No hay nadie como tú en este mundo',
    'Me completas de una manera perfecta',
    'Eres mi refugio en este mundo caótico',
    'Cada segundo contigo vale una eternidad',
    'Eres mi luz en la oscuridad',
    'Mi corazón late solo por ti',
    'Tu amor es mi mayor bendición',
    'Eres mi pasado, presente y futuro',
    'No puedo imaginar mi vida sin ti',
    'Gracias por ser mi razón para luchar',
    'Eres el latido de mi corazón',
    'Mi amor por ti es infinito',
    'Juntos somos invencibles',
    'Eres mi sueño hecho realidad',
    'No puedo dejar de pensar en ti',
    'Tu amor llena mi vida de color',
    'Eres mi melodía favorita',
    'Todo lo que soy es gracias a ti',
    'Contigo todo es mejor',
    'Eres mi estrella en el cielo',
    'Me haces creer en el amor verdadero',
    'Cada día contigo es una aventura',
    ];

// Añadir función para inicializar los mensajes de amor
function initializeLoveMessages() {
    const container = document.createElement('div');
    container.className = 'love-messages-container';
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '1';
    container.style.fontSize = '25px';
    document.body.appendChild(container);

    function createRandomMessage() {
        const message = document.createElement('div');
        message.className = 'love-message';
        message.textContent = loveWords[Math.floor(Math.random() * loveWords.length)];
        message.style.position = 'absolute';
        message.style.left = `${Math.random() * (window.innerWidth - 200)}px`;
        message.style.top = `${Math.random() * (window.innerHeight - 100)}px`;
        message.style.opacity = '0';
        message.style.transition = 'opacity 1s ease-in-out';
        container.appendChild(message);

        // Forzar el reflow
        message.offsetHeight;

        // Hacer visible el mensaje
        message.style.opacity = '1';

        setTimeout(() => {
            message.style.opacity = '0';
            setTimeout(() => message.remove(), 1000);
        }, 6000);
    }

    // Crear mensajes periódicamente
    setInterval(createRandomMessage, 6000);
}