window.addEventListener("DOMContentLoaded", () => {
  const results = document.querySelector(".answers");
  let a, b, c, D, x1, x2;

  function calcTotal() {
    if (a === 0) {
      alert("Введён неправильный коэффициент");
      return;
    }

    if (!a || !b || !c) {
      results.innerHTML = `
					<div>
						x1 = <span class="answer_x1">__</span>
					</div>
					<div>
						x2 = <span class="answer_x2">__</span>
					</div>
				`;
      return;
    } else {
      D = b * b - 4 * a * c;

      if (D < 0) {
        results.innerHTML = "<h1>Корней нет</h1>";
      } else if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);

        results.innerHTML = `
					<div>
						x1 = <span class="answer_x1">${x1}</span>
					</div>
					<div>
						x2 = <span class="answer_x2">${x2}</span>
					</div>
				`;
      } else {
        x1 = -b / (2 * a);
        results.innerHTML = `
					<div style="margin: 0">
						x = <span class="answer_x1">${x1}</span>
					</div>
				`;
      }
    }
  }

  function getInformation(selector) {
    const input = document.querySelector(selector);

    input.addEventListener("input", () => {
      if (!input.value.match(/^[-+]?\d*$/g)) {
        input.style.border = "1px solid red";
      } else {
        input.style.border = "1px solid black";
      }

      switch (input.getAttribute("id")) {
        case "a":
          a = +input.value;
          break;
        case "b":
          b = +input.value;
          break;
        case "c":
          c = +input.value;
          break;
        default:
      }

      calcTotal();
    });
  }

  getInformation(".a");
  getInformation(".c");
  getInformation(".b");

  calcTotal();
});
