let introduccion = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Introducción</h2>
	<p class="parrafo">El lenguaje de aplicación (AL) es un lenguaje de programación que se usa para escribir código para Microsoft Dynamics 365 Business Central. Con AL, puede manipular datos, y las declaraciones y funciones pueden leer, escribir y cambiar datos en la base de datos de Business Central.</p>
	<p class="parrafo">Es importante que aprenda los conceptos básicos de desarrollo antes de comenzar a crear nuevas extensiones de AL para Business Central. También necesita comprender cómo definir variables y cómo usarlas.</p>
	<p class="parrafo">
	En este módulo, aprenderá a trabajar con variables y descubrirá las colecciones y los tipos de datos intrínsecos. Además, aprenderá más sobre el uso de asignaciones y las diferentes expresiones.
	</p>
	<p class="parrafo">Si quiere escribir código de programación para Business Central para manipular datos, conectarse a servicios web externos o realizar cálculos complejos, debe usar el lenguaje de aplicación (AL). El lenguaje de aplicación es un lenguaje de programación para Business Central y está escrito en Visual Studio Code.</p>
	<p class="parrafo">El lenguaje de aplicación le permite controlar la implementación de objetos e interactuar con el usuario. Además, el lenguaje de aplicación contiene un conjunto de funciones predefinidas que puede usar cuando escribe código, pero también puede desarrollar sus propias funciones personalizadas.</p>
	<p class="parrafo">En AL, puede tener desencadenadores de eventos o de funciones. Cada tipo de objeto de AL (Table, Page, CodeUnit, Report, etc.) tiene desencadenadores de eventos y sus nombres comienzan por On; por ejemplo, OnInsert, OnModify o OnDelete. Estos desencadenadores se inician cuando se produce un evento. Los desencadenadores disponibles dependen del tipo de objeto.</p>
	<p class="parrafo">También puede escribir sus propias funciones personalizadas en un objeto, que estarán accesibles en el objeto a través de desencadenadores de función. Estas funciones personalizadas se denominan Procedimientos.</p>
	<p class="parrafo">Al igual que en otros lenguajes de programación, el AL permite crear variables que puede usar en funciones para calcular o almacenar datos temporales.</p>
	<p class="parrafo">Microsoft Dynamics 365 Business Central es una aplicación completa de administración 
	empresarial. Se puede utilizar para agilizar los procesos comerciales en su empresa, conectar 
	departamentos individuales en toda la empresa y mejorar las interacciones con los clientes.</p>
	<div class="img-content">
	<img src="img/panel.png" alt="">
	</div>
	`;
	cuerpo.innerHTML= contenido;
}

let instalacionBussines = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Innstalacion de Bussines Central</h2>
	<p class="parrafo">Lo primero que debes de realizar es descargar la última versión de Business Central</p>
	<p class="parrafo"><a href="https://www.microsoft.com/en-us/download/details.aspx?id=104062">Descargar</a></p><br>
	<p class="parrafo"><a href="https://yzhums.com/26288/">Ultimas Versiones aquí</a></p>
	<div class="img-content">
	<img src="img/install.PNG" alt="">
	</div>
	<p class="parrafo">Pulsaremos instalación personalizada y seleccionaremos todo para instalar.</p>
	<h3>Requisitos mínimos para utilizar Business Central</h3>
	<div class="img-content">
	<img src="img/requisitos.PNG" alt="">
	</div>
	<p class="parrafo">Antes de que acceda a Business Central en línea, le recomendamos que verifique que su equipo o dispositivo móvil cumple o supera los requisitos mínimos del sistema para el producto. En este artículo se especifican los requisitos.</p>
	<p class="parrafo"><a href="https://docs.microsoft.com/es-es/dynamics365/business-central/product-requirements">Ver requisitos</a></p>

	`;

	cuerpo.innerHTML= contenido;

}

let instalacionVisual = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Instalacion de  Visual Studio Code</h2>
	<p class="parrafo">Nos descargamos el editor  con el que trabajaremos.</p>
	<p class="parrafo"><a href="https://code.visualstudio.com/download">Descargar Visual</a></p><br>
	<div class="img-content">
	<img src="img/visual.PNG" alt="">
	</div>
	<br>
	<p class="parrafo">Una vez instalado debemos instalar las extencion para el lenguaje AL y WALDO</p><br>
	<div class="img-content">
	<img src="img/AL.PNG" alt="">
	</div><br>
	<p class="parrafo">Waldo Extensiones</p>
	<div class="img-content">
	<img src="img/waldo.PNG" alt="">
	</div>	

	`;

	cuerpo.innerHTML= contenido;
}

let instalacionDoker = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `

	<h2 class="Subtitulos">Instalacion de Docker</h2>
	<p class="parrafo">Docker es el proyecto de software más conocido de todos los que facilitan una tecnología de virtualización basada en contenedores. Esta plataforma de código abierto está constituida por tres componentes principales, estos son, el motor de Docker, las imágenes Docker y el Docker Hub. Ejecutar un contenedor es posible gracias al motor Docker (Docker engine) y a las imágenesDocker, que bien pueden ser creadas por el usuario u obtenerse en el repositorio Docker Hub.</p>
	<p class="parrafo"><a href="https://www.docker.com/products/docker-desktop">Descargar Docker</a></p>
	<div class="img-content">
	<img src="img/docker.PNG" alt="">
	</div><br>
	<p class="parrafo">Guia de intslación de Docker</p>
	<p class="parrafo"><b>Nota : </b><br>Para realizar todos los pasos de instalación debemos tener permisos de administrador del sistema operativo, sin ellos no podremos obtener una instalación correcta.</p>
	<p class="parrafo"><a href="https://docs.docker.com/desktop/install/windows-install">Guia Docker</a></p>
	<div class="img-content">
	<img src="img/dockerReq.PNG" alt="">
	</div><br>
	<p class="parrafo">Habilite la característica WSL 2 en Windows. Para obtener instrucciones detalladas, consulte la documentación de Microsoft.</p>
	<p class="parrafo"><a href="https://docs.microsoft.com/en-us/windows/wsl/install">Documentacion WSL 2</a></p>
	<div class="img-content">
	<img src="img/wsl.PNG" alt="">
	</div><br>
	<p class="parrafo">
	Es muy importante que quede bien configurado el  WSL 2 en Windows , así cuando levantemos Docker no nos de problemas.
	</p>


	`;

	cuerpo.innerHTML= contenido;

}
/*====================
	Levantar Docker
	=====================*/
let levantarDoker = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `


	<h2 class="Subtitulos">Trabajar con imágenes y contenedores de Docker</h2>
	<p class="parrafo">Docker es el entorno de contenedor de software líder para todas las plataformas. Permite a los usuarios empaquetar aplicaciones con todas sus dependencias y distribuir ese paquete a otras máquinas. Estas maquinas se llaman hosts y pueden ejecutar un paquete como un entorno completamente aislado que está virtualizado. Un paquete se llama imagen.</p>
	<p class="parrafo">Una imagen de Docker es una plantilla con el número mínimo de archivos del sistema operativo y de aplicación que necesita para ejecutarse. Todo lo que necesita para ejecutar una aplicación está en la imagen. Las imágenes de Docker se almacenan en un registro de Docker donde los usuarios pueden cargar y descargar imágenes. El registro más conocido es Docker Hub, pero para Business Central (y otros productos de Microsoft), Microsoft hospeda su propio registro.</p>
	<p class="parrafo">Cada imagen está construida sobre una imagen base que contiene los archivos del sistema operativo. Los contenedores de Windows tienen cuatro imágenes base:</p>
	<div class="contentList">
	<ul>
	<li><b>Windows Server Core: </b>admite aplicaciones .NET Framework</li>
	<li><b>Nano Server: </b>creado para aplicaciones .NET Core</li>
	<li><b>Windows: </b> proporciona el conjunto completo de API de Windows</li>
	<li><b>Windows IoT Core: </b>creado para aplicaciones de IoT</li>
	</ul>
	</div>
	<p class="parrafo">El tamaño de la imagen depende en gran medida del tamaño de la imagen base. Las imágenes de Business Central se basan en la imagen de Windows Server Core.</p>
	<p class="parrafo">Una imagen de Docker a menudo se confunde con una máquina virtual, pero es diferente. No necesita un sistema operativo completo para ejecutarse porque usa el kernel del sistema operativo host. Para obtener el mejor rendimiento y menos problemas, los archivos base de la imagen se ajustan a la versión de su sistema operativo. Además, una imagen no tiene GUI y no puede conectarse mediante el protocolo de escritorio remoto (RDP) a lo que esté en la imagen.</p>
	<p class="parrafo">Cuando ejecuta la imagen, en realidad crea una instancia de esa imagen. Como resultado, todos los cambios que se crean se almacenan sobre la imagen, por lo que esta no se modifica. Una instancia de una imagen se conoce como contenedor. Puede crear instancias de varios contenedores a partir de la misma imagen, y todos almacenarán sus cambios en diferentes archivos y no interferirán entre sí.</p>
	<p class="parrafo">Los componentes principales de Docker son el <b>motor de Docker</b> y el <b>cliente de Docker</b>. El motor es el proceso o aplicación que implementa el trabajo real, mientras que el cliente se utiliza para comunicarse con el motor. </p>
	<p class="parrafo">Un contenedor de Docker se puede utilizar para configurar un entorno de desarrollo o prueba únicamente; Microsoft no admite contenedores de Docker para Business Central en un entorno de producción. Puede eliminar y volver a crear rápidamente un contenedor de Docker, razón por la cual todos los contenedores de Business Central se crean con la base de datos de Cronus. Puede iniciar un contenedor, desarrollar y probar su característica en la base de datos de Cronus y detener su contenedor. El mejor enfoque es crear un script en PowerShell que pueda usar para crear rápidamente un contenedor y guardar ese script, en lugar de intentar guardar el contenedor.</p>
	<h3>Instalar Docker en Windows</h3>
	<p class="parrafo">Para comenzar con Docker, primero debe instalarlo en la máquina de desarrollo. El tipo de instalación depende del sistema operativo. La instalación es diferente en una máquina con Windows 10 que en una con Windows Server. Debe contar al menos con Windows 10 Professional o Enterprise con la Actualización de aniversario (versión 1607), Windows Server 2016 o Windows Server 2019.</p>
	<p class="parrafo">Los contenedores de Windows en Docker pueden ejecutarse en dos modos distintos de aislamiento de tiempo de ejecución:</p>
	<div class="contentList">
	<ul>
	<li>Aislamiento de procesos</li>
	<li>Aislamiento de Hyper-V</li>
	</ul>
	</div>
	<p class="parrafo">Las diferencias entre estos modos se tratarán más adelante en este módulo. Dado que los contenedores de Windows pueden ejecutarse en dos modos distintos, tendrá que instalar o activar Hyper-V en la máquina de desarrollo. En Windows 10, Hyper-V debe ejecutar Docker, aunque no utilice el aislamiento de Hyper-V. Para instalar Hyper-V, también debe utilizar otros comandos de PowerShell en máquinas con Windows 10 y Windows Server.</p>
	<p class="parrafo">En Windows, busque Windows PowerShell y luego ejecútelo como <b>administrador</b>.</p>
	<div class="img-content2">
	<img src="img/docker01.png" alt="">
	</div>
	<p class="parrafo">En Windows 10, ejecute el siguiente comando para instalar Hyper-V:</p>
	<p class="parrafo"><b>Enable-WindowsOptionalFeature -Online -FeatureName Hyper-V</b></p>
	<p class="parrafo">En Windows Server, puede utilizar el siguiente comando:</p>
	<p class="parrafo"><b>Install-WindowsFeature Hyper-V</b></p>
	<p class="parrafo">Es posible que desee ejecutar Docker en una máquina virtual en lugar de hacerlo en su máquina local. Es posible que se produzca esta situación, pero debe configurar la opción Virtualización anidada, que no se trata en este módulo. Para obtener más información, consulte <a href="https://learn.microsoft.com/es-es/virtualization/hyper-v-on-windows/user-guide/nested-virtualization">Ejecutar Hyper-V en una máquina virtual con la virtualización anidada</a> .</p>
	<p class="parrafo">Después de realizar la instalación de Hyper-V, puede instalar Docker.</p>
	<p class="parrafo">Esta sección comienza con Windows Server, donde puede utilizar el módulo PowerShell publicado por Microsoft denominado DockerMicrosoftProvider. Este módulo habilita la característica de contenedor de Windows e instala el cliente y el motor de Docker.</p>
	<p class="parrafo"><b>1.</b>Abra <b>Windows PowerShell</b> como administrador (sesión de PowerShell con privilegios elevados) y ejecute el siguiente comando:</p>
	<p class="parrafo"><b>Install-Module -Name DockerMsftProvider -Repository PSGallery -Force</b></p>
	<p class="parrafo">Escriba Y (Sí) para aceptar.</p>
	<p class="parrafo"><b>2.</b>Instale el paquete con el comando Install-Package y escriba A (Sí a todo).</p>
	<p class="parrafo"><b>Install-Package -Name Docker -ProviderName DockerMsftProvider</b></p>
	<p class="parrafo"><b>3.</b>Reinicie la máquina.</p>
	<p class="parrafo"><b>Restart-Computer -Force</b></p>
	<p class="parrafo">En máquinas con Windows 10, no puede utilizar el módulo DockerMicrosoftProvider. Debe descargar e instalar Docker Desktop (<a href="https://docs.docker.com/desktop/install/windows-install/">Docker Desktop para Windows</a> ). Para ello, debe crear una cuenta gratuita de Docker. Durante la instalación, puede establecer el tipo de contenedor predeterminado en Contenedores de Windows. También puede cambiar el tipo después de la instalación. Por tanto, puede hacer clic con el botón derecho en el elemento Docker de la bandeja del sistema Windows y luego seleccionar Cambiar a contenedores de Windows.</p>
	<div class="img-content2">
	<img src="img/docker02.png" alt="">
	</div>
	<p class="parrafo">Después de la instalación, puede probar si Docker se ha instalado correctamente. Docker, y otros contenedores específicos, no son nuevos e incluso se han utilizado de forma considerable en el mundo Linux. Por tanto, trabajar con Docker implica trabajar con comandos. También tiene a su disposición otras herramientas de la interfaz gráfica del usuario que puede utilizar para ejecutar los comandos. En este módulo utilizará los comandos de Docker con la consola PowerShell y una extensión en Visual Studio Code.</p>
	<p class="parrafo">Para probar la instalación, puede ejecutar el siguiente comando con el fin de recuperar la versión instalada.</p>
	<p class="parrafo"><b>docker version</b></p>
	<h3>Usar BcContainerHelper</h3>
	<p class="parrafo">BcContainerHelper es una colección de scripts y cmdlets de PowerShell creados por Microsoft para ayudarle, como desarrollador, a crear y administrar contenedores para el desarrollo con Business Central. BcContainerHelper también es útil en un entorno DevOps para configurar canalizaciones de compilación que utilizan contenedores. Estos scripts proporcionan una forma sencilla de llevar a cabo muchas de las acciones más utilizadas en un contenedor de Business Central.</p>
	<p class="parrafo">Antes de poder comenzar, debe instalar este módulo en PowerShell. Abra un comando de PowerShell y use el cmdlet install-module.</p>
	<p class="parrafo"><b>install-module bccontainerhelper -Force</b></p>
	<h3>Usar BcContainerHelper</h3>
	<p class="parrafo">BcContainerHelper es una colección de scripts y cmdlets de PowerShell creados por Microsoft para ayudarle, como desarrollador, a crear y administrar contenedores para el desarrollo con Business Central. <b>BcContainerHelper</b>  también es útil en un entorno DevOps para configurar canalizaciones de compilación que utilizan contenedores. Estos scripts proporcionan una forma sencilla de llevar a cabo muchas de las acciones más utilizadas en un contenedor de Business Central.</p>
	<p class="parrafo">Para crear un nuevo contenedor, puede utilizar el cmdlet <b>New-BcContainer</b> en lugar del comando <b>docker run</b> . En el script, el cmdlet usa el comando <b>docker run</b>, pero solo proporciona un acceso y uso más fáciles.</p>
	<p class="parrafo">Antes de poder comenzar, debe instalar este módulo en PowerShell. Abra un comando de PowerShell y use el cmdlet install-module.</p>
	<p class="parrafo"><b>install-module bccontainerhelper -Force</b></p>
	<h3>Crear un nuevo contenedor de Business Central</h3>
	<p class="parrafo">Para crear un nuevo contenedor de Business Central, puede utilizar el cmdlet <b>New-BcContainer</b> . También puede hacer algo aún más sencillo: usar el cmdlet <b>New-BcContainerWizard</b> . Con este asistente, crear un nuevo contenedor de Business Central es más fácil. Este cmdlet es parte de <b>BcContainerHelper</b>. Sin embargo, es posible que haya una versión más reciente del script disponible en línea. Le recomendamos que utilice este script para iniciar el asistente.</p>
	<p class="parrafo"><b>Invoke-Expression (New-Object System.Net.WebClient)DownloadString("http://aka.ms/bcdockerscript")</b></p>
	<div class="img-content2">
	<img src="img/docker03.png" alt="">
	</div>
	<p class="parrafo">El asistente le ayudará a lo largo de los distintos pasos:</p>
	<p class="parrafo"><b>1.</b>Aceptar la licencia del usuario final.</p>
	<p class="parrafo"><b>2.</b>Seleccionar un contenedor local o una VM de Azure.</p>
	<div class="img-content">
	<img src="img/docker04.png" alt="">
	</div>
	<p class="parrafo"><b>3.</b>Configurar la autenticación deseada.</p>
	<div class="img-content">
	<img src="img/docker05.png" alt="">
	</div>
	<p class="parrafo"><b>4.</b>Configurar un nombre para el contenedor.</p>
	<p class="parrafo"><b>5.</b>Seleccionar una versión.</p>
	<div class="img-content">
	<img src="img/docker06.png" alt="">
	</div>
	<p class="parrafo"><b>6.</b>Seleccionar un país(es = España).</p>
	<div class="img-content">
	<img src="img/docker07.png" alt="">
	</div>
	<p class="parrafo"><b>7.</b>nstalar el Test Toolkit.</p>
	<div class="img-content">
	<img src="img/docker08.png" alt="">
	</div>
	<p class="parrafo"><b>8.</b>Asignar usuarios del Plan Premium si lo tuvieramos .</p>
	<p class="parrafo"><b>9.</b>Crear usuarios de prueba.</p>
	<p class="parrafo"><b>10.</b>Cargar una licencia(sí disponemos de una, sino la opción sin licencia).</p>
	<div class="img-content">
	<img src="img/docker09.png" alt="">
	</div>
	<p class="parrafo"><b>11.</b>Utilizar la base de datos de demostración de Cronus o conectarse a una base de datos existente.</p>
	<div class="img-content">
	<img src="img/docker10.png" alt="">
	</div>
	<p class="parrafo"><b>12.</b>Configurar DNS.</p>
	<p class="parrafo"><b>13.</b>Seleccionar proceso o aislamiento de Hyper-V.</p>
	<div class="img-content">
	<img src="img/docker11.png" alt="">
	</div>
	<p class="parrafo"><b>14.</b>Seleccionar el límite de memoria.</p>
	<p class="parrafo"><b>15.</b>Guardar la imagen.</p>
	<div class="img-content">
	<img src="img/docker12.png" alt="">
	</div>
	<p class="parrafo"><b>16.</b>Crear un script de PowerShell.</p>
	<p class="parrafo">El resultado y el paso final del proceso del asistente implican la creación de un script de PowerShell. Este script de PowerShell usará el cmdlet <b>New-BcContainer</b>  para ejecutar el contenedor. Puede guardar este script para usarlo más adelante.</p>
	<div class="img-content">
	<img src="img/docker13.png" alt="">
	</div>
	<p class="parrafo">El script generado se puede utilizar siempre que quiera crear un nuevo contenedor. El script generado usa el cmdlet <b>Get-BcArtifactUrl</b> para recuperar un vínculo al artefacto de Business Central. Este artefacto contiene la versión especificada de Business Central.</p>
	<div class="img-content">
	<img src="img/docker14.png" alt="">
	</div>
	<p class="parrafo">El cmdlet tiene algunos parámetros obligatorios, como <b>containerName</b> y <b>accept_eula</b>. El cmdlet <b>New-BcContainer</b> ofrece la práctica opción de <b>-updateHosts</b>, que crea automáticamente una entrada en su archivo de host local para registrar el nombre del contenedor con la dirección IP del contenedor.</p>
	<p class="parrafo">De forma predeterminada, la opción creará un contenedor con autenticación de Windows y le solicitará sus credenciales. Si usa sus credenciales locales de Windows, habilitará el inicio de sesión único (SSO). Para utilizar un nombre de usuario y una contraseña, puede utilizar la opción <b>-auth NavUserPassword</b>.</p>
	<div class="img-content">
	<img src="img/docker15.png" alt="">
	</div>
	<p class="parrafo">Esta opción mostrará información útil en la ventana de salida que puede proporcionar a Microsoft cuando haga preguntas o informe de errores. Asegúrese de incluir siempre la salida completa.</p>
	<h3>Eliminar un contenedor de Business Central</h3>
	<p class="parrafo">Eliminar un contenedor es sencillo con el comando Remove-BcContainer.</p>
	<p class="parrafo"><b>Remove-BCContainer -containerName MyDevContainer</b></p>

	`;

	cuerpo.innerHTML= contenido;

}

/*================
Crear Nuevo Proyecto
=====================*/

let crearNuevoProyecto = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Crear un nuevo proyecto</h2>
	<p class="parrafo"> Para crear nuestro proyecto deberemos de poner en la paleta de comandos: “AL: Go!” con la combinacion de teclas Ctrl + Shift + P.</p>

	<div class="img-content">
	<img src="img/alGO.PNG" alt="">
	</div><br>
	<p class="parrafo">Seguido nos pedirá la ubicación donde deseamos almacenar el proyecto y el nombre del 
	proyecto.</p>
	<div class="img-content">
	<img src="img/ubica.PNG" alt="">
	</div><br>
	<p class="parrafo">Lo siguiente que debemos indicar es la versión que vamos a utilizar:</p>
	<p class="parrafo">Por último, nos indica si deseamos crearlo en el Cloud o en Local: seleccionamos local en 
	nuestro caso: “Your own server”.</p>
	<p class="parrafo">Una vez creado el proyecto deberemos de configurarlo, para ello iremos al archivo 
	“launch.json” y modificaremos los siguiente parámetros: en <b>Server : "http://bclocal" </b> contendra el nombre del localhost establecido en docker.</p>
	<div class="img-content">
	<img src="img/launch.PNG" alt="">
	</div><br>
	<div class="img-content">
	<img src="img/selecdocker.PNG" alt="">
	</div><br>
	<p class="parrafo">Descargaremos los <b>Symbols</b> con la combinación de teclas  Ctrl + Shift + P abrimos la paleta de comandos y escribimos <b> Al: Download Symbols</b> </p>
	<div class="img-content">
	<img src="img/symbols.PNG" alt="">
	</div><br>
	<p class="parrafo">Ya tendremos listo nuestro proyecto para empezar a trabajar.</p>
	<p><b>Nota : </b> En caso de tener errores al descargar los symbols lee el siguiente articulo para solucionar el problema.</p>
	<h3>Solución Error Symbols</h3>
	<iframe src="https://yzhums.com/1441/"  class="ifraWeb"></iframe>
	`;

	cuerpo.innerHTML= contenido;

}

/*Creacion de tablas*/

