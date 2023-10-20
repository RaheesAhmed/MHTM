module.exports = function spinner({ id, className, style, type } = {}, generateAttributes) {
    const spinnerType = type === 'grow' ? 'spinner-grow' : 'spinner-border';
    return `
      <div class="${spinnerType} text-primary"${generateAttributes({ id, className, style })} role="status">
        <span class="sr-only">Loading...</span>
      </div>
    `;
  };
  