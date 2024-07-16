// const btn = document.querySelector("button");
// const div = document.querySelector("div");
// const image = document.querySelector("img");

// btn.addEventListener("click", () => {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
//   xhr.responseType = "json";
//   xhr.send();
//   xhr.addEventListener("load", () => {
//     // image.src = JSON.parse(xhr.response).message;
//     image.src = xhr.response.message;
//     // image.draggable = true;
//   });
// });

function makeHttpRequest(method, url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.responseType = "json";
  xhr.send();
  xhr.addEventListener("load", () => {
    // console.log(xhr.response);
    callback(xhr.response);
  });
}

// This is call back hell like a kua
// call back hell se code gahara ho jata hai
makeHttpRequest("GET", "https://dummyjson.com/users", (data) => {
  makeHttpRequest(
    "GET",
    `https://dummyjson.com/posts/user/${data.users[0].id}`,
    (data) => {
      makeHttpRequest(
        "GET",
        `https://dummyjson.com/posts/${data.posts[0].id}/comments`,
        (data) => {
          console.log(data);
        }
      );
    }
  );
});
