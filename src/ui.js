// attributes: { key: value }

export function create(tag, attributes = {}, children = []) {
  // create a tag in memory
  const el = document.createElement(tag);

  //1. iterate attributes
  for (const key of Object.keys(attributes)) {
    //2. set the el property by key
    el[key] = attributes[key];
  }

  for (const child of children) {
    el.append(child);
  }

  return el;
}

export function createCard(title, text, hidden, id) {
  const cardDiv = create(
    "div",
    {
      className: "card",
      id: `info-${id}`
    },
    [
      create("h1", {
        innerText: title,
        className: "card__h1",
      }),
      create("p", {
        innerText: text,
        className: "card__p",
      }),
      create("pre", {
        innerHTML: hidden,
        className: "card__hidden",
      }),
      create("button", {
        className: "card__button",
        innerText: "Info",
        'data-target': `info-${id}`
      }),
    ]
  );

  return cardDiv;
}

export function createList(items) {
  const listUl = create("ul", { className: "list" });

  for (const item of items) {
    const listLi = create("li", { innerText: item, className: "list__li" });
    listUl.append(listLi);
  }

  return listUl;
}

export function createTable(headers, rows) {
  const table = create("table");

  const firstRow = create("tr");
  for (const header of headers) {
    const th = create("th", { innerText: header });
    firstRow.append(th);
  }

  table.append(firstRow);

  return table;
}

/*
<table>
  <tr>
    <th>id</th>
    <th>name</th>
    <th>email</th>
  </tr>
  <tr>
    <td>{id}</td>
    <td>{name}</td>
    <td>{email}</td>
  </tr>
  ...
</table>
*/
