

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