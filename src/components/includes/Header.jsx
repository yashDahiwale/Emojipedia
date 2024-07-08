import React from "react";
import "../sections/Emoji.css";

function Header() {
  const emojiArray = [
    "✌",
    "😂",
    "😝",
    "😁",
    "😱",
    "👉",
    "🙌",
    "🍻",
    "🔥",
    "🌈",
    "☀",
    "🎈",
    "🌹",
    "💄",
    "🎀",
    "⚽",
    "🎾",
    "🏁",
    "😡",
    "👿",
    "🐻",
    "🐶",
    "🐬",
    "🐟",
    "🍀",
    "👀",
    "🚗",
    "🍎",
    "💝",
    "💙",
    "👌",
    "❤",
    "😍",
    "😉",
    "😓",
    "😳",
    "💪",
    "💩",
    "🍸",
    "🔑",
    "💖",
    "🌟",
    "🎉",
    "🌺",
    "🎶",
    "👠",
    "🏈",
    "⚾",
    "🏆",
    "👽",
    "💀",
    "🐵",
    "🐮",
    "🐩",
    "🐎",
    "💣",
    "👃",
    "👂",
    "🍓",
    "💘",
    "💜",
    "👊",
    "💋",
    "😘",
    "😜",
    "😵",
    "🙏",
    "👋",
    "🚽",
    "💃",
    "💎",
    "🚀",
    "🌙",
    "🎁",
    "⛄",
    "🌊",
    "⛵",
    "🏀",
    "🎱",
    "💰",
    "👶",
    "👸",
    "🐰",
    "🐷",
    "🐍",
    "🐫",
    "🔫",
    "👄",
    "🚲",
    "🍉",
    "💛",
    "💚",
  ];

  window.onload = function emojiAnimation() {
    const header = document.querySelector(".header");
    setInterval(() => {
      const randomEmojiIndex = Math.floor(
        Math.random(emojiArray) * emojiArray.length
      );
      const randomEmoji = emojiArray[randomEmojiIndex];
      const span = document.createElement("div");
      span.innerHTML = randomEmoji;
      span.classList.add("emoji");
      header.appendChild(span);
      const randomPositionX = Math.floor(Math.random() * 100);
      const randomSize = Math.floor(Math.random() * 50);
      const randomRotate = Math.floor(Math.random() * 360);
      span.style.transform = "rotate(" + randomRotate + "deg)";
      span.style.fontSize = randomSize + "px";
      span.style.left = randomPositionX + "%";
      setTimeout(() => {
        span.remove();
      }, 10000);
    }, 300);
  };

  return (
    <div className="main">
      <div className="header overflow-hidden position-relative">
        {/* <span className="emoji">😀</span> */}
        <nav className="navbar navbar-expand bg-dark text-light justify-content-center">
          <h1
            className="fw-normal text-center z-2 py-3"
            style={{ fontSize: "50px" }}
          >
            📖 EmojiPedia
          </h1>
        </nav>
      </div>
    </div>
  );
}

export default Header;
