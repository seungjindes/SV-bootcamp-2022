/* global chrome */
function doSearch(text,meaning) {
    var count = 0;
    if (window.find && window.getSelection) { 
        document.designMode = "on";
        var sel = window.getSelection();
        sel.collapse(document.body, 0);
        while (window.find(text)) {
            count += 1
            document.execCommand("insertHTML" , false , `<span
            onMouseOver="this.children[0].style.display = 'inline-block'"
            onMouseOut="this.children[0].style.display = 'none'"
            id = "${count}";
            style="position: relative;
            color:black;
            display:inline-block; background-color:#DCCBED"
            >${text}</span>`)

            sel.collapseToEnd();
        }
        document.designMode = "off";
    }
    window.scrollTo(0,0);
    while(count){
        let element = document.createElement("span");
        element.innerText = meaning
        element.setAttribute("style", "display: none; background-color: rgba(0,0,0,0.5); padding: 10px; position: absolute; z-index: 1000; width:200px; color: #fff; border-radius: 10px; left: 25%; bottom: 120%; opacity: 1; font-size: medium; font-weight: normal; height:100px; text-align:left;")
        const slangSpan = document.getElementById(count.toString());
        if (slangSpan){
            console.log(slangSpan);
            slangSpan.appendChild(element);
        }
        console.log(count);
        count -= 1;
    }
}
