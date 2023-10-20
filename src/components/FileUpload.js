module.exports = function fileUpload({ id = "customFile", label = "Choose file", className = "custom-file" } = {}, generateAttributes) {
    return `
      <div class="${className}"${generateAttributes({ id, className })}>
        <input type="file" class="custom-file-input" id="${id}">
        <label class="custom-file-label" for="${id}">${label}</label>
      </div>
      <script>
        // Add the following script to update the label text when a file is chosen
        document.getElementById('${id}').addEventListener('change', function() {
          var fileName = this.files[0].name;
          var label = document.querySelector("label[for='${id}']");
          label.textContent = fileName;
        });
      </script>
    `;
  };
  