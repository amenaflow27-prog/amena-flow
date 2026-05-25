
function sendMessage() {
  let input = document.getElementById("userInput");
  let box = document.getElementById("chatBox");

  let message = input.value.trim();
  if (message === "") return;

  // show user message
  box.innerHTML += `<div><b>You:</b> ${message}</div>`;

  // generate Yejun reply
  let reply = yejunReply(message);

  box.innerHTML += `<div><b>Yejun:</b> ${reply}</div>`;

  input.value = "";
  box.scrollTop = box.scrollHeight;
}

function yejunReply(msg) {
  let text = msg.toLowerCase();

  // 🌙 emotional awareness layer
  if (text.includes("tired")) {
    return "You don’t need to push right now. Even slow progress is still progress.";
  }

  if (text.includes("stress") || text.includes("stressed")) {
    return "Okay. Let’s shrink everything into one small step. Just one.";
  }

  if (text.includes("don’t want to study") || text.includes("lazy")) {
    return "Then we start ridiculously small. Like 2 minutes. No pressure.";
  }

  if (text.includes("hello") || text.includes("hi")) {
    return "Hey. I’m here. What’s on your mind today?";
  }

  if (text.includes("exam")) {
    return "We don’t fight exams. We prepare like a calm strategy.";
  }

  // default response
  return "Tell me more. I’m listening.";
}


// 🌙 PWA SERVICE WORKER (app behavior layer)
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js")
    .then(() => console.log("Amena Flow is now active ✨"));
}
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js");
  });
}
