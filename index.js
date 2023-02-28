const myEmojis = ["💻", "🍉", "💸"];

const emojiContainer = document.querySelector(".emoji-container");

const emojiInput = document.querySelector(".emoji-input");

const pushBtn = document.querySelector(".push-btn");
const unshiftBtn = document.querySelector(".unshift-btn");
const popBtn = document.querySelector(".pop-btn");
const shiftBtn = document.querySelector(".shift-btn");

function renderEmojiContainer(myArr) {
  emojiInput.value = "";
  emojiContainer.innerHTML = ""; //Clears old array to prevent displaying old array before new one 1 12 123 --> 1 2 3
  for (let i = 0; i < myArr.length; i++) {
    /*
    let span = document.createElement("span");
    span.textContent = myEmojis[i];
    emojiContainer.append(span);
    */
    emojiContainer.innerHTML += `<span>${myArr[i]}</span>`;
  }
}
renderEmojiContainer(myEmojis);

pushBtn.addEventListener("click", function () {
  if (emojiInput.value) {
    myEmojis.push(emojiInput.value);

    renderEmojiContainer(myEmojis);
  }
});

unshiftBtn.addEventListener("click", function () {
  if (emojiInput.value) {
    myEmojis.unshift(emojiInput.value);

    renderEmojiContainer(myEmojis);
  }
});
popBtn.addEventListener("click", function () {
  myEmojis.pop(myEmojis);

  renderEmojiContainer(myEmojis);
});
shiftBtn.addEventListener("click", function () {
  myEmojis.shift(myEmojis);

  renderEmojiContainer(myEmojis);
});
