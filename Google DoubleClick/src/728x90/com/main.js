//IIFE TO EXTRACT DIMENSION DATA
var dimensions = (function(){
        var str = document.querySelectorAll("[name='ad.size']")[0].getAttributeNode("content").value;
        var widthMatch = /width\=(\d+)/.exec(str);
        var heightMatch = /height\=(\d+)/.exec(str);
        return {
            width: parseInt(widthMatch[1]),
            height: parseInt(heightMatch[1])
        }
})();

var tl;
var stopWatch;

//INITIALIZE
function init(){
    IDsToVars();

    container.style.width = dimensions.width + 'px';
    container.style.height = dimensions.height + 'px';
    
    //set timeline
    tl = new TimelineLite();

    addListeners();
    animate();
    

}

function addListeners(){
    //replay functionality
    /*
    replay_button.addEventListener('mouseover',function(){
        TweenLite.fromTo(replay_button, .5, {rotation:'-360'}, {overwrite:false, rotation:'0'});
    })
    replay_button.addEventListener('click',function(){
            tl.restart();
    })
    */
//    stopWatch=new Date().getTime(); 


    // container.addEventListener('mouseover',function(){
    //     TweenLite
    //         .fromTo(sheen1,.3,{x:-50,ease:Quad.easeOut},{x:100,ease:Quad.easeIn,delay:0.4})
    // })
    // container.addEventListener('mouseover',function(){
    //     TweenLite
    //         .fromTo(sheen2,.8,{x:-75,ease:Quad.easeOut},{x:100,ease:Quad.easeIn,delay:0.3})
    // })
    // container.addEventListener('mouseover',function(){
    //     TweenLite
    //         .fromTo(cta_arrow_2x,.5,{x:0},{x:4})
    // })  

    // container.addEventListener('mouseover',function(){
    //     TweenLite
    //         .to(cta_arrow_2x,.33,{x:0,delay:0.5})
    // })
   
}

//ANIMATE
function animate(){
    stopWatch=new Date().getTime(); 

    // const all = [copy0_2x,copy1_2x,copy2_2x,copy3_2x,copy4_2x,cta_arrow_2x,cta_2x,logo_2x]
    tl
    // .to(all,.001,{opacity:1})
    // .to(default1,.5,{opacity:0})
    .from(copy0_2x,1,{ease:Quart.easeOut,opacity:0,y:10},"+=1.3")
    .from(copy1_2x,1,{ease:Quart.easeOut,opacity:0,y:10},"-=.4")
    .from(copy2_2x,1,{ease:Quart.easeOut,opacity:0,y:-10},"-=.4")

    .from(copy3_2x,1,{ease:Quart.easeOut,opacity:0,y:10},"-=.4")


    // .staggerFrom([copy1_2x],.7,{ease:Cubic.easeOut,opacity:0,y:-20},.5,"+=.2")

    .from(cta_2x,.5,{opacity:0,x:5},"+=.2")
    .fromTo(cta_arrow_2x,.5,{opacity:0,x:0},{opacity:1,x:4})
    .to(cta_arrow_2x,.33,{x:0})

    // .fromTo(sheen1,.3,{x:-50,ease:Quad.easeOut},{x:100,ease:Quad.easeIn},"sh+=1.6")
    // .fromTo(sheen2,.8,{x:-75,ease:Quad.easeOut},{x:100,ease:Quad.easeIn},"sh+=1.6")
    // .fromTo(sheen3,.3,{x:-50,ease:Quad.easeOut},{x:130,ease:Quad.easeIn},"sh+=2.2")
    // .to([sheen1,sheen2,sheen3],.1,{opacity:0})



    // .add('f2')
    // .add(bgAnim,'f2')

    // // bg 
    // .to(bg_2x, 11, {rotation: 9, transformOrigin: "center", ease: "none", repeat: 100},0.2)
    // .from(bg_2x, .4, {scale:2, x: -130, ease:Quad.easeIn},.4)
    // .from(bg_2x, .4, {scale:2, x: -130, ease:Quad.easeIn},.4)
    // .to(bg_2x, .5, {scale:1},.5)



    .call(returnTimer)
}

function returnTimer(){
    stopWatch=((new Date().getTime())-stopWatch)*.001;
    console.log(typeof stopWatch)
    console.log(stopWatch+" seconds");
}

// RM FXNS
function myFunction() {
  Enabler.exit('BackgroundExit');
}

function exitClickHandler() {
  Enabler.exit('BackgroundExit');
}
function clickThrough(){
    window.open(clicktag);
}

//SET IDs IN DOM TO GLOBAL VARIABLES
function IDsToVars(){
    var allElements = document.getElementsByTagName("*");
    
    for (var q = 0; q<allElements.length; q++){
         var el = allElements[q];
         if (el.id){
            window[el.id]=document.getElementById(el.id);
        }
    }
};