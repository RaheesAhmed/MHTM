module.exports = function navs(links, { id, className, style } = {}, generateAttributes) {
    const navLinks = links.map(link => `<li class="nav-item"><a class="nav-link" href="${link.href}">${link.text}</a></li>`).join('');
    return `
      <ul class="nav"${generateAttributes({ id, className, style })}>
        ${navLinks}
      </ul>
    `;
  };
  