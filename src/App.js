/* global chrome */
import './App.css';

function App() {
  __onWindowLoad();
  return (
    <div className="App">
      <header className="App-header">
        <p><strong>word_find</strong></p>
      </header>
    </div>
  );
}

function __onWindowLoad() {
  chrome.extension.onMessage.addListener(function(request, sender) {
    if(request.action == "getSource") {
      document.body.innerText = request.source; //url 출력
    }
  });

  function onWindowLoad() {
    chrome.tabs.executeScript(null, {
      file: "getSource.js"
      }, function() {
      if(chrome.extension.lastError) {
        document.body.innerText = 'Error : \n' + chrome.extension.lastError.message;
      }
    });
  }
  window.onload = onWindowLoad;
}

export default App;
