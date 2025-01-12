document.addEventListener("DOMContentLoaded" , function(){
    const images = ["image1.jpg","image2.png","image3.jpg","image4.jpg","image5.png","image6.jpg","image7.jpg","image8.jpg", ]
    
    let currentIndex = 0;
    function changeImage (){
        currentIndex = (currentIndex + 1) % images.length
    
        document.getElementById("slider-image").src = images[currentIndex]
    
    }
    
    setInterval(changeImage , 3000)
    
    
        document.getElementById("leftscroll").addEventListener("click" , function(){
            document.getElementById("imags").scrollBy({left: -400, behavior:"smooth"});
            
        })
    
        document.getElementById("rightscroll").addEventListener("click" , function(){
            document.getElementById("imags").scrollBy({left: 400 , behavior: "smooth"});
        })
    
        document.getElementById("LS2").addEventListener("click", function(){
            document.getElementById("LI2").scrollBy({left: -400 , behavior: "smooth"})
            
        })
    
        document.getElementById("RS2").addEventListener("click" , function(){
            document.getElementById("LI2").scrollBy({left: 400 , behavior: "smooth"})
        })    
        
        
        document.getElementById("LS3").addEventListener("click", function(){
            document.getElementById("LI3").scrollBy({left: -400 , behavior: "smooth"})
    
        })
    
        document.getElementById("RS3").addEventListener("click" , function(){
            document.getElementById("LI3").scrollBy({left: 400 , behavior: "smooth"})
        })    
        
        document.getElementById("LS4").addEventListener("click", function(){
            document.getElementById("LI4").scrollBy({left: -400 , behavior: "smooth"})
    
        })
    
        document.getElementById("RS4").addEventListener("click" , function(){
            document.getElementById("LI4").scrollBy({left: 400 , behavior: "smooth"})
        })    
        document.getElementById("LS6").addEventListener("click", function(){
            document.getElementById("LI6").scrollBy({left: -400 , behavior: "smooth"})
    
        })
    
        document.getElementById("RS6").addEventListener("click" , function(){
            document.getElementById("LI6").scrollBy({left: 400 , behavior: "smooth"})
        })    
        
    })