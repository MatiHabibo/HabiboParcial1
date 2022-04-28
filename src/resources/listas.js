
const aRecibos = {
    recibos: [
    {id: 1, numero: '00000002', importe : 1000, cliente:'R00001'},
    {id: 2, numero: '00000003', importe : 3000, cliente:'C00002'},
    {id: 3, numero: '00000004', importe : 2000, cliente:'R00002'},
    {id: 4, numero: '00000005', importe : 8000, cliente:'C00001'},
    ],
    mostrarDatos(){
         this.recibos.forEach(recibo => console.log('Cliente: ' + recibo.cliente,'Importe: ' + recibo.importe));
    },
    ordenarPorImporte(){
        return this.recibos.sort((a,b) => a.importe - b.importe)
    },
    soloConR(){
        return this.recibos.filter(recibos => ((recibos.cliente.charAt(0) == 'R') ||(recibos.cliente.charAt(0) == 'r')) )
    },
    aumentoDel30(){
        return this.recibos.map(recibos => {return { id: recibos.id, numero : recibos.numero, importe: (recibos.importe * 1.3), cliente: recibos.cliente}})
    }
}

export { aRecibos }