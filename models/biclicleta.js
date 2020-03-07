var bicicleta=function(id,color,modelo,ubicacion){
    this.id =id;
    this.color=color;
    this.modelo =modelo;
    this.ubicacion=ubicacion;
}
bicicleta.prototype.toString=function(){
    return 'id: '+this.id + "| color: "+ this.color;
}
bicicleta.allBicis = [];
bicicleta.add=function(aBici){
    bicicleta.allBicis.push(aBici);
}
bicicleta.findById=function(aBiciId){
    aBici=bicicleta.allBicis.find(x=>x.id==aBiciId);
    if(aBici){
        
        return aBici;}
    else
        throw new Error(`No existe una bicicleta con el id ${aBici}`);
}

bicicleta.removeById = function(aBiciId){
    for(var i=0;i<bicicleta.allBicis.length;i++){
        bicicleta.allBicis.splice(i,1);
        break;
    }

}
var a= new bicicleta( 1,'rojo','urbana', [-8.109864,-79.024834])
var b= new bicicleta( 2,'blanco','urbana', [-8.10,-79.024834])
 
bicicleta.add(a);
bicicleta.add(b);


module.exports=bicicleta;