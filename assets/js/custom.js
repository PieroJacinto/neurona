particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 15, // Reducido para menor densidad
      "density": {
        "enable": true,
        "value_area": 1000
      }
    },
    "color": {
      "value": "#059669" // Color turquesa
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      }
    },
    "opacity": {
      "value": 0.8,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 6, // Partículas más grandes
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 250, // Mayor distancia entre conexiones
      "color": "#059669", // Color turquesa para las líneas
      "opacity": 0.2, // Más sutil
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1.5, // Movimiento más lento
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "bounce", // Rebota en los bordes
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab" // Cambiado a grab para efecto más suave
      },
      "onclick": {
        "enable": false // Desactivado el click
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 300,
        "line_linked": {
          "opacity": 0.4
        }
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      }
    }
  },
  "retina_detect": true
});

/* ---- stats.js config ---- */

var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);