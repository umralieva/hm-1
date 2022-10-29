const som = document.querySelector("#som");
const rub = document.querySelector("#rub");
const usd = document.querySelector("#usd");

const handleConvert = (elem, target, targetTwo) => {
  elem.addEventListener("input", () => {
    const request = new XMLHttpRequest();
    request.open("GET", "data.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();
    request.addEventListener("load", () => {
const response = JSON.parse(request.response);

      if (elem === som) {
        (target.value = (elem.value / response.usd).toFixed(2))(
          (targetTwo.value = (elem.value / response.rub).toFixed(2))
        );
      } else if (elem === rub) {
        (target.value = (elem.value * response.rub).toFixed(2))(
          (targetTwo.value = (elem.value / response.rub / response.usd).toFixed(2))
        );
      } else if (elem === usd) {
        (target.value = (elem.value * response.usd).toFixed(2))(
          (targetTwo.value = ((elem.value * response.usd) / response.rub).toFixed(2))
        );
      }
        elem.value === "" ? (target.value = "") : null;
        elem.value === "" ? (targetTwo.value = "") : null;
    });
  });
};

handleConvert(som, usd, rub);
handleConvert(rub, som, usd);
handleConvert(usd, som, rub);
