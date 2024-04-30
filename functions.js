function copyTxt(file) {
  fetch(file)
    .then((response) => response.text())
    .then((text) => {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          alert("String copied to clipboard");
        })
        .catch((error) => {
          console.error("Error copying string:", error);
          alert("Error copying string");
        });
    })
    .catch((error) => {
      console.error("Error loading file", error);
      alert("Error loading file");
    });
}
