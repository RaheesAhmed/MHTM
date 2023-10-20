module.exports = function tooltip(text, tooltipText, { id, className, style } = {}, generateAttributes) {
    return `<span data-toggle="tooltip" title="${tooltipText}"${generateAttributes({ id, className, style })}>${text}</span>`;
  };
  