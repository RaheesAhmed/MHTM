module.exports = function tabs(tabs, { id, className, style } = {}, generateAttributes) {
    const tabList = tabs.map((tab, index) => `<li class="nav-item"><a class="nav-link ${index === 0 ? 'active' : ''}" id="${id}-tab-${index}" data-toggle="tab" href="#${id}-${index}">${tab.label}</a></li>`).join('');
    const tabContent = tabs.map((tab, index) => `<div class="tab-pane fade ${index === 0 ? 'show active' : ''}" id="${id}-${index}">${tab.content}</div>`).join('');
  
    return `
      <div${generateAttributes({ id, className, style })}>
        <ul class="nav nav-tabs" id="${id}-tabs">
          ${tabList}
        </ul>
        <div class="tab-content" id="${id}-content">
          ${tabContent}
        </div>
      </div>
    `;
  };
  