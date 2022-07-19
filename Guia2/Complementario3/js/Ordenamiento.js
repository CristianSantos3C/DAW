//Pedimos los datos     
var ordena = prompt("Escriba el orden que desee ya sea ascendente o descendente ", "");
    
    
switch (ordena) {

    case "ascendente": case "Ascendente": case "ASCENDENTE":
        do {
            //Arreglos
            var num = new Array();
            //variables
            var i, ente, temp, contenido="", tdelement;

            ente = prompt("Ingrese la cantidad de números enteros", "");
            if(isNaN(ente)){
                alert("Dato no válido...");
                continue;
                }
                //Verificar que el valor ingresado sea mayor o igual que 2
                if(ente < 2){
                alert("El arreglo debe ser de dimensión 2 o superior");
                }
                }while(isNaN(ente) || ente < 2);
            
                //Lazo para solicitar el ingreso de los elementos del arreglo
                for(i=0; i<ente; i++){
                num[i] = parseInt(prompt("Número " + (parseInt(i) + 1), ""));
                }
                //Obteniendo el elemento donde se cargará el contenido
                //generado dinámicamente desde JavaScript
                var datos = document.getElementById('datos');
                with(document){
                contenido += "<h1>Números ingresados</h1>\n";
                //Lazo para ingresar los elementos ingresados en el arreglo
                contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
                //Lazo que muestra los elementos del arreglo en una tabla
                for(i=0; i<ente; i++){
                    contenido += "\t\t\t<td class=\"Off\">" + num[i] + "</td>\n";
                }
                contenido += "\t\t</tr>\n\t</tbody>\n</table>\n<br />\n\n";
                //Lazo que ordena el arreglo mediante el método de la burbuja
                for(i=0; i<ente-1; i++){
                for(j=i+1; j<ente; j++){
                    if(num[i]>num[j]){
                        temp = num[j];
                        num[j] = num[i];
                        num[i] = temp;
                }
                }
                }
                contenido += "<h1>Números ordenados ascendentemente</h1>\n";
                contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
                for(i=0; i<ente; i++) {
                    contenido += "\t\t\t<td class=\"Off\">" + num[i] + "</td>\n";
                }
                contenido += "\t\t</tr>\n\t</tbody>\n</table>\n";
                }
                datos.innerHTML = contenido;
                //Capturando los elemento con clase Off
                tdelement = document.getElementsByClassName('Off');
                alert(tdelement.length);
                for(var i=0; i<tdelement.length; i++){
                    tdelement[i].onmouseover = function(){
                        this.className = 'On';
                }
                tdelement[i].onmouseout = function(){
                this.className = 'Off';
                }
            }
    break;

    case "descendente": case "Descendente": case "DESCENDENTE":
        do {
            var num = new Array();
            var i, ente, temp, contenido="", tdelement;

            ente = prompt("Cuántos números va a ingresar (valor entero):", "");
            if(isNaN(ente)){
                alert("El valor digitado no es numérico.");
                continue;
                }
                //Verificar que el valor ingresado sea mayor o igual que 2
                if(ente < 2){
                alert("El arreglo debe ser de dimensión 2 o superior");
                }
                }while(isNaN(ente) || ente < 2);
            
                //Lazo para solicitar el ingreso de los elementos del arreglo
                for(i=0; i<ente; i++){
                num[i] = parseInt(prompt("Número " + (parseInt(i) + 1), ""));
                }
                //Obteniendo el elemento donde se cargará el contenido
                //generado dinámicamente desde JavaScript
                var datos = document.getElementById('datos');
                with(document){
                contenido += "<h1>Números ingresados</h1>\n";
                //Lazo para ingresar los elementos ingresados en el arreglo
                contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
                //Lazo que muestra los elementos del arreglo en una tabla
                for(i=0; i<ente; i++){
                    contenido += "\t\t\t<td class=\"Off\">" + num[i] + "</td>\n";
                }
                contenido += "\t\t</tr>\n\t</tbody>\n</table>\n<br />\n\n";
                //Lazo que ordena el arreglo mediante el método de la burbuja
                for(i=0; i<ente-1; i++){
                for(j=i+1; j<ente; j++){
                    if(num[i]<num[j]){
                        temp = num[j];
                        num[j] = num[i];
                        num[i] = temp;
                }
                }
                }
                contenido += "<h1>Números ordenados descendentemente</h1>\n";
                contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
                for(i=0; i<ente; i++) {
                    contenido += "\t\t\t<td class=\"Off\">" + num[i] + "</td>\n";
                }
                contenido += "\t\t</tr>\n\t</tbody>\n</table>\n";
                }
                datos.innerHTML = contenido;
                //Capturando los elemento con clase Off
                tdelement = document.getElementsByClassName('Off');
                alert(tdelement.length);
                for(var i=0; i<tdelement.length; i++){
                    tdelement[i].onmouseover = function(){
                        this.className = 'On';
                }
                tdelement[i].onmouseout = function(){
                this.className = 'Off';
                }
            }
    break;            
}
