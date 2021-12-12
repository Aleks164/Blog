import "./styles.css";
import makeLayout from "./htmlLayout";

const nav = `<a href="./pages/index_grid.html"><span>GRID</span></a>
<a href="./pages/index_flex.html"><span>FLEX</span></a>
<a href="./pages/index_inline_block.html"><span>BLOCK/FLOAT</span></a>
<a href="./pages/leo.html"><span>Memo1eo (Memory game)</span></a>`
makeLayout(nav);