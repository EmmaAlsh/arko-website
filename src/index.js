// src/index.js
import "./styles.css";
import lineLeft from "./images/lineLeft.png";
import lineRight from "./images/lineRight.png";
import rectangle from "./images/rectangle.svg";
import rectangleOrange from "./images/rectangle-orange.svg";
import coffee1 from "./images/coffee1.svg";
import coffee2 from "./images/coffee2.svg";
import coffee3 from "./images/coffee3.svg";
import coffee4 from "./images/coffee4.svg";
import croissant from "./images/croissant.svg";
import medialuna from "./images/medialuna.svg"
import glass from "./images/glass.svg";
import toast from "./images/toast.svg"
import alfajor from "./images/alfajor.svg"
import cookie from "./images/cookie.svg"
import pancake from "./images/pancake.svg"
import coffeeHands from "./images/coffeeHands.svg";
import arkoLogo from "./images/arko-beige.svg";
import arkoLogoDark from "./images/arko.svg";

const content = document.getElementById("content");

/* ================================
   HERO
================================ */
const heroSection = document.createElement("section");
heroSection.classList.add("hero");

/* HEADER + NAV */
const header = document.createElement("header");
header.classList.add("dark");
const nav = document.createElement("nav");

const menuBtn = document.createElement("button");
menuBtn.textContent = "Menu";
const coursesBtn = document.createElement("button");
coursesBtn.textContent = "Cursos de barista";

nav.append(menuBtn, coursesBtn);
header.append(nav);

const heroTitle = document.createElement("h1");
heroTitle.textContent = "ARKO";
const heroSubtitle = document.createElement("h2");
heroSubtitle.textContent = "Café de especialidad";

heroSection.append(header, heroTitle, heroSubtitle);
content.append(heroSection);

const lineLeftImg = document.createElement("img");
lineLeftImg.src = lineLeft;
lineLeftImg.classList.add("line-left");
const lineRightImg = document.createElement("img");
lineRightImg.src = lineRight;
lineRightImg.classList.add("line-right");
heroSection.append(lineLeftImg, lineRightImg);

const navLogo = document.createElement("img");
navLogo.src = arkoLogo; 
navLogo.classList.add("nav-logo");
navLogo.style.cursor = "pointer";
navLogo.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
header.prepend(navLogo); //lo agrego antes que los botones del nav asi queda a la izquierda.

/* ================================
  TRANSITION RECTANGLES 
================================ */
const rectWidth = 40;
const gap = 40;
const totalPerRect = rectWidth + gap;
const extraRects = window.innerWidth <= 768 ? 8 : 1;

const numberOfRects =
  Math.ceil(window.innerWidth / totalPerRect) + extraRects;
//makeRow: crea una fila de rectángulos.
const makeRow = (cls, offset = false, src = rectangle) => {
  const row = document.createElement("div");
  row.classList.add("transition-row");
  if (offset) row.classList.add("offset");
  for (let i = 0; i < numberOfRects; i++) {
    const r = document.createElement("img");
    r.src = src;
    r.classList.add(cls);
    row.append(r);
  }
  return row;
};

/* Transición hero -> menú (3 filas) */
const heroToMenuTransition = document.createElement("div");
heroToMenuTransition.classList.add("transition");
//hago 3 filas de rectangulos
const heroRow1 = makeRow("rect");
const heroRow2 = makeRow("rect", true);
const heroRow3 = makeRow("rect");
heroToMenuTransition.append(heroRow1, heroRow2, heroRow3);

/* Transición menú -> sección filtrados (1 fila) */
const menuToBrewingTransition = document.createElement("div");
menuToBrewingTransition.classList.add("transition-bottom");
const bottomRow = makeRow("rect-bottom");
menuToBrewingTransition.append(bottomRow);

/* Transición filtrados -> panadería (1 fila) */
const brewingToBakeryTransition = document.createElement("div");
brewingToBakeryTransition.classList.add("transition-bottom-2");
const bottomRow2 = makeRow("rect-bottom-2");
brewingToBakeryTransition.append(bottomRow2);

