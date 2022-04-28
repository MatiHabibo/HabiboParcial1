import { aRecibos } from "../resources/listas.js";
import fs from 'fs';


const miMensaje = (msj) => console.log(msj);

setTimeout(() => {
    miMensaje('Este es mi mensaje con delay');

    aRecibos.mostrarDatos();
    console.log(aRecibos.ordenarPorImporte());
    console.log(aRecibos.soloConR());
    console.log(aRecibos.aumentoDel30());
    
    fs.writeFileSync('./src/resources/miNuevoTexto.txt', 'Este es el primer texto', 'utf-8');
    fs.appendFileSync('./src/resources/miNuevoTexto.txt',' / nuevo texto')
    const texto = fs.readFileSync('./src/resources/miNuevoTexto.txt', 'utf-8');
    console.log(texto);
    

}, 7000)

