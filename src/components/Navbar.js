module.exports = function navbar(links, { id, className, style, position } = {}, generateAttributes) {
    const listItems = links.map(link => `<li class="nav-item"><a class="nav-link" href="${link.href}">${link.text}</a></li>`).join('');
    const positionClass = position ? `justify-content-${position}` : '';
    return `
      <nav class="navbar navbar-expand-lg navbar-light bg-light"${generateAttributes({ id, className, style })}>
        <div class="container-fluid ${positionClass}">
          <ul class="navbar-nav">
            ${listItems}
          </ul>
        </div>
      </nav>
    `;
  };
  