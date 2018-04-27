var pp = $.getP("p");

function setCookie(cName, cValue, cDay){
		var expire = new Date();
		expire.setDate(expire.getDate() + cDay);
		cookies = cName + '=' + escape(cValue) + '; path=/ '; 
		if(typeof cDay != 'undefined') cookies += ';expires=' + expire.toGMTString() + ';';
		document.cookie = cookies;
	}


	function getCookie(cName) {
		cName = cName + '=';
		var cookieData = document.cookie;
		var start = cookieData.indexOf(cName);
		var cValue = '';
		if(start != -1){
			start += cName.length;
			var end = cookieData.indexOf(';', start);
			if(end == -1)end = cookieData.length;
			cValue = cookieData.substring(start, end);
		}
		return unescape(cValue);
	}

function goCheat(){
	if(cheat){
		if (getCookie('event') == "2"){
			setCookie('event', null, {expires:-1});
		}else{
			setCookie('event', 2);
			history.pushState(1,"reserve");

			document.location.href=cheat;
		}
		
	}
}
//좀 ㅄ같아서 여기서 처리해줘야 한다 

	
goCheat();
