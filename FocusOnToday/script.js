const checkBoxs = document.querySelectorAll(".goal-circle");
const inputs = document.querySelectorAll("input");
const error = document.querySelector(".error");
const progress_value = document.querySelector(".progress-value");

const allGoles = JSON.parse(localStorage.getItem("allGoles")) || {};
let progressBar = Object.values(allGoles).filter((goal) => goal.completed);
checkBoxs.forEach((checkBox) => {
  checkBox.addEventListener("click", (e) => {
    const checkInput = [...inputs].every((input) => {
      return input.value;
    });
    if (checkInput) {
      checkBox.parentElement.classList.toggle("completed");
      localStorage.setItem("allGoles", JSON.stringify(allGoles));

      const getCheckBoxId = checkBox.nextElementSibling.id;
      allGoles[getCheckBoxId].completed = !allGoles[getCheckBoxId].completed;

      localStorage.setItem("allGoles", JSON.stringify(allGoles));
      progressBar = Object.values(allGoles).filter((goal) => goal.completed);
      progress_value.style.width = `${(progressBar.length / 3) * 100}%`;
      if (progressBar.length > 0) {
        progress_value.innerText = `${progressBar.length}/3 compleated`;
      } else {
        progress_value.innerText = "";
      }
      // console.log(allGoles[getCheckBoxId].completed);
    } else {
      error.style.display = "block";
    }
  });
});

// console.log(inputs);
inputs.forEach((input) => {
  //  set value of input fields

  input.value = allGoles[input.id].name;
  input.addEventListener("input", (e) => {
    // console.log(input);
    if (allGoles[input.id].completed) {
      input.value = allGoles[input.id].name;
      return;
    }
    allGoles[input.id] = {
      name: input.value,
      completed: false,
    };

    localStorage.setItem("allGoles", JSON.stringify(allGoles)); // set to the local storage
  });
  if (allGoles[input.id].completed) {
    input.parentElement.classList.add("completed");
  } else {
    input.parentElement.classList.remove("completed");
  }
  progressBar = Object.values(allGoles).filter((goal) => goal.completed);
  progress_value.style.width = `${(progressBar.length / 3) * 100}%`;

  input.addEventListener("focus", () => {
    error.style.display = "none"; // error handling
  });
});
