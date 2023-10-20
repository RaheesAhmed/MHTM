module.exports = function utilities(content, { id, className, style } = {}, generateAttributes) {
    return `
      <div${generateAttributes({ id, className, style })}>
        ${content}
      </div>
    `;
  };
  