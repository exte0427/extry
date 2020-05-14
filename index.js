let x;
let y;
let  sssy=70;
let codes=0;
let xs=[];
let ys=[];
let is=[];
let ooooo;
let code=[];
let drag=0;
let ji=[];
let sosso=[];
let myhtmls=[];
let iiiii=0;
async function sdasdasdadsad(myclass,sososososososos){
  drag=1;
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
      drag=0;
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
        if(ist!=-1){//is[sadadasfsadadasf]
          if(is[ist]==-1){
            if(ys[ist]>myy && is.indexOf(ist)==-1){
              if(sososososososos!=2  && sosso[ist]!=1){
                $(thiss).css("top",ys[ist]-32);
                $(thiss).css("left",xs[ist]);
                is[myclass]=ist;
              }
            }
            else{
              if(sososososososos!=1 && sosso[ist]!=2){
                $(thiss).css("top",ys[ist]+32);
                $(thiss).css("left",xs[ist]);
                is[ist]=myclass;
              }
            }
          }
          else{
            //+32
            let j=1;
            if(myy<ys[ist] && is.indexOf(ist)==-1){j=0;}
            if(j==1){
              $(thiss).css("top",ys[ist]+32);
              is[endIS(myclass)]=is[ist];
              is[ist]=myclass;
            }
            else{
              $(thiss).css("top",ys[ist]-32);
              is[endIS(myclass)]=is[ist];
              //is[ist]=myclass;
            }
            $(thiss).css("left",xs[ist]);
          }
          saveALL(myclass);
        }
        dodo(is[myclass],$(thiss).css("left").replace("px","")*1,$(thiss).css("top").replace("px","")*1);
        myx=$(thiss).css("left").replace("px","")*1;
        myy=$(thiss).css("top").replace("px","")*1;
        illll=-1;
        xs[myclass]=myx;
        ys[myclass]=myy;
        if(myx<250){
          delet(is[myclass]);
          xs[myclass]=50000;
          ys[myclass]=50000;
          is[myclass]=-1;
          $(thiss).css("left",50000);
          $(thiss).css("top",50000);
        }
        dodoend(is[myclass]);
      }
      $(".dfgsdfgsdgfsdgfsdgfsdg").each(function(){
        $(this).remove();
      });
    });
    $(thiss).css("z-index",1);
    myx=$(thiss).css("left").replace("px","")*1;
    myy=$(thiss).css("top").replace("px","")*1;
    $(thiss).css("left",x+firstX);
    $(thiss).css("top",y+firstY);
    $(thiss).css("opacity","0.7");
    dodo(is[myclass],$(thiss).css("left").replace("px","")*1,$(thiss).css("top").replace("px","")*1);
    is[is.indexOf(myclass)]=-1;
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
    replaced(myclass);
    if(sadadasfsadadasf!=-1){
      if(is[sadadasfsadadasf]==-1){
        let j=-1;
        if(myy<ys[sadadasfsadadasf] && sososososososos!=2 && sosso[sadadasfsadadasf]!=1 && is.indexOf(sadadasfsadadasf)==-1){j=0;}
        else if(sososososososos!=1 && sosso[sadadasfsadadasf]!=2 && myy>ys[sadadasfsadadasf]){j=1;}
        newblocks(myhtmls[myclass],xs[sadadasfsadadasf],ys[sadadasfsadadasf],j,myclass);
      }
      else{
        if(is[sadadasfsadadasf]!=myclass){
          $(`.${is[sadadasfsadadasf]}`).css("top",ys[is[sadadasfsadadasf]]+32+end(myclass));
        }
        let j=1;
        if(myy<ys[sadadasfsadadasf] && is.indexOf(sadadasfsadadasf)==-1){j=0;}
        newblocks(myhtmls[myclass],xs[sadadasfsadadasf],ys[sadadasfsadadasf],j,myclass);
        if(j==0){
          move(is[is[sadadasfsadadasf]],ys[is[sadadasfsadadasf]]-32+end(myclass),myclass);
        }
        else{
          move(is[is[sadadasfsadadasf]],ys[is[sadadasfsadadasf]]+32+end(myclass),myclass);
        }
      }
    }
  },1);

}
$(document).ready(function(){
  $(document).mousemove(function(event){
	  x=event.pageX;
    y=event.pageY;
  });
});
function end(a){
  let y=$(`.`+a).css("top").replace("px","")*1;
  return endY(a,y)-y;
}
function endY(a,b){
  if(a==-1){
    return $(`.`+b).css("top").replace("px","")*1;
  }
  return endY(is[a],a);
}
function endIS(a,b){
  if(a==-1){
    return b;
  }
  return endIS(is[a],a);
}
function saveALL(myclass){
  for(let i=0;i<ys.length;i++){
    if(i!=myclass){
      ys[i]=$(`.${i}`).css("top").replace("px","")*1;
      xs[i]=$(`.${i}`).css("left").replace("px","")*1;
    }
  }
}
function move(a,b,myclass){
  let myclasss=[];
  let nowIS=myclass;
  while(true){
    if(nowIS==-1 || nowIS==undefined){
      break;
    }
    else{
      myclasss.push(nowIS);
      nowIS=is[nowIS];
    }
  }
  if(a==-1){return;}
  if(myclasss.indexOf(a)!=-1){return;}
  $(`.${a}`).css("top",b+32);
  move(is[a],b+32);
}
function replaced(myclass){
  for(let i=0;i<ys.length;i++){
    if(i!=myclass){
      $(`.${i}`).css("top",ys[i]);
      $(`.${i}`).css("left",xs[i]);
    }
  }
}
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
function makecode(evals,eva,iss,html,x,y,color,tocolor){
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
  code.push(eva);
  myhtmls.push(`<div id="newblock" style="top: ffffffffffffffffdddddddddddddddddddddfpx;left: ffffffffffffffffdddddddsddddddddddddddfpx;border: 1px solid ${tocolor};filter: grayscale(100%);width: intrinsic;opacity:0.2;z-index: 0;background-color: ${color};" class="dfgsdfgsdgfsdgfsdgfsdg">
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
  $(thisd).css("z-index",1);
  $(thisd).css("top",y+32);
  if(x!="no"){
    $(thisd).css("left",x);
    xs[myc]=x;
  }
  ys[myc]=y+32;
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
  $(thisd).css("z-index",0);
  $(thisd).css("opacity","1");
  dodoend(is[myc]);
}
function codegen(evals,eva,is,html,color,tocolor){
  if(color==undefined){color="#4d97ff";}
  if(tocolor==undefined){tocolor="#4682d6"}
  $("body").append(`<div id="block" style="top: ${sssy}px;border: 1px solid ${tocolor};left: 82px;width: intrinsic;opacity:1;z-index: 0;background-color: ${color};" onmousedown="makecode('${evals}','${eva}',${is},${iiiii},82,${sssy},'${color}','${tocolor}');">
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
function plsrun(i){
  let a=code[i];
  if(a==undefined){return //삭제됨
  }
  a=a.replace("{input}",$(`.${i} > div > input`).val());
  if(is[i]==-1){
    return a+"\n";
  }
  else{
    return a+"\n"+plsrun(is[i]);
  }
}
function run(){
  clear();
  for(let i=0;i<code.length;i++){
    if(code[i]=="event"){
      try{
        eval(plsrun(is[i],""));
      }
      catch(err){
        error(err);
      }
    }
  }
}
function asdfasdf(i,my,ii){
  $(`.${i}`).css("top",ys[i]+32);
  $(`.${my}`).css("top",ys[my]+32);
  ys[i]=ys[i]+32;
  ys[my]=ys[my]+32;
  is[ii]=my;
  is[my]=i;
  dodo(is[i],"no",ys[i]+32)
}
function clear(){
  $("#output").html(``);
}
function error(err){
  $("#output").append(`<div style="display:inline-block;width:10px"></div><strong style="color:#FFD879">ERROR : </strong><text style="color:white;">${err}</text><div/>`);
}
function log(str){
  $("#output").append(`<div style="display:inline-block;width:10px"></div><strong style="color:#FFD879">LOG : </strong><text style="color:white;">${str}</text><div/>`);
}
function delet(myclass){
  if(myclass==-1){return;}
  xs[myclass]=50000;
  ys[myclass]=50000;
  $(`.`+myclass).css("left",50000);
  $(`.`+myclass).css("top",50000);
  delet(is[myclass]);
}
//makecodes
codegen("","event",1,`if start`,"#4BBD57","#279B33");
codegen("","//end",2,`return`,"#4BBD57","#279B33");
codegen("","log(`{input}`);",0,`<text>log</text><div style="display:inline-block;width:8px;"></div><input type="text" style="border-radius:5px;border: 1px solid #4682d6;height : 20px;padding: 1px 4px 1px 4px;" value="출력하기"></input>`);
codegen("while","while(true){",0,`while true`,"#FFBF00","#d8a200");//#FFBF00
codegen("","}",0,`}`,"#FFBF00","#d8a200");//#FFBF00
