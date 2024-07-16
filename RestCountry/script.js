const countryContainer = document.querySelector(".countries-container");
const body = document.querySelector("body");
const mainContainer = document.querySelector("main-container");
fetch("https://restcountries.com/v3.1/all").then((res) => {
  res.json().then((data) => {
    // data = [];
    console.log(data.length);
    if (data.length < 1) {
      body.classList.add("no_data");
    }
    getCountry(data);
  });
});
 
const search = document.querySelector(".search");

search.addEventListener("input", (e) => {
  fetch(`https://restcountries.com/v3.1/name/${e.target.value}`)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      countryContainer.innerHTML = "";
      getCountry(data);
    });
});

function getCountry(data) {
  data.forEach((country) => {
    //   console.log(country);
    const countryCard = document.createElement("a");
    countryCard.classList.add("card");
    countryCard.href = `country.html?name=${country.name.common}`;

    // countryCard.href = `https://restcountries.com/v3.1/name/${country.name.common}`;

    countryCard.innerHTML = `
                          <img src="${country.flags.svg}" alt="flag" srcset="">
                          <div class="text-container">
                              <h4>${country.name.common}</h4>
                              <p> <b>Population: </b> ${country.population} </p>
                              <p> <b>Region: </b> ${country.region} </p>
                              <p> <b>Capital: </b> ${country.capital} </p>
                          </div>
      
      `;
    countryContainer.append(countryCard);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  body.classList.add("no_data");
  // body.classList.add("blureed");
});
window.addEventListener("load", () => {
  body.classList.remove("no_data");
  // body.classList.remove("blureed");
});
window.addEventListener("DOMContentLoaded", () => {
  mainContainer.classList.add("blureed");
});
window.addEventListener("load", () => {
  mainContainer.classList.remove("blureed");
});
