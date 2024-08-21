
      gsap.to(".page1 .curvebox",{
        scale:0,
        delay:2,
        opacity:0,
        duration:2,   
        boaderRadious:20,
        scrollTrigger:{
            trigger:".page1 .curvebox",
            scroller:"body",
            start:"bottom 100%",
            scrub:1,
        }, 
       })
       gsap.from(".page2 h1",{
            scale:0,
            delay:2,
            opacity:0,
            duration:2,   
            scrollTrigger:{
                trigger:".page1 .curvebox",
                scroller:"body",
                start:"bottom 100%",
                scrub:1,
            }, 
           })
           gsap.from(".page2 .subheading",{
            opacity:0,
            duration:2,   
            scrollTrigger:{
                trigger:".page1 .curvebox",
                scroller:"body",
                start:"bottom 100%",
                scrub:1,
            }, 
           })
        

           gsap.registerPlugin(TextPlugin);

           const textElement = document.querySelector('.scramble-text');
           const originalText = textElement.textContent;
           let scrambled = false;
           
           function scrambleText(text) {
               let scramblePattern = '';
               for (let i = 0; i < text.length; i++) {
                   scramblePattern += i % 2 === 0 ? '01' : '';
               }
               return scramblePattern;
           }
            
           textElement.addEventListener('mouseenter', () => {
               if (!scrambled) {
                   scrambled = true;
                   gsap.to(textElement, {
                       duration: 0.5,
                       text: scrambleText(originalText),
                       onComplete: () => {
                           gsap.to(textElement, {
                               duration: 2,
                               text: originalText,
                               delay: 0.5
                           });
                       }
                   });
               }
           });
           