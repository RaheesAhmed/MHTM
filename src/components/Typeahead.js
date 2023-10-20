module.exports = function typeahead(placeholder, { id, className, style } = {}, generateAttributes) {
    return `
      <input type="text" class="form-control typeahead" placeholder="${placeholder}"${generateAttributes({ id, className, style })}>
    `;
  };
  