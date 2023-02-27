import "../node_modules/@picocss/pico/css/pico.css";
import "./style.css";
import logo from './logo.svg'; 

// replace #logo with the logo

const logoElm = document.getElementById('logo') as HTMLDivElement;
logoElm.className = 'logo-div';
// create a new image element
const img = document.createElement('img');
img.src = logo;
img.className = 'logo';
logoElm.appendChild(img);

