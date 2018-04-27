$(document).ready(function(){
	$.fn.touchStart =function(){
		var callTimer,
		btnMg = -122,
		callDelay = 2000,
		objBtn	= $("#call_btn"),
		obj		= $("#call_box");
		obj.show();
		
		function init(){	
			var filter = "win16|win32|win64|mac";
			if ($.isEmptyObject(obj)==false){ 
				if( navigator.platform && filter.indexOf(navigator.platform.toLowerCase())<0){
					document.body.addEventListener('touchstart', addScrollEvent, false);
				}
			}
		}

		function addScrollEvent(){
			window.addEventListener('scroll', btnControll, false);
		}

		function btnControll(){
			if(objBtn.css("margin-right") != btnMg+"px"){
				clearTimeout(callTimer);
			}else	{
				if( callTimer != null){
					clearTimeout(callTimer);
				}
				btnShow();
			}

			callTimer = setTimeout(objHide, callDelay);
		}
		
		function btnShow(){
			objBtn.animate({"margin-right": '0px'}, "fast");
		}

		function objHide(){
			objBtn.animate({"margin-right": btnMg+'px'}, "fast");
		}

		init();
	};

	$.fn.touchStart();
});