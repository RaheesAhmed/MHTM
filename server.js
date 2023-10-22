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


  
  page.alert('warning', 'This is a warning!');
  page.button("Text", "Click ME", { style: 'width:50px;height:170px' });
  page.card("Title","My Card",{ style: 'width:250px;height:170px;background:red' })

  // Render the page
  res.send(page.render());
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
