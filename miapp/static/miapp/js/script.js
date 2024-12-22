// Crear estrellas de fondo
function createStars() {
    const starsContainer = document.getElementById('stars');
    const numberOfStars = 200;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Posición aleatoria
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Tamaño aleatorio
        const size = Math.random() * 2;
        
        // Duración del parpadeo aleatoria
        const duration = 2 + Math.random() * 3;
        
        star.style.cssText = `
            left: ${x}%;
            top: ${y}%;
            width: ${size}px;
            height: ${size}px;
            --duration: ${duration}s;
        `;
        
        starsContainer.appendChild(star);
    }
}

function createShootingStars() {
    const container = document.querySelector('.shooting-stars');
    const numberOfStars = 5; // Puedes ajustar este número

    for(let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'shooting-star';
        
        // Posición inicial aleatoria
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        
        container.appendChild(star);
    }
}

// Llamar a la función cuando se carga la página
document.addEventListener('DOMContentLoaded', createShootingStars);

// Actualizar el timer
function updateTimer() {
    const startDate = new Date('2024-05-23T23:00:00');
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Inicializar todo
window.addEventListener('load', () => {
    createStars();
    
    setInterval(updateTimer, 1000);
    updateTimer();
});

function handleGift2Click() {
    const gift = document.querySelector('.gift-2');
    const modal = document.getElementById('giftModal2');
    const body = document.body;
    const audio = document.getElementById('backgroundMusic2');
    
    gift.style.animation = 'openGift 1s forwards';
    
    setTimeout(() => {
        modal.style.display = 'block';
        body.classList.add('scissors');
        gift.style.animation = 'floatGift 4s ease-in-out infinite';
        
        // Reproducir audio
        if (audio) {
            audio.currentTime = 0; // Reiniciar el audio al principio
            audio.play().catch(error => {
                console.log("Error reproduciendo audio:", error);
            });
        }

        // Inicializar la funcionalidad del sobre
        document.querySelector('.js-sticker').addEventListener('click', sticker);
    }, 1000);
}

function closeModal() {
    const modal = document.getElementById('giftModal2');
    const body = document.body;
    const audio = document.getElementById('backgroundMusic2');

    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }

    // Remove visible classes when closing
    document.querySelector('.js-envelop-content').classList.remove('envelop__content--visible');
    document.querySelector('.love-notes').classList.remove('love-notes--visible');
    
    modal.style.display = 'none';
    body.classList.remove('scissors');
    
    // Reset notes
    recize_notes();
    
    // Reset sticker position
    gsap.set(".js-sticker", { 
        width: "100%", 
        left: "0" 
    });
    
    // Reset up paper position
    gsap.set(".js-up-paper", {
        bottom: "0",
        rotation: 0,
        zIndex: 400,
        clipPath: "polygon(0% 0%, 100% 0%, 50% 81%)"
    });
    
    // Reset content
    gsap.set(".js-envelop-content", {
        height: "100%"
    });
    
    // Reattach event listeners
    setTimeout(() => {
        const sticker = document.querySelector('.js-sticker');
        if (sticker) {
            sticker.addEventListener('click', window.sticker);
        }
    }, 100);
}

let mobile_media_query = window.matchMedia("(max-width: 400px)");
let tablet_media_query = window.matchMedia("(min-width: 400px) and (max-width: 600px)");
const notes = document.querySelectorAll(".js-note");

function recize_notes() {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].classList.contains("active")) {
            notes[i].classList.remove("active");
            gsap.set(notes[i], {
                height: "30%",
                clearProps: "all"
            });
        }
    }
}

function notes_ready() {
    gsap.to(".js-envelop-content", {
        height: "110%",
        duration: 0.5
    });

    for (let i = 0; i < notes.length; i++) {
        notes[i].addEventListener("click", function() {
            if (mobile_media_query.matches) {
                if (this.classList.contains("active")) {
                    this.classList.remove("active");
                    gsap.set(this, {
                        height: "30%",
                        clearProps: "all"
                    });
                } else {
                    recize_notes();
                    this.classList.add("active");
                    gsap.set(this, {
                        height: 100 + 30 * i + "%"  // Reducimos los valores
                    });
                }
            } else if (tablet_media_query.matches) {
                if (this.classList.contains("active")) {
                    this.classList.remove("active");
                    gsap.set(this, {
                        height: "30%",
                        clearProps: "all"
                    });
                } else {
                    recize_notes();
                    this.classList.add("active");
                    gsap.set(this, {
                        height: 70 + 15 * i + "%"  // Reducimos los valores
                    });
                }
            } else {
                if (this.classList.contains("active")) {
                    this.classList.remove("active");
                    gsap.set(this, {
                        height: "30%",
                        clearProps: "all"
                    });
                } else {
                    recize_notes();
                    this.classList.add("active");
                    gsap.set(this, {
                        height: 60 + 15 * i + "%"  // Reducimos los valores
                    });
                }
            }
        });
    }
}

