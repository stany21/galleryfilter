document.addEventListener("DOMContentLoaded",function(){
    const filterButtons=document.querySelectorAll(".filter-button");
    const galleryItems=document.querySelectorAll(".gallery-item");
    filterButtons.forEach((button)=>{
        button.addEventListener("click",function(){
            // remove classes 
           filterButtons.forEach(button=>button.classList.remove("active"));
           // add classes
           this.classList.add("active");
           // get filter values
           const filterValues=this.getAttribute("data-filter");
           galleryItems.forEach((item)=>{
            const category=item.getAttribute("data-category");
            if(filterValues==="all" || filterValues===category){
                item.classList.remove("hide");
            }else{
                item.classList.add("hide");
            }
           })
        })
    })
})

