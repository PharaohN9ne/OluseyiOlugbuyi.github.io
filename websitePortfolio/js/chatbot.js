// js/chatbot.js
document.addEventListener('DOMContentLoaded', () => {
  // Grab DOM nodes
  const chat = document.getElementById('chatbot');
  const header = document.getElementById('chat-header');
  const toggle = document.getElementById('chat-toggle');
  const messages = document.getElementById('messages');
  const input = document.getElementById('user-input');

  // Safety check
  if (!chat || !header || !toggle || !messages || !input) {
    console.error('Chatbot: missing required DOM elements.');
    return;
  }

  // FAQ list
  const faq = [
    {
      q: /skills/i,
      a: "I’m proficient in HTML, CSS, JavaScript, Network Security, Ethical hacking, and Risk management."
    },
    {
      q: /experience/i,
      a: "I’ve worked on Coordinated scheduling between clients and title companies at Engel & Volkers America. Also Maintained budgets on a weekly basis with Global Street Development."
    },
    {
      q: /projects/i,
      a: "You can browse my GitHub projects in the Projects section!"
    },
     {
      q: /jobs/i,
      a: "I've worked for Global Street Development and Engel & Volkers America!!"
    },
     {
      q: /references/i,
      a: "You can Send me a note or Ask about ME! I'm know all over."
    }
    // …add more Q&A pairs here
  ];

  // Toggle collapse/expand
  header.addEventListener('click', () => {
    chat.classList.toggle('collapsed');
    toggle.textContent = chat.classList.contains('collapsed') ? '+' : '–';
  });

  // Handle user input
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter' && input.value.trim()) {
      const userText = input.value.trim();
      appendMessage(userText, 'user');
      input.value = '';
      setTimeout(() => {
        appendMessage(getResponse(userText), 'bot');
        // scroll chat to bottom
        messages.parentElement.scrollTop = messages.parentElement.scrollHeight;
      }, 300);
    }
  });

  // Find a matching FAQ answer
  function getResponse(text) {
    for (let { q, a } of faq) {
      if (q.test(text)) return a;
    }
    return "Sorry, I don't understand. Try asking about my skills, experience, jobs, references or projects!";
  }

  // Append a message bubble
  function appendMessage(txt, who) {
    const div = document.createElement('div');
    div.className = `message ${who}`;
    div.textContent = txt;
    messages.appendChild(div);
  }
});
