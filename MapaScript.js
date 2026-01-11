const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeMenu');

  // Abrir y cerrar menú
hamburger.addEventListener('click', () => {
    navLinks.classList.add('show');
    overlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('show');
    overlay.classList.remove('active');
  });

overlay.addEventListener('click', () => {
    navLinks.classList.remove('show');
    overlay.classList.remove('active');
  });

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
      overlay.classList.remove('active');
    });
  });

  // Configura Zoom (imagen + botones)
const zoomArea = document.getElementById('zoomArea');
  // Detecta orientación: true = vertical, false = horizontal
const isPortrait = window.matchMedia("(orientation: portrait)").matches;
  // Definir maxScale según orientación
const maxSca = isPortrait ? 6 : 3;

const panzoomInstance = Panzoom(zoomArea, {
  maxScale: maxSca,
  minScale: 1,
  startScale: 1,
  animate: true
});

  // Ajustar maxScale al rotar pantalla
window.addEventListener("orientationchange", () => {
    setTimeout(() => {
      const isPortraitNow = window.matchMedia("(orientation: portrait)").matches;
      const newMaxScale = isPortraitNow ? 6 : 3;

      panzoomInstance.setOptions({ maxScale: newMaxScale });

      const currentScale = panzoomInstance.getScale();

    // Si el zoom actual es mayor al nuevo máximo, ajústalo
      if (currentScale > newMaxScale) {
        panzoomInstance.zoom(newMaxScale, {
          animate: true
        });
      }
    }, 300); // Esperar a que termine de rotar
  });


  // Permite hacer zoom con la rueda del ratón
zoomArea.parentElement.addEventListener('wheel', panzoomInstance.zoomWithWheel);

  // Botón para resetear zoom
const resetButton = document.getElementById('resetZoom');
  resetButton.addEventListener('click', () => {
    panzoomInstance.reset();
    setTimeout(() => {
      actualizarTamañoDeBotones();
    }, 300);
  });

  // Ruta de vídeos
const videoModal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');

videoModal.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget;
    const videoSrc = button.getAttribute('data-video');
    modalVideo.querySelector('source').src = videoSrc;
    modalVideo.load();
    modalVideo.play();
  });

videoModal.addEventListener('hidden.bs.modal', function () {
    modalVideo.pause();
    modalVideo.currentTime = 0;
  });

function zoomRelativoSinPan(relX, relY, scale = 2, panXRel = 0, panYRel = 0) {
    const zoomArea = document.getElementById('zoomArea');

  // reset visual animado
    panzoomInstance.reset({ animate: true });

    setTimeout(() => {
      const zoomRect = zoomArea.getBoundingClientRect();

      const focalX = zoomRect.width * relX;
      const focalY = zoomRect.height * relY;

      panzoomInstance.zoom(scale, {
        focal: { x: focalX, y: focalY },
        animate: true
      });

    // aplicar paneo si se necesita
      const panX = zoomRect.width * panXRel;
      const panY = zoomRect.height * panYRel;
      panzoomInstance.pan(panX, panY, { animate: true });
    }, 300); // Tiempo necesario para que el reset se termine de aplicar visualmente
  }


document.getElementById('ZoomAdm').addEventListener('click', (e) => {
    e.preventDefault();
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    if (isPortrait) {
    // Si está en vertical
      zoomRelativoSinPan(0.4584, 0.5066, 6, 0.04, 0.06);
    } else {
    // Si está en horizontal
      zoomRelativoSinPan(0.40, 0.50, 3, 0.04, -0.02);
    }
    });

document.getElementById('ZoomInf').addEventListener('click', (e) => {
    e.preventDefault();
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    if (isPortrait) {
      zoomRelativoSinPan(0.3656, 0.4045, 6, 0.13, 0.15);
    } else {
      zoomRelativoSinPan(0.3649, 0.4092, 3, 0.13, 0.09);
    }
    });
  