let crearTabla = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	
	<h2 class="Subtitulos">Creación de tablas</h2>
	<p class="parrafo">Para poder trabajar con variables y funciones, primero tiene que aprender algunos conceptos importantes. Los identificadores, la sintaxis y las variables son conceptos fundamentales de AL.</p>
	<p class="parrafo">Un identificador es el nombre de un elemento de programación, mientras que una variable es la ubicación de la memoria donde se almacenan los datos. Puede usar un identificador para dar un nombre a su variable para poder usarla.</p>
	<p class="parrafo">Sintaxis describe las reglas gramaticales para usar estos identificadores. La sintaxis de los identificadores se determina en función del lenguaje de la aplicación y algunas prácticas recomendadas.</p>
	<p class="parrafo">Existen algunas reglas gramaticales para usar identificadores. Dentro de un objeto, todos los identificadores tienen que ser únicos. Por lo tanto, dentro de un objeto, no puede declarar dos variables con el mismo identificador (o nombre).</p>

	<p class="parrafo">Cuando defina una variable mediante un identificador, es preferible que el primer carácter sea un guion bajo o una letra. Cuando utilice un carácter especial o un espacio en el identificador, debe poner el identificador entre comillas dobles.</p>
	<p class="parrafo">Aunque el lenguaje de la aplicación no distinga entre mayúsculas y minúsculas, no diferencia entre letras mayúsculas y minúsculas en los identificadores. Recomendamos que cree identificadores con PascalCase. PascalCase significa que comienza el nombre de la variable con una letra mayúscula. Si su nombre es una combinación de dos palabras, la segunda palabra también comienza con una letra mayúscula. Por ejemplo, si tiene una variable para almacenar el nombre de un cliente, puede usar CustomerName, que es un ejemplo de notación en PascalCase.</p>
	<p class="parrafo">La variable también debe tener un ámbito que defina dónde puede obtener acceso a la variable y usarla.

	Una variable se puede definir con un ámbito global o local. Si define el ámbito de la variable como global, la variable estará disponible en cualquier punto del objeto. Por lo tanto, en cada desencadenador, en cualquier lugar donde desee escribir declaraciones de código, tendrá esa variable disponible. Cuando el ámbito sea local, solo podrá obtener acceso a esa variable en el desencadenador específico del procedimiento donde se declaró.</p>
	<p class="parrafo">Una tabla se puede visualizar como matriz bidimensional formada por columnas y filas. Una tabla es una conjunto de datos relacionados que se mantienen en un formato estructurado de columnas y filas dentro de una base de datos. Dynamics 365 Business Central proporciona tablas para almacenar información de clientes, datos de proveedores, datos de artículos, etc.</p>
	<p class="parrafo">Una tabla consta de dos partes: los datos de la tabla y una descripción de la tabla. Los datos de la tabla contienen los registros reales con sus campos de datos. En la descripción de la tabla, puede definir qué tipo de tabla es, qué tipo de datos contendrá y cómo se comportarán.</p>
	<p class="parrafo">Por lo tanto, debe examinar las propiedades de la tabla y los desencadenadores de la tabla, ambos disponibles en el nivel de tabla. En las propiedades de la tabla, puede configurar el comportamiento de la tabla. En los desencadenadores de la tabla, tiene que escribir código que se ejecutará en ciertos momentos.</p>
	<p class="parrafo">La descripción de una tabla también incluye campos que definen qué tipo de datos puede contener la tabla. Un campo también tiene propiedades y desencadenadores. La descripción de la tabla también incluye información sobre las claves de la tabla. Una clave es necesaria para crear registros únicos, pero también para definir cómo puede ordenar los datos.</p>
	<div class="img-content2">
	<img src="img/table3.PNG" alt="">
	</div>
	<h3>Creando Tabla Persona</h3>
	<div class="img-content2">
	<img src="img/tabla1.PNG" alt="">
	</div><br>
	<h4>Videotutorial crear tablas</h4>
	<iframe class="ifra" src="https://www.youtube.com/embed/KScp95TOVh8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	<h3>Propiedades de Tablas</h3>
	<ul>
	<li><b>Caption: </b>Contiene el nombre de la tabla.</li>
	<li><b>Description:</b> Es la propiedad de uso para la documentación</li>
	<li><b>DataPerCompany: </b>: Este indica si solo es de esta empresa o común entre todas las 
	que tengamos.</li>
	<li><b>Permissions: </b> Esto nos permite otorgar permisos a los usuarios de la tabla.
	</li>
	<li><b>LookupPageId: </b> Esto nos permite indicar que Pagina es la predeterminada de la</li>
	<li><b>DrillDownPageID: </b> Esto nos permite definir qué página es la predeterminada para 
	profundizar en el detalle de soporte para los datos.
	</li>
	</ul>
	<h3>Tipos de datos fundamentales</h3>
	<p class="parrafo">Un tipo de datos fundamental no se puede dividir en subvalores y siempre tiene un valor.</p>
	<span><b>Numeric</b></span>
	<ul>
	<li>Action</li>
	<li>Integer</li>
	<li>BigInteger</li>
	<li>Decimal</li>
	<li>Option</li>
	<li>Char</li>
	<li>Byte</li>
	<li>Duration</li>
	</ul>
	<span><b>String</b></span>
	<ul>
	<li>Text</li>
	<li>Code</li>
	</ul>
	<span><b>Boolean</b></span>
	<ul>
	<li>True</li>
	<li>False</li>
	</ul>
	<span><b>Fechas</b></span>
	<ul>
	<li>Date</li>
	<li>Time</li>
	<li>DateTime</li>
	</ul>
	<p class="parrafo">El tipo de datos <b>Option</b> es un tipo de enumerador de base cero y, por lo tanto, permite convertir valores de opción en enteros. Por esa razón, un tipo de datos Option es un tipo de datos numérico, ya que los valores de opción se almacenan como números enteros.</p>
	<p class="parrafo">El tipo de datos <b>Char</b> está formado por un solo carácter y, por lo tanto, también se almacena como un número. Está usando el número de caracteres ASCII. Solo puede tener 256 caracteres, por lo que un carácter solo puede tener un valor de 0 a 255.</p>
	<p class="parrafo">El tipo de datos <b>Action</b> no está disponible como un tipo de datos para un campo de una tabla, pero se usa para especificar la acción que el usuario realiza en una página. Los métodos PAGE.RUNMODAL y RUNMODAL (que se abordarán más adelante en esta ruta de aprendizaje) devuelven un valor del tipo de datos Action. Están disponibles las siguientes acciones:</p>
	<p><b>Ok</b></p>
	<p><b>Cancel</b></p>
	<p><b>LookupOk</b></p>
	<p><b>LookupCancel</b></p>
	<p><b>Yes</b></p>
	<p><b>No</b></p>
	<p><b>RunObject</b></p>
	<p><b>RunSystem</b></p>
	<h3>Tipos de datos complejos</h3>
	<p class="parrafo">Puede usar tipos de datos complejos si desea trabajar con registros en tablas, imágenes (mapas de bits) o archivos de disco. Estos tipos de datos pueden almacenar múltiples valores. El lenguaje de la aplicación contiene numerosos tipos de datos Complejos:</p>
	<p><b>BigText</b></p>
	<p><b>BLOB</b></p>
	<p><b>CodeUnit</b></p>
	<p><b>DateFormula</b></p>
	<p><b>Dialog</b></p>
	<p><b>File</b></p>
	<p><b>Fieldref</b></p>
	<p><b>GUID</b></p>
	<p><b>InStream y OutStream</b></p>
	<p><b>KeyRef</b></p>
	<p><b>Page</b></p>
	<p><b>Query</b></p>
	<p><b>Record</b></p>
	<p><b>RecordID</b></p>
	<p><b>RecordRef</b></p>
	<p><b>Report</b></p>
	<p><b>System</b></p>
	<p><b>TableFilter</b></p>
	<p><b>Variant</b></p>
	<p><b>List y Dictionary</b></p>
	<p class="parrafo">El tipo de datos <b>Record</b> hace referencia a registros de una tabla específica. Los registros contienen varios valores, ya que incluyen múltiples campos.</p>
	<h3>Ejemplo Tabla Persona</h3>
	<p class="parrafo">En la tabla persona podemos ver la estructura de un tabla con sus campos.</p>
	<div class="img-content2">
	<img src="img/tablaPersona.PNG" alt="">
	</div>
	<h2>Identificar los diferentes tipos de tablas</h2>
	<p class="parrafo">Business Central contiene diferentes tipos de tablas según su implementación técnica y su uso funcional.</p>
	<h3>Tipos de tabla por implementación técnica</h3>
	<div class="contentList">  
	<ul>
	<li><b>Tablas de bases de datos:</b> a mayoría de las tablas de la base de datos son tablas de base de datos, que son el tipo de tabla que normalmente se ve. Usted tendrá derechos de lectura y escritura en las tablas de la base de datos. Las tablas de clientes, las tablas de proveedores y las tablas de artículos son ejemplos de este tipo de tabla.</li>
	<li><b>Tablas del sistema:</b> las tablas del sistema son únicas, porque estas tablas y sus datos son necesarios para que el sistema funcione. Las tablas del sistema se guardan en la base de datos y tendrán números de objetos superiores a dos millones. La tabla de la empresa, la tabla de perfiles y la tabla de permisos son ejemplos de este tipo de tabla.</li>
	<li><b>Tablas virtuales:</b> puede encontrar la definición de una tabla virtual en la base de datos, pero los datos se crean en tiempo de ejecución, por lo que no se almacenan en la base de datos. En su calidad de desarrollador no tendrá derecho de escritura en las tablas virtuales. La tabla de sesión activa es un ejemplo.</li>
	<li><b>Tablas temporales:</b> una tabla temporal solo existe en la memoria de un cliente. Conserva una imagen o una copia de otra tabla de base de datos. No tiene datos y se usa con frecuencia en la publicación de rutinas e informes de documentos.</li>
	</ul>
	</div>
	<h3>Tipos de tabla por uso funcional</h3>
	<p class="parrafo">Business Central distingue entre nueve tipos de tablas con un uso funcional diferente. En el siguiente diagrama se muestra un ejemplo para ayudarlo a hacerse una idea de cómo funcionan estas tablas en una solución.</p>
	<div class="img-content2">
	<img src="img/table4.PNG" alt="">
	</div>
	<p class="parrafo">Es importante saber en qué se diferencian los distintos tipos de tablas. Al crear tablas nuevas, tiene que determinar el tipo de tabla que necesita y seguir la misma estructura que las tablas ya existentes. La tabla que elija se ajustará a su solución en la aplicación Business Central. Como resultado, todos comprenderán su solución y será más fácil actualizarla más adelante.</p>
	<div class="contentList">
	<ul>
	<li><b>Tablas principales: </b> las tablas principales contienen información sobre las entidades más importantes del módulo, los temas principales de su área funcional. Las tablas de clientes, de proveedores y de artículos son ejemplos de estas tablas. </li>
	<li><b>Tablas complementarias: </b> probablemente, enriquecerá los datos maestros con datos complementarios. Puede almacenar datos relacionados con países, como el código y la descripción del país, en las tablas complementarias. Estas tablas no son tan importantes como las tablas principales, pero almacenan información adicional sobre los datos maestros. Las tablas de divisas o de idiomas son un ejemplo de este tipo de tabla.

	</li>
	<li><b>Tablas de configuración: </b>  cuando cree una solución, probablemente necesite la configuración de un determinado módulo. Puede establecer la configuración de los datos y organizarlos en una tabla de configuración. Las tablas de configuración de contabilidad y la tabla de configuración de ventas y cobros son ejemplos de este tipo de tabla.</li>
	<li><b>Tablas de registro: </b> este tipo de tabla funciona como una tabla de contenido para su tabla contable correspondiente. Registra tipos de información históricos y transaccionales. La tabla de registro de movimientos de contabilidad y la de registro de movimientos de producto son ejemplos de este tipo de tabla.</li>
	<li><b>Tablas secundarias: </b> esta tablas contienen una combinación de información de la tabla principal y las tablas complementarias, como, por ejemplo, información de artículos y proveedores. La tabla de productos proveedor y la tabla de A/F Libro amortización son ejemplos de este tipo de tabla.

	</li>
	<li><b>Tablas de libro mayor: </b> en las tablas de libro mayor, puede encontrar la información transaccional del dominio funcional relacionado. Las tablas de movimientos de cliente y las de movimiento de productos son ejemplos de este tipo de tabla.</li>
	<li><b>Tablas del diario: </b> todas las transacciones se reservan por medio de diarios, por lo que es la tabla de entrada de transacciones principal. La tabla del diario de compras y la tabla del diario de productos son ejemplos de este tipo de tabla.</li>
	<li><b>Tablas de documentos: </b> al introducir transacciones, necesitará documentos como, por ejemplo, una oferta de venta o un pedido de venta. Las tablas de documentos son tablas transaccionales secundarias. Estas tablas siempre se componen de dos tablas: una tabla con la información del encabezado y una tabla con los detalles de la línea. Por ejemplo, la tabla de encabezado de venta y la tabla de línea de venta son ejemplos de este tipo de tabla. Estas tablas contienen información como, por ejemplo, pedidos de venta u ofertas de venta.</li>
	<li><b>Tablas de historial de documentos: </b> las tablas de historial de documentos son versiones históricas de las tablas de documentos. Cuando publica documentos de las tablas de documentos, pasan por una tabla de diario y luego acaban en una tabla de historial de documentos. La tabla de cabecera de facturas de ventas y la tabla de línea de factura de ventas son ejemplos de tablas de historial de documentos.</li>
	</ul>
	</div>

	`;

	cuerpo.innerHTML= contenido;

}
/*=============
	Paginas
	===============*/
let paginas = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Páginas</h2>
	<p class="parrafo">En Dynamics 365 Business Central, las páginas son la forma principal de mostrar y organizar datos. Las páginas son el objeto principal con el que un usuario interactuará y tendrán un comportamiento diferente según el tipo de página que elija. Las páginas se diseñan independientemente del dispositivo en el que se van a representar y, de esta manera, la misma página se puede reutilizar en teléfonos, tabletas y clientes web.</p>
	<p class="parrafo">Una página se define en el código como un objeto compuesto de controles, propiedades, acciones y disparadores. También puede usar Designer en Dynamics 365 Business Central para crear una página.</p>
	<p class="parrafo">Ya sea que esté creando una nueva página o ampliando una página existente, agregará un nuevo archivo .al a su proyecto y describirá el <a href="https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-page-object">objeto de la página</a> en el código. La diferencia es básicamente que para una página nueva, debe definir la página completa, mientras que al modificar una página existente, solo agrega la funcionalidad adicional o modifica la existente.</p>
	<p class="parrafo">La estructura de una página es jerárquica y se divide en tres secciones. El primer bloque contiene metadatos para la página general. Los metadatos describen el tipo de página y la tabla de origen de la que muestra datos. La siguiente sección; el diseño, describe las partes visuales de la página. La sección final detalla las acciones que se publican en la página.</p>
	<p class="parrafo">Además, la página tiene propiedades. Las propiedades funcionan de la misma manera para las páginas que para otros objetos de Dynamics 365 Business Central. Para obtener más información, consulte <a href="https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/properties/devenv-page-property-overview">Propiedades de la página</a> .</p>
	<h3>Metadatos de la página</h3>
	<p class="parrafo">Para un nuevo objeto de página, debe especificar al menos el tipo de página; <b>PageTypey</b> la fuente de datos;<b>SourceTable</b> de la pagina Y también puede establecer otros metadatos al comienzo de la declaración del objeto de la página.</p>
	<div class="img-content">
	<img src="img/page01.PNG" alt="">
	</div>
	<h3>tipos de paginas</h3>
	<p class="parrafo">El tipo de página que elija depende de la tarea de la aplicación que desea admitir, el contenido que desea mostrar y cómo desea mostrarlo. La página Área de trabajo es la página principal o de inicio y ayuda al usuario a concentrarse en las tareas y actividades diarias más importantes. Otros tipos de páginas, como las páginas de listas o las páginas de tarjetas, suelen estar vinculadas desde la página de inicio para facilitar el acceso. Están disponibles los siguientes tipos de página:</p>
	<table class="tabla1">
	<tr><th>Tipo de página</th><th>Descripción</th></tr>
	<tr>
	<td><b>RoleCenters</b></td>
	<td>La página Centro de funciones es la página principal.</td>
	</tr>
	<tr>
	<td><b>Card</b></td>
	<td>Una página de Tarjeta se usa para ver y editar un registro o entidad de una tabla.</td>
	</tr>
	<tr>
	<td><b>CardPart</b></td>
	<td>Una página de parte de la tarjeta se usa en un cuadro informativo en otra página para ver o editar campos adicionales asociados con una entidad seleccionada en la página.</td>
	</tr>
	<tr>
	<td><b>Lista</b></td>
	<td>Una página de lista muestra el contenido de una tabla en formato de lista.</td>
	</tr>
	<tr>
	<td><b>ListPart</b></td>
	<td>Similar a una página de Lista, una página de Elemento de Lista muestra el contenido de una tabla en un formato de lista. La diferencia es que utiliza la página de artículo Lista como otra página en un Cuadro informativo o como parte de la página Área de trabajo.</td>
	</tr>
	<tr>
	<td><b>List Plus</b></td>
	<td>Una página de ListPlus muestra el contenido de una tabla en formato de lista. La diferencia con una página de Lista es que el contenido principal es un ListPart, no un grupo repetidor como lo tiene la Lista.</td>
	</tr>
	<tr>
	<td><b>Document</b></td>
	<td>Una página de documento generalmente consta de dos páginas separadas combinadas en una, con una página anidada en la otra. Una página de documento es adecuada para usar cuando desea mostrar datos de dos tablas que están vinculadas entre sí.</td>
	</tr>
	<tr>
	<td><b>WorkSheet</b></td>
	<td>El tipo de página Hoja de trabajo se utiliza para crear hojas de trabajo o páginas de tareas de diario.</td>
	</tr>
	<tr>
	<td><b>ConfirmationDialog</b></td>
	<td>La página ConfirmationDialog se utiliza para mostrar mensajes o solicitar a los usuarios una confirmación antes de que continúen con la tarea en la que están trabajando.</td>
	</tr>
	<tr>
	<td><b>NavigatePage</b></td>
	<td>Utilice un tipo de página Navegar para crear un asistente que lleve al usuario a través de una secuencia de pasos para completar una tarea.</td>
	</tr>
	<tr>
	<td><b>StandardDialog</b></td>
	<td>StandardDialog es un tipo de página simple que usa cuando los usuarios solo necesitan ingresar datos y no necesitan realizar otras acciones desde la página</td>
	</tr>
	<tr>
	<td><b>HeadlinePart</b></td>
	<td>Utilice un tipo de página HeadlinePart para mostrar un conjunto de títulos cambiantes en un área de trabajo.</td>
	</tr>
	<tr>
	<td><b>API</b></td>
	<td>  Las páginas de este tipo se utilizan para generar puntos finales de servicios web y no se pueden mostrar en la interfaz de usuario. Este tipo de página no debe ampliarse mediante la creación de un objeto de extensión de página. En su lugar, cree una nueva API agregando un objeto de página.</td>
	</tr>
	</table>
	<br>
	<h3>Diseño de página</h3>
	<p class="parrafo">El diseño de página del objeto de página determina cómo se verá la página y se especifica en la layoutsección. layoutcontiene una o más areasecciones que definen una determinada ubicación en la página .</p>
	<p class="parrafo">Puedes elegir entre las siguientes areacategorías:</p>
	<table class="tabla1">
	<tr>
	<th>tipo de área</th>
	<th>Colocación en la página</th>
	</tr>
	<tr>
	<td><b>Content</b></td>
	<td>El área de contenido muestra el contenido de, por ejemplo, un RoleCenter o una página de lista.</td>
	</tr>
	<tr>
	<td><b>FactBoxes</b></td>
	<td>  El área FactBox se coloca en el extremo derecho de una página.
	Muestra contenido relacionado con un elemento en la página de contenido principal.</td>
	</tr>
	<tr>
	<td><b>RoleCenter</b></td>
	<td>El RoleCenter es la página principal de la aplicación y se utiliza para acceder rápidamente a la información y las tareas más utilizadas.</td>
	</tr>
	</table>
	<br>
	<h3>Acciones de páginas</h3>
	<p class="parrafo">Todas las páginas contienen elementos de menú y controles de navegación llamados acciones. En Dynamics 365 Business Central, las acciones se muestran en la parte superior de cada página en la cinta o en el panel de navegación. La <b>actions</b> sección de la página describe lo que el usuario puede hacer en una página y debe diseñarse teniendo en cuenta la necesidad de soporte del proceso del usuario.</p>
	<p class="parrafo">Las acciones se pueden mostrar en la cinta de todas las páginas y agruparse en las siguientes pestañas de acciones:</p>
	<div class="contentList">
	<ul>
	<li>Homes</li>
	<li>Ations</li>
	<li>Navigate</li>
	<li>Report</li>
	</ul>
	</div>

	<p class="parrafo">La creación de acciones puede incluir agregar botones/señales de actividad a una página, configurar elementos de navegación en un centro de funciones de usuario o agregar informes a una página. Para saber cómo puede permitir que los usuarios localicen rápidamente las acciones que desean usar.</p>

	`;

	cuerpo.innerHTML= contenido;

}

