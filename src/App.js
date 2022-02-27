/* global chrome */
import './App.css';
import React, { useState } from "react";
import axios from "axios";

function dragText() {
  let text;
  if(window.getSelection) {
      text = window.getSelection().toString();
  }
  else if (document.selection) {
      text = document.selection.createRange().text;
  }
  return text;
}


function __onWindowLoad() {
  function onWindowLoad() {
    chrome.tabs.executeScript(null, {
      file: "getSource.js"
      }, function() {
      if(chrome.extension.lastError) {
        // document.body.innerText = 'Error : \n' + chrome.extension.lastError.message;
      }
    });
  }

  window.onload = onWindowLoad;
}

function App() {
  const [text, setText] = useState([]);
  __onWindowLoad();
  document.onmouseup = function() {
    if(dragText()) {
        console.log(dragText()); //debug
        axios
        .post("http://ec2-3-36-60-14.ap-northeast-2.compute.amazonaws.com:8000/review/", {
          title: "text",
          content: "" + dragText()
        })
        .then((response) => {
          setText([response.data]);
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        }); 
    }
  }
  
  return (
    
    <div className="App">
      <header className="App-header">
        <p><strong>slang-translate</strong></p>
        <header className="App-header">
      </header>
      </header>
    </div>
  );
}


export default App;