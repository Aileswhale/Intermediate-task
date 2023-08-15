const searchInput = document.getElementById('searchInput');
const regionFilter = document.getElementById('regionFilter');
const countryList = document.getElementById('countryList');

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

function displayCountries(countries) {
  countryList.innerHTML = '';

  countries.forEach(country => {
    const countryCard = document.createElement('div');
    countryCard.classList.add('country-card');

    const countryName = document.createElement('h2');
    countryName.textContent = country.name.common;

    const countryPopulation = document.createElement('p');
    countryPopulation.textContent = country.population;

    const countryRegion = document.createElement('p');
    countryRegion.textContent = country.region;

    const countryCapital = document.createElement('p');
    countryCapital.textContent = country.capital;

    const countryFlag = document.createElement('img');
    countryFlag.src = country.flags.png;
    countryFlag.alt = `${country.name.common} Flag`;

    countryCard.appendChild(countryFlag);
    countryCard.appendChild(countryName);
    countryCard.appendChild(countryPopulation);
    countryCard.appendChild(countryCapital);
    countryCard.appendChild(countryRegion);

    countryCard.addEventListener('click', () => {
      window.location.href = `country.html?code=${country.cca3}`;
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
  );

  displayCountries(filteredCountries);
}

searchInput.addEventListener('input', filterCountries);
regionFilter.addEventListener('change', filterCountries);

(async function () {
  filterCountries();
})();
