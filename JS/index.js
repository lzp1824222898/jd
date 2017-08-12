// JavaScript Document
var GUIDELEFT=document.getElementsByClassName("guide-left");
var LI=GUIDELEFT[0].getElementsByTagName('li');

var SUBNAV=document.getElementsByClassName('subnav')
for(var i=0;i<LI.length;i++){
    LI[i].num=i;



    LI[i].onmouseenter=function(){
        for(var j=0;j<SUBNAV.length;j++){

            SUBNAV[j].style.display='none';

        }
        for(var x=0;x<LI.length;x++){
            LI[x].className='';
        }

        SUBNAV[this.num].style.display='block'
        this.className='white';


        // SUBNAV[this.num].style.zIndex='1'
        SUBNAV[this.num].onmouseleave=function(){
            for(var j=0;j<SUBNAV.length;j++){
                SUBNAV[j].style.display='none';}
            for(var j=0;j<LI.length;j++){
                LI[j].className="";

            }
        }

    }



}
var IMG=document.getElementById('banner-pic')
var x=3;
var timer;
timer=setInterval(run,1000);
function run(){

    IMG.src="images/banner"+x+".jpg";
    x++;

    if(x==5){x=3};
}