function set_up_paper() {
    var arr = [0, 0, 100, 0, 50, 61];
    gsap.set(".js-up-paper", {
        bottom: "97%",
        rotation: 180,
        zIndex: 200,
        clipPath: "polygon(" + arr[0] + "%" + arr[1] + "%," + arr[2] + "%" + arr[3] + "%," + arr[4] + "%" + arr[5] + "%)",
        onComplete: function() {
            document.querySelector('.js-envelop-content').classList.add('envelop__content--visible');
            document.querySelector('.love-notes').classList.add('love-notes--visible');
            notes_ready();
        }
    });
}


function envelop_transition() {
    gsap.to(".js-up-paper", {
        bottom: "1%",
        duration: 0.25,
        onComplete: set_up_paper
    });
    document.querySelector(".js-up-paper").removeEventListener("click", envelop_transition);
    document.querySelector(".js-up-paper").classList.remove("cursor");
}

function sticker() {
    gsap.set(".js-sticker", { width: "20%", left: "-80%" });
    document.body.classList.remove("scissors");
    document.querySelector(".js-sticker").removeEventListener("click", sticker);
    document.querySelector(".js-up-paper").addEventListener("click", envelop_transition);
    document.querySelector(".js-up-paper").classList.add("cursor");
}

function check() {
    const wrapper = document.querySelector('#giftModal1 .wrapper');
    const checkboxes = document.querySelectorAll('#giftModal1 input[type="checkbox"]');
    const clickMessage = document.querySelector('#giftModal1 spam');
    const clickMessagep = document.querySelector('#giftModal1 spap');
    const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
    
    if (!clickMessagep.style.opacity) {
        clickMessagep.style.opacity = '0';
    }

    if (allChecked) {
        if (!wrapper.classList.contains('throb')) {
            wrapper.classList.add('throb');
        }
        // Ocultar el mensaje cuando el corazón está completo
        clickMessage.style.opacity = '0';
        clickMessage.style.transition = 'opacity 0.5s ease';
        // mostrar
        clickMessagep.style.opacity = '1';
        clickMessagep.style.transition = 'opacity 0.5s ease';
    } else {
        if (wrapper.classList.contains('throb')) {
            wrapper.classList.remove('throb');
        }
        // Mostrar el mensaje cuando el corazón está incompleto
        clickMessage.style.opacity = '1';
        clickMessage.style.transition = 'opacity 0.5s ease';
        // ocultar
        clickMessagep.style.opacity = '0';
        clickMessagep.style.transition = 'opacity 0.5s ease';
    }
}

function handleGift1Click() {
    const gift = document.querySelector('.gift-1');
    const modal = document.getElementById('giftModal1');
    const body = document.body;
    const audio = document.getElementById('backgroundMusi1');
    
    gift.style.animation = 'openGift 1s forwards';
    
    setTimeout(() => {
        // Reproducir audio
        if (audio) {
            audio.currentTime = 0; // Reiniciar el audio al principio
            audio.play().catch(error => {
                console.log("Error reproduciendo audio:", error);
            });
        }
        modal.style.display = 'block';
        gift.style.animation = 'floatGift 4s ease-in-out infinite';
    }, 1000);
}

function closeModal1() {
    const modal = document.getElementById('giftModal1');
    modal.style.display = 'none';
    const audio = document.getElementById('backgroundMusi1');

    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
    
    // Resetear checkboxes
    const checkboxes = document.querySelectorAll('#giftModal1 input[type="checkbox"]');
    checkboxes.forEach(checkbox => checkbox.checked = false);
    
    // Remover clase throb
    const wrapper = document.querySelector('#giftModal1 .wrapper');
    wrapper.classList.remove('throb');
    
    // Resetear la visibilidad del mensaje
    const clickMessage = document.querySelector('#giftModal1 spam');
    clickMessage.style.opacity = '1';

    const clickMessagep = document.querySelector('#giftModal1 spap');
    if (clickMessagep) {
        clickMessagep.style.opacity = '0';
    }
}

function handleGift3Click() {
    const gift = document.querySelector('.gift-3');
    const modal = document.getElementById('giftModal3');
    const body = document.body;
    const audio = document.getElementById('backgroundMusic3');
    
    gift.style.animation = 'openGift 1s forwards';
    
    setTimeout(() => {
        modal.style.display = 'block';
        gift.style.animation = 'floatGift 4s ease-in-out infinite';

        // Reproducir audio
        if (audio) {
            audio.currentTime = 0; // Reiniciar el audio al principio
            audio.play().catch(error => {
                console.log("Error reproduciendo audio:", error);
            });
        }
        
        // Inicializar las tarjetas arrastrables
        const papers = Array.from(modal.querySelectorAll('.paper'));
        papers.forEach(paper => {
            const p = new Paper();
            p.init(paper);
        });
    }, 1000);
}

