import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia"

function createCard(emojipediaObj){
  return(
    <Card 
    // this function maps the js objs, id,emoji,name,meaning to the props
    key = {emojipediaObj.id}
    emoji = {emojipediaObj.emoji}
    title = {emojipediaObj.name}
    content = {emojipediaObj.meaning}
  />
  );
}

function App() {


  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {/* the map function loops thru the array and runs a callback func on each element, and returns the result of the callback function  */}
        {/* , where the input of the callback is the element of the array*/}
        {emojipedia.map(createCard)};
      </dl>
    </div>
  );
}

export default App;
