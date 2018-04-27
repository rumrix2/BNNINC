function swf_writeln(src,width,height,Vars)
{
document.write("<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0' width='"+width+"' height='"+height+"' align='middle'>");
document.write("<param name='allowScriptAccess' value='sameDomain' />");
document.write("<param name='movie' value='"+src+"' />");
document.write("<param name='quality' value='high' />");
document.write("<param name='wmode' value='transparent' />");
document.write("<param name='flashVars' value='v=1"+Vars+"' />");
document.write("<embed src='"+src+"' quality='high' wmode='transparent' width='"+width+"' height='"+height+"' align='middle' allowScriptAccess='sameDomain' type='application/x-shockwave-flash' pluginspage='http://www.macromedia.com/go/getflashplayer' />");
document.write("</object>");
}