// Función para cerrar el modal 3
function closeModal3() {
    const modal = document.getElementById('giftModal3');
    modal.style.display = 'none';
    const audio = document.getElementById('backgroundMusic3');

    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
    
    // Resetear la posición y rotación de todos los papeles
    const papers = Array.from(modal.querySelectorAll('.paper'));
    papers.forEach(paper => {
        // Reiniciar las propiedades de transformación
        paper.style.transform = 'translateX(0px) translateY(0px) rotateZ(0deg)';
        paper.style.zIndex = '1'; // Reiniciar el z-index
    });
}

let currentPage = 1;

function handleGift4Click() {
    const gift = document.querySelector('.gift-4');
    const modal = document.getElementById('giftModal4');
    const audio = document.getElementById('backgroundMusic4');
    
    gift.style.animation = 'openGift 1s forwards';
    
    setTimeout(() => {
        modal.style.display = 'block';
        gift.style.animation = 'floatGift 4s ease-in-out infinite';
        
        showCurrentPage();

        // Reproducir audio
        if (audio) {
            audio.currentTime = 0; // Reiniciar el audio al principio
            audio.play().catch(error => {
                console.log("Error reproduciendo audio:", error);
            });
        }
    }, 1000);
}

function showCurrentPage() {
    const pages = document.querySelectorAll('.page');
    
    // Ocultar todas las páginas y quitar clases activas
    pages.forEach(page => {
        page.style.display = 'none';
        page.classList.remove('active');
    });
    
    // Mostrar la página actual
    const currentPageEl = document.querySelector(`.page[data-page="${currentPage}"]`);
    if (currentPageEl) {
        currentPageEl.style.display = 'flex';
        currentPageEl.classList.add('active');
    }
}

function pauseAllVideos() {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => video.pause());
}

function closeModal4() {
    const modal = document.getElementById('giftModal4');
    const audio = document.getElementById('backgroundMusic4');
    const spajText = document.querySelector('spaj');

    if (spajText) {
        spajText.classList.remove('visible');
    }
    
    pauseAllVideos(); // Pausa el video al cerrar el modal
    modal.style.display = 'none';
    
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
}

function handleBookNavigation() {
    const card = document.querySelector('.card');
    const pages = document.querySelectorAll('.page');
    let isAnimating = false;

    function animatePageChange(currentPageEl, nextPageEl, isForward = true) {
        if (isAnimating) return;
        isAnimating = true;

        currentPageEl.style.display = 'flex';
        nextPageEl.style.display = 'flex';

        currentPageEl.classList.remove('active');

        if (isForward) {
            currentPageEl.classList.add('page-exit');
            nextPageEl.classList.add('page-enter');
        } else {
            currentPageEl.classList.add('page-exit-reverse');
            nextPageEl.classList.add('page-enter-reverse');
        }

        setTimeout(() => {
            nextPageEl.classList.remove('page-enter', 'page-enter-reverse');
            nextPageEl.classList.add('active');

            setTimeout(() => {
                currentPageEl.style.display = 'none';
                currentPageEl.classList.remove('page-exit', 'page-exit-reverse');
                isAnimating = false;
            }, 500);
        }, 50);
    }

    function showPage(pageNumber) {
        if (pageNumber < 1 || pageNumber > pages.length) return;
        
        const currentPageEl = document.querySelector(`.page[data-page="${currentPage}"]`);
        const nextPageEl = document.querySelector(`.page[data-page="${pageNumber}"]`);
        const spajText = document.querySelector('spaj');
        
        if (spajText) {
            if (pageNumber === 8) { // En la última página
                // Esperar 10 segundos antes de mostrar el texto
                setTimeout(() => {
                    spajText.classList.add('visible');
                }, 17000);
            } else {
                spajText.classList.remove('visible');
            }
        }

        if (currentPageEl && nextPageEl && !isAnimating) {
            pauseAllVideos();
            const isForward = pageNumber > currentPage;

            pages.forEach(page => {
                if (page !== currentPageEl && page !== nextPageEl) {
                    page.style.display = 'none';
                    page.classList.remove('active');
                }
            });

            animatePageChange(currentPageEl, nextPageEl, isForward);
            currentPage = pageNumber; // Actualizar la página actual
        }
    }

    // Manejador para todos los botones de navegación
    document.querySelectorAll('.nav-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            
            const isNext = button.classList.contains('next-button');
            const targetPage = currentPage + (isNext ? 1 : -1);
            
            if (targetPage >= 1 && targetPage <= pages.length && !isAnimating) {
                showPage(targetPage);
            }
        });
    });

    // Inicialización cuando se abre la tarjeta
    card.addEventListener('mouseenter', () => {
        if (!card.classList.contains('initialized')) {
            setTimeout(() => {
                showCurrentPage();
                card.classList.add('initialized');
            }, 500);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const gift2 = document.querySelector('.gift-2');
    const modal = document.getElementById('giftModal2');
    const closeBtn2 = modal.querySelector('.close-modal');
    const gift1 = document.querySelector('.gift-1');
    const modal1 = document.getElementById('giftModal1');
    const closeBtn1 = modal1.querySelector('.close-modal');
    const gift3 = document.querySelector('.gift-3');
    const modal3 = document.getElementById('giftModal3');
    const closeBtn3 = modal3.querySelector('.close-modal');
    const gift4 = document.querySelector('.gift-4');
    const modal4 = document.getElementById('giftModal4');
    const closeBtn4 = modal4.querySelector('.close-modal');
    
    gift1.addEventListener('click', handleGift1Click);
    closeBtn1.addEventListener('click', () => {
        closeModal1();
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal1) {
            closeModal1();
        }
    });

    gift2.addEventListener('click', handleGift2Click);
    closeBtn2.addEventListener('click', () => {
        closeModal();
    });
    
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    gift3.addEventListener('click', handleGift3Click);
    closeBtn3.addEventListener('click', closeModal3);
    
    const papers = Array.from(modal3.querySelectorAll('.paper'));
    papers.forEach(paper => {
        const p = new Paper();
        p.init(paper);
        paperInstances.push(p); // Guardar la instancia
    });

    gift4.addEventListener('click', handleGift4Click);
    closeBtn4.addEventListener('click', () => {
        closeModal4();
    });
    
    window.addEventListener('click', (event) => {
        if (event.target === modal4) {
            closeModal4();
        }
    });

    handleBookNavigation();
});