/*================
Crear page card
==================*/
let crearPageCard = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Creación de Un Page Card</h2>
	<p class="parrafo">Las páginas de tarjetas se diseñan cuando desea permitir que los usuarios vean, creen y modifiquen registros (datos maestros y de referencia) en una tabla, como un cliente, un proveedor o un artículo.</p>
	<p class="parrafo"><b>Ejemplo del Código de una Page Card</b></p>
	<div class="img-content2">
	<img src="img/PageCard.PNG" alt="">
	</div><br>
	<p class="parrafo">En el ejemplo vemos como podemos crear una page card, que nos servirá para visualizar los campos de la tabla persona.</p>
	<h4>Videotutorial como crear una Page Card.</h4>
	<iframe class="ifra" src="https://www.youtube.com/embed/d4fNXF9YSic" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

	`;

	cuerpo.innerHTML= contenido;

}
/*Page Card*/
let crearPageList = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Creación de Una Page List</h2>
	<p class="parrafo">Desde la página de lista, los usuarios pueden seleccionar un registro y abrirlo en la página de tarjeta o documento para verlo y editarlo.</p>
	<div class="img-content2">
	<img src="img/pagelist.PNG" alt="">
	</div><br>
	<p class="parrafo">En el siguiente ejemplo , hemos creado una Page List, se pasa como referencia el nombre de la tabla, en este caso seria  <b>"SourceTable = Persona"</b> 
	y también  referenciamos hacia la Page Card <br><b>"CardPageId = PersonaCard".</b> </p>
	<p class="parrafo">Para Ver PResionamos CRTL + F5 y nos mostrara la interfaz de la página persona. </p>
	<div class="img-content2">
	<img src="img/pagelist.PNG" alt="">
	</div><br>
	<p class="parrafo">Presionamos en nuevo y agregamos un registro a la base de datos persona</p>
	<div class="img-content2">
	<img src="img/pagelist3.PNG" alt="">
	</div>
	<p class="parrafo">Agregamos más clientes asi tenemos más registros.</p>
	<div class="img-content">
	<img src="img/pagelist4.PNG" alt="">
	</div>
	<p class="parrafo">En las páginas de las tarjetas podemos reorganizar u ocultar el contenido como deseen los clientes obtener los datos.</p>

	`;

	cuerpo.innerHTML= contenido;

}
/*=========================
	Crear Page Document
===================================*/
let crearPageDocument = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Páginas de Documentos</h2>
	<p class="parrafo">Diseñe páginas de documentos cuando desee representar una transacción u otro evento importante en el ámbito empresarial. Las páginas de documentos son la contraparte computarizada de los documentos en papel, como cotizaciones, facturas, pedidos, etc. Como tal, las páginas de documentos a menudo tienen requisitos de seguimiento de auditoría o de flujo de trabajo asociados.</p>
	<p class="parrafo">A continuación se muestran ejemplos de composiciones de páginas de documentos que muestran cómo se divide el espacio. Las piezas se pueden combinar de más formas que las que se muestran aquí para adaptarse a diferentes escenarios.</p>
	<h3>Diseños de documentos</h3>
	<table class="tabla1">
	<tr>
	<th>Ejemplo1</th>
	<th>Ejemplo2</th>
	<th>Ejemplo3</th>
	</tr>
	<tr>
	<td>Las secciones se colocan verticalmente de arriba a abajo de la página. Las líneas ListPart vienen después de la(s) sección(es) de encabezado.</td>
	<td>Se pueden incrustar múltiples ListParts. En este caso, al primer ListPart se le permite la mayor cantidad de espacio.</td>
	<td>Cuando no se incrusta ningún ListPart, el diseño del documento sigue exactamente el diseño de la tarjeta.</td>
	</tr>
	<tr>
	<td>
	<img src="img/pagedoc.png" alt="">
	</td>
	<td>
	<img src="img/pagedoc2.png" alt="">
	</td>
	<td>
	<img src="img/pagedoc3.png" alt="">
	</td>
	</tr>
	</table><br>
	<h3>La página de documento bien diseñada</h3>
	<p class="parrafo">Desde la perspectiva del usuario, las siguientes son cualidades de una  página de documento bien diseñada:</p>

	<div class="contentList">
	<ul>
	<li>Utiliza el tipo de página <b>Card</b> si la página representa datos maestros o de referencia, o es una página de configuración.</li>
	<li>Utiliza el tipo de página <b>Document</b> si la página representa una transacción u otro evento importante en el ámbito empresarial.</li>
	<li>Tiene un título de página que identifica claramente los datos representados en la página.</li>
	<li>Está optimizado para una descripción general al organizar los datos en fichas desplegables y marcar los campos relevantes como <b>Promoted</b> o <b>Additional</b>.</li>
	<li>Favorece los campos de encabezado y otros campos importantes colocándolos en una ficha desplegable titulada General que aparecen primero en la página.</li>
	<li>Tiene uno o dos cuadros informativos para brindar estadísticas relevantes y acceso rápido a documentos relacionados.</li>
	<li>Para las páginas del documento, una ficha desplegable titulada Líneas ocupa el segundo lugar en la página con las líneas del documento.</li>
	</ul>
	</div>
	<h3>Definición general</h3>
	<p class="parrafo">Una página de tarjeta se define por una página que tiene la <a href="https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/properties/devenv-pagetype-property">propiedad PageType</a> establecida en Card. Para ver un ejemplo de código simple de una página de lista, consulte <a href="https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-simple-card-page-example"> Ejemplo de página de tarjeta simple</a>.</p>
	<p class="parrafo">Una página de documento se define por una página que tiene la propiedad PageType establecida en <b>Document</b>. Una página de documento también incluye un <b>part() </b>control que incrusta otra página en la página del documento. Por lo general, esto muestra elementos de línea de la transacción o evento asociado.</p>
	<h3>Estructura</h3>
	<p class="parrafo">La siguiente figura ilustra el diseño general y los elementos de una página de tarjeta y una página de documento.</p>
	<div class="img-content2"><img src="img/pagedoc4.png" alt=""></div>
	<p class="parrafo">La siguiente tabla describe los elementos de la página.</p>

	<table class="tabla1">
	<tr>
	<th>No.</th>
	<th>Área</th>
	<th>Descripción</th>
	<th>Directrices de uso</th>
	</tr>
	<tr>
	<td>1</td>
	<td>Acciones del sistema</td>
	<td>Los íconos brindan a los usuarios la capacidad de editar el registro, crear un nuevo registro y eliminar el registro actual. Las acciones solo están activas si la propiedad Editable se establece en true.</td>
	<td>Estas acciones aparecen en todas las páginas; no puede eliminarlos ni agregar otras acciones.</td>    
	</tr>
	<tr>
	<td>2</td>
	<td>Barra de acciones</td>
	<td>La barra de acción proporciona enlaces a otras páginas, informes y unidades de código. La barra de acción se define mediante un actionscontrol en el código de la página y las acciones individuales se definen mediante un action()control.
	Las acciones se pueden mostrar en tres menús estándar en la barra de acciones, Acciones , Navegar e Informe , o en una categoría promocionada. Puede organizar las acciones en los menús del nivel raíz o agruparlas en un submenú.
	Los objetos a los que se dirigen estos enlaces se abrirán en una ventana separada.
	Para obtener más información, consulte Agregar acciones a una página .</td>
	<td>Organice la barra de acciones para que contenga las acciones que los usuarios necesitan para completar una tarea, como publicar, ejecutar un informe y abrir otra página con información relacionada. Coloque la acción más importante en el nivel raíz y agrupe las acciones estrechamente relacionadas en un submenú.</td>

	</tr>
	<tr>
	<td>3</td>
	<td>Acciones promocionadas</td>
	<td> promocionadas  Las acciones promocionadas son acciones que se definen en el area()control como cualquier otra acción en el código, pero están configuradas para mostrarse en un nivel superior en la barra de acciones, en una categoría específica que defina. Promueve acciones estableciendo varias Promotedpropiedades relacionadas en los action()controles.
	Para obtener más información, consulte Acciones promocionadas .</td>
	<td>Promocione una acción para darle la ubicación más destacada para que los usuarios la encuentren fácilmente. Las acciones que se promocionan aparecen primero en la barra de acciones. Las acciones que no se promocionan están disponibles para el usuario seleccionando Más opciones en la barra de acciones.</td>
	</tr>
	<tr>
	<td>4</td>
	<td>Ficha rápida</td>
	<td>Una ficha desplegable es un grupo de campos bajo un encabezado común. Una ficha desplegable se define mediante un group()control en el archivo area(content). Puede tener varias fichas desplegables en la página. En el cliente, las fichas desplegables aparecen en el mismo orden en que están definidas en el código de la página.</td>
	<td>Las fichas rápidas permiten a los usuarios encontrar información clave en una página al mostrar los datos en grupos separados.
	</td>
	</tr>
	<tr>
	<td>5</td>
	<td>Campo</td>
	<td>Un campo en la tabla de origen. Usted especifica un campo agregando un field()control. El orden de los field()controles en el código determina el orden de visualización en el cliente.</td>
	<td> De forma predeterminada, los campos de una ficha desplegable se distribuyen automáticamente entre dos columnas. Sin embargo, puede cambiar la forma en que se organizan los campos mediante los controles grid()y de una ficha desplegable. fixed()Para obtener más información, consulte Disposición de campos en fichas desplegables .</td>
	</tr>
	<tr>
	<td>6</td>
	<td>Mostrar más/menos</td>
	<td>Permite a los usuarios alternar más o menos campos en la ficha desplegable. Especifique qué campos se muestran u ocultan en la ficha desplegable de forma predeterminada estableciendo la Importancepropiedad en los campos. También puede usar la propiedad para mostrar campos en el encabezado de la ficha desplegable cuando la ficha desplegable está contraída.
	Para obtener más información, consulte Propiedad de importancia .</td>
	<td>Utilice esta propiedad para controlar la cantidad de información que es visible en una página. Es útil en páginas que tienen una gran cantidad de campos, donde puede mostrar los campos más importantes de forma predeterminada, pero los usuarios tienen la opción de mostrar más según sea necesario.</td> 
	</tr>
	<tr>
	<td>7</td>
	<td>  subpágina</td>
	<td>  Muestra los elementos de línea que están asociados con la transacción. Esta área está definida por un part(Name; Page)control que identifica la página a mostrar. En este caso, la página es una listpartpágina que muestra elementos de línea para el pedido de ventas.</td>
	<td></td>
	</tr>
	<tr>
	<td>8</td>
	<td>Barra de acción de la subpágina</td>
	<td>Muestra acciones que están definidas en la subpágina. Estas acciones se definen de la misma manera que las de la barra de acciones de la página principal.</td>
	<td></td>
	</tr>
	<tr>
	<td>9</td>
	<td>cuadros informativos</td>
	<td>Los cuadros informativos se encuentran en el extremo derecho de una página y se dividen en una o más partes que se organizan verticalmente. Cada parte puede mostrar contenido diferente, incluidas otras páginas, gráficos y partes del sistema, como Microsoft Outlook, Notes y Record Links.
	Para obtener más información, consulte Agregar un cuadro informativo a una página .</td>
	<td>Por lo general, puede usar un cuadro informativo para mostrar información relacionada con un elemento en la página de contenido principal. Por ejemplo, en una página que muestra una lista de órdenes de venta, puede usar un cuadro informativo para mostrar el historial de ventas de un cliente de venta para una orden de venta seleccionada en la lista.</td>
	</tr>
	</table><br>
	<p class="parrafo">En el siguiente ejemplo vemos como crear una <b>Page Document</b>.</p>
	<div class="img-content2"><img src="img/pagedoc5.PNG" alt=""></div>
	<p class="parrafo">Nuestra <b>Page Document</b> será sobre una Crud que podrá realizar las cuatro operaciones, mostrar cliente, crear, actualizar y eliminar.</p>
	<div class="img-content2"><img src="img/pagedoc6.PNG" alt=""></div>
	<p class="parrafo">En la aplicación vemos nuestra <b>Page Document</b>, en la imagen traemos los datos del cliente 1000.</p>
	<div class="img-content2"><img src="img/pagedoc7.PNG" alt=""></div>
	<p class="parrafo"><b>Nota</b> <br>
	El tipo de página Documento permite que el primer ListPart de la página use espacio vertical adicional antes de mostrar una barra de desplazamiento. Esto permite más espacio para mostrar las líneas del documento sin que el usuario tenga que desplazarse.
	</p>


	`;

	cuerpo.innerHTML= contenido;

}


/*========================
Crear una codeunist
==============================*/

let crearCodeunnits = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `

	<h2 class="Subtitulos">Creación de Una Codeunits</h2>
	<p class="parrafo">
	Una Cedeunits es un contenedor para que se llamen fragmentos de código AL desde otros objetos. Estas
	los fragmentos de código se denominan procedimientos. Los procedimientos se pueden llamar desde cualquiera de los otros
	Tipos de objetos de Business Central que pueden contener código AL. Las unidades de código también se pueden exponer
	(publicado) como servicios web. Esto permite que los procedimientos dentro de una Codeunits publicada sean
	invocado por llamadas externas o locales.
	</p>
	<p class="parrafo">
	Las codeunits se adaptan estructuralmente para contener solo procedimientos. Aun cuando los procedimientos
	podrían colocarse en otros tipos de objetos, los otros tipos de objetos tienen superestructuras que se relacionan
	a su uso principal diseñado, como páginas e informes.</p>
	<p class="parrafo">Las codeunits solo como contenedores para los procedimientos codificados AL. No tienen auxiliar
	procedimientos, ningún método de interacción directa con el usuario y ningún procesamiento predefinido. Incluso si nosotros
	están creando solo uno o dos procedimientos y están estrechamente relacionados con la actividad principal
	de un objeto en particular, y si estos procedimientos son necesarios tanto desde el interior como desde el exterior de
	el informe, la mejor práctica sigue siendo ubicar los procedimientos en una codeunits.</p>
	<p class="parrafo">Las <b>Codeunits</b> son en realidad archivos donde podremos guardar nuestras funciones o procesos, que luego podremos utilizarlos desde otras partes de nuestro proyecto.</p>
	
	<div class="img-content2">
	<img src="img/codeunit1.PNG" alt="">
	</div><br>
	<p class="parrafo">En el siguiente ejemplo vemos como es la sintaxis de una codeunits.</p>
	<p class="parrafo">Para acceder al resto de funciones, puede usar el desencadenador OnAction.</p>
	<iframe class="ifra" src="https://www.youtube.com/embed/yQ2JUpKCfs0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

	`;

	cuerpo.innerHTML= contenido;

}

/*========================
	Codeunit 80 ventas
=========================*/
let codeunit80 = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	
	<h2 class="Subtitulos">Codeunit 80 Ventas</h2>
	<p class="parrafo">La codeunit posee una gran cantidad de líneas de código que se utiliza para las ventas en Business Central, en la siguiente tabla veremos algunas de las funciones que están declaradas, así podemos hacernos una idea del funcionamiento de la misma.</p>
	<h3>Ver Código fuente Codeunit 80</h3>
	<p class="parrafo">Para ver el código seguiremos los siguientes pasos: </p>
	<ul>
	<li><b>1.</b> Abrimos nuestro editor de código, en este caso es <b>Visual Studio Code</b> en el proyecto donde estemos trabajando.</li>
	<li><b>2.</b> Elejiremos <b>.alpackages</b></li>
	<li><b>3.</b> Elejimos la opción <b>Microsoft_Base_Application_20......</b></li>
	<li><b>4.</b> Buscaremos en <b>Codeunits</b>, elejiremos la <b>80 Sales-Post</b><br>
	<div class="img-content2"><img src="img/code80-1.PNG" alt=""></div>
	</li>
	<li><b>5.</b> Dentro de la Codeunit <b>80 "Sales-Post"</b> veremos las diferentes funciones y variables usadas para el proceso de compras. <br><br>
	<div class="img-content2"><img src="img/code80-2.PNG" alt=""></div>
	</li>
	</ul>

	<p class="parrafo">Tabla de contenido  de la codeunit</p>
	<table class="tabla1">
	<tr>
	<th>Procedure</th>
	<th>Descripción</th>
	</tr>
	<tr>
	<td>local procedure GetZeroSalesLineRecID(SalesHeader: Record "Sales Header"; var SalesLineRecID: RecordId)</td>
	<td>Obtenes las líneas de ventas</td>
	</tr>
	<tr>
	<td> local procedure SetupDisableAggregateTableUpdate(var SalesHeader: Record "Sales Header"; var DisableAggregateTableUpdate: Codeunit "Disable Aggregate Table Update")</td>
	<td>Configurar deshabilitar actualización de tablas agregadas</td>
	</tr>
	<tr>
	<td>local procedure EnableAggregateTableUpdate(var DisableAggregateTableUpdate: Codeunit "Disable Aggregate Table Update")</td>
	<td>Habilitar actualización de tablas agregadas</td>
	</tr>
	<tr>
	<td> local procedure ModifyTempLine(var TempSalesLineLocal: Record "Sales Line" temporary)</td>
	<td>Modificar líneas temporales</td>
	</tr>
	<tr>
	<td> procedure RefreshTempLines(SalesHeader: Record "Sales Header"; var TempSalesLine: Record "Sales Line" temporary)</td>
	<td>Actualizar líneas temporales</td>
	</tr>
	<tr>
	<td>procedure ResetTempLines(var TempSalesLineLocal: Record "Sales Line" temporary)</td>
	<td>Resetear líneas temporales</td>
	</tr>
	<tr>
	<td>local procedure CalcInvoice(SalesHeader: Record "Sales Header") NewInvoice: Boolean</td>
	<td>Calcular Facturas</td>
	</tr>
	<tr>
	<td>local procedure CalcInvDiscount(var SalesHeader: Record "Sales Header")</td>
	<td>Calcular descuentos</td>
	</tr>
	<tr>
	<td>local procedure RestoreSalesHeader(var SalesHeader: Record "Sales Header"; SalesHeaderCopy: Record "Sales Header")</td>
	<td>Restaurar encabezados de ventas</td>
	</tr>
	<tr>
	<td>local procedure HandleArchiveUnpostedOrder(var SalesHeader: Record "Sales Header")</td>
	<td>Editar ventas no registradas</td>
	</tr>
	<tr>
	<td> procedure CheckSalesDocument(var SalesHeader: Record "Sales Header")</td>
	<td>Verifiar documentos de ventas</td>
	</tr>
	<tr>
	<td> local procedure CheckSalesLines(var SalesHeader: Record "Sales Header")</td>
	<td>Comprobar líneas de ventas</td>
	</tr>
	<tr>
	<td>local procedure CheckTotalInvoiceAmount(SalesHeader: Record "Sales Header")</td>
	<td>Verificar total de la factura</td>
	</tr>
	<tr>
	<td> procedure PrepareCheckDocument(var SalesHeader: Record "Sales Header")</td>
	<td>Preparar documento de ventas</td>
	</tr>
	<tr>
	<td>local procedure PostSalesLine(var SalesHeader: Record "Sales Header"; var SalesLine: Record "Sales Line"; var EverythingInvoiced: Boolean; var TempVATAmountLine: Record "VAT Amount Line" temporary; var TempVATAmountLineRemainder: Record "VAT Amount Line" temporary; var TempItemLedgEntryNotInvoiced: Record "Item Ledger Entry" temporary; HasATOShippedNotInvoiced: Boolean; var TempDropShptPostBuffer: Record "Drop Shpt. Post. Buffer" temporary; var ICGenJnlLineNo: Integer; var TempServiceItem2: Record "Service Item" temporary; var TempServiceItemComp2: Record "Service Item Component" temporary)</td>
	<td>Publicar líneas de ventas</td>
	</tr>
	<tr>
	<td>local procedure CheckGLAccountDirectPosting(SalesLine: Record "Sales Line")</td>
	<td>Verificación del estado de las cuentas</td>
	</tr>
	<tr>
	<td>local procedure PostItemTrackingLine(SalesHeader: Record "Sales Header"; SalesLine: Record "Sales Line"; var TempItemLedgEntryNotInvoiced: Record "Item Ledger Entry" temporary; HasATOShippedNotInvoiced: Boolean)</td>
	<td>Publicar línea de seguiminento artículo</td>
	</tr>
	<tr>
	<td> local procedure CalcItemJnlAmountsFromQtyToBeInvoiced(var ItemJnlLine: Record "Item Journal Line"; SalesHeader: Record "Sales Header"; SalesLine: Record "Sales Line"; QtyToBeInvoiced: Decimal)</td>
	<td>Calcular cantidad e importes a facturar</td>
	</tr>
	<tr>
	<td> local procedure CalcItemJnlAmountsFromQtyToBeShipped(var ItemJnlLine: Record "Item Journal Line"; SalesHeader: Record "Sales Header"; SalesLine: Record "Sales Line"; QtyToBeShipped: Decimal)</td>
	<td>Calacular cantidad de artículos a enviar</td>
	</tr>
	<tr>
	<td> procedure GetGlobalTempTrackingSpecificationInv(var NewTempTrackingSpecificationInv: Record "Tracking Specification" temporary)</td>
	<td>Obtener datos globales de inventario</td>
	</tr>
	<tr>
	<td>local procedure PostItemChargePerOrder(SalesHeader: Record "Sales Header"; SalesLine: Record "Sales Line"; ItemJnlLine2: Record "Item Journal Line"; ItemChargeSalesLine: Record "Sales Line")</td>
	<td>Publicar cargo  de artículo por pedido</td>
	</tr>
	<tr>
	<td>local procedure CheckItemChargePerShpt(var SalesShptLine: Record "Sales Shipment Line"; var SalesLine: Record "Sales Line")</td>
	<td>Verificar envio de articulo</td>
	</tr>
	<tr>
	<td>procedure PostDistributeItemCharge(SalesHeader: Record "Sales Header"; SalesLine: Record "Sales Line"; var TempItemLedgEntry: Record "Item Ledger Entry" temporary; NonDistrQuantity: Decimal; NonDistrQtyToAssign: Decimal; NonDistrAmountToAssign: Decimal)</td>
	<td>Publicar importe de artículo distribuido</td>
	</tr>
	<tr>
	<td> procedure ReleaseSalesDocument(var SalesHeader: Record "Sales Header")</td>
	<td>Liberar documentos de ventas</td>
	</tr>
	<tr>
	<td> local procedure CheckBlockedPostingGroups(SalesLine: Record "Sales Line")</td>
	<td>Comprobar grupos de publicación bloqueados</td>
	</tr>
	<tr>
	<td>local procedure CheckItemTrackingQuantity(var SalesLine: Record "Sales Line"; var SalesHeader: Record "Sales Header")</td>
	<td>Verificar las cantidades de seguimientos de artículos</td>
	</tr>
	<tr>
	<td>   local procedure TestSalesLineItemCharge(SalesLine: Record "Sales Line")</td>
	<td>Prueba de articulos de ventas cargados</td>
	</tr>
	<tr>
	<td>local procedure TestSalesLineFixedAsset(SalesLine: Record "Sales Line")</td>
	<td>Prueba de activos fijos de ventas</td>
	</tr>
	<tr>
	<td> local procedure TestSalesLineOthers(SalesLine: Record "Sales Line")</td>
	<td>Pruebas de actualización de líneas de ventas</td>
	</tr>
	<tr>
	<td> local procedure UpdateReceiveAndCheckIfInvPutawayExists(var SalesHeader: Record "Sales Header")</td>
	<td>Actualización de existencias de artículos recibidos</td>
	</tr>
	<tr>
	<td> local procedure UpdateShipAndCheckIfInvPickExists(var SalesHeader: Record "Sales Header")</td>
	<td>Actualizar envios y verificar si existe una selección del inventario </td>
	</tr>
	<tr>
	<td>local procedure UpdateShippingNo(var SalesHeader: Record "Sales Header"; var NoSeriesMgt: Codeunit NoSeriesManagement; var ModifyHeader: Boolean)</td>
	<td>Actualizar ID de envios</td>
	</tr>
	<tr>
	<td>local procedure UpdateReturnReceiptNo(var SalesHeader: Record "Sales Header"; var NoSeriesMgt: Codeunit NoSeriesManagement; var ModifyHeader: Boolean)</td>
	<td>Actualizar ID de artículos devueltos</td> 
	</tr>
	<tr>
	<td> local procedure ResetPostingNoSeriesFromSetup(var PostingNoSeries: Code[20]; SetupNoSeries: Code[20])</td>
	<td>Restablecer  publicación sin ID desde la configuración</td>
	</tr>
	<tr>
	<td> local procedure UpdateAssociatedPurchaseOrder(var TempDropShptPostBuffer: Record "Drop Shpt. Post. Buffer" temporary; SalesHeader: Record "Sales Header")</td>
	<td>Actualizar orden de compra asociado</td>
	</tr>
	<tr>
	<td> procedure UpdateAssocLines(var SalesOrderLine: Record "Sales Line")</td>
	<td>Actualizar líneas asociadas</td>
	</tr>
	<tr>
	<td>local procedure UpdateAssosOrderPostingNos(SalesHeader: Record "Sales Header") DropShipment: Boolean</td>
	<td>Actualizar ID de publicaciones de pedidos asociados</td>
	</tr>
	<tr>
	<td> local procedure CheckAndUpdateAssocOrderPostingDate(var PurchaseHeader: Record "Purchase Header"; PostingDate: Date)</td>
	<td>Verificar y actualizar la fecha de publicación del pedido asociado</td>
	</tr>
	<tr>
	<td> local procedure UpdateAfterPosting(SalesHeader: Record "Sales Header")</td>
	<td>Actualizar despues de publicar</td>
	</tr>
	<tr>
	<td>local procedure UpdateLastPostingNos(var SalesHeader: Record "Sales Header")</td>
	<td>Actualizar ID ultimos publicados</td>
	</tr>
	<tr>
	<td>local procedure UpdateSalesLineBeforePost(SalesHeader: Record "Sales Header"; var SalesLine: Record "Sales Line")</td>
	<td>Actualizar líneas de ventas antes de pùblicar</td>
	</tr>
	<tr>
	<td> local procedure InitSalesLineQtyToInvoice(var SalesHeader: Record "Sales Header"; var SalesLine: Record "Sales Line")</td>
	<td>Cantidad Inicial a facturar en ventas</td>
	</tr>
	<tr>
	<td>local procedure DeleteAfterPosting(var SalesHeader: Record "Sales Header"; EverythingInvoiced: Boolean)</td>
	<td>Eliminar después de publicar</td>
	</tr>
	<tr>
	<td>local procedure FinalizePosting(var SalesHeader: Record "Sales Header"; EverythingInvoiced: Boolean; var TempDropShptPostBuffer: Record "Drop Shpt. Post. Buffer" temporary)</td>
	<td>Finalizar publicación</td>
	</tr>
	<tr>
	<td>local procedure DeleteApprovalEntries(var SalesHeader: Record "Sales Header")</td>
	<td>Borrar entradas aprobadas</td>
	</tr>
	<tr>
	<td> procedure GetCurrency(CurrencyCode: Code[10])</td>
	<td>Obtener monedas</td>
	</tr>
	<tr>
	<td>local procedure DivideAmountInitLineAmountAndLineDiscountAmount(SalesHeader: Record "Sales Header"; var SalesLine: Record "Sales Line"; SalesLineQty: Decimal; IncludePrepayments: Boolean)</td>
	<td>Antes de dividr importe descuento, incluir pagos anticipados</td>
	</tr>
	<tr>
	<td>local procedure RoundAmount(SalesHeader: Record "Sales Header"; var SalesLine: Record "Sales Line"; SalesLineQty: Decimal)</td>
	<td>Redondeo de Monto</td>
	</tr>
	<tr>
	<td>local procedure InvoiceRounding(SalesHeader: Record "Sales Header"; var SalesLine: Record "Sales Line"; UseTempData: Boolean; BiggestLineNo: Integer)</td>
	<td>Redondeo de facturas</td>
	</tr>
	<tr>
	<td>procedure GetSalesLinesTemp(var SalesHeader: Record "Sales Header"; var NewSalesLine: Record "Sales Line"; var OldSalesLine: Record "Sales Line"; QtyType: Option General,Invoicing,Shipping)</td>
	<td>Obtener líneas de ventas temporales</td>
	</tr>
	<tr>
	<td> procedure SumSalesLines(var NewSalesHeader: Record "Sales Header"; QtyType: Option General,Invoicing,Shipping; var NewTotalSalesLine: Record "Sales Line"; var NewTotalSalesLineLCY: Record "Sales Line"; var VATAmount: Decimal; var VATAmountText: Text[30]; var ProfitLCY: Decimal; var ProfitPct: Decimal; var TotalAdjCostLCY: Decimal)</td>
	<td>Sumatoria de líneas de ventas</td>
	</tr>
	<tr>
	<td>local procedure GetSalesLineQty(SalesHeader: Record "Sales Header"; SalesLine: Record "Sales Line"; QtyType: Option General,Invoicing,Shipping) SalesLineQty: Decimal;</td>
	<td>Obtener cantidad de líneas de ventas</td>
	</tr>
	<tr>
	<td>procedure UpdateBlanketOrderLine(SalesLine: Record "Sales Line"; Ship: Boolean; Receive: Boolean; Invoice: Boolean)</td>
	<td>Actualizar líneas de pedidos abiertos</td>
	</tr>
	<tr>
	<td> procedure UpdateSalesOrderChargeAssgnt(SalesOrderInvLine: Record "Sales Line"; SalesOrderLine: Record "Sales Line")</td>
	<td>Actualizar asignación de cargo de orden de venta</td>
	</tr>
	<tr>
	<td>local procedure UpdateSalesChargeAssgntLines(SalesOrderLine: Record "Sales Line"; ApplToDocType: Enum "Sales Applies-to Document Type"; ApplToDocNo: Code[20]; ApplToDocLineNo: Integer; QtyToHandle: Decimal)</td>
	<td>Actualizar líneas de asignación de cargos de ventas</td>
	</tr>
	<tr>
	<td> local procedure CopyAndCheckItemCharge(SalesHeader: Record "Sales Header")</td>
	<td>Copiar y verificar el cargo por artículo</td>
	</tr>
	<tr>
	<td>local procedure CopyItemChargeForSalesLine(var TempItemChargeAssignmentSales: Record "Item Charge Assignment (Sales)" temporary; SalesLine: Record "Sales Line")</td>
	<td>Copiar cargo de artículo para línea de ventas</td>
	</tr>
	<tr>
	<td>local procedure AdjustQtyToAssignForSalesLine(var TempSalesLine: Record "Sales Line" temporary)</td>
	<td>Ajustar cantidad para asignar para línea de ventas</td>
	</tr>
	<tr>
	<td> local procedure ClearItemChargeAssgntFilter()</td>
	<td>Limpiar filtros de asignación de cargo de articulo</td>
	</tr>
	<tr>
	<td> local procedure CalcQtyToInvoice(QtyToHandle: Decimal; QtyToInvoice: Decimal): Decimal</td>
	<td>Calcular cantidad a facturar</td>
	</tr>
	<tr>
	<td> local procedure CheckWarehouse(var TempItemSalesLine: Record "Sales Line" temporary)</td>
	<td>Comprobación de almacén</td>
	</tr>
	<tr>
	<td>local procedure GetShowErrorOnWarehouseCheck(var SalesLine: Record "Sales Line"; Location: Record Location) ShowError: Boolean;</td>
	<td>Mostrar errores obtenidos en verificación de alamacen</td>
	</tr>
	<tr>
	<td> local procedure GetLocation(LocationCode: Code[10])</td>
	<td>Obtener ubicación</td>
	</tr>
	<tr>
	<td>local procedure InsertShptEntryRelation(SalesHeader: Record "Sales Header"; var SalesShptLine: Record "Sales Shipment Line") ItemShptEntryNo: Integer</td>
	<td>Insertar relación de entrada de envio</td>
	</tr>
	<tr>
	<td>local procedure InsertReturnEntryRelation(var ReturnRcptLine: Record "Return Receipt Line") EntryNo: Integer</td>
	<td>Insertar relación de entrada de devolución</td>
	</tr>
	<tr>
	<td> procedure CheckTrackingSpecification(SalesHeader: Record "Sales Header"; var TempItemSalesLine: Record "Sales Line" temporary)</td>
	<td>Comprobar las especificaciones de seguimiento</td>
	</tr>
	<tr>
	<td>local procedure GetTrackingQuantities(SalesLine: Record "Sales Line"): Decimal</td>
	<td>Obtener seguimiento de cantidades</td>
	</tr>
	<tr>
	<td>local procedure SaveInvoiceSpecification(var TempInvoicingSpecification: Record "Tracking Specification" temporary)</td>
	<td>Guardar especificación de factura</td>
	</tr>
	<tr>
	<td>local procedure InsertTrackingSpecification(SalesHeader: Record "Sales Header")</td>
	<td>Insertar especificaciones de seguimiento</td>
	</tr>
	<tr>
	<td>procedure InsertValueEntryRelation()</td>
	<td>Insertar entradad de valor</td>
	</tr>
	<tr>
	<td>procedure TransferReservToItemJnlLine(var SalesOrderLine: Record "Sales Line"; var ItemJnlLine: Record "Item Journal Line"; QtyToBeShippedBase: Decimal; var TempTrackingSpecification2: Record "Tracking Specification" temporary; var CheckApplFromItemEntry: Boolean)</td>
	<td>reserva de transferencía desde la línea compra</td>
	</tr>
	<tr>
	<td>procedure CreatePrepaymentLines(SalesHeader: Record "Sales Header"; CompleteFunctionality: Boolean)</td>
	<td>Crear líneas de prepago</td>
	</tr>
	<tr>
	<td>procedure InsertedPrepmtVATBaseToDeduct(SalesHeader: Record "Sales Header"; SalesLine: Record "Sales Line"; PrepmtLineNo: Integer; TotalPrepmtAmtToDeduct: Decimal): Decimal</td>
	<td>Deducir Base de IVA anticipada insertada</td>
	</tr>
	<tr>
	<td>procedure DividePrepmtAmountLCY(var PrepmtSalesLine: Record "Sales Line"; SalesHeader: Record "Sales Header")</td>
	<td>Dividir  el monto de anticipo LCY</td>
	</tr>
	<tr>
	<td>local procedure UpdatePrepmtAmountInvBuf(PrepmtSalesLineNo: Integer; CurrencyFactor: Decimal)</td>
	<td>Actualizar buf de inversión de cantidad prepago</td>
	</tr>
	<tr>
	<td>local procedure AdjustPrepmtAmountLCY(SalesHeader: Record "Sales Header"; var PrepmtSalesLine: Record "Sales Line")</td>
	<td>Ajustar la cantidad prepago LCY</td>
	</tr>
	<tr>
	<td>local procedure CalcPrepmtRoundingAmounts(var PrepmtSalesLineBuf: Record "Sales Line"; SalesLine: Record "Sales Line"; DeductionFactor: Decimal; var TotalRoundingAmount: array[2] of Decimal)</td>
	<td>Pre calcular importes de redondeo</td>
	</tr>
	<tr>
	<td> local procedure GetInvoicePostingParameters()</td>
	<td>Obtener paramatros de contabilización de facturas</td>
	</tr>
	<tr>
	<td>local procedure UpdateSalesHeader(var CustLedgerEntry: Record "Cust. Ledger Entry")</td>
	<td>Actualizar encabezados de ventas</td>
	</tr>
	<tr>
	<td>local procedure MakeSalesLineToShip(var SalesLineToShip: Record "Sales Line"; SalesLineInvoiced: Record "Sales Line")</td>
	<td>Hacer líneas de ventas para enviar</td>
	</tr>
	<tr>
	<td>local procedure SetAmountsForBalancingEntry(CustLedgEntry: Record "Cust. Ledger Entry"; TotalSalesLine2: Record "Sales Line"; TotalSalesLineLCY2: Record "Sales Line"; var GenJnlLine: Record "Gen. Journal Line")</td>
	<td>Establecer  montos para la entradas de saldo</td>
	</tr>
	<tr>
	<td> local procedure CheckDocumentType(SalesHeader: Record "Sales Header"; ExecuteDocCheck: Boolean): Boolean</td>
	<td>Verificar tipos de documentos</td>
	</tr>
	<tr>
	<td>local procedure UpdateQtyToBeInvoicedForShipment(var QtyToBeInvoiced: Decimal; var QtyToBeInvoicedBase: Decimal; TrackingSpecificationExists: Boolean; HasATOShippedNotInvoiced: Boolean; SalesLine: Record "Sales Line"; SalesShptLine: Record "Sales Shipment Line"; InvoicingTrackingSpecification: Record "Tracking Specification"; ItemLedgEntryNotInvoiced: Record "Item Ledger Entry")</td>
	<td>Actualizar la cantidad a facturar para el envio</td>
	</tr>
	<tr>
	<td>local procedure UpdateRemainingQtyToBeInvoiced(SalesShptLine: Record "Sales Shipment Line"; var RemQtyToInvoiceCurrLine: Decimal; var RemQtyToInvoiceCurrLineBase: Decimal)</td>
	<td>Actualizar la cantidad restante a facturar</td>
	</tr>
	<tr>
	<td>procedure SetItemEntryRelation(var ItemEntryRelation: Record "Item Entry Relation"; var SalesShptLine: Record "Sales Shipment Line"; var InvoicingTrackingSpecification: Record "Tracking Specification"; var ItemLedgEntryNotInvoiced: Record "Item Ledger Entry"; TrackingSpecificationExists: Boolean; HasATOShippedNotInvoiced: Boolean)</td>
	<td>Establecer relación de entrada de elementos </td>
	</tr>
	<tr>
	<td>local procedure GetATOItemLedgEntriesNotInvoiced(SalesLine: Record "Sales Line"; var ItemLedgEntryNotInvoiced: Record "Item Ledger Entry"): Boolean</td>
	<td>Obtener entradas del libro mayor de artículo no facturadas</td>
	</tr>
	<tr>
	<td>local procedure CheckItemReservDisruption(SalesLine: Record "Sales Line")</td>
	<td>Verificar la interrupción de la reserva de artículo</td>
	</tr>
	<tr>
	<td>local procedure CreateServItemOnSalesInvoice(var SalesHeader: Record "Sales Header")</td>
	<td>crear artículo de servicio en factura de venta</td>
	</tr>
	<tr>
	<td>procedure GetPostedDocumentRecord(SalesHeader: Record "Sales Header"; var PostedSalesDocumentVariant: Variant)</td>
	<td>obtener registro de documento publicado</td>
	</tr>
	<tr>
	<td>procedure SendPostedDocumentRecord(SalesHeader: Record "Sales Header"; var DocumentSendingProfile: Record "Document Sending Profile")</td>
	<td>Enviar registro de documento publicado</td>
	</tr>
	<tr>
	<td>local procedure MakeInventoryAdjustment()</td>
	<td>Hacer ajustes de inventario</td>
	</tr>
	<tr>
	<td>local procedure CheckTrackingAndWarehouseForReceive(SalesHeader: Record "Sales Header") Receive: Boolean</td>
	<td>comprobar seguimiento y almacén para recibo</td>
	</tr>
	<tr>
	<td> local procedure CheckIfInvPickExists(SalesHeader: Record "Sales Header"): Boolean</td>
	<td>Comprobar si existe la selección de inventario</td>
	</tr>
	<tr>
	<td> local procedure GetReturnRcptLineFromTrackingOrUpdateItemEntryRelation(SalesHeader: Record "Sales Header"; TrackingSpecificationExists: Boolean; var ItemEntryRelation: Record "Item Entry Relation"; var TempTrackingSpecification: Record "Tracking Specification" temporary; var ReturnRcptLine: Record "Return Receipt Line")</td>
	<td>Obtener línea de recibo de devolución del seguimiento o actualizar la relación de entrada del artículo</td>
	</tr>
	<tr>
	<td> local procedure CheckJobNoOnShptLineEqualToSales(SalesShipmentLine: Record "Sales Shipment Line"; SalesLine: Record "Sales Line")</td>
	<td>Verifique el numero de trabajo en la línea de envio igual a las ventas</td>
	</tr>
	<tr>
	<td> local procedure CheckSalesLineInvoiceMoreThanShipped(var SalesOrderLine: Record "Sales Line"; var TempSalesLine: Record "Sales Line" temporary; var SalesShptLine: Record "Sales Shipment Line")</td>
	<td> Consultar factura  de línea de ventas mas enviada</td>
	</tr>
	<td>local procedure UpdateEmailParameters(SalesHeader: Record "Sales Header")</td>
	<td>Actualizar parametros de email</td>
	</tr>
	<tr>
	<td> local procedure ArchivePurchaseOrders(var TempDropShptPostBuffer: Record "Drop Shpt. Post. Buffer" temporary)</td>
	<td>Archivar ordenes de compra</td>
	</tr>
	<tr>
	<td>procedure UpdateChargeItemSalesShptLineGenProdPostingGroup(var SalesShipmentLine: Record "Sales Shipment Line")</td>
	<td>Actualizar grupos de registro de producción de lineas de ventas</td>
	</tr>
	<tr>
	<td> local procedure CheckCorrectedInvoice(var SalesHeader: Record "Sales Header")</td>
	<td>Consultar facturas corregidas</td>
	</tr>
	</table>
	`;

	cuerpo.innerHTML= contenido;

}
/*==================
Codeunit 90 compras
 ===================*/
