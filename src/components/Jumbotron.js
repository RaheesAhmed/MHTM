module.exports = function jumbotron(title, content, { id, className, style } = {}, generateAttributes) {
    return `
      <div class="jumbotron"${generateAttributes({ id, className, style })}>
        <h1 class="display-4">${title}</h1>
        <p class="lead">${content}</p>
      </div>
    `;
  };
  