let highestZ = 1;
class Paper {
    holdingPaper = false;
    mouseTouchX = 0;
    mouseTouchY = 0;
    mouseX = 0;
    mouseY = 0;
    prevMouseX = 0;
    prevMouseY = 0;
    velX = 0;
    velY = 0;
    rotation = Math.random() * 30 - 15;
    currentPaperX = 0;
    currentPaperY = 0;
    rotating = false;
    
    reset() {
        // Reiniciar todas las propiedades
        this.holdingPaper = false;
        this.mouseTouchX = 0;
        this.mouseTouchY = 0;
        this.mouseX = 0;
        this.mouseY = 0;
        this.prevMouseX = 0;
        this.prevMouseY = 0;
        this.velX = 0;
        this.velY = 0;
        this.rotation = Math.random() * 30 - 15;
        this.currentPaperX = 0;
        this.currentPaperY = 0;
        this.rotating = false;
    }
  init(paper) {
    document.addEventListener('mousemove', (e) => {
      if(!this.rotating) {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
        this.velX = this.mouseX - this.prevMouseX;
        this.velY = this.mouseY - this.prevMouseY;
      }
      const dirX = e.clientX - this.mouseTouchX;
      const dirY = e.clientY - this.mouseTouchY;
      const dirLength = Math.sqrt(dirX*dirX+dirY*dirY);
      const dirNormalizedX = dirX / dirLength;
      const dirNormalizedY = dirY / dirLength;
      const angle = Math.atan2(dirNormalizedY, dirNormalizedX);
      let degrees = 180 * angle / Math.PI;
      degrees = (360 + Math.round(degrees)) % 360;
      if(this.rotating) {
        this.rotation = degrees;
      }
      if(this.holdingPaper) {
        if(!this.rotating) {
          this.currentPaperX += this.velX;
          this.currentPaperY += this.velY;
        }
        this.prevMouseX = this.mouseX;
        this.prevMouseY = this.mouseY;
        paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px) rotateZ(${this.rotation}deg)`;
      }
    })
    paper.addEventListener('mousedown', (e) => {
      if(this.holdingPaper) return;
      this.holdingPaper = true;
      paper.style.zIndex = highestZ;
      highestZ += 1;
      if(e.button === 0) {
        this.mouseTouchX = this.mouseX;
        this.mouseTouchY = this.mouseY;
        this.prevMouseX = this.mouseX;
        this.prevMouseY = this.mouseY;
      }
      if(e.button === 2) {
        this.rotating = true;
      }
    });
    window.addEventListener('mouseup', () => {
      this.holdingPaper = false;
      this.rotating = false;
    });
  }
}

const paperInstances = [];
const papers = Array.from(document.querySelectorAll('.paper'));
papers.forEach(paper => {
  const p = new Paper();
  p.init(paper);
});
