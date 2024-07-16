// const accept = document.querySelector(".accept");
// const rejectBtn = document.querySelector(".reject");

// const p = new Promise((resolve, reject) => {
//   //   resolve({ name: "Ashutosh Singh" });
//   //   reject();
//   accept.addEventListener("click", () => {
//     resolve("Promise resolve");
//   });
//   rejectBtn.addEventListener("click", () => {
//     reject("Promise reject");
//   });
// });

// // console.log(p);
// p.then((data) => {
//   console.log(data);
// }).catch((err) => {
//   console.log(err);
// });

// Let Fix callback hell problem with promise

function makeHttpRequest(method, url) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.responseType = "json";
  xhr.send();

  const promise = new Promise((resolve, reject) => {
    xhr.addEventListener("load", () => {
      resolve(xhr.response);
    });
    xhr.addEventListener("error", () => {
      reject("Error");
    });
  });
  return promise;
}

makeHttpRequest("GET", "https://dummyjson.com/users")
  .then((data) => {
    makeHttpRequest(
      "GET",
      `https://dummyjson.com/posts/user/${data.users[0].id}`
    ).then((data) => {
      makeHttpRequest(
        "GET",
        `https://dummyjson.com/posts/${data.posts[0].id}/comments`
      ).then((data) => console.log(data));
    });
  })
  .catch((err) => console.log(err));
