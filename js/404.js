document.addEventListener("DOMContentLoaded", () => {
  const commandLine = document.querySelector("#command-line");
  const resultLinks = document.querySelector("#result-links");
  const newPrompt = document.querySelector("#new-prompt");
  const command = "ls /available_pages";
  let charIndex = 0;

  // Create blinking cursor span
  const cursor = document.createElement("span");
  cursor.classList.add("blinking-cursor");
  cursor.textContent = "";
  commandLine.appendChild(cursor);

  function typeCommand() {
    if (charIndex < command.length) {
      commandLine.insertBefore(document.createTextNode(command.charAt(charIndex)), cursor);
      charIndex++;
      setTimeout(typeCommand, 80);
    } else {
      // Command typed, remove cursor and show results after brief pause
      cursor.remove();
      setTimeout(() => {
        resultLinks.style.display = "block";
        setTimeout(() => {
          resultLinks.style.opacity = "1";
          // Show new prompt without cursor
          setTimeout(() => {
            newPrompt.style.display = "block";
          }, 300);
        }, 100);
      }, 400);
    }
  }

  // Start typing with initial delay to show cursor first
  setTimeout(typeCommand, 150);
});
