var images = document.getElementsByClassName('w-ima');
for( i=0; i<images.length ;i++){
    images[i].addEventListener('click',zoom,false);
}
function zoom() {
    var classList = this.classList;
    var hasZoomed = false;
    //cach 1
    for(i = 0; i<classList.length; i++){
        if (classList[i] == "zoomed"){
            hasZoomed = true;
            break;
        }
    }

    //cach 2
    // if(classList.contains("zoomed")){
    //hasZoom = true
    // }

    if(hasZoomed){
        this.classList.remove("zoomed");
    }else{
        this.classList.add("zoomed");
    }
}