//AGREGAR LAS DEMAS TRANSICIONES ACA 

/* RESIZE 
window.addEventListener('resize', () => {
  const newN = Math.ceil(window.innerWidth / totalPerRect) + 1;
  const cur = heroRow1.children.length;
  if (newN > cur) {
    for (let i = cur; i < newN; i++) {
      [heroRow1, heroRow2, heroRow3].forEach(row => {
        const r = document.createElement("img");
        r.src = rectangle; r.classList.add("rect");
        row.append(r);
      });
      const rb = document.createElement("img");
      rb.src = rectangle; rb.classList.add("rect-bottom");
      bottomRow.append(rb);
      const rb2 = document.createElement("img");
      rb2.src = rectangle; rb2.classList.add("rect-bottom-2");
      bottomRow2.append(rb2);
    }
  }
});*/

/* ================================
    MENU SECTION 
================================ */
const menuSection = document.createElement("section");
menuSection.classList.add("menu");

const menuTitle = document.createElement("h2");
menuTitle.classList.add("menu-title");
menuTitle.textContent = "MENÚ";

const menuDescription = document.createElement("p");
menuDescription.classList.add("menu-description");
menuDescription.append(
  "Nuestras bebidas no se sirven excesivamente calientes para así resaltar los mejores atributos de la misma.",
  document.createElement("br"),
  "Buscamos cuidarte y honrar el trabajo de los caficultores."
);

/* createMenuItem: crea items del menú */
const createMenuItem = (name, price) => {
  const item = document.createElement("div");
  item.classList.add("menu-item");
  const itemName = document.createElement("span");
  itemName.classList.add("item-name");
  itemName.textContent = name;
  const dots = document.createElement("span");
  dots.classList.add("dots");
  const itemPrice = document.createElement("span");
  itemPrice.classList.add("item-price");
  itemPrice.textContent = price;
  item.append(itemName, dots, itemPrice);
  return item;
};

/* createSizeSubtitle: crea subtitulos h3  */
const createSizeSubtitle = (text) => {
  const subtitle = document.createElement("h3");
  subtitle.classList.add("bigger-subtitle");
  subtitle.textContent = text;
  return subtitle;
};

/* dada una lista de tuplas, crea un div de opciones de menu */
const createOptionsBlock = (items) => {
  const options = document.createElement("div");
  options.classList.add("options");
  items.forEach(([name, price]) => options.append(createMenuItem(name, price)));
  return options;
};

/* Menu block */
const menuBlock = document.createElement("div");
menuBlock.classList.add("menu-block");

/* Desayunos */
const breakfastTitle = document.createElement("h2");
breakfastTitle.classList.add("breakfast-title");
breakfastTitle.textContent = "DESAYUNOS Y MERIENDAS";

const menuSubtitle = document.createElement("p");
menuSubtitle.classList.add("menu-subtitle");
menuSubtitle.textContent = "Salen con cualquiera de nuestros Espressos";

const breakfastOptions = createOptionsBlock([
  ["Tostadas + Dúo de untables a elección", "$2000"],
  ["Dos medialunas", "$2000"],
  ["Dos medialunas con jamón y queso", "$2000"],
]);

/* Título espressos con imágenes */
const espressosTitle = document.createElement("h2");
espressosTitle.classList.add("espressos-title");
const coffeeImg = document.createElement("img");
coffeeImg.src = coffee1;
coffeeImg.alt = "coffee";
coffeeImg.classList.add("coffee-img");
const croissantImg = document.createElement("img");
croissantImg.src = croissant;
croissantImg.alt = "croissant";
croissantImg.classList.add("croissant-img");
espressosTitle.append(coffeeImg, " ESPRESSOS ", croissantImg);

/* Taza chica */
const tazaChicaOptions = createOptionsBlock([
  ["Shot de café", "$3400"],
  ["Shot de café + agua caliente", "$3400"],
  ["Shot de café + leche texturizada", "$3600"],
]);

