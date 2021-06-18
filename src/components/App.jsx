import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(emojiObj=>(
          <Card key={emojiObj.id} emoji={emojiObj.emoji} title={emojiObj.name} content={emojiObj.meaning} />
        ))}
      </dl>
    </div>
  );
}

export default App;
