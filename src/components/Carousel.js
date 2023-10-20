module.exports = function carousel(images, { id, className, style } = {}, generateAttributes) {
    const indicators = images.map((img, index) => `<li data-target="#${id}" data-slide-to="${index}" class="${index === 0 ? 'active' : ''}"></li>`).join('');
    const items = images.map((img, index) => `
      <div class="carousel-item ${index === 0 ? 'active' : ''}">
        <img src="${img.src}" class="d-block w-100" alt="${img.alt}">
        <div class="carousel-caption d-none d-md-block">
          <h5>${img.title}</h5>
          <p>${img.description}</p>
        </div>
      </div>
    `).join('');
  
    return `
      <div id="${id}" class="carousel slide"${generateAttributes({ className, style })} data-ride="carousel">
        <ol class="carousel-indicators">
          ${indicators}
        </ol>
        <div class="carousel-inner">
          ${items}
        </div>
        <a class="carousel-control-prev" href="#${id}" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#${id}" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    `;
  };
  