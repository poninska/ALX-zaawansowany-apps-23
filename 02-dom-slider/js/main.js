// Napisz kod slidera

// 1. Stworz sobie pusta tablice images
// 2. Do tablicy images dodaj adresy zdjec pieskow z internetu
//   -> Hint: aby wziac zdjecie pieska z internetu, wejdz na google images, kliknij prawy przycisk i wybierz Copy Image Adress
// 3. Dodaj zmienna counter i ustaw jej wartosc poczatkowa na 0
// 4. po zaladowaniu pliku JS, dodaj elementowi img atrybut src, odpowiadajacy pierwszemu elementowi tablicy images, zdefiniowanym w kroku 1
// 5. po wcisnieciu przycisku next, zastap atrybut src obrazka nastepnym elementem z tablicy
// 6. po wcisnieciu przycisku prev, zastap atrybut src obrazka poprzednim elementem z tablicy
// 7. po wcisnieciu przycisku next, w momencie kiedy jest ostatni element slidera, wstaw 1 zdjecie
// 8. po wcisnieciu przycisku prev, w momencie kiedy jest pierwszy element slidera, wstaw ostatnie zdjecie

const prevBtn = document.querySelector("#prevBtn");
const nextbtn = document.querySelector("#nextBtn");
const sliderImg = document.querySelector("#sliderImg");
const images = [
  "https://images.unsplash.com/photo-1611003228941-98852ba62227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1554692936-82776f9406db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  "https://hips.hearstapps.com/hmg-prod/images/wolf-dog-breeds-siberian-husky-1570411330.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=1200:*",
];

let counter = 0;

sliderImg.setAttribute("src", images[counter]);
console.log(counter, counter % images.length);

const nextImg = () => {
  //   counter++;
  counter = (counter + 1) % images.length;
  console.log(counter, counter % images.length);
  //   if (counter % images.length === 0) {
  //     counter = 0;
  //   }
  sliderImg.setAttribute("src", images[counter]);
};

const prevImg = () => {
  //   console.log(counter);

  counter = counter % images.length;
  console.log(counter);

  //   if (counter === -1) {
  //     counter = images.length - 1;
  //   }

  sliderImg.setAttribute("src", images[counter]);
};

console.log(sliderImg.src);
nextbtn.addEventListener("click", nextImg);
prevBtn.addEventListener("click", prevImg);
