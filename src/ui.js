// attributes: { key: value }

export function create(tag, attributes) {
             // create a tag in memory
  const el = document.createElement(tag);

  //1. iterate attributes
  for (const key of Object.keys(attributes)) {
    //2. set the el property by key
    el[key] = attributes[key];
  }

  return el;
}


