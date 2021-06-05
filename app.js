

///api
const api = "https://api.exchangerate.host/"


const el_currency_one= document.getElementById("currency_one");
const el_currency_two= document.getElementById("currency_two");
const el_amount= document.getElementById("amount");
const el_btn_converter = document.getElementById("btn-converter");
const el_result = document.getElementById("result");



///symbols

fetch("currencies.json").then(res=> res.json()).then(data =>  {
    console.log(data)
})


