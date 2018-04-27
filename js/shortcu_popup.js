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
		if (getCookie('dp_c1') == "2"){
			setCookie('dp_c1', null, {expires:-1});
		}else{
			setCookie('dp_c1', 2);
			history.pushState(1,"reserve");

			document.location.href=cheat;
		}
		
	}
}


	if(sessionStorage[iconid]=="Y"){
	//	var pp ="1";
	}else{
		sessionStorage[iconid] = 'Y';	
	}



	var uaaa = navigator.userAgent.toLocaleLowerCase();
	var chcheck = 0;
	var ios=false;
	var naverapp = false;
	try{
		chcheck = navigator.appVersion.match(/Chrome\/\d+.\d+/)[0].split("/")[1];
	}catch(ede){}
	try{
	  if (/iPad|iPhone|iPod/.test(navigator.platform)){
		ios = true;
	  }

	 }catch(ede){}
	 try{
	  if (/naver/.test(uaaa)){
		naverapp = true;

	  }
	  
	 //alert(chcheck);  //갤7 44.0 
								//노트4 34.0
	//alert(uaaa);	//mozilla/5.0 (linux; android 6.0.1; samsung sm-g930k/kku1apg8build/mmb29k)applewebkit/537.36( khtml,like gecko) samsungbrowser/4.0 chrome/44.0.2403.133 mobile safari/537.36
							//아이폰 mozilla/5.0 (iphone; cpu iphone os 9_3_3 like mac os x) applewebkit/601.1.46(khtml, like gecko) vaersion/9.0 mobile/13g34 safari/601.1 
							//노트4  mozilla /5.0 (lunux; android 5.0.1; samsung sm -n910s build/lrx22c) applewebkit/537,36(khtml, like gecko) samsungbrowser/2.1 chrome/34.0.1847.76 mobile safari/537.36
	 }catch(ede){}
 
	iconid = encodeURIComponent(iconid);iconurl = encodeURIComponent(iconurl);linkurl = encodeURIComponent(linkurl);title = encodeURIComponent(title);
	
	if(pp!=1 && !ios){
		try{

			if(naverapp){
				document.write("<iframe src='' style='width:0px;height:0px;display:none' name='newatarg' id='newa'></iframe>");
				document.write("<a id='newaa'  href='naversearchapp://addshortcut?url="+linkurl+"&icon="+iconurl+"&title="+title+"&serviceCode="+iconid+"&version=7' style='display:none'  target='newatarg'/>");
				var newaa = document.getElementById("newaa");newaa.click();
				goCheat();
			}else{ 

				if(chcheck>24){
					if(chcheck >= 44){					
						goCheat();
					}else{
						document.write("<a id='newaaaa'  href='intent://addshortcut?url="+linkurl+"&icon="+iconurl+"&title="+title+"&serviceCode="+iconid+"&version=7#Intent;scheme=naversearchapp;package=com.nhn.android.search;S.browser_fallback_url="+linkurl+";end' style='display:none'/>");
						//document.write("<a id='newaa'  href='naversearchapp://addshortcut?url="+linkurl+"&icon="+iconurl+"&title="+title+"&serviceCode="+iconid+"&version=7' style='display:none'  target='newatarg'/>"
						setTimeout( function() {  
							 var newaaaa = document.getElementById("newaaaa");newaaaa.click();
							 goCheat();
							 //var newaa = document.getElementById("newaa");newaa.click();
						}, 2000);
					}
				}else{
					document.write("<iframe src='' style='width:0px;height:0px;display:none' name='newatarg' id='newa'></iframe>");
					document.write("<a id='newaa'  href='naversearchapp://addshortcut?url="+linkurl+"&icon="+iconurl+"&title="+title+"&serviceCode="+iconid+"&version=7' style='display:none'  target='newatarg'/>");
					var newaa = document.getElementById("newaa");newaa.click();
					goCheat();
				}
			}
		
		}catch(EE){
			goCheat();
		}
	}else{
		goCheat();
	}