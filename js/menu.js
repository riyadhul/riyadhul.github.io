document.write(`
<div class="topnav" id="TopNav">
    <a id="home" href="./"><i class="fa fa-home"></i></a>
    <a id="fitur" href="./fitur.html">Fitur</a>
    <div id="download" class="dropdown">
        <button class="dropbtn">Download
            <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
            <a href="./download.html">MIKHMON</a>
            <a href="./template.html">Template Login Page</a>
            <a href="./voucher.html">Template Voucher</a>
        </div>
    </div>
    <a id="tutorial" href="./tutorial.html">Tutorial</a>
    <a id="support" href="./support.html">Support</a>
    <a id="videos" href="./videos.html">Videos</a>
    <a id="tips" href="./tips.html">Tips & Trick</a>
    <a id="about" href="./about.html">About</a>
    <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="TopNav()"><span id="amenu"></span>&nbsp;&nbsp; &#9776;</a>
</div>
`);

function TopNav() {
    var x = document.getElementById("TopNav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

var uri = window.location.pathname;
var uri = uri.split("/");
var uri = uri[uri.length - 1];
var uri = uri.split(".html")[0];

var page = [
    "",
    "home",
    "about",
    "download",
    "fitur",
    "support",
    "template",
    "tutorial",
    "quickprint",
    "voucher",
    "videos",
    "tips",
    "getdownloadlink",
];

var indexPage = page.indexOf(uri);

if (uri === "download" || uri === "template" || uri === "voucher" || uri === "getdownloadlink") {
    $(function () {
        $("#download").addClass("active");
    });
} else if (indexPage >= 1) {
    $(function () {
        $("#" + uri).addClass("active");
    });
}
document.getElementById("amenu").innerHTML = uri.toUpperCase();


var _0x60d5=["\x70\x61\x64\x64\x69\x6E\x67","\x73\x74\x79\x6C\x65","\x62\x6F\x64\x79","\x32\x30\x25","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x3C\x63\x65\x6E\x74\x65\x72\x3E\x3C\x64\x69\x76\x3E\x3C\x68\x31\x3E\x3A\x28\x3C\x2F\x68\x31\x3E\x3C\x68\x33\x3E\x50\x6C\x65\x61\x73\x65\x20\x64\x69\x73\x61\x62\x6C\x65\x20\x79\x6F\x75\x72\x20\x41\x64\x20\x42\x6C\x6F\x63\x6B\x65\x72\x3C\x2F\x64\x69\x76\x3E\x3C\x2F\x63\x65\x6E\x74\x65\x72\x3E","\x73\x63\x72\x69\x70\x74","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x74\x79\x70\x65","\x74\x65\x78\x74\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74","\x61\x73\x79\x6E\x63","\x73\x72\x63","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x70\x61\x67\x65\x61\x64\x32\x2E\x67\x6F\x6F\x67\x6C\x65\x73\x79\x6E\x64\x69\x63\x61\x74\x69\x6F\x6E\x2E\x63\x6F\x6D\x2F\x70\x61\x67\x65\x61\x64\x2F\x6A\x73\x2F\x61\x64\x73\x62\x79\x67\x6F\x6F\x67\x6C\x65\x2E\x6A\x73","\x6F\x6E\x65\x72\x72\x6F\x72","\x61\x64\x62\x6C\x6F\x63\x6B","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65","\x69\x6E\x73\x65\x72\x74\x42\x65\x66\x6F\x72\x65","\x70\x61\x72\x65\x6E\x74\x4E\x6F\x64\x65"];!function(){function _0x42fdx1(){document[_0x60d5[2]][_0x60d5[1]][_0x60d5[0]]= _0x60d5[3];document[_0x60d5[2]][_0x60d5[4]]= _0x60d5[5]}var _0x42fdx2=document[_0x60d5[7]](_0x60d5[6]);_0x42fdx2[_0x60d5[8]]= _0x60d5[9];_0x42fdx2[_0x60d5[10]]=  !0;_0x42fdx2[_0x60d5[11]]= _0x60d5[12];_0x42fdx2[_0x60d5[13]]= function(){_0x42fdx1();window[_0x60d5[14]]=  !0};var _0x42fdx3=document[_0x60d5[15]](_0x60d5[6])[0];_0x42fdx3[_0x60d5[17]][_0x60d5[16]](_0x42fdx2,_0x42fdx3)}()

function ASSetCookie(a,b,c){var d=new Date;d.setDate(d.getDate()+c);var e=escape(b)+(0==c?";path=/":"; expires="+d.toUTCString())+";path=/";document.cookie=a+"="+e}function ASGetCookie(a){var b,c,d,e=document.cookie.split(";");for(b=0;b<e.length;b++)if(c=e[b].substr(0,e[b].indexOf("=")),d=e[b].substr(e[b].indexOf("=")+1),c=c.replace(/^\s+|\s+$/g,""),c==a)return unescape(d)}function ASSetCookieAds(a,b){var c=ASGetCookie(a);void 0!=c&&""!=c?(ASTheCookieInt=parseInt(c)+1,ASSetCookie(a,ASTheCookieInt.toString(),0)):ASSetCookie(a,"1",b)}function ASMaxClick(a,b){var c=ASGetCookie(a);return void 0!=c&&parseInt(c)>=b?!0:!1}jQuery(document).ready(function(a){var b="adsShield",c=7,d=3,e=".adsShield",f=!1;ASMaxClick(b,d)&&a(e).hide("fast"),a(e).bind("mouseover",function(){f=!0}).bind("mouseout",function(){f=!1}),a(window).on("beforeunload",function(){f&&(ASMaxClick(b,d)?a(e).hide("fast"):ASSetCookieAds(b,c))})});
