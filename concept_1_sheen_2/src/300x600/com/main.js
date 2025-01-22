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
}

//ANIMATE
function animate(){
    stopWatch=new Date().getTime(); 

    //timeline animation here
    tl = new TimelineLite()
    // tl = new TimelineLite({repeat: -1, repeatDelay: 1}); // Repeat infinitely with a 1-second delay between repetitions
    
    tl 
    // .from(bg_2x, 6.5, {scale:1.63,x:-11, y:-27,ease:Power2.easeOut}, 0)
    // .to(left_tri, 2, {x: -dimensions.width, ease: Power2.easeInOut}, 0)
    // .to(right_tri, 2, {x: dimensions.width, ease: Power2.easeInOut}, 0)

    // // copy & logo
    // .from([c1_2x,c1a_2x], 1.3, {opacity:0,ease: Power2.easeInOut}, .3)

    // slow shine over "vision"
    .addLabel("f1sheen","+=.25")

    .from(c3_white_container_2,.5,{width:0},'f1sheen')
    .to(c3_reg_container,.5,{width:0,x:dimensions.width,onComplete:function(){
        TweenLite.set(c3_reg_container,{x:0,width:0})
    }},'f1sheen')
    .to(c1a_2x,.5,{x:-dimensions.width,onComplete:function(){
        TweenLite.set(c1a_2x,{x:0})
    }},'f1sheen')
    .to(c3_reg_container,.5,{width:dimensions.width},'f1sheen+=.5')
    .to(c3_white_container_2,.5,{width:0,x:dimensions.width},'f1sheen+=.5')
    .to(c1a_white_2x,.5,{x:-dimensions.width},'f1sheen+=.5')

    // tangiberry example
    // .addLabel("f1tangiberry","+=.25")

    // .from(c3_org_container,1,{width:0},'f1tangiberry')
    // .to(c3_white_container,1,{width:0,x:dimensions.width,onComplete:function(){
    //     TweenLite.set(c3_white_container,{x:0,width:0})
    // }},'f1tangiberry')
    // .to(c3white_2x,1,{x:-dimensions.width,onComplete:function(){
    //     TweenLite.set(c3white_2x,{x:0})
    // }},'f1tangiberry')
    // .to(c3_white_container,1,{width:dimensions.width},'f1tangiberry+=1')
    // .to(c3_org_container,1,{width:0,x:dimensions.width},'f1tangiberry+=1')
    // .to(c3org_2x,1,{x:-dimensions.width},'f1tangiberry+=1')



    // // copy & logo cont.
    // .from(c2_2x, 1.3, {opacity:0,ease: Power2.easeInOut}, 1.7)
    // .from(logo_2x, 1.5, {opacity:0,ease: Power4.easeIn}, 1.7)

    // .from(c3_2x, 1.3, {opacity:0,ease: Power2.easeInOut}, 2)
    // // slow shine over "grit"
    // .from(cta_2x, 1.3, {opacity:0,ease: Power2.easeInOut}, 3)



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