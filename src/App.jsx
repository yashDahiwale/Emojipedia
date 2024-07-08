import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/includes/Header.jsx";
import Footer from "./components/includes/Footer.jsx";
import EmojiGrid from "./components/sections/EmojiGrid.jsx";
import AddEmoji from "./components/sections/AddEmoji.jsx";
function App() {
  const [emojis, setEmojis] = useState([
    {
      id: 1,
      icon: "❤️",
      name: "Red Heart",
      description: "A classic red love heart emoji.",
    },
    {
      id: 2,
      icon: "🔥",
      name: "Fire",
      description:
        "A flame, as produced when something is on fire. Depicted as a red, orange, and yellow flickering flame.",
    },
    {
      id: 3,
      icon: "🌹",
      name: "Rose",
      description:
        "A red rose. Depicted as a single, vertical red rose on a green stem.",
    },
    {
      id: 4,
      icon: "😂",
      name: "Lauging",
      description: "Face with Tears of Joy.",
    },
    {
      id: 5,
      icon: "🎁",
      name: "Gift",
      description: "A present or gift in a box tied with a bow.",
    },
  ]);
  const callFromAddEmoji = (data) => {
    setEmojis(function (prev) {
      return [...prev, data];
    });
    data.id = emojis[emojis.length - 1].id + 1;
  };
  return (
    <div className="">
      <Header />
      <AddEmoji call={callFromAddEmoji} />
      <EmojiGrid emojiData={emojis} />
      <Footer />
    </div>
  );
}

export default App;
