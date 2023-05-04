// Napisz wyszukiwarke połączeń pkp. Kazde polaczenie niech zawiera nastepujace pola:

//   - from (Warszawa)
//   - to (Lublin)
//   - time (16:30)
//   - date (23.04.2023)
//   - name (Sniezka)

//   1. Stworz HTML i CSS do zadania
//   2. Na gorze strony miej wyszukiwarke polaczen, ktora da mozliwosc wyszukiwania polaczen po nazwie
//   3. Pod ta wyszukiwarka, dodaj formularz zawierajacy 5 pol, za pomoca ktorego bedziesz mogl dodawac nowe polaczenia
//   4. Skorzystaj z localStorage, aby przetrzymywac dodane polaczenia

//   5*. Dodaj pod wyszukiwarka pole select, gdzie bedziesz mogl wybrac liste miast. Jesli wybierzesz dane miasto, pokazuj polaczenia z lub do danego miasta
//   6*. Pod selectem dodaj inny select, za pomoca ktorego bedziesz mogl sortowac polaczenia po dacie

const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");
const addform = document.querySelector("#addForm");
const fromInput = document.querySelector("#fromInput");
const toInput = document.querySelector("#toInput");
const departureInput = document.querySelector("#departureInput");
const dateInput = document.querySelector("#dateInput");
const nameInput = document.querySelector("#nameInput");
const connectionsTableBody = document.querySelector("#connectionsTableBody");
const exitSearchBtn = document.querySelector("#exitSearch");
const selectCity = document.querySelector("#selectCity");
const selectDate = document.querySelector("#selectDate");

// let selectedOptionCity = selectCity.options[selectCity.selectedIndex];

let selectedCity = "";
let selectedDate = "";
let connections = localStorage.getItem("connections");
if (!connections) {
  connections = [];
} else {
  connections = JSON.parse(connections);
}

let cities = [];
let uniqueCities = [];
let dates = [];
let uniqueDates = [];
const addConnection = (event) => {
  event.preventDefault();
  const newConnection = {
    from: fromInput.value,
    to: toInput.value,
    departure: departureInput.value,
    date: dateInput.value,
    name: nameInput.value,
  };

  connections.push(newConnection);
  localStorage.setItem("connections", JSON.stringify(connections));
  console.log(connections);
  renderConnections(connections);
};
const renderConnections = (collection) => {
  clearList();

  collection.forEach((element) => {
    connectionsTableBody.innerHTML += `
<tr>
              <td>${element.from}</td>
              <td>${element.to}</td>
              <td>${element.departure}</td>
              <td>${element.date}</td>
              <td>${element.name}</td>
            </tr>`;
  });
};

const clearList = () => {
  connectionsTableBody.innerHTML = "";
};

const findConnection = (collection, phrase) => {
  return collection.filter((item) => {
    return item.name.includes(phrase);
  });
};

const handleSearch = (event) => {
  event.preventDefault();
  findConnection(connections, searchInput.value);
  console.log(findConnection(connections, searchInput.value));
  clearList();
  renderConnections(findConnection(connections, searchInput.value));
};

const defaultRender = () => {
  clearList();
  renderConnections(connections);
};

const setUniqueCities = (collection) => {
  collection.forEach((element) => {
    cities.push(element.from);
    cities.push(element.to);
  });
  console.log(cities);
  uniqueCities = Array.from(new Set(cities));
  console.log(uniqueCities);
};

const selectCityList = (collection) => {
  collection.forEach((element) => {
    selectCity.innerHTML += `
    <option value="${element}">${element}</option>
    `;
  });
};
const setUniqueDates = (collection) => {
  collection.forEach((element) => {
    dates.push(element.date);
  });
  uniqueDates = Array.from(new Set(dates));
  console.log(uniqueDates);
};

const selectDatesList = (collection) => {
  collection.forEach((element) => {
    selectDate.innerHTML += `
    <option value="${element}">${element}</option>
    `;
  });
};

const handleSelectCity = (event) => {
  event.preventDefault();
  selectCityList(uniqueCities);
};

const handleSelectDats = (event) => {
  event.preventDefault();
  selectDatesList(uniqueDates);
};

const selectedConnections = (collection, phrase) => {
  return collection.filter((item) => {
    return (
      item.to.includes(phrase) ||
      item.from.includes(phrase) ||
      item.date.includes(phrase)
    );
  });
};

const showSelectedDates = (event) => {
  event.preventDefault();
  clearList();
  selectedDate = selectDate.value;
  // console.log(selectedCity);

  const selectedConnectionsToRenderDates = selectedConnections(
    connections,
    selectedDate
  );

  renderConnections(selectedConnectionsToRenderDates);
};

const showSelectedCities = (event) => {
  event.preventDefault();
  clearList();
  selectedCity = selectCity.value;
  // console.log(selectedCity);
  const selectedConnectionsToRenderCities = selectedConnections(
    connections,
    selectedCity
  );

  renderConnections(selectedConnectionsToRenderCities);
};
renderConnections(connections);
setUniqueCities(connections);
setUniqueDates(connections);
addform.addEventListener("submit", addConnection);
searchForm.addEventListener("submit", handleSearch);
exitSearchBtn.addEventListener("click", defaultRender);

window.addEventListener("DOMContentLoaded", handleSelectCity);
window.addEventListener("DOMContentLoaded", handleSelectDats);
selectCity.addEventListener("change", showSelectedCities);
selectDate.addEventListener("change", showSelectedDates);
