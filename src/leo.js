import "./leo.css";

var aqq = document.getElementById('maindiv');
function shuffle(array) {
	array.sort(() => Math.random() - 0.5);
}
var wow = aqq.getElementsByClassName("buttons");
var aramAray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
shuffle(aramAray);
var aramColor = ["coral", "blue", 'yellow', 'green', 'grey', 'AntiqueWhite', "coral", "blue", 'yellow', 'green', 'grey', 'AntiqueWhite'];
shuffle(aramColor);
wow = [...wow];

wow.forEach(function (item) {
	item.style.backgroundColor = (aramColor[wow.indexOf(item)]);
	item.style.transition = "all 1s";
	setTimeout(() => {
		item.classList.add("temp1");
		item.style.transition = "";
	}, 2458);
});

var firsttry, secondtry, we;
var firstbtn, secondbtn, aramanim;
var louder = false;
aramanim = ["animate__fadeOutUp", "animate__fadeOutTopLeft", "animate__fadeOutTopRight", "animate__fadeOutBottomRight", "animate__fadeOutBottomLeft"];

function q(button) {
	if (!louder) {

		if (firsttry) {
			button.classList.remove("temp1");
			secondtry = button.style.backgroundColor;
			secondbtn = button;

			if (firsttry === secondtry && !(firstbtn === secondbtn)) {
				firstbtn.classList.add("animate__rollOut");
				secondbtn.classList.add("animate__rollOut");
				firsttry = "";
				secondtry = "";
				louder = true;

				setTimeout(() => {
					firstbtn.style.visibility = "hidden";
					secondbtn.style.visibility = "hidden";
					louder = false;
					firstbtn.classList.remove("animate__rollOut");
					secondbtn.classList.remove("animate__rollOut");
				}, 1200);
			}
			else {
				firsttry = "";
				secondtry = "";
				louder = true;
				setTimeout(() => {
					firstbtn.classList.add("temp1");
					secondbtn.classList.add("temp1");
					louder = false;
				}, 1000);
			}
		}
		else {

			firsttry = button.style.backgroundColor;
			button.classList.remove("temp1");
			firstbtn = button;
		}
	}
}

function start() {
	if (!louder) {
		louder = true;

		shuffle(aramAray);
		shuffle(aramColor);


		wow.forEach(function (item) {
			item.classList.remove("a1", "a2", "a3", "a4", "a5", "a6", "a1", "a2", "a3", "a4", "a5", "a6");
			item.classList.remove("temp1");
			item.style.display = "inline-block";
			item.style.visibility = "visible";
			item.style.backgroundImage = "";
			item.onclick = function () { q(this) };
		});

		wow.forEach(function (item) {
			item.style.backgroundColor = (aramColor[wow.indexOf(item)]);
			item.style.transition = "all 1s";
			setTimeout(() => {
				item.classList.add("temp1");
				item.style.transition = "";
				louder = false;
			}, 3000);
		});
	}
}
function dino() {

	if (!louder) {
		louder = true;
		var aramColor = ["a1", "a2", "a3", "a4", "a5", "a6", "a1", "a2", "a3", "a4", "a5", "a6"];
		shuffle(aramAray);
		shuffle(aramColor);
		wow.forEach(function (item) {
			item.classList.remove("temp1");
			item.classList.remove("a1", "a2", "a3", "a4", "a5", "a6", "a1", "a2", "a3", "a4", "a5", "a6");
			item.classList.remove("animate__fadeOutUp", "animate__fadeOutTopLeft", "animate__fadeOutTopRight", "animate__fadeOutBottomRight", "animate__fadeOutBottomLeft");
			item.style.display = "inline-block";
			item.style.visibility = "visible";
			item.onclick = function () { dinoq(this) };
		});
		wow.forEach(function (item) {
			item.classList.add(aramColor[wow.indexOf(item)]);
			item.style.transition = "all 2.5s";
			setTimeout(() => {
				item.style.transition = "";
				item.classList.add("temp1");
				louder = false;
			}, 3000);
		});
	}
}

function dinoq(button) {
	shuffle(aramanim);
	if (!louder) {

		if (firsttry) {
			secondtry = [...button.classList];
			button.classList.remove("temp1");
			secondbtn = button;


			if (firsttry[1] === secondtry[1] && !(firstbtn === secondbtn)) {
				firstbtn.classList.add(aramanim[1]);
				secondbtn.classList.add(aramanim[2]);
				firsttry = "";
				secondtry = "";
				louder = true;
				setTimeout(() => {
					firstbtn.classList.remove(aramanim[1]);
					secondbtn.classList.remove(aramanim[2]);
					firstbtn.style.visibility = "hidden";
					secondbtn.style.visibility = "hidden";
					louder = false;
				}, 1000);
			}
			else {
				firsttry = "";
				secondtry = "";
				louder = true;
				setTimeout(() => {
					firstbtn.classList.add("temp1");
					secondbtn.classList.add("temp1");
					louder = false;
				}, 1000);
			}
		}
		else {
			firsttry = [...button.classList];
			button.classList.remove("temp1");
			firstbtn = button;
		}
	}
}
