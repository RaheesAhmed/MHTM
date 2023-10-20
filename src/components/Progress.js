module.exports = function progress(value, max, { id, className, style } = {}, generateAttributes) {
    return `
      <div class="progress"${generateAttributes({ id, className, style })}>
        <div class="progress-bar" role="progressbar" style="width: ${value}%" aria-valuenow="${value}" aria-valuemin="0" aria-valuemax="${max}"></div>
      </div>
    `;
  };
  