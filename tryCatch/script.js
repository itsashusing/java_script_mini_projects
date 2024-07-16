// try {
//   console.log(a);
// } catch (error) {
//   console.log(error.message + "\n" + error.stack);
// }

async function makeAsyncRequest() {
  try {
    const url = "https://dumyjson.com/products";
    data = await (await fetch(url)).json();
    console.log(data);
  } catch (error) {
    console.log(error);
    alert("Some thing went wrong");
  }
}

makeAsyncRequest();

console.log("last line");
