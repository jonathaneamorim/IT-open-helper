(()=>{var o,l;o=10,l=5,
    console.log("Soma: "+(o+l)),
    console.log("Subtração: "+(o-l)),
    console.log("Multiplicação: "+o*l),
    console.log("Divisão: "+((o,l)=>{if(0!==l)
        return o/l;console.error("Não é possível dividir por zero")})(o,l)),
        console.log("Módulo: "+o%l)})();