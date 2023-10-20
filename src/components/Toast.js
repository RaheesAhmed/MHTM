module.exports = function toast(title, content, { id, className, style } = {}, generateAttributes) {
    return `
      <div class="toast" role="alert" aria-live="assertive" aria-atomic="true"${generateAttributes({ id, className, style })}>
        <div class="toast-header">
          <strong class="mr-auto">${title}</strong>
          <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="toast-body">
          ${content}
        </div>
      </div>
    `;
  };
  