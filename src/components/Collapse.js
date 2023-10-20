module.exports = function collapse(id, content, { className, style } = {}, generateAttributes) {
    return `
      <div class="collapse" id="${id}"${generateAttributes({ className, style })}>
        <div class="card card-body">
          ${content}
        </div>
      </div>
    `;
  };
  