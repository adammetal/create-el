import { create, createCard, createList } from "./src/ui.js";

const root = document.querySelector("#root");

// trick
fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(users => {
    for (const user of users) {
      root.append(createCard(user.name, `${user.email} / ${user.company.name}`));
    }
  })

root.append(createList(["vlaami", "test", "adat", "item"]));
root.append(createCard("Elso", "Bla vla bla"));
root.append(createCard("Valami", "Bla vla bla"));
root.append(createCard("Nemtom", "Bla vla bla"));
root.append(createCard("Adat", "Bla vla bla"));
root.append(createCard("Kwklol", "Bla vla bla"));