/* Vaso chico */
const vasoChicoOptions = createOptionsBlock([
  ["Shot de café + leche texturizada", "$4200"],
  ["2 shots de café + leche texturizada", "$4200"],
  ["2 shots de café + helado de americana", "$5000"],
]);

/* Taza mediana */
const tazaMedianaOptions = createOptionsBlock([
  ["2 shots de café", "$4000"],
  ["2 shots de café + agua caliente", "$4000"],
  ["Shot de café + leche texturizada", "$4500"],
  ["2 shots de café + leche texturizada", "$4500"],
]);

/* Taza grande — el último item no tiene precio así que lo creamos aparte */
const tazaGrandeOptions = createOptionsBlock([
  ["Shot de café + leche texturizada", "$4700"],
  ["2 shots de café + leche texturizada", "$4700"],
]);
const optionalItem = document.createElement("div");
optionalItem.classList.add("menu-item");
const optionalName = document.createElement("span");
optionalName.classList.add("item-name");
optionalName.textContent = "*Opcional con leche vegetal sin costo adicional.";
optionalItem.append(optionalName);
tazaGrandeOptions.append(optionalItem);

menuBlock.append(
  breakfastTitle,
  menuSubtitle,
  breakfastOptions,
  espressosTitle,
  createSizeSubtitle("TAZA CHICA:"),
  tazaChicaOptions,
  createSizeSubtitle("VASO CHICO:"),
  vasoChicoOptions,
  createSizeSubtitle("TAZA MEDIANA:"),
  tazaMedianaOptions,
  createSizeSubtitle("TAZA GRANDE:"),
  tazaGrandeOptions
);

menuSection.append(menuTitle, menuDescription, menuBlock, heroToMenuTransition, menuToBrewingTransition);

/* ================================
    BREWING SECTION
================================ */
const brewingSection = document.createElement("section");
brewingSection.classList.add("menu-section-2");

const brewingBlock = document.createElement("div");
brewingBlock.classList.add("menu-block");

/* createBrewingItem: crea un item de la lista con nombre y precio opcional */
const createBrewingItem = (name, price = null) => {
  const item = document.createElement("div");
  item.classList.add("brewing-item");
  const itemName = document.createElement("span");
  itemName.classList.add("item-name");
  itemName.textContent = name;
  item.append(itemName);
  if (price) {
    const dots = document.createElement("span");
    dots.classList.add("dots");
    const itemPrice = document.createElement("span");
    itemPrice.classList.add("item-price");
    itemPrice.textContent = price;
    item.append(dots, itemPrice);
  }
  return item;
};

/* createBrewingBlock: dado un array de [nombre, precio], crea el div de opciones */
const createBrewingBlock = (items) => {
  const block = document.createElement("div");
  block.classList.add("options-brewing");
  items.forEach(([name, price]) => block.append(createBrewingItem(name, price)));
  return block;
};

/* createBrewingTitle: crea un h2 de categoría con imagen a la izquierda */
const createBrewingTitle = (text, imgSrc, imgAlt, imgClass) => {
  const title = document.createElement("h2");
  title.classList.add("brewing-title");
  const img = document.createElement("img");
  img.src = imgSrc;
  img.alt = imgAlt;
  img.classList.add(imgClass);
  title.append(img, ` ${text}`);
  return title;
};

/* createBrewingSizeSubtitle: crea un h3 para tamaño de vaso/taza */
const createBrewingSizeSubtitle = (text) => {
  const subtitle = document.createElement("h3");
  subtitle.classList.add("bigger-subtitle-brewing");
  subtitle.textContent = text;
  return subtitle;
};

/* Subtítulo de sección */
const brewingDescription = document.createElement("p");
brewingDescription.classList.add("brewing-subtitle");
brewingDescription.textContent = "Si sos amante del café suave y aromático, ésta es tu bebida.";

