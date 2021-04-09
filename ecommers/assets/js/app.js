//
var tableBody = document.getElementById("data");
let listar = document.getElementById("listado"); 
var carrito = [];
var tableData = "";
var contadorpresiones=0;

/*

var productos=
{
   1: {
        "nombre":"DJI Navic Pro",
        "modelo":"2020",
        "descripcion":"Dron ligero y chiquito",
        "precio":{
            "precioNormal":12000,
            "precioRebaja":10000
        }


    },
    2:{
        "nombre":"DJI Phanton",
        "modelo":"2020",
        "descripcion":"Dron Profesional",
        "precio":{
            "precioNormal":14000,
            "precioRebaja":12000
        }
    }
}
*/
var productos=
{
   1: {
       "id":1,
        "nombre":"Bicicleta #1",
        "modelo":"2018",
        "descripcion":"bicicleta bonita",
        "precio":2000


    },
    2:{
        "id":2,
        "nombre":"Bicicleta #2",
        "modelo":"2017",
        "descripcion":"bicicleta fea",
        "precio":3000
    },
    3:
    {
        "id":3,
        "nombre":"Bicicleta #3",
        "modelo":"2005",
        "descripcion":"bicicleta deportiva",
        "precio":6000
    },
    4:
    {
        "id":4,
        "nombre":"Bicicleta #4",
        "modelo":"2007",
        "descripcion":"bicicleta cara",
        "precio":96000


    },
    5:
    {
        "id":5,
        "nombre":"Bicicleta #5",
        "modelo":"2007",
        "descripcion":"bicicleta cara",
        "precio":95000
    },
    6:
    {
        "id":6,
        "nombre":"Bicicleta #6",
        "modelo":"2011",
        "descripcion":"bicicleta para niño",
        "precio":4000
    },
    7:
    {
        "id":7,
        "nombre":"Bicicleta #7",
        "modelo":"2015",
        "descripcion":"bicicleta para de Carreras",
        "precio":12000
    },

     8:
    {
        "id":8,
        "nombre":"Bicicleta #8",
        "modelo":"2019",
        "descripcion":"Triciclo",
        "precio":5000
    }
    ,
    9:
    {
        "id":9,
        "nombre":"Bicicleta #9",
        "modelo":"2013",
        "descripcion":"Bicicleta con freno de Disco",
        "precio":7500
    },
    10:
    {
        "id":10,
        "nombre":"Bicicleta #10",
        "modelo":"2012",
        "descripcion":"Bicicleta con freno de Disco",
        "precio":3000
    }

    /*,
    5:
    {
        "nombre":"bicicleta 5",
        "modelo":"2007",
        "descripcion":"bicicleta cara",
        "precio":96000
    },
    6:
    {
        "nombre":"bicicleta 6",
        "modelo":"2007",
        "descripcion":"bicicleta cara",
        "precio":96000
    },
    7:
    {
        "nombre":"bicicleta 7",
        "modelo":"2007",
        "descripcion":"bicicleta cara",
        "precio":96000
    },
    8:
    {
        "nombre":"bicicleta 8",
        "modelo":"2007",
        "descripcion":"bicicleta cara",
        "precio":96000
    },
    9:
    {
        "nombre":"bicicleta 9",
        "modelo":"2007",
        "descripcion":"bicicleta cara",
        "precio":96000
    },
    10:
    {
        "nombre":"bicicleta 10",
        "modelo":"2007",
        "descripcion":"bicicleta cara",
        "precio":96000
    }
    */
}

