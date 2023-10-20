module.exports = function breadcrumbs(items, { id, className, style } = {}, generateAttributes) {
    const itemHTML = items.map(item => `<li class="breadcrumb-item"><a href="${item.href}">${item.text}</a></li>`).join('');
    return `
      <nav aria-label="breadcrumb"${generateAttributes({ id, className, style })}>
        <ol class="breadcrumb">
          ${itemHTML}
        </ol>
      </nav>
    `;
  };
  