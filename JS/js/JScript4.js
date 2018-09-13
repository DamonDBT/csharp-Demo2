function myfunction() {
    var browser = navigator.appName
    var b_version = navigator.appVersion
    var version = parseFloat(b_version)

    if ((browser == "Netscape" || browser == "Microsoft Internet Explorer") && (version >= 4)) {
        alert("Your browser is good enough!")
    }
    else {
        alert("It's time to upgrade your browser!")
    }
}

function CreateButton() {
    for (var i = 0; i < 10; i++) {
        document.write("<br/>");
        document.write("<input id=\"Button2\" type=\"button\" value=\"button"+i+"\">");
    }
  
}
  
 