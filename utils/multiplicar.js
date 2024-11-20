const fs = require('fs');

const crearArchivo = (base =5 ) => {

console.log ('===============')
console.log (`TABLA del ${base}`);
console.log ('===============')

let salida = ''; 
     
    for ( let i=1; i<=10 ; i++ ) {
    //console.log(`${i} x ${base} = ${i * base}` );
     salida += `${i} x ${base} = ${i * base}\n`;
  }

  console.log(salida);

  fs.wrtiteFileSync(`tabla-${base }.txt`, salida);

  console.log (`Archivo tabla-${base}.txt creado `);
}

module.export = {
    crearArchivo
}