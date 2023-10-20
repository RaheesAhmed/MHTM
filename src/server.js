const express = require('express');
const MHTM = require('./MHTM');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const page = new MHTM();

  // Header
  page.header("Welcome to My Advanced Web Page", { className: "header bg-primary text-white" });

  // Navbar with Dropdown
  page.navbar([
    { href: "#", text: "Home" },
    { href: "#about", text: "About" },
    { 
      text: "Dropdown",
      dropdown: [
        { href: "#action", text: "Action" },
        { href: "#another", text: "Another Action" }
      ]
    },
    { href: "#contact", text: "Contact" }
  ], { className: "navbar navbar-expand-lg navbar-light bg-light" });

  // Carousel
  page.carousel([
    { src: "image1.jpg", alt: "Image 1", caption: "Caption 1" },
    { src: "image2.jpg", alt: "Image 2", caption: "Caption 2" },
    { src: "image3.jpg", alt: "Image 3", caption: "Caption 3" }
  ], { id: "myCarousel", className: "carousel slide" });

  // Tabs
  page.tabs([
    { label: "Tab 1", content: "This is tab 1 content." },
    { label: "Tab 2", content: "This is tab 2 content." },
    { label: "Tab 3", content: "This is tab 3 content." }
  ], { id: "myTabs", className: "tabs my-4" });


  // Modal
  page.modal("Modal Title", "This is the modal content.", { id: "myModal", className: "modal fade" });

  // Tooltips and Popovers
  page.tooltip("Hover over me!", { placement: "top", text: "Tooltip text" });
  page.popover("Click me!", { placement: "bottom", title: "Popover title", content: "Popover content" });

  // Render the page
  res.send(page.render());
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
