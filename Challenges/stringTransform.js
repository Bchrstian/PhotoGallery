function transformString(str) {
  const len = str.length;

  if (len % 15 === 0) {
    str = str.split("").reverse().join("");

    str = str
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
  } else if (len % 3 === 0) {
    str = str.split("").reverse().join("");
  } else if (len % 5 === 0) {
    str = str
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
  }

  return str;
}

console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"
