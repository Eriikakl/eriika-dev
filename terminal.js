const asciiArt = [
  "     /  /        \\  \\",
  "    |  |   _  _   |  |",
  "    |  |--( )( )--|  |",
  "    |  |    ‾‾    |  |",
  "     \\  \\  \\__/  /  /",
  "      \\  '-,__,-'  /",
  "       / / ____ \\ \\ ",
  "        )/      \\(",
  "       (   ||||   )",
  "        \\__||||__/",
];

const output = document.getElementById("output");

function renderAscii(lines, delay = 150) {
  let i = 0;
  output.innerHTML = "";

  function addLine() {
    if (i >= lines.length) return;

    output.innerHTML += lines[i] + "\n";
    i++;

    setTimeout(addLine, delay);
  }

  addLine();
}

renderAscii(asciiArt);