/* Filtrados */
const filteredCoffeeBlock = createBrewingBlock([
  ["Chemex: Una taza de café suave y aromática", "1 Taza $5200/ 2 tazas $9400"],
  ["Aeropress: Bebida intensa y con gusto prolongado", "1 Taza $5200/ 2 tazas $9400"],
  ["V60: Café suave, se aprecia una acidez delicada y brillante", "1 Taza $5200/ 2 tazas $9400"],
  ["Prensa Francesa: Delicado y con gusto prolongado", "1 Taza $5200/ 2 tazas $9400"],
  ["Kalita: Café suave, aromático con cuerpo brillante", "1 Taza $5200/ 2 tazas $9400"],
  ["Origami: Café con mayor cuerpo, dulzura y buena consistencia", "1 Taza $5200/ 2 tazas $9400"],
]);

/* Cafés fríos */
const coldCoffeeBlock = createBrewingBlock([
  ["Iced Latte: Hielo + 2 shots de café + leche", "$6000"],
  ["Hibiscos Coffee: Hielo + cold brew + extracción de hibiscos", "$6000"],
  ["Espresso Tonic: Hielo + 2 shots de café + agua tónica", "$6000"],
  ["Orange Coffee: Hielo + 2 shots de café + jugo de naranja", "$6000"],
  ["Pomelo Cold Brew: Hielo + cold brew + jugo de pomelo", "$6000"],
  ["Cold Brew: Café infusionado en frío por tiempos prolongados", "$6000"],
  ["Affogato: 2 shots de café + helado de americana", "$5000"],
]);

/* Espressos fríos */
const coldEspressoMediumBlock = createBrewingBlock([
  ["2 shots de café + agua caliente", "$4500"],
  ["Shot de café + leche texturizada", "$5000"],
  ["2 shots de café + leche texturizada", "$5000"],
]);

const coldEspressoLargeBlock = createBrewingBlock([
  ["Shot de café + leche texturizada", "$5000"],
  ["2 shots de café + leche texturizada", "$5000"],
  ["*Opcional con leche vegetal sin costo adicional.", null],
]);

/* Bebidas */
const drinksBlock = createBrewingBlock([
  ["Gaseosa lata (Coca Cola/Sprite/Coca cola sin azúcar)", "$2500"],
  ["Agua tónica", "$2500"],
  ["Exprimido de Naranja", "$5000"],
  ["Limonada: limón + almíbar + soda", "$4300"],
  ["Licuado", "$5200"],
]);

/* Armar brewing block */
brewingBlock.append(
  createBrewingTitle("FILTRADOS/BREWING", coffee2, "coffee filtrado", "coffee2-img"),
  brewingDescription,
  filteredCoffeeBlock,
  createBrewingTitle("CAFÉS FRÍOS", coffee3, "cafe frio", "coffee3-img"),
  coldCoffeeBlock,
  createBrewingTitle("ESPRESSOS FRÍOS", coffee4, "espresso frio", "coffee4-img"),
  createBrewingSizeSubtitle("VASO MEDIANO:"),
  coldEspressoMediumBlock,
  createBrewingSizeSubtitle("VASO GRANDE:"),
  coldEspressoLargeBlock,
  createBrewingTitle("BEBIDAS", glass, "bebidas", "glass-img"),
  drinksBlock,
);

brewingSection.append(brewingBlock, brewingToBakeryTransition);
/* ================================
    BAKERY SECTION
================================ */
const bakerySection = document.createElement("section");
bakerySection.classList.add("section-3");

const bakeryBlock = document.createElement("div");
bakeryBlock.classList.add("menu-block");

/* createBakeryItem: crea un item de panadería con nombre y precio opcional */
const createBakeryItem = (name, price = null) => {
  const item = document.createElement("div");
  item.classList.add("panaderia-item");
  const itemName = document.createElement("span");
  itemName.classList.add("item-name");
  itemName.textContent = name;
  item.append(itemName);
  if (price) {
    const dots = document.createElement("span");
    dots.classList.add("dots");
    const itemPrice = document.createElement("span");
    itemPrice.classList.add("item-price");
    itemPrice.textContent = price;
    item.append(dots, itemPrice);
  }
  return item;
};

