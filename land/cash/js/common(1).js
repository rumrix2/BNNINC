function phoneCheck(phoneNo){
	var regExp = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;

	if( !regExp.test(phoneNo) ){
		alert("전화번호 형식이 잘못 되었습니다");
		return false;
	}else{
		return true;
	}
}

// 국번 4자리 적용
function phoneCheck2(phoneNo){
	var regExp = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})([0-9]{1})?-?[0-9]{3,4}-?[0-9]{4}$/;

	if( !regExp.test(phoneNo) ){
		alert("전화번호 형식이 잘못 되었습니다");
		return false;
	}else{
		return true;
	}
}

// 가운데 4자리
function phoneCheck3(phoneNo){
	var regExp = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{4}-?[0-9]{4}$/;

	if( !regExp.test(phoneNo) ){
		alert("전화번호 형식이 잘못 되었습니다");
		return false;
	}else{
		return true;
	}
}

function emailCheck(email){
	var chk = true;
	//var reg =/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
	var rex = "^[a-zA-Z][a-zA-Z0-9_\.\-]+@([a-zA-Z0-9-]{2,}\.)+([a-zA-Z]{2,4}|[a-zA-Z]{2}\.[a-zA-Z]{2})$";

	if(!email.match(rex)){
		chk = false;
	}

	return chk;
}

function isNumberKey(obj){

	if( !( (event.keyCode >= 37 && event.keyCode<=57) || (event.keyCode >= 96 && event.keyCode <= 105)
		|| event.keyCode == 8  || event.keyCode == 9)  ){
		alert("숫자만 입력해주세요. ");
		obj.value = "";
		event.returnValue=false;
	}
}

function isNumberKey1(obj){

	if( isNaN(obj.value) ){
		alert("숫자만 입력해주세요. 11");
		obj.value = "";
	}

}

// radio check
function radioCheck( obj ){
	var cnt = obj.length;
	var res = false;

	for( i = 0; i < cnt; i++ ){
		if( obj[i].checked == true ){
			res = true;
			break;
		}
	}

	return res;
}

function scrollBanner(target, h){

	//target : 스크롤 영역 class명
	// h : 스크롤 위치값

	var speed = '1000';
	var easing = 'swing';
	var yPos = 0;
	var pos = $("."+target).offset().top;

	$(window).scroll(function(){
		var scrollTop = $(document).scrollTop();
		if( scrollTop > pos ){
			yPos = scrollTop - pos + h;
		}else{
			yPos = pos;
		}
		$('.'+target).stop().animate({"top": yPos}, 800);
	});
}



function getBrowserType(){
	var agt = navigator.userAgent.toLowerCase();
	if (agt.indexOf("chrome") != -1) return 'Chrome';
	if (agt.indexOf("opera") != -1) return 'Opera';
	if (agt.indexOf("staroffice") != -1) return 'Star Office';
	if (agt.indexOf("webtv") != -1) return 'WebTV';
	if (agt.indexOf("beonex") != -1) return 'Beonex';
	if (agt.indexOf("chimera") != -1) return 'Chimera';
	if (agt.indexOf("netpositive") != -1) return 'NetPositive';
	if (agt.indexOf("phoenix") != -1) return 'Phoenix';
	if (agt.indexOf("firefox") != -1) return 'Firefox';
	if (agt.indexOf("safari") != -1) return 'Safari';
	if (agt.indexOf("skipstone") != -1) return 'SkipStone';
	if (agt.indexOf("msie") != -1) return 'Internet Explorer';
	if (agt.indexOf("rv:11.0") != -1) return 'Internet Explorer';
	if (agt.indexOf("netscape") != -1) return 'Netscape';
	if (agt.indexOf("mozilla/5.0") != -1) return 'Mozilla';
}


function closePop(u , w  , h , sr){
	/**
	 * u : url
	 * w : width
	 * h : height
	 * sr : scrollbars
	 */

	window.open(u, "cpop",
	"top=0,left=0,width="+w+",height="+h+",toolbar=0,status=0,scrollbars="+sr+",resizable=0");
}

function closePop2(u ,sr){
	/**
	 * u : url
	 * sr : scrollbars
	 */
	var w = window.document.body.offsetWidth;
	var h = window.document.body.offsetHeight;

	window.open(u, "cpop",
	"top=0,left=0,width="+w+",height="+h+",toolbar=0,status=0,scrollbars="+sr+",resizable=0");
}


function setCookie(cookieName, value, exdays){
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var cookieValue = escape(value) + ((exdays==null) ? "" : "; expires=" + exdate.toGMTString());
	document.cookie = cookieName + "=" + cookieValue;
}

function getCookie(cookieName) {
	cookieName = cookieName + '=';
	var cookieData = document.cookie;
	var start = cookieData.indexOf(cookieName);
	var cookieValue = '';
	if(start != -1){
		start += cookieName.length;
		var end = cookieData.indexOf(';', start);
		if(end == -1)end = cookieData.length;
		cookieValue = cookieData.substring(start, end);
	}

	return unescape(cookieValue);
}
/* 웹 후팝업 적용 */
function getUrlParams() {
    var params = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) { params[key] = value; });
    return params;
}

oParams = getUrlParams();
var z= oParams.ref;
var filter = "win16|win32|win64|mac|macintel";
if( navigator.platform  ){
    if( filter.indexOf(navigator.platform.toLowerCase())>0 ){
    	if( z ){
    		if( mediaCheck(z) > 0){
	    		window.onunload = rankingit;
	    	}
	    }
    }
}

function mediaCheck(z){
	var is_chk = 0;
	$.ajax({
		type: 'GET',
		url : '/common/media_chk.html',
		data : 'z='+z,
		beforeSend: function(){
		},
		async:false,
		success: function(data){
			is_chk = data;
		}
	});

	return is_chk;
}

function rankingit(){
	var w = window.document.body.offsetWidth;
	var h = window.document.body.offsetHeight;
	window.open("http://adv.imadrep.co.kr/event/pop/", "_blank","top=0,left=0,width="+w+",height="+h+",toolbar=0,status=0,scrollbars=1,resizable=0");
}

/* 아이콘 생성 방지 */
oParams = getUrlParams();
var z_no = oParams.ref;

/*
if( i ){
	if( iconCheck(i) > 0){
		setCookie('APP_ICON','nsapp', 1);
	}
}
*/

