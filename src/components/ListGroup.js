module.exports = function listGroup(items, { id, className, style } = {}, generateAttributes) {
    const listItems = items.map(item => `<li class="list-group-item">${item}</li>`).join('');
    return `
      <ul class="list-group"${generateAttributes({ id, className, style })}>
        ${listItems}
      </ul>
    `;
  };
  