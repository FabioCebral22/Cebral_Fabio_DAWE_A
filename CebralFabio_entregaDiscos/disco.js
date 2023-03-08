class Interprete {
    #nombre;
    #apellidos;
    #nombreArtistico;
    constructor(_nombre,_apellidos,_nombreArtistico){
        this.#nombre=_nombre;
        this.#apellidos=_apellidos;
        this.#nombreArtistico=_nombreArtistico;
    }
    getInterprete(){
        return [this.#nombre,this.#apellidos,this.#nombreArtistico]
    }
}

let prueba=new Interprete("Fabio","Cebral Raya","Martí")
class Disco {
nombre;
interprete;
añoPubli;
tipoMusica;
urlImagen;
#localizacion;
#prestado;
constructor (){
    this.nombre="";
    this.interprete=new Interprete("","","");
    this.añoPubli="";
    this.tipoMusica="";
    this.urlImagen="";
    this.#localizacion=0;
    this.#prestado=false;
}
addInfo(_nombre,_interprete,_añoPubli,_tipoMusica,_urlImagen,_localizacion){
this.nombre=_nombre;
this.interprete=_interprete;
this.añoPubli=_añoPubli;
this.tipoMusica=_tipoMusica;
this.urlImagen=_urlImagen;
this.#localizacion=_localizacion
this.#prestado=false;
}
getPrestado(){
return this.#prestado
}
getLocalizacion() {
    return this.#localizacion
}
showInfo(){
    for(const property in object){
        console.log(`${property}: ${object[property]}`);
    }
}
}
class Discografia{
discos;
constructor(){
    this.discos = []
}
añadirDisco(nuevoDisco){
this.discos.push(nuevoDisco)
};

borrarDisco(nombreDisco){
let aEliminar=this.discos.filter((disco) => disco.nombre == nombreDisco)[0]
let indexAEliminar=this.discos.indexOf(aEliminar)
this.discos.splice(indexAEliminar,1)
}
ordenarDiscos(propiedad){
this.discos.sort((a,b)=>a[propiedad].localeCompare(b[propiedad]))
}
}
function mostrarLosDiscos(discos){
    let divTabla = document.getElementById("discos")
    //vaciar el dom
    while(divTabla.hasChildNodes()){
        divTabla.removeChild(divTabla.lastChild)
    }
    discos.forEach((disco)=>{
        let discografiaDiv = document.getElementById("discos")
        let divDisco = document.createElement("div")
        divDisco.classList.add("disco")
        let divImagen = document.createElement("div")
        divImagen.classList.add("portada")
        let divInfo = document.createElement("div")
        divInfo.classList.add("info")
        let info = ""
        for (const propiedad in disco) {
           if (propiedad=="urlImagen"){
            let imgToAdd = document.createElement("img")
            imgToAdd.setAttribute("src",disco[propiedad])
            divImagen.appendChild(imgToAdd)
           }else if(propiedad=="interprete"){
            info += `<p>Nombre Interprete: ${disco[propiedad][0]}</p>`
            info += `<p>Nombre Artista: ${disco[propiedad][2]}</p>`
           }
           else {
            info += `<p>${propiedad}: ${disco[propiedad]}</p>`
           }
          
    }
    info += `<p>Localizacion: ${disco.getLocalizacion()}</p>`
    info += `<p>Prestado: ${disco.getPrestado()}</p>`
    divInfo.innerHTML = info
    divDisco.appendChild(divImagen)
    divDisco.appendChild(divInfo)
    discografiaDiv.appendChild(divDisco)
    })
}
function pedirDisco(){
    var nombreDisco=prompt("Introduce el nombre del disco")
    var nombreInterprete=prompt("Introduce el nombre del interprete")
    var nombreArtistico=prompt("Introduce el nombre artistico")
    var añoPubli=prompt("Introduce el año de publicación")
    var tipoMusica=prompt("Introduce el tipo de musica")
    var urlImagen=prompt("Introduce el url de la imagen")
    var localizacion=prompt("Introduce la localizacion")
     var nuevoObjeto=new Disco()
    nuevoObjeto.addInfo(nombreDisco,new Interprete(nombreInterprete,"",nombreArtistico).getInterprete(),añoPubli,tipoMusica,urlImagen,localizacion)
    discografia.añadirDisco(nuevoObjeto)
    mostrarLosDiscos(discografia.discos)
}
function añadirDiscosRecomendados(){
    let bbo=new Disco
    bbo.addInfo("BBO",new Interprete("Desconocido","","Hoke").getInterprete(),"2022","Indie","https://jenesaispop.com/wp-content/uploads/2022/09/FcZXJPeXwAM35OH.jpg",1)
    let lpoe=new Disco
    lpoe.addInfo("Last 2 People On Earth",new Interprete("Jorge Damián","","Ébano").getInterprete(),"2020","Indie","https://images.genius.com/f861b2fb4035189bdb68204184c03c45.500x500x1.jpg",2)
    let disco3=new Disco
    disco3.addInfo("YHLQMDLG",new Interprete("Benito","","Bad Bunny").getInterprete(),"2020","POP","https://i.scdn.co/image/ab67616d0000b273548f7ec52da7313de0c5e4a0",3)
    let disco4=new Disco
    disco4.addInfo("El circulo",new Interprete("Javier Ibarra","","KASE O").getInterprete(),"2016","Indie","https://m.media-amazon.com/images/I/51iaVGan3SL.jpg",4)
    let disco5=new Disco
    disco5.addInfo("10:20:40",new Interprete("Ramon Melendi","","Melendi").getInterprete(),"2019","POP","https://m.media-amazon.com/images/I/91hZ02egEaL._SX466_.jpg",5)
    discografia.discos.push(bbo,lpoe,disco3,disco4,disco5)
    this.mostrarLosDiscos(discografia.discos)
}
function pedirSort(){
    let sortType=prompt("Por que atributo lo quieres ordenar?")
    discografia.ordenarDiscos(sortType)
    mostrarLosDiscos(discografia.discos)
}
function pedirNombreDiscoParaEliminar(){
    let name=prompt("Introduce el nombre del disco que quieres borrar")
    discografia.borrarDisco(name)
    mostrarLosDiscos(discografia.discos)
}
let discografia=new Discografia()
