var table = document.querySelectorAll('.__table')[0];

var parents = table.querySelectorAll('.parent');
console.clear();
parents.forEach((p) => {

  p.addEventListener('click', (el) => {
    var classname =  p.getAttribute("data-child");
    var children = table.querySelectorAll('.'+ classname);

    var icons = p.querySelectorAll(".bi");
    icons.forEach((i) => {
        if(i.className.search("bi-chevron-down") > 0){
            i.classList.toggle("bi-chevron-up");
        }else {
            i.classList.toggle("bi-chevron-down");
        }
     
    });
    
    // const icon = document.querySelectorAll(".bi");
    // if(el.className.search("bi-chevron-down") > -1) {
    //     icon.classList.toggle("bi-chevron-up");
    // }
    

    children.forEach((c) => {
      if(c.className.search("hidden") > -1) {
        c.className = c.className.replace("hidden", " ");  
   
      }else {
        c.className = c.className + ' hidden';
      }
    })
  })
})