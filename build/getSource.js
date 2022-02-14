import styled from 'styled-components';


const tooltip = styled.span
    position : relative;
    color : rgb(87, 171, 219); 

function get_url(){
    var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
    console.log("current url");
    return newURL
}

chrome.extension.sendMessage({
    action: "getSource",
    source: get_url(document.body)
});


function doSearch(text) {
    if (window.find && window.getSelection) { 
        document.designMode = "on";
        var sel = window.getSelection();
        sel.collapse(document.body, 0);
        while (window.find(text)) {
            // document.execCommand("insertHTML" , false , "<span className = 'tooltiplink' , datatooltip='new word'>new</span>")
            document.execCommand("insertHTML" , false , "<tooltip>new</tooltip>")
            sel.collapseToEnd();
        }
        document.designMode = "off";
    } 
}
doSearch("is")