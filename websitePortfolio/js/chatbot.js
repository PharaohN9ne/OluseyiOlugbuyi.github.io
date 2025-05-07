// chatbot.js
const botui = new BotUI('botui-app');

// Welcome
botui.message.add({ content: 'Hi! I’m YourBot. Ask me anything.' })
  .then(() => botui.action.text({ action: { placeholder: 'What would you like to know?' } }))
  .then(res => {
    const q = res.value.toLowerCase();
    let reply = 'Sorry, can you rephrase that?';
    if (q.includes('skills')) reply = 'I’m proficient in HTML, CSS, JavaScript, React…';
    else if (q.includes('projects')) reply = 'Check out my GitHub: https://github.com/you';
    else if (q.includes('experience')) reply = 'I’ve worked at … and studied at …';
    return botui.message.add({ content: reply });
  });