/* createBakeryGroup: crea un grupo de items con imagen flotante opcional */
const createBakeryGroup = (items, imgSrc = null, imgClass = null) => {
  const group = document.createElement("div");
  group.classList.add("panaderia-group");
  if (imgSrc) {
    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = imgClass;
    img.classList.add(imgClass);
    group.append(img);
  }
  items.forEach(item => group.append(item));
  return group;
};

/* createBakeryTitle: crea títulos h2 de categoría dentro de la sección */
const createBakeryTitle = (text) => {
  const title = document.createElement("h2");
  title.classList.add("section3-title2");
  title.textContent = text;
  return title;
};

/* createBakeryCategorySubtitle: crea subtítulos h3 de categoría */
const createBakeryCategorySubtitle = (text) => {
  const subtitle = document.createElement("h3");
  subtitle.classList.add("section3-subtitle");
  subtitle.textContent = text;
  return subtitle;
};

/* Título principal */
const bakeryTitle = document.createElement("h2");
bakeryTitle.classList.add("section3-title");
bakeryTitle.textContent = "PASTELERÍA Y PANADERÍA";

const bakeryOptions = document.createElement("div");
bakeryOptions.classList.add("options-panaderia");

/* Medialunas */
const medialunaGroup = createBakeryGroup([
  createBakeryItem("Medialuna Dulce / Salada", "$1700"),
  createBakeryItem("Medialuna con Jamón y Queso", "$2700"),
  createBakeryItem("Porción chipa de Queso", "$2500"),
], medialuna, "medialuna-img");

/* Tostadas */
const toastGroup = createBakeryGroup([
  createBakeryItem("Tostadas pan de campo, integrales o masa madre", "$4000"),
  createBakeryItem("*Las tostadas incluyen dúo de untables: queso crema, mermelada, dulce de leche o manteca."),
  createBakeryItem("*Opcional Nutella", "$2000"),
], toast, "toast-img");

/* Alfajores */
const alfajorGroup = createBakeryGroup([
  createBakeryItem("Porción de Budín", "$3500"),
  createBakeryItem("Alfajor de Maicena", "$3700"),
  createBakeryItem("Alfajor de Chocolate", "$3700"),
], alfajor, "alfajor-img");

/* Cookies y tortas */
const cookieGroup = createBakeryGroup([
  createBakeryItem("Cookies", "$2800"),
  createBakeryItem("Porción de Torta (consultar variedad)", "$4800"),
  createBakeryItem("Panqueque de la Casa: (sin TACC)"),
], cookie, "cookie-img");

/* Pancakes — grupo especial con imagen en el medio */
const pancakeGroup = document.createElement("div");
pancakeGroup.classList.add("panaderia-group");
const pancakeImg = document.createElement("img");
pancakeImg.src = pancake;
pancakeImg.alt = "pancake";
pancakeImg.classList.add("pancake-overlay");
pancakeGroup.append(
  createBakeryItem("- Con dulce de leche", "$4400"),
  pancakeImg,
  createBakeryItem("- Con nutela", "$5500"),
);

/* Más sabores de pancake */
const pancakeExtrasGroup = createBakeryGroup([
  createBakeryItem("- Con dulce de leche, banana y chocolate", "$4800"),
  createBakeryItem("- Con jamón y queso", "$4800"),
]);

/* Entre panes */
const sandwichesGroup = createBakeryGroup([
  createBakeryItem("Con jamón y queso", "$7300"),
  createBakeryItem("Jamón y palta", "$7700"),
  createBakeryItem("Tomatitos, queso y espinaca", "$7500"),
]);

const montaditosGroup = createBakeryGroup([
  createBakeryItem("Palta, queso untable, tomates y huevo", "$7700"),
]);

/* Bowls */
const bowlsGroup = createBakeryGroup([
  createBakeryItem("Bowl de yogurt natural, granola y frutas de estación", "$6500"),
  createBakeryItem("Bowl de frutas de estación", "$5900"),
]);

/* Cuartos de café */
const coffeeQuartersGroup = createBakeryGroup([
  createBakeryItem("Disfruta de los cuartos de café que ofrecemos de distintos orígenes alrededor de todo el mundo."),
  createBakeryItem("Consúltanos los cafés disponibles y llévalo en grano o molido", "$23200/$26500"),
]);

