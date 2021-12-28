export default function makeLayout() {
  const body = document.querySelector("body");

  body.innerHTML = `<div class="titleleo">
    <h4 class="title">Memo1eo</h4>
    <div onclick="start()" id="tryagain"><br>Leo
        <hr id="bthr"> Color
    </div>
    <div onclick="dino()" id="dino"><br><br>Dino!</div>
    <a href="./index_inline_block.html">
        <div id="leo"></div>
    </a>

</div>
<div id="hrd1">
    <hr id="hr1">
</div>
<div id="maindiv" class="maindiv">
    <div onclick="q(this)" id="b1" class="buttons "></div>
    <div onclick="q(this)" id="b2" class="buttons "></div>
    <div onclick="q(this)" id="b3" class="buttons "></div>
    <div onclick="q(this)" id="b4" class="buttons "></div>
    <div onclick="q(this)" id="b5" class="buttons "></div>
    <div onclick="q(this)" id="b6" class="buttons "></div>
    <div onclick="q(this)" id="b7" class="buttons "></div>
    <div onclick="q(this)" id="b8" class="buttons "></div>
    <div onclick="q(this)" id="b9" class="buttons "></div>
    <div onclick="q(this)" id="b10" class="buttons "></div>
    <div onclick="q(this)" id="b11" class="buttons "></div>
    <div onclick="q(this)" id="b12" class="buttons "></div>
</div>`;
}
