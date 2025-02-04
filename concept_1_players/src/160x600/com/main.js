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

    // Helper function for FOUC
    let domReady = (cb) => {
        document.readyState === 'interactive' || document.readyState === 'complete'
        ? cb()
        : document.addEventListener('DOMContentLoaded', cb);
    };
    
    domReady(() => {
        // Display body when DOM is loaded
        document.body.style.visibility = 'visible';
    });

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
    //     // Mouseover functionality for container
    //     container.addEventListener('mouseover', function() {
    //     TweenLite.to(cta_2x, 0.3, {x:4, ease:Power2.easeOut});
    // });

    // container.addEventListener('mouseout', function() {
    //     TweenLite.to(cta_2x, 0.3, {x:0,});
    // });
}

//ANIMATE
function animate(){
    stopWatch=new Date().getTime(); 

    //timeline animation here
    tl = new TimelineLite()
    // tl = new TimelineLite({repeat: -1, repeatDelay: 1}); // Repeat infinitely with a 1-second delay between repetitions
    let start = 0.7
    tl 
    // .from(bg_2x, 6.5, {scale:1.4,x:-40, y:-80,ease:Power2.easeOut}, 0)
    .from(bg_2x, 6.5, {scale:1.3,x:-20, y:-40,ease:Power2.easeOut}, 0)

    .to(left_tri, 2, {y:-dimensions.height, ease: Power2.easeInOut}, 0)
    .to(right_tri, 2, {y:dimensions.height, ease: Power2.easeInOut}, 0)

    // copy & logo
    .from([c1_2x,c1a_2x], 1.3, {opacity:0,ease: Power2.easeInOut}, start)

    // slow shine over "vision"
    .fromTo(sheen1,2,{x:-85,ease:Quad.easeOut},{x:85,ease:Quad.easeIn},start+.2) //copy & logo+.2

    // copy & logo cont.
    .from([c2_2x,c2a_2x], 1.3, {opacity:0,ease: Power2.easeInOut},start+1.7)//copy & logo+1.7
    .from(logo_2x, 1.5, {opacity:0,ease: Power4.easeIn},start+1.7)

    // slow shine over "grit"
    .fromTo(sheen2,2,{x:-85,ease:Quad.easeOut},{x:85,ease:Quad.easeIn},start+1.7) 

    .from(c3_2x, 1.3, {opacity:0,ease: Power2.easeInOut},start+2.1) //copy & logo+2.1
    .from(cta_2x, 1.3, {opacity:0,ease: Power2.easeInOut},start+3.7) //copy & logo+3.7



    //.call(returnTimer)
}

function returnTimer(){
    stopWatch=((new Date().getTime())-stopWatch)*.001;
    console.log(stopWatch+" seconds");
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