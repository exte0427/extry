let x;
let y;
let  sssy=70;
let codes=0;
let xs=[];
let ys=[];
let is=[];
let ji=[];
let sosso=[];
let myhtmls=[];
let iiiii=0;
async function sdasdasdadsad(myclass,sososososososos){
  let sadadasf;
  let sadadasfsadadasf;
  let myx;
  let myy;
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
        $(thiss).css("z-index",0);
        $("#newblock").remove();
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
            if(sososososososos!=1 && sosso[ist]!=2){
              $(thiss).css("top",ys[ist]+32);
              $(thiss).css("left",xs[ist]);
              is[ist]=myclass;
            }
          }
          else{
            if(sososososososos!=2  && sosso[ist]!=1){
              $(thiss).css("top",ys[ist]-32);
              $(thiss).css("left",xs[ist]);
              is[myclass]=ist;
            }
          }
        }
        dodo(is[myclass],$(thiss).css("left").replace("px","")*1,$(thiss).css("top").replace("px","")*1);
        myx=$(thiss).css("left").replace("px","")*1;
        myy=$(thiss).css("top").replace("px","")*1;
        illll=-1;
        xs[myclass]=myx;
        ys[myclass]=myy;
        if(myx<250){
          xs[myclass]=50000;
          ys[myclass]=50000;
          $(thiss).css("left",50000);
          $(thiss).css("top",50000);
        }
        dodoend(is[myclass]);
      }
    });
    $(thiss).css("z-index",1);
    myx=$(thiss).css("left").replace("px","")*1;
    myy=$(thiss).css("top").replace("px","")*1;
    $(thiss).css("left",x+firstX);
    $(thiss).css("top",y+firstY);
    $(thiss).css("opacity","0.7");
    dodo(is[myclass],$(thiss).css("left").replace("px","")*1,$(thiss).css("top").replace("px","")*1);

    sadadasf=9999;
    sadadasfsadadasf=-1;
    for(let i=0;i<xs.length;i++){
      if(xs[i]-50<myx && myx<xs[i]+50 && i!=myclass){
        if(ys[i]-50<myy && myy<ys[i]+50 && i!=myclass && sadadasf>plus(ys[i],myy) && i!=is[myclass]){
          sadadasf=plus(ys[i],myy);
          sadadasfsadadasf=i;
        }
      }
    }
    $(".dfgsdfgsdgfsdgfsdgfsdg").each(function(){
      $(this).remove();
    });
    if(sadadasfsadadasf!=-1){
      let j=-1;
      if(myy<ys[sadadasfsadadasf] && sososososososos!=2 && sosso[sadadasfsadadasf]!=1){j=0;}
      else if(sososososososos!=1 && sosso[sadadasfsadadasf]!=2 && myy>ys[sadadasfsadadasf]){j=1;}
      newblocks(myhtmls[myclass],xs[sadadasfsadadasf],ys[sadadasfsadadasf],j,myclass);
    }
  },1);

}
$(document).ready(function(){
  $(document).mousemove(function(event){
	  x=event.pageX;
    y=event.pageY;
  });
});
function newblocks(myclass,x,y,f,mc){
  if(f==-1){return;}
  let xxx=0;
  if(f==0){xxx=-32;}
  if(f==1){xxx=32;}
  $("body").append(myclass.replace("ffffffffffffffffdddddddddddddddddddddf",y+xxx).replace("ffffffffffffffffdddddddsddddddddddddddf",x));
  dodonewblocks(is[mc],x,y+xxx);
}
function dodonewblocks(mcs,x,y){
  if(mcs==-1){return;}
  let xxx=32;
  $("body").append(myhtmls[mcs].replace("ffffffffffffffffdddddddddddddddddddddf",y+xxx).replace("ffffffffffffffffdddddddsddddddddddddddf",x));
  dodonewblocks(is[mcs],x,y+xxx);
}
function makecode(iss,html,x,y,color,tocolor){
  html=ji[html];
  $("body").append(`<div id="block" style="top: ${y}px;left: ${x}px;border: 1px solid ${tocolor};width: intrinsic;opacity:1;z-index: 0;background-color: ${color};" onmousedown="sdasdasdadsad(${codes},${iss});" class="${codes}">
    <div style="height:3px;"></div>
    <div style="height: 22px;color:white;">
    <div style="display:inline-block;width:4px;"></div>
    ${html}
    <div style="display:inline-block;width:4px;"></div>
  </div>
  </div>`);
  sosso.push(iss);
  sdasdasdadsad(codes,iss);
  xs.push(0);
  ys.push(0);
  is.push(-1);
  myhtmls.push(`<div id="newblock" style="top: ffffffffffffffffdddddddddddddddddddddfpx;left: ffffffffffffffffdddddddsddddddddddddddfpx;border: 1px solid ${tocolor};width: intrinsic;opacity:0.3;z-index: 0;background-color: ${color};" class="dfgsdfgsdgfsdgfsdgfsdg">
    <div style="height:3px;"></div>
    <div style="height: 22px;color:white;">
    <div style="display:inline-block;width:4px;"></div>
    ${html}
    <div style="display:inline-block;width:4px;"></div>
  </div>
  </div>`);
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
  $(thisd).css("opacity","0.7");
  $(thisd).css("top",y+32);
  $(thisd).css("left",x);
  ys[myc]=y+32;
  xs[myc]=x;
  dodo(is[myc],x,y+32);
}
function dodoend(myc){
  if(myc==-1){return 0;}
  let thisd="."+myc;
  if(xs[myc]<250){
    xs[myc]=50000;
    ys[myc]=50000;
    $(thisd).css("left",50000);
    $(thisd).css("top",50000);
  }
  $(thisd).css("opacity","1");
  dodoend(is[myc]);
}
function codegen(is,html,color,tocolor){
  if(color==undefined){color="#4d97ff";}
  if(tocolor==undefined){tocolor="#4682d6"}
  $("body").append(`<div id="block" style="top: ${sssy}px;border: 1px solid ${tocolor};left: 82px;width: intrinsic;opacity:1;z-index: 0;background-color: ${color};" onmousedown="makecode(${is},${iiiii},82,${sssy},'${color}','${tocolor}');">
    <div style="height:3px;"></div>
    <div style="height: 22px;color:white;">
    <div style="display:inline-block;width:4px;"></div>
    ${html}
    <div style="display:inline-block;width:4px;"></div>
  </div>
  </div>`);
  sssy+=40;
  ji.push(html);
  iiiii++;
}

//makecodes
codegen(1,`if start`,"#4BBD57","#279B33");
codegen(2,`return`,"#4BBD57","#279B33");
codegen(0,`<text>log</text><div style="display:inline-block;width:2px;"></div><input type="text" style="border-radius:5px;border: 1px solid #4682d6;height : 20px;padding: 1px 4px 1px 4px;" value="출력하기"></input>`);
