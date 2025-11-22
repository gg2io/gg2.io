document.addEventListener("DOMContentLoaded", () => {
  const output = document.querySelector("#output h1");
  const messages = ["Hello, I'm George.", "Welcome to my site.", "Enjoy your stay!"];
  let messageIndex = 0;
  let charIndex = 0;
  let isTyping = true;

  // Create blinking cursor span
  const cursor = document.createElement("span");
  cursor.classList.add("blinking-cursor");
  output.appendChild(cursor);

  function type() {
    if (charIndex < messages[messageIndex].length) {
      output.insertBefore(document.createTextNode(messages[messageIndex].charAt(charIndex)), cursor);
      charIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(() => {
        clearText();
      }, 2000);
    }
  }

  function clearText() {
    if (output.childNodes.length > 1) {
      output.removeChild(output.childNodes[output.childNodes.length - 2]);
      setTimeout(clearText, 50);
    } else {
      charIndex = 0;
      messageIndex = (messageIndex + 1) % messages.length;
      setTimeout(type, 500);
    }
  }

  type();
});
