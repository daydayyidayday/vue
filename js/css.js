// JavaScript Document
window.onload=function(){
	var goundlist = document.getElementById("groundList");
	var ground = document.getElementById("ground");
	var mytao = document.getElementById("mytao");
	var myTao = document.getElementById("myTao");
	var shopcar= document.getElementById("shopcar");
	var shopCar= document.getElementById("shopCar");
	var collections= document.getElementById("collections");
	var collection= document.getElementById("collection");
	var secenter= document.getElementById("secenter");
	var seCenter= document.getElementById("seCenter");
	var callcall= document.getElementById("callcall");
	var callCall=document.getElementById("callCall");
	var webnav=document.getElementById("webnav");
	var webNav=document.getElementById("webNav");
	
	
	
	show( webnav,webNav);
	show(callcall,callCall);
	show(shopcar,shopCar);
	show(collections,collection);
	show(secenter,seCenter);
	show(ground,goundlist);
	show(mytao,myTao);
	
	function show(obj,a){
		obj.onmouseenter=function(){
		a.style.display="block";
	},
	obj.onmouseleave=function(){
		a.style.display="none";}
	}
	 var container = document.getElementById('container');
            var list = document.getElementById('list');
            var buttons = document.getElementById('buttons').getElementsByTagName('span');
            var prev = document.getElementById('prev');
            var next = document.getElementById('next');
            var index = 1;
            var len = 5;
            var animated = false;
            var interval = 3000;
            var timer;


            function animate (offset) {
                if (offset == 0) {
                    return;
                }
                animated = true;
                var time = 300;
                var inteval = 10;
                var speed = offset/(time/inteval);
                var left = parseInt(list.style.left) + offset;

                var go = function (){
                    if ( (speed > 0 && parseInt(list.style.left) < left) || (speed < 0 && parseInt(list.style.left) > left)) {
                        list.style.left = parseInt(list.style.left) + speed + 'px';
                        setTimeout(go, inteval);
                    }
                    else {
                        list.style.left = left + 'px';
                        if(left>-200){
                            list.style.left = -520 * len + 'px';
                        }
                        if(left<(-520 * len)) {
                            list.style.left = '-520px';
                        }
                        animated = false;
                    }
                }
                go();
            }

            function showButton() {
                for (var i = 0; i < buttons.length ; i++) {
                    if( buttons[i].className == 'on'){
                        buttons[i].className = '';
                        break;
                    }
                }
                buttons[index - 1].className = 'on';
            }

            function play() {
                timer = setTimeout(function () {
                    next.onclick();
                    play();
                }, interval);
            }
            function stop() {
                clearTimeout(timer);
            }

            next.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 5) {
                    index = 1;
                }
                else {
                    index += 1;
                }
                animate(-520);
                showButton();
            }
            prev.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 1) {
                    index = 5;
                }
                else {
                    index -= 1;
                }
                animate(520);
                showButton();
            }

            for (var i = 0; i < buttons.length; i++) {
                buttons[i].onclick = function () {
                    if (animated) {
                        return;
                    }
                    if(this.className == 'on') {
                        return;
                    }
                    var myIndex = parseInt(this.getAttribute('index'));
                    var offset = -520 * (myIndex - index);

                    animate(offset);
                    index = myIndex;
                    showButton();
                }
            }

            container.onmouseover = stop;
            container.onmouseout = play;

            play();

}