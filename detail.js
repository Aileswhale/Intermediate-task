let singleCountry = localStorage.getItem("country")
let backbtn = document.getElementById("back")
let country = JSON.parse(singleCountry)
const toggler = document.getElementById("toggler")
const detailList = document.getElementById("detailList")

toggler.addEventListener("click", () => {
  const element = document.body
  let toggleName = toggler.innerHTML
  element.classList.toggle("darkMode")
  if (toggleName === "Dark Mode") {
    
    toggler.innerHTML = "Light Mode";
  } else {
    toggler.innerHTML = "Dark Mode";
  }

})


    // const detailCard = document.createElement('div');
    // detailCard.classList.add('country-Card');
    // console.log(country[0].name.common);
    const countryName = document.createElement('h2');
    countryName.textContent = country[0].name.common;
    
    const countryPopulation = document.createElement('p');
    countryPopulation.textContent = `Population: ${country[0].population}`;

    const countryRegion = document.createElement('p');
countryRegion.textContent = `Region: ${country[0].region}`;
    // new ones
//  const countryNative = document.createElement('p');
// countryNative.textContent = `Native Name: ${country[0].name.native[Object.keys(country[0].name.native)[0]].common}`;
    
//  const countrySubRegion = document.createElement('p');
// countrySubRegion.textContent = `Sub region: ${country[0].subregion}`;
    
//      const topLevelDMN = document.createElement('p');
//     topLevelDMN.textContent = `Top Level Domain: ${country[0].tld[0]}`;

//     //  const currency = document.createElement('p');
//     // currency.textContent = `Currency: ${Object.keys(country[0].currencies).join(", ")}`;

//      const Independent = document.createElement('p');
//     Independent.textContent = `Independent: ${country[0].independent ? "Yes" : "No"}`;

//      const languages = document.createElement('p');
//     languages.textContent = `Region: ${Object.keys(country[0].languages).join(", ")}`;

// stop here
    const countryCapital = document.createElement('p');
countryCapital.textContent = `Capital: ${country[0].capital}`;
// detailList.appendChild(countryPopulation, countryRegion , countryCapital );
    const countryFlag = document.createElement('img');
    countryFlag.src = country[0].flags.png;
    countryFlag.alt = `${country[0].name.common} Flag`;

    

    detailList.appendChild(countryFlag);
    detailList.appendChild(countryName);
    detailList.appendChild(countryCapital);
    detailList.appendChild(countryRegion);
detailList.appendChild(countryPopulation);
    detailList.appendChild(languages);
detailList.appendChild(Independent);
// detailList.appendChild(currency);
detailList.appendChild(topLevelDMN);
detailList.appendChild(countrySubRegion);
detailList.appendChild(countryNative);


    // detailList.appendChild(detailCard);


backbtn.addEventListener("click", () => {
    localStorage.removeItem("country");
})