/* Armar opciones */
bakeryOptions.append(
  medialunaGroup,
  toastGroup,
  alfajorGroup,
  cookieGroup,
  pancakeGroup,
  pancakeExtrasGroup,
  createBakeryTitle("ENTRE PANES"),
  createBakeryCategorySubtitle("SUCULENTOS (de chipa, arabe, integral, de campo)"),
  sandwichesGroup,
  createBakeryCategorySubtitle("MONTADITOS (de campo, masa madre)"),
  montaditosGroup,
  createBakeryTitle("BOWL SALUDABLE"),
  bowlsGroup,
  createBakeryTitle("CUARTOS DE CAFÉ"),
  coffeeQuartersGroup,
);

bakeryBlock.append(bakeryTitle, bakeryOptions);
bakerySection.append(bakeryBlock);

/* Posicionar imágenes flotantes con JS */
/* Posicionar coffee2-img y coffee4-img con JS */
const positionLeftImages = () => {
  const block = brewingSection.querySelector('.menu-block');
  const blockRect = block.getBoundingClientRect();
  const sectionRect = brewingSection.getBoundingClientRect();
  const leftOffset = blockRect.left - sectionRect.left;
  brewingSection.querySelectorAll('.coffee2-img').forEach(img => {
    img.style.left = `${img.offsetWidth - leftOffset - 50}px`;
  });
};

/* Transición panadería -> cursos (2 filas naranjas) */
const bakeryToCoursesTransition = document.createElement("div");
bakeryToCoursesTransition.classList.add("transition-bottom-3");
const bakeryToCoursesRow1 = makeRow("rect-bottom-3", false, rectangleOrange);
const bakeryToCoursesRow2 = makeRow("rect-bottom-3", true, rectangleOrange);
bakeryToCoursesTransition.append(bakeryToCoursesRow1, bakeryToCoursesRow2);


/* Transición cursos -> footer (1 fila clara) */
const coursesToFooterTransition = document.createElement("div");
coursesToFooterTransition.classList.add("transition-bottom-4");
const coursesToFooterRow = makeRow("rect-bottom-4");
coursesToFooterTransition.append(coursesToFooterRow);

/* ================================
    COURSES SECTION
================================ */
const coursesSection = document.createElement("section");
coursesSection.classList.add("section-4");
coursesSection.id = "seccion-cursos";
coursesSection.prepend(bakeryToCoursesTransition);

const coursesContent = document.createElement("div");
coursesContent.classList.add("section4-div");

const coursesTitle = document.createElement("h2");
coursesTitle.classList.add("section4-title");
coursesTitle.textContent = "CURSOS DE BARISTA";

const coursesSubtitle = document.createElement("h2");
coursesSubtitle.classList.add("section4-subtitle");
coursesSubtitle.textContent = "¿Te gustaría conocer más sobre el café que vas a disfrutar?";

const coursesDescription = document.createElement("p");
coursesDescription.classList.add("section4-text");
coursesDescription.textContent = "Podés consultar sobre los cursos de barista que ofrecemos para quien quiera adentrarse mucho más en el mundo del café de especialidad, donde te enseñamos no solo como preparar el mejor café en casa, sino también, entender todo lo que está detrás de un café de especialidad.";

const courseTopics = [
  "Introducción al café de especialidad",
  "Trazabilidad",
  "Estación barista",
  "Espresso",
  "Máquinas y molinos",
  "Moliendas y calibración",
  "Leche, texturización e introducción al arte latte",
  "Experiencia sensorial",
  "Filtrados",
];

const coursesList = document.createElement("ul");
coursesList.classList.add("section4-list");
courseTopics.forEach(topic => {
  const li = document.createElement("li");
  li.textContent = topic;
  coursesList.append(li);
});

const coffeeHandsImg = document.createElement("img");
coffeeHandsImg.src = coffeeHands;
coffeeHandsImg.alt = "manos con café";
coffeeHandsImg.classList.add("coffeeHands-img");

