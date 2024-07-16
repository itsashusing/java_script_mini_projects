// fetch("https://dummyjson.com/products").then((res) => {
//   return res.json();
// }).then(data =>{console.log(data);})

// By default fetch send GET request
// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

// how to send post
// fetch("https://dummyjson.com/products", { method: "POST" })
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

// how to send data
// fetch("https://dummyjson.com/products", { method: "POST" })
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

function makerRequest(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
}

makerRequest("https://dummyjson.com/products");
