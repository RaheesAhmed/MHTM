module.exports = function scrollspy(content, { id, className, style } = {}, generateAttributes) {
    return `
      <div data-spy="scroll" data-target="#${id}-navbar" data-offset="0"${generateAttributes({ id, className, style })}>
        ${content}
      </div>
    `;
  };
  