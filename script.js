function Drop(n) {
    let Album = document.querySelector(n);
    let childs = Album.children;
    if (Album.toggleAttribute("open")) {
        for (let index = 0; index < childs.length; index++) {

            childs[index].style.display = "none";
          
        }
        Album.classList.toggle("open");
      } else {
        for (let index = 0; index < childs.length; index++) {

          childs[index].style.display = "block";
        
        }
        Album.classList.toggle("open");
      }
}

Drop('.Gal-1');
Drop('.Gal-2');
Drop('.Gal-3');