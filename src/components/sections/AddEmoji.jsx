import React from "react";
import { useState } from "react";
import "./Emoji.css";

function AddEmoji(props) {
  let [emoji, setEmoji] = useState({
    icon: "",
    name: "",
    description: "",
  });

  const handleInput = (event) => {
    // console.log(event.target.name, event.target.value);

    let name = event.target.name;
    let value = event.target.value;
    setEmoji((prev) => {
      return { ...prev, [name]: value };
    });

    //   let {name, value} = e.target;
    // setEmoji(prev =>({...prev, [name]:value}))  // Single line return
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (emoji.icon === "" || emoji.name === "" || emoji.description === "") {
      const warningMsg = document.querySelector(".warning-msg");
      warningMsg.style.display = "block";
      setTimeout(() => {
        warningMsg.style.display = "none";
      }, 2500);
    } else {
      props.call(emoji);
      const suuccessMsg = document.querySelector(".success-msg");
      suuccessMsg.style.display = "block";
      setTimeout(() => {
        suuccessMsg.style.display = "none";
      }, 2500);
      event.target.icon.value = "";
      event.target.name.value = "";
      event.target.description.value = "";
      setEmoji(
        emoji = {
          icon: "",
          name: "",
          description: "",
        }
    )
    }
  };

  return (
    <>
      <div className="container-fluid ">
        <div className="container ">
          <div className="alert success-msg position-fixed z-1 top-0 end-0 ">
            <div
              className="alert alert-success d-flex align-items-center"
              role="alert"
            >
              <svg
                className="bi flex-shrink-0 me-2"
                role="img"
                aria-label="Success:"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
              <div>A new emoji has been added!</div>
            </div>
          </div>
          <div className="alert warning-msg position-fixed z-1 top-0 end-0 ">
            <div
              className="alert alert-warning d-flex align-items-center"
              role="alert"
            >
              <svg
                className="bi flex-shrink-0 me-2"
                role="img"
                aria-label="Warning:"
                viewBox="0 0 16 16"
              >
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              <div>Please fill out all the fields properly!</div>
            </div>
          </div>
          <h3 className="text-center mt-5 text-decoration-underline">
            Add New Emojis
          </h3>
          <form onSubmit={handleSubmitForm}>
            <div className="input-fields d-flex gap-3 p-5">
              <input
                className="form-control focus-ring focus-ring-dark"
                type="text"
                name="icon"
                placeholder="Enter Emoji Icon"
                value={props.icon}
                onChange={handleInput}
              />
              <input
                className="form-control focus-ring focus-ring-dark"
                type="text"
                name="name"
                placeholder="Enter Emoji Name"
                value={props.name}
                onChange={handleInput}
              />
              <input
                className="form-control focus-ring focus-ring-dark"
                type="text"
                name="description"
                placeholder="Enter Emoji Description"
                value={props.description}
                onChange={handleInput}
              />
            </div>
            <div className="submit-btn text-center">
              <button type="submit" className="btn btn-dark">
                Add Emoji
              </button>
            </div>
          </form>
        </div>
      </div>
      <hr className="text-dark mt-5" />
    </>
  );
}

export default AddEmoji;
