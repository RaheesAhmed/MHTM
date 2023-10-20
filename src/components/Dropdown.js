module.exports = function dropdown(label, items, { id, className, style } = {}, generateAttributes) {
    const itemHTML = items.map(item => `<a class="dropdown-item" href="${item.href}">${item.text}</a>`).join('');
    return `
      <div class="dropdown"${generateAttributes({ id, className, style })}>
        <button class="btn btn-secondary dropdown-toggle" type="button" id="${id}-dropdown" data-toggle="dropdown">
          ${label}
        </button>
        <div class="dropdown-menu" aria-labelledby="${id}-dropdown">
          ${itemHTML}
        </div>
      </div>
    `;
  };
  