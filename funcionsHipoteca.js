function calcularQuota() {
    
        var data = new Date(document.getElementById("diaInicial").value);
        var dia = data.getDate();
    
        if (dia > 1) {
            alert("El dia seleccionat no és vàlid, heu de seleccionar el primer dia del mes");
        } 
        var capital = parseFloat(document.getElementById("capital").value);
        //El capital són els “diners pendents” que ens queden per amortitzar en el moment de la revisió
        if (capital > 1000000) {
            alert ("El capital no pot ser superior a 1 milió d'euros. Introdueix un nou capital.");
        }
    
    
        var interes = parseFloat(document.getElementById("interessos").value)/12;  
        // L'interés de la fórmula és l'interés mensual, per calcular-lo dividim l'interés anual entre 12
        var termini = parseInt(document.getElementById("termini").value);
        //El termini s'ha de posar en mesos
    
    
        if (termini > 480) {
            alert ("El termini no pot ser superior a 40 anys (480 mesos). Introdueix un nou termini.");
        }

        // les següents variables ens serviran per calcular el dia que acabarem de pagar la hipoteca
        var dataFi = new Date;
        var day = dataFi.getDate();
        var month = dataFi.getMonth();
        var year = dataFi.getFullYear();
        var fiTermini = termini;
        var dataFi = new Date (year, (month + fiTermini) , day);
    
    
        var numeradorFormula = capital * interes;
        var denominadorFormula = 100 * (1- Math.pow(1+ (interes/100), -termini));
        var quota = numeradorFormula/denominadorFormula;
    
        if (dia == 1 && capital <= 1000000 && termini <= 480) {
            alert("La quota mensual que ha de pagar és: " + quota + 
                    ". Acabarà de pagar la seva quota el " + dataFi.toLocaleDateString("en-US"))
        } else {
            alert("Torna a emplenar els camps que contenen errors.");
        }
        
    }
    
    