
jQuery.fn.swipelist = function(){
	var $layerWrap = $(".layerwraps", this);
	var $layer = $(".layer", this);
	var $paginfWrap = $(".pagingWrap", this);
	var $pages = $(".page", this);
	var $prev = $(".prev", this);
	var $next = $(".next", this);

	var startX, startLeft;
	var doing = false;
	var draging = false;
	var oldActive = 1; 
	var gap;
	var limitPlus, limitMinus;

	init();

	function init(){
		$layerWrap.append( $layer.eq(0).clone(true) );
		$layerWrap.prepend( $layer.eq($layer.length-1).clone(true) );

		$layer = $(".layer", $layerWrap);
		$layer.css({ width : $layerWrap.parent().width(),"float":"left" });
		
		$layerWrap.css({ position : "relative", left : oldActive * -$layer.eq(0).innerWidth() + "px",width: "9999px" });
		currentTab( oldActive );

		$layerWrap.bind("mousedown touchstart", onStart );
		$pages.bind("click", onTabClick );
		$prev.bind("click", onPrev );
		$next.bind("click", onNext );
		
	}
	
	function onTabClick(){
		oldActive = $pages.index( this ) + 1;
		goTo( oldActive );
		return false;
	}
	
	function onPrev(){ goTo( --oldActive); return false; }
	function onNext(){ goTo( ++oldActive);  return false; }
	
	function onResize(){
		if($layerWrap.parent().width()>10){
			$layer.css({ width : $layerWrap.parent().width() });
			$layerWrap.css({ left : oldActive * -$layer.eq(0).innerWidth() + "px" });
		}else{
			$layer.css({ width : $layerWrap.parent().parent().width() });
			$layerWrap.css({ left : oldActive * -$layer.eq(0).innerWidth() + "px" });
		}
	}
	
	function onStart(e){
				event.stopImmediatePropagation();
		draging = false;
		if( !doing ){
			if( e.type == "mousedown" ) e.preventDefault();
			if( e.originalEvent.touches && e.originalEvent.touches.length > 1 ){
				goTo( oldActive );
				$(document).unbind("mousemove touchmove", onMove ).unbind("mouseup touchend", onEnd );
			}

			startX = (e.originalEvent.touches) ? e.originalEvent.touches[0].pageX : e.pageX;
			startLeft = parseFloat( $layerWrap.css("left") );

			var limit = 30;
			limitPlus = +limit;
			limitMinus = -limit;

			$(document).bind("mousemove touchmove", onMove ).bind("mouseup touchend", onEnd );
		}
	}
	
	function onMove(e){
				event.stopImmediatePropagation();
		if( e.type == "mousemove" ) e.preventDefault();

		var pageX = (e.originalEvent.touches) ? e.originalEvent.touches[0].pageX : e.pageX;
		gap = pageX - startX;
		
		if( Math.abs(gap) > 10 ) draging = true;
		if( draging ){
			$layerWrap.css({ left : startLeft + gap + "px" });
			e.preventDefault();
		}
	}
	
	function onEnd(e){
				event.stopImmediatePropagation();
		if( draging ){
			
			$(e.target).bind("click.dragingSkip", function(e){ 
					
						e.preventDefault();	
					$(this).unbind(".dragingSkip");

				 return true;;
			});
		}

		
		draging = false;
		doing=false;

		
		if( gap < limitMinus ) goTo( ++oldActive );
		else if( gap > limitPlus ) goTo( --oldActive );
		else goTo( oldActive );

		$(document).unbind("mousemove touchmove", onMove ).unbind("mouseup touchend", onEnd );
		$(this).unbind(".dragingSkip");
	}

	
	function goTo(n){
		
		if(doing==true) return;
		doing = true;
		
		
		$layerWrap.animate({ left : n * -$layer.eq(0).innerWidth() }, "fast", function(){
			if( oldActive <= 0 ) {
				oldActive = $layer.length-2;
				$layerWrap.css({ left : oldActive * -$layer.eq(0).innerWidth() });
	
			}else if( oldActive >= $layer.length -1 ){
				oldActive = 1;
				$layerWrap.css({ left : oldActive * -$layer.eq(0).innerWidth() });
			}
			startX = startLeft = gap = false;
			limitPlus = limitMinus = false;
			
			
			draging = false;
			doing = false;


			currentTab( oldActive );
			
		});
		
	}

	function currentTab(index){

		var n;
		if( index == 0 ){
			n = $layer.length - 2;
		}else if( index == $layer.length - 1 ){
			n = 0;
		}else{
			n = index - 1;
		}
		var oldNum = $paginfWrap.data( "current" );
		$pages.removeClass("paging_on").addClass("paging_off")
		$pages.eq( n ).addClass("paging_on").removeClass("paging_off");
		$paginfWrap.data( "current", n );
	}
};


$.extend({

    getP: function(name) {
		 var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++) {
			try{
            hash = hashes[i].split('=');
			if(hash[0]==name){

					if(hash[1].substr(hash[1].length-1)=="#"){
					return hash[1].substr(0,hash[1].length-1);
				}else{
					return hash[1];
				}
			}
			}catch(e){}
        }
    }
});


function go(url) {
    window.location.href = domain + url;
}

function dateformat(val){
	var a = val;
	a=val.substr(0,16);
	return a;
}

flipPageprebind = false;

jQuery.fn.flipPage = function(n,p,t){
	doing = false;
	draging = false;
	prevFlip = p;
	nextFlip = n;
	target=window;
	if(t!=null){
		target = t;
	}
	init();

	function init(){
		$(this).bind("mousedown touchstart", onStart );
	}

	function onStart(e){
		
		draging = false;
		if( !doing ){
			if( e.type == "mousedown" ) e.preventDefault();

			startX = (e.originalEvent.touches) ? e.originalEvent.touches[0].pageX : e.pageX;
			startY = (e.originalEvent.touches) ? e.originalEvent.touches[0].clientY : e.clientY;

			limit = 50;
			limitPlus = +limit;
			limitMinus = -limit;
			

			$(document).bind("mousemove touchmove", onMove ).bind("mouseup touchend", onEnd );
		}
	}
	
	function onMove(e){
		if( e.type == "mousemove" ) e.preventDefault();

		var pageX = (e.originalEvent.touches) ? e.originalEvent.touches[0].pageX : e.pageX;
		var pageY = (e.originalEvent.touches) ? e.originalEvent.touches[0].clientY : e.clientY;
		gap = pageX - startX;
		gapY = pageY - startY;
		
		if( Math.abs(gap) > 10 && Math.abs(gap) > Math.abs(gapY)  ) draging = true;
		if( draging ){
			e.preventDefault();
		}
	}
	
	function onEnd(e){
		if( draging ){
			
			$(e.target).bind("click.dragingSkip", function(e){ 
					
						e.preventDefault();	
					$(this).unbind(".dragingSkip");

				 return true;;
			});

			if(Math.abs(gap) >Math.abs(gapY) && Math.abs(gap)>limit && (Math.abs(gap)*2/Math.abs(gapY))>1){
				e.preventDefault();	
				if( gap < limitMinus ) target.location.href= prevFlip;
				else if( gap > limitPlus ) target.location.href=nextFlip;
			}
		}

		draging = false;
		doing=false;
		
		
		$(document).unbind("mousemove touchmove", onMove ).unbind("mouseup touchend", onEnd );
		$(this).unbind(".dragingSkip");
	}

};