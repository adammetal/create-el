import { create } from "./src/ui.js";

const root = document.querySelector("#root");

const cardDiv = create("div", {
  className: 'card'
});

const cardH1 = create("h1", {
  innerText: 'Valami'
});

const cardP = create("p", {
  innerText: "Valamely szoveg haha blaa bla bla..."
});

cardDiv.append(cardH1);
cardDiv.append(cardP);

root.append(cardDiv);
