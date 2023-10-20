module.exports = function popover(text, popoverTitle, popoverContent, { id, className, style } = {}, generateAttributes) {
    return `<a tabindex="0" class="btn btn-link" role="button" data-toggle="popover" data-trigger="focus" title="${popoverTitle}" data-content="${popoverContent}"${generateAttributes({ id, className, style })}>${text}</a>`;
  };
  