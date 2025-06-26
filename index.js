function addingEventListener() {
  const button = document.getElementById("button");

  if (button) {
    button.addEventListener("click", function () {
      alert("Button clicked!");
    });
  }
}

// Call the function when the script runs
addingEventListener();

// Export for tests
if (typeof module !== "undefined") {
  module.exports = { addingEventListener };
}