coursesContent.append(coursesTitle, coursesSubtitle, coursesDescription, coursesList, coffeeHandsImg);
coursesSection.append(coursesContent, coursesToFooterTransition);
/* ================================
    FOOTER
================================ */

const footer = document.createElement("footer");
footer.classList.add("footer");

const footerText = document.createElement("p");
footerText.classList.add("footer-text");
footerText.append(
  "Puedes ver esto y más talleres (arte latte, avanzados y filtrados) en nuestro instagram ",
);
const instagramLink = document.createElement("a");
instagramLink.href = "https://instagram.com/artocafe";
instagramLink.target = "_blank";
instagramLink.classList.add("footer-link");
instagramLink.textContent = "@artocafe";
footerText.append(instagramLink);
footer.append(footerText);

/* Nav scroll */
menuSection.id = "seccion-menu";
menuBtn.addEventListener("click", () => {
  document.getElementById("seccion-menu").scrollIntoView({ behavior: "smooth" });
});
coursesBtn.addEventListener("click", () => {
  document.getElementById("seccion-cursos").scrollIntoView({ behavior: "smooth" });
});

content.append(menuSection, brewingSection, bakerySection, coursesSection, footer);
requestAnimationFrame(() => requestAnimationFrame(positionLeftImages));

/* ================================
    RESIZE
================================ */
window.addEventListener('resize', () => {
  const newN = Math.ceil(window.innerWidth / totalPerRect) + 1;
  const cur = heroRow1.children.length;
  if (newN > cur) {
    for (let i = cur; i < newN; i++) {
      [heroRow1, heroRow2, heroRow3].forEach(row => {
        const r = document.createElement("img");
        r.src = rectangle;
        r.classList.add("rect");
        row.append(r);
      });
      const rb = document.createElement("img");
      rb.src = rectangle; rb.classList.add("rect-bottom");
      bottomRow.append(rb);
      const rb2 = document.createElement("img");
      rb2.src = rectangle; rb2.classList.add("rect-bottom-2");
      bottomRow2.append(rb2);
      const rb3a = document.createElement("img");
      rb3a.src = rectangleOrange; rb3a.classList.add("rect-bottom-3");
      bakeryToCoursesRow1.append(rb3a);
      const rb3b = document.createElement("img");
      rb3b.src = rectangleOrange; rb3b.classList.add("rect-bottom-3");
      bakeryToCoursesRow2.append(rb3b);
      const rb4 = document.createElement("img");
      rb4.src = rectangle; rb4.classList.add("rect-bottom-4");
      coursesToFooterRow.append(rb4);
    }
  }
});

/* ================================
    SCROLL
================================ */
window.addEventListener('scroll', () => {
  const heroRect = heroSection.getBoundingClientRect();
  const menuRect = menuSection.getBoundingClientRect();
  const brewingRect = brewingSection.getBoundingClientRect();
  const bakeryRect = bakerySection.getBoundingClientRect();

  if (heroRect.bottom > 0) {
    header.classList.remove('light');
    header.classList.add('dark');
    header.classList.add('hero-mobile');
    navLogo.classList.remove('visible');
    navLogo.src = arkoLogo;
  } else if (menuRect.top < window.innerHeight && menuRect.bottom > 0) {
    header.classList.remove('hero-mobile');
    header.classList.remove('dark');
    header.classList.add('light');
    navLogo.classList.add('visible');
    navLogo.src = arkoLogo;
  } else if (brewingRect.top < window.innerHeight && brewingRect.bottom > 0) {
    header.classList.remove('hero-mobile');
    header.classList.remove('light');
    header.classList.add('dark');
    navLogo.classList.add('visible');
    navLogo.src = arkoLogoDark;
  } else if (bakeryRect.top < window.innerHeight) {
    header.classList.remove('hero-mobile');
    header.classList.remove('dark');
    header.classList.add('light');
    navLogo.classList.add('visible');
    navLogo.src = arkoLogo;
  }
});