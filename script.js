const searchInput = document.getElementById('searchInput');
const regionFilter = document.getElementById('regionFilter');
const countryList = document.getElementById('countryList');
const toggler = document.getElementById("toggler")

const apiUrl = 'https://restcountries.com/v3.1/all';

async function getCountries() {
  try {
    const response = await fetch(apiUrl);
    const countries = await response.json();
    return countries;
  } catch (error) {
    console.error('Error fetching countries:', error);
  }
}



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

function displayCountries(countries) {
  countryList.innerHTML = '';

  countries.forEach(country => {
    const countryCard = document.createElement('div');
    countryCard.classList.add('country-card');

    const countryName = document.createElement('h2');
    countryName.textContent = country.name.common;

    const countryPopulation = document.createElement('p');
    countryPopulation.textContent = `Population: ${country.population}`;

    const countryRegion = document.createElement('p');
    countryRegion.textContent = `Region: ${country.region}`;

    const countryCapital = document.createElement('p');
    countryCapital.textContent = `Capital: ${country.capital}`;

    const countryFlag = document.createElement('img');
    countryFlag.src = country.flags.png;
    countryFlag.alt = `${country.name.common} Flag`;

    countryCard.appendChild(countryFlag);
    countryCard.appendChild(countryName);
    countryCard.appendChild(countryPopulation);
    countryCard.appendChild(countryCapital);
    countryCard.appendChild(countryRegion);
    
    countryCard.addEventListener('click', async () => {
      // if (e.target.tagName == "A" &&
      // !e.target.hasAttribute("target"))
      // {
      //   e.target.setAttribute("target", "_blank");
      // }
      // window.location.href = `${country.maps.googleMaps}`;
      // window.open(`${country.maps.googleMaps}`, '_blank');
      const countries = await getCountries()
      
      let selected = countries.filter((item) => {
        return item.name.common === country.name.common
      })
      let strgselected = JSON.stringify(selected)
      localStorage.setItem("country", strgselected)
      window.open("detail.html", '_blank');
    });

    countryList.appendChild(countryCard);
  });
}

async function filterCountries() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedRegion = regionFilter.value;
  const countries = await getCountries();

  const filteredCountries = countries.filter(country => 
    country.name.common.toLowerCase().includes(searchTerm) &&
      (selectedRegion === '' || country.region.includes(selectedRegion))
    // console.log(country);
  );

  displayCountries(filteredCountries);
  // console.log(filteredCountries);
}

searchInput.addEventListener('input', filterCountries);
regionFilter.addEventListener('change', filterCountries);

(async function () {
  filterCountries();
})();
