function myFunction() {
  const element = document.getElementById("id01");
  element.innerHTML = "Nowy nagłówek";
}

function myColorChange() {
  const element = document.getElementById("id01");
  element.style.color = "red";
}

// zadanie 1
const fruits = ["Jabłko", "Banan", "Pomarańcza", "Winogrona", "Arbuz"];
console.log(fruits);

// zadanie 2
const numbers = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 50, 49];
for (const number of numbers) {
  if (number > 5) {
    console.log(number);
  }
}
