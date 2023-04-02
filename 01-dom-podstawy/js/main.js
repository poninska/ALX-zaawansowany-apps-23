//

// Za pomoca kodu JS wykonaj następujące zadania.
// Pamietaj, aby elementom HTML dodawac ID.

// 1. W konsoli wypisz obecny tekst przycisku
// 2. dodaj formularzowi klase my-form
// 3. Za pomoca JS dodaj do inputow jakis tekst
// 4. do elementu ul dodaj element li
{
  /* <li>
      <strong>Ada</strong> napisala
      <p> Super dzien. Duzo sie nauczylam </p>
    </li> */
}

// 5.  Majac tablice obiektow messages, za pomoca petli dodaj do ul kilka elementow li

const messages = [
  {
    author: "Pawel",
    message: "Ale dzisiaj super dzien",
  },
  {
    author: "Magda",
    message: "Zimno jest",
  },
];

const label = document.querySelector("#label");
const form = document.querySelector("#form");
const input = document.querySelector("#input");
const list = document.querySelector("#list");

console.log(label.innerText);
form.classList.add("my-form");
input.value = textContent = "testowy text";
list.innerHTML += `
<li>
<strong>Ada</strong> napisala
<p> Super dzien. Duzo sie nauczylam </p>
</li> `;

const newMessage = "";
for (let message of messages) {
  list.innerHTML += `
<li>
<strong>${message.author}</strong> napisala
<p> ${message.message} </p>
</li> `;
  //   console.log(message.author);
}
