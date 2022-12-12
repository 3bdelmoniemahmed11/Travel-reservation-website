document.querySelectorAll(".navbar .nav-link").forEach(anchor=>
    {
        anchor.addEventListener("click",function(e)
        {
            console.log("clicked");
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior:"smooth"
            });
        });
    });