const btn = document.querySelector("button");
const div = document.querySelector("div");
const image = document.querySelector("img");

// div.style.maxWidth
// btn.addEventListener("click", () => {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "https://fakestoreapi.com/products");
//   xhr.send();
//   xhr.addEventListener("load", () => {
//     // jab xhr me data aa jaye tab load ho
//     elements = JSON.parse(xhr.response);
//     elements.forEach((element) => {
//       console.log(element);
//       image = document.createElement("img");
//       image.src = element.image;
//       image.draggable = true;
//       image.style.maxWidth = "100px";
//       div.append(image);
//     });
//   });
//   //   console.log(xhr);
// });
btn.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
  xhr.send();
  xhr.addEventListener("load", () => {
    image.src = JSON.parse(xhr.response).message;
    // image.draggable = true;
  });
});
