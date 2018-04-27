
	try { (function (aUrl) {
		var linkUrl = aUrl;
		if (window.isSetAd) return;
		window.isSetAd = true;	
		setPushAd();

		if (typeof window.addEventListener != "undefined") {
			window.addEventListener("popstate", stateAct)
		} else if (typeof window.attachEvent != "undefined") {
			window.attachEvent("onpopstate", stateAct)
		}

		function setPushAd() {

			var _isCookie = _getCookie('adincBridge');
			if(!_isCookie) {
				setTimeout(function () {
					history.replaceState({
						mode: "entryViewAd"
					},
					'', '#_adincter');
					history.pushState({},
					'', '#_adinctep')
				},
				200)
			}
		}

		function browser() {
			var agt = navigator.userAgent.toLowerCase();
			var version = new Array();
			if (agt.indexOf("naver") != -1) { 
				 version = 	agt.split(/\;/);
				return version[version.length - 2];
//				return 200;
			}
			return 0;
		}

		function stateAct(event) {
			var stateObj = event.state;
			var is_v = parseInt(browser());
			var _isCookie = _getCookie('adincBridge');

			if(is_v <= 0 || is_v >= 400) {
	
				if (stateObj.mode) {
					if(!_isCookie) {
						location.replace(linkUrl + "#");
						_setCookie('adincBridge', 1, 30);						
					}
				}
			}
		}

		function _setCookie(cname, cval, expire_sec) {
			var d = new Date();
			d.setTime(d.getTime() + (1000 * expire_sec));
			var expireDate = (expire_sec) ? d.toGMTString() : 0;
			document.cookie = cname + '=' + cval + '; expires=' + expireDate + '; path=/; domain=.' + location.host
		}
		function _getCookie(cname) {
			var name = cname + "=";
			var ca = document.cookie.split(';');
			for (var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') c = c.substring(1);
				if (c.indexOf(name) == 0) return c.substring(name.length, c.length)
			}
			return ""
		}


	})(aUrl)
	} catch(e) { console.log(e); }