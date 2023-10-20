module.exports = function modal(id, title, content, { className, style } = {}, generateAttributes) {
    return `
      <div class="modal fade" id="${id}"${generateAttributes({ className, style })}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">${title}</h5>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">
              ${content}
            </div>
          </div>
        </div>
      </div>
    `;
  };
  