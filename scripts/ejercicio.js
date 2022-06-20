let ejecutarCodigo = () => {

    let elemento = document.getElementById('titulo1')
    elemento.textContent = 'Album de fotos'

    let arreglo = document.getElementsByClassName('text-muted');
    elemento = arreglo[1]
    elemento.innerHTML = `<span> En este sitio encontrarás un album de fotos inspirado en el snippet de <a href="https://codepen.io/taj1uddin/pen/eYVrLKy">Codepen - Taj Uddin</a>.</span>`

    let arreglo2 = document.getElementsByTagName('p');
    elemento = arreglo2[2]
    elemento.setAttribute('class','d-none')

    /*const arregloSvg = document.querySelector("svg.bd-placeholder-img card-img-top");
    const img = document.createElement("img");*/

}

funcionReto = () =>{
    let arreglo = [['url: "https://images.unsplash.com/photo-1653896775515-ae85244f58a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NzZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"','alt:"cámara"'],
    [ 'url: "https://images.unsplash.com/photo-1653865507270-731da1afface?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NjB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"', 'alt:"relax"'],
      ['url: "https://images.unsplash.com/photo-1648737963540-306235c8170e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"', 'alt:"papá"'],
    ['url:"https://images.unsplash.com/photo-1653908836785-b519864cca16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"','alt:"view"'],
    ['url:"https://images.unsplash.com/photo-1654041563290-2d6118dba2c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"','alt:"bosque"'],
    ['url:"https://images.unsplash.com/photo-1654046491755-20ef230f0add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60','alt:"retrato"'],
    ['url:"https://images.unsplash.com/photo-1653917215257-40db75a62dc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60','alt:"mountains"'],
    ['url:"https://images.unsplash.com/photo-1653971858526-97f2ba1914c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"','alt:"interior sala"'],
    ['url:"https://images.unsplash.com/photo-1653578705644-3672f965f009?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNjF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"','alt:"mujer en el bosque"']];

    let svg = document.querySelectorAll("svg");
    let linkOnly;
    let altOnly;
    let  prueba;
   
    for (let datoImg in arreglo){
        //console.log(arreglo[datoImg][0])
      linkOnly = arreglo[datoImg][0].replace("url:","").replaceAll('"','');
      altOnly = arreglo[datoImg][1].replace("alt:","").replaceAll('"','');
     
    let img = document.createElement("img");
       img.src=linkOnly;
       img.alt = altOnly;
       img.height="225";
       svg[datoImg].replaceWith(img);
    }

    
}

ejecutarCodigo();
funcionReto();