module.exports = function alert(type, message, { id, className, style } = {}, generateAttributes) {
    return `<div class="alert alert-${type}"${generateAttributes({ id, className, style })}>${message}</div>`;
  };
  