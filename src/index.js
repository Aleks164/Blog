import makeLayout from "./htmlLayout";
import "./cssStyles/styles.css";

const nav = `<a href="./pages/index_grid.html"><span>GRID</span></a>
<a href="./pages/index_flex.html"><span>FLEX</span></a>
<a href="./pages/index_inline_block.html"><span>BLOCK/FLOAT</span></a>
<a href="./pages/leo.html"><span>Memo1eo (Memory game)</span></a>
<a href="./pages/carusel.html"><span>Dino pictures slide</span></a>`
makeLayout(nav);