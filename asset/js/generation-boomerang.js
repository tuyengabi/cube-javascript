

scrollToView();

function scrollToView(){
    setTimeout(function() {
        document.getElementById('myDiv').scrollIntoView({behavior: "smooth"});      
        pause();       
    }, 3000);
    
}

function pause(){
    setTimeout(function() {      
        document.getElementById("video").remove();       
    }, 1000);
    
}


