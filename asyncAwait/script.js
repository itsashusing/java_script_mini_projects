async function makeRequest() {
  const url = "https://dummyjson.com/users";

  //   const response = fetch(url);
  //   response.then((res) => console.log(res.json()));

  // OR

  const response = await fetch(url);
  // console.log(response);
  const data = await response.json();
  console.log(data);
  // how to reject this promist using throw key word
}

makeRequest();
console.log("last line");
