module.exports = function card(title, content, { id, className, style, imgSrc } = {}, generateAttributes) {
    let imgHtml = imgSrc ? `<img src="${imgSrc}" class="card-img-top" alt="${title}">` : '';
    return `
      <div class="card"${generateAttributes({ id, className, style })}>
        ${imgHtml}
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${content}</p>
        </div>
      </div>
    `;
  };
  