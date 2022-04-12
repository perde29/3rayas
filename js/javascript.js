$( document ).ready(function() {
        
    
    let i = 0;
    let nButton;
    let frameBtn = document.querySelectorAll(".frame");
    const gameBtn  = document.getElementById("gameButtom");
    const Buttonred = '<img src="img/red.png" style="width:60px;">';
    const Buttonblack = '<img src="img/black.png" style="width:60px;">';

    // Get the button that opens the modal
    // Get the <span> element that closes the modal
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];



    gameBtn.onclick = function(){   
        for(nButton = 0; nButton < frameBtn.length; nButton++){    
            frameBtn[nButton].style.cssText = "pointer-events:initial;";
            frameBtn[nButton].innerHTML = "";
        }
    }

    frameBtn.forEach(boton => {


        boton.onclick = function(){
            var name = document.getElementById('firstName').value;
            if(name == "") {
                $('#messageModal').html('Ingrese su Nombre para Empezar el Juego.');
                modal.style.display = "block";
            }  else {
                boton.innerHTML = Buttonred; 
                boton.style.setProperty("pointer-events","none");
                check();
                /* Juega Maquina */
                setTimeout(stripMachine(),1000);
                
            }         
        }
    
    });
    
    function check() {
     
        if ((frameBtn[0].innerHTML == Buttonblack && frameBtn[1].innerHTML == Buttonblack && frameBtn[2].innerHTML == Buttonblack) ||
            (frameBtn[3].innerHTML == Buttonblack && frameBtn[4].innerHTML == Buttonblack && frameBtn[5].innerHTML == Buttonblack) ||
            (frameBtn[6].innerHTML == Buttonblack && frameBtn[7].innerHTML == Buttonblack && frameBtn[8].innerHTML == Buttonblack) ||
            (frameBtn[0].innerHTML == Buttonblack && frameBtn[3].innerHTML == Buttonblack && frameBtn[6].innerHTML == Buttonblack) ||
            (frameBtn[1].innerHTML == Buttonblack && frameBtn[4].innerHTML == Buttonblack && frameBtn[7].innerHTML == Buttonblack) ||
            (frameBtn[2].innerHTML == Buttonblack && frameBtn[5].innerHTML == Buttonblack && frameBtn[8].innerHTML == Buttonblack) ||
            (frameBtn[0].innerHTML == Buttonblack && frameBtn[4].innerHTML == Buttonblack && frameBtn[8].innerHTML == Buttonblack) ||
            (frameBtn[6].innerHTML == Buttonblack && frameBtn[4].innerHTML == Buttonblack && frameBtn[2].innerHTML == Buttonblack))  {
            
                var name = document.getElementById('firstName').value;
                $('#messageModal').html('Oh no ' + name + ' <br> Perdistes el Juego!');
                modal.style.display = "block";
                disableCheckboxes();
            
            } else if ((frameBtn[0].innerHTML == Buttonred && frameBtn[1].innerHTML == Buttonred && frameBtn[2].innerHTML == Buttonred) ||
            (frameBtn[3].innerHTML == Buttonred && frameBtn[4].innerHTML == Buttonred && frameBtn[5].innerHTML == Buttonred) ||
            (frameBtn[6].innerHTML == Buttonred && frameBtn[7].innerHTML == Buttonred && frameBtn[8].innerHTML == Buttonred) ||
            (frameBtn[0].innerHTML == Buttonred && frameBtn[3].innerHTML == Buttonred && frameBtn[6].innerHTML == Buttonred) ||
            (frameBtn[1].innerHTML == Buttonred && frameBtn[4].innerHTML == Buttonred && frameBtn[7].innerHTML == Buttonred) ||
            (frameBtn[2].innerHTML == Buttonred && frameBtn[5].innerHTML == Buttonred && frameBtn[8].innerHTML == Buttonred) ||
            (frameBtn[0].innerHTML == Buttonred && frameBtn[4].innerHTML == Buttonred && frameBtn[8].innerHTML == Buttonred) ||
            (frameBtn[6].innerHTML == Buttonred && frameBtn[4].innerHTML == Buttonred && frameBtn[2].innerHTML == Buttonred))  {
            
                var name = document.getElementById('firstName').value;
                $('#messageModal').html('Felicidades ' + name + ' <br> Ganastes el Juego!');
                modal.style.display = "block";
                disableCheckboxes();
        
            } else{  if (frameBtn[0].innerHTML != "" && frameBtn[1].innerHTML != "" && frameBtn[2].innerHTML != "" &&
            frameBtn[3].innerHTML != "" && frameBtn[4].innerHTML != "" && frameBtn[5].innerHTML != "" &&
            frameBtn[6].innerHTML != "" && frameBtn[7].innerHTML != "" && frameBtn[8].innerHTML != "" &&
            frameBtn[0].innerHTML != "" && frameBtn[3].innerHTML != "" && frameBtn[6].innerHTML != "" &&
            frameBtn[1].innerHTML != "" && frameBtn[4].innerHTML != "" && frameBtn[7].innerHTML != "" &&
            frameBtn[2].innerHTML != "" && frameBtn[5].innerHTML != "" && frameBtn[8].innerHTML != "" &&
            frameBtn[0].innerHTML != "" && frameBtn[4].innerHTML != "" && frameBtn[8].innerHTML != "" &&
            frameBtn[6].innerHTML != "" && frameBtn[4].innerHTML != "" && frameBtn[2].innerHTML != "")  {
               
                $('#messageModal').html('Empate !');
                modal.style.display = "block";
                disableCheckboxes();
             } 
            }   
    }
   

    function disableCheckboxes() {
        for(nButton = 0; nButton < frameBtn.length; nButton++){    
            frameBtn[nButton].style.setProperty("pointer-events","none"); 
        }
    }


    function stripMachine() {

        var i = Math.floor(Math.random() * (8 - 0)) + 0;
        if ( frameBtn[i].innerHTML == "") {
            frameBtn[i].innerHTML = Buttonblack;
            frameBtn[i].style.setProperty("pointer-events","none"); 
            check();
        } else {
            stripMachine();    
        } 

    }

    
    /* Modal */
    span.onclick = function() { modal.style.display = "none"; }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


});