document.getElementById('ZoomIng').addEventListener('click', (e) => {
    e.preventDefault();
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    if (isPortrait) {
      zoomRelativoSinPan(0.3891, 0.3210, 5, 0.11, 0.24);
    } else {
      zoomRelativoSinPan(0.3891, 0.3210, 3, 0.11, 0.16);
    }
    });
    
document.getElementById('ZoomAgr').addEventListener('click', (e) => {
    e.preventDefault();
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    if (isPortrait) {
      zoomRelativoSinPan(0.6563, 0.4780, 6, -0.15, 0.10);
    } else {
      zoomRelativoSinPan(0.6563, 0.4780, 2.5, -0.15, -0.02);
    }
    });
  
document.getElementById('ZoomVet').addEventListener('click', (e) => {
    e.preventDefault();
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    if (isPortrait) {
      zoomRelativoSinPan(0.8174, 0.2941, 6, -0.33, 0.35);
    } else {
      zoomRelativoSinPan(0.8174, 0.2941, 2.5, -0.30, 0.20);
    }
    });
    
document.getElementById('ZoomExp').addEventListener('click', (e) => {
    e.preventDefault();
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    if (isPortrait) {
      zoomRelativoSinPan(0.3656, 0.4045, 6, -0.02, 0.13);
    } else {
      zoomRelativoSinPan(0.3649, 0.4092, 2.5, -0.02, -0.05);
    }
    });
  
document.getElementById('ZoomDep').addEventListener('click', (e) => {
    e.preventDefault();
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    if (isPortrait) {
      zoomRelativoSinPan(0.5523, 0.2531, 6, -0.06, 0.40);
    } else {
      zoomRelativoSinPan(0.5523, 0.2531, 2.4, -0.06, 0.23);
    }
    });
    
document.getElementById('ZoomTal').addEventListener('click', (e) => {
    e.preventDefault();
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    if (isPortrait) {
      zoomRelativoSinPan(0.8019, 0.4548, 5.8, -0.29, 0.20);
    } else {
      zoomRelativoSinPan(0.8019, 0.4548, 2.8, -0.28, 0.06);
    }
    });
  
document.getElementById('ZoomHos').addEventListener('click', (e) => {
    e.preventDefault();
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    if (isPortrait) {
      zoomRelativoSinPan(0.2705, 0.3856, 6, 0.25, 0.21);
    } else {
      zoomRelativoSinPan(0.2705, 0.3856, 2.8, 0.25, 0.09);
    }
});

function Pip() {
    var sound = document.getElementById("SOni");
    sound.play();
}

const tooltip = document.getElementById('tooltipLabel');
let tooltipTimeout;

document.querySelectorAll('.hotspot-btn').forEach(btn => {
  // Al pasar el mouse (hover)
  btn.addEventListener('mouseenter', () => {
    mostrarTooltip(btn);
  });

  // Al quitar el mouse (pero solo si no hiciste clic)
  btn.addEventListener('mouseleave', () => {
    if (!tooltip.classList.contains('fijado')) {
      ocultarTooltip();
    }
  });

  // Al hacer clic
  btn.addEventListener('click', () => {
    mostrarTooltip(btn, true); // mostrar y fijar
  });
});

function mostrarTooltip(btn, fijar = false) {
  const label = btn.getAttribute('data-label');
  const btnX = btn.offsetLeft + btn.offsetWidth / 20;
  const btnY = btn.offsetTop;

  tooltip.textContent = label;
  tooltip.style.left = btnX + 'px';
  tooltip.style.top = btnY + 'px';
  tooltip.style.opacity = 1;

  // Si es clic, fijamos la etiqueta de texto temporalmente
  if (fijar) {
    tooltip.classList.add('fijado');
    clearTimeout(tooltipTimeout);
    tooltipTimeout = setTimeout(() => {
      tooltip.classList.remove('fijado');
      tooltip.style.opacity = 0;
    }, 3000); // tiempo en milisegundos
  }
}

function ocultarTooltip() {
  tooltip.style.opacity = 0;
}

