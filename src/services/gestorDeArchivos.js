import { aRecibos } from "../resources/listas.js";
import fs from 'fs';


aRecibos.mostrarDatos();
console.log(aRecibos.ordenarPorImporte());
console.log(aRecibos.soloConR());
console.log(aRecibos.aumentoDel30());

fs.appendFileSync('./src/resources/texto.txt',' / nuevo texto')
const texto = fs.readFileSync('./src/resources/texto.txt', 'utf-8');
console.log(texto);
