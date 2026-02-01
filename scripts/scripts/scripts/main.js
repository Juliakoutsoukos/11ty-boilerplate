import { names } from "./names.js";

function randomIndex(max) {
  return Math.floor(Math.random() * max);
}

document.addEventListener("alpine:init", () => {
  Alpine.data("nameGenerator", () => ({
    currentName: "Click the button to generate a name",
    generate() {
      this.currentName = names[randomIndex(names.length)];
    }
  }));
});
