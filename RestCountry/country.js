// console.log('ho');

const countryContainer = document.createElement("div");
countryContainer.classList.add("country-container");
const countryName = new URLSearchParams(location.search).get("name");
const container = document.querySelector(".container");
// console.log(countryName);

fetch(`https://restcountries.com/v3.1/name/${countryName}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data[0]);
    cardHtml = `
        <div class="image-container">
                   <img src="${data[0].flags.svg}" alt="">
               </div>
               <div class="border-container">
                   <div class="text-container">
                       <div class="first-text">
                           <h2>${data[0].name.common}</h2>
                           <p> <b>Population: </b> 7878 </p>
                           <p> <b>Region: </b> fasd </p>
                           <p> <b>Capital: </b> fasd</p>
                       </div>
                       <div class="text">
                           <p> <b>Population: </b> 7878 </p>
                           <p> <b>Region: </b> fasd </p>
                           <p> <b>Capital: </b> fasd</p>
                       </div>
   
                   </div>
                   <div>
   
                       <div class="border">
                           <b> Border Countries:</b> <a class="border-btn" href="#">France</a>
                           <a class="border-btn" href="#">Germany</a>
                       </div>
                   </div>
               </div>
     `;
    countryContainer.innerHTML = cardHtml;
    container.append(countryContainer);
  });
