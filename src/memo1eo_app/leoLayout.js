export default function makeLayout(body) {
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
    <div id="b1" class="buttons "></div>
    <div id="b2" class="buttons "></div>
    <div id="b3" class="buttons "></div>
    <div id="b4" class="buttons "></div>
    <div id="b5" class="buttons "></div>
    <div id="b6" class="buttons "></div>
    <div id="b7" class="buttons "></div>
    <div id="b8" class="buttons "></div>
    <div id="b9" class="buttons "></div>
    <div id="b10" class="buttons "></div>
    <div id="b11" class="buttons "></div>
    <div id="b12" class="buttons "></div>
</div>`;
  const buttinList = document.querySelectorAll(".buttons");
  buttinList.forEach((el) => {
    el.onclick = function () {
      // eslint-disable-next-line no-undef
      clickOnElment(this);
    };
  });
}
