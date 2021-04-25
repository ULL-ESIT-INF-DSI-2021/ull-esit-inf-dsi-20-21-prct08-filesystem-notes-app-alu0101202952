# Informe Práctica 8: Aplicación de procesamiento de notas de texto


![nodejs](https://i.imgur.com/ZBZxI1Q.png)



╔═══════════════════════════════════════════════════════════════════╗

> - Autora: Andrea Calero Caro > [alu0101202952@ull.edu.es](alu0101202952@ull.edu.es)
> - Práctica 8: Aplicación de procesamiento de notas de texto
> - Asignatura: Desarrollo de Sistemas Informáticos
> - Universidad de La Laguna

╚═══════════════════════════════════════════════════════════════════╝



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## Índice


  - Objetivos
  - Paso previo: Aceptación de tarea de GitHub Classroom
  - Estructura básica de proyectos
  - Instalación, configuración Typedoc
  - Instalación, configuración Mocha y Chai
  - Instalación, configuración Coverage, Instanbul, Coveralls
  - Instalación dependencias yargs y chalk
  - Estructura programa 
    -   Prueba Unitaria
    -   Desarrollo del código
  - GitHubActions: workflows, Coveralls
  - Sonacloud: badges
  - Desarrollo del informe con GitHub Pages
  - Conclusiones
  - Bibliografía y/o Webgrafía
  
  



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## OBJETIVOS


En esta práctica, tendrá que implementar una aplicación de procesamiento de notas de texto. En concreto, la misma permitirá añadir, modificar, eliminar, listar y leer notas de un usuario concreto. Las notas se almacenarán como ficheros JSON en el sistema de ficheros de la máquina que ejecute la aplicación. Además, solo se podrá interactuar con la aplicación desde la línea de comandos. Nos iniciaremos con la herramienta yargs y chalk para ello

- **ENLACE A LA DOCUMENTACIÓN EN TYPEDOC**
> - [Informe documentación con Typedoc](http://127.0.0.1:5500/docs/index.html)



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## PASO PREVIO: ACEPTACIÓN DE TAREA DE GITHUB CLASSROOM


Antes de comenzar se nos requiere que aceptemos la tarea asignada en el GitHub Classroom:

![Asignación GitHub Classroom](https://i.imgur.com/R51p0mE.jpg)

Con ello ya podríamos trabajar en esta práctica.



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## ESTRUCTURA BÁSICA DE PROYECTOS


Lo primero sería estructurar el workspace de nuestra práctica, primero clonaremos el repositorio y lo iremos estructurando:

Se comienza modificando el **package.json** y creando el fichero de configuración **tsconfig.json** como se ha visto en prácticas anteriores.

Se quedaría el **package.json** tal que:

![packagejson](https://i.imgur.com/EwYa3A3.jpg)

Se crean el directorio `./src` y sus ejecutables .js en el directorio `./dist`, como hemos hecho en otras prácticas.

Manualmente, se crearía ambos directorios donde trabajaremos. 

También se necesita una compilación con control automático de cambios que se instalará con el comando `npm install --save-dev tsc-watch`

Por último en la organización de la estructura básica será la instalación del paquete **EsLint**, esto por si quisiéramos comprobar la sintaxis de nuestro código, encontrar y solucionar problemas en el mismo. Primero lo instalamos con el comando:

> `npm install -g eslint` 

Y lo inicializamos con `eslint --init` añadiéndole esto valores:

![Configuración Eslint](https://i.imgur.com/Xp8pzj7.jpg)

Luego modificar el fichero .eslint.

Además crearemos el fichero .gitignore donde excluiremos los siguientes directorios: 

![gitignore](https://i.imgur.com/DzHhrEB.jpg)

Tras la estructura básica se trabajará en el directorio `./src` donde se alojan los .ts correspondientes a cada clase que se me he planteado para la correcta organización del código de nodas de node.js manteniendo así los principios SOLID, además de preparar la documentación con typedoc y las pruebas unitarias (TDD) con Mocha y Chai.



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## INSTALACIÓN. CONFIGURACIÓN TYPEDOC

Para conocer más sobre esta herramienta consultar [Typedoc](https://typedoc.org/). Como ya desde la práctica 3 nos habíamos introducido a la herramienta **Typedoc**, solo queda seguir los mismos pasos mecánicos para esta práctica. Dicho informe creado en Typedoc hecho con los comentarios de los ejercicios de esta práctica se aloja en:

[Informe Typedoc Práctica 8](http://127.0.0.1:5500/docs/index.html) 

O también mirando en los apartados **Objetivos** y **Bibliografía/ webgrafía** de este informe.

Comenzamos con la instalación de typedoc.

Con ello podemos ver que se ha creado un directorio, que es como organizará typedoc la documentación que es por módulos, creando así `./node_modules`. Continuaremos con la configuración para poder usar Typedoc, primero si no se ha creado por defecto crear el **typedoc.json**, lo creamos y le añadimos la ruta de los ficheros a los que haremos el seguimiento de documentación. Y en el apartado `"out: "` pondremos el directorio donde se alojará toda esa documentación. Tras guardar dicha configuración se genereará automáticamente el directorio `./doc`.


Ya tendríamos la documentación en el directorio `./doc` para ejecutarla serviría con el comando ´npm run doc´ como antes especificamos. 
Esto genera documentación pero a partir de comentarios de TypeScript del estilo `/** */` con esta forma especificando la función, los parámetros, lo que devuelve, los snippet...

Esto guardaría esos comentarios en forma de página HTML para la documentación, tendríamos que ir al fichero `index.html` en el directorio de `./modules`, y con el click derecho pinchar sobre la opción de: __Open with Live Server__ y así generaría una página HTML con los comentarios en forma de documentación.

Finalizando así la documentación con Typedoc.



━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━






▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## INSTALACIÓN. CONFIGURACIÓN MOCHA Y CHAI

En este apartado como ya hemos anteriormentem, tendremos que volver a ejecutar dichos pasos para poder trabajar con Pruebas Unitarias con las herramientas **Mocha** y **Chai**. Primero instalaremos las dependencias y paquetes de Mocha y chai. 

A continuación con el comando `touch .mocharc.json` crearemos el fichero de configuración de la herramienta Mocha, este irá en la raíz de el proyecto y nos indicará utilidades para hacer TDD, es decir las pruebas unitarias. Para ello le indicaremos que las pruebas unitaras se alojarán en el directorio **./tests** y tendrán una terminología de **.spec.ts**. 

Como ha pasado con la herramienta **Typedoc** indicaremos en el **package.json** con qué comando, ejecutaremos la herramienta de mocha. Esta herramienta se ejecuta tal que `npm run [nombre_de_invocación]`, el nombre de invocación en nuestro caso será **test**, quedando el comando completo para ejecutar las pruebas unitarias de la forma: 

> `npm run test`

Este nombre de invocación es el que configuraremos en el package.json
Finalizando con todo esto la configuración de las herramientas necesarias para ejecutar los ejercicios mediante TDD. Quedando la estructura final con los ficheros además del .nojekyll.



━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## INSTALACIÓN, CONFIGURACIÓN COVERAGE, INSTANBUL, COVERALLS

Comenzaremos instalando los paquetes y dependencias de las herramientas asociadas a Instanbul, como es **nyc** y la de **coveralls**, como se han visto en prácticas anteriores y se enlazará el repositorio, tras hacerlo **público** a coveralls. Se copia el token del repo en un fichero creado .coveralls.yml, tal que:

![token](https://i.imgur.com/UfSW88y.jpg)


━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂

## INSTALACIÓN DEPENDENCIAS YARGS Y CHALK

Para plantear el ejercicio se necesita de dos herramientas para poder trabajar según lo estipulado, estas son **yargs** y **chalk**. Con yarg lo que se manejará es el tratado de comandos por línea de consola lso cuales están enfocados en esta práctica de node.js porque el usuario ha de poder añadir, modificar, borrar, lista y leer unas notas que se guardarán en un directorio correspondiente al usuario, por tanto cada usuario tendrá su propio directorio. Y con la herramienta chalk manejaremos los colores de los mensajes informativos y de las notas del usuario. Por ello primero debemos instalar las dependencias de yargs, tal que:

![yargs install](https://i.imgur.com/tMFOb9j.jpg)

Y las de chalk:

![chalk isntall](https://i.imgur.com/TrUgR9p.jpg)


A continuación a medida que presente el código iré explicando el cómo hago uso de dichas herramientas.


━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## ESTRUCTURA DEL PROGRAMA

La idea del programa es clasificar en tres ficheros .ts las dos clases que manejarán las notas: **class TodoItem** y la colección de notas: **class TodoCollection** y otro fichero manejará la herramienta yargs que permitirá a todos los usuarios que quieran, pero sin ser simultáneamente crear las notas, modificarlas, etc. que dicho fichero se llama **userTodo.ts**. Mostraré a continuación detalladamente cada fichero y la imprementación de cada método:

Esta es la estructura final del repositorio:

![estructura repo](https://i.imgur.com/DltNqIs.jpg)

Estructura de los ficheros y pruebas unitarias:

![test y codigo](https://i.imgur.com/s1ebXso.jpg)

Ante todo se ha tenido en cuenta el desarrollo de pruebas unitarias mediante TDD, lo cual se ha hecho primero las expectativas y luego el código, dando al final un resultado de Cubrimiento de:

![cubrimiento](https://i.imgur.com/67H6XU1.jpg)


━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### Fichero: todoItem.ts

El objetivo de este fichero es el manejo individual de los atributos que tiene las notas de cada usuario.
Para ello se quiso manejar en las expectativas los atributos esenciales de las notas, las cuales contienen setters y getters. Por ello primero se realizaron las pruebas correspondientes:

![test1](https://i.imgur.com/B4BGYK6.jpg)

Y con la idea de las pruebas a realizar se comenzó a desarrollar la clase que define cómo son los atributos que contiene una nota:

![codigo 1](https://i.imgur.com/B2NjlWS.jpg)

Cabe a mencionar que lo distinto es cómo quiero imprimir una nota individualmente y por ello implementé un método print de la clase que lo imprimiese como se deseaba:

![print todoitem](https://i.imgur.com/2Qbqnod.jpg)

Finalizando así la clase **TodoItem** con el manejo de los atributos de las notas

![expect final todoitem](https://i.imgur.com/woNR0PQ.jpg)


━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### Fichero: todoCollection.ts

El objetivo de este fichero es manejar la carga, guarda, añadido, eliminado y agrupación de la colección de notas que puede tener un usuario, es en este fichero donde además se establece la creación de una carpeta para cada usuario y si el usuario existe no crear más, sólo una y almacenar en dicho directorio cada nota. Para ello se realizaron las siguientes pruebas:

Las presentaré y explicaré por partes, puesto que mi obejtivo inicial es que los usuarios en vez de ser string pues tuvieran un número identificador con el que diferenciarlos pues me pareció más útil y manejable para otros caso:

- Parte 1 tests:

![pruebas1](https://i.imgur.com/qIBQf6C.jpg)

Las primeras espectativas se basó en el reconocimiento del usuario mediante getter y setter, además de la agrupación de las notas mediante los métodos **getTodoById** que me devuelve la nota para ese identificador o usuario, **getTodoItems**, la agrupación de todas las notas y **getTodoColor** devolver el color de la nota haciendo las pruebas unitarias sobre la herramienta chalk como se muestra.


- Parte 2 tests:

![pruebas 2](https://i.imgur.com/KH7SmzT.jpg)

En esta segunda parte muestro el tratamiento de las notas mediante los siguientes métodos: **addTodo**, **removeComplete**, **loadTodo** y **saveTodo**. Primera prueba se esperó crear una nueva nota y borrarla a continuación usando así los dos primero métodos antes nombrados. Luego el objetivo era la carga y guarda respectivamente de la nota a modo de crear así la nota y guardarla en un directorio particular y luego poder cargar de el la nota o notas.

Pasaríamos con ello luego a la creación respectivamente del código basándonos en las pruebas unitarias antes nombradas, **NOTA**: > hay que destacar que no se realizaron todas estas pruebas y luego el código sino que a cada método se le hizo por parte su prueba y su código, escalando progresivamente en el desarrollo del programa.

Entonces el código quedaría mostrado por partes:

- Parte 1 código:

![p1codigo](https://i.imgur.com/RHAGnTS.jpg)

En esta primera parte muestro como se contruiría esta colección de notas que vendría por un usuario y un TodoItem[] con las notas, esto manejándolo en un mapa donde será más manejable a la hora de acceder. Además localizamos el getter y setter del numero identificativo del usuario.

- Parte 2 código:

![p2codigo](https://i.imgur.com/rimP0Mh.jpg)

En esta segunda parte se muestra el método **addTodo** y este método es donde por priemra vez se usa una nota informativa de error con la herramienta **chalk**. Como se nos indicó, tenemos que con chalk manejar mensajes informativos, en verde con mensajes de información y en rojo con mensaje de error. En este caso uno de error que saltaría ante el caso de que ya se encuentre una nota con un título determinado. De resto lo que haría el método es recoger un nuevo título, contexto y color de la nota y añadirlos al usuario con ide correspondiente a nuestro mapa que contiene las otras notas que posee el usuario con dicha identificación.

- Parte 3 código:

![p3codigo](https://i.imgur.com/F51fpPW.jpg)

En esta parte tercer del código muestro los métodos **getTodoById** que me devuelve la nota para ese identificador o usuario, **getTodoItems**, la agrupación de todas las notas de ese usario y **getTodoColor** devolver el color de la nota usando un switch que permuta según el color de la nota con el correspondiente en chalk. Estas nos será de ayuda más adelante con el tratamiento de las notas.


- Parte 4 código:

![p4codigo](https://i.imgur.com/TAcCtXT.jpg)

Esta cuarta parte trataría de borrar dichas notas que se desease mediante el método **removeComplete**


- Parte 5 código:

![p5codigo](https://i.imgur.com/469eG22.jpg)

En esta última parte de la clase TodoCollection se encuentran los métodos más importantes para la carga y almacenamiento de las distintas notas, estos son **loadTodo** y **saveTodo**, estos métodos se encargarán de hacer la redirección y almacenamiento de las notas según se nos pide. Comienzo explicando **loadTodo**.

Este método carga las notas que se encuentran alojadas en el directorio específico que se le asigna al usuario y que toma de nombre el id del usuario. Con ello en una variable fileContent se guarda el contenido del buffer que tiene esa nota que ahora será un fichero almacenado en ese directorio explicado con una ruta determinada en la raiz de la estructura. 

Con el método **saveTodo** lo que se hace es crear un directorio para cada usuario, en caso de no existir, si existiese procedería a lo siguiente que es redireccionar las notas que se crean a él pero además dichas notas por defecto toman la extensión .txt y lo que se desea es que sean _.JSON_ y eso es lo que se implementa en dicho método.


Finalizando así la clase **TodoCollection** con el manejo de las distintas notas y las operaciones con ella que puede hacer el usuario:

![expect final todoitem](https://i.imgur.com/edLnDnf.jpg)

━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### Fichero: userTodo.ts

El objetivo de este fichero es el manejo de operaciones como añadir, modificar, eliminar, listar y leer las notas de los usuarios esto mediante el manejo de chalk, para mensajes informativos y yargs para el control de comandos por consola, para ello primero defino las dependencias que se necesitan y una declaración de variables que me serán de utilidad para poder trabajar.

![dependencias](https://i.imgur.com/ZKdkYmn.jpg)

Así pues la variable **todos** es un array vacío de la clase TodoItem que tiene las notas y **collection** es un objeto invocante de la clase TodoCollection.

Luego voy a explicar cada comando determinado en yarg y el comando completo para invocarlo en mi programa, así como en algunos casos un ejemplo de qué se ejecuta.


- Yarg: command "add"

![yargadd](https://i.imgur.com/H5XP2jM.jpg)

El comando yarg add contiene los siguientes argumentos que se pasan por consola que son: user, title, body y color en ese orden y la orden completa sería:

> `tsc
> node dist/userTodo.js add --user=1 --title="blueblue" --body=" some" --color="blue"`

Y el código mostraría un mensaje informativo en verde como que se ha creado correctamente:

![cod add](https://i.imgur.com/AnKmgdA.jpg)

Y entonces veríamos que se creaun nuevo directorio denominado **1**:

![dir user](https://i.imgur.com/o2g6Jc9.jpg)

Y si entramos dentro del directorio se vería el fichero .json con las especificaciones de la nota:

![file json](https://i.imgur.com/RtEbxYm.jpg)



Y así puediendo almacenar varios ficheros y varios usuario como se ve a continuación:

![codigo1](https://i.imgur.com/UK33pQP.jpg)

![cod2](https://i.imgur.com/BbRHVtN.jpg)

![cod 3](https://i.imgur.com/slBWBdY.jpg)


Demostrando así el corrector funcionamiento del comando add.

━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


- Yarg: command "modify"

El objetivo de este comando es modificar y comprobar con el **watchFile** de la librería fs que se ha modificado la nota viendo el tamaño anterior y el actual:

![modify](https://i.imgur.com/9cTmX7o.jpg)

El comando sería:

> `tsc
> node dist/userTodo.js modify --user=1 --title="blueblue" --body="some more" --color="blue"`

Sería tan simple comoponer en el body el nuevo texto que quieres poner y él yarg modify te calcula el nuevo tamaño de la nota con respecto al anterior:

![cod](https://i.imgur.com/XB43747.jpg)

El problema es que no funciona del todo.


━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Yarg: command "remove"

El objetivo de este es borrar la nota:

![yarg remove](https://i.imgur.com/q70UbBm.jpg)

El comando sería:

> `tsc
> node dist/userTodo.js remove --user=1 --title="blueblue"`

Mostrando:

![cod remove](https://i.imgur.com/nbRpZkA.jpg)

━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Yarg: command "list"

El objetivo de este es listar todas las notas de ese usuario:

![yarg list](https://i.imgur.com/R9ZYWce.jpg)

El comando sería:

> `tsc
> node dist/userTodo.js remove --user=1 --title="blueblue"`


Dando:

![list cod](https://i.imgur.com/SUesgXU.jpg)

Dando un error pues se deberían de mostrar de color las notas.


━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Yarg: command "read

El objetivo de este es leer una nota específica de ese usuario:

![yarg read](https://i.imgur.com/OifmKh3.jpg)

El comando sería:

> `tsc
> node dist/userTodo.js remove --user=1 --title="blueblue"`


Dando:
![yarg code read](https://i.imgur.com/j84uvtY.jpg)


━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


 
▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## GITHUB ACTIONS: WORKFLOWS, COVERALLS

En esta parte tenemos que hacer momentáneamente el repositorio público en github para poder engancharlo con GitHub Actions y Coveralls y así hacer el seguimiento continuo de github Actions y luego el de coveralls quedando:

Un cubrimiento de:

![cubrimiento](https://i.imgur.com/67H6XU1.jpg)

Copiando el token de coveralls por una parte en un fichero **.coveralls.yml**:

![token](https://i.imgur.com/JAAj8av.jpg)

Luego realizaríamos el seguimiento continuo por GitHub Actions creando un propio workflows para coveralls:

![coveralls workflow](https://i.imgur.com/SCmuLXh.jpg)


Y se vería el cubrimiento de coveralls dicho workflow en github action:

![actions coveralls](https://i.imgur.com/hfIJ15z.jpg)

Y se documenta en el fichero **README.md** los badges de GithubActions, Coveralls y SonarCloud respectivamente:

![seguimeitno]()


━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


 
▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## SONARCLOUD: BADGES

Se accede a la web de SonarCloud, buscamos el repositorio respectivo y se accede a él y copiaríamos el badge de **markdown** que isnertamos en el README.md como antes vimos.

![sonar](https://i.imgur.com/w3aZqch.jpg)

━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


 
▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## DESARROLLO DEL INFORME CON GITHUB PAGES


Tras finalizar la práctica se nos requiere un informe en con el formato de estilos de Markdown en **GitHub Pages**, para ello usamos la guía de estilos de Markdown en [Markdown guide](https://guides.github.com/features/mastering-markdown/).

Y así finalizamos esta práctica e informe redactado en el archivo **index.md**.





▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂

## CONCLUSIONES


Conclusión sobre la práctica e informe, aquí plantearé la dinámica de la práctica y posibles dudas que me hayan surgido y solucionado. La práctica en sí hubieron partes del código, métodos en concreto que me dificultaron a la hora de mostrar el resultado como quise, resulta una práctica intuitiva y útil en caso de querer tener una gestión simple de notas y yo he enfocado esta práctica a una idea de una aplicación de organización de tareas, como una agenda, y un problema que resultó al hacer público el repo para engancharlo al sonar cloud fue porque no se mostraba el workflow de sonar cloud para proceder a hacerlo y básicamente esa parte sé como hacerlo pero no se muestra. Por el resto no he tenido dudas y con lo de sonarcloud pediré tutoría o usaré Github Issues.

▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂

## BIBLIOGRAFÍA Y/O WEBGRAFÍA


- [Enunciado práctica](https://ull-esit-inf-dsi-2021.github.io/prct08-filesystem-notes-app/)
- [Informe documentación con Typedoc](http://127.0.0.1:5500/docs/index.html)
