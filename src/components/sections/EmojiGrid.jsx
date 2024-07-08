import React, { useState } from "react";
import "./Emoji.css";
// e.target -> konwn as an event object

function EmojiGrid(props) {
  const [openedEmojiId, setopenedEmojiId] = useState(null);

  const DispalyEmoji = (props) => {
    const isOpen = openedEmojiId === props.id;
    return (
      <div className="box py-2 px-3 shadow-lg rounded" key={props.id}>
        <div className="align-items-center">
          <h1>{props.icon}</h1>
        </div>
        <div className="">
          <span className="fw-bold fs-5">{props.name}</span>
        </div>
        <p>{props.description.slice(0, 23) + "..."}</p>
        <button
          className="btn btn-dark btn-sm"
          // data-bs-toggle="collapse"
          // data-bs-target=".emoji-pop-up"
          onClick={() => {
            toggleEmojiPopUp(props.id);
          }}
        >
          View more
        </button>
        {isOpen && <EmojiPopUp emoji={props} />}
      </div>
    );
  };

  const toggleEmojiPopUp = (id) => {
    if (openedEmojiId === id) {
      setopenedEmojiId(null);
    } else {
      setopenedEmojiId(id);
    }
  };

  const EmojiPopUp = (props) => {
    return (
      <div 
      // className="collapse emoji-pop-up"
       key={props.emoji.id}>
        <div
          style={{ height: "500px", width: "700px" }}
          className="container bg-dark position-absolute top-50 start-50 translate-middle text-center text-light rounded-3 d-flex flex-column gap-3 align-items-center justify-content-center"
        >
          <div className="fs-1">
            <h1 style={{ fontSize: "150px" }}>{props.emoji.icon}</h1>
          </div>
          <div>
            <span className="fw-bold fs-5">{props.emoji.name}</span>
          </div>
          <div>
            <p>{props.emoji.description}</p>
          </div>
          <button
            className="btn btn-close btn-lg m-3 position-absolute top-0 end-0 bg-light focus-ring focus-ring-secondary border"
            // data-bs-toggle="collapse"
            // data-bs-target=".emoji-pop-up"
            onClick={() => {
              setopenedEmojiId(null);
            }}
          ></button>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="d-flex flex-wrap gap-4 justify-content-center py-5">
            {props.emojiData.map((emoji) => {
              return DispalyEmoji(emoji);
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default EmojiGrid;
