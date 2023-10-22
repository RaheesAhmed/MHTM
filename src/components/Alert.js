module.exports = function alert(type, message, options = {}, generateAttributes) {
    return `<div class="alert alert-${type}"${generateAttributes(options)}>${message}</div>`;
  };
  