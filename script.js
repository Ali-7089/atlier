var timeline = gsap.timeline();
var fi = document.querySelector('#fi');
var se = document.querySelector('#se');
var th = document.querySelector('#th');
var fo = document.querySelector('#fo');
var back = document .querySelector('#back');
var back2 = document.querySelector('#back2');
var back3 = document.querySelector('#back3');
var back4 = document.querySelector('#back4');

se.addEventListener('click',function(){
    back2.style.left = '0%';
    back2.style.opacity = 1;
    back3.style.left = '-100%';
    back.style.left = '-100%';
    back4.style.left = '-100%';
    back3.style.opacity = 0;
    back.style.opacity = 0;
    back4.style.opacity = 0;
})

fi.addEventListener('click',function(){
    back.style.left = '0%';
    back.style.opacity = 1;
    back3.style.left = '100%';
    back2.style.left = '-100%';
    back4.style.left = '-100%';
    back4.style.opacity = 0;
    back2.style.opacity = 0;
    back3.style.opacity = 0;
})

th.addEventListener('click',function(){
    back3.style.left = '0%';
    back3.style.opacity = 1;
    back2.style.left = '-100%';
    back4.style.left = '-100%';
    back.style.left = '-100%';
    back2.style.opacity = 0;
    back.style.opacity = 0;
    back4.style.opacity = 0;
})

fo.addEventListener('click',function(){
    back4.style.left = '0%';
    back4.style.opacity = 1;
    back3.style.left = '100%';
    back2.style.left = '-100%';
    back.style.left = '-100%';
    back3.style.opacity = 0;
    back2.style.opacity = 0;
    back.style.opacity = 0;
})



timeline.to('#interior', { duration:2, ease:'expo.inOut', height:4000, width:4000})
.from('#interior h1 ',{ duration:3, ease:'expo.inOut', opacity:0 , y:30, display:'initial'})
.from('#interior h5 ',{ duration:4, ease:'expo.inOut', opacity:0 , y:30, delay: -2 , display: 'initial'})
.to('#interior',{ duration:1, ease:'expo.inOut', opacity:0, delay: -1,  onComplete: function(){
        interior.style.top = 0;
}})
.to('#back' ,{ display:'flex'})
.from('.nav h1',{opacity:0 , x:-25 , duration:2, ease:'expoInOut'})
.from('#links a',{opacity:0 , x:-10 , stagger: .2 , duration:1.5, ease:'expoInOut' , delay:-1})
.from('#faltu',{opacity:0 , y:30 , duration:.5, ease:'expo.easeInOut',})
.from('#what1 h1',{opacity:0 , y:40 , duration:2, ease:'expo.InOut'})
.from('#what1 h5',{opacity:0 , x:-45 , duration:2, ease:'expo.InOut'})
.from('#what3 h1',{opacity:0 , y:40 , duration:2, ease:'expo.InOut'})
.from('#what3 h5',{opacity:0 , x:-30 , duration:2, ease:'expo.easeInOut'})
.from('#connect2 h1',{opacity:0 , y:40 , duration:2, ease:'expo.easeInOut'})
.from('#connect2 h5',{opacity:0 , x:-30 , duration:2, ease:'expo.easeInOut'})








gsap.from('#main h1', {
    scrollTrigger:{
        trigger:'#main',
        // markers: true,
        toggleActions: 'play pause resume reverse',
    },
    y: 50,
    duration: 1,
    opacity:0,
    ease:'expo.easeInOut'
});

gsap.from('#main h5', {
    scrollTrigger:{
        trigger:'#main h5',
        // markers: true,
        toggleActions: 'play pause resume reverse',
    },
    y: 60,
    duration: 1,
    opacity:0,
    ease:'expo.easeInOut'
});

gsap.from('#connect h1', {
    scrollTrigger:{
        trigger:'#connect h1',
        // markers: true,
        toggleActions: 'play pause resume reverse',
    },
    y: 60,
    duration: 1,
    opacity:0,
    ease:'expo.easeInOut'
});

gsap.from('#connect p', {
    scrollTrigger:{
        trigger:'#connect p',
        // markers: true,
        toggleActions: 'play pause resume reverse',
    },
    y: 60,
    duration: 1,
    opacity:0,
    ease:'expo.easeInOut'
});

gsap.from('#what h4', {
    scrollTrigger:{
        trigger:'#what h4',
        // markers: true,
        toggleActions: 'play pause resume reverse',
    },
    y: 60,
    duration: 1,
    opacity:0,
    ease:'expo.easeInOut'
});

gsap.from('#what h5', {
    scrollTrigger:{
        trigger:'#what h5',
        // markers: true,
        toggleActions: 'play pause resume reverse',
    },
    y: 40,
    duration: 1,
    opacity:0,
    ease:'expo.easeInOut'
});

