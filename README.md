# Simple Routing Single Page Application Vanilla JS.

Los pasos que se van a seguir para llevar a cabo la creación del Router del lado del cliente para SPA son:

#### Cargar la ruta
Identificar en donde nos encontramos en el sitio. (Carga inicial de la ruta).
  + loadInitialRoute()

#### Comparar la URL con una ruta
La URL a la que nos queremos mover, se debe comparar con las rutas que tenemos.
  + matchUrlToRoute()

#### Actualizar la URL en la barra de navegación
Para esto utilizaremos el método de HTML pushState. (windows.history.pushState).
  + loadRoute()

#### Actualizar el DOM con el nuevo contenido
Para esto vamos a usar innerHTML.
  + loadRoute()


### Métoos de history.
```javascript
// Paso atras en el historial
window.history.back();
//Paso adelante en el historial
window.history.forward();
//Nos permite movernos n páginas.
//n= -1 página atras
//n= 1 página adelante
//n= 0 recarga página actual
window.history.go(n);
//Número de páginas en el stack de historial
window.history.length;
//Estado actual del historial
history.state;
//Se encarga de añadir una entrada de nuestro historial.
pashState(estado, titulo, path);
//estado: es el objeto al cual esta asociado con la nueva entrada al historial creada.
//titulo: de momento es ignorado la mayoria de veces.
//path: es la ruta que será añadida a la nueva entrada de nuestro historial.
```