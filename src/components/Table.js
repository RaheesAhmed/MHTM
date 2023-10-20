module.exports = function table(rows, { id, className, style } = {}, generateAttributes) {
    const tableRows = rows.map(row => {
      const cells = row.map(cell => `<td>${cell}</td>`).join('');
      return `<tr>${cells}</tr>`;
    }).join('');
  
    return `
      <table class="table"${generateAttributes({ id, className, style })}>
        <tbody>
          ${tableRows}
        </tbody>
      </table>
    `;
  };
  