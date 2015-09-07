/* ===========================================================
 * page_console_log.js
 * ===========================================================
 * https://github.com/jy1989/page-console-log
 * ========================================================== */
;
(function () {

    try {
        var iDiv = document.createElement('div');
        iDiv.id = 'page-console-log';
        iDiv.style.border = '3px solid #aaa';
        iDiv.style.padding = '10px';
        iDiv.style.margin = '5px';
        iDiv.style.height = '100px';
        //iDiv.style.width = '98%';
        iDiv.style.overflowY = 'scroll';
        iDiv.style.background = '#fff';
        var oldLog = console.log;
        console.log = function () {
            var args = '';
            for (var i = 0; i < arguments.length; i++) {
            	var r='';
            	try {
            		r=JSON.stringify(arguments[i]);
            	}catch(ex){
            		r=ex;
            	}
                args += '<div style="padding-left:10px;margin:5px;">'+r+'</div>' ;
            }
           //location.pathname.substring(1)＋ 
            var p = '<div style="color:red;">console.log:</div>' ;
            iDiv.innerHTML ='<div>' + p + args + '' + '</div>' + iDiv.innerHTML;
            oldLog.apply(console, arguments);
        };
        var html = document.getElementsByTagName('html')[0];
        html.insertBefore(iDiv, html.childNodes[0]);
       // iDiv.insertBefore(location.pathname.substring(1), iDiv.childNodes[0]);
    } catch (e) {
        alert(e);
    }
    
    
    
    
    
    
})();