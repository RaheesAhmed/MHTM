module.exports = function inputGroup(label, placeholder, { id, className, style } = {}, generateAttributes) {
    return `
      <div class="input-group mb-3"${generateAttributes({ id, className, style })}>
        <div class="input-group-prepend">
          <span class="input-group-text">${label}</span>
        </div>
        <input type="text" class="form-control" placeholder="${placeholder}">
      </div>
    `;
  };
  