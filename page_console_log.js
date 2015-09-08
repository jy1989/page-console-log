/* ===========================================================
 * page_console_log.js
 * ===========================================================
 * https://github.com/jy1989/page-console-log
 * ========================================================== */
;
(function () {

  
        var iDiv = document.createElement('div');
        iDiv.id = 'page-console-log';
        iDiv.style.border = '3px solid #aaa';
        iDiv.style.padding = '10px';
        iDiv.style.margin = '5px';
        iDiv.style.height = '100px';
        //iDiv.style.width = '98%';
        iDiv.style.overflowY = 'scroll';
        iDiv.style.background = '#fff';
        var html = document.getElementsByTagName('html')[0];
        html.insertBefore(iDiv, html.childNodes[0]);
        
        
        var oldLog = console.log;
        var oldDebug = console.debug;
        var oldInfo = console.info;
        var oldWarn = console.warn;
        var oldError = console.error;
        
        console.log =   function(){
        	var combinedArray = [oldLog,'log'].concat(Array.prototype.slice.call(arguments));
        	hijack.apply(this,combinedArray);
        };
  
        console.debug =  function(){
        	var combinedArray = [oldDebug,'debug'].concat(Array.prototype.slice.call(arguments));
        	hijack.apply(this,combinedArray);
        };
      
        console.info =  function(){
        	var combinedArray = [oldInfo,'info'].concat(Array.prototype.slice.call(arguments));
        	hijack.apply(this,combinedArray);
        };
       
        console.warn =  function(){
        	var combinedArray = [oldWarn,'warn'].concat(Array.prototype.slice.call(arguments));
        	hijack.apply(this,combinedArray);
        };
        
        console.error =  function(){
        	var combinedArray = [oldError,'error'].concat(Array.prototype.slice.call(arguments));
        	hijack.apply(this,combinedArray);
        };
     
       /* 
      function combineArray(old,type){
      		var combinedArray = [old,type].concat(Array.prototype.slice.call(arguments));
        	hijack.apply(this,combinedArray);
      }*/
    
    function hijack(){
    	 var args = '';
            for (var i = 2; i < arguments.length; i++) {
            	var r='';
            	try {
            		r=JSON.stringify(arguments[i]);
            	}catch(ex){
            		r=ex;
            	}
                args += '<div style="padding-left:10px;margin:5px;">'+r+'</div>' ;
            }
           //location.pathname.substring(1)＋ 
            var p = '<div style="color:red;">console.'+arguments[1]+':</div>' ;
            iDiv.innerHTML ='<div>' + p + args + '' + '</div>' + iDiv.innerHTML;
           // console.log(arguments[0]);
    	 arguments[0].apply(console, arguments);
    	 //iDiv.innerHTML =arguments[1];
    }
    
    
})();