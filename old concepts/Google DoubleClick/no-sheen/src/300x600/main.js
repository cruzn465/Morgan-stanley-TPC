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


    container.addEventListener('mouseover',function(){
        TweenLite
            .fromTo(sheen1,.3,{x:-50,ease:Quad.easeOut},{x:100,ease:Quad.easeIn,delay:0.4})
    })
    container.addEventListener('mouseover',function(){
        TweenLite
            .fromTo(sheen2,.8,{x:-75,ease:Quad.easeOut},{x:100,ease:Quad.easeIn,delay:0.3})
    })
    container.addEventListener('mouseover',function(){
        TweenLite
            .fromTo(cta_arrow_2x,.5,{x:0},{x:4})
    })  

    container.addEventListener('mouseover',function(){
        TweenLite
            .to(cta_arrow_2x,.33,{x:0,delay:0.5})
    })
   
}

//ANIMATE
//ANIMATE
function animate(){
    stopWatch=new Date().getTime(); 

    //timeline animation here
    tl = new TimelineLite()
    // tl = new TimelineLite({repeat: -1, repeatDelay: 1}); // Repeat infinitely with a 1-second delay between repetitions
    let start = 0.7
    tl 
    .from(bg_2x, 6.5, {scale:1.63, x:-11, y:-27, ease:Power2.easeOut}, 0)
    .to(left_tri, 2, {x: -dimensions.width, ease: Power2.easeInOut}, 0)
    .to(right_tri, 2, {x: dimensions.width, ease: Power2.easeInOut}, 0)

    // copy & logo
    .from(c1_2x, 1.3, {opacity:0,ease: Power2.easeInOut},start)

    // slow shine over "vision"

    // copy & logo cont.
    .from(c2_2x, 1.3, {opacity:0,ease: Power2.easeInOut},start+1.4) //copy+logo+1.4
    .from(logo_2x, 1.5, {opacity:0,ease: Power4.easeIn},start+1.4)

    .from(c3_2x, 1.3, {opacity:0,ease: Power2.easeInOut},start+1.7) //copy+logo+1.7

    // slow shine over "grit"

    .from(cta_2x, 1.3, {opacity:0,ease: Power2.easeInOut},start+2.7) //copy+logo+2.7

    //.call(returnTimer)
}

function returnTimer(){
    stopWatch=((new Date().getTime())-stopWatch)*.001;
    console.log(typeof stopWatch)
    console.log(stopWatch+" seconds");
}

// function clickThrough(){
//     window.open(clicktag);
// }

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