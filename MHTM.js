const header = require('./src/components/Header');
const navbar = require('./src/components/Navbar');
const card = require('./src/components/Card');
const alert = require('./src/components/Alert');
const badge = require('./src/components/Badge');
const button = require('./src/components/Button');
const dropdown = require('./src/components/Dropdown');
const modal = require('./src/components/Modal');
const breadcrumbs = require('./src/components/Breadcrumbs');
const progress = require('./src/components/Progress');
const tabsComponent = require('./src/components/Tabs');
const carousel = require('./src/components/Carousel');
const table = require('./src/components/Table');
const tooltip = require('./src/components/Tooltip');
const collapse = require('./src/components/Collapse');
const form = require('./src/components/Form');
const inputGroup = require('./src/components/InputGroup');
const jumbotron = require('./src/components/Jumbotron');
const listGroup = require('./src/components/ListGroup');
const navs = require('./src/components/Navs');
const pagination = require('./src/components/Pagination');
const popover = require('./src/components/Popover');
const container = require('./src/components/Container');
const scrollspy = require('./src/components/Scrollspy');
const spinner = require('./src/components/Spinner');
const toast = require('./src/components/Toast');
const typeahead = require('./src/components/Typeahead');
const utilities = require('./src/components/Utilities');
const fileUpload = require('./src/components/FileUpload');


class MHTM {
  constructor() {
    this.html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>My Web Page</title>
        <!-- Bootstrap CSS -->
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
        <!-- Bootstrap JS and Popper.js -->
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      </head>
      <body>
    `;
    this.components = [];
  }

  // State Management
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.rerender();
  }

  // Re-rendering
  rerender() {
    this.html = '';
    this.components.forEach(fn => fn());
  }

  // Utility to generate attributes string
  generateAttributes({ id, className, style }) {
    let attributes = '';
    if (id) attributes += ` id="${id}"`;
    if (className) attributes += ` class="${className}"`;
    if (style) attributes += ` style="${style}"`;
    return attributes;
  }


  fileUpload(options) {
    const component = fileUpload(options, this.generateAttributes);
    this.html += component;
  }

  // Pre-made Components
  header(title, options) {
    const component = () => {
      this.html += header(title, options, this.generateAttributes);
    };
    this.components.push(component);
    component();
  }

  card(title, content, options) {
    const component = () => {
      this.html += card(title, content, options, this.generateAttributes);
    };
    this.components.push(component);
    component();
  }

  navbar(links, options) {
    const component = () => {
      this.html += navbar(links, options, this.generateAttributes);
    };
    this.components.push(component);
    component();
  }


  alert(type, message, options) {
    const component = () => {
      this.html += alert(type, message, options, this.generateAttributes);
    };
    this.components.push(component);
    component();
  }

  typeahead(placeholder, options) {
    const component = () => {
      this.html += typeahead(placeholder, options, this.generateAttributes);
    };
    this.components.push(component);
    component();
  }

  utilities(content, options) {
    const component = () => {
      this.html += utilities(content, options, this.generateAttributes);
    };
    this.components.push(component);
    component();
  }


  badge(type, text, options) {
    const component = () => {
      this.html += badge(type, text, options, this.generateAttributes);
    };
    this.components.push(component);
    component();
  }

  button(type, text, options) {
    const component = () => {
      this.html += button(type, text, options, this.generateAttributes);
    };
    this.components.push(component);
    component();
  }

  dropdown(label, items, options) {
    const component = () => {
      this.html += dropdown(label, items, options, this.generateAttributes);
    };
    this.components.push(component);
    component();
  }

  modal(id, title, content, options) {
    const component = () => {
      this.html += modal(id, title, content, options, this.generateAttributes);
    };
    this.components.push(component);
    component();
  }

  breadcrumbs(items, options) {
    const component = () => {
      this.html += breadcrumbs(items, options, this.generateAttributes);
    };
    this.components.push(component);
    component();
  }

  progress(value, max, options) {
    const component = () => {
      this.html += progress(value, max, options, this.generateAttributes);
    };
    this.components.push(component);
    component();
  }

  tabs(tabsData, options) {  // Renamed parameter to 'tabsData'
    const component = () => {
      this.html += tabsComponent(tabsData, options, this.generateAttributes);  // Use 'tabsComponent' here
    };
    this.components.push(component);
    component();
  }
  
  carousel(images, options) {
    const component = () => {
      this.html += carousel(images, options, this.generateAttributes);
    };
    this.components.push(component);
    component();
  }

  table(rows, options) {
    const component = () => {
      this.html += table(rows, options, this.generateAttributes);
    };
    this.components.push(component);
    component();
  }

  tooltip(text, tooltipText, options) {
    const component = () => {
      this.html += tooltip(text, tooltipText, options, this.generateAttributes);
    };
    this.components.push(component);
    component();
  }

  collapse(id, content, options) {
    const component = () => {
      this.html += collapse(id, content, options, this.generateAttributes);
    };
    this.components.push(component);
    component();
  }

  form(fields, options) {
    const component = () => {
      this.html += form(fields, options, this.generateAttributes);
    };
    this.components.push(component);
    component();
  }

  inputGroup(label, placeholder, options) {
    const component = () => {
      this.html += inputGroup(label, placeholder, options, this.generateAttributes);
    };
    this.components.push(component);
    component();
  }

  jumbotron(title, content, options) {
    const component = () => {
      this.html += jumbotron(title, content, options, this.generateAttributes);
    };
    this.components.push(component);
    component();
  }
  listGroup(items, options) {
    const component = () => {
      this.html += listGroup(items, options, this.generateAttributes);
    };
    this.components.push(component);
    component();
  }

  navs(links, options) {
    const component = () => {
      this.html += navs(links, options, this.generateAttributes);
    };
    this.components.push(component);
    component();
  }

  pagination(pages, options) {
    const component = () => {
      this.html += pagination(pages, options, this.generateAttributes);
    };
    this.components.push(component);
    component();
  }

  popover(text, popoverTitle, popoverContent, options) {
    const component = () => {
      this.html += popover(text, popoverTitle, popoverContent, options, this.generateAttributes);
    };
    this.components.push(component);
    component();
  }

  container(content, options) {
    const component = () => {
      this.html += container(content, options, this.generateAttributes);
    };
    this.components.push(component);
    component();
  }

  scrollspy(content, options) {
    const component = () => {
      this.html += scrollspy(content, options, this.generateAttributes);
    };
    this.components.push(component);
    component();
  }

  spinner(options) {
    const component = () => {
      this.html += spinner(options, this.generateAttributes);
    };
    this.components.push(component);
    component();
  }

  toast(title, content, options) {
    const component = () => {
      this.html += toast(title, content, options, this.generateAttributes);
    };
    this.components.push(component);
    component();
  }

  // Render
  render() {
    this.html += `
      </body>
      </html>
    `;
    return this.html;
  }

}


module.exports = MHTM;