gsap.from('#what1 h4', {
    scrollTrigger:{
        trigger:'#what1 h4',
        // markers: true,
        toggleActions: 'play pause resume reverse',
    },
    y: 40,
    duration: 1.5,
    opacity:0,
    ease:'expo.easeInOut'
});
gsap.from('#connect1 h5', {
    scrollTrigger:{
        trigger:'#connect1',
        // markers: true,
        toggleActions: 'play pause resume reverse',
    },
    y: 30,
    duration: 1.5,
    opacity:0,
    ease:'expo.easeInOut'
});

gsap.from('#connect1 h1', {
    scrollTrigger:{
        trigger:'#connect1 h1',
        // markers: true,
        toggleActions: 'play pause resume reverse',
    },
    y: 40,
    duration: 1,
    opacity:0,
    ease:'expo.easeInOut'
});

gsap.from('#connect1 p', {
    scrollTrigger:{
        trigger:'#connect1 p',
        // markers: true,
        toggleActions: 'play pause resume reverse',
    },
    y: 40,
    duration: 1,
    opacity:0,
    ease:'expo.easeInOut'
});

gsap.from('.mirror ', {
    scrollTrigger:{
        trigger:' .mirror',
        // markers: true,
        toggleActions: 'play pause resume reverse',
    },
    x: -40,
    duration: 1,
    opacity:0,
    ease:'expo.easeInOut'
});

gsap.from('#what2 h5', {
    scrollTrigger:{
        trigger:'#what2',
        // markers: true,
        toggleActions: 'play pause resume reverse',
    },
    y: 40,
    duration: 1,
    opacity:0,
    ease:'expo.easeInOut'
});

gsap.from('#what2 h1', {
    scrollTrigger:{
        trigger:'#what2 h1',
        // markers: true,
        toggleActions: 'play pause resume reverse',
    },
    y: 40,
    duration: .5,
    opacity:0,
    ease:'expo.easeInOut'
});

gsap.from('#what2 h4', {
    scrollTrigger:{
        trigger:'#what2 h4',
        // markers: true,
        toggleActions: 'play pause resume reverse',
    },
    y: 40,
    duration: .5,
    opacity:0,
    ease:'expo.easeInOut'
});



gsap.from('#what4 h1', {
    scrollTrigger:{
        trigger:'#what4',
        // markers: true,
        toggleActions: 'play pause resume reverse',
    },
    y: 40,
    duration: 1,
    opacity:0,
    ease:'expo.easeInOut'
});

gsap.from('#what4 p', {
    scrollTrigger:{
        trigger:'#what4 p',
        // markers: true,
        toggleActions: 'play pause resume reverse',
    },
    y: 40,
    duration: 1,
    opacity:0,
    ease:'expo.easeInOut'
});






gsap.from('#back4 p', {
    scrollTrigger:{
        trigger:'#back4 p',
        // markers: true,
        toggleActions: 'play pause resume reverse',
    },
    y: 40,
    duration: .5,
    opacity:0,
    ease:'expo.easeInOut'
});






gsap.to("#big1 img" , {
    scrollTrigger:{
        trigger: "#back",
        start: "top centre",
        scrub: 1,
        duration: 2,
        // markers: true,
    },
    y: 225,
    ease: 'linear'
})
gsap.to("#big2 img" , {
    scrollTrigger:{
        trigger: "#back",
        start: "top centre",
        scrub: 1,
        duration: 2,
        // markers: true,
    },
    y: 225,
    ease: 'linear'
})
gsap.to("#heroleft img" , {
    scrollTrigger:{
        trigger: "#back",
        start: "top centre",
        scrub: 1,
        duration: 2,
        // markers: true,
    },
    y: 225,
    ease: 'linear'
})

gsap.to("#heroright img" , {
    scrollTrigger:{
        trigger: "#back",
        start: "top centre",
        scrub: 1,
        duration: 2,
        // markers: true,
    },
    y: 225,
    ease: 'linear'
})

gsap.to("#bimage img" , {
    scrollTrigger:{
        trigger: "#back",
        start: "top centre",
        scrub: 1,
        duration: 2,
        // markers: true,
    },
    y: 300,
    ease: 'linear'
})

gsap.to("#table1 img" , {
    scrollTrigger:{
        trigger: "#back",
        start: "top centre",
        scrub: 1,
        duration: 2,
        // markers: true,
    },
    y: 225,
    ease: 'linear'
})

gsap.to("#table2 img" , {
    scrollTrigger:{
        trigger: "#back",
        start: "top centre",
        scrub: 1,
        duration: 2,
        // markers: true,
    },
    y: 225,
    ease: 'linear'
})