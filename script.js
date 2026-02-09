const input = document.getElementById("input");
const output = document.getElementById("output");

input.addEventListener("input", () => {
  let text = input.value;

  // Expresión regular para acordes
  const chordRegex = /\b([A-G](#|b)?(m|maj|min|dim|aug|sus)?\d*)\b/g;

  // Reemplaza acordes por spans
  const formattedText = text.replace(
    chordRegex,
    '<span class="chord">$1</span>'
  );

  // Mantener saltos de línea
  output.innerHTML = formattedText.replace(/\n/g, "<br>");
});
