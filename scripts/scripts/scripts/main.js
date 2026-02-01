import { names } from "./names.js";

function randomIndex(max) {
  return Math.floor(Math.random() * max);
}

window.nameGenerator = () => ({
  currentName: "Click the button to generate a name",
  generate() {
    this.currentName = names[randomIndex(names.length)];
  }
});
