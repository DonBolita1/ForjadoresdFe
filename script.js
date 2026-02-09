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


//const Entrada = document.getElementById("input");
const upBtn = document.getElementById("up");
const downBtn = document.getElementById("down");

// Escala cromática
const notes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];

// Regex para acordes (C, Am, G7, F#m, etc.)
const chordRegex = /\b([A-G])(#|b)?(m|maj|min|dim|aug|sus|add)?(\d+)?\b/g;

function transposeChord(chord, step) {
  let match = chord.match(/^([A-G])(#|b)?(.*)$/);
  if (!match) return chord;

  let root = match[1];
  let accidental = match[2] || "";
  let suffix = match[3] || "";

  let note = root + accidental;

  let index = notes.indexOf(note.replace("b", "#"));
  if (index === -1) return chord;

  let newIndex = (index + step + notes.length) % notes.length;
  return notes[newIndex] + suffix;
}

function transpose(step) {
  entrada.value = input.value.replace(chordRegex, chord => transposeChord(chord, step));
}

upBtn.addEventListener("click", () => transpose(1));
downBtn.addEventListener("click", () => transpose(-1));
