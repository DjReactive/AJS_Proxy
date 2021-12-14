export const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

function keyInObj(object, key) {
  for (const k in object) if (k === key) return true;
  return false;
}

export function orderByProps(char, array) {
  const oldObj = {};
  const newObj = {};

  array.forEach((b) => Object.keys(char).forEach((a) => {
    if (a === b) newObj[b] = char[a];
  }));

  for (const prop in char) {
    if (!keyInObj(newObj, prop)) oldObj[prop] = char[prop];
  }
  Object.keys(oldObj).sort().forEach((key) => { newObj[key] = char[key]; });
  return newObj;
}
