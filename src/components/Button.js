module.exports = function button(type, text, { id, className, style } = {}, generateAttributes) {
    return `<button type="${type}"${generateAttributes({ id, className, style })}>${text}</button>`;
  };
  