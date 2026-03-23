const text = document.getElementById("text");
const choices = document.getElementById("choices");
const fade = document.getElementById("fade");

const scenes = {
  // START SCENE (entry point)
  start: {
    text: "Your journey begins... You want to become a Hunter. Where will you start?",
    bg: "forest1.jpg",
    options: [
      { text: "Begin your adventure (Gon style)", next: "gonStart" }
    ]
  },

  // GON ADVENTURE
  gonStart: {
    text: "You step into a bright green forest, full of life. The wind feels different here... stronger. You remember your goal to become a Hunter, no matter what.",
    bg: "forest1.jpg",
    options: [
      { text: "Follow the river like Gon", next: "gonRiver" },
      { text: "Climb a tree to scout the area", next: "gonTree" }
    ]
  },

  gonRiver: {
    text: "You follow the river and spot a huge fish moving fast in the water. Catching it could prove your strength.",
    bg: "river.jpg",
    options: [
      { text: "Try to catch the fish", next: "gonCatch" },
      { text: "Ignore it and keep moving", next: "gonPath" }
    ]
  },

  gonTree: {
    text: "You climb the tallest tree nearby. From the top, you see a path and a strange aura deeper in the forest.",
    bg: "forest.jpg",
    options: [
      { text: "Head toward the aura", next: "gonAura" },
      { text: "Take the safe path", next: "gonPath" }
    ]
  },

  gonCatch: {
    text: "You jump into the river and struggle... but you manage to grab the fish! Your strength grows stronger ",
    bg: "river.jpg",
    options: [
      { text: "Continue your journey", next: "gonPath" }
    ]
  },

  gonAura: {
    text: "You feel a powerful presence... like a Hunter watching you. This is dangerous, but exciting.",
    bg: "darkforest.jpg",
    options: [
      { text: "Face it bravely", next: "gonWin" },
      { text: "Retreat for now", next: "gonPath" }
    ]
  },

  gonPath: {
    text: "You continue forward with determination. Every step brings you closer to becoming a true Hunter.",
    bg: "forest1.jpeg",
    options: [
      { text: "Keep going", next: "gonWin" }
    ]
  },

  gonWin: {
    text: "You survived the trial with courage and heart. Just like Gon, your adventure is only beginning ",
    bg: "win.jpg",
    options: [
      { text: "Play Again", next: "start" }
    ]
  }
};

// FADE TRANSITION
function fadeTransition(callback) {
  fade.style.opacity = 1;

  setTimeout(() => {
    callback();
    fade.style.opacity = 0;
  }, 500);
}

// SHOW SCENE
function showScene(sceneName) {
  const scene = scenes[sceneName];

  if (!scene) {
    text.innerText = "Scene not found ";
    return;
  }

  text.innerText = scene.text;
  document.body.style.backgroundImage = `url(${scene.bg})`;

  choices.innerHTML = "";

  scene.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option.text;

    btn.onclick = () => {
      fadeTransition(() => showScene(option.next));
    };

    choices.appendChild(btn);
  });
}

// START GAME
showScene("start");