function actualizarTamañoDeBotones() {
  const escalaActual = panzoomInstance.getScale();

  const ajuste = 1.4;

  const escalaVisual = (1 / escalaActual) * ajuste;

  document.querySelectorAll('.hotspot-btn').forEach(btn => {
    btn.style.setProperty('--hotspot-scale', escalaVisual);
  });
  tooltip.style.setProperty('--hotspot-scale', escalaVisual);
}

actualizarTamañoDeBotones();

// Detectar cambios de zoom y pan
zoomArea.addEventListener('panzoomzoom', actualizarTamañoDeBotones);
zoomArea.addEventListener('panzoompan', actualizarTamañoDeBotones);

const modalTitle = document.querySelector('#videoModal .modal-title');
document.querySelectorAll('.hotspot-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    const label = btn.getAttribute('data-label');
    
    // Actualizar título del modal
    modalTitle.textContent = 'Zona seleccionada: ' + label;

    tooltip.textContent = label;
  });
});

const infoZonaBtn = document.getElementById('infoZonaBtn');
const infoZonaDiv = document.getElementById('infoZona');
let zonaActual = '';

videoModal.addEventListener('show.bs.modal', function (event) {
  const button = event.relatedTarget;
  const videoSrc = button.getAttribute('data-video');
  zonaActual = button.getAttribute('data-label'); // Texto de la zona seleccionada

  modalVideo.querySelector('source').src = videoSrc;
  modalVideo.load();
  modalVideo.play();

  infoZonaDiv.style.display = 'none'; // Ocultar info al abrir modal
  infoZonaDiv.innerHTML = ''; // Limpiar contenido previo
});

infoZonaBtn.addEventListener('click', () => {
  const info = obtenerInfoZona(zonaActual);
  infoZonaDiv.innerHTML = `<strong>${zonaActual}</strong><br>${info}`;
  infoZonaDiv.style.display = 'block';
});

function mostrarInfo() {
  const info = obtenerInfoZona(zonaActual);
  infoZonaDiv.innerHTML = `<strong>${zonaActual}</strong><br>${info}`;
  infoZonaDiv.style.display = 'block';
}

// Registra tanto click como touch
['click', 'touchend', 'pointerup'].forEach(evt => {
  infoZonaBtn.addEventListener(evt, e => {
    e.preventDefault();   // Evita doble click
    mostrarInfo();
  });
});

const textos = [
  '<strong>INSTRUCCIONES PARA PC:</strong> Usa la RUEDA del MOUSE para hacer ZOOM en el mapa, si lo llegas a perder, utiliza el botón de abajo, y mueve el mapa con click izquierdo.',
  '<strong>INSTRUCCIONES PARA Táctiles:</strong> Usa tus 2 DEDOS (Pellizca el mapa) para hacer ZOOM, si lo llegas a perder, utiliza el botón de abajo, y mueve el mapa con solo un dedo.',
  '<strong>TIP:</strong> Puedes tocar los puntos de colores del mapa para ver una previsualización e información de cada zona.',
  '<strong>TIP:</strong> El menú lateral te permite saltar directamente a cualquier área de la facultad.',
  '<strong>TIP:</strong> Haz zoom para ver con más claridad los accesos, edificios y zonas importantes.',
  '<strong>TIP:</strong> Para una mejor visualización del mapa, se recomienda usar una computadora.'
];

let indice = 0;
const p = document.getElementById("instrucciones");

setInterval(() => {
  p.style.opacity = 0;

  setTimeout(() => {
    indice = (indice + 1) % textos.length;
    p.innerHTML = textos[indice];
    p.style.opacity = 1;
  }, 1000);

}, 6000);

