module.exports = function header(title, { id, className, style } = {}, generateAttributes) {
    return `<header${generateAttributes({ id, className, style })}><h1>${title}</h1></header>`;
  };
  