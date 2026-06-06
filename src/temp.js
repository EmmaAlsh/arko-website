const section4 = document.createElement("section");
section4.classList.add("section-4");
section4.innerHTML = `
  <div class="section4-div">
    <h2 class="section4-title">CURSOS DE BARISTA</h2>
    <h2 class="section4-subtitle">¿Te gustaría conocer más sobre el café que vas a disfrutar?</h2>
    <p class="section4-text">Podes consultar sobre los cursos de barista que ofrecemos para quien quiera adentrarse
mucho más en el mundo del café de especialidad, donde te enseñamos no solo como preparar el mejor café en casa, sino también, entender todo lo que está detrás de un café de especialidad.</p>
    <ul class="section4-list">
        <li>Introducción al café de especialidad</li>
        <li>Trazabilidad</li>
        <li>Estación barista</li>
        <li>Espresso</li>
        <li>Máquinas y molinos</li>
        <li>Moliendas y calibración</li>
        <li>Leche, texturización e introducción al arte latte</li>
        <li>Experiencia sensorial</li>
        <li>Filtrados</li>
      </ul>
      <img src="${coffeeHands}" alt="coffeeHands" class="coffeeHands-img">
  </div>
`;
section4.append(transitionBottom3);
