const boxes = document.querySelectorAll(".boxes");
const input = document.getElementById("input");

let oddColorizer = (data) => {
  const arr = data.split(" ");
  console.log(arr);
  boxes.forEach((e, key) => {
    e.style = `
    background: ${arr[0]};
    border-radius: ${arr[1]};
    height: ${boxes[20]};
    `;
  });
};

window.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    oddColorizer(input.value);
    input.value = "";
  }
});