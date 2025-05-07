// js/chatbot.js

// Initialize BotUI
const botui = new BotUI('botui-app');

// A simple FAQ bot
function startChat() {
  botui.message
    .add({ content: '👋 Hi there! I’m YourBot. Ask me about my skills, projects, or experience.' })
    .then(() => askQuestion());
}

function askQuestion() {
  botui.action
    .text({ action: { placeholder: 'Type your question here...' } })
    .then(res => {
      handleQuery(res.value.trim());
    });
}

function handleQuery(input) {
  const q = input.toLowerCase();
  let reply = "🤔 Hmm, I don't quite get that. Can you try rephrasing?";

  if (q.includes('skill')) {
    reply = '💻 I’m proficient in HTML, CSS, JavaScript, React, Node.js, and more.';
  } else if (q.includes('project')) {
    reply = '📂 Check out my GitHub: https://github.com/you';
  } else if (q.includes('experience') || q.includes('work')) {
    reply = '🛠️ I’ve worked at Acme Corp as a Front-End Engineer and interned at Beta Inc.';
  } else if (q.includes('education') || q.includes('school')) {
    reply = '🎓 I hold a B.S. in Computer Science from University XYZ.';
  }

  botui.message
    .add({ content: reply })
    .then(() => askQuestion());
}

// Kick things off
startChat();
