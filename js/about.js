document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#home___text");
  
  // Content to be typed out
  const content = [
    { type: 'h1', text: 'About Me', style: 'font-family: "IBM Plex Mono", monospace; font-size: 2.5vh; margin-top: 10px; margin-bottom: 20px; font-weight: normal;' },
    { type: 'p', text: "Hi! I'm George, a DevOps engineer passionate about creating web applications and exploring new technologies.", class: 'home___mainbox-text' },
    { type: 'p', text: 'I enjoy working on both frontend and backend development, with experience in HTML, CSS, JavaScript, Python, and various frameworks.', class: 'home___mainbox-text' },
    { type: 'p', text: "When I'm not coding, you can find me listening to drum and bass music or working on my music website.", class: 'home___mainbox-text' },
    { type: 'h2', text: 'Skills', style: 'font-family: "IBM Plex Mono", monospace; font-size: 2.5vh; margin-top: 20px; margin-bottom: 10px; font-weight: normal;' },
    { type: 'p', text: '• JavaScript / TypeScript\n• React / Vue.js\n• Node.js / Express\n• Python / Flask\n• HTML / CSS\n• Git / GitHub', class: 'home___mainbox-text', lastSection: true }
  ];

  let sectionIndex = 0;
  let charIndex = 0;
  let currentElement = null;
  let cursor = null;

  function createNewElement() {
    const section = content[sectionIndex];
    currentElement = document.createElement(section.type);
    
    if (section.class) {
      currentElement.className = section.class;
    }
    if (section.style) {
      currentElement.setAttribute('style', section.style);
    }
    
    // Create cursor
    cursor = document.createElement("span");
    cursor.classList.add("blinking-cursor");
    cursor.textContent = "";
    
    container.appendChild(currentElement);
    currentElement.appendChild(cursor);
  }

  function type() {
    const section = content[sectionIndex];
    
    if (!currentElement) {
      createNewElement();
    }

    if (charIndex < section.text.length) {
      const char = section.text.charAt(charIndex);
      
      // Handle line breaks
      if (char === '\n') {
        currentElement.insertBefore(document.createElement('br'), cursor);
      } else {
        currentElement.insertBefore(document.createTextNode(char), cursor);
      }
      
      charIndex++;
      setTimeout(type, 30); // Faster typing speed
    } else {
      // Check if this is the last section
      if (section.lastSection) {
        // Keep cursor in the current element at the end
        return;
      }
      
      // Remove cursor from current element
      cursor.remove();
      
      // Move to next section
      sectionIndex++;
      charIndex = 0;
      currentElement = null;
      
      if (sectionIndex < content.length) {
        setTimeout(type, 200); // Pause between sections
      }
    }
  }

  // Start typing
  type();
});