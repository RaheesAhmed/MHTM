module.exports = function pagination(pages, { id, className, style } = {}, generateAttributes) {
    const pageItems = pages.map(page => `<li class="page-item"><a class="page-link" href="${page.href}">${page.text}</a></li>`).join('');
    return `
      <nav aria-label="Page navigation"${generateAttributes({ id, className, style })}>
        <ul class="pagination">
          ${pageItems}
        </ul>
      </nav>
    `;
  };
  