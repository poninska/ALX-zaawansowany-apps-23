// / 1. Napisz kod JS, ktory dodaje elementy do tabeli
// 2. Po wyslaniu formularza, wyczysc pola formularza
// 3. Pod tabela dodaj przycisk usun rekordy, ktory usunie wszystkie elementy z tabeli
const orderForm = document.querySelector("#orderForm");
const table = document.querySelector("tbody");
const priceInput = document.querySelector("#priceInput");
const productInput = document.querySelector("#productInput");
const container = document.querySelector(".container");

const clearBtn = document.createElement("button");
// table.innerHTML += `
// <tr>
// <td>product</td>
// <td>price</td>
// </tr>
// `;

let orderList = localStorage.getItem("orders");
if (!orderList) {
  orderList = [];
} else {
  orderList = JSON.parse(orderList);
}

const addSingleTableOrder = (element) => {
  const tableTr = document.createElement("tr");
  const tableTdProduct = document.createElement("td");
  const tableTdPrice = document.createElement("td");

  table.appendChild(tableTr);

  tableTr.appendChild(tableTdProduct);
  tableTr.appendChild(tableTdPrice);

  tableTr.style.height = "10px";
  table.style.color = "black";
  tableTdProduct.textContent = element.product;
  tableTdPrice.textContent = element.price;
  //   console.log(element);
};

const submitOrder = (event) => {
  event.preventDefault();
  //   console.log(priceInput.value, productInput.value);
  const newOrder = {
    product: productInput.value,
    price: priceInput.value,
    id: Date.now(),
  };
  orderList.push(newOrder);

  localStorage.setItem("orders", JSON.stringify(orderList));
  renderLIst();
};

const clearList = () => {
  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }
};
const renderLIst = () => {
  clearList();

  for (let element of orderList) {
    addSingleTableOrder(element);
    // console.log(newOrder, element);
  }
};

// if (orderList.length > 1) {
//   showClearBtn();
// }
const showClearBtn = () => {
  clearBtn.textContent = "Clear";
  container.appendChild(clearBtn);
  clearBtn.style.bottom = "10px";
};
if (orderList.length > 0) {
  showClearBtn();
}
orderForm.addEventListener("submit", submitOrder);

window.addEventListener("DOMContentLoaded", renderLIst);
clearBtn.addEventListener("click", clearList);