function obtenerInfoZona(zona) {
  const infoZonas = { //Lista de información de los lugares
    "Torniquetes": "Entrada 3 de la Facultad, aquí puedes tomar el camión del Suburbano, Intercampus, Cuatro Caminos o Politécnico.",
    "Letras": "Las letras de la Facultad...",
    "Entrada CIFESC": "Entrada al Centro de Idiomas (Edificio A10).",
    "Jardin Botánico": "Área verde con muchos cactus ¡Cuidado con espinarte!.",
    "CIFESC": "Aquí podrás tomar tus cursos de tus idiomas favoritos.",
    "Cafetería": "¿Tienes hambre? o ¿Necesitas sacar copias o fotos infantiles? Este es el lugar indicado",
    "Coordinación Administración y Contabilidad": "Aquí se ubican las coordinaciones de Admon y Conta.",
    "Pasillos": "En estos pasillos puedes subir al tercer piso del A6, en estos edificios dan Administración y Contabilidad.",
    "Explanada de Ingeniería": "Por lo regular, aquí venden paquetes para quienes se van a graduar, o bien, ponen lucha libre.",
    "A8 y A9": "En estos edificios dan ingenierías, IME, ITSE, etc.",
    "Servicios Médicos": "¿Te lastimaste o te sientes mal? ¿Necesitas que te apliquen una inyección? Puedes acudir aquí sin ningún costo.",
    "Coordinación de Ingeniería": "Aquí se ubica la coordinación de ingeniería.",
    "Comedor de Ingeniería": "¿Tienes hambre o quieres alguna botana? El comedor de ingeniería puede saciar tu antojo/hambre.",
    "Canchas": "En ciertos horarios están entrenando algún deporte, en otros las canchas están vacías y puedes jugar con tus amigos.",
    "LIME 1 y 2": "Laboratorios de Ingeniería Mecánica y Eléctrica 1 y 2.",
    "LIME 3 y 4": "Laboratorios de Ingeniería Mecánica y Eléctrica 3 y 4.",
    "Frontón": "Es un área especial para jugar Frontón con tus amigos.",
    "Gimnasio": "Para acceder aquí, primero debes sacar tu credencial deportiva en EXUBE.",
    "Campo": "En ciertos horarios entrenan algún deporte aquí, y más adelante están las canchas de Basquetball y Voleibol.",
    "A2 Arriba": "Aquí puedes tener acceso al piso de arriba del L3",
    "A1 y L1": "En esta zona se suele poner el Cuautitianguis, además de que conecta con varios puntos importantes de la Facultad.",
    "Explanada Agrícola": "En ocasiones llevan a cabo diferentes actividades recreativas.",
    "Modulo de Ventas": "Puedes comprar diferentes productos que han sido cosechados por los propios estudiantes o trabajadores de ahí.",
    "Estacionamiento Agrícola": "Aquí me dijeron que no podía tomar fotos ni vídeos D: (Esta es la entrada 2 de la Facultad).",
    "EXUBE y Comedor": "Aquí puedes encontrar la 'Extensión Universitaria (EXUBE)' o puedes ir a comer en la cafetería de MVZ.",
    "Interior de EXUBE": "En la Extensión Universitaria (EXUBE) puedes ir a conferencias, presentaciones, taller de canto, teatro, o cualquier otra actividad que se imparta dentro de este.",
    "Oficinas de Actividades Deportivas": "Si rodeas el EXUBE por fuera, encontrarás las oficinas de 'Actividades Deportivas' en la cual podrás tramitar tu credencial deportiva.",
    "Escudo MVZ": "Una de las áreas principales de MVZ marcado por la escultura de piedra",
    "A3 y A4": "Una de las áreas principales de MVZ marcado por las esculturas de metal, y el famoso puesto de Marce",
    "Corrales": "Como su nombre lo dice, hay corrales y muchos animales aquí",
    "A4 y L7": "Más edificios con una hermosa vista",
    "L6": "Es un edificio que a simple vista no lo notas hasta que entras o exploras",
    "Casa Blanca": "Aquí se llevan a cabo la mayoría de trámites de titulación",
    "CADI": "Es otro espacio donde se imparten cursos del centro de idiomas, de igual forma esta un poco escondido",
    "Taller Cultural": "De igual forma, se imparten diferentes talleres como lo es el taller de expresión corporal o teatro, etc.",
    "Taller de Escultura": "Puedes aprender a hacer esculturas... ¡CON METAL!",
    "Ajedrez": "De vez en cuando realizan algún torneo de ajedrez aquí, pero también puedes venir aquí por ocio.",
    "Entrada Corral": "Aquí puedes acceder a los corrales que tiene la Facultad.",
    "Entrada Hospital": "En realidad hay 2 entradas para el hospital, la que esta dentro de la Facultad (Esta) y la que esta fuera de la Facultad (Entrada 5).",
    "Hospital de Equinos": "Aquí es donde cuidan a (Valga la redundancia) los equinos",
    "Hospital de Pequeñas Especies": "Puedes traer a tu gato, perro, o alguna mascota pequeña que requiera atención médica con un costo por el servicio.",
    "Sala de Computo": "Estos salones son orientados a los alumnos de Administración y Contabilidad.",
    "Entrada del Auditorio": "Entrada al Auditorio Keller.",
    "Monumento": "En esta sección de la Facultad también se llevan a cabo eventos, como lo es la graduación de todas las carreras",
    "Gobierno": "Puedes hacer denuncias (Unidad de Jurídico), presentar proyectos (Unidad de patentación, emprendimiento y vinculación), etc. Si necesitas apoyo, recuerda que no estás sol@.",
    "UIM": "Unidad de Investigación Multidisciplinaria, como su nombre lo dice, hacen distintas investigaciones que son confidenciales (Cerca de este se encuentra la entrada 4 de la Facultad).",
    "Reloj": "Fue un donativo realizado por la primera generación de la Facultad durante su 50 aniversario de esta",
    "Bioterio": "No puedo decir que tienen aquí... ",
    "Centro de Computo (Coordinación de Info)": "Dentro se encuentran algunos salones que son usados para algunos cursos que imparte la facultad, así como también se ubica la Coordinación de Informática.",
    "Biblioteca": "Puedes donar libros, pedir prestado libros o incluso, si necesitas hacer uso de alguna computadora, pueden prestarte una, incluso si vienes a tener un poco de paz, es el lugar indicado (PROHIBIDO COMER Y BEBER ADENTRO).",
    "Servicios escolares": "Aquí es donde puedes pedir tu credencial, reemplazo de la credencial (Por si la perdiste), validar tu pago de inscripción o pedir constancias de estudio.",
    "Orientacion": "Puedes tener orientación para algunos trámites, actividades o bien, obtener ayuda psicológica.",
    "Gallineros": "Se les dice gallineros porque los techos del A12 (Ahora son salones para talleres) tienen techo de lámina, hace bastante calor ahí dentro, y cuando llueve no se escucha nada.",
    "Entrada A14": "Entrada a los edificios 'Nuevos' que estaban destinados a los de Diseño y Comunicación Visual, al final se los dieron a los informáticos y se imparten algunas clases de Admon y Conta.",
    "A11 y A6": "Pequeña intersección entre los gallineros y Admon.",
    "Cubiculos": "Algunos profesores puedes encontrarlos aquí.",
    "Explanada": "Aquí se llevan a cabo diferentes actividades, como lo es la feria del libro, feria del trabajo, venta de productos de la apicultura, etc.",
    "A13 y A14": "Una pequeña perspectiva de los edificios 'nuevos'.",
    "Auditorio Keller": "Por lo regular, se llevan a cabo distintas conferencias de cualquier tema, pero a veces realizan otros eventos distintos a los de las conferencias.",
    "A11 y L9": "A11 son los salones para Informática, mientras que L9 son salones para Ingeniería.",
    "Entrada Auditorio MVZ": "En realidad hay 2 entradas aquí, una unidad médica (Izquierda) y un Auditorio (Derecha).",
    "Entrada CUSI": "Entrada a la Clínica Universitaria de Salud Integral Almaraz, puedes entrar sin ser estudiante (Cerca de aquí se encuentra la entrada 4 de la Facultad).",
    "CUSI": "En esta clínica pueden brindarte distintos servicios de atención médica, como Medicina, Odontología u Optometria, todos con un costo."
  };
  return infoZonas[zona] || "Información no disponible.";
};


