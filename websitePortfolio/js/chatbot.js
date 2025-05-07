const faq = [
  { q: /skills/i, a: "I’m proficient in HTML, CSS, JavaScript, React, and Node.js." },
  { q: /experience/i, a: "I’ve worked on X, Y, and Z projects; held roles at Company A and Company B." },
  { q: /projects/i, a: "You can browse my GitHub projects in the Projects section above!" },
  // …add more Q&A pairs
];

const chat = document.getElementById('chatbot');
const body = document.getElementById('chat-body');
const toggle = document.getElementById('chat-toggle');
const messages = document.getElementById('messages');
const input = document.getElementById('user-input');

// Show/hide
toggle.addEventListener('click', () => {
  body.classList.toggle('hidden');
  toggle.textContent = body.classList.contains('hidden') ? '+' : '–';
});

// Handle user input
input.addEventListener('keydown', e => {
  if (e.key === 'Enter' && input.value.trim()) {
    const userText = input.value;
    appendMessage(userText, 'user');
    input.value = '';
    setTimeout(() => {
      const reply = getResponse(userText);
      appendMessage(reply, 'bot');
      body.scrollTop = body.scrollHeight;
    }, 300);
  }
});

function getResponse(text) {
  for (let {q,a} of faq) {
    if (q.test(text)) return a;
  }
  return "Sorry, I don't understand. Try asking about my skills, experience, or projects!";
}

function appendMessage(text, who) {
  const div = document.createElement('div');
  div.className = `message ${who}`;
  div.textContent = text;
  messages.appendChild(div);
}
