function Calcular(){
    let TotalP              = document.getElementById("Total");
    let PB                  = document.getElementById("PBasica").value;
    let P2I                 = document.getElementById("P2Ingredientes").value;
    let P3I                 = document.getElementById("P3Ingredientes").value;
    let RG                  = document.getElementById("RefGrande").value;
    let RC                  = document.getElementById("RefChico").value;
    Total                   = 0;
    let promoActiva         = false;


    if(P3I>0){
        if(RG>0){
            Total       = (12+3)*0.8;
            promoActiva = true;
            P3I         = P3I-1;
            RG          = RG-1;
        }
    }
    if(!promoActiva){
        if(RC>0){
            if(P2I>0){
                Total       = (10+2)*0.85;
                promoActiva = true;
                P2I         = P2I-1;
                RC          = RC-1;
            }
            if(!promoActiva){
                if(PB>0){
                    Total       = (5+2)*0.9;
                    PB          = PB-1;
                    RC          = RC-1;
                    promoActiva = true;
                }
            }
        }
    }
    ValorPB    = PB * 5;
    ValorP2I   = P2I * 10;
    ValorP3I   = P3I * 12;
    ValorRG    = RG * 3;
    ValorRC    = RC * 2;
    Total      = Total + ValorPB + ValorP2I + ValorP3I + ValorRG+ ValorRC;
    TotalP.innerText = Total;
}