let codeunit90 = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	     <h2 class="Subtitulos">Codeunit 90 Compras</h2>
  <p class="parrafo">La codeunit posee una gran cantidad de líneas de código que se utiliza para las compras en Business Central, en la siguiente tabla veremos algunas de las funciones que están declaradas, así podemos hacernos una idea del funcionamiento de la misma.</p>
  <h3>Ver Código fuente Codeunit 90</h3>
  <p class="parrafo">Para ver el código seguiremos los siguientes pasos: </p>
  <ul>
  <li><b>1.</b> Abrimos nuestro editor de código, en este caso es <b>Visual Studio Code</b> en el proyecto donde estemos trabajando.</li>
  <li><b>2.</b> Elejiremos <b>.alpackages</b></li>
  <li><b>3.</b> Elejimos la opción <b>Microsoft_Base_Application_20......</b></li>
  <li><b>4.</b> Buscaremos en <b>Codeunits</b>, elejiremos la <b>90 Purch.-Post</b><br>
  <div class="img-content2"><img src="img/code90-1.PNG" alt=""></div>
  </li>
  <li><b>5.</b> Dentro de la Codeunit <b>90 "Purch.-Post"</b> veremos las diferentes funciones y variables usadas para el proceso de compras. <br><br>
  <div class="img-content2"><img src="img/code90-2.PNG" alt=""></div>
  </li>
  </ul>
  <h3>Principales funciones de la codeunit 90 Compras</h3> 
  <table class="tabla1">
  <tr>
  <th>Procedure</th>
  <th>Descripción</th>
  <th></th>
  <th>Procedure</th>
  <th>Descripción</th>
  </tr>
  <tr>
  <td>local procedure GetZeroPurchLineRecID(PurchHeader: Record "Purchase Header"; var PurchLineRecID: RecordId)</td>
  <td>Obtener ID Rec de línea de compra</td>
  <td></td>
  <td>procedure CopyToTempLines(PurchHeader: Record "Purchase Header"; var TempPurchLine: Record "Purchase Line" temporary)</td>
  <td>Copiar a líneas temporales</td>
  </tr>
  <tr>
  <td>local procedure CommitAndUpdateAnalysisVeiw()</td>
  <td>Confirmar y actualizar la vista de análisis</td>
  <td></td>
  <td>procedure FillTempLines(PurchHeader: Record "Purchase Header"; var TempPurchLine: Record "Purchase Line" temporary)</td>
  <td>Llenar líneas temporales</td>
  </tr>
  <tr>
  <td>local procedure ModifyTempLine(var TempPurchLineLocal: Record "Purchase Line" temporary)</td>
  <td>Modificar línea temporal</td>
  <td></td>
  <td>procedure RefreshTempLines(PurchHeader: Record "Purchase Header"; var TempPurchLine: Record "Purchase Line" temporary)</td>
  <td>Actualizar líneas temporales</td>
  </tr>
  <tr>
  <td>procedure ResetTempLines(var TempPurchLineLocal: Record "Purchase Line" temporary)</td>
  <td>Resetear líneas temporales</td>
  <td></td>
  <td>procedure CalcInvoice(var PurchHeader: Record "Purchase Header") NewInvoice: Boolean</td>
  <td>Calcular Factura</td>
  </tr>
  <tr>
  <td> local procedure CalcInvDiscount(var PurchHeader: Record "Purchase Header")</td>
  <td> Calcular descuento de inversión</td>
  <td></td>
  <td>local procedure RestorePurchaseHeader(var PurchaseHeader: Record "Purchase Header"; PurchaseHeaderCopy: Record "Purchase Header")2</td>
  <td>Restaurar encabezado de compra</td>
  </tr>
  <tr>
  <td>local procedure CheckAndUpdate(var PurchHeader: Record "Purchase Header")</td>
  <td>Comprobar y actualizar</td>
  <td></td>
  <td>local procedure HandleArchiveUnpostedOrder(var PurchHeader: Record "Purchase Header")</td>
  <td>Manejar archivar pedido no registrado</td>
  </tr>
  <tr>
  <td> procedure CheckPurchDocument(var PurchHeader: Record "Purchase Header")</td>
  <td>Consultar documento de compra</td>
  <td></td>
  <td> local procedure CheckPurchLines(var PurchHeader: Record "Purchase Header")</td>
  <td>Consultar líneas de compra</td>
  </tr>
  <tr>
  <td>local procedure CheckCorrectedInvoiceNo(var PurchaseHeader: Record "Purchase Header")</td>
  <td>Verificar Factura Corregida No.</td>
  <td></td>
  <td>   local procedure CheckExtDocNo(PurchaseHeader: Record "Purchase Header")3</td>
  <td>Comprobar número de documento externo</td>
  </tr>
  <tr>
  <td> procedure PrepareCheckDocument(var PurchaseHeader: Record "Purchase Header")</td>
  <td>Preparar documento de cheque</td>
  <td></td>
  <td> local procedure SetLogErrorModePostingFlags(var PurchaseHeader: Record "Purchase Header")</td>
  <td>Establecer indicadores de publicación del modo de error de registro</td>
  </tr>
  <tr>
  <td>local procedure PostPurchLine(var PurchHeader: Record "Purchase Header"; var PurchLine: Record "Purchase Line"; var TempVATAmountLine: Record "VAT Amount Line" temporary; var TempVATAmountLineRemainder: Record "VAT Amount Line" temporary; var TempDropShptPostBuffer: Record "Drop Shpt. Post. Buffer" temporary; var EverythingInvoiced: Boolean; var ICGenJnlLineNo: Integer)</td>
  <td>Verifique la línea de compra de crédito de trabajo</td>
  <td></td>
  <td>   local procedure PostInvoice(var PurchHeader: Record "Purchase Header")</td>
  <td>Publicar factura</td>
  </tr>
  <tr>
  <td> local procedure PostItemLine(PurchHeader: Record "Purchase Header"; var PurchLine: Record "Purchase Line"; var TempDropShptPostBuffer: Record "Drop Shpt. Post. Buffer" temporary)</td>
  <td>Publicar línea de artículo</td>
  <td></td>
  <td>local procedure PostItemChargeLine(PurchHeader: Record "Purchase Header"; PurchLine: Record "Purchase Line")</td>
  <td>Contabilizar línea de cargo de artículo</td>
  </tr>
  <tr>
  <td> local procedure PostItemTrackingLine(PurchHeader: Record "Purchase Header"; PurchLine: Record "Purchase Line")</td>
  <td>Publicar línea de seguimiento de artículo</td>
  <td></td>
  <td> local procedure RetrieveInvoiceTrackingSpecificationIfExists(PurchaseHeader: Record "Purchase Header"; var PurchaseLine: Record "Purchase Line"; var TempTrackingSpecification: Record "Tracking Specification" temporary; var TrackingSpecificationExists: Boolean)</td>
  <td>Recuperar especificación de seguimiento de facturas si existe</td>
  </tr>
  <tr>
  <td>local procedure CalcItemJnlLineToBeInvoicedAmounts(var ItemJnlLine: Record "Item Journal Line"; var PurchaseHeader: Record "Purchase Header"; var PurchaseLine: Record "Purchase Line"; QtyToBeInvoiced: Decimal; QtyToBeInvoicedBase: Decimal)</td>
  <td>Calcular importes  a facturar de artículo en línea</td>
  <td></td>
  <td>local procedure PostItemJnlLineCopyDocumentFields(var ItemJnlLine: Record "Item Journal Line"; PurchHeader: Record "Purchase Header"; PurchLine: Record "Purchase Line"; QtyToBeInvoiced: Decimal; QtyToBeReceived: Decimal)</td>
  <td>Registrar campos de documento de copia de línea de artículo</td>
  </tr>
  <tr>
  <td>local procedure PostItemJnlLineCopyProdOrder(PurchLine: Record "Purchase Line"; var ItemJnlLine: Record "Item Journal Line"; QtyToBeReceived: Decimal; QtyToBeInvoiced: Decimal)</td>
  <td>Publicar pedido de copia de línea de artículo</td>
  <td></td>
  <td>local procedure PostItemJnlLineTracking(PurchLine: Record "Purchase Line"; var TempWhseTrackingSpecification: Record "Tracking Specification" temporary; var TempTrackingSpecificationChargeAssmt: Record "Tracking Specification" temporary; PostWhseJnlLine: Boolean; QtyToBeInvoiced: Decimal)</td>
  <td>Seguimiento de línea de publicación de artículos</td>
  </tr>
  <tr>
  <td>local procedure PostItemChargePerOrder(PurchHeader: Record "Purchase Header"; PurchLine: Record "Purchase Line"; ItemJnlLine2: Record "Item Journal Line"; ItemChargePurchLine: Record "Purchase Line"; var TempTrackingSpecificationChargeAssmt: Record "Tracking Specification" temporary)</td>
  <td>Publicar cargo de artículo Prepedido</td>
  <td></td>
  <td>local procedure PostItemTrackingItemChargePerOrder(PurchHeader: Record "Purchase Header"; var ItemJnlLine2: Record "Item Journal Line"; var TempTrackingSpecificationChargeAssmt: Record "Tracking Specification" temporary)</td>
  <td>Publicar cargo de artículo de seguimiento de artículo por pedido</td>
  </tr>
  <tr>
  <td>local procedure PostItemChargePerRcpt(PurchHeader: Record "Purchase Header"; var PurchLine: Record "Purchase Line")</td>
  <td>Publicar cargo de artículo por recibo</td>
  <td></td>
  <td> local procedure PostItemChargePerRetShpt(PurchHeader: Record "Purchase Header"; var PurchLine: Record "Purchase Line")</td>
  <td>Publicar cargo de artículo por envío</td>
  </tr>
  <tr>
  <td>local procedure PostItemChargePerTransfer(PurchHeader: Record "Purchase Header"; var PurchLine: Record "Purchase Line")</td>
  <td>Publicar cargo de artículo por transferencia</td>
  <td></td>
  <td> local procedure PostItemChargePerITTransfer(PurchHeader: Record "Purchase Header"; var PurchLine: Record "Purchase Line"; TransRcptLine: Record "Transfer Receipt Line")</td>
  <td>Contabilizar cargo de artículo por transferencia de TI</td>
  </tr>
  <tr>
  <td> local procedure PostItemChargePerSalesShpt(PurchHeader: Record "Purchase Header"; var PurchLine: Record "Purchase Line")</td>
  <td>Registrar cargo de artículo por envío de ventas</td>
  <td></td>
  <td>procedure PostDistributeItemCharge(PurchHeader: Record "Purchase Header"; PurchLine: Record "Purchase Line"; var TempItemLedgEntry: Record "Item Ledger Entry" temporary; NonDistrQuantity: Decimal; NonDistrQtyToAssign: Decimal; NonDistrAmountToAssign: Decimal; Sign: Decimal; IndirectCostPct: Decimal)</td>
  <td>Publicar cargo de artículo distribuido</td>
  </tr>
  <tr>
  <td>local procedure PostResourceLine(PurchaseHeader: Record "Purchase Header"; var PurchaseLine: Record "Purchase Line")</td>
  <td>Publicar línea de recursos</td>
  <td></td>
  <td>    local procedure ReleasePurchDocument(var PurchHeader: Record "Purchase Header")</td>
  <td>Liberar documento de compra</td>
  </tr>
  <tr>
  <td> local procedure TestStatusRelease(PurchHeader: Record "Purchase Header")</td>
  <td>Publicación del estado de la prueba</td>
  <td></td>
  <td>local procedure CheckBlockedPostingGroups(PurchaseLine: Record "Purchase Line")</td>
  <td>Comprobar grupos de publicación bloqueados</td>
  </tr>
  <tr>
  <td>local procedure TestPurchLineFixedAsset(PurchaseLine: Record "Purchase Line")</td>
  <td>Prueba de activos fijos de línea de compra</td>
  <td></td>
  <td>local procedure TestPurchLineOthers(PurchaseLine: Record "Purchase Line")</td>
  <td>Línea de compra de prueba Otros</td>
  </tr>
  <tr>
  <td>procedure UpdateAssocOrder(var TempDropShptPostBuffer: Record "Drop Shpt. Post. Buffer" temporary)</td>
  <td>Actualizar orden de asociación</td>
  <td></td>
  <td>local procedure UpdateAssociatedSalesOrder(var TempDropShptPostBuffer: Record "Drop Shpt. Post. Buffer" temporary; PurchaseHeader: Record "Purchase Header")</td>
  <td>Actualizar orden de venta asociada</td>
  </tr>
  <tr>
  <td>local procedure UpdateAssosOrderPostingNos(PurchHeader: Record "Purchase Header") DropShipment: Boolean</td>
  <td>Actualizar números de publicación de pedidos de Assos</td>
  <td></td>
  <td>procedure CheckAndUpdateAssocOrderPostingDate(var SalesHeader: Record "Sales Header"; PostingDate: Date)</td>
  <td>Verificar y actualizar la fecha de publicación del pedido asociado</td>
  </tr>
  <tr>
  <td> local procedure UpdateAfterPosting(PurchHeader: Record "Purchase Header")</td>
  <td>Actualizar compras después de publicar</td>
  <td></td>
  <td>local procedure ResetPostingNoSeriesFromSetup(var PostingNoSeries: Code[20]; SetupNoSeries: Code[20])</td>
  <td>Restablecer publicación sin serie desde la configuración</td>
  </tr>
  <tr>
  <td> local procedure UpdatePurchLineBeforePost(PurchHeader: Record "Purchase Header"; var PurchLine: Record "Purchase Line")</td>
  <td>Restablecer publicación sin serie desde la configuración</td>
  <td></td>
  <td>local procedure DeleteAfterPosting(var PurchHeader: Record "Purchase Header")</td>
  <td>Eliminar después de publicar</td>
  </tr>
  <tr>
  <td> local procedure DeleteApprovalEntries(var PurchHeader: Record "Purchase Header")</td>
  <td>Eliminar entradas de aprobación</td>
  <td></td>
  <td>local procedure CalcLineAmountAndLineDiscountAmount(PurchHeader: Record "Purchase Header"; var PurchLine: Record "Purchase Line"; PurchLineQty: Decimal)</td>
  <td>Calcular cantidad de línea y cantidad de descuento de línea</td>
  </tr>
  <tr>
  <td>local procedure CalculateAmountsInclVAT(PurchHeader: Record "Purchase Header"; var PurchLine: Record "Purchase Line"; var TempVATAmountLine: Record "VAT Amount Line" temporary; var TempVATAmountLineRemainder: Record "VAT Amount Line" temporary)</td>
  <td>Calcular Importes Incluyendo IVA</td>
  <td></td>
  <td> procedure UpdateBlanketOrderLine(PurchLine: Record "Purchase Line"; Receive: Boolean; Ship: Boolean; Invoice: Boolean)</td>
  <td>Actualizar línea de pedido abierto</td>
  </tr>
  <tr>
  <td>local procedure UpdatePurchaseHeader(var VendorLedgerEntry: Record "Vendor Ledger Entry")</td>
  <td>Actualizar encabezado de compra</td>
  <td></td>
  <td> local procedure PostVendorEntry(var PurchHeader: Record "Purchase Header"; TotalPurchLine2: Record "Purchase Line"; TotalPurchLineLCY2: Record "Purchase Line"; DocType: Enum "Gen. Journal Document Type"; DocNo: Code[20]; ExtDocNo: Code[35]; SourceCode: Code[10])</td>
  <td>Publicar entrada de proveedor</td>
  </tr>
  <tr>
  <td> local procedure InitGenJnlLineAmountFieldsFromTotalPurchLine(var GenJnlLine: Record "Gen. Journal Line"; var PurchHeader: Record "Purchase Header"; var TotalPurchLine2: Record "Purchase Line"; var TotalPurchLineLCY2: Record "Purchase Line")</td>
  <td>Campos de cantidad de línea de generación inicial de la línea de compra total</td>
  <td></td>
  <td>local procedure PostBalancingEntry(PurchHeader: Record "Purchase Header"; TotalPurchLine2: Record "Purchase Line"; TotalPurchLineLCY2: Record "Purchase Line"; DocType: Enum "Gen. Journal Document Type"; DocNo: Code[20]; ExtDocNo: Code[35]; SourceCode: Code[10])</td>
  <td>Entrada posterior al balance</td>
  </tr>
  <tr>
  <td>local procedure FindVendorLedgerEntry(DocType: Enum "Gen. Journal Document Type"; DocNo: Code[20]; var VendorLedgerEntry: Record "Vendor Ledger Entry")</td>
  <td>Buscar entrada de libro mayor de proveedores</td>
  <td></td>
  <td> local procedure CheckPostRestrictions(PurchaseHeader: Record "Purchase Header")</td>
  <td>Consultar restricciones de publicación</td>
  </tr>
  <tr>
  <td> local procedure DeleteItemChargeAssgnt(PurchHeader: Record "Purchase Header")</td>
  <td>Eliminar asignación de cargo de artículo</td>
  <td></td>
  <td> local procedure UpdateItemChargeAssgnt(var PurchHeader: Record "Purchase Header")</td>
  <td>Actualizar líneas de asignación de cargo de compra</td>
  </tr>
  <tr>
  <td> local procedure InsertAssocOrderCharge(PurchOrderLine: Record "Purchase Line"; ApplToDocType: Enum "Purchase Applies-to Document Type"; ApplToDocNo: Code[20]; ApplToDocLineNo: Integer; LastLineNo: Integer; ApplToDocLineAmt: Decimal)</td>
  <td>Insertar cargo de pedido asociado</td>
  <td></td>
  <td>    local procedure CopyAndCheckItemCharge(PurchHeader: Record "Purchase Header")</td>
  <td>Copiar y verificar el cargo por artículo</td>
  </tr>
  <tr>
  <td>local procedure CalculateInvoiceEverything(var TempPurchaseLine: Record "Purchase Line" temporary; PurchaseHeader: Record "Purchase Header"; var InvoiceEverything: Boolean)</td>
  <td>Calcular Facturar Todo</td>
  <td></td>
  <td>local procedure CopyItemChargeForPurchLine(var TempItemChargeAssignmentPurch: Record "Item Charge Assignment (Purch)" temporary; PurchaseLine: Record "Purchase Line")</td>
  <td>Copiar cargo de artículo para línea de compra</td>
  </tr>
  <tr>
  <td>local procedure CalcQtyToInvoice(QtyToHandle: Decimal; QtyToInvoice: Decimal): Decimal</td>
  <td>Calcular cantidad a facturar</td>
  <td></td>
  <td>local procedure GetInvoicePostingSetup()</td>
  <td>Obtener configuración de contabilización de facturas</td>
  </tr>
  <tr>
  <td> local procedure CheckWarehouse(var TempItemPurchLine: Record "Purchase Line" temporary)</td>
  <td>Consultar Almacén</td>
  <td></td>
  <td>local procedure InsertRcptEntryRelation(var PurchRcptLine: Record "Purch. Rcpt. Line") Result: Integer</td>
  <td>Insertar relación de entidad de retorno</td>
  </tr>
  <tr>
  <td>local procedure CheckTrackingSpecification(PurchHeader: Record "Purchase Header"; var TempItemPurchLine: Record "Purchase Line" temporary)</td>
  <td>Comprobar la especificación de seguimiento</td>
  <td></td>
  <td>  local procedure InsertTrackingSpecification(PurchHeader: Record "Purchase Header")</td>
  <td>Insertar especificación de seguimiento</td>
  </tr>
  <tr>
  <td> local procedure CalcBaseQty(ItemNo: Code[20]; UOMCode: Code[10]; Qty: Decimal; QtyRoundingPrecision: Decimal): Decimal</td>
  <td>Cantidad base de cálculo</td>
  <td></td>
  <td>local procedure CalcPrepmtAmtToDeduct(PurchLine: Record "Purchase Line"; Receive: Boolean): Decimal</td>
  <td>Prueba de preparación de cálculo para deducir</td>
  </tr>
  <tr>
  <td>local procedure CalcPrepmtRoundingAmounts(var PrepmtPurchLineBuf: Record "Purchase Line"; PurchLine: Record "Purchase Line"; DeductionFactor: Decimal; var TotalRoundingAmount: array[2] of Decimal)</td>
  <td>Actualizar línea de compra anticipada con redondeo</td>
  <td></td>
  <td> local procedure UpdateJobConsumptionReservationApplToItemEntry(var TempReservEntryJobCons: Record "Reservation Entry" temporary; var ItemJournalLine: Record "Item Journal Line"; var TempTrackingSpecification: Record "Tracking Specification" temporary; NonInventoriableItem: Boolean)</td>
  <td>Actualizar aplicación de reserva de consumo de trabajo a entrada de artículo</td>
  </tr>
  <tr>
  <td>   local procedure GetAppliedItemLedgEntryNo(var ItemJournalLine: Record "Item Journal Line"; QtyReceived: Decimal)</td>
  <td>Obtener la entrada de libro mayor de elementos salientes aplicados n.º</td>
  <td></td>
  <td> local procedure RevertWarehouseEntry(var TempWhseJnlLine: Record "Warehouse Journal Line" temporary; JobNo: Code[20]; PostJobConsumptionBeforePurch: Boolean): Boolean</td>
  <td>Revertir Entrada al Almacén</td>
  </tr>
  <tr>
  <td> local procedure CreatePositiveEntry(WhseJnlLine: Record "Warehouse Journal Line"; JobNo: Code[20]; PostJobConsumptionBeforePurch: Boolean) Result: Boolean</td>
  <td>Crear entrada positiva</td>
  <td></td>
  <td>Amor linda te amooo</td>
  <td>Actualizar documento entrante</td>
  </tr>
  <tr>
  <td>local procedure UpdateInvoicedQtyOnReturnShptLine(var ReturnShptLine: Record "Return Shipment Line"; QtyToBeInvoiced: Decimal; QtyToBeInvoicedBase: Decimal)</td>
  <td>Actualizar la cantidad facturada en la línea de envío de devolución</td>
  <td></td>
  <td>  local procedure UpdateQtyPerUnitOfMeasure(var PurchLine: Record "Purchase Line")</td>
  <td>Actualizar cantidad por unidad de medida</td>
  </tr>
  <tr>
  <td>local procedure UpdateQtyToBeInvoicedForReceipt(var QtyToBeInvoiced: Decimal; var QtyToBeInvoicedBase: Decimal; TrackingSpecificationExists: Boolean; PurchLine: Record "Purchase Line"; PurchRcptLine: Record "Purch. Rcpt. Line"; InvoicingTrackingSpecification: Record "Tracking Specification")</td>
  <td>Actualizar cantidad a facturar para recepción</td>
  <td></td>
  <td>local procedure UpdateQtyToBeInvoicedForReturnShipment(var QtyToBeInvoiced: Decimal; var QtyToBeInvoicedBase: Decimal; TrackingSpecificationExists: Boolean; PurchLine: Record "Purchase Line"; ReturnShipmentLine: Record "Return Shipment Line"; InvoicingTrackingSpecification: Record "Tracking Specification")</td>
  <td>Actualizar la cantidad a facturar para el envío de devolución</td>
  </tr>
  <tr>
  <td>local procedure UpdateRemainingQtyToBeInvoiced(var RemQtyToInvoiceCurrLine: Decimal; var RemQtyToInvoiceCurrLineBase: Decimal; PurchRcptLine: Record "Purch. Rcpt. Line")</td>
  <td>Actualizar la cantidad restante a facturar</td>
  <td></td>
  <td>local procedure CheckCertificateOfSupplyStatus(ReturnShptHeader: Record "Return Shipment Header"; ReturnShptLine: Record "Return Shipment Line")</td>
  <td>Verifique el estado del certificado de suministro de ventas</td>
  </tr>
  <tr>
  <td>local procedure InsertReturnShipmentLine(ReturnShptHeader: Record "Return Shipment Header"; PurchLine: Record "Purchase Line"; CostBaseAmount: Decimal)</td>
  <td>Insertar línea de envío de devolución</td>
  <td></td>
  <td>local procedure CreateWhseLineFromReturnShptLine(var ReturnShptLine: Record "Return Shipment Line"; PurchLine: Record "Purchase Line"; CostBaseAmount: Decimal)</td>
  <td>Crear línea de destino desde la línea directa de devoluciones</td>
  </tr>
  <tr>
  <td>local procedure InsertInvoiceHeader(var PurchHeader: Record "Purchase Header"; var PurchInvHeader: Record "Purch. Inv. Header")</td>
  <td>Insertar encabezado de factura</td>
  <td></td>
  <td> local procedure InsertSalesShptHeader(var SalesOrderHeader: Record "Sales Header"; var PurchHeader: Record "Purchase Header"; var SalesShptHeader: Record "Sales Shipment Header")</td>
  <td>Insertar encabezado de envío de ventas</td>
  </tr>
  <tr>
  <td> local procedure CheckICDocumentDuplicatePosting(PurchHeader: Record "Purchase Header")</td>
  <td>Verifique la publicación de duplicados de documentos </td>
  <td></td>
  <td> local procedure MakeInventoryAdjustment()</td>
  <td>Hacer ajuste de inventario</td>
  </tr>
  <tr>
  <td>local procedure CheckTrackingAndWarehouseForReceive(PurchHeader: Record "Purchase Header") Receive: Boolean</td>
  <td>Comprobar seguimiento y almacén para recibir</td>
  <td></td>
  <td>local procedure CheckTrackingAndWarehouseForShip(PurchHeader: Record "Purchase Header") Ship: Boolean</td>
  <td>Comprobar el seguimiento y el almacén para el envío</td>
  </tr>
  <tr>
  <td>local procedure CheckIfInvPutawayExists(PurchaseHeader: Record "Purchase Header"): Boolean</td>
  <td>Comprobar si existe ubicación de inventario</td>
  <td></td>
  <td> local procedure CheckHeaderPostingType(var PurchHeader: Record "Purchase Header")</td>
  <td>Verifique el tipo de publicación de encabezado</td>
  </tr>
  <tr>
  <td>local procedure AddAssociatedOrderLineToBuffer(PurchHeader: Record "Purchase Header"; var PurchLine: Record "Purchase Line"; var SalesOrderLine: Record "Sales Line"; var TempSalesLine: Record "Sales Line" temporary)</td>
  <td>Agregar línea de orden asociada al búfer</td>
  <td></td>
  <td>  local procedure CheckDropShipmentReceiveInvoice(PurchLine: Record "Purchase Line"; Receive: Boolean)</td>
  <td>Verificar envío directo Recibir factura</td>
  </tr>
  <tr>
  <td> local procedure PostCombineSalesOrderShipment(var PurchHeader: Record "Purchase Header"; var TempDropShptPostBuffer: Record "Drop Shpt. Post. Buffer" temporary)</td>
  <td>Publicar envío combinado de pedidos de venta</td>
  <td></td>
  <td>local procedure CheckMandatoryHeaderFields(var PurchHeader: Record "Purchase Header")</td>
  <td>Verifique los campos de encabezado obligatorios</td>
  </tr>
  <tr>
  <td>local procedure CalcPaymentDiscountPosting(PurchHeader: Record "Purchase Header"; PurchLine: Record "Purchase Line"; PurchLineACY: Record "Purchase Line"; var InvoicePostBuffer: Record "Invoice Post. Buffer")</td>
  <td>Calcular contabilización de descuento de pago</td>
  <td></td>
  <td> local procedure ValidatePostingAndDocumentDate(var PurchaseHeader: Record "Purchase Header")</td>
  <td>Validar contabilización y fecha del documento</td>
  </tr>
  <tr>
  <td> local procedure CheckExternalDocumentNumber(var VendLedgEntry: Record "Vendor Ledger Entry"; var PurchaseHeader: Record "Purchase Header")</td>
  <td>Comprobar número de documento externo</td>
  <td></td>
  <td> local procedure PostItemTracking(PurchHeader: Record "Purchase Header"; PurchLine: Record "Purchase Line"; var TempTrackingSpecification: Record "Tracking Specification" temporary; TrackingSpecificationExists: Boolean)</td>
  <td>Publicar seguimiento de elementos</td>
  </tr>
  <tr>
  <td>local procedure PostItemTrackingCheckShipment(PurchaseLine: Record "Purchase Line"; RemQtyToBeInvoiced: Decimal)</td>
  <td>Publicar seguimiento de artículos Verificar envío</td>
  <td></td>
  <td> local procedure AdjustQuantityRoundingForReceipt(PurchRcptLine: Record "Purch. Rcpt. Line"; RemQtyToInvoiceCurrLine: Decimal; var QtyToBeInvoiced: Decimal; RemQtyToInvoiceCurrLineBase: Decimal; QtyToBeInvoicedBase: Decimal)</td>
  <td>Ajustar redondeo de cantidad para recibo</td>
  </tr>
  <tr>
  <td> local procedure AdjustQuantityRoundingForReceipt(PurchRcptLine: Record "Purch. Rcpt. Line"; RemQtyToInvoiceCurrLine: Decimal; var QtyToBeInvoiced: Decimal; RemQtyToInvoiceCurrLineBase: Decimal; QtyToBeInvoicedBase: Decimal)</td>
  <td>Ajustar redondeo de cantidad para recibo</td>
  <td></td>
  <td>local procedure PostItemTrackingForReceiptCondition(PurchLine: Record "Purchase Line"; PurchRcptLine: Record "Purch. Rcpt. Line"): Boolean</td>
  <td>Publicar seguimiento de artículo para condición de recibo</td>
  </tr>
  <tr>
  <td>local procedure CheckFieldsOnReturnShipmentLine(var ReturnShipmentLine: Record "Return Shipment Line"; PurchaseLine: Record "Purchase Line")</td>
  <td>Comprobar campos en la línea de envío de devolución</td>
  <td></td>
  <td>local procedure UpdateQtyToInvoiceForReturnOrder(PurchHeader: Record "Purchase Header"; var TempPurchLine: Record "Purchase Line" temporary)</td>
  <td>Actualizar cantidad a factura para pedido</td>
  </tr>
  

  </table>


	`;

	cuerpo.innerHTML= contenido;

}

/*===========
actions
===============*/
let crearAction = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `

	<h2 class="Subtitulos">Creación de los Actions</h2>
	<p class="parrafo">El elemento Actions representa el conjunto de acciones que están disponibles para realizarse en un mensaje cuando se cumplan las condiciones.</p>
	<p class="parrafo">En Dynamics 365 Business Central, las acciones se muestran en la parte superior de cada página, lo que se denomina barra de acciones. En este tema, aprenderá acerca de los diferentes tipos de acciones y cómo puede permitir que los usuarios localicen rápidamente las acciones que desean usar.</p>
	<div class="img-content2">
	<img src="img/actions1.PNG" alt="">
	</div>
	<p class="parrafo">En la imagen vemos como creamos un botón en la Page List de Persona, donde llama a la Codeunit funciones, que al presionar ella mostrara un mensaje en pantalla con el contenido de la codeunit.</p>
	<p class="parrafo"></p>
	<div class="img-content">
	<img src="img/actions2.PNG" alt="">
	</div>
	<div class="img-content2">
	<img src="img/actions3.PNG" alt="">
	</div>
	<h3>Tipos de acciones</h3>
	<p class="parrafo">Cada página tiene un conjunto diferente de acciones según el tipo de página y los procesos que admite la página. Para crear el conjunto apropiado de acciones para una página en particular, debe tener una buena comprensión de los procesos comerciales de su cliente.</p>
	<p class="parrafo">Cada proceso en una organización tiene varias acciones asociadas. Debe intentar crear un conjunto completo de acciones que reflejen todas las tareas y procesos que se realizan.</p>
	<p class="parrafo">
	Puede elegir entre los siguientes menús de acciones colocar las acciones en el área especificada.
	</p>
	<div class="img-content2">
	<img src="img/actions4.PNG" alt="">
	</div>

	`;

	cuerpo.innerHTML= contenido;

}

/*===========
	Enum
	==================*/
let ennum = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `

	<h2 class="Subtitulos">Enumeraciones</h2>
	<p class="parrafo">Un tipo de enumeración, también conocido como enumeración en programación, es una palabra clave utilizada para declarar un tipo que consiste en un conjunto de constantes con nombre. La lista de constantes con nombre se denomina lista de enumeración. Las enumeraciones se pueden usar como campos de tabla, variables locales y globales, y parámetros..</p>
	<p class="parrafo">
	Para declarar un en AL debe especificar un ID y un nombre. La lista de enumeración consta de valores y cada uno de los valores se declara con un identificador y un valor. El identificador de valor es el valor ordinal de la lista de enumeración y debe ser único. Cuando los valores de enumeración se muestran en la interfaz de usuario, se ordenan por el orden de declaración. Además, si la extensión B extiende la extensión A, los valores de enumeración declarados en la extensión A se muestran antes de los valores de enumeración declarados en la extensión B.enum
	</p>
	<p class="parrafo">En el siguiente ejemplo crearemos un Enum que se llamara Provincias, el cual usaremos en nuestra tabla Persona, adicionaremos un campo que tendrá para elegir las diferentes comunidades de España.</p>
	<div class="img-content2">
	<img src="img/ennum1.PNG" alt="">
	</div>
	<p class="parrafo">Agregamos el campo a nuestra tabla Persona, en este caso lo llamaremos Comunidad, Que obtendrá los valores de nuestra Enum Provincias.</p>
	<div class="img-content2">
	<img src="img/ennum2.PNG" alt="">
	</div>
	<p class="parrafo">Agregamos el campo Comunidad en nuestra PageList y nuestra PageCard.</p>
	<div class="img-content2">
	<img src="img/ennum3.PNG" alt="">
	</div>
	<p class="parrafo">Observamos que en la página Persona en el campo Comunidad se despliega las enumeraciones antes definidas con los nombres de las diferentes comunidades de España.</p>
	<div class="img-content2">
	<img src="img/ennum4.PNG" alt="">
	</div>

	`;

	cuerpo.innerHTML= contenido;

}

	/*Opciones*/
let opciones = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `

	<h2 class="Subtitulos">Opciones</h2>
	<p class="parrafo">El tipo de datosb  <b>Option</b>  es un tipo de enumerador de base cero y, por lo tanto, permite convertir valores de <b>opción</b>  en enteros. Por esa razón, el tipo de datos Option es un tipo de datos numéricos, ya que los valores de <b>opción</b> se almacenan como números enteros.</p>
	<p class="parrafo">Para definir una variable de tipo <b>Option</b>, no puede usar la propiedad OptionMembers que se usa en un campo de tipo de datos <b>Option</b>. Debe enumerar las opciones disponibles como una lista separada por comas después de definir la variable.</p>
	<p class="parrafo">En el siguiente ejemplo vamos a agregar un campo a la tabla Persona, donde se pueda agregar el color de ojos, utilizara un option.</p>
	<div class="img-content2">
	<img src="img/option1.PNG" alt="">
	</div>
	<p class="parrafo">Después de agregar el campo color de ojos en la tabla Persona, agregaremos el mismo campo en la pageList y en la pageCard para visualizarlo en la interfaz.</p>
	<div class="img-content">
	<img src="img/option2.PNG" alt="">
	</div>
	<p class="parrafo">En la interfaz vemos como tenemos las diferentes opciones del campo color de ojos.</p>

	`;

	cuerpo.innerHTML= contenido;

}
/*=============
Table relation
==============*/

let tableRelation = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `

	<h2 class="Subtitulos">Relaciones entre tablas</h2>
	<p class="parrafo">La propiedad TableRelation le permite establecer búsquedas en otras tablas. Esta propiedad mostrará un menú desplegable en las páginas, donde un usuario puede seleccionar un valor de la tabla vinculada.. </p>
	<p class="parrafo">En este ejemplo vamos a crear una tabla que se llame Profesor, en el cual tendrá un IdProfesor, pero a su vez ese IdProfesor tendrá  el, Id de una persona, en este caso la relación será de la tabla Profesor hacia la tabla Persona a través del campo Id_Persona</p>
	<div class="img-content2">
	<img src="img/relation1.PNG" alt="">
	</div>
	<p class="parrafo">Con nuestra tabla profesor creada, crearemos también las diferentes páginas para poder visualizar en la interfaz, ProfesorList y ProfesorCard.</p>
	<div class="img-content2">
	<img src="img/relation2.PNG" alt="">
	</div>
	<p class="parrafo">En la interfaz vemos como en el campo Id_Persona con alias Nombre profesor, al seleccionar uno de ellos queda seleccionado el nombre del profesor.</p>
	<div class="img-content">
	<img src="img/relation3.PNG" alt="">
	</div>
	<h3>Relación de tabla filtrada</h3>
	<p class="parrafo">Una relación de tabla normal muestra todos los registros de la tabla vinculada. Con una relación de tabla filtrada, puede limitar los registros que se muestran mediante el uso de uno o varios filtros en los registros de la tabla. Como resultado, una relación de tabla filtrada solo muestra un subconjunto de los registros.</p>
	<p class="parrafo">En este ejemplo se muestra una aplicación sencilla de la propiedad para crear una consulta filtrando entre los registros para incluir sólo aquellos en los que los gastos de compra son superiores a 10.000.</p>
	<div class="img-content">
	<img src="img/table5.PNG" alt="">
	</div>

	`;

	cuerpo.innerHTML= contenido;

}

/*====================
Caldfiels
========================*/
let calcFields = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Que es un CALCFIELDS ?</h2>
	<p class="parrafo">Los CALCFIELDS son consultas de registros que se almacenan en campos virtuales que luego podemos visualizarlos en nuestras páginas.
	También puede utilizar la función CALCFIELDS para calcular objetos binarios grandes (BLOB).</p>
	<p class="parrafo">En el ejemplo siguiente se abre la tabla 18 (Customer) como una variable RecordRef denominada CustRecordref. La función FIND (RecordRef) selecciona el primer registro de la tabla y, a continuación, recorre todos los registros hasta que no se encuentra ningún registro. Para cada registro, la función FIELD (RecordRef) crea una variable FieldRef que se denomina MyFieldref para el campo Balance Due (campo 66), que es un campo de flujo. Se llama a la función CALCFIELD para actualizar el campo antes de que se muestren el ID de cliente y el saldo adeudado. De lo contrario, el saldo adeudado por cada registro se establecerá en 0.</p>
	<p class="parrafo">En este ejemplo se requiere que cree las siguientes variables y constantes de texto en las ventanas de C/AL Globals.

	</p>
	<div class="img-content2">
	<img src="img/calcfield1.PNG" alt="">
	</div>
	<p class="parrafo">Dentro de la Codeunit "CodenunitTest.al" creamos una función en la que nos mostrara el saldo de nuestros clientes, la función se llamara <b>UseCalcField()</b> </p>
	<div class="img-content2">
	<img src="img/calcfield2.PNG" alt="">
	</div>
	<p class="parrafo">En la PageLits de Persona agregaremos los Actions para que llamemos a nuestra función.</p>
	<div class="img-content2">
	<img src="img/calcfield3.PNG" alt="">
	</div>
	<p class="parrafo">El resultado al precionar en Acciones y luego en el boton Calcfield se nos abrira una venta como mensaje donde veremos los datos del cliente con el saldo en cuenta.</p>
	<div class="img-content2">
	<img src="img/calcfield4.PNG" alt="">
	</div>


	`;

	cuerpo.innerHTML= contenido;

}
/*============================
	Flowfield
	==========================*/
