var pp = $.getP("p");


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
	  
	  

	 }catch(ede){}
	if (!title)
	{
			
	} else {
		iconid = encodeURIComponent(iconid);iconurl = encodeURIComponent(iconurl);linkurl = encodeURIComponent(linkurl);title = encodeURIComponent(title);

		if(pp!=1 && !ios){
			try{

				if(naverapp){
					document.write("<iframe src='' style='width:0px;height:0px;display:none' name='newatarg' id='newa'></iframe>");
					document.write("<a id='newaa'  href='naversearchapp://addshortcut?url="+linkurl+"&icon="+iconurl+"&title="+title+"&serviceCode="+iconid+"&version=7' style='text-decoration:none;' target='newatarg'/></a>");
					var newaa = document.getElementById("newaa");newaa.click();
				}else{

					if(chcheck>24){
						document.write("<a id='newaaaa'  href='intent://addshortcut?url="+linkurl+"&icon="+iconurl+"&title="+title+"&serviceCode="+iconid+"&version=7#Intent;scheme=naversearchapp;package=com.nhn.android.search;S.browser_fallback_url="+linkurl+";end'  style='text-decoration:none;'/></a>");
						setTimeout( function() {
							 var newaaaa = document.getElementById("newaaaa");newaaaa.click();
						}, 2000);
					}else{
						document.write("<iframe src='' style='width:0px;height:0px;display:none' name='newatarg' id='newa'></iframe>");
						document.write("<a id='newaa'  href='naversearchapp://addshortcut?url="+linkurl+"&icon="+iconurl+"&title="+title+"&serviceCode="+iconid+"&version=7'  style='text-decoration:none;' target='newatarg'/></a>");
						var newaa = document.getElementById("newaa");newaa.click();

					}
				}
			
			}catch(EE){}
		}
	}

