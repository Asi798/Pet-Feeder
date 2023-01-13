function mostra(enllaç,article){
    try{
		document.getElementsByClassName("explicacion")[0].className="noVisible";
		document.getElementsByClassName("enllaç")[0].className="enllaç";
    }catch(err){}
    enllaç.className="enllaç";
    article.className="explicacion";  
}


window.onload = function(){
    document.querySelectorAll("a").forEach(e=>{
        let nom = e.getAttribute("data-pas");
        let article = document.getElementById(nom);
        e.onclick = () =>mostra(e,article);    
    });
   
    let nextButton = document.getElementById("next");    
    nextButton.onclick = function () {
        let current = document.querySelector(".explicacion");
        let next = current.nextElementSibling;
        let tito = document.querySelector(".titol");
        if (next) {
            next.className = "explicacion";
            current.className = "noVisible";
            
            if (next.id == "10"){
                tito.className = "titolVisible";
            } 
        }
        
    }

    
    let backButton = document.getElementById("back");
    backButton.onclick = function () {
        let current = document.querySelector(".explicacion");
        let prev = current.previousElementSibling;
        let tito = document.querySelector(".titol");
        if (prev) {
            prev.className = "explicacion";
            current.className = "noVisible";   
        }
    }
    
    
}