let flowfield = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `

	<h2 class="Subtitulos">Uso de FlowField</h2>
	<p class="parrafo">FlowFields no son campos físicos que se almacenan en la base de datos. Son una descripción de un cálculo y una ubicación para que se muestre el resultado. Dado que la información de FlowFields solo existe en tiempo de ejecución, los valores de FlowFields se inicializan automáticamente a 0 (cero).</p>
	<h3> Tipos  de  FlowFields</h3>

	<table class="tabla1">
	<tr>
	<th>Tipo de FlowField</th>
	<th>Tipo de Campo</th>
	<th>Descripción</th>
	</tr>
	<tr>
	<th>Sum</th>
	<td>Decimal,Integer,BigInteger o Duration</td>
	<td>Suma de un conjunto especificado en una columna de una tabla.</td>
	</tr>
	<tr>
	<th>Average</th>
	<td>Decima,Integer,BigInteger o Duration</td>
	<td>Valor medio de un conjunto especificado en una columna de una tabla.</td>
	</tr>
	<tr>
	<th>Exist</th>
	<td>Booleano</td>
	<td>Indica si existen registros en un conjunto especificado de una tabla.</td>
	</tr>
	<tr>
	<th>Count</th>
	<td>Entero</td>
	<td>  Número de registros de un conjunto especificado en una tabla.</td>
	</tr>
	<tr>
	<th>Min</th>
	<td>Cualquier</td>
	<td>  El valor mínimo de una columna de un conjunto especificado en una tabla.</td>
	</tr>
	<tr>
	<th>Max</th>
	<td>Cualquier</td>
	<td>  Valor máximo de una columna de un conjunto especificado en una tabla.</td>
	</tr>
	<tr>
	<th>Lookup</th>
	<td>Cualquier</td>
	<td>  Busca un valor en una columna de otra tabla.</td>
	</tr>
	</table><br>
	<p class="parrafo">En el siguiente Ejemplo crearemos una Page List que nos muestre  el ID del cliente, su nombre y si este tiene facturas pendientes por pagar.</p>
	<div class="img-content2">
	<img src="img/flowfield.PNG" alt="">
	</div>
	<p class="parrafo">
	FlowFields aumenta el rendimiento en actividades como el cálculo de facturas del cliente. En los sistemas de bases de datos tradicionales, esto implica una serie de accesos y cálculos antes de que un resultado esté disponible. Al usar FlowFields, el resultado está disponible de inmediato.
	</p>
	<div class="img-content2">
	<img src="img/flowfield1.PNG" alt="">
	</div>
	<p class="parrafo">En nuestra interfaz veremos la información extraída de nuestros Flowfields utilizados, vemos que nos muestra el Id del cliente, Nombre cliente y la cantidad de facturas por pagar.</p>
	<div class="img-content2">
	<img src="img/flowfield2.PNG" alt="">
	</div>

	`;

	cuerpo.innerHTML= contenido;

}
/*==========================	
		Array
		=====================*/
