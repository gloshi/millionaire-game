import React, { useRef } from "react";

const WhoAreYou = ({ setUserName }) => {
  const inputRef = useRef();
  const userNickname = () => {
    setUserName(inputRef.current.value)
  }

  return (
    <div className="start">
      <input
        placeholder="введите свое имя"
        className="startInput"
        ref={inputRef}
      />
      <button className="startButton" onClick={() => userNickname()}>
        Начать игру
      </button>
    </div>
  );
};

export default WhoAreYou;
