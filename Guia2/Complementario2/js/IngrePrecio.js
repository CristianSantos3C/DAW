//Definimos los arreglos para guardar los datos
var productos = new Array(100);
var precios = new Array(100);


//contadores
var i = 0;
var canProduct = 1;

//banderas a utilizar
var bande = false;
var segunban = false;
var tercerban = false;
var cuarban = false;

//Variable para selecccionar;
var select;

//Obtención de datos y validación de campos

for(i = 0; i <= 100; i++){
    do
    {
        do{
            if(!(productos[i] =  prompt("Digite el nombre del producto al que le colocará precio"))){
            alert("Dato no válido... EL campo incompleto");
            }else{
                if(isNaN(productos[i])){
                    cuarban = true;
                    do{
                        if(!(precios[i] = prompt("Digite el precio que desea para el producto"))){
                            alert("Dato no válido... EL campo incompleto");
                        }else{
                        if(isNaN(precios[i])){
                        alert("Dato no válido...");
                        }else{
                            segunban = true;
                        
                        }
                        }
                    }while(segunban == false);
                }else{
                    alert("Dato no válido...");

                }
            
            }
        }while(cuarban == false);

        //Selección de opciones
        do{
            select = prompt("Digite producto para agregar más, Si ese no es el caso coloque no si ya no desea ingresar productos");
            switch(select){
                case 'producto': case 'Producto':
                    tercerban = true;
                    bande = true;
                    canProduct ++;
                    break;
                case 'no': case 'NO':
                    i = 100;
                    tercerban = true;
                    bande = true;
                    break;
                default:
                    alert("Dato no válido...");
                    tercerban = false;
                    break;
            }
        }while(tercerban == false);



    }while(bande == false);
}

//Impresión de la tabla
document.write("<font face='Arial' size='12'><header align= 'center'>Tabla de productos</header>")
document.write("<font face='Arial' size='12'><table border = '3' bgcolor='aqua' align= 'center'><tr> <th>Nombre del producto</th> <th>Precio del producto</th>  </tr>");
for(i = 0; i <canProduct; i++){
    document.write("<tr>  <td>"+ productos[i] +"</td>   <td>$ " +precios[i]+"</td></tr>");
}

document.write("</table>");