let arrayMetodo= () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `

	<h2 class="Subtitulos">Uso de Colecciones</h2>
	<p class="parrafo"><b>AL </b> dmite tres tipos de colecciones. Una colección es un tipo complejo que contiene múltiples valores en una variable. Todas esas colecciones están fuertemente tipificadas, lo que significa que no puede tener valores con diferentes tipos en la misma colección. Por ejemplo, no puede agregar valores de fecha en una colección que solo permite valores enteros. Los tres tipos de colecciones que AL admite son:</p>
	<div class="contentList">
	<ul>
	<li>Array</li>
	<li>List</li>
	<li>Diccionary</li>
	</ul>
	</div>
	<h3>Método Array</h3>
	<p class="parrafo">Un Array es una estructura de datos que contiene muchas variables, a las que se accede a través de índices calculados. Un índice es la ubicación de la variable almacenada en una matriz. Las variables contenidas en una matriz también se denominan elementos de la matriz. La matriz siempre almacena elementos del mismo tipo de datos.</p>
	<p class="parrafo">Una array contiene varios valores. Estos valores se almacenan en los elementos del array. Puede acceder a estos valores mediante el uso del índice, que también puede ser un valor almacenado en otra variable. Con este diseño, puede crear un bucle en el que incremente una determinada variable para recorrer cada elemento de una array. Puede definir cuántas dimensiones tendrá la array mediante el uso de la propiedad Dimension.</p>
	<p class="parrafo">Al crear una variable de un tipo de datos de array, primero debe definir cuántos elementos tendrá  el array. El Array más utilizado es el Array unidimensional, que es una lista de elementos con el mismo tipo de datos.</p>
	<div class="img-content">
	<img src="img/array1.PNG" alt="">
	</div>
	<p class="parrafo">
	En el siguiente ejemplo, dentro de una función declaramos un Array que tendrá 5 elementos y será de tipo texto en 
	sus campos, definimos una variable Num de tipo Integer que nos servirá como contador para recorrer el
	Array de Ciudades mediante un bucle for, luego mostraremos en una ventana de mensaje el nombre de las
	ciudades hasta el final de la extensión del array.
	</p>
	<div class="img-content2">
	<img src="img/array2.PNG" alt="">
	</div>
	<p class="parrafo">En el siguiente ejemplo instanciamos un Array de tipo text de extensión de 10,
	pero tendremos un segundo Array  que copiara información del primer Array, pero le diremos 
	que desde la posición 3 y un máximo de 5 campos.</p>
	<div class="img-content2">
	<img src="img/array3.PNG" alt="">
	</div>
	<p class="parrafo">Observamos que al ejecutar el action, nos mostrara en pantalla desde el campo 3,
	en este caso desde Barcelona en adelante.</p>
	<div class="img-content2">
	<img src="img/array4.PNG" alt="">
	</div>
	<p class="parrafo"><b>Nota</b></p>
	<p class="parrafo">Una matriz tiene un rango que determina el número de índices que es el tiempo que 
	se tarda en llegar a un elemento. Y si hay elementos que se repiten, su rango será el mismo que su
	primera aparición en la matriz. El rango de una matriz también se conoce como la dimensión de la matriz. 
	Una matriz con un rango de uno se denomina matriz unidimensional. Una matriz con un rango mayor que uno se 
	denomina matriz multidimensional. Las matrices multidimensionales de tamaño específico a menudo se denominan
	matrices bidimensionales, matrices tridimensionales, etc. Cada dimensión de una matriz tiene una longitud
	asociada, que es un número integral mayor o igual que cero. El número máximo de dimensiones es 10 y el 
	número total de elementos en todas las dimensiones es 1.000.000.</p>

	`;

	cuerpo.innerHTML= contenido;
}

let listas = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Método List</h2>
	<p class="parrafo">El tipo de datos <b>List</b> se puede comparar con una array. El tipo List solo se puede usar con tipos fundamentales y representa una lista de valores fuertemente tipificados a los que se puede acceder por índice.</p>
	<p class="parrafo">Un tipo de datos List no requiere que defina cuántos elementos desea almacenar por adelantado (mientras que un tipo de datos Array sí lo requiere).</p>
	<p class="parrafo">Los métodos siguientes están disponibles en instancias del tipo de datos List.</p>

	<table class="tabla1">
	<tr>
	<th>Nombre del método</th>
	<th> Descripción</th>
	</tr>
	<tr>
	<th>Add(T)</th>
	<td>Agrega un valor al final de la lista.</td>
	</tr>
	<tr>
	<th>AddRange(T [, T,...])</th>
	<td> Agrega los elementos de la colección especificada al final de la lista.</td>
	</tr>
	<tr>
	<th>AddRange(List of [T])</th>
	<td> Agrega los elementos de la colección especificada al final de la lista.</td>
	</tr>
	<tr>
	<th>Contains(T)</th>
	<td> Determina si un elemento está en la Lista.</td>
	</tr>
	<tr>
	<th>Count()</th>
	<td> Obtiene el número de elementos contenidos en la lista.</td>
	</tr>
	<tr>
	<th>Get(Integer, var T)</th>
	<td>Obtiene el elemento en el índice especificado.</td>
	</tr>
	<tr>
	<th>Get(Integer)</th>
	<td> Obtiene el elemento en el índice especificado. Este método generará un error si el índice está fuera del intervalo válido.</td>
	</tr>
	<tr>
	<th>GetRange(Integer, Integer)</th>
	<td> Obtenga una copia superficial de una variedad de elementos en la fuente.</td>
	</tr>
	<tr>
	<th>GetRange(Integer, Integer, var List of [T])</th>
	<td>Obtenga una copia superficial de una variedad de elementos en la fuente.</td>
	</tr>
	<tr>
	<th>IndexOf(T)</th>
	<td> Busca el valor especificado y devuelve el índice basado en uno de la primera aparición dentro de toda la lista.</td>
	</tr>
	<tr>
	<th>Insert(Integer, T)</th>
	<td> Inserta un elemento en la lista en el índice especificado.</td>
	</tr>
	<tr>
	<th>LastIndexOf(T)</th>
	<td> Busca el valor especificado y devuelve el índice basado en uno de la última aparición dentro de toda la lista.</td>
	</tr>
	<tr>
	<th>Remove(T)</th>
	<td> Quita la primera aparición de un valor especificado de la lista.</td>
	</tr>
	<tr>
	<th>RemoveAt(Integer)</th>
	<td> Quita el elemento en el índice especificado de la Lista.</td>
	</tr>
	<tr>
	<th>RemoveRange(Integer, Integer)</th>
	<td>Quita una serie de elementos de la lista.</td>
	</tr>
	<tr>
	<th>Reverse()</th>
	<td> Invierte el orden de los elementos de toda la lista.</td>
	</tr>
	<tr>
	<th>Set(Integer, T)</th>
	<td>Establece el elemento en el índice especificado.</td>
	</tr>
	<tr>
	<th>Set(Integer, T, var T)</th>
	<td> Establece el elemento en el índice especificado.</td>
	</tr>
	</table>
	<br>
	<p class="parrafo">La Lista solo se puede usar con tipos simples, es decir, puede tener una Lista de [Entero] pero no puede tener una Lista de [Blob]. Del mismo modo, el tipo de datos List no admite la retención de registros instanciados. Para este propósito, use tablas temporales.</p>
	<p class="parrafo">Las listas están indexadas basadas en 1, es decir, la indexación de una lista comienza con 1.</p>
	<p class="parrafo">En el ejemplo creamos una lista de la tabla Cliente, donde mostraremos en mensaje el nombre y correo de cada cliente, lo recorremos con la funcción Foreach así nos muestra uno por uno.</p>
	<div class="img-content2">
	<img src="img/List1.PNG" alt="">
	</div>


	`;

	cuerpo.innerHTML= contenido;

}
/*=================
Diccionary
==========*/
let diccionary = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `

	<h2 class="Subtitulos">Método diccionario</h2>
	<p class="parrafo">Representa una colección desordenada de claves y valores. El tipo de datos Diccionario está optimizado para una búsqueda rápida de valores.</p>
	<p class="parrafo">Los métodos siguientes están disponibles en instancias del tipo de datos Dictionary.</p>
	<table class="tabla1">
	<tr>
	<th>Nombre del método</th>
	<th>  Descripción</th>
	</tr>
	<tr>
	<td>Add(TKey, TValue)</td>
	<td>  Agrega la clave y el valor especificados al diccionario.</td>
	</tr>
	<tr>
	<td>ContainsKey(TKey)</td>
	<td>  Determina si el diccionario contiene la clave especificada.</td>
	</tr>
	<tr>
	<td>Count()</td>
	<td>  Obtiene el número de pares clave/valor contenidos en el diccionario.</td>
	</tr>
	<tr>
	<td>Get(TKey, var TValue)</td>
	<td>  Obtiene el valor asociado a la clave especificada.</td>
	</tr>
	<tr>
	<td>Get(TKey)</td>
	<td>  Obtiene el valor asociado a la clave especificada.</td>
	</tr>
	<tr>
	<td>Keys()</td>
	<td>  Obtiene una colección que contiene las claves del diccionario.</td>
	</tr>
	<tr>
	<td>Remove(TKey)</td>
	<td>  Quita el valor con la clave especificada del diccionario.</td>
	</tr>
	<tr>
	<td>Set(TKey, TValue)</td>
	<td>  Establece el valor asociado a la clave especificada.</td>
	</tr>
	<tr>
	<td>Set(TKey, TValue, var TValue)</td>
	<td>  Establece el valor asociado a la clave especificada.</td>
	</tr>
	<tr>
	<td>Values()</td>
	<td>  Obtiene una colección que contiene los valores del diccionario.</td>
	</tr>
	</table><br>
	<p class="parrafo">Cada adición al diccionario consta de un valor y su clave asociada. Cada clave de un diccionario debe ser única. Una clave no puede ser nula, pero un valor puede serlo, sólo cuando el tipo de valor es un tipo de referencia.</p>
	<p class="parrafo">El tipo de datos Dictionary no admite la retención de registros instanciados. Para este propósito, use tablas temporales.</p>
	<p class="parrafo">En el ejemplo siguiente, la variable representa el tipo de datos Dictionary para almacenar un valor que representa el número de apariciones para cada carácter en el archivo . Usando el método, se obtiene el número de ocurrencias para el carácter en la posición . Si devuelve false, significa que no hay ningún valor asociado a ese carácter, por lo que se agrega el valor 1. Si devuelve true, significa que el valor ya existe, por lo que se agrega al valor. El método agrega el par {key:value} al diccionario.countercustomerNameGetiiic + 1Add</p>
	<div class="img-content2">
	<img src="img/diccionary.PNG" alt="">
	</div>
	<p class="parrafo">Vemos un segundo ejemplo donde como agregar datos a un diccionario y leerlos</p>
	<div class="img-content2">
	<img src="img/diccionary2.PNG" alt="">
	</div>

	`;

	cuerpo.innerHTML= contenido;

}

/*====================
	table extención
	====================*/
let tableExtend = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Introduccións de las  extensiones de tabla  </h2>
	<p class="parrafo"><b>* </b>El objeto ExtensiónDeTabla se usa para extender tablas ya existentes de la aplicación Business Central. Es importante conocer los siguientes puntos clave de los objetos ExtensiónDeTabla.</p>
	<p class="parrafo"><b>* </b>Con una extensión de tabla, puede modificar algunas propiedades de la tabla, pero no todas. Por ejemplo, no puede cambiar las propiedades Id. y el Nombre.</p>
	<p class="parrafo"><b>* </b>Puede agregar campos nuevos y modificar algunas propiedades de campos ya existentes, pero no puede eliminar campos que ya existan. Si tiene un campo del tipo Texto o Código y desea cambiar 
	la longitud de ese campo, no puede hacerlo porque no es posible.</p>
	<p class="parrafo"><b>* </b>Puede crear claves nuevas secundarias pero no modificar ni eliminar claves ya existentes.</p>
	<p class="parrafo">La creación de una extensión de tabla es igual que la creación de una tabla, se usa el fragmento ttableext. Además, puede agregar campos como agregaría campos a una tabla normal mediante el fragmento tfield.</p>
	<p class="parrafo">Todas las extensiones de tablas tienen un nombre propio. Como se ha comentado anteriormente en el módulo Trabajar con tablas en Dynamics 365 Business Central, le recomendamos que utilice un prefijo o sufijo en el
	nombre del objeto para que sea único. Por cada campo de la extensión de tabla, tiene que especificar un prefijo o sufijo en el nombre del campo.</p>
	<div class="img-content2">
	<img src="img/extendtable.PNG" alt="">
	</div>
	<p class="parrafo">En este ejercicio vemos como agregamos un campo con nombre Facebook donde el campo facebook guardara la URL del cliente que nos lleve a su cuenta personal.</p>
	<div class="img-content2">
	<img src="img/extendtable2.PNG" alt="">
	</div>
	<p class="parrafo">Creamos la extencion de la Page en este caso seria la "Customer card", así podremos visualizar el nuevo campo en la tabla Customer.</p>
	<div class="img-content2">
	<img src="img/extendtable3.PNG" alt="">
	</div>
	<p class="parrafo">En la Parte visual de la tabla Customer podemos ver nuestro campo Facebook creado.</p>
	<div class="img-content2">
	<img src="img/extendtable4.PNG" alt="">
	</div>

	<p class="parrafo">Una extensión de tabla le permite sobrescribir algunas propiedades en la tabla y los campos. Sin embargo, la lista de propiedades que se pueden modificar es limitada.</p>
	<p class="parrafo">Solo puede cambiar las siguientes propiedades de tabla con una extensión de tabla:</p>
	<div class="contentList"> 
	<ul>
	<li>Caption</li>
	<li>DataCaptionFields</li>
	<li>Description</li>
	<li>DrillDownPageId</li>
	<li>LookupPageId</li>
	</ul>
	</div>
	<p class="parrafo">Del mismo modo, solo puede cambiar las siguientes propiedades de campo:</p>
	<div class="contentList">
	<ul>
	<li>BlankZero</li>
	<li>Caption</li>
	<li>CaptionClass</li>
	<li>Description</li>
	<li>OptionCaption (solo para la opción de tipo de datos)</li>
	<li>TableRelation</li>
	<li>Width (indica el tamaño de visualización de un campo en una página y no especifica la longitud de un campo en una tabla).</li>
	</ul>
	</div>
	<p class="parrafo">En este modulo hemos aprendido a crear una extensión de tabla con el fragmento ttableext.
	Una extensión de tabla se usa para agregar campos a una tabla existente. También puede usar extensiones de tabla para modificar 
	las propiedades de los campos existentes.</p>
	<p class="parrafo">No todas las propiedades del objeto Tabla están disponibles en el objeto ExtensiónDeTabla.</p>
	<p class="parrafo">Cuando agregue campos adicionales a una tabla existente, debe asegurarse de no utilizar los mismos 
	números o nombres de los campos ya existentes. Use prefijos o sufijos para identificar sus campos de forma exclusiva.</p>
	`;

	cuerpo.innerHTML= contenido;
}

	/*=============================
		Reportes
		====================================*/

