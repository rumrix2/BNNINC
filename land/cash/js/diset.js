$.ajaxSetup({
    cache: false

});
String.prototype.trim = function() {     return this.replace(/(^\s*)|(\s*$)/gi, ""); } 
$.wajax = function(option) {

    option.error = function(data) {
         alert("서버오류."+data.status+":"+$(data.responseText).text());
    }

    option.success = function(data) {
        var msg = getErrorMsg(data);
        if (msg != "") {
            alert(msg);
        } else {
           this.ok(data);
        }
    }

    if (option.ok == null) {
        option.ok = function(data) {
            alert("정상처리 되었으나.프로그램 연결에 문제가 있습니다."+$(data).text());
        }
    }


    $.ajax(option);
}

$.extend({
    getP: function(name) {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            try {
                hash = hashes[i].split('=');
                if (hash[0] == name) {

                    if (hash[1].substr(hash[1].length - 1) == "#") {
                        return hash[1].substr(0, hash[1].length - 1);
                    } else {
                        return hash[1];
                    }
                }
            } catch (e) {
            }
        }
    }
});
function wmap(d, ele) {
    var tmpe = $("<div></div>");
    try {
        $("[wbind]", ele).each(function() {
            var wattr = $(this).attr("wbind");
            var swattr = wattr.split(',');
            for (i = 0; i < swattr.length; i++) {
                tmpe.text("");
                try {
                    var attr = swattr[i];
                    var kv = attr.split(":");
                    var k = kv[0];
                    var v = kv[1];
                    
                    
                    var val = eval("d." + v);
                    var func = eval(kv[2]);
                    if (func) {

                        val = func(val,$(this),d);
                    }

                    if (k == "val") {
                        tmpe.html(val);
                        $(this).text(tmpe.text());
                    } else if (k == "rawval") {
                        tmpe.html(val);
                        $(this).html(tmpe.html());
                    }else {
                        $(this).attr(k, val);
                    }
                } catch (e) {
					alert("test1");
                }
            }


        });
    } catch (e) {
		alert("test2");
    }

}

function getErrorMsg(data) {
    if (data.HEAD.MSG) {
        return data.HEAD.MSG;
    } else {
        return ""
    }
}
