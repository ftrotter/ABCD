//thanks to angelwatt: http://forums.macrumors.com/showthread.php?t=438628
var buffer = 10; //scroll bar buffer
var i = 0, len = reports.length;

function pageY(elem) {
    return elem.offsetParent ? (elem.offsetTop + pageY(elem.offsetParent)) : elem.offsetTop;
}


function resizeIframe() {
    var height = window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight;
    height -= pageY(document.getElementById('ifm'))+ buffer ;
    height = (height < 0) ? 0 : height;
    document.getElementById('hourFrame').style.height = height + 'px';
}



function ChangeSrc()
{
  	document.getElementById('hourFrame').src = reports[i++];
	setTimeout('ChangeSrc()', (reports[i++]*1000));
      if (i >= len -1) { i = 0; }
}

window.onresize = resizeIframe;
window.onload = resizeIframe;