let reportes = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `

	<h2 class="Subtitulos">Creación de reportes</h2>
	<p class="parrafo"><b>Introducción</b></p>
	<p class="parrafo">Puede crear un objeto de informe en el entorno de desarrollo del lenguaje AL para definir el modelo de datos o el conjunto de datos de un informe. Puede estructurar y resumir información en un informe e imprimir documentos como ofertas de venta y facturas. En el proceso de diseño de informes se explican los pasos habituales de la creación de un nuevo informe. Puede crear el conjunto de datos de un informe agregando elementos de datos y columnas.</p>
	<p class="parrafo">Los informes se utilizan para imprimir o mostrar información de una base de datos. Puede usar un informe para estructurar y resumir información y para imprimir documentos como ofertas de venta y facturas.</p>
	<p class="parrafo">La creación de un informe consta de dos tareas principales:</p>
	<div class="contentList">
	<ul>
	<li>Crear el modelo de datos subyacente</li>
	<li>Definir el diseño visual que muestra los datos.</li>
	</ul>
	</div>
	<p class="parrafo">El objeto de informe define el modelo de datos subyacente y especifica de qué tablas y campos de la base de datos se extraerán los datos. Cuando se ejecuta el informe, esos datos se muestran en un diseño específico: el diseño visual, que determina el contenido y el formato de un informe cuando se visualiza e imprime.</p>
	<p class="parrafo">Puede crear el diseño de un informe organizando los elementos de datos y las columnas y especificando el formato general, como la fuente y el tamaño del texto. Dos tipos de diseños de informes son diseños de definición del informe del cliente (RDL) y diseños de Word. Los diseños RDL se definen en el Generador de informes de Microsoft SQL Server Reporting Services. Los diseños de Word se crean utilizando Microsoft Word. Los diseños de Word se basan en un documento de Word que incluye una parte XML personalizada que representa el conjunto de datos del informe.</p>
	<p class="parrafo">Al introducir el acceso directo<b> treport, </b>   se creará el diseño básico de un objeto de informe cuando esté utilizando la característica Extensión de AL en Visual Studio Code.</p>
	<p class="parrafo">En el siguiente ejemplo se muestra la lógica de muestra del uso del acceso directo treport.</p>
	<div class="img-content2">
	<img src="img/reporte1.PNG" alt="">
	</div> 
	<p class="parrafo">En el siguiente ejemplo crearemos un reporte sobre la tabla que estuvimos trabajando, la tabla <b>Persona</b> obtendremos mediante una reporte todos los datos que necesitemos.</p>
	<div class="img-content2">
	<img src="img/reporte2.PNG" alt="">
	</div> 
	<p class="parrafo">En el <b>dataitem(Persona; Persona)</b> le especificamos la tabla que usaremos para crear nuestro reporte.</p>
	<p class="parrafo">Al ejecutar nuestro programa se creara un archivo xml con los datos de nuestro reporte.</p>
	<div class="img-content2">
	<img src="img/reporte3.PNG" alt="">
	</div> 
	<p class="parrafo">Daremos click derecho sobre nuestro archivo creado Persona_report.rdl y lo editaremos con Power BI Report Builder.</p>
	<div class="img-content2">
	<img src="img/reporte4.PNG" alt="">
	</div> 
	<p class="parrafo">Para poder Visualizar nuestro reporte entraremos a la interfaz de Business Central y en la barra de busqueda introducimos PersonaReporte y le damos a la opcion imprimir, en el veremos los datos optenidos.</p>
	<div class="img-content2">
	<img src="img/reporte5.PNG" alt="">
	</div> 


	<p class="parrafo">Para crear un informe, puede usar el fragmento treport. Este fragmento genera el esqueleto del objeto de informe y, al usarlo, puede continuar diseñando un informe.
	El conjunto de datos de un informe contiene los elementos de datos del informe. Puede agregar uno o más elementos de datos a un informe. Puede utilizar el fragmento tdataitem para agregar un elemento de datos a un informe y el fragmento tcolumn para agregar una columna a un elemento de datos.</p>
	<h4>Videotutorial como crear un Reporte</h4>
	<iframe class="ifra" src="https://www.youtube.com/embed/0wh1TCYGryA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

	`;

	cuerpo.innerHTML= contenido;
}
/*=====================
	Requestpage
========================*/
let requestpage = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Las Request Page</h2>
	<p class="parrafo">Un informe recopila información en función de un conjunto específico de criterios, y organiza y presenta la información en un formato fácil de leer que puede imprimir o guardar como un archivo. Microsoft Dynamics 365 Business Central proporciona muchos informes a los que puede obtener acceso. Normalmente, los informes proporcionan información relativa al contexto de la página en la que se encuentra.</p>
	<p class="parrafo">Puede encontrar informes en la pestaña Informes en las páginas seleccionadas, o puede utilizar la bombilla de búsqueda que abre la característica Dígame para buscar informes por nombre.</p>
	<p class="parrafo">Normalmente, cuando abre un informe, aparecerá una página de solicitud, donde puede establecer varias opciones y filtros que determinan qué información incluir en el informe.</p>
	<p class="parrafo">En este módulo se explica también cómo obtener una vista previa, enviar correos electrónicos e imprimir informes en Business Central.</p>
	<h3>Obtener una vista previa de informes y generarlos</h3>
	<p class="parrafo">Al generar un informe, se le presentará la <b>Request Page</b> del informe. La <b>Request Page</b> le permite decidir si desea obtener una vista previa, imprimir, exportar o programar la implementación del informe.</p>
	<p class="parrafo">La siguiente captura de pantalla muestra acciones que puede completar en la request page. Por ejemplo, en la página Lista de clientes, encontrará una sección Informe en el menú de acciones. Al seleccionar el informe Cliente: lista de ventas en el menú de acciones Informe, se abrirá la rquest page de ese informe.</p>
	<div class="img-content2"><img src="img/requestPage.png" alt=""></div>
	<p class="parrafo">La <b>Request Page</b> permite a los usuarios especificar las opciones y los filtros de los informes. De forma predeterminada, se muestra una reques page, a menos que <b>UseRequestPage</b> esté establecido en false, en cuyo caso el informe comenzará a imprimirse tan pronto como se genere. En este caso, los usuarios finales no pueden cancelar la generación del informe. Seguirá siendo posible cancelar el informe, pero podrían imprimirse algunas páginas.</p>
	<p class="parrafo">De forma predeterminada, sin no se han configurado otros filtros, una página de solicitud mostrará siempre los siguientes botones:</p>
	<div class="contentList">
	<ul>
	<li>Enviar a</li>
	<li>Imprimir</li>
	<li>Vista previa</li>
	<li>Cancelar</li>
	</ul>
	</div>

	<p class="parrafo">Además, puede agregar más opciones en la request page, para que el usuario pueda filtrar los datos mostrados.</p>
	<p class="parrafo">Las columnas que defina como RequestFilterFields se muestran en la request page, y se pueden usar para filtrar los datos antes de ver o imprimir el informe. Se recomienda agregar columnas en las que los usuarios del informe establecerán filtros con frecuencia.</p>
	<p class="parrafo">
	Puede definir la propiedad RequestFilterFields en la parte dataitem() del código de informe, como se muestra en el siguiente ejemplo de código:
	</p>
	<div class="img-content2"><img src="img/requestPage2.PNG" alt=""></div>
	<p class="parrafo">De forma predeterminada, para cada elemento de datos del informe, se crea una ficha desplegable para definir filtros y ordenarlos en la request page. Para eliminar una ficha desplegable de una request page, asegúrese de no definir RequestFilterFields para el elemento de datos y de establecer la propiedad DataItemTableView de un informe para definir la ordenación. Se mostrará la request page, pero no habrá disponible ninguna pestaña para este elemento de datos.</p>
	<p class="parrafo">Además de definir las opciones de filtro estableciendo la propiedad <b>RequestFilterFields</b>, puede agregar una sección <b>requestpage</b> en los informes. En esta sección, puede establecer la propiedad <b>SaveValues</b> en true para guardar los valores que el usuario final introduce en la request page. Cuando se vuelve a generar el informe, el usuario tendrá la opción de usar filtros definidos previamente. También puede agregar un diseño a la request page, especificando una sección Opciones para realizar comprobaciones.</p>
	<p class="parrafo">Con páginas de solicitud con SaveValues = true, los usuarios pueden obtener una vista previa del informe varias veces en el cliente y la página de solicitud permanecerá abierta. Si SaveValues = false o se omite, aparece una acción Vista previa y cerrar en la página de solicitud. En este caso, la página de solicitud se cerrará después de previsualizar el informe.</p>
	<div class="img-content2"><img src="img/requestPage3.PNG" alt=""></div>
	<p class="parrafo">Si no se definen <b>DataItemTableView</b> ni <b>SourceTableView</b>, los usuarios pueden seleccionar una columna de ordenación y un criterio de ordenación en tiempo de ejecución.</p>
	<p class="parrafo">En un informe complejo que utilice datos de varias tablas, la funcionalidad podría depender de una clave y un criterio de ordenación específicos. Diseñe sus informes para que los usuarios no puedan cambiar el criterio de ordenación de una manera que afecte a su funcionalidad.</p>
	<p class="parrafo">Para los elementos de datos cuya tabla de origen contenga campos calculados, como importes y cantidades, la sección Filtrar totales por se incluirá automáticamente en la página de solicitud, lo que le permite ajustar diversas dimensiones que influyen en los cálculos.</p>
	<p class="parrafo">Los campos de Avanzado establecerán limitaciones en el informe generado para controlar los recursos de la impresora. Por lo general, no tendrá que cambiar esta configuración, a menos que el informe sea grande. Si un informe supera estas limitaciones al intentar obtener una vista previa o imprimir, aparecerá un mensaje que le indicará la limitación que se superó. A continuación, puede cambiar la configuración para adaptarla a su informe. Sin embargo, cada campo tiene un valor máximo que debe conocer:</p>
	<div class="contentList">
	<ul>
	<li>Tiempo de representación máximo = 12:00:00</li>
	<li>Número máximo de filas = 1 000 000</li>
	<li>Número máximo de documentos = 500</li>
	</ul>
	</div>
	<div class="img-content2"><img src="img/requestPage4.PNG" alt=""></div>
	<p class="parrafo">Los valores máximos podrían ser diferentes para Business Central local y un administrador puede cambiarlos.</p>
	<h3>Programar un informe para generarse</h3>
	<p class="parrafo">Puede programar un informe para que se genere en una fecha y hora específicas. Los informes programados y los trabajos por lotes se introducen en la cola de trabajos y se procesan a la hora programada, de manera similar a otros trabajos. Seleccione la opción <b>Programar</b> después de seleccionar el botón <b>Enviar a</b> y, a continuación, pude introducir información como la impresora, la hora y la fecha.</p>
	<div class="img-content2"><img src="img/requestPage5.png" alt=""></div>
	<p class="parrafo">El informe se agrega a la cola de trabajos y se generará a la hora especificada. Cuando se procese el informe, el elemento se eliminará de la cola de trabajos.</p>
	<p class="parrafo">Cuando programe la generación de un informe, puede especificar que debe ejecutarse todos los jueves estableciendo el campo Fórmula de fecha de la próxima generación en D4, por ejemplo.</p>
	<div class="img-content2"><img src="img/requestPage6.PNG" alt=""></div>
	<p class="parrafo">Puede optar por guardar el informe en un archivo, como Excel, Word o PDF, y luego imprimirlo en una impresora seleccionada o solo generarlo. Si opta por guardar el informe en un archivo, el informe procesado se envía al área Bandeja de entrada de informes de su Área de trabajo, donde puede verlo.</p>
	<p class="parrafo">Videotutorial  Report - Dynamic report layouts in Business Central.</p>
	<iframe class="ifra" src="https://www.youtube.com/embed/hPMWTToSO1A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

	`;

	cuerpo.innerHTML= contenido;

}
/*===============================
	EVENTO SUSCRIPTOR
	================================*/
let eventosSuscriptor = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Eventos en AL (Business Central)</h2>
	<p class="parrafo">En Microsoft Business Central también encontraremos algo básico a la hora de programar y/o usar un sistema que consiste en los eventos, de hecho, los eventos están presentes durante la ejecución de cualquier programa informático sea Web, escritorio y/o móvil. Un evento básicamente se produce cuando realizamos una acción en particular dentro de dicho programa. Por ejemplo, hacer clic en un botón.</p>
	<p class="parrafo">El uso de eventos es un concepto de programación probado y establecido que puede facilitar la actualización de la aplicación y limitar o incluso eliminar la necesidad de modificaciones de código en aplicaciones personalizadas debido a los cambios en la plataforma.</p>
	<p class="parrafo">Puede usar eventos para diseñar la aplicación para reaccionar a acciones o comportamientos específicos que se producen. Los eventos permiten separar la funcionalidad personalizada de la lógica de la aplicación.</p>
	<p class="parrafo"> Mediante el uso de eventos en la aplicación donde normalmente se realizan personalizaciones, puede reducir el costo de las modificaciones de código y las actualizaciones a la aplicación original.</p>
	<div class="contentList">
	<ul>
	<li>Las modificaciones de código a la funcionalidad personalizada se pueden realizar sin tener que modificar la aplicación original.</li>
	<li>Los cambios en el código de aplicación original se pueden realizar con un impacto mínimo en las personalizaciones.</li>
	</ul>
	</div>
	<p class="parrafo">En la tabla siguiente se describen todos los tipos de eventos diferentes:</p>
	<table class="tabla1">
	<tr>
	<th>Tipos de eventos</th>
	<th>Descripción</th>
	</tr>
	<tr>
	<td><b>BusinessEvent</b></td>
	<td>Especifica el método que se va a tratar como publicador de eventos de tipo de negocio.</td>
	</tr>
	<tr>
	<td><b>IntegrationEvent</b></td>
	<td>Especifica el método que se va a usar el publicador de eventos de tipo de integración.</td>
	</tr>
	<tr>
	<td><b>InternalEvent</b></td>
	<td>Especifica el método para ser un publicador de eventos interno.</td>
	</tr>
	<tr>
	<td><b>Global</b></td>
	<td>Especifica el método para que sea un publicador de eventos interno.</td>
	</tr>
	<tr>
	<td><b>Trigger</b></td>
	<td>El tiempo de ejecución publica los eventos de desencadenador.</td>
	</tr>
	</table>
	<p class="parrafo">El proceso para implementar estos eventos es ligeramente diferente. Para obtener más información sobre los diferentes tipos, consulte Tipos de eventos.</p>
	<p class="parrafo">Más información en la guía de Business Central<a href="https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-events-in-al"> Aquí</a></p>
	<h3>Cómo funcionan los eventos</h3>
	<p class="parrafo">El principio básico es que se programan eventos en la aplicación para ejecutar un comportamiento personalizado cuando se producen. Los eventos de AL se modelan después de Microsoft .NET Framework. Hay tres participantes importantes involucrados en eventos: el evento, un editor y un suscriptor.</p>
	<div class="contentList">
	<ul>
	<li>Un <b>evento</b> es la declaración de la ocurrencia o cambio en la aplicación. Un evento se declara mediante un método AL, que se conoce como una función de publicador de eventos. Un método de publicador de eventos se compone únicamente de una firma y no ejecuta ningún código.</li>
	<li>Un <b>publicador</b> es el objeto que contiene el método de publicador de eventos que declara el evento. El editor expone un evento en la aplicación a los suscriptores, esencialmente proporcionándoles un punto de conexión en la aplicación.</li>
	<li>Un <b>suscriptor</b>  escucha y controla un evento publicado. Un suscriptor es un método AL que se suscribe a un método de publicador de eventos específico e incluye la lógica para controlar el evento. Cuando se genera un evento, se llama al método de suscriptor y se ejecuta su código. Un suscriptor permite a los socios conectarse a la funcionalidad principal de la aplicación sin tener que realizar modificaciones de código tradicionales. Cualquier proveedor de soluciones de Dynamics 365, que también incluye Microsoft, puede usar suscriptores de eventos.</li>
	</ul>
	</div>


	<p class="parrafo"><b>Nota : </b> Debemos tener en cuenta que en Business Central no se puede tocar (modificar) el código nativo, tal como se hacía en Microsoft Dynamics NAV. En Business Central, únicamente se pueden suscribirse a eventos y manejarlos desde algún CodeUnit personalizado.</p>
	<p class="parrafo">En el Siguiente ejemplo vemos como implementar un evento suscriptor.</p>
	<div class="img-content2">
	<img src="img/event1.PNG" alt="">
	</div>
	<p class="parrafo">En la imagen vemos que mediante una codeunit "Event Suscribers" no suscribimos a un evento de la tabla Customer, lo llamamos <b>"OnBeforeValidateEventPhoneNo"</b>, el mismo llamara una Procedure Local que tendrá las diferentes validación para el campo teléfono de la tabla clientes.</p>
	<p class="parrafo">
	En las validaciones le decimos que el campo teléfono no podrá tener caracteres especiales o letras, sino nos dará error..
	</p>
	<p class="parrafo">Al establecer los argumentos de acuerdo con la siguiente tabla. Para argumentos opcionales, si no desea establecer un valor, use un valor vacío ( ''). En este caso, se utiliza el valor predeterminado, si lo hay.     </p>
	<table class="tabla1">
	<tr>
	<th>Argumento</th>
	<th>  Descripción</th>
	<th>Opcional</th>
	</tr>
	<tr>
	<td><b>&lt;Event Publisher Object Type&gt;</b></td>
	<td>Especifique el tipo de objeto que publica el evento. Este argumento puede ser Codeunit, Page, Report, Tableo XMLPort.</td>
	<td>no</td>
	</tr>
	<tr>
	<td><b>&lt;Event Publisher Object&gt;</b></td>
	<td>  Especifique el objeto que publica el evento. Puede establecer este argumento en el ID, como 50100, o la forma recomendada es utilizar el nombre del objeto mediante la sintaxis &lt;Object Type&gt;::"&lt;Object Name&gt;", como Codeunit::"MyPublishers", o para activadores de bases de datos Database::"Customer".</td>
	<td>no</td>
	</tr>
	<tr>
	<td><b>&lt;Published Event Name&gt;</b></td>
	<td>Especifique el nombre del método que publica el evento en el objeto especificado por el &lt;Event Publisher Object&gt;parámetro.</td>
	<td>no</td>
	</tr>
	<tr>
	<td><b>&lt;Published Event Element Name&gt;</b></td>
	<td>Especifica el campo de la tabla al que pertenece el evento desencadenante. Este argumento solo requiere un valor para los eventos desencadenantes de la base de datos, es decir, cuando &lt;Event Publisher Object Type&gt;se establece en Tabley el &lt;Published Event Name&gt;argumento es un evento desencadenante de validación, como OnAfterValidateEvent.</td>
	<td>no</td>
	</tr>
	<tr>
	<td><b>&lt;SkipOnMissingLicense&gt;</b></td>
	<td>Establézcalo en truepara omitir la llamada al método de suscriptor de eventos si la licencia del usuario no cubre la unidad de código del suscriptor de eventos. Si false, se arroja un error y la ejecución del código se detiene. falsees el predeterminado.</td>
	<td>sí</td>
	</tr>
	<tr>
	<td><b>&lt;SkipOnMissingPermission&gt;</b></td>
	<td>Establézcalo en truepara omitir la llamada al método de suscriptor de eventos si el usuario no tiene los permisos correctos para la unidad de código del suscriptor de eventos. Si false, se arroja un error y la ejecución del código se detiene. falsees el predeterminado.</td>
	<td>sí</td>
	</tr>
	</table>
	<br>

	<p class="parrafo"> <b>Nota: <br></b>Hay un par de cosas que pueden facilitar la definición de un método de suscriptor de eventos. Puede usar el <b>teventsub</b> fragmento para comenzar. Luego, al escribir el método abreviado de teclado 
	<b>Ctrl+Espacio</b> , se muestra IntelliSense para ayudarlo a completar los argumentos de los atributos y descubrir qué eventos están disponibles. O use el atajo de teclado 
	<b>Shift+Alt+E</b> para buscar el evento al que desea suscribirse e inserte el código.</p>
	<div class="img-content2">
	<img src="img/event2.PNG" alt="">
	</div>
	<p class="parrafo"> Observamos que al escribir texto en el campo teléfono nos salta un error y no podremos guardar los cambios hasta introducir números enteros dentro del campo teléfono.</p>
	<p class="parrafo">Documentación de Creación de un método de suscriptor de eventos <a href="https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-subscribing-to-events">Aquí</a>.</p>
	<p class="parrafo">Videos sobre como funciona los eventos : </p>

	<p class="parrafo">Single Instance EventSubscribers in AL and Business Central </p>
	<iframe class="ifra" src="https://www.youtube.com/embed/_MiBa2Fms1g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	<br>
	<p class="parrafo">Easy implement Event Subscribers in AL</p>
	<iframe class="ifra" src="https://www.youtube.com/embed/vLCdLmrXmZE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

	`;

	cuerpo.innerHTML= contenido;

}

