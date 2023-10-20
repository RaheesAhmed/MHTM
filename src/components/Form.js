module.exports = function form(fields, { id, className, style } = {}, generateAttributes) {
    const formFields = fields.map(field => `<div class="form-group"><label for="${field.id}">${field.label}</label><input type="${field.type}" class="form-control" id="${field.id}" placeholder="${field.placeholder}"></div>`).join('');
    return `
      <form${generateAttributes({ id, className, style })}>
        ${formFields}
      </form>
    `;
  };
  