/*console.log(Object.keys(productos).length);*/
/*
for (let index = 1; index <=Object.keys(productos).length; index++){
    
    tableData += `
    <tr >
        <td>${index}</td>
        <td>${productos[index].nombre}</td>
        <td>${productos[index].modelo}</td>
        <td>${productos[index].descripcion}</td>
        <td>${productos[index].precio}</td>
    </tr>
    `;
}
*/
/*
for (let index = 1; index <=Object.keys(productos).length; index++){
    
    tableData += `
    <tr >
        <td>${index}</td>
        <td>${productos[index].nombre}</td>
        <td>${productos[index].modelo}</td>
        <td>${productos[index].descripcion}</td>
        <td>${productos[index].precio}</td>
    </tr>
    `;
}
*/
/*
document.getElementById('data').innerHTML = 'hi';
*/

/*
tableBody.innerHTML = tableData;
*/
/*
function mostrarProductos()
{
    console.log(productos[1])
}
*/
/*codigo referencia*/
/*
for (let index = 1; index <=Object.keys(productos).length; index++){
    
    tableData += `
    <tr >
    <td>${index}</td>
    </tr>
    `;

    tableBody.innerHTML = tableData;
}
*/
/*
Tengo la idea ponerle a cada poner un contador
onClick="addToCart(${productos[index].id})"
*/


for (let index = 1; index <=Object.keys(productos).length; index++){


    tableData += `<div class="col-sm-4" > <div class="card" style="width:100%; height:100%">
    <img class="card-img-top" src="assets/img/bicicleta${index}.jpg" alt="Card image" style="width:100%">
    <div class="card-body">
      <h4 class="card-title">${productos[index].nombre}</h4>
      <p class="card-text">Descripción=${productos[index].descripcion}<br>Modelo=${productos[index].modelo}<br>Precio=$${productos[index].precio}</p>
      <a href="#" class="btn btn-success" onClick="addToCart(${productos[index].id})" id="btn${productos[index].id}">Agregar</a>
    </div>
  </div> </div>`;

  
   /* if (index%3==0) {
        
        saltolineatable1=" <tr > </tr>";
       
    }else
    {
        saltolineatable1="";
    }*/


/*
    tableData += `
    
    <td>
 <div class="card" style="width:400px">
    <img class="card-img-top" src="assets/img/bicicleta${index}.jpg" alt="Card image" style="width:100%">
    <div class="card-body">
      <h4 class="card-title">${productos[index].nombre}</h4>
      <p class="card-text">Descripción=${productos[index].descripcion}<br>Modelo=${productos[index].modelo}<br>Precio=$${productos[index].precio}</p>
      <a href="#" class="btn btn-success">Agregar</a>
    </div>
  </div>
    </td>
    ${
        saltolineatable1
    }
    
    `;
*/
   
    tableBody.innerHTML = tableData;
    
    /* Variable para el local storage para el nombre del key*/
    
    var nombredelocalstorage="nombres";

    
     var datos=[];       
    
    /*
    ****************
    */
    function addToCart(id)
    {
        /*
        if (id=productos.id) {
            carrito.push(id);
        }
        */
       /*console.log("hola");*/
        carrito.push("NOMBRE="+productos[id].nombre+" MODELO="+productos[id].modelo+ " PRECIO= $"+productos[id].precio);
        //localStorage.setItem(nombredelocalstorage,'hola');
       
         console.log(objeto);   
        
      
        //localStorage.setItem(nombredelocalstoragenames,almacennombres);
        contadorpresiones+=1;
      /*  listar.innerHTML += `<p>${carrito}</p>`*/
     
     
      
    }
   
    
   
}
var cargadatos="";
var contadorboton=0;
 function listacompra()
 {
    
    
     for (let index = contadorboton; index <contadorpresiones; index++) {
        cargadatos+='<li>'+ carrito[index]+'</li>';
         
     }
     contadorboton+=1;
     document.getElementById("listacompras").innerHTML=cargadatos;



     //Mostrando el arreglo
     /*
     console.log("PRUEBA EN EL INDEX PRINCIPAL");
     for (let index = 0; index < carrito.length; index++) {
         
         console.log(carrito[index]);
     }

    
     localStorage.setItem(nombredelocalstorage,carrito);
     */
 }
