module.exports = function container(content, { id, className, style, fluid } = {}, generateAttributes) {
    const containerClass = fluid ? 'container-fluid' : 'container';
    return `
      <div class="${containerClass}"${generateAttributes({ id, className, style })}>
        ${content}
      </div>
    `;
  };
  