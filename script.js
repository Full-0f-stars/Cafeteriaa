
function boasvindas () {
    window.location.href = "cardapio/principal2.html";
  


} // cardapio

function gravar() {
  
   
        var email = document.getElementById("email").value;
       
        localStorage.setItem('email', email) 
        boasvindas();
 

}



