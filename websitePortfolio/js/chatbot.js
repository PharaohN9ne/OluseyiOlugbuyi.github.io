// js/chatbot.js
document.addEventListener('DOMContentLoaded', () => {
  // Simple FAQ list
  const faq = [
    { q: /skills/i, a: "I’m proficient in HTML, CSS, JavaScript, React, and Node.js." },
    { q: /experience/i, a: "I’ve worked on X, Y, and Z projects; held roles at Company A and Company B." },
    { q: /projects/i, a: "You can browse my GitHub projects in the Projects section above!" },
    // …add more Q&A pairs here
  ];

  // Get your elements
  const chat = document.getElementById('chatbot');
  const header = document.getElementById('chat-header');
  const toggle = document.getElementById('chat-toggle');
  const messages = document.getElementById('messages');
  const input = document.getElementById('user-input');

  // 1️⃣ Show / hide on header click (toggle `.collapsed` on the container)
  header.addEventListener('click', () => {
    console.log("Header clicked, collapsed:", chat.classList.contains('collapsed'));
    chat.classList.toggle('collapsed');
    toggle.textContent = chat.classList.contains('collapsed') ? '+' : '–';
  });

  // 2️⃣ Handle user input & bot response
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter' && input.value.trim()) {
      const userText = input.value.trim();
      appendMessage(userText, 'user');
      input.value = '';
      setTimeout(() => {
        const reply = getResponse(userText);
        appendMessage(reply, 'bot');
        // scroll to bottom
        messages.parentElement.scrollTop = messages.parentElement.scrollHeight;
      }, 300);
    }
  });

  // Match question against FAQ regexes
  function getResponse(text) {
    for (let { q, a } of faq) {
      if (q.test(text)) return a;
    }
    return "Sorry, I don't understand. Try asking about my skills, experience, or projects!";
  }

  // Helper to append a message bubble
  function appendMessage(text, who) {
    const div = document.createElement('div');
    div.className = `message ${who}`;
    div.textContent = text;
    messages.appendChild(div);
  }
});
