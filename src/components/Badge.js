module.exports = function badge(type, text, { id, className, style } = {}, generateAttributes) {
    return `<span class="badge badge-${type}"${generateAttributes({ id, className, style })}>${text}</span>`;
  };
  