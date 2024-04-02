import { createCard } from "./src/ui.js";

const root = document.querySelector("#root");

function handleInfoButtonClick(event) {
  const dataTarget = event.target['data-target'];
  const card = document.querySelector(`#${dataTarget}`);
  
  //console.log(info);
  //const info = event.target.parentElement.querySelector(".card__hidden");
  const info = card.querySelector(".card__hidden");
  info.classList.toggle("visible");

  //console.log(event.target['data-target']);
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((users) => {
    for (const user of users) {
      root.append(
        createCard(
          user.name,
          `${user.email} / ${user.company.name}`,
          JSON.stringify(user.address, null, 2),
          user.id
        )
      );
    }

    document.querySelectorAll(".card__button").forEach((btn) => {
      // events
      btn.addEventListener("click", handleInfoButtonClick);
      //btn.onclick = handleInfoButtonClick;
    });
  });

/*root.append(createList(["vlaami", "test", "adat", "item"]));
root.append(createCard("Elso", "Bla vla bla"));
root.append(createCard("Valami", "Bla vla bla"));
root.append(createCard("Nemtom", "Bla vla bla"));
root.append(createCard("Adat", "Bla vla bla"));
root.append(createCard("Kwklol", "Bla vla bla"));
*/
