///api
const api = "https://api.exchangerate.host/";

const el_currency_one = document.getElementById("currency_one");
const el_currency_two = document.getElementById("currency_two");
const el_amount = document.getElementById("amount");
const el_btn_converter = document.getElementById("btn-converter");
const el_result = document.getElementById("result");
const loadimage = document.getElementById("loading");

///symbols

fetch("./currencies.json")
  .then((res) => res.json())
  .then((data) => {
    const keys = Object.keys(data);
    const values = Object.values(data);

    let options;
    for (let i = 0; i < keys.length; i++) {
      options += `<option value =${keys[i]}>${values[i]}</option>`;
    }

    //   += ile var olan optionun üzerine ekleme yaptım
    el_currency_one.innerHTML += options;
    el_currency_two.innerHTML += options;
  });

el_btn_converter.addEventListener("click", function () {
  loadimage.style.display = "block";
  setTimeout(() => {
    const base_currency = el_currency_one.value;

    const to = el_currency_two.value;
    const amount = el_amount.value;

    fetch(`${api}latest?base=${base_currency}`)
      .then((res) => res.json())
      .then((data) => {
        const rate = data.rates[to];

        el_result.innerHTML = `${amount} ${base_currency} = ${
          amount * rate
        } ${to}`;

        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDay();
        var hour = date.getHours();
        var minute = date.getMinutes();

        document.getElementById("hour").innerHTML = hour + ":" + minute;

        document.getElementById("date").innerHTML =
          day + "/" + month + "/" + year;

        loadimage.style.display = "none";
      });
  }, 1000);
});