/*===================
Tipos de Eventos
======================*/
let tiposEventos = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `

	<h2 class="Subtitulos">Tipos de eventos</h2>

	<p class="parrafo">Dynamics 365 Business Central admite diferentes tipos de eventos para diferentes propósitos.</p>
	<h3>Business events</h3>
	<p class="parrafo">Un evento empresarial es un evento personalizado generado por el código AL. Define un contrato formal que conlleva una promesa implícita de no cambiar en versiones futuras. Se espera que los eventos comerciales sean publicados por los ISV de soluciones, incluido Microsoft.</p>
	<p class="parrafo">Los eventos comerciales se pueden comparar con las API publicadas públicamente en las que los proveedores de soluciones de terceros desarrollan integraciones y adiciones. Por lo tanto, el costo posterior de realizar cambios en la implementación de un evento comercial puede ser considerable para aquellos que usan el evento en sus aplicaciones. Puede haber algunos casos en los que se requieran cambios; sin embargo, debe mantener estos al mínimo absoluto.</p>

	<p class="parrafo">Un Business events típico refleja cambios en el "estado" con respecto a un proceso. Esto los hace muy adecuados para el flujo de trabajo. Un ejemplo de un evento comercial podría ser cuando se registra una orden de venta. Es importante tener en cuenta que los eventos comerciales no deben vincularse a los detalles de implementación, como las tablas o los campos en los que se almacenan los datos. Preferiblemente, el desarrollador del editor de eventos debe tener la libertad de cambiar la implementación, manteniendo intacto el evento comercial. Para obtener información sobre la sintaxis y el ejemplo sobre cómo usar el tipo BusinessEvent, consulte <a href="https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/attributes/devenv-businessevent-attribute">Atributo BusinessEvent</a> .</p>
	<h3>Integration events</h3>
	<p class="parrafo">Un evento de integración también es un evento personalizado que genera el código AL, como un evento comercial, excepto que no tiene la misma promesa de no cambiar, ni tiene la restricción de no exponer los detalles de implementación.</p>
	<p class="parrafo">El objetivo principal de los eventos de integración es permitir la integración de otras soluciones con Dynamics 365 Business Central sin tener que realizar modificaciones de código tradicionales.</p>
	<p class="parrafo">Un evento de integración se puede cambiar a un evento de negocios más adelante. Momento en el cual, debe adherirse al mismo contrato y compromiso implícito que cualquier evento empresarial. También puede diseñarse simplemente como puntos de enganche para complementos externos. Para obtener información sobre la sintaxis y el ejemplo sobre cómo usar el tipo IntegrationEvent, consulte el <a href="https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/attributes/devenv-integrationevent-attribute">atributo IntegrationEvent</a> .</p>
	<p class="parrafo">To learn about the syntax and example on how to use the InternalEvent type, see <a href="https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/attributes/devenv-internalevent-attribute">InternalEvent Attribute</a>.</p>
	<h3>Global events</h3>
	<p class="parrafo">Los eventos globales son eventos del sistema predefinidos que son generados automáticamente por varias unidades de código de aplicación base. Por ejemplo, Codeunit 40 <b>LoginManagement</b> incluye varios activadores de métodos globales, como CompanyOpen, CompanyClose y GetSystemIndicator. Para la mayoría de estos disparadores de métodos globales, hay uno o dos eventos globales: un evento anterior y posterior. Por ejemplo, hay un evento OnBeforeCompanyOpen y un evento OnAfterCompanyOpen. Los eventos globales se definen como publicadores de eventos de integración mediante métodos locales en las siguientes unidades de código.</p>
	<table class="tabla1">
	<tr>
	<th>Codeunit ID</th>
	<th>Codeunit Name</th>
	<th>Event</th>
	</tr>
	<tr>
	<td>40</td>
	<td>LoginManagement</td>
	<td>OnRoleCenterOpen</td>
	</tr>
	<tr>
	<td></td>
	<td></td>
	<td>OnAfterLogInEnd</td>
	</tr>
	<tr>
	<td></td>
	<td></td>
	<td>OnBeforeLogInStart</td>
	</tr>
	<tr>
	<td></td>
	<td></td>
	<td>OnBeforeCompanyOpen</td>
	</tr>
	<tr>
	<td></td>
	<td></td>
	<td>OnAfterCompanyOpen</td>
	</tr>
	<tr>
	<td></td>
	<td></td>
	<td>  OnBeforeCompanyClose</td>
	</tr>
	<tr>
	<td></td>
	<td></td>
	<td>  OnAfterCompanyClose</td>
	</tr>
	<tr>
	<td>42</td>
	<td>TextManagement</td>
	<td>OnBeforeMakeTextFilter</td>
	</tr>
	<tr>
	<td></td>
	<td></td>
	<td>OnAfterMakeDateTimeFilter</td>
	</tr>
	<tr>
	<td></td>
	<td></td>
	<td>OnAfterMakeDateFilter</td>
	</tr>
	<tr>
	<td></td>
	<td></td>
	<td>OnAfterMakeTextFilter</td>
	</tr>
	<tr>
	<td></td>
	<td></td>
	<td>OnAfterMakeTimeFilter</td>
	</tr>
	<tr>
	<td>42*</td>
	<td>Caption Class</td>
	<td>OnAfterCaptionClassResolve</td>
	</tr>
	<tr>
	<td></td>
	<td></td>
	<td>  OnResolveCaptionClass</td>
	</tr>
	<tr>
	<td>44</td>
	<td>ReportManagement</td>
	<td>OnAfterGetPrinterName</td>
	</tr>
	<tr>
	<td></td>
	<td></td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-onafterdocumentprintready-event">OnAfterDocumentPrintReady</a></td>
	</tr>
	<tr>
	<td></td>
	<td></td>
	<td>OnAfterGetPaperTrayForReport</td>
	</tr>
	<tr>
	<td></td>
	<td></td>
	<td>OnAfterGetPrinterName</td>
	</tr>
	<tr>
	<td></td>
	<td></td>
	<td>OnAfterHasCustomLayout</td>
	</tr>
	<tr>
	<td></td>
	<td></td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-onafterdocumentready-event"> OnAfterDocumentReady</a></td>
	</tr>
	<tr>
	<td></td>
	<td></td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-onafterdocumentready-event">OnAfterDocumentDownload</a></td>
	</tr>
	<tr>
	<td></td>
	<td></td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-onaftersetupprinters-event">OnAfterSetupPrinters</a></td>
	</tr>
	<tr>
	<td></td>
	<td></td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-oncustomdocumentmergerex-event">OnCustomDocumentMergerex</a></td>
	</tr>
	<tr>
	<td></td>
	<td></td>
	<td>OnAfterSubstituteReport</td>
	</tr>
	<tr>
	<td>45</td>
	<td>  AutoFormatManagement</td>
	<td>OnAfterAutoFormatTranslate</td>
	</tr>
	<tr>
	<td>49</td>
	<td>GlobalTriggerManagement</td>
	<td>OnAfterGetGlobalTableTriggerMask</td>
	</tr>
	<tr>
	<td></td>
	<td></td>
	<td>OnAfterOnGlobalInsert</td>
	</tr>
	<tr>
	<td></td>
	<td></td>
	<td>OnAfterOnGlobalModify</td>
	</tr>
	<tr>
	<td></td>
	<td></td>
	<td>  OnAfterOnGlobalDelete</td>
	</tr>
	<tr>
	<td></td>
	<td></td>
	<td>  OnAfterOnGlobalRename</td>
	</tr>
	<tr>
	<td></td>
	<td></td>
	<td>OnAfterGetDatabaseTableTriggerSetup</td>
	</tr>
	<tr>
	<td></td>
	<td></td>
	<td>OnAfterOnDatabaseInsert</td>
	</tr>
	<tr>
	<td></td>
	<td></td>
	<td>OnAfterOnDatabaseModify</td>
	</tr>
	<tr>
	<td></td>
	<td></td>
	<td>  OnAfterOnDatabaseDelete</td>
	</tr>
	<tr>
	<td></td>
	<td></td>
	<td>  OnAfterOnDatabaseRename</td>
	</tr>
	<tr>
	<td></td>
	<td></td>
	<td>OnBeforeOnDatabaseInsert</td>
	</tr>
	<tr>
	<td></td>
	<td></td>
	<td>  OnBeforeOnDatabaseModify</td>
	</tr>
	<tr>
	<td></td>
	<td></td>
	<td>  OnBeforeOnDatabaseDelete</td>
	</tr>
	<tr>
	<td></td>
	<td></td>
	<td>OnBeforeOnDatabaseRename</td>
	</tr>
	</table><br>
	<p class="parrafo"><b>* Codunit 42 Caption Class</b> se introdujo como reemplazo de codeunit 42 CaptionManagement . En versiones anteriores, la unidad de código 42 CaptionManagement incluía el OnAfterCaptionClassTranslateevento.</p>
	<h3>Trigger events</h3>
	<p class="parrafo">A diferencia de los Business events y de Integration events que deben programarse, los eventos desencadenantes son eventos predefinidos. El tiempo de ejecución publica los eventos desencadenantes y no se pueden generar mediante programación. Hay dos tipos de eventos desencadenantes: eventos desencadenantes de base de datos y eventos desencadenantes de página.</p>
	<h3>Database trigger events</h3>
	<p class="parrafo">El sistema genera automáticamente eventos desencadenantes cuando realiza operaciones de base de datos en un objeto de tabla, como eliminar, insertar, modificar y cambiar el nombre de un registro, tal como se define en una tabla. Los eventos desencadenantes están estrechamente asociados con los desencadenantes de tablas para las operaciones de la base de datos: OnDelete, OnInsert, OnModify, OnRename y OnValidate (para campos). Para cada operación de la base de datos, hay un evento desencadenante "antes" y "después" con una firma fija.</p>
	<h4>Eventos desencadenantes de base de datos disponibles</h4>
	<p class="parrafo">La siguiente tabla describe los eventos desencadenantes de base de datos disponibles:</p>
	<table class="tabla1">
	<tr>
	<th>Database trigger event</th>
	<th>Signature</th>
	<th>Descripción</th>
	</tr>
	<tr>
	<td>OnAfterDeleteEvent Trigger Event</td>
	<td> Trigger Event  [EventSubscriber(ObjectType::Table, Database::&lt;Table Name&gt;, 'OnAfterDeleteEvent', '', &lt;SkipOnMissingLicense&gt;, &lt;SkipOnMissingPermission&gt;)]
	local procedure MyProcedure(var Rec: Record; RunTrigger: Boolean)</td>
	<td>Se ejecuta después de eliminar un registro de una tabla.</td>
	</tr>
	<tr>
	<td>OnAfterInsertEvent Trigger Event</td>
	<td>[EventSubscriber(ObjectType::Table, Database::&lt;Table Name&gt;, 'OnAfterInsertEvent', '', &lt;SkipOnMissingLicense&gt;, &lt;SkipOnMissingPermission&gt;)]
	local procedure MyProcedure(var Rec: Record; RunTrigger: Boolean)</td>
	<td>Se ejecuta después de insertar un registro en una tabla.</td>
	</tr>
	<tr>
	<td>OnAfterModifyEvent Trigger Event</td>
	<td>[EventSubscriber(ObjectType::Table, Database::&lt;Table Name&gt;, 'OnAfterModifyEvent', '', &lt;SkipOnMissingLicense&gt;, &lt;SkipOnMissingPermission&gt;)]
	procedure MyProcedure(var Rec: Record; var xRec: Record; RunTrigger: Boolean)</td>
	<td>Se ejecuta después de modificar un registro en una tabla.</td>
	</tr>
	<tr>
	<td>OnAfterRenameEvent Trigger Event</td>
	<td>[EventSubscriber(ObjectType::Table, Database::&lt;Table Name&gt;, 'OnAfterRenameEvent', '', &lt;SkipOnMissingLicense&gt;, &lt;SkipOnMissingPermission&lg;)]
	procedure MyProcedure(var Rec: Record; var xRec: Record; RunTrigger: Boolean)</td>
	<td>Se ejecuta después de cambiar el nombre de un registro en una tabla.</td>
	</tr>
	<tr>
	<td>OnAfterValidateEvent Trigger Event</td>
	<td>[EventSubscriber(ObjectType::Table, Database::&lt;Table Name&gt;, 'OnAfterValidateEvent', '&lt;Field Name&gt;', &lt;SkipOnMissingLicense&gt;, &lt;SkipOnMissingPermission&gt;)]
	procedure MyProcedure(var Rec: Record; var xRec: Record; CurrFieldNo: Integer)</td>
	<td>Se ejecuta después de validar un campo cuando se ha cambiado su valor.</td>
	</tr>
	<tr>
	<td>OnBeforeDeleteEvent Trigger Event</td>
	<td>  [EventSubscriber(ObjectType::Table, Database::&lt;Table Name&gt;, 'OnBeforeDeleteEvent', '', &lt;SkipOnMissingLicense&gt;, &lt;SkipOnMissingPermission&gt;)]
	procedure MyProcedure(var Rec: Record; RunTrigger: Boolean)</td>
	<td>Se ejecuta antes de que se elimine un registro de una tabla.</td>
	</tr>
	<tr>
	<td>OnBeforeInsertEvent Trigger Event</td>
	<td>  [EventSubscriber(ObjectType::Table, Database::&lt;Table Name&gt;, 'OnBeforeInsertEvent', '', &lt;SkipOnMissingLicense&gt;, &lt;SkipOnMissingPermission&gt;)]
	procedure MyProcedure(var Rec: Record; RunTrigger: Boolean)</td>
	<td>Se ejecuta antes de que se inserte un registro en una tabla.</td>
	</tr>
	<tr>
	<td>OnBeforeModifyEvent Trigger Event</td>
	<td>[EventSubscriber(ObjectType::Table, Database::&lt;Table Name&lt;, 'OnBeforeModifyEvent', '', &lt;SkipOnMissingLicense&lt;, &lt;SkipOnMissingPermission&lt;)]
	procedure MyProcedure(var Rec: Record; var xRec: Record; RunTrigger: Boolean)</td>
	<td>Se ejecuta antes de que se modifique un registro en una tabla.</td>
	</tr>
	<tr>
	<td>OnBeforeRenameEvent Trigger Event</td>
	<td>  [EventSubscriber(ObjectType::Table, Database::&lt;Table Name&gt;, 'OnBeforeRenameEvent', '', &lt;SkipOnMissingLicense&gt;, &lt;SkipOnMissingPermission&gt;)]
	procedure MyProcedure(var Rec: Record; var xRec: Record; RunTrigger: Boolean)</td>
	<td>Se ejecuta antes de que se cambie el nombre de un registro en una tabla.</td>
	</tr>
	<tr>
	<td>OnBeforeValidateEvent Trigger Event</td>
	<td>[EventSubscriber(ObjectType::Table, Database::&lt;Table Name&gt;, 'OnBeforeValidateEvent', '&lt;Field Name&gt;', &lt;SkipOnMissingLicense&gt;, &lt;SkipOnMissingPermission&gt;)]
	procedure MyProcedure(var Rec: Record; var xRec: Record; CurrFieldNo: Integer)</td>
	<td>Se ejecuta antes de que se valide un campo cuando se ha cambiado su valor.</td>
	</tr>
	</table><br>
	<p class="parrafo">La siguiente tabla describe los parámetros de los eventos de disparo:</p>
	<table class="tabla1">
	<tr>
	<th>Parameter</th>
	<th>Type</th>
	<th>Descripción</th>
	</tr>
	<tr>
	<td>Rec</td>
	<td>Record</td>
	<td>  La tabla que utilizó la página que genera el evento.</td>
	</tr>
	<tr>
	<td>xRec</td>
	<td>Record</td>
	<td>La tabla que utilizó la página que genera el evento.</td>
	</tr>
	<tr>
	<td>AllowDelete</td>
	<td>Boolean</td>
	<td>Especifica si la llamada del activador OnDeleteRecord se realizó correctamente y si se puede eliminar el registro. Si este parámetro es verdadero, el código se ejecutará. Si este parámetro es falso, entonces el código no se ejecuta.</td>
	</tr>
	<tr>
	<td>AllowModify</td>
	<td>Boolean</td>
	<td>  Especifica si la llamada del activador OnModifyRecord se realizó correctamente y si se puede modificar el registro. Si este parámetro es verdadero, el código se ejecutará. Si este parámetro es falso, entonces el código no se ejecuta.</td>
	</tr>
	<tr>
	<td>BelowxRec</td>
	<td>Boolean</td>
	<td>Especifica si el nuevo registro se insertó después del último registro de la tabla (xRec).</td>
	</tr>
	<tr>
	<td>AllowClose</td>
	<td>Boolean</td>
	<td>Especifica si la página se puede cerrar. Si este parámetro es verdadero, el código se ejecutará. Si este parámetro es falso, entonces el código no se ejecuta.</td>
	</tr>
	</table>
	`;

	cuerpo.innerHTML= contenido;

}
/*==================
TRIGGERS EVENT
=====================*/
let eventosTrigger = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `

	<h2 class="Subtitulos">Uso de Triggers</h2>

	<p class="parrafo">Los triggers son funciones predefinidas que el sistema genera automáticamente. Como desarrollador, puede escribir código que se ejecutará cuando se activen estas funciones. El trigger OnOpenPage (que es un activador del objeto Página ) se ejecutará cuando un usuario abra una página.</p>
	<p class="parrafo">El  trigger OnInsert en la tabla se ejecutará cuando se inserte un nuevo registro en la base de datos. Si desea realizar validaciones adicionales en los datos antes de que se inserten en la base de datos, puede hacerlo en el trigger OnInsert</p>
	<p class="parrafo">Además, aprenderá sobre la arquitectura basada en eventos. Con eventos, puede conectarse a la aplicación principal sin tener que modificar el código existente. Cuando ocurre un evento, puede reaccionar con su propio código a estos eventos.</p>
	<p class="parrafo">Los triggers de tabla se ejecutarán cuando se produzcan ciertos eventos en la base de datos. Cuando crea una tabla con el fragmento ttable , se generan automáticamente cuatro triggers de tabla:</p>
	<div class="contentList">
	<ul>
	<li>OnInsert</li>
	<li>OnModify</li>
	<li>OnDelete</li>
	<li>OnRename</li>
	</ul> 
	</div>
	<div class="img-content">
	<img src="img/trigger1.PNG" alt="">
	</div>
	<p class="parrafo">Cada uno de los trigger se ejecuta antes de que se lleve a cabo la acción. Por ejemplo, el trigger OnInsert se ejecuta antes de que los datos se almacenen en la base de datos. El trigger <b>OnDelete</b> se ejecuta antes de que se eliminen los datos en la base de datos.</p>
	<p class="parrafo">Esta característica le brinda la oportunidad como programador de agregar validaciones adicionales y lógica para verificar antes de que se complete la transacción real de la base de datos.</p>
	<p class="parrafo"><b>OnModify</b> se activa cuando se modifica un registro en la base de datos. Sin embargo, si modifica la clave principal de un registro, se activa <b>OnRename</b> .</p>
	<p class="parrafo">La siguiente captura de pantalla muestra un ejemplo del trigger OnInsert que se usa en la tabla Customer.</p>
	<div class="img-content">
	<img src="img/trigger2.PNG" alt="">
	</div>
	<p class="parrafo">Por lo general, para las tablas maestras, encontrará alguna lógica para obtener un nuevo número para su registro a través de la administración de series de números en el trigger OnInsert .</p>
	<p class="parrafo">Además de los triggers de tabla, hay triggers a nivel de campo:</p>
	<div class="contentList">
	<ul>
	<li>OnValidate</li>
	<li>OnLookup</li>
	</ul> 
	</div>
	<div class="img-content">
	<img src="img/trigger3.PNG" alt="">
	</div>

	<p class="parrafo">El trigger <b>OnValidate</b>  se usa para ejecutar una validación adicional cuando un usuario ingresa datos en un campo determinado. Se llamará al trigger <b>OnValidate</b>  antes de que los datos se almacenen en la base de datos. Es mejor usar el trigger <b>OnValidate</b> en lugar del trigger <b>OnModify</b>  porque puede apuntar a un campo específico. Si recibe un error en el trigger  <b>OnValidate</b> , no se llamará al trigger <b>OnModify</b>  .</p>
	<p class="parrafo">El trigger <b>OnValidate</b> en la clave principal de las tablas maestras se usa normalmente para verificar si el usuario puede ingresar manualmente un valor para la clave principal. Las tablas maestras utilizan la gestión de series de números para generar un nuevo número para un registro. En una serie de números, también puede definir que se permita la numeración manual, como se muestra en el siguiente ejemplo con el activador <b>OnValidate</b>  .</p>
	<div class="img-content">
	<img src="img/trigger4.PNG" alt="">
	</div>
	<p class="parrafo"><b>OnLookup</b> se activa cuando realiza una búsqueda en otra tabla. De forma predeterminada, se crea una búsqueda estableciendo la propiedad <b>TableRelation</b> en el campo. Esta configuración creará un control desplegable en la página. Al seleccionar este control, se mostrarán los datos de los datos vinculados, más específicamente, los campos que están definidos en el grupo de campos <b>DropDown</b> . Si desea realizar otras acciones o desea realizar un filtrado adicional antes de mostrar los datos, utilice el trigger <b>OnLookup</b>  .</p>
	<p class="parrafo">El siguiente ejemplo muestra el trigger<b>OnLookup</b>  que se usa en la tabla Customer. Cuando selecciona un contacto que está vinculado por la propiedad <b>TableRelation</b> el código primero filtrará el contacto según su relación con este cliente específico. Este código no le permitirá seleccionar una persona de contacto que no esté vinculada a este cliente.</p>
	<div class="img-content2">
	<img src="img/trigger5.PNG" alt="">
	</div>
	<h3>Triggers de página, control y acción</h3>
	<p class="parrafo">Los triggers de página se ejecutan cuando algo sucede en la página o con ella. Puede ejecutar código cuando un usuario abre o cierra una página o cuando se recupera un nuevo registro de la base de datos.</p>
	<p class="parrafo">En AL, puede definir los triggers en la sección de diseño y acciones. La siguiente captura de pantalla muestra una lista de los activadores de página disponibles.</p>
	<div class="img-content">
	<img src="img/trigger6.PNG" alt="">
	</div> 
	<p class="parrafo">Los siguientes son triggers de página de uso común:</p>
	<div class="contentList">
	<ul>
	<li><b>OnInit :</b> se usa cuando la página está cargada pero antes de que los controles estén disponibles.</li>
	<li><b>OnOpenPage :</b> se usa cuando la página se inicializa y los controles están disponibles.</li>
	<li><b>OnAfterGetRecord :</b> se utiliza cuando se ha recuperado un registro pero aún no se ha mostrado.</li>
	<li><b>OnAfterGetCurrRecord :</b>se usa después de recuperar el registro actual de la tabla.</li>
	</ul>
	</div>
	<p class="parrafo">El trigger OnInit generalmente muestra u oculta partes y controles con la propiedad Visible del control.</p>
	<p class="parrafo">Junto a los triggers de página hay triggers de control. Los  de control se utilizan en los campos de página. Para definir un trigger de control, debe especificarlo en la sección de control después de las propiedades del control.</p>
	<div class="img-content">
	<img src="img/trigger7.PNG" alt="">
	</div>
	<p class="parrafo">Los siguientes triggers están disponibles para un campo en una página:</p>
	<div class="contentList">
	<ul>
	<li><b>OnAssistEdit :</b> se activa cuando alguien usa el botón <b> Assist Edit</b>. Por lo general, este trigger se usa con <b>No. Series</b> para seleccionar otra serie de números. </li>
	<li><b>OnDrillDown :</b>  se activa cuando un usuario selecciona un control que actúa como un control detallado. Este trigger se usa normalmente con FlowFields. Cuando selecciona un FlowField, se mostrarán los registros que componen el cálculo del FlowField. <b>OnDrillDown</b>  también se puede usar con HeadlineParts en una página de área de trabajo para realizar una acción cuando se selecciona el título.</li>
	<li><b>OnLookup :</b> se activa cuando un usuario selecciona un control desplegable que realiza una búsqueda. Este trigger tiene el mismo comportamiento que el activador OnLookup de la tabla. Recomendamos que coloque el código en el nivel de la tabla tanto como sea posible.</li>
	<li><b>OnValidate :</b> se activa cuando un usuario ingresa un valor en un campo y luego lo abandona. Este trigger tiene el mismo comportamiento que el trigger <b>OnValidate</b>  en el nivel de la tabla.</li>
	</ul>
	</div>
	<p class="parrafo">El trigger <b>OnAssistEdit</b>  se usa en tablas maestras para establecer la serie de números que se usa para un registro. La siguiente captura de pantalla muestra la implementación del trigger <b>OnAssistEdit</b> para el campo No. en la página Tarjeta de cliente .</p>
	<div class="img-content">
	<img src="img/trigger8.PNG" alt="">
	</div>
	<p class="parrafo">El trigger <b>OnAssistEdit</b> llama a una función en la tabla Customer. Esta función utiliza otra unidad de código para mostrar a los usuarios la serie de números disponibles y maneja la lógica de <b>número de serie</b> .</p>
	<div class="img-content">
	<img src="img/trigger9.PNG" alt="">
	</div>
	`;
	cuerpo.innerHTML= contenido;
}

/*================================
	crear archivos de traducción
==================================*/
let traduccionFiles = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Crear y usar archivos de traducción</h2>

	<p class="parrafo">Microsoft Dynamics 365 Business Central está habilitado en varios idiomas, lo que significa que puede mostrar la interfaz de usuario (IU) en distintos idiomas.</p>
	<p class="parrafo">Una versión en varios idiomas de Business Central no es lo mismo que una versión localizada.</p>
	<div class="contentList">
	<ul>
	<li>Una versión localizada es una versión adaptada a un mercado local. Todo el texto que se muestra al usuario se traduce al idioma local, y todas las áreas funcionales se adaptan a los requisitos del mercado local. Por ejemplo, la versión canadiense de Business Central tiene una funcionalidad local adicional que se aplica al mercado canadiense.</li>
	<li>Una versión en varios idiomas es una versión localizada que puede ejecutar en diferentes idiomas, pero toda la funcionalidad local sigue siendo la misma. Por ejemplo, puede ejecutar la versión canadiense de Business Central en inglés y francés, pero sigue siendo la versión localizada canadiense. No incluye la misma funcionalidad local que la versión localizada francesa.</li>
	</ul>
	</div>
	<p class="parrafo">Para ejecutar una versión localizada en varios idiomas, debe instalar módulos de idioma.</p>
	<p class="parrafo">En este módulo descubrirá cómo crear y usar archivos de traducción y aprenderá las propiedades que debe establecer. Microsoft también proporciona herramientas para ayudarlo con la traducción automática de los archivos de traducción.</p>
	<p class="parrafo">Para agregar un nuevo idioma a la extensión que ha creado, primero debe habilitar la generación de archivos de formato de archivo de intercambio de localización XML (XLIFF).</p>
	<p class="parrafo">Los archivos XLIFF son archivos basados en XML que puede usar para definir la traducción. Deberá crear un archivo XLIFF para cada idioma que desee admitir. Existen diferentes propiedades de ML en una tabla o campo de tabla, como CaptionML y TooltipML. Sin embargo, estas propiedades de ML están en desuso; por lo tanto, si desea refactorizar la extensión, le recomendamos que use la propiedad correspondiente, como Caption o Tooltip, que se está recopilando en el archivo XLIFF. La extensión de archivo XLIFF es <b>.xlf.</b></p>
	<p class="parrafo">Para habilitar la generación de archivos XLIFF, debe habilitar una configuración en el archivo app.json. Se trata de la configuración Características, que es un conjunto de características posibles. La característica que necesita activar es la característica TranslationFile. Al ejecutar el comando de compilación <b>(Ctrl + Mayús + B)</b>  en Visual Studio Code, se generará una carpeta Traducciones y los archivos .xlf se crearán en función de las propiedades de etiquetas, subtítulo e información sobre herramientas.</p>
	<div class="img-content2"><img src="img/idiomas1.PNG" alt=""></div>
	<p class="parrafo">Visual Studio Code generará un archivo .g.xlf, que se vuelve a crear con cada comando de compilación. Asegúrese de cambiar el nombre de este archivo antes de comenzar a traducir; de lo contrario, el archivo se sobrescribirá. Solo puede existir un archivo .xlf para cada idioma. La nomenclatura forzada no se usa en el archivo, pero recomendamos asignarle un nombre mediante el siguiente formato: <b>extensionname.language.xlf.</b> Por ejemplo, si la extensión se denomina Car Management, en francés, asigne al archivo el nombre de <b>Car_Management.fr.xlf.</b></p>
	<p class="parrafo">Junto con la característica <b>TranslationFile</b>, también puede activar la característica <b>GenerateCaptions.</b> Luego, se generarán automáticamente subtítulos basados en los nombres de objetos de tablas, páginas, campos, etc. Si proporcionó una propiedad Caption, se usará esta propiedad.</p>
	<p class="parrafo">Videotutorial como crear archivos de traducción.</p>
	<iframe class="ifra" src="https://www.microsoft.com/es-es/videoplayer/embed/RE4vBLN?postJsllMsg=true&autoCaptions=es-es" title="idiomas video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	<h3>Pasos a seguir para crear archivos de traducción</h3>
	<ul>
	<li><b>1.</b> Abra el proyecto donde este trabajando.</li>
	<li><b>2.</b> Agregue un subtítulo a todos los campos en la tabla que este trabajando o extensión.</li>
	<li><b>3.</b> Abra el archivo app.json y agregue la característica TranslationFile a la configuración de matriz de características.
	<b>"features": ["TranslationFile"],</b></li>
	<li><b>4.</b> Guarde el archivo app.json modificado.</li>
	<li><b>5.</b> Cree la extensión. Seleccione Ver > Paleta de comandos (Ctrl+Mayús+P).</li>
	<li><b>6.</b> Introduzca AL: Paquete en el cuadro de búsqueda y luego seleccione el comando de la lista.
	</li>
	<li><b>7.</b> Se generará una nueva carpeta Traducciones. Abra el archivo .g.xlf.</li>
	<li><b>8.</b> Agregar traducciones a cada campo. Cambie target-language del archivo .xlf al idioma que prefiera (por ejemplo, fr-FR para francés).</li>
	<li><b>9.</b> Agregue un nodo target a cada campo con la traducción correcta.</li>
	<li><b>10.</b> Guarde el archivo y luego cambie el nombre del archivo .g.xlf al nombre del nuevo idioma (por ejemplo, fr-FR.xlf).</li>
	<li><b>11.</b> Publique su extensión en el espacio aislado. Seleccione Ver > Paleta de comandos (Ctrl+Mayús+P).</li>
	<li><b>12.</b> Introduzca AL: Publicar en el cuadro de búsqueda (o pulse la tecla F5) y luego seleccione el comando de la lista.</li>
	<li><b>13.</b> Seleccione la rueda de configuración y luego elija Mi configuración.</li>
	<li><b>14.</b> Establezca el idioma en el nuevo idioma que utilizó para la traducción.</li>
	<li><b>15.</b> Abra la página Customer Overview y pruebe las traducciones.</li>
	</ul>
	<div class="img-content2"><img src="img/idiomas2.PNG" alt=""></div>
	<p class="parrafo">La característica TranslationFile generará automáticamente un archivo de traducción con todos los subtítulos, información sobre herramientas, etiquetas, etc. definidos en sus objetos.</p>
	<p class="parrafo">Cada vez que ejecute un comando de compilación, generará un archivo g.xlf. Asegúrese de cambiar el nombre del archivo; de lo contrario, sobrescribirá las modificaciones. Debe crear un archivo de traducción por cada idioma.</p>
	<p class="parrafo">Estos archivos de traducción se empaquetan junto con sus objetos en un archivo .app que puede usar para instalar su extensión en un entorno de producción.</p>
	<h3>Como Crear un ficheros de Traducción en AL </h3>
	<iframe src="https://yzhums.com/2684/" class="ifraWeb"></iframe>
	<br><br>
	<h3>Xliff Translation Tool</h3>
	<iframe src="http://fredborg.org/?p=481" class="ifraWeb"></iframe><br><br>
	<h3>Videotutorial sobre Crear Ficheros XLIFF de traducción</h3>
	<iframe class="ifra" src="https://www.youtube.com/embed/mAqXvzRIVMc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br><br>
	<h3>Xliff Translation tool for Business Central videotutorial</h3>
	<iframe class="ifra" src="https://www.youtube.com/embed/2qakoqbSeMU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	<h3>Translation Service Visual Studio Code</h3>
	<iframe src="https://demiliani.com/2022/06/13/dynamics-365-business-central-introducing-the-dynamics-365-translation-service-visual-studio-code-extension-preview"  class="ifraWeb"></iframe>
	<br>
	<h3>Traducciones XLIFF y extensión para trabajar con ellas</h3>
	<p class="parrafo">Enlace Para ver más sobre xliff <a href="https://blog.aitana.es/2021/06/15/traducciones-xliff-extension/#comment-1927"> Aquí</a></p>
	`;

	cuerpo.innerHTML= contenido;

}

/*
let tableRelation = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `


	`;

	cuerpo.innerHTML= contenido;

	}
	*/
