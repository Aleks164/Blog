import makeLayout from "./htmlLayout";
import "./cssStyles/styles_grid.css";


const nav = `<a href="./index_grid.html"><span>GRID</span></a>
<a href="./index_flex.html"><span>FLEX</span></a>
<a href="./index_inline_block.html"><span>BLOCK/FLOAT</span></a>
<a href="./leo.html"><span>Memo1eo (Memory game)</span></a>
<a href="./carusel.html"><span>Dino pictures slide</span></a>`
makeLayout(nav);