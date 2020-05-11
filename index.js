let x;
let y;
let  sssy=70;
let codes=0;
let xs=[];
let ys=[];
let is=[];
async function sdasdasdadsad(myclass){
  let illll=0;
  let thisd="."+myclass;
  let firstX=(x*(-1))+($(thisd).css("left").replace("px","")*1);
  let firstY=(y*(-1))+($(thisd).css("top").replace("px","")*1);
  let thiss=thisd;
  const repeat=await setInterval(function() {
    $(thisd).mouseup(function(){
      let thisxy=[];
      let thisi=[];
      let myx=$(thiss).css("left").replace("px","")*1;
      let myy=$(thiss).css("top").replace("px","")*1;
      $(thiss).css("opacity","1");
      clearInterval(repeat);
      if(illll==0){illll=1;}
      if(illll==1){
        for(let i=0;i<xs.length;i++){
          if(xs[i]-50<myx && myx<xs[i]+50 && i!=myclass){
            if(ys[i]-50<myy && myy<ys[i]+50 && i!=myclass){
              thisxy.push(plus(ys[i],myy));
              thisi.push(i);
            }
          }
        }
        let ist=-1;
        let isist=9999;
        for(let i=0;i<thisxy.length;i++){
          if(thisxy[i]<isist && thisi[i]!=is[myclass]){
            ist=thisi[i];
            isist=thisxy[i];
          }
        }
        myx=$(thiss).css("left").replace("px","")*1;
        myy=$(thiss).css("top").replace("px","")*1;
        for(let i=0;i<is.length;i++){
          if(is[i]==myclass){is[i]=-1;}
        }
        if(ist!=-1){
          if(ys[ist]<myy){
            $(thiss).css("top",ys[ist]+32);
            $(thiss).css("left",xs[ist]);
            is[ist]=myclass;
          }
          else{
            $(thiss).css("top",ys[ist]-32);
            $(thiss).css("left",xs[ist]);
            is[myclass]=ist;
          }
        }
        dodo(is[myclass],$(thiss).css("left").replace("px","")*1,$(thiss).css("top").replace("px","")*1);
        myx=$(thiss).css("left").replace("px","")*1;
        myy=$(thiss).css("top").replace("px","")*1;
        illll=-1;
        xs[myclass]=myx;
        ys[myclass]=myy;
      }
    });
    $(thiss).css("left",x+firstX);
    $(thiss).css("top",y+firstY);
    $(thiss).css("opacity","0.7");
    dodo(is[myclass],$(thiss).css("left").replace("px","")*1,$(thiss).css("top").replace("px","")*1);
  },1);
}
$(document).ready(function(){
  $(document).mousemove(function(event){
	  x=event.pageX;
    y=event.pageY;
  });
});
function makecode(html,x,y){
  $("body").append(`<div id="block" style="top: ${y}px;left: ${x}px;width: intrinsic;opacity:1;z-index: 0;" onmousedown="sdasdasdadsad(${codes});" class="${codes}">
    <div style="height:3px;"></div>
    <div style="height: 22px;color:white;">
    <div style="display:inline-block;width:4px;"></div>
    ${html}
    <div style="display:inline-block;width:4px;"></div>
  </div>
  </div>`);
  sdasdasdadsad(codes);
  xs.push(0);
  ys.push(0);
  is.push(-1);
  codes++;
}
function plus(a,b){
  let x;
  x=Math.abs(a-b)
  return x;
}
function dodo(myc,x,y){
  if(myc==-1){return 0;}
  let thisd="."+myc;
  $(thisd).css("top",y+32);
  $(thisd).css("left",x);
  ys[myc]=y+32;
  xs[myc]=x;
  dodo(is[myc],x,y+32);
}
function codegen(html){
  $("body").append(`<div id="block" style="top: ${sssy}px;left: 82px;width: intrinsic;opacity:1;z-index: 0;" onmousedown="makecode(`+"`"+html+"`"+`,82,${sssy});">
    <div style="height:3px;"></div>
    <div style="height: 22px;color:white;">
    <div style="display:inline-block;width:4px;"></div>
    ${html}
    <div style="display:inline-block;width:4px;"></div>
  </div>
  </div>`);
  sssy+=40;
}
