
 
const header = document.querySelector("header")

const first_skill = document.querySelector(".skill:first-child");
const skill_progress = document.querySelectorAll(".counter span");
const progress_bar = document.querySelectorAll("#skills svg circle");

// When we scroll, then function will run and after that it will do a/q to skillProgress that is define below. 
    window.addEventListener("scroll" , () =>
    {
        skillProgress();
    })

//--------------------------------------------- On Scrolling Changes in Navbar --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    // function stickyNavbar()
    //     {
    //         // classlist mainipulate elements class a/q to attributes used like if we use attribute ".add" than it will add new class
    //         // toogle add if not present and remove if present
    //         // window.pageXOffset property returns the pixels a document has scrolled from the upper left corner of the window horizontally.
    //         // window.pageYOffset property returns the pixels of the current document which have been scrolled from the upper left corner of the window vertically
            
    //         // agger document ka pixel jaise hi 0 se uper hoga  
    //         // to scrolled ko bula denge jo css me define hai aur 0 hoga to scrolled class ko band kar denge 
    //         header.classList.toggle("scrolled", window.pageYOffset > 0);
        
    //     }
    // stickyNavbar();

    // // We are adding event scroll
    // //  that when we will scroll than we will call  function "stickyNavbar"
    // window.addEventListener("scroll" , stickyNavbar);
    const blur = () => 
    {
        const header = document.getElementById('header')
        this.scrollY >= 50 ? header.classList.add('blurHeader') : header.classList.remove('blurHeader')
    }
     
    window.addEventListener('scroll' , blur)

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//--------------------------------------------- Scroll Reveal Animation--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    let sr = ScrollReveal({
        duration:2400,
        distance:"70px",
    });

    // for below code read scroll reveal library code 

    sr.reveal(".left" , { delay: 600});
    sr.reveal("#homepage" , { delay: 700});
    // sr.reveal("#homepage" , { origin : "top", delay: 700});

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//--------------------------------------------- Skill progress bar Animation--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        function hasReached(el) 
        {
            // getBoundingClientRect.top() method will return the top position of our skill div relative to the view port 
            // this means it will return +ve value if the skill div is below the view port
            // it will return zero value if the skill div is exactly at  the view port 
            // it will return -ve value if the skill div is above the view port

            // So now by this way we can know whether skill div is below the bottom edge of view port or it is above the viewport
            let topPosition = el.getBoundingClientRect().top;

            // window.innerHeight will returns the heght of the viewpoint which is fixed tjat it will neither increase nor decrease
            // el.offsetHeight willl return the height of the skill div
            // The return statement ends function execution and specifies a value to be returned to the function caller.
            if (window.innerHeight >= topPosition + el.offsetHeight) return true;

            //  Return false statement is used to prevent something from happening.
            return false;

            // {
            //    return true; 
            // }
            // else
            // {
            //     return false;
            // }
        
            
        } 

        function updateCount(num, maxNum)
            {
                // Geting current value of each skill percentage that is zero
                let currentNum = +num.innerText;

                // Now as long current number(0) is less than the maximum number (target)
                if( currentNum < maxNum )
                {
                    // The innerText property sets or returns the text content of an element.
                    num.innerText = currentNum + 1;

                    // The setTimeout() method calls a function after a number of milliseconds.
                    setTimeout(() => 
                    {
                        updateCount(num, maxNum);
                    }, 17);
                }
            }







        // So when we will scrolll than we will calll  skillProgres function and inside that 
        // than we will call function hasReached 
        function skillProgress()
        {
            // The return statement ends function execution and specifies a value to be returned to the function caller.
            // So if in fuction hasReached(el) nothing happen at that time  we will not end the function skillProgress() exectuion 
            if(!hasReached(first_skill)) return;

            
            // We will go through skill divs using forEach()methhod and get the values of that data-target attribute.
        

    skill_progress.forEach((counter, i) =>
        {
            // to get value of data-target
            let target = +counter.dataset.target;

            
            let strokeValue = 427-427 * (target/100); 

            // to put css variable that we will name --target in svg circle
            progress_bar[i].style.setProperty("--target" , strokeValue)
            
          // The setTimeout() method calls a function after a number of milliseconds.
            setTimeout(() =>
            {
                  // Calling updateCount function and assigning value to its parameter
                updateCount(counter, target);
            }, 500);
        });


    // And if in fuction hasReached(el) changes happen at that time we will add pargraph (style.animation = "progress 2s ease-in-out") inside all svg circle .
    progress_bar.forEach(
        (p) => (p.style.animation = "progress 2s ease-in-out forwards"));
  
 }



//--------------------------------------------- Portfolio Filter Animation--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 let mixer = mixitup('.portfolio-galery');

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    const all = document.getElementById("All");
    const design = document.getElementById("Design");
    const web = document.getElementById("Web");
    const cs = document.getElementById("CS");

    if(design)
    {
        design.addEventListener('click' , () =>{
            cs.classList.add("cs");
            cs.classList.remove("co");
        })
    }

    if(all)
        {
            all.addEventListener('click',() => {
                cs.classList.add("co");
            })
        }

        if(web)
        {
            web.addEventListener('click',() => {
                cs.classList.add("co");
            })
        }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        const navMenu = document.getElementById('nav__menu')
        const navToggle = document.getElementById('nav__toggle')
        const navClose= document.getElementById('nav__close')
        const navLink=document.querySelectorAll('.nav-link')

        //<<<<< Menu Show >>>>>
            // Validate if constant is there
                if(navToggle)   
                    {
                        navToggle.addEventListener('click', () =>
                        {
                            navMenu.classList.add('show-menu')
                        })
                    }

        //<<<<< Menu Remove>>>>
            // Validate if constant is there
                if(navClose)
                    {
                        navClose.addEventListener('click',() =>
                        {
                            navMenu.classList.remove('show-menu')
                        })
                    }

        //<<<<< Menu Remove on clicking linking>>>>
                const action = () =>
                    {
                        navMenu.classList.remove('show-menu')
                    }
                
                navLink.forEach(n => n.addEventListener('click', action))

