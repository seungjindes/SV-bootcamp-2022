var data = {
  "das" : "dddd",
  "ads" : "adssa",
  'banana' : "banana",

}

function matching(){
  chrome.tabs.executeScript({
    code: 'document.querySelector("body").innerText;'
  }, function (result) {
    var first = 0 ;
    var resultString = "";
    var bodyText = result[0];

    for(var key in data){
      var pattern = key;
      var re = new RegExp(pattern , "g");
      resultString += bodyText.substring(first , last);

      while((matchArray = re.exec(bodyText)) != null){
        last = matchArray.index;
        //일치하는 문자열을 연결
        resultString += bodyText.substring(first , last+pattern.length);
        //bodyText 내에서의 index추출
        resultString += "<span class = 'found'>" + matchArray[0] + "</span>"    
        // first = re.lastIndex;

      }
      
    }
    //document.getElementById("searchResult").innerHTML = resultString;
    //hober(resultString)
    alert(resultString)
    
  });
  
}


function findStr() {
  var n = 0;
  //var str = document.getElementById("str").value;
  var str = "asd"
  if(navigator.userAgent.indexOf("rv:11") > -1) {
      var f, contents = document.body.createTextRange();
      for(var i = 0; i <= n && (f = contents.findText(str)) != false; i++) {
          contents.moveStart('character');
          contents.moveEnd('textedit');
      }
      if(f) {
          contents.moveStart('character', -1);
          contents.findText(str);
          contents.select();
          n++;
      }
  } else {
      window.find(str);
  }
}



function hober(substring){
  displayText(substring)
}

function displayText(translated) {
  let newDIV = document.createElement("div");
  let newP = document.createElement("p");
  let closeButton = document.createElement("span");

  closeButton.innerHTML = "X";
  closeButton.addEventListener('click', function() {
      this.parentElement.style.display = "none";
  });
  newP.innerHTML = translated;

  newDIV.appendChild(closeButton);
  newDIV.appendChild(newP);

  newDIV.setAttribute("class","translatedTextView");
  newDIV.style.padding = "1rem";
  newDIV.style.position = "static";
  newDIV.style.zIndex = "1";
  newDIV.style.right = "100";
  newDIV.style.top = "100";
  newDIV.style.textAlign = "right";
  newDIV.style.background = "#FFFFFF";
  newDIV.style.border = "2px solid #CEECF5";
  newDIV.style.borderRadius = "1em 0 1em 1em";

  document.body.appendChild(newDIV);
}



matching()
