import React, { useState } from "react";
function App(props) {
  const [showMessage, setShowMessage] = useState(false);
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Welcome, {props.name}!</h1>
      <button
        onClick={() => setShowMessage(!showMessage)}
        style={{ padding: "10px 20px", backgroundColor: "#1D4ED8", color: "white", border: "none", borderRadius: "8px" }}
      >
        {showMessage ? "Hide" : "Show"} Message
      </button>
      {showMessage && <p style={{ marginTop: "20px" }}>This is a toggled message using React useState!</p>}
    </div>
  );
}
export default App;