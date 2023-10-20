# MHTM - My HTML Templating Module


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Initialize](#initialize)
  - [Header](#header)
  - [Navbar](#navbar)
  - [Card](#card)
  - [Alert](#alert)
  - [Badge](#badge)
  - [Button](#button)
  - [Dropdown](#dropdown)
  - [Modal](#modal)
  - [Breadcrumbs](#breadcrumbs)
  - [Progress](#progress)
  - [Tabs](#tabs)
  - [Carousel](#carousel)
  - [Table](#table)
  - [Tooltip](#tooltip)
  - [Collapse](#collapse)
  - [Form](#form)
  - [InputGroup](#inputgroup)
  - [Jumbotron](#jumbotron)
  - [ListGroup](#listgroup)
  - [Navs](#navs)
  - [Pagination](#pagination)
  - [Popover](#popover)
  - [Container](#container)
  - [Scrollspy](#scrollspy)
  - [Spinner](#spinner)
  - [Toast](#toast)
  - [Typeahead](#typeahead)
  - [Utilities](#utilities)
  - [FileUpload](#fileupload)
- [Contributing](#contributing)
- [License](#license)

## Installation

```
npm install mhtm
```

## Usage

### Initialize

First, import the package and create a new instance.

```
const { MHTM } = require('mhtm');
const page = new MHTM();
```

### Header

To add a header:

```
page.header("My Web Page", { className: "header" });
```

### Navbar

To add a navbar:

```
page.navbar([{ href: "#", text: "Home" }, { href: "#about", text: "About" }], { className: "navbar" });
```

### Card

To add a card:

```
page.card("This is a card.", { className: "card" });
```

### Alert

To add an alert:

```
page.alert("warning", "This is a warning alert.", { className: "alert" });
```

### Badge

To add a badge:

```
page.badge("primary", "New", { className: "badge" });
```

### Button

To add a button:

```
page.button("primary", "Click Me", { className: "button" });
```

### Dropdown

To add a dropdown:

```
page.dropdown("Dropdown", [{ text: "Action", href: "#" }, { text: "Another action", href: "#" }], { className: "dropdown" });
```

### Modal

To add a modal:

```
page.modal("myModal", "Modal Title", "Modal Content", { className: "modal" });
```

### Breadcrumbs

To add breadcrumbs:

```
page.breadcrumbs([{ text: "Home", href: "#" }, { text: "Library", href: "#" }, { text: "Data", href: "#" }], { className: "breadcrumbs" });
```

### Progress

To add a progress bar:

```
page.progress(50, 100, { className: "progress" });
```

### Tabs

To add tabs:

```
page.tabs([{ label: "Tab 1", content: "Content 1" }, { label: "Tab 2", content: "Content 2" }], { className: "tabs" });
```

### Carousel

To add a carousel:

```
page.carousel(["image1.jpg", "image2.jpg", "image3.jpg"], { className: "carousel" });
```

### Table

To add a table:

```
page.table([["Header 1", "Header 2"], ["Row 1, Col 1", "Row 1, Col 2"], ["Row 2, Col 1", "Row 2, Col 2"]], { className: "table" });
```

### Tooltip

To add a tooltip:

```
page.tooltip("Hover over me", "Tooltip text", { className: "tooltip" });
```

### Collapse

To add a collapsible element:

```
page.collapse("collapseID", "Collapsible content", { className: "collapse" });
```

### Form

To add a form:

```
page.form([{ label: "Email", type: "email", placeholder: "Enter email" }, { label: "Password", type: "password", placeholder: "Enter password" }], { className: "form" });
```

### InputGroup

To add an input group:

```
page.inputGroup("Email", "Enter your email", { className: "input-group" });
```

### Jumbotron

To add a jumbotron:

```
page.jumbotron("Welcome!", "This is a simple hero unit.", { className: "jumbotron" });
```

### ListGroup

To add a list group:

```
page.listGroup(["Item 1", "Item 2", "Item 3"], { className: "list-group" });
```

### Navs

To add navigation tabs or pills:

```
page.navs([{ text: "Home", href: "#" }, { text: "Profile", href: "#" }, { text: "Messages", href: "#" }], { className: "navs" });
```

### Pagination

To add pagination:

```
page.pagination(["Previous", 1, 2, 3, "Next"], { className: "pagination" });
```

### Popover

To add a popover:

```
page.popover("Click Me", "Popover Title", "Popover Content", { className: "popover" });
```

### Container

To add a container:

```
page.container("This is a container.", { className: "container" });
```

### Scrollspy

To add scrollspy:

```
page.scrollspy("Content to spy on", { className: "scrollspy" });
```

### Spinner

To add a spinner:

```
page.spinner({ className: "spinner" });
```

### Toast

To add a toast message:

```
page.toast("Toast Title", "This is a toast message.", { className: "toast" });
```

### Typeahead

To add a typeahead search:

```
page.typeahead("Search...", { className: "typeahead" });
```

### Utilities

To add utility classes:

```
page.utilities("Some utility content", { className: "text-center bg-light" });
```

### FileUpload

To add a file upload component:

```
page.fileUpload({ className: "file-upload" });
```

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

This project is licensed under the MIT License.
