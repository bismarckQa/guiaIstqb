/*============================
Introducción business Central
===============================*/

let introBc = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Introducción a Business Central</h2>
	<p class="parrafo">Dynamics 365 Business Central, creada y optimizada para la pequeña y mediana empresa, es una aplicación para las empresas que han dejado atrás las aplicaciones empresariales de nivel básico.</p>
	<p class="parrafo">Las empresas en desarrollo a menudo superan el software de contabilidad básico o los sistemas de planificación de recursos empresariales (ERP) heredados que no pueden tratar el inventario y las transacciones en aumento, carecen de integración con otros sistemas de línea de negocio y tienen limitaciones de informes. Las empresas también se deben enfrentar a la logística de proporcionar servicios que tengan más escalabilidad, movilidad y disponibilidad en la nube.</p>
	<p class="parrafo">Estas son las características típicas de un sistema de solución empresarial integral en la nube:</p>
	<div class="contentList">
	<ul>
	<li>Basado en la nube</li>
	<li>Base de datos común</li>
	<li>Compatible con varios dominios de negocio</li>
	<li>Funcionalidades integradas y modulares</li>
	<li>Disponibilidad de datos en tiempo real</li>
	<li>Roles laborales y autorización</li>
	</ul>
	</div>

	<p class="parrafo">Todas estas características distintivas de una solución empresarial integral en la nube se encuentran dentro de Business Central, que lo prepara a usted y a su organización para conectar las operaciones financieras, las ventas, los proyectos, los servicios y las operaciones.</p>
	<p class="parrafo">Con Business Central, puede administrar las operaciones financieras, automatizar y proteger su cadena de suministro, vender de forma más elegante, mejorar el rendimiento del servicio al cliente y de los proyectos, y optimizar las operaciones.</p>
	<p class="parrafo">Business Central conecta a personas y procesos con una solución única, unificada y completa en la nube, y proporciona a las organizaciones una vista integral de sus negocios.</p>
	<p class="parrafo">Como muestra la siguiente ilustración, Business Central extrae automáticamente los sistemas y los procesos, lo que permite a los usuarios administrar las finanzas, las ventas, los servicios y las operaciones.</p>
	<div class="img-content2">
	<img src="img/diagram.png" alt="">
	</div>
	<p class="parrafo">Business Central permite a las organizaciones:</p>
	<div class="contentList">
	<ul>
	<li>Trabajar desde la nube.</li>
	<li>Obtener acceso a datos precisos, actuales, para tomar decisiones de la manera más informada posible.</li>
	<li>Hacer que los datos estén disponibles inmediatamente en cualquier lugar y en cualquier dispositivo después de que se hayan introducido en el sistema.</li>
	<li>Compartir los datos de forma rápida y sencilla con personas clave de la empresa.

	</li>
	<li>Aumentar la visibilidad a través de las cadenas de suministro para obtener un mayor control de los procesos de compra.</li>
	<li>Maximizar las oportunidades de ingresos y prestar un mejor servicio a los clientes con recomendaciones y presupuestos integrados, así como el seguimiento del progreso de los proyectos con datos en tiempo real de los recursos disponibles.</li>
	<li>Acelerar el cierre financiero y generar informes con precisión, mientras se garantiza la conformidad.</li>
	<li>Simplificar las operaciones de fabricación y almacenamiento para ofrecer los productos a tiempo y reducir los costes.</li>
	<li>Usar Microsoft AppSource para conectar con aplicaciones de terceros para llevar correctamente los negocios, incluidos sistemas de nóminas, banca, CRM y otros sistemas específicos del sector.</li>
	<li>Ayudar a proteger la información del acceso no autorizado mediante sistemas y configuración de seguridad avanzada.</li>
	<li>Integrar otros servicios en la nube de Microsoft, como Microsoft 365.</li>
	</ul>
	</div>
	<p class="parrafo">Videotutorial introducción a Business Central</p>
	<iframe class="ifra" src="https://www.youtube.com/embed/Zgycf_fcQ4s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

	<h3>Introducción a Microsoft Business Central</h3>
	<iframe class="ifra" src="https://www.youtube.com/embed/Sm8Cpv1GdFc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	`;

	cuerpo.innerHTML= contenido;

}
/*=======================
Suscripciones
==========================*/
let suscripciones = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Identificar los tipos de suscripción disponibles para Business Central</h2>
	<p class="parrafo">Business Central está disponible tanto para los usuarios internos como externos.</p>
	<p class="parrafo">La siguiente ilustración aclara la diferencia entre los usuarios internos y externos.</p>
	<div class="img-content2">
	<img src="img/internal-external-users.png" alt="">
	</div>
	<h3>Requisitos de licencia para usuarios internos</h3>
	<p class="parrafo">La funcionalidad de Business Central se ofrece a través del usuario de Business Central Essentials o Premium. La licencia principal es por suscripción del usuario designado.</p>
	<p class="parrafo">Con Business Central, debe obtener la licencia de al menos un usuario Business Central Essentials o Premium. El acceso adicional a la funcionalidad del servicio por parte de otros usuarios se autoriza con la licencia de Dynamics 365 Business Central Team Members.</p>
	<h3>Usuario designado</h3>
	<p class="parrafo">La licencia de suscripción del usuario o SL, se asigna en base a un "usuario designado", lo que significa que cada usuario requiere una licencia de suscripción de usuario independiente. La SL de usuario no se puede compartir, pero una persona con una SL de usuario puede acceder al servicio mediante varios dispositivos.</p>
	<h3>No permanente</h3>
	<p class="parrafo">La SL de usuario permite a los usuarios con derechos no permanentes (sin derechos de adquisición) usar el servicio de Dynamics 365 Business Central. Siempre que esté al día con los pagos de su suscripción y se adhiera a las condiciones del producto y a las condiciones del servicio en línea, tendrá acceso a la versión más actualizada de Business Central.</p>
	<h3>Tipos de licencia por suscripción de Microsoft Dynamics 365</h3>
	<p class="parrafo">Microsoft Dynamics 365 simplifica la obtención de licencias para las aplicaciones empresariales. En las suscripciones de usuario de Microsoft Dynamics 365 se clasifican a los usuarios en dos tipos: usuarios completos y usuarios adicionales.</p>
	<h3>Usuarios completos</h3>
	<p class="parrafo">Los usuarios completos son aquellos cuyo trabajo requiere el uso de la funcionalidad de las aplicaciones empresariales con muchas funciones. Los ejemplos de usuarios completos son los vendedores, representantes del servicio al cliente, empleados de finanzas, supervisores y directores de cadena de suministro. También nos hemos referido anteriormente a estos usuarios como usuarios profesionales o usuarios avanzados. Estos usuarios completos disponen de una licencia de suscripción de Dynamics 365 Business Central.</p>
	<h3>Usuarios adicionales</h3>
	<p class="parrafo">Los usuarios adicionales suelen representar un porcentaje significativo de usuarios de una organización que puede consumir datos e informes de sistemas empresariales o completar tareas ligeras como la introducción de tiempo o gastos, y las actualizaciones de registro de RR. HH. De forma alternativa, estos usuarios también pueden ser usuarios más frecuentes del sistema que no requieren capacidades de usuario completas. Los usuarios adicionales reciben licencias con los miembros del equipo de Dynamics 365 Business Central.</p>
	<div class="img-content">
	<img src="img/full-additional-users.png" alt="">
	</div>
	<p class="parrafo">Los miembros de equipo de Dynamics 365 Business Central requieren que al menos otro usuario tenga licencia con Dynamics 365 Business Central Essentials o Dynamics 365 Business Central Premium.</p>
	<h3>Dynamics 365 Business Central Essentials</h3>
	<p class="parrafo">La funcionalidad que se ofrece con Essentials incluye:</p>
	<div class="contentList">
	<ul>
	<li>Gestión financiera</li>
	<li>Administración de relaciones con clientes</li>
	<li>Administración de proyectos</li>
	<li>Administración de cadenas de suministros</li>
	<li>Gestión de Recursos Humanos</li>
	<li>Gestión de almacenes</li>
	</ul>
	</div>
	<h3>Dynamics 365 Business Central Premium</h3>
	<p class="parrafo">La funcionalidad que se ofrece con Premium incluye:</p>
	<div class="contentList">
	<ul>
	<li><b>Todas las funciones de Essentials</b></li>
	<li>Administración de servicios</li>
	<li>Fabricación</li>
	</ul>
	</div>
	<h3>Team Members</h3>
	<p class="parrafo">Los derechos de uso de Dynamics 365 Business Central Team Members son los siguientes:</p>
	<div class="contentList">
	<ul>
	<li>Leer cualquier cosa de Dynamics 365 Business Central.</li>
	<li>Actualizar los datos y movimientos existentes en Dynamics 365 Business Central: los datos existentes se definen como registros, ya sean del cliente, del proveedor o de productos, que ya están creados. Los movimientos indican aquellos movimientos en los que se permite, desde una perspectiva contable, actualizar información específica, por ejemplo, una fecha de vencimiento en los movimientos del cliente.</li>
	<li>Aprobar o rechazar las tareas en todos los flujos de trabajo asignados a un usuario.</li>
	<li>Crear, editar o eliminar una oferta.</li>
	<li>Crear, editar o eliminar información personal.</li>
	<li>Especificar un parte de horas para los trabajos.</li>
	<li>Usar Power Apps para Dynamics 365.</li>
	<li>El módulo de aplicación Team Members no se puede personalizar con más de 15 entidades personalizadas, que están disponibles para la licencia de Dynamics 365 Team.</li>
	</ul>
	</div>
	<h3>Requisitos de licencia para usuarios externos</h3>
	<p class="parrafo">Los usuarios externos son clientes finales y usuarios de terceros de la organización o de sus filiales y no requieren SL para tener acceso a Dynamics 365. El acceso de los usuarios externos se incluye en las SL de los usuarios internos de la organización.</p>
	<p class="parrafo">Los usuarios externos no pueden utilizar ningún cliente proporcionado por la Interfaz de programación de aplicaciones (API) de Dynamics 365 Business Central, como el cliente web, la aplicación de iPad o iPhone, o la aplicación de Android.</p>
	<p class="parrafo">Además, los usuarios externos incluyen proveedores externos que no tienen una relación similar a la de un empleado con la organización o sus filiales (por ejemplo, proveedores de soporte técnico de TI que prestan servicios a varias organizaciones de clientes). Sin embargo, el acceso de usuario externo no se aplica al cliente o a los contratistas, proveedores o agentes de la filial del cliente que proporcionan procesos empresariales en nombre del cliente o que utilizan Microsoft Dynamics 365 para gestionar cualquier parte de su negocio.</p>
	<p class="parrafo">En este sentido, un cliente no puede utilizar Microsoft Dynamics 365 para proporcionar servicios de externalización de procesos de negocio a sus clientes.</p>


	`;

	cuerpo.innerHTML= contenido;

}
/*===============
 Configuracion
 ===============*/

let configuracion = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Cambiar la configuración básica</h2>
	<p class="parrafo">En la página<b> Mi configuración</b>, puede ver y cambiar la configuración básica de su Business Central. Los cambios que realice sólo afectan a su área de trabajo; no a las áreas de trabajo de otros usuarios.</p>
	<p class="parrafo">Al abrir en Mi configuración veremos las siguientes opciones </p>
	<div class="img-content2">
	<img src="img/config1.PNG" alt="">
	</div>
	<h3>Cambiar el rol</h3>
	<p class="parrafo">El rol pedido es Administrador de negocio, pero puede seleccionar otro rol para usar un área de trabajo que se adapte mejor a sus necesidades.</p>
	<div class="contentList">
	<ul >
	<li>En la esquina superior derecha, elija el icono Configuración Configuración. y, a continuación, elija la acción Mi configuración.</li>
	<li>En la página Mi configuración, en el campo Rol, seleccione el rol que desea usar de forma predeterminada. Por ejemplo, seleccione Contable.</li>
	<li>Elija Aceptar.</li>
	</ul>
	</div>
	<p class="parrafo">El rol determina la página de inicio, una pantalla de inicio que está designada para las necesidades específicas del trabajo en una empresa. Dependiendo de su rol, la página de inicio o el área de trabajo le brinda una descripción general del negocio, su departamento o sus tareas personales. También le ayuda a navegar por sus tareas diarias y encontrar el trabajo que le asignaron.</p>
	<h3>Compañía</h3>
	<p class="parrafo">Una empresa funciona como un contenedor de datos en Business Central. Puede haber múltiples empresas en una base de datos, pero solo se puede seleccionar una a la vez. La empresa predeterminada se llama CRONUS y solo contiene datos de demostración.</p>
	<p class="parrafo">El campo Empresa muestra la empresa en la que trabaja actualmente y puede usarlo para cambiar a otra empresa. El nombre de la empresa siempre se muestra en la esquina superior izquierda y funciona como una acción que puede elegir para volver al área de trabajo.</p>
	<h3>Fecha de trabajo</h3>
	<p class="parrafo">La fecha de trabajo más utilizada es la fecha actual. Es posible que tenga que cambiar temporalmente la fecha de trabajo para realizar tareas como la finalización de las transacciones de una fecha que no sea hoy.</p>
	<p class="parrafo">En todos los campos de fecha, escriba h para introducir rápidamente la fecha de hoy y escriba t para introducir rápidamente la fecha de trabajo, que es el valor en el campo Fecha de trabajo en la página Mi configuración.</p>
	<p class="parrafo"><b>Nota <br> </b>Después de modificar la fecha de trabajo, si cierra la sesión o cambia a otra empresa, los datos de trabajo vuelven a la fecha de trabajo predeterminada. Por lo tanto, la próxima vez que inicie sesión o vuelva a cambiar a la empresa original, es posible que tenga que volver a establecer la fecha de trabajo.</p>
	<p class="parrafo">La fecha de trabajo es fundamental en las páginas que se pueden editar. Siempre que la fecha de trabajo no se establezca en la fecha de hoy en una página editable, aparecen dos tipos de indicadores en la página:</p>
	<div class="contentList">
	<ul>
	<li>Aparece un recordatorio en la parte superior de la página que le indica cuál es la fecha de trabajo establecida. El recordatorio proporciona un vínculo directo a la configuración de la fecha de trabajo en la página Mi configuración para que pueda cambiar la fecha si lo desea. Desde el recordatorio, también puede elegir descartarlo para el resto de la sesión. A menos que cambie la fecha de trabajo a "hoy", el recordatorio aparecerá la próxima vez que inicie sesión.</li>
	<li>Si descarta el recordatorio, la fecha de trabajo aparecerá en el título de la página</li>
	</ul>
	</div>
	<p class="parrafo">Si la fecha de trabajo no está establecida en el día actual (hoy), la fecha de trabajo actual aparece en la esquina superior izquierda de todas las páginas donde puede editar datos.</p>
	<h3>Región</h3>
	<p class="parrafo">El valor Región determina cómo se muestran o se forman las fechas, los tiempos, los números, y divisas. También determina qué carácter se usa como separador decimal cuando se usa un teclado numérico para introducir datos</p>
	<h3>Zona horaria</h3>
	<p class="parrafo">Define la zona horaria en la que se encuentra. Cuando inicia sesión por primera vez en Business Central, la zona horaria se establece en función de la dirección de su empresa. Cámbiela si no se ajusta a su ubicación física.</p>
	<h3>Notificaciones</h3>
	<p class="parrafo">Seleccione el vínculo Cambiar cuándo recibo notificaciones para ver o cambiar las notificaciones que recibe sobre determinados eventos o cambios de estado, cuando va a facturar a un cliente que tiene un saldo vencido o cuando el inventario disponible es inferior a la cantidad que va a vender, por ejemplo.</p>

	<h3>Consejos didácticos</h3>
	<p class="parrafo">Algunas páginas muestran un consejo didáctico con una breve introducción a la página. Desactive los consejos didácticos si no está interesado en ver
	estas breves introducciones cuando abra las páginas correspondientes. Si desactiva los consejos didácticos, aún puede abrir el consejo didáctico para una página 
	específica eligiendo el título de la página en la esquina superior izquierda.</p>
	<p class="parrafo">Videotutorial de configuración básica </p>
	<iframe  class="ifra" src="https://www.youtube.com/embed/622TcES-LxA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	<p class="parrafo">Videos tutoriales para familiarizarse con el uso de la aplicación <a href="https://www.youtube.com/channel/UCXgBG6LrPPIRO7yPToFBD8A/videos">Aquí</a></p>
	`;

	cuerpo.innerHTML= contenido;

}
/*================
Crear Empresa
================== */
let crearEmpresa = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `

	<h2 class="Subtitulos">Crear nuevas empresas con datos de configuración</h2>
	<p class="parrafo">En Business Central, el contenedor para datos empresariales que pertenece a una unidad de negocio o entidad legal se denomina empresa. Cuando se registra en Business Central, recibe una empresa de demostración y una empresa vacía, Mi empresa. Cambiar entre las empresas es fácil, solo tiene que ir a Mi configuración y cambiar a la otra empresa. Pero también puede crear nuevas empresas en Business Central, según sus necesidades comerciales.</p>
	<p class="parrafo">Si desea comenzar rápidamente con una nueva empresa, seleccione <b>Producción: solo datos de configuración</b> y luego importe sus propios datos comerciales, como clientes, artículos y proveedores.</p>
	<p class="parrafo">Puede usar la opción <b>Producción - Solo datos de configuración</b> en el asistente para crear una nueva empresa, para crear una empresa con datos de configuración pero sin datos de muestra. Este proceso crea una empresa que contiene datos y configuración, como un plan de cuentas y métodos de pago listos para usar por empresas con procesos estándar. Configure sus propios artículos y clientes y comience a publicar de inmediato.</p>
	<h3>Elegir la plantilla adecuada</h3>
	<p class="parrafo">Si decide agregar una empresa al Business Central, puede utilizar la guía de configuración asistida Crear nueva empresa para comenzar. El asistente de configuración está disponible en la página Empresas y en la búsqueda en el campo Empresa en la página Mi configuración.</p>
	<p class="parrafo">El asistente de configuración ofrece dos plantillas y una opción en blanco:</p>
	<div class="contentList">
	<ul>
	<li><b>Evaluación - Datos de ejemplo</b><br>Crea una empresa similar a la compañía de demostración con datos de ejemplo y datos de configuración. Este tipo de empresa está a su disposición sin necesidad de cambiar a un período de prueba de 30 días, lo que hacen los otros tipos.</li>
	<li><b>Producción - Solo datos de configuración</b><br>Crea una empresa similar a Mi empresa con datos de configuración pero sin datos de ejemplo. Podrá usar esta empresa durante un periodo de evaluación de 30 días.</li>
	<li><b>Crear nuevo - No hay datos</b><br>Crea una empresa en blanco sin datos de configuración. Podrá usar esta empresa durante un periodo de evaluación de 30 días.</li>
	</ul>
	</div>
	<p class="parrafo">Si desea empezar fácilmente con una empresa nueva, elija Producción - Solo datos de configuración y, a continuación, importe sus propios datos empresariales, como clientes, productos, y proveedores. Seleccione la plantilla Nuevo si desea configurar todos los parámetros desde cero. En ese caso, puede utilizar la guía de configuración asistida Configuración de la empresa para obtener ayuda con los datos esenciales de configuración.</p>
	<p class="parrafo"><b>Nota</b><br>Al crear una empresa nueva, tarda algunos minutos antes de tener acceso en Business Central. El estado de configuración de la página Empresas muestra cuando la nueva empresa está lista. A continuación, puede cambiar a la nueva empresa mediante <b>Mi configuración.</b></p>
	<p class="parrafo">Para crear una nueva empresa con datos de configuración, siga estos pasos:</p>
	<ul>
	<li><b>1.</b> En la página Mi configuración , abra el botón de edición de asistencia a la derecha del cuadro de texto Empresa . <br>
	<div class="img-content2"><img src="img/crearEmpresa1.PNG" alt=""></div>
	</li>
	<li><b>2.</b> En la ventana de empresas permitidas que se abre, seleccione <b>Nuevo </b>y luego, <b>Crear nueva empresa</b>. <br>
	<div class="img-content2"><img src="img/crearEmpresa.PNG" alt=""></div>
	</li>
	<li><b>3.</b> Se abre el asistente para crear una nueva empresa. <br>
	<div class="img-content2"><img src="img/crearEmpresa2.PNG" alt=""></div>
	</li>
	<li><b>4.</b> Haga clic en <b>Siguiente</b>.</li>
	<li><b>5.</b> Ingrese un nombre para la nueva empresa y seleccione la opción: <b>Producción - Solo datos de configuración</b> 
	<div class="img-content2"><img src="img/crearEmpresa3.PNG" alt=""></div>
	</li>
	<li><b>6.</b> En la siguiente página del asistente, haga clic en <b>Administrar usuarios</b> para agregar o eliminar usuarios de la nueva empresa y luego haga clic en <b>Siguiente</b>. <br>
	<div class="img-content2"><img src="img/crearEmpresa4.PNG" alt=""></div>
	</li>
	<li><b>7.</b> Elija <b>Finalizar</b> para crear la empresa. Esto puede tardar unos minutos en completarse.</li>
	</ul>
	<p class="parrafo">La empresa se crea y se incluye en la lista de empresas, pero antes de que pueda usarla, se requiere algo de tiempo para configurar algunos datos y configuraciones. Esto puede demorar hasta 10 minutos, así que tómese un breve descanso antes de comenzar a usarlo.</p>
	<h2 class="Subtitulos">Crear nuevas empresas sin datos</h2>
	<p class="parrafo">Puede usar la opción <b>Crear nuevo: sin datos</b> en el asistente para crear una nueva empresa, para crear una empresa en blanco sin datos de configuración. Cuando seleccione esta opción, obtendrá una empresa en blanco y tendrá la libertad de configurarla desde cero, ya sea manualmente o mediante una configuración asistida.</p>
	<p class="parrafo">Seleccione esta opción si su empresa tiene estructuras y procesos comerciales diferentes de los procesos estándar proporcionados por Business Central.</p>
	<p class="parrafo">Para crear una nueva empresa sin ningún dato, siga estos pasos:</p>
	<ul>
	<li><b>1.</b> En la página <b>Mi configuración</b>  , abra el botón de edición de asistencia a la derecha del cuadro de texto <b>Empresa</b>. <br>
	<div class="img-content2"><img src="img/crearEmpresa1.PNG" alt=""></div>
	</li>
	<li><b>2.</b> En la ventana de empresas permitidas que se abre, seleccione Nuevo y luego, Crear nueva empresa . <br> 
	<div class="img-content2"><img src="img/crearEmpresa.PNG" alt=""></div>
	</li>
	<li><b>3.</b> Se abre el asistente para crear una nueva empresa. <br>
	<div class="img-content2"><img src="img/crearEmpresa2.PNG" alt=""></div>
	</li>
	<li><b>4.</b>  Haga clic en <b>Siguiente</b>.</li>
	<li><b>5.</b> Ingrese un nombre para la nueva empresa y seleccione la opción: <b>Producción - Sin datos</b> 
	<div class="img-content2"><img src="img/crearEmpresa5.PNG" alt=""></div>
	</li>
	<li><b>6.</b> Luego haga clic en Siguiente .</li>
	<li><b>7.</b> En la siguiente página del asistente, haga clic en <b>Administrar usuarios</b> para agregar o eliminar usuarios de la nueva empresa y luego haga clic en <b>Siguiente</b>. 
	<div class="img-content2"><img src="img/crearEmpresa4.PNG" alt=""></div>
	</li>
	</ul>
	<p class="parrafo">La nueva empresa ya se está creando. Puede tomar un tiempo antes de que esté listo. Cuando esté listo, lo verás en la ventana de empresas permitidas:</p> 
	<div class="img-content2"><img src="img/crearEmpresa6.PNG" alt=""></div>
	<h2 class="Subtitulos">Cree nuevas empresas con datos de configuración y demostración</h2>
	<p class="parrafo">Si desea comenzar rápidamente con una nueva empresa que contiene datos de configuración y demostración, entonces la opción <b>Evaluación - Datos de muestra</b>  es la mejor opción.</p> 
	<p class="parrafo">Puede utilizar la opción  <b>Evaluación - Datos de muestra</b> en el asistente para crear una nueva empresa, para crear una empresa que sea como la empresa de demostración con datos de muestra y datos de configuración.</p> 
	<p class="parrafo">La empresa se crea con el alcance de la funcionalidad esencial que contiene todo lo necesario para evaluar el producto para empresas con procesos estándar. Por ejemplo, las facturas de muestra y las entradas del libro mayor le permiten ver gráficos e informes.</p> 
	<p class="parrafo">Para crear una nueva empresa con datos de configuración y demostración, siga estos pasos:</p> 
	<ul>
	<li><b>1.</b> En la página <b>Mi configuración</b> , abra el botón de edición de asistencia a la derecha del cuadro de texto  <b>Empresa</b> . <br>
	<div class="img-content2"><img src="img/crearEmpresa1.PNG" alt=""></div>
	</li>
	<li><b>2.</b> En la ventana de empresas permitidas que se abre, seleccione Nuevo y luego, Crear nueva empresa . <br>
	<div class="img-content2"><img src="img/crearEmpresa.PNG" alt=""></div>
	</li>
	<li><b>3.</b> Se abre el asistente para crear una nueva empresa. <br>
	<div class="img-content2"><img src="img/crearEmpresa2.PNG" alt=""></div>
	</li>
	<li><b>4.</b> Haga clic en <b>Siguiente</b>.</li>
	<li><b>5.</b> Ingrese un nombre para la nueva empresa y seleccione la opción: <b>Evaluación de datos de muestra</b> <br>
	<div class="img-content2"><img src="img/crearEmpresa7.png" alt=""></div>
	</li>
	<li><b>6.</b> Haga clic en <b>Siguiente </b> .</li>
	<li><b>7</b> En la siguiente página del asistente, haga clic en <b>Administrar usuarios</b> para agregar o eliminar usuarios de la nueva empresa y luego haga clic en <b>Siguiente</b> .</li>
	<li><b>8.</b> Elija <b>Finalizar</b> para crear la empresa. Este proceso puede tardar unos minutos en completarse.</li>
	</ul>
	<h3>Copiar una empresa</h3>
	<p class="parrafo">En la página Empresas, puede usar la acción Copiar para crear una segunda empresa basada en los contenidos de una empresa existente. Eso es útil, por ejemplo, cuando desea probar una empresa sin interrumpir los datos de producción.</p>
	<div class="img-content2">
	<img src="img/CopiarEmpresa.PNG" alt="">
	</div>
	<p class="parrafo"><b>Nota</b><br>Esta función no se puede utilizar para hacer una copia de seguridad de una empresa. Hacer una copia de seguridad de la empresa comienza exportando la base de datos como un archivo .bacpac.</p>
	<h3>Configurar la información de la empresa</h3>
	<p class="parrafo">La página Información de la empresa contiene información general que se utiliza en informes y documentos fiscales.</p>
	<p class="parrafo">Para configurar la información de la empresa, siga estos pasos.</p>
	<ul>
	<li><b>1.</b>Seleccione el ícono <b>Buscar página</b> en la esquina superior derecha de la página, ingrese <b>la información de la empresa</b>  y seleccione el enlace relacionado.</li>
	<li><b>2.</b> Ingrese la información en las fichas desplegables como se describe a continuación. <br>
	<div class="contentList">
	<ul>
	<li><b>General</b>  : la ficha desplegable General contiene la información general de la empresa, como el nombre y los detalles de la dirección. En el campo Imagen , puede cargar el logotipo de la empresa que puede usar en documentos como facturas de venta.

	</li>
	<li><b>Comunicación</b>  : en la ficha desplegable <b>Comunicación</b>  , puede ingresar la información de contacto de la empresa, como el número de teléfono y la dirección de correo electrónico. Si la empresa es un socio de empresas vinculadas, puede especificar el código de socio de IC que se utiliza para identificar a la empresa en las transacciones de empresas vinculadas.</li>
	<li><b>Pagos</b> : la ficha desplegable Pagos contiene la información bancaria de la empresa. Esta información se utiliza en documentos como facturas de venta. Para procesar cuentas bancarias en Business Central, debe configurar cuentas bancarias en la gestión de efectivo.</li>
	<li><b>Envío</b>  : en la ficha desplegable Envío , puede ingresar la información de envío de la empresa.</li>
	<li><b>Insignia de la empresa: en la ficha desplegable Insignia</b> de la empresa, puede especificar la configuración de la insignia de la empresa. Con la insignia de la empresa, puede mostrar un texto personalizado en la esquina superior derecha de la página. Al elegir la insignia de la empresa, el sistema muestra la empresa y el entorno en el que está trabajando.</li>
	<li><b>Experiencia</b> del usuario: en la ficha desplegable <b>Experiencia</b>  del usuario , puede configurar la experiencia del usuario. Esto especifica qué elementos de la interfaz de usuario se muestran y qué características están disponibles. La configuración se aplica a todos los usuarios.
	<br>
	<div class="contenList">
	<ul>
	<li><b>Esencial</b> : muestra todas las acciones y campos para todas las funciones comerciales comunes.</li>
	<li><b>Premium</b>  : muestra todas las acciones y campos para todas las funciones comerciales, incluida la gestión de fabricación y servicios.</li>
	</ul>
	</div>
	</li>
	</ul>
	</div>

	</li>
	</ul>

	`;
	cuerpo.innerHTML= contenido;
}
/*===================
Diario Generales
====================*/
let diarioGenerales = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Diarios Generales</h2>
	<p class="parrafo">Los diarios generales le permiten registrar transacciones en cuentas 
	contables y en otras cuentas, como las cuentas de clientes, cuentas de  proveedores y cuentas de bancos. </p>
	<p class="parrafo">Los movimientos pueden registrase directamente en el área de la 
	aplicación Contabilidad, pero también puede venir de las áreas de 
	aplicación Ventas y cobros, Compras y pagos y Activos fijos. La 
	información que contienen estos diarios tiene carácter temporal y puede 
	modificarse antes de que se registre el diario. Algunos diarios también se 
	registran como parte de un proceso. Esto es habitual en las áreas de la aplicación Proyectos y Existencias</p>
	<p class="parrafo">Una vez registrado el diario, las transacciones no se pueden eliminar, pero 
	puede anularlas mediante movimientos de registro adicionales. </p>
	<h3>Trabajar con diarios generales</h3>
	<p class="parrafo">La mayoría de las transacciones financieras se registran en la contabilidad a través de documentos, como facturas de compra y pedidos de ventas. Sin embargo, también puede procesar actividades comerciales como:</p>
	<div class="contentList">
	<ul>
	<li>Compras</li>
	<li>Pagos</li>
	<li>Uso de diarios recurrentes para contabilizar acumulaciones</li>
	<li>Reembolso de gastos de empleados mediante la contabilización de líneas de diario en diario.</li>
	</ul>
	</div>
	<p class="parrafo">La mayoría de los diarios se basan en el diario general y puede procesar todas las transacciones en la página Diario general. </p>
	<p class="parrafo">Utiliza diarios generales para registrar transacciones financieras de cuentas de la contabilidad general y otras cuentas. Las otras cuentas incluyen cuentas bancarias, de clientes, de proveedores y de empleados. La contabilización con un diario general crea entradas en las cuentas del libro mayor incluso cuando, por ejemplo, contabiliza una línea de diario en una cuenta de cliente. El asiento se contabiliza en una cuenta de cobros del libro mayor a través de un grupo de contabilización.</p>
	<p class="parrafo">La información que introduzca en un diario es temporal y se puede modificar mientras se encuentre en el diario. Al registrar el diario, la información se transfiere a movimientos en cuentas individuales, donde no se puede modificar. Sin embargo, puede desliquidar los movimientos registrados y puede registrar movimientos de inversión o correctores. Para obtener más información, vea <a href="https://learn.microsoft.com/es-es/dynamics365/business-central/finance-how-reverse-journal-posting">Revertir los registros de diario y deshacer los recibos/envíos</a>. </p>
	<p class="parrafo"><b>Nota</b> <br>
	El diario general solo muestra un número limitado de campos en la línea de diario de forma predeterminada. Si desea ver otros campos, como el campo <b>Tipo de cta</b>., seleccione la acción Mostrar más columnas. Para ocultar los campos adicionales de nuevo, elija la acción Mostrar menos columnas. Cuando ve menos columnas, se utiliza la misma fecha de registro para todas las líneas. Si desea tener varias fechas de registro para el mismo movimiento de diario, seleccione la acción Mostrar más columnas.
	</p>
	<div class="img-content2"><img src="img/diariogenerales.PNG" alt=""></div>
	<h3>Usar libros y secciones del diario</h3>
	<p class="parrafo">Existen varias plantillas de diario general. Cada plantilla de diario se representa mediante una página específica con funciones particulares y los campos que se requieren para admitir estas funciones, como la página <b>Diario de conciliación de pagos</b>  para procesar pagos bancarios y la página <b>Diario de pagos</b>  para pagar a sus proveedores o reembolsar a sus empleados. </p>
	<p class="parrafo">Para cada plantilla de diario, puede configurar su propio diario personal como una sección de diario. Por ejemplo, puede definir su propia sección de diario del diario de pagos que tiene su diseño y configuración personal. La sugerencia siguiente es un ejemplo de cómo personalizar un diario.</p>
	<h3>Descripción de las cuentas principales y las cuentas de contrapartida</h3>
	<p class="parrafo">Si ha configurado cuentas de contrapartida predeterminadas para las secciones del diario en la página <b>Diarios generales</b>, la cuenta de contrapartida se rellenará automáticamente cuando rellene el campo <b>Nº cuenta</b>. En caso contrario, deberá rellenar manualmente tanto el campo Nº cuenta como el campo <b>Cta. contrapartida</b>. Un importe positivo en el campo Importe se adeuda en la cuenta principal y se carga en la cuenta de contrapartida. Un importe negativo se carga en la cuenta principal y se adeuda en la cuenta de contrapartida.</p>
	<h3>Trabajar con diarios periódicos</h3>
	<p class="parrafo">En un diario periódico, crea las entradas que se van a registrar con regularidad solo una vez. Por ejemplo, las cuentas, las dimensiones, los valores de dimensiones y demás, permanecen en el diario después del registro. Si se necesitan cambios, puede hacerlos cada vez que publique.</p>
	<div class="img-content2"><img src="img/diariogenerales1.PNG" alt=""></div>
	<h3>Campo Periodicidad</h3>
	<p class="parrafo">Este campo determina la forma en que se tratará el importe en la línea de diario una vez realizado el registro. Por ejemplo, si usa el mismo importe cada vez que se registra la línea, puede permitir que el valor se mantenga. Si usa las mismas cuentas y texto de la línea, pero el importe varía en cada una, puede optar por borrar el importe después de cada registro.</p>
	<div class="img-content2"><img src="img/diariogenerales2.PNG" alt=""></div><br>
	<table class="tabla1">
	<tr>
	<th>Para</th>
	<th>Descripción</th>
	</tr>
	<tr>
	<td>F Fijo</td>
	<td>El importe de la línea del diario permanecerá una vez realizado el registro.</td>
	</tr>
	<tr>
	<td>V Variable</td>
	<td>El importe de la línea del diario se borrará una vez realizado el registro.</td>
	</tr>
	<tr>
	<td>S Saldo</td>
	<td>El importe registrado en la cuenta de la línea se distribuirá entre las cuentas especificadas para la línea de la tabla Diario gen. distribución. El saldo de la cuenta se establecerá a cero. No olvide rellenar el campo % Distribución en la página Asignaciones.</td>
	</tr>
	<tr>
	<td>CF Contraasiento fijo</td>
	<td>El importe de la línea del diario se mantendrá después del registro y se registrará un movimiento de contrapartida al día siguiente.</td>
	</tr>
	<tr>
	<td>CV Contraasiento variable</td>
	<td>El importe de la línea del diario se borrará después del registro y se registrará un movimiento de contrapartida al día siguiente.</td>
	</tr>
	<tr>
	<td>CS Contraasiento de saldo</td>
	<td>El importe registrado en la cuenta de la línea se distribuirá entre las cuentas especificadas para la línea de la página Asignaciones. El saldo en la cuenta se establecerá en cero y se contabilizará un movimiento de saldo el día siguiente.</td>
	</tr>
	<tr>
	<td>SD Saldo por dimensión</td>
	<td>La línea de diario asigna los costes según el saldo de una cuenta por dimensión. Se le pedirá que configure los filtros de dimensión que se utilizarán para calcular el saldo de la cuenta de origen por dimensión desde la que desea asignar los costes. Alternativamente, elija más tarde la acción Establecer filtros de dimensión.</td>
	</tr>
	<tr>
	<td>Contraasiento saldo RBD por dimensión</td>
	<td>La línea de diario asigna los costes según el contraasiento una cuenta por dimensión. Se le pedirá que configure los filtros de dimensión que se utilizarán para calcular el saldo de la cuenta de origen por dimensión desde la que desea asignar los costes. También puede elegir más tarde la acción Establecer filtros de dimensión.</td>
	</tr>
	</table>



	`;

	cuerpo.innerHTML= contenido;

}
/*===================
Gestion de Iva
====================*/
let gestionIva = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Gestión del IVA </h2>
	<p class="parrafo">Cuando registra una línea del diario en el área de la aplicación 
	Contabilidad y el movimiento tiene un código de IVA, el sistema crea un movimiento de IVA. Puede ver los movimientos de IVA si selecciona 
	Contabilidad, Registros se abre la ventana Registros, a continuación, en el icono de busqueda  escriba <b>Movs. IVA</b> y seleccione el enlace relacionado.</p>
	<div class="img-content2"><img src="img/iva1.PNG" alt=""></div>
	<p class="parrafo">Como se observa en la imágen Dispone de varios cálculos de tipos de IVA, que se requieren para las relaciones comerciales en la UE y otros países. Éstos incluyen las transacciones de IVA normales, las transacciones de reversión de IVA y las transacciones de IVA completas.</p>
	<p class="parrafo">El sistema también contiene algunas tablas especiales para gestionar las tareas necesarias para liquidar el IVA e informar a las aduanas y autoridades fiscales. Puede utilizar estas tablas para hacer que el sistema:</p>
	<div class="contentList">
	<ul>
	<li>calcule el IVA devengado en un periodo.</li>
	<li>prepare e imprima la declaración de IVA, que puede copiarse directamente al formulario de envío. </li>
	<li>imprima una lista de ventas a países de la UE (en papel o en un disquete). </li>
	</ul>
	</div>
	<h3>Cinco declaraciones de IVA que tendrás que presentar a Hacienda</h3>
	<p class="parrafo">Existen varios modelos de declaración de impuestos y cuentas de la actividad empresarial que se deben presentar a lo largo del año.</p>
	<p class="parrafo">Todas las personas jurídicas que realicen actividades empresariales deben presentar diferentes <b>declaraciones de IVA</b> de forma periódica a lo largo del año. Concretamente, los <b>modelos 303, 340, 347, 349 y 390</b> son los que las compañías y autónomos deben presentar. Esto puede ser una tarea ardua para empresarios, autónomos y gestorías. Aunque bien es cierto que sistemas de gestión empresarial del estilo de Sage han facilitado la ejecución de estos trámites frente a la Agencia Tributaria.</p>
	<h3>Modelos: tipos y supuestos</h3>
	<div class="contentList">
	<ul>
	<li><b>Modelo 303:</b>  es el correspondiente a la autoliquidación del Impuesto de Valor Añadido (IVA). Es de carácter periódico y se declara cada trimestre. Está obligado a presentarlo cualquier persona física o jurídica que desarrolle cualquier tipo de operación y/o actividad comercial. Sustituye a los modelos 310, 311, 370 y 371 y el procedimiento para presentarlo es el siguiente: las personas físicas que no estén obligadas a utilizar la firma electrónica avanzada, podrán presentarlo mediante la utilización del PIN 24H o presentando el modelo impreso; y las entidades no obligadas a usar la firma electrónica, deben presentar el modelo impreso. Sin embargo, las que estén obligadas deberán hacerlo a través de Internet, con el correspondiente certificado electrónico o DNI-e.</li>
	<li><b>Modelo 340:</b> es el que corresponde a los datos contables que sirven de soporte a la liquidación de IVA de cada periodo. Debe ir acompañado libro registro de facturas, el libro de bienes de inversión y el registro de las operaciones intracomunitarias, además de las operaciones no sujetas y exentas, las facturas de importaciones, las de entregas y adquisiciones intracomunitarias y las que generan inversión del sujeto pasivo. Se prsenta trimestralmente y están obligados los contribuyentes que tengan que presentar telemáticamente las autoliquidaciones o declaraciones del Impuesto sobre Sociedades, IVA o IGIC.</li>
	<li><b>Modelo 347:</b> es aquel que recoge las operaciones realizadas con un cliente o un proveedor que sean superiores a 3005,06€. Se hace una vez al año y sólo en el caso de superar esa cifra. Pero si por ejemplo un autónomo ha facturado a un cliente más de 3.005,06€ en un año pero en todas las facturas ha retenido IRPF, no se debe presentar este modelo. Tampoco están obligados aquellos que tengan la sede de su actividad empresarial fuera de España o los que tributan el IRPF por el método de estimación objetiva y estén dentro de los regímenes de agricultura, ganadería y pesca.</li>
	<li><b>Modelo 349:</b> debe presentarlo todos los empresarios y profesionales, con independencia régimen del IVA en el que tributen y su cuantía. En él se reflejan las operaciones (entregas o adquisiciones de bienes o servicios) intracomunitarias. Se presenta una vez al mes, excepto si las cantidades superan los 50.000 euros (bimensual), los 100.000 euros (trimestral) o anual si no superan los 35.000 euros.</li>
	<li><b>Modelo 390:</b> es el resumen anual de la declaración del IVA. Está obligados a presentarlo todos aquellos sujetos pasivos del IVA que tengan la obligación de presentar autoliquidaciones periódicas por este Impuesto (mensuales o trimestrales) y realicen actividades que tributen en régimen simplificado del IVA o de arrendamiento de bienes inmuebles urbanos. Se puede presentar a través de un certificado electrónico, con Clave PIN o a través de un sms.</li>
	</ul>
	</div>
	<h3>Configurar tipos de declaración de IVA y nombres de declaración de IVA</h3>
	<p class="parrafo">Las autoridades fiscales pueden modificar, y lo hacen, sus requisitos para registrar el IVA. Los tipos de declaración del IVA y los nombres de declaración del IVA pueden ayudarle a prepararse para los próximos cambios y hacer una transición sin problemas a los nuevos requisitos. Puede usar plantillas de declaración de IVA para configurar diferentes informes al elegir imprimir la declaración. Cada plantilla de declaración de IVA puede tener varios nombres de declaración de IVA que a su vez definen los cálculos, y puede crear un nuevo nombre de declaración de IVA cuando cambien los requisitos. Por ejemplo, un nombre podría calcular el IVA para este año basándose en los requisitos actuales y otro podría calcular el IVA basándose en los requisitos para el próximo año. Los nombres también son una forma de mantener un historial de los formatos de las declaraciones del IVA, por ejemplo, para que pueda consultar cómo calculó el IVA en años anteriores.</p>
	<h3>Para definir una declaración de IVA</h3>
	<p class="parrafo">Las declaraciones de IVA le permiten calcular el importe de liquidación de IVA de un determinado periodo, por ejemplo, un trimestre.</p>
	<ul>
	<li><b>1.</b> Elija el icono de busqueda que abre la función Dígame. , escriba <b>Declaraciones de IVA</b> y luego elija el enlace relacionado.</li>
	<li><b>2.</b> Elija el campo <b>Nombre</b> y después <b>Nuevo</b> en la página <b>Nombres declar. IVA.</b></li>
	<li><b>3.</b> Rellene los campos requeridos. Por lo general, desea tener una configuración para cada combinación de grupo de registro de IVA de negocio/grupo de registro IVA de producto. Para los números de fila tiene sentido usar números o códigos equivalentes como en su declaración de IVA oficial Pase el cursor sobre un campo para leer una breve descripción.
	</li>
	</ul>
	<div class="img-content2"><img src="img/iva2.PNG" alt=""></div>
	<h3>Configurar los cálculos y los métodos de registro del impuesto sobre el valor añadido</h3>
	<p class="parrafo">Los consumidores y las empresas pagan el impuesto sobre el valor añadido (IVA) cuando compran mercancías o servicios. El importe de IVA a pagar puede variar, dependiendo de varios factores. En Business Central, puede configurar el IVA para especificar las tasas que usó para calcular los importes de impuesto a partir de los siguientes parámetros:</p>
	<div class="contentList">
	<ul>
	<li>A quién vende</li>
	<li>A quién compra</li>
	<li>Qué vende</li>
	<li>Qué compra</li>
	</ul>
	</div>
	<p class="parrafo">Puede configurar los cálculos de IVA de forma manual, pero puede ser difícil y largo. La razón es que es muy sencillo usar tasas de IVA distintas por error, y crear 
	informes relacionados con IVA inexactos. Para facilitar la <b>configuración del IVA</b>, le recomendamos que utilice la guía asistida Configuración de IVA provista en el producto.</p>
	<p class="parrafo">Sin embargo, si desea configurar los cálculos del IVA, o solo desea obtener información acerca de cada paso, este artículo contiene descripciones de cada paso.</p>
	<h3>Configurar el IVA mediante la guía de configuración asistida (recomendado)</h3>
	<p class="parrafo nota-solo">
	Puede usar la guía Configuración de IVA únicamente si ha creado una Mi empresa y no ha registrado transacciones que incluyen IVA todavía.
	</p>
	<ul>
	<li><b>1.</b> Elija el icono Bombilla que abre la característica Dígame 1. y escriba <b>Configuración asistida</b>.</li>
	<li><b>2.</b> Escoja <b>Configurar IVA</b> y complete los pasos.</li>
	<li><b>3.</b> Cuando haya completado la configuración asistida, visite la página <b>Configuración de registro de IVA</b> para verificar si necesita completar campos adicionales 
	de acuerdo con los requisitos locales de su versión de Business Central.</li>
	</ul>
	<h3>Comprobar la configuración de registro de IVA</h3>
	<p class="parrafo">Para ayudarle a empezar rápido, Business Central le notifica si le faltan cuentas de contabilidad general (CG) en grupos contables o configuraciones de registro, 
	como en la página <b>Configuración de registro de IVA</b>. Puede activar o desactivar este tipo de notificación utilizando la notificación Cuentas contables que faltan en grupo de 
	registro o configuración en la página <b>Mis notificaciones</b>. Solo tiene que ir a la página <b>Mi configuración</b> y luego elegir Cambiar cuándo recibo notificaciones. .</p>
	<p class="parrafo">Si elige esta notificación, Business Central crea automáticamente esas configuraciones de registro en función de los grupos de registro en el documento o diario 
	en el que esté trabajando actualmente.</p>
	<p class="parrafo">En este punto, puede completar las cuentas de contabilidad general que falten. Sin embargo, más adelante, cuando redefina aún más la configuración, es posible que se dé cuenta de que esta configuración era errónea. Y Business Central no permite la eliminación de una configuración de registro de IVA y la configuración de registro general cuando se han creado entradas basadas en dichas configuraciones. Por lo tanto, a partir del primer lanzamiento de versiones de 2022, puede usar el campo <b>Bloqueado</b> en la página
	<b>Configuración de registro de IVA</b> para evitar que los usuarios utilicen por error una configuración que ya no es pertinente para los nuevos registros.</p>
	`;
	cuerpo.innerHTML= contenido;
}
/*=====================
Paquetes Configuracion
=======================*/
let rapidStart = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Paquetes de configuración (Rapid start)</h2>
	<p class="parrafo">Los paquetes de configuración son agrupaciones de una clase concreta de datos. Estos pueden ser datos referentes a clientes, proveedores, productos, plan de cuentas, etc.</p>
	<p class="parrafo">Cada paquete de configuración está compuesto por una serie de tablas relacionadas. Es decir, si tenemos un paquete de datos para subir los datos de clientes, en este caso, deberemos añadir tablas relacionadas con estos, como por ejemplo la tabla 18 (Cliente), 287 (Banco cliente), 19 (descuento factura cliente), entre otras como pueden ser la 7002 (precio venta) o 5717 (referencia cruzada).</p>
	<p class="parrafo">Deberemos añadir todas aquellas tablas de las cuales tengamos datos, y queramos que estés se cubran al importar la ficha correspondiente.  </p>
	<h3> Crear un paquete de configuración.</h3>
	<p class="parrafo">El primer paso a realizar es la creación del paquete, para ellos nos iremos a los paquetes de configuración (podemos acceder a través del buscador tecleando “paquetes de configuración”) y le daremos a nuevo, en donde emergerá la siguiente ventana.</p>
	<div class="img-content">
	<img src="img/rapid1.png" alt="">
	</div>
	<p class="parrafo">En ella, deberemos asignar un código y descripción única que identifique nuestro paquete, una numeración de versión (este dato es opcional pero nos ayudará a llevar un control de versiones de un mismo paquete de configuración) y un Id. Idioma.</p>
	<h3>Seleccionar campos incluidos</h3>
	<p class="parrafo">A continuación, deberemos ir seleccionando los campos que nos interesan importar de cada tabla. Para ello clicaremos en “nº de campos disponibles” O nos iremos a Tabla – Campos.</p>
	<p class="parrafo">Independientemente de la opción elegida, marcaremos con un check los campos que vamos a incluir, y los campos que, además, queremos que se validen, como se ve en la siguiente imagen:</p>
	<div class="img-content2">
	<img src="img/rapid2.PNG" alt="">
	</div>
	<p class="parrafo">Antes de continuar, deberemos entender varios conceptos. En primer lugar, los campos que se muestran en la imagen  y las diferencias entre ellos.</p>
	<div class="contentList">
	<ul>
	<li><b>Número de campos disponibles:</b> Campos totales que contiene cada tabla.</li>
	<li><b>Número de campos incluidos:</b>  Son los campos que vamos a incluir en nuestro paquete.</li>
	<li><b>Número de campos para validar:</b> Son aquellos campos que Navision validará cada vez que se</li>
	</ul>
	</div>

	<p class="parrafo">Y, en segundo lugar, es necesario saber que existen campos que no podremos desmarcar, ya que son campos con información indispensable de la tabla seleccionada (clave única), por lo tanto, estos serán no editables. Estos campos son los que nos van a identificar cada registro.</p>
	<h3>Exportar a Excel</h3>
	<p class="parrafo">Una vez tengamos claro la tabla y los campos que vamos a necesitaremos, exportaremos a Excel las tablas que componen nuestro paquete de configuración y qeu nos servirá de plantilla para luego importar los datos. Para ello deberemos, clicar en el icono “Exportar a Excel” tal y como muestra la captura siguiente:</p>
	<div class="img-content2">
	<img src="img/rapid3.PNG" alt="">
	</div>
	<p class="parrafo">Como vemos en la imagen tenemos los datos de las tres tablas con sus campos seleccionadas.</p>
	<p class="parrafo">Videotutorial como crear paquetes de configuración</p>
	<iframe class="ifra" src="https://www.youtube.com/embed/_wMZ6FEnUbE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	<br>
	<p class="parrafo">Videotutorial <b>RapidStart y Excel</b>, importación y exportacioón de paquetes de configuración.</p>
	<iframe    class="ifra" src="https://www.youtube.com/embed/Dtq4si2Vrgc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	`;
	cuerpo.innerHTML= contenido;
}
/*=================
Serie Numerica
====================*/
let serieNumerica = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Crear serie de números</h2>
	<p class="parrafo">Para cada empresa que configure, debe asignar códigos de identificación únicos a elementos como cuentas del libro mayor, cuentas de clientes y proveedores, 
	facturas y otros documentos. La numeración es importante no solo para la identificación. Un sistema de numeración bien diseñado también hace que la empresa sea más manejable y 
	fácil de analizar, y puede reducir la cantidad de errores que ocurren en la entrada de datos.</p>
	<p class="parrafo"><b>Nota</b> <br>
	De forma predeterminada, no se permiten espacios en la serie de números porque el historial exacto de las transacciones financieras debe estar disponible para auditoría, por ley,
	y por lo tanto debe seguir una secuencia ininterrumpida sin números eliminados.
	</p>
	<p>Si desea permitir brechas en ciertas series de números, consulte primero con su auditor o gerente de contabilidad para asegurarse de cumplir con los requisitos legales
	en su país/región.</p>
	<p class="parrafo"><b>Recomendación</b><br>
	Recomendamos que utilice los mismos códigos de series de números que aparecen en la página Lista de series de números en la empresa de demostración CRONUS. Es posible que los
	códigos como P-INV+ no tengan sentido inmediato para usted, pero Business Central tiene una serie de configuraciones predeterminadas que dependen de estos códigos de series de
	números.
	</p>
	<p class="parrafo">Un sistema de numeración se crea configurando uno o más códigos para cada tipo de datos maestros o documentos. Por ejemplo, puede configurar un código para 
	numerar clientes, otro código para numerar facturas de venta y otro código para numerar documentos en diarios generales. Después de configurar un código, debe configurar al 
	menos una línea de serie numérica. La línea de la serie numérica contiene información como el primer y último número de la serie y la fecha de inicio. Puede configurar más de una 
	línea de serie numérica por código de serie numérica, con una fecha de inicio diferente para cada línea. Las series se utilizarán consecutivamente, comenzando cada serie en la 
	fecha de inicio respectiva.</p>
	<p class="parrafo"><b>Importante</b><br>
	La longitud máxima de un número en una serie de números es de 20 caracteres. Hay algunas situaciones en las que Business Central agregará un número con una identificación generada
	por el sistema. Por ejemplo, cuando se utilizan documentos como facturas para aplicar transacciones, como pagos, Business Central genera identificadores para las transacciones 
	aplicadas. El identificador se compone de un número de una serie de números y una identificación asignada por el sistema de seis caracteres, como -12345. Si espera procesar más de 
	9999 documentos en diarios bancarios o GIRO, o diarios de recibos de efectivo, configure series numéricas para esos tipos de documentos para que incluyan menos de 14 caracteres.
	</p>
	<p class="parrafo">Por lo general, configura su serie de números para insertar automáticamente el siguiente número consecutivo en nuevas tarjetas o documentos que cree. Sin embargo,
	también puede configurar una serie de números para permitir que ingrese manualmente el nuevo número. Especifique esto con la casilla de verificación Números de manual .</p>
	<p class="parrafo">Si desea utilizar más de un código de serie numérica para un tipo de datos maestros, por ejemplo, si desea utilizar diferentes series numéricas para diferentes 
	categorías de elementos, puede utilizar relaciones de series numéricas.</p>
	<h3>Para crear una nueva serie numérica</h3>
	<ul>
	<li><b>1.</b> Elija el icono de busqueda, ingrese <b>No. Serie</b> y luego elija el enlace relacionado.</li>
	<li><b>2.</b> Elija la acción <b>Nuevo</b>.</li>
	<li><b>3.</b> En la Nueva Linea, complete los campos según sea necesario. pase el cursor sobre un campo para leer una breve descripción. <br><br>
	<div class="img-content2"><img src="img/devol1.PNG" alt=""></div>
	</li>
	<li><b>4.</b> Elija la acción Líneas.</li>
	<li><b>5.</b> En la página Nº Líneas de serie , rellene los campos para definir el uso real y el contenido de la serie de números que creó en el paso 2.</li>
	<li><b>6.</b>  Repita el paso 5 para tantos usos diferentes de la serie numérica que necesite. El campo Fecha de inicio define qué línea de serie numérica está activa.</li>
	</ul><br>
	<div class="img-content"><img src="img/devol2.PNG" alt=""></div>
	<p class="parrafo"><b>Nota</b> <br>Para permitir que los usuarios especifiquen números manualmente cuando registran un nuevo cliente o proveedor, por ejemplo, seleccione el campo
	Números manuales en la propia serie de números. Para no permitir la <b>numeración manual</b>, borre el campo.</p>
	<p class="parrafo">Puede asignar series de números a las plantillas que configura para los diferentes tipos de clientes y proveedores que su personal de ventas y compradores agregan 
	con mayor frecuencia a su Business Central. En ese caso, configure la serie de números relevante, vincúlelos a través de relaciones y luego agregue la primera serie de números en la 
	relación relevante a la página de configuración correspondiente. Luego, cuando un usuario crea un cliente, elige la plantilla correspondiente y el nuevo cliente obtiene un número 
	asignado de la serie de números definida para esa plantilla.</p>

	`;

	cuerpo.innerHTML= contenido;

}

/*==============================
Config contabilidad General
==============================*/
let ConfigContabGeneral = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2>Configuración contabilidad general</h2>
	<p class="parrafo">En la página Configuración de la contabilidad general, puede especificar una configuración predeterminada para la contabilidad general y otras áreas de aplicación. Asegúrese de finalizar la configuración de la contabilidad general para cada empresa que defina en Microsoft Dynamics 365 Business Central.</p>
	<p class="parrafo">Las cinco fichas desplegables de la página Configuración de la contabilidad general son:</p>
	<div class="contentList">
	<ul>
	<li>General</li>
	<li>Dimensiones</li>
	<li>Registro de Fondo</li>
	<li>Informes</li>
	<li>APlicación</li>
	</ul>
	</div>
	<p class="parrafo">Para acceder a la página Configuración de la contabilidad general, seleccione el icono Buscar página en la esquina superior derecha de la página, escriba <b>configuración de contabilidad</b> y, después, seleccione el vínculo relacionado.</p>
	<p class="parrafo">En la página Configuración de contabilización general , especifique cómo desea configurar las combinaciones de grupos de contabilización de productos generales y comerciales generales. Los grupos de contabilización asignan entidades como clientes, proveedores, artículos, recursos y documentos de compra y venta a las cuentas del libro mayor.</p>
	<div class="img-content2"><img src="img/contab01.png" alt=""></div>
	<h3>Configurar ficha desplegable de contabilidad general</h3>
	<p class="parrafo">La ficha desplegable General contiene los valores predeterminados de configuración básica. Para mostrar todos los campos, seleccione Mostrar más. Puede leer una breve descripción seleccionando el nombre del campo.</p>
	<h3>General</h3>
	<p class="parrafo">Los campos más utilizados de la ficha desplegable General son los siguientes:</p>
	<div class="contentList">
	<ul> 
	<li><b>Permitir registro desde/Permitir registro hasta: </b> estos campos especifican un intervalo de fechas en el que todos los usuarios pueden registrar transacciones. Dado que los períodos contables específicos no se pueden cerrar en Business Central, el establecimiento del intervalo de fechas de registro evita que los usuarios registren movimientos fuera de ese intervalo de fechas. Aparte de especificar estas fechas en la configuración de la contabilidad general, también puede asignarlas a los usuarios en la página Configuración de usuario.</li>
	<li><b>Formato de dirección local: </b> especifica el formato con que deben mostrarse las direcciones en las copias impresas. Por ejemplo, Ciudad+Estado+Código postal. Además del formato de dirección local, puede especificar el formato de dirección para cada país en la página Países o regiones. Cuando selecciona el campo Requerir el código de país o región en la dirección en la configuración de contabilidad general, los campos Código postal, Ciudad y Estado cambiarán cuando se cambie el valor del campo Código de país o región. Esto brinda a los usuarios más control sobre la información de la dirección.</li>
	<li><b>Configuración de moneda local: </b>en la ficha desplegable General, puede especificar la moneda local de la empresa y la configuración relacionada:</li>
	<li><b>Código LCY:</b> especifica la moneda local (LCY) con la que trabaja la empresa.</li>
	<li><b>Precisión de redondeo de facturas: </b>  especifica el tamaño del intervalo a utilizar para redondear importes de facturas en LCY. En la página Monedas, puede especificar cómo redondear las facturas en monedas extranjeras.</li>
	<li><b>Tipo de redondeo de facturas: </b> especifica cómo redondear los importes de las facturas. El contenido de este campo determina si el importe de la factura a redondear se redondeará al alza o a la baja hasta el intervalo más próximo, según se especifica en el campo Precisión de redondeo de facturas. Si selecciona Más cercano, los dígitos mayores o iguales que cinco se redondearán hacia arriba y los dígitos menores o iguales que cinco se redondearán hacia abajo.</li>
	<li><b>Precisión del redondeo de importes:</b>  especifica el tamaño del intervalo a utilizar al redondear importes en LCY. En la página Monedas, puede especificar cómo se redondean las cantidades en monedas extranjeras.</li>
	<li><b>Posiciones decimales de los importes:</b> especifica el número de posiciones decimales a mostrar para los importes en LCY. Este campo cubre los importes creados con todo tipo de transacciones, y es útil para ayudar a evitar incoherencias al ver o sumar diferentes importes. La configuración pretederminada es 2:2, lo que especifica que todos los importes en LCY se mostrarán con un mínimo de dos posiciones decimales y un máximo de dos posiciones decimales. También puede introducir un número fijo, como 2, lo que también significa que los importes mostrarán dos decimales. En la página Monedas, puede especificar cuántas posiciones decimales mostrar para los importes en monedas extranjeras.</li>
	<li><b>Precisión del redondeo de unidades-importes: </b>especifica el tamaño del intervalo a utilizar al redondear importes, artículos o precios de recursos unitarios, para cada unidad en LCY. Como ejemplos de unidades-importes pueden citarse los precios de artículos y los precios de recursos. En la página Monedas, puede especificar cómo se redondean las cantidades unitarias en monedas extranjeras.</li>
	<li><b>Posiciones decimales de unidades-importes: </b> especifica el número de posiciones decimales a mostrar para cantidades unitarias, artículos o precios de recursos, para cada unidad en LCY. En la página Monedas, puede especificar cuántas posiciones decimales mostrar para los importes unitarios en moneda extranjera.</li>
	<li><b>Símbolo de moneda local: </b>especifica el símbolo de la moneda local que quiere que aparezca en los cheques y gráficos, por ejemplo, el símbolo de dólar ($) para los dólares de EE. UU. (USD).</li>
	<li><b>Descripción de moneda local: </b>especifica la descripción de la moneda local.</li>
	<li><b>Tipo de redondeo de impuestos/IVA: </b> especifica cómo el programa redondeará los impuestos o el IVA para la moneda local. Al introducir un importe que incluya impuestos /IVA en un documento, el sistema primero calcula y redondea el importe sin incluir impuestos /IVA y luego calcula mediante resta el importe de impuestos /IVA, dado que el importe total debe corresponder al importe con impuestos /IVA introducido manualmente. En ese caso, el tipo de redondeo de impuestos /IVA no se aplica, porque el importe sin incluir impuestos/IVA ya se ha redondeado con la precisión de redondeo del importe.</li>
	<li><b>Números de cuentas bancarias:</b>  especifica el código de la serie numérica que se utilizará para asignar números a las cuentas bancarias.</li>
	<li><b>Números de documentos de ajuste de conciliación bancaria:</b> especifica el número de documento del ajuste de conciliación bancaria para la configuración de la contabilidad general. Puede seleccionar el número de documento en la tabla N.º de serie.</li>
	<li><b>Conciliación bancaria con coincidencia automática:</b>especifica la característica a usar para conciliar cuentas bancarias. Si activa este conmutador de alternancia, usará la página Diarios de conciliación de pagos, que admite la importación de archivos de extractos bancarios. Si está desactivado, deberá usar la página Hoja de cálculo de reconciliación bancaria, que es mejor para cheques y depósitos.
	</li>
	<li><b>IVA caja:</b> Especifica si se pueden fraccionar los pagos de impuestos hasta el momento de la recepción de la cantidad facturada.</li>
	<li><b>Mostrar Importes: </b> Especifica el tipo de importes que se muestran en los diarios y en las ventanas de movimientos. Solo importe: se muestran los campos Importe e Importe (DL). Debe/haber: se muestran los campos Importe debe, Importe debe (DL), Importe haber e Importe haber (DL). Todos importes: se muestran todos los campos de importe.</li>
	</ul>
	<div class="img-content2"><img src="img/contab02.PNG" alt=""></div>
	<h3>Dimensiones</h3>
	</div>
	<p class="parrafo">En la ficha desplegable Dimensiones, puede configurar las dimensiones globales y abreviadas. Normalmente, las dos dimensiones globales son las de la empresa y se utilizan en los informes de análisis. Para configurar las dimensiones globales, seleccione <b>General</b> y luego Cambiar <b>dimensiones globales</b>.</p>
	<p class="parrafo">Las dos dimensiones globales son siempre las dos primeras dimensiones abreviadas. Puede agregar dimensiones abreviadas a diarios y líneas de documentos para introducir valores de dimensión de forma rápida y eficiente. Además de las dos primeras dimensiones abreviadas, que son de forma predeterminada las dos dimensiones globales, puede seleccionar otras seis dimensiones abreviadas.</p>
	<div class="contentList">
	<ul>
	<li><b>Cod.dimensiones global 1 : </b>Especifica el código de una dimensión global que está vinculada al registro o al movimiento para fines de análisis. Hay dos dimensiones globales, normalmente para las actividades más importantes de la empresa, disponibles en todas las fichas, los documentos, los informes y las listas.</li>
	<li><b>Cod.Dim.acceso dir 2</b> Especifica el código de la Dimensión de acceso directo 1, cuyos valores de dimensión puede introducir a continuación directamente en diarios y líneas de compra o de venta.</li>
	</ul>
	</div>
	<div class="img-content"><img src="img/contab03.png" alt=""></div>
	<h3>Registro de Fondo</h3>
	<p class="parrafo">En la ficha desplegable Registro de fondo, puede especificar si desea registrar documentos de contabilidad general en segundo plano. Utilice las entradas de la cola de trabajos para programar registros de contabilidad general, como después del horario laboral.</p>
	<p class="parrafo">Puede establecer los siguientes campos:</p>
	<div class="contentList">
	<ul>
	<li><b>Registrar con cola de proyectos: </b> especifica si usa colas de proyectos para registrar documentos de contabilidad general en segundo plano.</li>
	<li><b>Registrar e imprimir con cola de proyectos: </b>especifica si usa colas de proyectos para registrar e imprimir documentos de contabilidad general en segundo plano.</li>
	<li><b>Categoría cola proyectos: </b> especifica el código para la categoría de la cola de proyecto que desea asociar al registro en segundo plano. Puede asignar estos códigos a la entrada de la cola de trabajos que desee utilizar para contabilizar documentos del libro mayor.</li>
	<li><b>Notificar operación correcta: </b> especifica si se envía una notificación al registrar e imprimir de manera correcta.</li>
	<li><b>Tipo de salida de informe: </b> especifica el resultado del informe que se programará con un movimiento de cola de proyecto cuando la opción Registrar e imprimir con la cola de proyecto esté seleccionada.</li>
	</ul>
	</div>
	<h3>Informes</h3>
	<p class="parrafo">La ficha desplegable Informes le ayuda a determinar si se va a utilizar otra divisa de notificación. Se utiliza otra divisa de notificación cuando la información de la transacción también debe estar disponible en una divisa diferente a la local.</p>
	<p class="parrafo">Al configurar otra divisa de notificación, los usuarios podrán ejecutar informes financieros tanto en la divisa local como en la otra divisa de notificación.</p>
	<p class="parrafo">También puede especificar los esquemasde cuenta para los siguientes informes:</p>
	<div class="contentList">
	<ul>
	<li><b>Informe financiero del balance de situación: </b>Especifica qué informe financiero se usa para generar el informe de balance de situación.</li>
	<li><b>Informe financiero del balance de ingresos: </b>Especifica qué informe financiero se usa para generar el informe de balance de ingresos.</li>
	<li><b>Informe financiero para extracto de flujo de efectivo: </b>Especifica qué informe financiero se usa para generar el informe de extracto de flujos de efectivo.</li>
	<li><b>Informe financiero de las ganancias retenidas: </b>Especifica qué informe financiero se usa para generar el informe de ganancias retenidas.</li>
	<li><b>Informe de divisa adicional: </b>Especifica la divisa que se va a usar como divisa adicional para informes.</li>
	<li><b>Tipo cambio ajuste IVA: </b>Especifica cómo se ajustarán las cuentas configuradas para registrar el IVA en la ventana Configuración de contabilización de IVA para las fluctuaciones del tipo de cambio.</li>
	</ul>
	</div>
	<h3>Aplicación</h3>
	<p class="parrafo">La ficha desplegable Aplicación incluye los siguientes campos:</p>
	<div class="contentList">
	<ul>
	<li><b>Precisión de redondeo de la aplicación: </b>especifica el tamaño del intervalo para las diferencias de redondeo de la divisa local (LCY). Este parámetro surte efecto cuando aplica las entradas de LCY a las entradas en una divisa diferente.</li>
	<li><b>Advertencia de tolerancia de descuentos de pago, Registrar tolerancia de descuentos de pago y Período de gracia de descuento de pago:</b> complete estos campos para permitir tolerancias en los términos de descuento de pago.</li>
	<li><b>Advertencia de tolerancia de pago y Registro de tolerancia de pago: </b> complete estos campos para cerrar cuentas por cobrar y por pagar pendientes con importes de pago distintos a los que se deben.</li>
	<li><b>Porcentaje de tolerancia de pago: </b>indique el porcentaje de diferencia que pueden tener el pago o el reembolso respecto del importe de la factura o el abono.
	</li>
	<li><b>Importe máximo de tolerancia pago: </b>especifica el importe máximo de diferencia que pueden tener el pago o el reembolso respecto del importe de la factura o el abono.</li>
	</ul>
	</div>
	<div class="img-content2"><img src="img/contab04.PNG" alt=""></div>
	<p class="parrafo">Para cambiar la tolerancia de pago, siga los siguientes pasos:</p>
	<ul>
	<li><b>1.</b> En la página Configuración de contabilidad general, seleccione <b>Acciones > Funciones > Cambiar tolerancia de pago.</b></li>
	<li><b>2.</b> Seleccione la casilla <b>Todas las divisas</b> si desea utilizar la misma configuración de tolerancia de pago para las monedas locales y extranjeras.</li>
	<li><b>3.</b> Deje el campo <b>Código de divisa</b> vacío si desea configurar tolerancias de pago para la divisa local. En este caso, puede configurar los ajustes de tolerancia para divisas extranjeras en la página Tarjeta de divisa.</li>
	<li><b>4.</b> Indique un porcentaje en el campo <b>Porcentaje de tolerancia de pago.</b></li>
	<li><b>5.</b> Escriba un importe en el campo <b>Porcentaje de tolerancia de pago.</b>.</li>
	<li><b>6.</b> Seleccione Aceptar para ejecutar el trabajo por lotes <b>Cambiar tolerancia de pago.</b></li>
	</ul>
	<div class="img-content2"><img src="img/contab05.PNG" alt=""></div>
	<h3>Tabla de configuración de finanzas</h3>
	<table class="tabla1">
	<tr>
	<th>Descripción</th>
	<th>Ver</th>
	</tr>
	<tr>
	<td>Ver o editar cuentas del libro mayor en las que se contabilizan todas las entradas del libro mayor</td>
	<td><a href="">Configurar o cambiar el plan de cuentas</a></td>
	</tr>
	<tr>
	<td>Especifique cómo desea que le paguen los clientes y cómo desea pagar a sus proveedores.</td>
	<td><a href="">Configurar métodos de pago</a></td>
	</tr>
	<tr>
	<td>Especifique las condiciones de pago para administrar las fechas de vencimiento y calcular posibles descuentos por pago.</td>
	<td><a href="">Configurar condiciones de pago</a></td>
	</tr>
	<tr>
	<td>Especifique los grupos de contabilización que asignan entidades como clientes, proveedores, artículos, recursos y documentos de compra y venta a las cuentas del libro mayor.</td>
	<td><a href="">Configurar grupos de contabilización</a></td>
	</tr>
	<tr>
	<td>Cree informes financieros y defina categorías de cuentas que determinen el contenido de los gráficos e informes financieros, como los informes de hoja de balance y estado de resultados.</td>
	<td><a href="">Preparar informes financieros con datos financieros y categorías de cuentas</a></td>
	</tr>
	<tr>
	<td>Configure una tolerancia por la cual el sistema cierra una factura incluso si el pago, incluido cualquier descuento, no cubre completamente el monto de la factura.</td>
	<td><a href="">Trabajar con tolerancias de pago y tolerancias de descuento de pago</a></td>
	</tr>
	<tr>
	<td>Configurar periodos fiscales.</td>
	<td><a href="">Trabajar con períodos contables y años fiscales</a></td>
	</tr>
	<tr>
	<td>Configure los términos de la factura que les recuerden a sus clientes que deben realizar el pago.</td>
	<td><a href="">Configurar términos y niveles de recordatorio</a></td>
	</tr>
	<tr>
	<td>Defina cómo informa a las autoridades fiscales los importes del impuesto sobre el valor añadido (IVA) recaudados por las ventas.</td>
	<td><a href="">Configurar el impuesto al valor agregado (IVA)</a></td>
	</tr>
	<tr>
	<td>Prepárese para manejar el IVA no realizado en relación con los métodos de contabilidad basados ​​en efectivo.</td>
	<td><a href="">Configurar el IVA no realizado para la contabilidad de caja</a></td>
	</tr>
	<tr>
	<td>Defina las monedas extranjeras con las que comercia o reporta transacciones.</td>
	<td><a href="">Configurar monedas</a></td>
	</tr>
	<tr>
	<td>Configure sus funciones de Ventas y Compras para manejar pagos en moneda extranjera.</td>
	<td><a href="">Habilitar la aplicación de asientos contables en diferentes monedas</a></td>
	</tr>
	<tr>
	<td>Defina una o más monedas adicionales para que los montos se informen automáticamente tanto en la moneda local (LCY) como en una moneda de informe adicional en cada asiento del libro mayor (G/L) y en otros asientos.</td>
	<td><a href="">Configurar una moneda de informe adicional</a></td>
	</tr>
	<tr>
	<td>Ajuste periódicamente los equivalentes de divisas adicionales para compensar las fluctuaciones de los tipos de cambio.</td>
	<td><a href="">Actualizar tipos de cambio de moneda</a></td>
	</tr>
	<tr>
	<td>Defina múltiples tasas de interés para usar en diferentes períodos para pagos atrasados ​​en transacciones comerciales.</td>
	<td><a href="">Configurar tasas de interés múltiples</a></td>
	</tr>
	<tr>
	<td>Haga arreglos para que los montos se redondeen automáticamente a medida que se crean las facturas.</td>
	<td><a href="">Configurar el redondeo de facturas</a></td>
	</tr>
	<tr>
	<td>Agregue nuevas cuentas al plan de cuentas existente.</td>
	<td><a href="">Configuración del plan de cuentas</a></td>
	</tr>
	<tr>
	<td>Configure gráficos de inteligencia empresarial (BI) para analizar el flujo de caja.</td>
	<td><a href="">Configuración del análisis de flujo de caja</a></td>
	</tr>
	<tr>
	<td>Habilitar la facturación de un cliente no configurado en el sistema.</td>
	<td><a href="">Configurar clientes en efectivo</a></td>
	</tr>
	<tr>
	<td>Configure los informes de Intrastat y envíe el informe a una autoridad.</td>
	<td><a href="">Configurar e informar Intrastat</a></td>
	</tr>
	<tr>
	<td>Asegúrese de que un asiento de diario se asigne entre diferentes cuentas, como cantidad, porcentaje o monto, cuando lo publique en el diario.</td>
	<td><a href="">Usar claves de asignación en diarios generales</a></td>
	</tr>
	<tr>
	<td>Configure códigos fuente y códigos de motivo para ayudar a realizar un seguimiento de los registros de auditoría.</td>
	<td><a href="">Configuración de códigos fuente y códigos de motivo para registros de auditoría</a></td>
	</tr>
	<tr>
	<td>Especifique los informes predeterminados que se utilizarán para diferentes tipos de documentos.</td>
	<td><a href="">Selección de informes en Business Central</a></td>
	</tr>
	</table>
	<p class="parrafo"><b>Nota</b><br>Según su ubicación geográfica, algunas páginas de Business Central pueden contener 
	campos que no se describen en los artículos enumerados anteriormente porque se aplican a personalizaciones o funciones locales. 
	Pase el cursor sobre un campo para leer una breve descripción.</p>

	`;

	cuerpo.innerHTML= contenido;
}
/*======================
Config Plan de Cuentas
=======================*/
let configPlanCuenta = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `

	<h2 class="Subtitulos">Configurar cuentas de contabilidad general</h2>
	<p class="parrafo">El balance de ingresos y el balance de situación son dos informes financieros importantes para la empresa. En Business Central, una cuenta en el balance de situación y en el balance de ingresos se llama cuenta de contabilidad y todas esas cuentas conforman la lista de <b>Plan de cuentas</b>.</p>
	<p class="parrafo">El plan de cuentas (COA) muestra las cuentas de contabilidad que almacenan sus datos financieros. Business Central incluye un COA estándar que está preparado para respaldar su negocio. Sin embargo, puede cambiar las cuentas predeterminadas y agregar nuevas cuentas.</p>
	<p class="parrafo">En la lista <b>Plan de cuentas</b>, todas las cuentas de contabilidad están disponibles y se pueden ver al mismo tiempo. Sin embargo, también hay una Ficha de cuenta de contabilidad para cada cuenta, a la que se puede acceder desde la lista  <b>Plan de cuentas</b> .</p>
	<p class="parrafo"></p>
	<p class="parrafo">Puede usar las fichas de las cuentas de contabilidad para crear y editar cuentas de contabilidad. La ficha de cuenta de contabilidad contiene cinco fichas desplegables:</p>
	<div class="contentList">
	<ul>
	<li>General</li>
	<li>Registro</li>
	<li>Consolidación</li>
	<li>Informes</li>
	<li>Contabilidad de costes</li>
	</ul>
	</div>
	<div class="img-content2"><img src="img/planCuenta.png" alt=""></div>
	<p class="parrafo">En este escenario, supongamos que tiene que crear una nueva cuenta de contabilidad para gastos telefónicos. Para crear una cuenta, siga estos pasos:</p>
	<ul>
	<li><b>1.</b> Seleccione el icono Buscar página en la esquina superior derecha de la página, especifique Plan de cuentas y, después, seleccione el vínculo relacionado.</li>
	<li><b>2.</b> Seleccione Nueva.</li>
	<li><b>3.</b> Expanda la ficha desplegable <b>General</b>. La siguiente tabla incluye descripciones de los campos de la ficha desplegable General y los datos que introducimos en esta demostración. <br>
	<table class="tabla1">
	<tr>
	<th>Campo</th>
	<th>Descripción</th>
	<th>Datos de demostración</th>
	</tr>
	<tr>
	<td>N.º</td>
	<td>El número de la cuenta de contabilidad.</td>
	<td>613500</td>
	</tr>
	<tr>
	<td>Nombre</td>
	<td>El nombre o la descripción.</td>
	<td>Gastos de teléfono</td>
	</tr>
	<tr>
	<td>Ingresos/Saldo</td>
	<td>Indica si la cuenta se clasifica como balance de ingresos o cuenta de balance de situación. Este campo es importante para determinar si la cuenta debe cerrarse al final del año fiscal.</td>
	<td>Balance de ingresos</td>
	</tr>
	<tr>
	<td>Categoría de cuenta</td>
	<td>Especifica la categoría de la cuenta de contabilidad, como activos, recursos propios, etc. Este campo se utiliza para crear informes financieros.</td>
	<td>Gastos</td>
	</tr>
	<tr>
	<td>Subcategoría de cuenta</td>
	<td>Especifica la subcategoría de la cuenta contable. Este campo se utiliza para crear informes financieros.</td>
	<td>Gastos en servicios públicos</td>
	</tr>
	<tr>
	<td>Debe/Haber</td>
	<td>Indica el tipo de movimientos que se publicarán en esta cuenta. La selección realizada no sirve como restricción para el tipo de transacciones publicadas en la cuenta.</td>
	<td>Ambas</td>
	</tr>
	<tr>
	<td>Tipo de cuenta</td>
	<td>Indica el propósito de la cuenta en diferentes listas, diarios e informes. Las opciones disponibles son: Registro: el único tipo de cuenta donde se pueden registrar movimientos. Cabecera: solo se usa para descripciones e informes. Total: se usa para calcular el total de las cuentas con el campo Sumatorio. Inicio-total: marca el comienzo de un rango de cuentas en el campo Sumatorio. Fin-total: marca el final de un rango de cuentas en el campo Sumatorio.</td>
	<td>Registro</td>
	</tr>
	<tr>
	<td>Sumatorio</td>
	<td>Especifica un intervalo de cuentas o una lista de números de cuenta. El programa sumará los movimientos de las cuentas que se muestran en este campo. Las fórmulas sumatorias son posibles para las cuentas de contabilidad de tipo Total y Fin-Total.</td>
	<td> &lt;blank &gt;</td>
	</tr>
	<tr>
	<td>Saldo</td>
	<td>Muestra el saldo actual de la cuenta. Seleccione el importe del saldo para acceder a la lista Movs. contabilidad.</td>
	<td></td>
	</tr>
	<tr>
	<td>Cuenta de conciliación</td>
	<td>Determina si la cuenta de contabilidad se incluye en la lista de Conciliación en los diarios generales. Usa la lista de Conciliación antes de publicar para revisar el efecto de registrar las cuentas en el diario.</td>
	<td>No</td>
	</tr>
	<tr>
	<td>Texto adicional automático</td>
	<td>Si se selecciona este campo, el texto adicional que se configure en las cuentas se agrega automáticamente a los documentos de venta y compra en el campo Descripción. Si no se selecciona este campo, el texto adicional aún puede configurarse en la cuenta y agregarse a los documentos manualmente. Para crear texto adicional, seleccione Textos adicionales en la pestaña Navegar.</td>
	<td>No</td>
	</tr>
	<tr>
	<td>Entrada directa</td>
	<td>Indica si el registro puede moverse directamente a la cuenta desde una línea del diario. Este campo se selecciona automáticamente cuando se crean cuentas nuevas. Las cuentas de contabilidad, como una cuenta de cobros (deudores comerciales), que se registran según los grupos contables normalmente se configurar para registro indirecto.</td>
	<td>Sí</td>
	</tr>
	<tr>
	<td>Bloqueada</td>
	<td>  Si selecciona este campo, impedirá que los movimientos se registren en esta cuenta. Las cuentas se pueden bloquear y abrir según se necesite.</td>
	<td></td>
	</tr>
	<tr>
	<td>Fecha últ. modificación</td>
	<td>Un campo generado por el sistema que muestra la fecha en la que se modificó por última vez la cuenta de contabilidad.</td>
	<td>Generado por el sistema</td>
	</tr>
	<tr>
	<td>Omitir descripción predeterminada en el diario.</td>
	<td>Especifica si la descripción predeterminada se inserta automáticamente en el campo Descripción en las líneas del diario creadas para esta cuenta de contabilidad general.</td>
	<td>No</td>
	</tr>
	</table>
	</li>
	<li><b>4.</b> Abra la ficha desplegable <b>Registro</b>. La siguiente tabla incluye descripciones de los campos de la ficha desplegable Registro y los datos que introducimos en esta demostración. <br>
	<table class="tabla1">
	<tr>
	<th>Campo</th>
	<th>Descripción</th>
	<th>Datos de demostración</th>
	</tr>
	<tr>
	<td>Tipo de registro general</td>
	<td>Define si la cuenta se usa solo para una transacción de venta o compra o con ambos tipos de transacciones. Este campo se usa junto a los campos Grupo registro IVA neg. y Grupo registro IVA prod. para determinar si el sistema registrará el IVA. Las siguientes opciones están disponibles: <Blank>, compra y venta.</td>
	<td>Compra</td>
	</tr>
	<tr>
	<td>Grupo de registro de negocio general</td>
	<td>Identifica el grupo contable de negocio general predeterminado para la cuenta. Este campo se usa junto a los campos Grupo de registro de producción general y Tipo de registro general para encontrar las cuentas de contabilidad general en las que registrar ventas, compras, importes de descuento, costes de bienes vendidos (COGS) y ajustes de inventario. Dado que el grupo contable de negocio general indica a quién compra o vende, el grupo contable de negocio general del cliente o del proveedor tiene prioridad sobre el grupo contable de negocio general de la cuenta de contabilidad general. Si no hay ningún cliente o proveedor implicado en una transacción, el programa usará el grupo contable de negocio general de la cuenta de contabilidad general.</td>
	<td>NAC</td>
	</tr>
	<tr>
	<td></td>
	<td> Identifica el grupo contable de producto general predeterminado para la cuenta. Este campo se usa junto a los campos Grupo de registro de negocio general y Tipo de registro general para encontrar las cuentas de contabilidad general en las que registrar ventas, compras, importes de descuento, COGS y ajustes de inventario. El grupo de registro de negocio general de un producto tiene prioridad sobre el grupo de registro de negocio general de la cuenta de contabilidad general.</td>
	<td>SERVICIOS</td>
	</tr>
	<tr>
	<td>Grupo registro IVA neg.</td>
	<td>Identifica el grupo de registro de IVA de negocio predeterminado para la cuenta. Este campo se usa junto con los campos Grupo registro IVA prod. y Tipo de registro general para determinar el porcentaje de IVA y el tipo de cálculo de IVA y para encontrar las cuentas de contabilidad general donde el programa registrará el IVA. Dado que el grupo de registro de IVA de negocio indica a quién compra o vende, el grupo de registro de IVA de negocio del cliente o del proveedor tiene prioridad sobre el grupo de registro de IVA de negocio de la cuenta de contabilidad general. Si no hay ningún cliente o proveedor implicado en una transacción, el programa usará el grupo de registro de IVA de negocio de la cuenta de contabilidad general.</td>
	<td>NAC</td>
	</tr>
	<tr>
	<td>Grupo registro IVA prod.</td>
	<td>Identifica el grupo de registro de IVA de producto predeterminado para la cuenta. Este campo se usa junto con los campos Grupo registro IVA neg. y Tipo de registro general para determinar el porcentaje de IVA y el tipo de cálculo de IVA y para encontrar las cuentas de contabilidad general donde el programa registrará el IVA. El grupo de registro de IVA de producto de un artículo tiene prioridad sobre el grupo de registro de IVA de producto de la cuenta de contabilidad general.</td>
	<td>IVA25</td>
	</tr>
	<tr>
	<td>N.º cuenta IC asociada predet.</td>
	<td>Identifica el número de cuenta de contabilidad de empresas vinculadas (IC) para esta cuenta de contabilidad. Cuando introduce esta cuenta en el diario general de empresas vinculadas, la cuenta IC que se especifica en este campo se usa como número de cuenta de contrapartida predeterminado.</td>
	<td>&lt;blank &gt;</td>
	</tr>
	<tr>
	<td>Plantilla de fraccionamiento predeterminada</td>
	<td>Especifica la plantilla de fraccionamiento predeterminada que rige el modo de fraccionar ingresos y gastos en los periodos en los que se produjeron.</td>
	<td>&lt;blank &gt;</td>
	</tr>
	</table>
	</li>
	<li><b>5.</b> En la ficha desplegable <b>Consolidación</b>, puede introducir la cuenta de débito y de crédito de la empresa de consolidación a la que asignarla. Al ejecutar la consolidación desde la empresa de consolidación, el programa crea líneas del diario generales para cada unidad de negocio, según la asignación que se haya introducido aquí. Cuando la empresa tiene una divisa local diferente a la de la empresa de consolidación, puede seleccionar un método de conversión de consolidación para la cuenta de contabilidad. Esto especifica la tasa de conversión de divisa que se aplicará a la cuenta.</li>
	<li><b>6.</b> En la ficha desplegable Informes, puede especificar si desea procesar ajustes de tipo de cambio entre la divisa local y la divisa de notificación adicional de esta cuenta.</li>
	<li><b>7.</b> La ficha desplegable Contabilidad de costes muestra el tipo de coste al que está asignada la cuenta de contabilidad.</li>
	</ul>
	<h3>Usar el plan de cuentas</h3>
	<p class="parrafo">El plan de cuentas muestra las cuentas del mayor que almacenan los datos financieros.</p>
	<div class="img-content2"><img src="img/planCuenta02.PNG" alt=""></div>
	<p class="parrafo">Desde el plan de cuentas, puede abrir cada una de las cuentas del mayor. Sin embargo, al seleccionar Editar lista, también puede actualizar las cuentas presentes o crear otras nuevas cuentas del mayor. Puede explorar en profundidad los campos Cambio neto y Saldo para visualizar los movimientos de las cuentas del mayor.</p>
	<p class="parrafo">La página Descripción general del plan de cuentas es una versión simplificada del plan de cuentas. Si solo desea obtener una rápida descripción general de los conceptos básicos, como los cambios netos y los saldos, la página Descripción general del plan de cuentas es una alternativa útil</p>
	<p class="parrafo">Al igual que el plan de cuentas, muestra información básica, como el cambio neto y el saldo de todas las cuentas del mayor. Puede contraer las filas de tipo de cuenta Inicio-Total. Si guarda como marcador la página Descripción general del plan de cuentas, dispondrá de acceso directo desde su área de trabajo.</p>
	<h4>Videotutorial Plan de cuenta</h4>
	<iframe class="ifra" src="https://www.youtube.com/embed/mcwUa3KVPIc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	`;

	cuerpo.innerHTML= contenido;

}
/*=================
Grupos Contables
===================*/
let configGrupoContables = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `

	<h2 class="Subtitulos">Configurar los grupos Contables</h2>
	<p class="parrafo">
	El objetivo principal de los grupos contables es identificar las cuentas de balance de ingresos para la contabilidad de cada filial o contabilidad complementaria. Los grupos contables se utilizan para vincular la contabilidad general a la contabilidad de las filiales o complementarias siguientes:
	</p>
	<div class="contentList">
	<ul>
	<li>transacciones de productos, transacciones de recurso, o ambas, y documentos de compras y ventas</li>
	<li>Diarios de productos y diarios de proyectos</li>
	<li>Centros de máquina, centros de trabajo y cargos de producto</li>
	</ul>
	</div>
	<p class="parrafo">Los grupos contables asignan entidades a cuentas de contabilidad. Algunos ejemplos de entidades son clientes, proveedores, artículos, recursos y documentos de compra y venta. Los grupos contables ahorran tiempo y ayudan a evitar errores al registrar las transacciones. Los valores de transacción se envían a las cuentas especificadas en el grupo contable de dicha entidad. El único requisito es que tenga un plan de cuentas. Para obtener más información, vea <a href="https://learn.microsoft.com/es-es/dynamics365/business-central/finance-setup-chart-accounts"></a> Configuración del plan de cuentas.</p>
	<p class="parrafo"> Los grupos contables tienen tres divisiones:</p>
	<div class="contentList">
	<ul>
	<li><b>General</b><br>
	Defina a quién vende y de quién compra, y lo que vende y compra. También puede combinar grupos para especificar aspectos como las cuentas de regularización para registrar, o usar grupos para filtrar informes.
	</li>
	<li><b>Específico</b><br> Use documentos de ventas, por ejemplo, en lugar de registrar movimientos directamente en contabilidad. Al crear movimientos de clientes, en contabilidad se crean los movimientos correspondientes.<br>  
	</li>
	<li><b>Tributos</b><br>
	Defina los porcentajes de impuestos y los tipos de cálculo que se aplican a quién se vende y de quién se compra, y a lo que vende y compra.
	</li>
	</ul>
	</div>
	<h3>Generales</h3>
	<p class="parrafo">La tabla siguiente describe los grupos contables generales.</p>
	<table class="tabla1">
	<tr>
	<th>Contables Generales</th>
	<th>Descripción</th>
	</tr>
	<tr>
	<td>Grupos contables negocio</td>
	<td> negocio  Asigne este grupo a proveedores y clientes para especificar a quién vende y de quién compra. Configure estos grupos contables en la página Grupos registro negocio gen.. Al hacerlo, piense en cuántos grupos necesita para desglosar las ventas y las compras. Por ejemplo, agrupe clientes y proveedores por área geográfica, o el tipo de negocio.</td>
	</tr>
	<tr>
	<td>Grupos contables de producto</td>
	<td>Asigne este grupo a productos y recursos para especificar lo que vende y lo que compra. Configure estos grupos contables en la página Grupos registro producto gen.. Al hacerlo, considere el número de grupos que necesitará para desglosar las ventas por producto (productos y recursos) y las compras por producto. Por ejemplo, divida estos grupos por materias primas, mercaderías, recursos, capacidad, etc.</td>
	</tr>
	<tr>
	<td>Configuraciones grupos contables</td>
	<td>Combine grupos contables de negocio y de producto, y seleccione las cuentas en las que se registrarán. Para cada combinación de grupos contables de negocios y productos, puede asignar un conjunto de cuentas de contabilidad. Por ejemplo, puede registrar la venta del mismo producto en diferentes cuentas de contabilidad porque varios clientes se asignan a diferentes grupos contables de negocio. Establezca estas configuraciones en la página Configuración grupos contables.</td>
	</tr>
	</table>
	<h3>Específicos</h3>
	<p class="parrafo">El objetivo principal de los grupos contables específicos es identificar las cuentas de balance de situación para la contabilidad de cada filial o contabilidad complementaria.</p>
	<p class="parrafo">Por ejemplo, el saldo pendiente total de todos los clientes se debe corresponder con el saldo total de las cuentas de clientes en el balance de situación.</p>
	<p class="parrafo">Normalmente, estas cuentas de balance de situación están configuradas para que no se permita el registro directo. Los únicos registros permitidos se realizan mediante la contabilidad complementaria, con lo que se evitan las diferencias entre el saldo total en la contabilidad complementaria y la general.</p>
	<p class="parrafo">En la tabla siguiente se proporcionan descripciones de grupos contables específicos y dónde se asignan.</p>
	<table class="tabla1">
	<tr>
	<th>Grupo contable específico</th>
	<th>Descripción</th>
	</tr>
	<tr>
	<td>Grupo contable de cliente</td>
	<td>Asigna la cuenta de clientes, las cuentas de descuento por pronto, las cuentas de redondeo de facturación y aplicación y las cuentas de intereses y honorarios relacionadas con los clientes.</td>
	</tr>
	<tr>
	<td>Grupo contable de proveedor</td>
	<td>Asigna la cuenta de proveedores, las cuentas de descuento por pronto, las cuentas de redondeo de facturación y aplicación y las cuentas de intereses y honorarios relacionadas con los proveedores.</td>
	</tr>
	<tr>
	<td>Grupo contable de inventario/configuración de registro de inventario</td>
	<td>Los grupos de registro de inventario especifican el tipo de inventario y después se combinan con códigos de almacén en la página Config. registro inventario. Cada combinación se asigna a las cuentas de inventario, la WIP cuenta y otras cuentas de desviación relacionadas con el inventario en el plan de cuentas. Estas combinaciones también proporcionan una buena forma de organizar su inventario para que pueda separar los artículos del grupo contable cuando se generan informes.</td>
	</tr>
	<tr>
	<td>Grupo contable de cuenta bancaria</td>
	<td>Asigna una cuenta bancaria a una cuenta C/G de un banco.</td>
	</tr>
	<tr>
	<td>Grupo contable de activos fijos</td>
	<td>Define cuentas para distintos tipos de gastos y costes, como costes de adquisición, importes de amortización acumulada, costes de venta/baja, amortización acumulada en venta/baja, ganancias en venta/baja, pérdidas en venta/baja, gastos de mantenimiento y gastos de depreciación.</td>
	</tr>
	<tr>
	<td>Grupos contables de proyecto</td>
	<td>Especifica las cuentas en las que se registran las transacciones relacionadas con proyectos.</td>
	</tr>
	</table>
	<p class="parrafo">Para configurar un grupo contable de cliente, siga estos pasos:</p>
	<ul>
	<li><b>1.</b> Seleccione el icono Buscar página en la esquina superior derecha de la página, introduzca <b>Grupos registro cliente</b> y seleccione el vínculo relacionado para abrir la página <b>Grupos registro de cliente</b>.</li>
	<li><b>2.</b> Seleccione <b>Mostrar todas las cuentas</b> para mostrar todas las cuentas disponibles.</li>
	<li><b>3.</b> Seleccione <b>Nuevo</b></li>
	<li><b>4.</b> En el campo <b>Código</b>, escriba un identificador único.</li>
	<li><b>5.</b> En cada campo pertinente de la cuenta, especifique las cuentas que se utilizan para registrar transacciones para: <br>
	<div class="contentList">
	<ul>
	<li>Cobros</li>
	<li>Cargos por servicios</li>
	<li>Descuentos por pronto pago</li>
	<li>Recargos</li>
	<li>Interés</li>
	<li>Redondeo de facturas</li>
	<li>Tolerancias de pago</li>
	</ul>
	</div>

	</li>
	<li><b>6.</b> Cierre la página de grupos contables de cliente. <br>
	<div class="img-content2"><img src="img/gcontable1.PNG" alt=""></div>
	</li>
	</ul>

	<p class="parrafo">Para asignar un grupo contable de cliente, siga estos pasos:</p>
	<ul>
	<li><b>1.</b> Seleccione el icono de Buscar página en la esquina superior derecha de la página, escriba <b>Clientes</b> y luego elija el vínculo relacionado.</li>
	<li><b>2.</b> Localice al cliente y abra la ficha del cliente.</li>
	<li><b>3.</b> Expanda la ficha desplegable <b>Facturación</b>.</li>
	<li><b>4.</b> En la ficha desplegable <b>Facturación</b>, en el campo <b>Grupo contable de cliente</b>, especifique el grupo contable apropiado.</li>
	</ul>
	<p class="parrafo">Cuando se registran transacciones relacionadas con el cliente como pedidos, facturas, abonos y pagos, Business Central utiliza el grupo contable de cliente para localizar y registrar las cuentas especificadas.</p>
	<p class="parrafo">El proceso de configuración de grupos contables de proveedor es similar a la configuración de grupos contables de cliente.</p>

	<h3>Tributos o IVA</h3>
	<p class="parrafo">La tabla siguiente describe los grupos contables relacionados con los impuestos.</p>
	<table class="tabla1">
	<tr>
	<th>Grupo contable IVA</th>
	<th>Descripción</th>
	</tr>
	<tr>
	<td>Grupos contables negocio impuesto</td>
	<td>Determine cómo calcular y registrar el impuesto de venta para clientes y proveedores. Configure estos grupos contables en la página Grupos contables negocio impuesto. Al hacerlo, piense en cuántos grupos necesita. Por ejemplo, puede depender de factores como la legislación local y si la actividad económica de la empresa es tanto nacional como internacional.</td>
	</tr>
	<tr>
	<td>Grupos contables productos impuesto</td>
	<td>Indique los cálculos de impuesto necesarios para los tipos de productos o recursos que compre o venda.</td>
	</tr>
	<tr>
	<td>Configuración de registro impuesto</td>
	<td>Combine grupos registro IVA negocio y grupos registro IVA producto. Cuando rellene una línea de diario general, línea de compra o línea de venta, examinaremos la combinación para identificar las cuentas que se deben usar.</td>
	</tr>
	</table>
	<p class="parrafo">Existe también los  grupos contables de Inventario.</p>
	<h3>Configurar y asignar grupos contables de inventario</h3>
	<p class="parrafo">Los grupos contables de inventario se usan para agrupar productos y asignarlos a cuentas de inventarios, WIP Cuentas y otras cuentas relacionadas con el inventario. Los informes, como la <b>Valoración de inventario</b>, y los trabajos por lotes, como Registrar valoración de existencias en contabilidad, utilizan los grupos contables de inventario para mostrar los resultados.</p>
	<p class="parrafo">La configuración de los grupos contables de inventario es ligeramente diferente a la de los grupos contables de clientes y proveedores, ya que emplea dos páginas:</p>
	<div class="contentList">
	<ul>
	<li>Grupos contables de inventario</li>
	<li>Configuración del registro de inventario</li>
	</ul>
	</div>
	<p class="parrafo">En la página <b>Grupos contables de inventario</b> , se especifican los grupos de productos de inventario. Con esta configuración, los usuarios pueden vincular las cuentas a grupos de productos, y no a productos específicos.</p>
	<p class="parrafo">La página <b>Configuración del registro de inventario</b> contiene los vínculos entre el grupo contable de inventario, las ubicaciones de inventario y las cuentas.</p>
	<div class="img-content2"><img src="img/gcontable2.PNG" alt=""></div>
	<p class="parrafo">Cuando se asigna la configuración del registro de inventario a un producto, Business Central hace un registro en la cuenta especificada para la combinación de grupo contable de inventario y código de almacén que se haya especificado en el movimiento de línea de producto de la transacción.</p>
	<p class="parrafo">Para configurar los grupos contables de inventario, siga estos pasos:</p>
	<ul>
	<li><b>1.</b> Seleccione el icono de Buscar página en la esquina superior derecha, escriba <b>grupos registro de inventario</b> y seleccione el vínculo relacionado para abrir la página <b>Grupos registro de inventario</b>.</li>
	<li><b>2.</b> Seleccione <b>Nuevo</b>.</li>
	<li><b>3.</b> En el campo <b>Código</b>, escriba un identificador único y descriptivo.</li>
	<li><b>4.</b> En el campo <b>Descripción</b>, escriba una breve descripción del grupo contable de inventario.</li>
	<li><b>5.</b> Cierre la página <b>Grupos registro de inventario</b>.</li>
	</ul>
	<p class="parrafo">A continuación, combine los grupos contables de inventario con todos los almacenes configurados en Business Central:</p>
	<ul>
	<li><b>1.</b> Seleccione el icono de Buscar página en la esquina superior derecha, escriba <b>configuración del registro de inventario</b> y seleccione el vínculo relacionado para abrir la página <b>Configuración del registro de inventario</b>.</li>
	<li><b>2.</b> Introduzca una nueva linea</li>
	<li><b>3.</b> En el campo <b>Código de almacén</b>, especifique el almacén correspondiente a combinar con el grupo contable de inventario.</li>
	<li><b>4.</b> En el campo <b>Código de grupo contable de inventario</b>, especifique el grupo contable de inventario correspondiente.</li>
	<li><b>5.</b> En cada campo pertinente de la cuenta, especifique las cuentas que se utilizarán para registrar transacciones en las siguientes cuentas: <br>
	<div class="contentList">
	<ul>
	<li>Cuenta de Inventario</li>
	<li>WIP</li>
	<li>Cuenta de fabricación</li>
	</ul>
	</div>

	</li>
	<li><b>6.</b> Cierre la página Configuración del registro de inventario. <br>
	<div class="img-content2"><img src="img/gcontable3.PNG" alt=""></div>
	</li>
	</ul>
	<p class="parrafo">Para asignar los grupos contables de inventario, siga estos pasos:</p>
	<ul>
	<li><b>1.</b> Seleccione el icono de Buscar página en la esquina superior derecha, escriba <b>productos</b> y seleccione el vínculo relacionado para abrir la página Ficha de producto.</li>
	<li><b>2.</b> Busque el producto y abra su ficha.</li>
	<li><b>3.</b> Expanda la ficha desplegable <b>Costes y registro</b>.</li>
	<li><b>4.</b> En el campo Grupo contable de cliente de la ficha desplegable <b>Costes y registro</b>, introduzca el grupo contable correspondiente.</li>
	<li><b>5.</b> Cierre la página <b>Ficha de producto</b>. <br>

	<div class="img-content2"><img src="img/gcontable4.PNG" alt=""></div>
	</li>
	</ul>
	<h3>Videotutorial de uso de varios grupos contables para el cliente o proveedor</h3>
	<iframe  class="ifra" src="https://www.youtube.com/embed/PPl0QrEyfJM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br>
	<h3> vídeo en el que se demuestra cómo crear grupos contables en Business Central.</h3>
	<iframe  class="ifra" src="https://www.microsoft.com/es-es/videoplayer/embed/RE3wgV4?postJsllMsg=true&autoCaptions=es-es" frameborder="0"></iframe>
	<br>
	<h3>Grupos Contables en Dynamics NAV</h3>
	<iframe class="ifra" src="https://www.youtube.com/embed/jdXCK31yNF4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
	</hr>
	<h3>Dynamics NAV Creación Grupos Contables</h3>
	<iframe class="ifra" src="https://www.youtube.com/embed/7J-BIVckUck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
	`;

	cuerpo.innerHTML= contenido;

}
/*=====================
Esquemas de Cuentas
=====================*/
let configEsqueCentas = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h1 >Configuración de los Esquemas de Cuentas</h1>
	<p class="parrafo"> Los esquemas de cuentas analizan cifras en cuentas de contabilidad y comparan los movimientos de contabilidad con los presupuestados. Los resultados se muestran en gráficos en la página principal, como el gráfico Flujo de efectivo.</p>
	<p class="parrafo">Puede utilizar esquemas de cuentas para crear informes financieros de una forma flexible y sin tener que desarrollarlos.</p>
	<p class="parrafo">Puede usar esquemas de cuentas para organizar cuentas que aparezcan en el plan de cuentas, el plan de tipos de coste y el plan de cuentas de flujo de efectivo de formas que ofrezcan información sobre esas cuentas. Los usuarios pueden configurar diferentes diseños para definir la información que quieran extraer de cualquiera de estos planes.</p>
	<p class="parrafo">Uno de los objetivos principales de los esquemas de cuentas es ofrecer un lugar para realizar cálculos que no se pueden realizar directamente en el plan de cuentas. Por ejemplo, los usuarios pueden crear esquemas de cuentas para calcular márgenes de beneficios en dimensiones como departamentos o grupos de clientes. Además, los usuarios pueden filtrar movimientos y movimientos de presupuesto, como por ejemplo por saldo periodo o importe del debe.</p>
	<p class="parrafo">Al utilizar tipos de coste y cuentas de movimientos de flujo de efectivo en los esquemas de cuentas, puede crear informes de contabilidad de costes y de flujo de efectivo.</p>
	<p class="parrafo">Con los esquemas de cuentas puede realizar las siguientes tareas:</p>
	<div class="contentList">
	<ul>
	<li>Crear informes financieros personalizados sin usar el Diseñador de informes.</li>
	<li>Crear tantos esquemas de cuentas como sea necesario, cada uno de ellos con un nombre exclusivo.</li>
	<li>Configurar diversos diseños de informes e imprimir los informes con las cifras actuales.</li>
	<li>Exportar datos financieros a Microsoft Excel.</li>
	</ul>
	</div>
	<p class="parrafo">Una programación de cuenta consta de los siguientes componentes:</p>
	<div class="contentList">
	<ul>
	<li>Un nombre de un esquema de cuentas</li>
	<li>Varias líneas</li>
	<li>Un diseño de columnas</li>
	</ul>
	</div>

	<p class="parrafo">Al crear un esquema de cuentas, el primer paso es configurar un nombre para el esquema de cuentas.</p>
	<p class="parrafo">Para crear una Programación de cuenta, siga estos pasos:</p>
	<ul>
	<li><b>1.</b> Seleccione el icono <b>Buscar página</b> en la esquina superior derecha de la página, introduzca esquemas de cuentas y, a continuación, seleccione el vínculo relacionado.</li>
	<li><b>2.</b> Selecione <b>Nueva</b>. <br>
	<div class="img-content2"><img src="img/esquemas1.png" alt=""></div>
	</li>
	<li><b>3.</b> Rellene los campos necesarios. En el ejemplo hemos creado un nuevo esquema de cuenta llamado <b>BALANCE1</b>.<br>
	<div class="img-content2"><img src="img/esquemas2.png" alt=""></div>
	</li>
	</ul>
	<p class="parrafo">La página Programas de cuentas contiene los siguientes campos:</p>
	<div class="contentList">
	<ul>
	<li><b>Nombre:</b> especifica el nombre del esquema de cuentas.</li>
	<li><b>Descripción:</b>  Especifica una descripción del esquema de cuentas.</li>
	<li><b>Diseño de columnas predeterminado: </b> Especifica el nombre de diseño de columnas que quiera utilizar como predeterminado en este esquema de cuentas.</li>
	<li><b>Nombre de vista de análisis:</b> Especifica el nombre de la vista de análisis en la que quiera basar el esquema de cuentas. Si vincula una vista de análisis a un esquema de cuentas, puede usar las dimensiones asignadas a la vista de análisis en las líneas del esquema de cuentas. De lo contrario, solo puede usar las dos dimensiones globales en un esquema de cuentas.</li>
	</ul>
	</div>
	<p class="parrafo">También puede crear un nuevo esquema de cuentas seleccionando <b>Proceso > Copiar esquema de cuentas</b>, rellenando los dos campos y seleccionando el botón Aceptar.</p>
	<p class="parrafo">Vea este vídeo para observar una demostración de cómo configurar un esquema de cuentas.</p>
	<iframe src="https://www.microsoft.com/es-es/videoplayer/embed/RE3AAQI?postJsllMsg=true&autoCaptions=es-es" class="ifra"></iframe>
	<br>
	<h3>Exportar sus esquemas de cuentas a Excel</h3>
	<p class="parrafo">Puede exportar esquemas de cuentas a Excel. La exportación a Excel le permite controlar sus datos utilizando las funciones y características de Excel, además de compartir datos con otras personas que no trabajan con Business Central.</p>
	<p class="parrafo">Para exportar un esquema de cuentas a Excel, siga estos pasos:</p>
	<ul>
	<li><b>1.</b> Seleccione el icono <b>Buscar página</b> en la esquina superior derecha de la página, introduzca <b>esquemas de cuentas</b> y, a continuación, seleccione el vínculo relacionado.</li>
	<li><b>2.</b> Seleccione el esquema de cuentas que desea exportar y seleccione <b>Proceso > Descripción general</b>.</li>
	<li><b>3.</b> En la página Panorama esq. cta., seleccione <b>Acciones > Excel > Exportar a Excel</b>.</li>
	<li><b>4.</b> Si desea crear una nueva hoja de cálculo de Excel, seleccione <b>Crear documento nuevo</b>. Si desea actualizar un libro de Excel existente, seleccione <b>Actualizar documento existente</b> y busque el archivo de Excel que desea actualizar.</li>
	</ul>
	<p class="parrafo">Business Central abre Excel y exporta los datos y la información del filtro desde el esquema de cuentas seleccionado. El nombre de la hoja de cálculo es el mismo que el nombre del esquema de cuentas.</p>
	<p class="parrafo">Videotutorial Esquema de cuentas</p>
	<iframe class="ifra" src="https://www.youtube.com/embed/69MxHBs_GWI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

	`;

	cuerpo.innerHTML= contenido;

}
/*=====================
Presupuestos contables
=======================*/
let presupuestos = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Presupuestos Contables</h2>
	<p class="parrafo">
	El presupuesto contable es un documento que refleja una previsión o predicción de cómo serán los resultados y los flujos de dinero que se obtendrán en un periodo futuro. 
	Este es un cálculo aproximado de los ingresos y gastos que se obtendrán tras la realización de la actividad.
	</p>
	<p class="parrafo">Un presupuesto contable Sirve para tener el control de tus gastos, identificar los innecesarios, conocer tus posibilidades de ahorro para lograr tus 
	objetivos y saber tu capacidad de pago para evitar contraer deudas que no puedes pagar. </p>
	<p class="parrafo">Mediante la ventana Presupuestos puede crear presupuestos en el área de la aplicación Contabilidad. Puede crear tantos presupuestos como desee. 
	Puede crear presupuestos contables sencillos para periodos específicos. También puede utilizar las dimensiones de la empresa al introducir el presupuesto para crear 
	presupuestos detallados. Con las dimensiones, es posible crear presupuestos de ventas detallados por cliente o proceso de cada cuenta de ventas en contabilidad. 
	Si desea limitar un presupuesto para que sólo se utilice con determinadas dimensiones o empresas, puede establecer un filtro en la pestaña Filtrosde la ventana Presupuesto. 
	A continuación, puede introducir los valores del presupuesto. 
	</p>
	<p class="parrafo">También puede exportar e importar presupuestos de Microsoft Excel. Puede importar varios archivos Excel en el mismo presupuesto. 
	La funcionalidad de exportación le permite distribuir la información de presupuestos a terceros que no tienen acceso al sistema. De igual modo, la funcionalidad de 
	importación le permite consolidar la información de presupuestos de terceros que no tienen acceso al sistema</p>
	<h3>Crear presupuestos contables</h3>
	<p class="parrafo">Puede tener varios presupuestos para idénticos periodos de tiempo si crea presupuestos con nombres distintos. En primer lugar, debe configurar el nombre 
	del presupuesto e introducir las cifras del presupuesto. El nombre del presupuesto se incluye en todos los movimientos de presupuesto que cree.</p>
	<p class="parrafo">Al crear un presupuesto, puede definir cuatro dimensiones específicas del presupuesto, llamadas dimensiones presupuestarias, para cada presupuesto. 
	Seleccione las dimensiones de presupuesto para cada uno de los presupuestos a partir de las dimensiones que ya ha configurado. Es posible utilizar las dimensiones de 
	presupuesto para filtrar en un presupuesto y para agregar información de dimensiones a movimientos de presupuesto</p>
	<p class="parrafo">Los presupuestos juegan un papel importante en la inteligencia empresarial. Ejemplos son los extractos financieros en función de los informes financieros
	que incluyen movimientos de presupuesto o al analizar los importes presupuestados frente a los reales en el plan de cuentas</p>
	<p class="parrafo">Con la función de presupuesto en Business Central, puede:</p>
	<div class="contentList">
	<ul>
	<li>Crear varios presupuestos para periodos de tiempo idénticos.</li>
	<li>Crear presupuestos simples o complejos seleccionando una combinación de cuenta, periodo, dos dimensiones globales y cuatro dimensiones de presupuesto.</li>
	<li>Copiar presupuestos de periodos anteriores y revisar las cifras reales o de presupuesto usando un factor de ajuste.</li>
	<li>Exportar e importar presupuestos desde Excel.</li>    
	</ul>
	</div>
	<h3>Para crear un nuevo presupuesto contable</h3>
	<ul>
	<li><b>1.</b> Elija el icono busqueda que abre la característica Dígame. , escriba <b>Presupuestos contables</b> y luego elija el enlace relacionado.</li>
	<li><b>2.</b> Elija la acción <b>Editar lista</b> y, a continuación, rellene los campos según sea necesario. Pase el cursor sobre un campo para leer una breve descripción.</li>
	<li><b>3.</b> Seleccione la acción <b>Editar presupuesto</b>.</li>
	<li><b>4.</b> En la parte superior de la página <b>Presupuesto</b> rellene los campos según sea necesario para definir lo que se muestra. <br>Solo se mostrarán los 
	movimientos que contengan el nombre del presupuesto que ha introducido en el campo <b>Nombre presupuesto</b> . Dado que acaba de crear el nombre del presupuesto, 
	no hay movimientos que coincidan con el filtro. Por tanto, la página está vacía. <br>
	<div class="img-content2"><img src="img/presupuestos.PNG" alt=""></div>
	</li>
	<li><b>5.</b> Para escribir una cantidad, seleccione la celda correspondiente de la matriz. Se abre la página <b>Movs. pptos. contabilidad</b>.</li>
	<li><b>6.</b> Cree una nueva línea y rellene el campo <b>Importe</b>. Cierre la página <b>Movs. pptos. contabilidad</b>. <br>
	<div class="img-content2"><img src="img/presupuestos1.PNG" alt=""></div>
	</li>
	<li><b>7.</b> Repita los pasos de 5 y 6 hasta que escriba todos los importes del presupuesto.</li>
	</ul>
	<p class="parrafo">Puede usar las dimensiones de presupuesto para establecer filtros en un presupuesto y agregar información de la dimensión a los movimientos del mismo.
	Las dimensiones de presupuesto le permiten usar dimensiones en presupuestos de la misma forma que las usaría publicando ventas y adquisiciones.</p>
	<p class="parrafo">Por ejemplo, puede comparar las ventas reales por región con las ventas presupuestadas por región.</p>
	<h3>Crear Presupuestos Contables video tutorial</h3>
	<iframe class="ifra" src="https://www.youtube.com/embed/TEECGoTOeYg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
	encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
	<br>
	<br>
	<h3>Copiar presupuestos</h3>
	<p class="parrafo">Puede tardar mucho tiempo al introducir presupuestos manualmente. Para evitar escribir manualmente un nuevo presupuesto, puede usar la función Copiar 
	presupuesto para copiar de movimientos de presupuestos de contabilidad existentes o de movimientos de contabilidad.</p>
	<p class="parrafo">Dado que puede usar opciones como fórmula de cambio de fecha y factores de ajuste, la función Copiar presupuesto le permitirán ahorrar tiempo al crear 
	presupuestos para períodos distintos.</p>
	<p class="parrafo">Para acceder a la función Copiar presupuesto, siga estos pasos:</p>
	<ul>
	<li><b>1.</b> Seleccione el icono Buscar página en la esquina superior derecha de la página, introduzca <b>Presupuestos contables</b> y, a continuación, seleccione el vínculo 
	relacionado.</li>
	<li><b>2.</b> Seleccione un nombre de presupuesto para abrir la página <b>Presupuesto</b>.</li>
	<li><b>3.</b> Seleccione <b>Presupuesto > Copiar presupuesto</b>. <br>
	<div class="img-content2"><img src="img/presupuestos2.PNG" alt=""></div> <br>
	<p class="parrafo">Puede usar el área <b>Copiar desde</b> para determinar de dónde proceden los movimientos de presupuesto copiados. Los campos de esta área se especifican en 
	función de la selección en el campo <b>Origen</b>.</p>
	<div class="contentList">
	<ul>
	<li><b>Movimiento de contabilidad:</b> el presupuesto se basa en movimientos de contabilidad reales para un período específico. Cuando se selecciona <b>movimiento de 
	contabilidad</b>, debe especificar:
	<div class="contentList">
	<ul>
	<li>Un intervalo de cuentas y un intervalo de fechas en los campos <b>N.º cuenta y Fecha</b> para determinar la información que se copiará.</li>
	<li>Ya sea para incluir o excluir movimientos de cierre en el campo <b>Movimientos de cierre</b>.</li>
	</ul>
	</div>
	</li>
	<li><b>Movimiento de presupuesto de contabilidad:</b> el presupuesto se basa en movimientos de presupuesto de contabilidad de un presupuesto existente. 
	Al seleccionar  <b>Movimiento presupuesto de contabilidad</b>, debe especificar:
	<div class="contentList">
	<ul>
	<li>Un nombre de presupuesto existente para copiar en el campo <b>Nombre del presupuesto</b> .</li>
	<li>Intervalo de cuentas y un intervalo de fechas en los campos <b>N.º cuenta y Fecha</b>  para filtrar la información que se copia.</li>
	</ul>
	</div>
	</li>
	</ul>
	</div>
	<p class="parrafo"> En Ambas opciones <b>Origen,</b> selecione el campo Dimensiones</p>
	<div class="contentList">
	<ul>
	<li>Seleccione la casilla Seleccionado en cada dimensión que se copie a los movimientos del nuevo presupuesto.</li>
	<li>Para configurar filtros adicionales para el proceso de copia, defina Filtros de valor de dimensión.</li>
	<li>En el campo Nuevo cód. valor dim. determine el nuevo valor de dimensión al que se copiará.</li>
	</ul>
	</div>
	</li>
	<li><b>4.</b> Use el área <b>Copiar</b> a para especificar dónde se enviará la información del presupuesto copiada. Los siguientes campos se incluyen en el área
	<b>Copiar a:</b>
	<div class="contentList">
	<ul>
	<li><b>Nombre del presupuesto:</b> introduzca el nombre del nuevo presupuesto o seleccione el campo para seleccionar un nombre de presupuesto existente.</li>
	<li><b>Nº Cuenta:</b> introduzca el número de cuenta si uno o varios movimientos se deben copiar en una cuenta.</li>
	</ul>
	</div>
	</li>
	<li><b>5.</b> El área Aplicar incluye varias opciones del cálculo que puede usar al copiar presupuestos:
	<div class="contentList">
	<ul>
	<li><b>Factor de ajuste:</b>  introduzca un factor de ajuste por el que se multipliquen los movimientos de origen durante el proceso de copia. Por ejemplo, un ajuste de 1,1 aumenta los importes en un 10 por ciento y un ajuste de 0,89 reduce los importes en un 11 por ciento.</li>
	<li><b>Método de redondeo</b> especifique cómo se redondean los movimientos del nuevo presupuesto.

	</li>
	<li><b>Fórmula de cambio de fecha:</b> introduzca una fórmula que calcule la fecha de los nuevos movimientos en función de los movimientos que se copian. Por ejemplo, escriba 1M para el próximo mes.

	</li>
	<li><b>Compresión por fechas:</b> comprima los movimientos que se copian para un período seleccionado para reducir el número de nuevos movimientos que se crean.</li>    
	</ul>
	</div>
	</li>
	</ul>
	<h3>Exportar e importar presupuestos contables con Excel</h3>
	<p class="parrafo">Prácticamente en todas las demás páginas, puede exportar datos en páginas de presupuesto a Microsoft Excel para su posterior procesamiento o análisis. </p>
	<p class="parrafo nota-solo">Nota <br>
	El plan de cuentas, en el que se basan los presupuestos contables (G/L), tiene líneas de tipo de cuenta Mayor que contienen el total de las líneas siguientes. 
	Cuando se exporta un presupuesto contable, se exportan los datos de todas las líneas independientemente del tipo de cuenta. Sin embargo, solo se pueden volver a importar 
	los datos de las líneas del tipo Registro.
	</p>
	<p class="parrafo">En consecuencia, al importar un presupuesto contable, todos los valores que existían en las líneas de cabecera se eliminan. Esto sirve para evitar 
	cantidades totales erróneas después de importar datos que se han creado o editado en Excel.</p>
	<p class="parrafo">Business Central le ofrece la opción de crear presupuestos utilizando las funciones de exportación e importación.</p>
	<p class="parrafo">Puede exportar presupuestos a Excel mediante el proceso Exportar ppto. a Excel. Cuando se exportan los presupuestos, se pueden realizar las siguientes
	tareas:</p>
	<div class="contentList">
	<ul>
	<li>Utilizar Excel para modificar y agregar al presupuesto.</li>
	<li>Crear nuevos presupuestos basados en las cifras del presupuesto exportado.</li>
	</ul>
	</div>
	<div class="img-content2"><img src="img/presupuestos3.png" alt=""></div>
	<p class="parrafo">Puede importar presupuestos de Excel mediante el trabajo por lotes Importar ppto. de Excel. Al importar presupuestos de Excel, existen las siguientes
	posibilidades:</p>
	<div class="contentList">
	<ul>
	<li>Importar los presupuestos exportados anteriormente de Business Central en un presupuesto existente o nuevo.</li>
	<li>Cree nuevos movimientos de presupuesto reemplazando los existentes.</li>
	<li>Agregar movimientos de presupuesto a un presupuesto existente.</li>
	</ul>
	</div>
	<p class="parrafo">Antes de importar un presupuesto en Excel, le recomendamos que exporte un presupuesto de Business Central para obtener el formato correcto.</p>
	<div class="img-content2"><img src="img/presupuestos4.PNG" alt=""></div>
	<p class="parrafo">El plan de cuentas, en el que se basan los presupuestos de CG, tiene líneas de tipo de cuenta Cabecera que incluyen el total de las líneas inferiores.
	Al exportar un presupuesto de CG, los datos de todas las líneas se exportan independientemente del tipo de cuenta.</p>
	<p class="parrafo">Sin embargo, se pueden volver a importar los datos del tipo de cuenta <b>Cabecera</b>. Al seleccionar la opción <b>Agregar movimientos</b> en el trabajo 
	por lotes Importar ppto. de Excel, se omitirá cualquier valor en las líneas <b>Cabecera</b>. Al seleccionar la opción <b>Reemplazar movimientos</b>, se eliminará cualquier 
	valor que ya exista en las líneas <b>Cabecera</b>.</p>
	`;

	cuerpo.innerHTML= contenido;

}
/*===================
Dimensiones
===================*/
let dimensiones = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Dimensiones</h2>  
	<p class="parrafo">La funcionalidad de dimensiones le ayuda a responder a preguntas  relacionadas con sus negocios. Utilizando dimensiones de movimientos
	registrados y de movimientos de presupuestos puede supervisar el comportamiento de unidades individuales (por ejemplo, un departamento 
	responsable o una zona) y comparar su rendimiento con otras unidades (como cifras presupuestadas o de periodos anteriores).</p>
	<p class="parrafo">Puede asegurarse de la coherencia de los datos si configura reglas para  las dimensiones. Determine la forma de combinación de las dimensiones 
	para garantizar que reflejan las directivas de la empresa. También puede controlar la forma en la que funciona su negocio si define dimensiones 
	predeterminadas. Las dimensiones predeterminadas pueden configurarse para todas las cuentas, incluidas las cuentas contables y las cuentas de
	clientes y proveedores. Para cada valor predeterminado, puede definir  reglas de registro que determinan la forma en la que puede registrarse la 
	información de la dimensión. Esto garantiza una entrada de datos más rápida y con menos errores. 
	</p>
	<p class="parrafo">Puede cambiar las dimensiones existentes para reflejar sus procesos 
	empresariales: </p>
	<div class="contentList">
	<ul>
	<li>puede nombrarlos de forma que reflejen las costumbres de creación de 
	informes de la empresa y los requisitos de los empleados. </li>
	<li>cuando ya no necesite una dimensión determinada, simplemente 
	puede bloquear su uso.</li>
	<li>puede estructurar valores en una jerarquía que refleje las estructuras 
	de creación de informes existentes. </li>
	<li>puede cambiar las dimensiones (o agregar nuevas) con la frecuencia 
	que desee, sin cambiar la estructura contable. </li>    
	</ul>
	</div>
	<p class="parrafo">Tradicionalmente, el análisis de la información financiera en la contabilidad era posible creando un plan de cuentas detallado con muchas cuentas. 
	Con las capacidades analíticas de las dimensiones, puede reducir la necesidad de crear muchas cuentas detalladas en el plan de cuentas</p>
	<p class="parrafo">Las dimensiones pueden ser una herramienta útil para una empresa que quiera obtener información adicional sobre sus datos financieros. Por ejemplo, las dimensiones se pueden utilizar para simplificar los análisis de los costes e ingresos registrados.</p>
	<p class="parrafo">Una dimensión es el tipo de información que quiere agregar a su movimiento. Por ejemplo, el controlador de costes quiere analizar los gastos de cada departamento. En lugar de configurar cuentas de contabilidad general diferentes para cada departamento, se puede configurar una dimensión que se llame Departamento.</p>
	<p class="parrafo">El valor de la dimensión es uno de los posibles valores de una dimensión que puede agregar a su movimiento. Por ejemplo, el controlador de costes puede configurar un valor de dimensión para cada departamento y que se llamen Ventas, Administración, etc. Cada dimensión puede tener una serie ilimitada de valores de dimensión que serían unidades secundarias de dicha dimensión.</p>
	<p class="parrafo">El usuario define las dimensiones y los valores de dimensión y son ilimitados, lo que quiere decir que las dimensiones son personalizadas para cada empresa. Cuantas más dimensiones use, más detallados serán los informes sobre los que tomará decisiones para su negocio. Por ejemplo, un solo movimiento de ventas puede incluir varias informaciones de dimensión, como:</p>
	<div class="contentList">
	<ul>
	<li>La cuenta en la que se ha registrado la venta del producto</li>
	<li>Dónde (región) se ha vendido el producto</li>
	<li>Quién vendió el producto</li>
	<li>El tipo de cliente que compró el producto</li>
	
	</ul>
	</div>
	<p class="parrafo">Para crear manualmente nuevas dimensiones, siga los siguientes pasos:</p>
	<ul>
	<li><b>1.</b> Seleccione el icono Buscar página en la esquina superior derecha de la página, introduzca <b>dimensiones</b> y, a continuación, seleccione el vínculo relacionado.</li>
	<li><b>2.</b> Seleccione <b>Nuevo</b>.</li>
	<li><b>3.</b> En el campo <b>Código</b>, especifique un identificador único para la dimensión.</li>
	<li><b>4.</b> En el campo <b>Nombre</b>, escriba el nombre completo de la dimensión.</li>
	</ul>
	<p class="parrafo">Además de los campos de Código y Nombre, la página de Dimensiones también incluye los siguientes campos:</p>
	<div class="contentList">
	<ul>
	<li><b>Título de código:</b> determina el nombre del campo de un acceso directo a una dimensión. Si una dimensión se configura para que tenga acceso directo, esa dimensión se mostrará como un campo cuando introduzca las dimensiones en un diario o documento.

	</li>
	<li><b>Título de filtro:</b>  determina el nombre del campo del filtro de la dimensión cuando una dimensión se usa como filtro.</li>
	<li><b>Descripción: </b> describe la dimensión para aclarar su propósito.</li>
	<li><b>Bloqueado:</b> bloquea el registro de diarios que incluyen dimensiones específicas.</li>
	</ul>
	</div>
	<div class="img-content2"><img src="img/dimensiones.PNG" alt=""></div>

	<p class="parrafo">Después de crear una dimensión nueva, puede configurar los valores de dimensión. Por ejemplo, si ha creado una dimensión de departamento, puede configurar valores como Ventas, Administración o Producción. Una dimensión puede tener tantos valores como desee.</p>
	<p class="parrafo">Para crear nuevos valores de dimensión, siga estos pasos:</p>
	<ul>
	<li><b>1.</b> Seleccione el icono Buscar página en la esquina superior derecha de la página, introduzca <b>dimensiones</b> y, a continuación, seleccione el vínculo relacionado.</li>
	<li><b>2.</b> Seleccione la línea con la dimensión para la que quiere configurar nuevos valores de dimensión.</li>
	<li><b>3.</b> En el menú de acciones, seleccione <b>Dimensión</b> y, después,<b>Valores de dimensión</b>.</li>
	<li><b>4.</b> Añada información a los siguientes campos: <br>
	<div class="contentList">
	<ul>
	<li><b>Código:</b>  proporciona un código único para el valor de la dimensión. </li>
	<li><b>Nombre:</b> proporciona el nombre completo del valor de la dimensión.</li>
	<li><b>Tipo de valor de dimensiones:</b>  determina cómo se utiliza un valor de dimensión cuando se registra. Al usar estos tipos, se puede configurar una relación jerárquica entre los valores de dimensiones. Business Central puede considerar algunos valores de dimensión secundarios con respecto a otros valores de dimensión. Las opciones de este campo son: <br>
	<div class="contentList">
	<ul>
	<li><b>Estándar:</b> registro estándar de valores de dimensión.</li>
	<li><b>Cabecera:</b>  la cabecera de un grupo de valores de dimensión.</li>
	<li><b>Total:</b> el total de una serie de balances de valores de dimensión que no surgen inmediatamente antes del valor de dimensión total.</li>
	<li><b>Inicio-Total:</b> un marcador para el principio de una serie de valores de dimensión que después se sumarán. Esta opción se usa de forma conjunta con el tipo de valor de dimensión <b>Fin-Total</b></li>
	<li><b>Fin-Total:</b>  el total de una serie de valores de dimensión. Esta opción se usa de forma conjunta con el tipo de valor de dimensión <b>Inicio-Total</b>.</li>
	</ul>
	</div>
	</li>
	<p class="parrafo">Los registros solo pueden hacerse en valores de dimensión con un tipo de valor Estándar o Inicio-Total.</p>
	<li><b>Sumatorio:</b> identifica el intervalo de un valor de dimensión o una lista de ellos que se usan para sumar los movimientos de los valores de dimensión mostrados en el campo para elaborar un saldo total. Las opciones de este campo son: <br>
	<div class="contentList">
	<ul>
	<li>En blanco: si el Tipo de valor de dimensión es Estándar, Cabecera o Inicio-Total.</li>
	<li>Rellenar manualmente: si el Tipo de valor de dimensión es Total (o Fin-Total).</li>
	<li>Rellenar automáticamente: cuando la función de Indent. valores de dimensión se ejecuta o si se selecciona Fin-Total.</li>
	</ul>
	</div>
	</li>
	<li><b>Bloqueado:</b> bloquea el registro de diarios que incluyen valores de dimensión específicos.</li>
	</ul>
	</div>
	</li>
	</ul>
	<div class="img-content2"><img src="img/dimensiones2.PNG" alt=""></div>
	<p class="parrafo">Para acceder a la función <b>Indent. valores dimensión</b>, seleccione <b>Acciones > Funciones > Indent. valores dimensión</b>.</p>
	<p class="parrafo">Los siguientes resultados se crean cuando usa la función <b>Indent. valores dimensión:</b></p>
	<div class="contentList">
	<ul>
	<li>Se marcan todos los valores de dimensión entre Inicio-Total y el Fin-Total correspondiente en un nivel.</li>
	<li>Se suman todos los valores de dimensión en el mismo rango y se actualiza el campo Sumatorio para cada Fin-Total.</li>    
	</ul>
	</div>
	<h3>Crear Dimensiones Videotutorial</h3>
	<iframe class="ifra" src="https://www.youtube.com/embed/K5PA0MFi15E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><br>
	<h3>Introducir dimensiones manualmente en un pedido de ventas Videotutorial</h3><br>
	<iframe class="ifra" src="https://www.microsoft.com/es-es/videoplayer/embed/RE3wGXQ?postJsllMsg=true&autoCaptions=es-es"></iframe>

	`;

	cuerpo.innerHTML= contenido;

}

/*===================
CREAR Periodo Contable
======================*/
let crearPeriodoContable = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Trabajar con períodos contables y años fiscales</h2>
	<p class="parrafo">Los períodos contables, también conocidos como períodos de informe, son períodos de tiempo para los cuales una empresa u organización informa el desempeño financiero al generar, por ejemplo, su estado de resultados o balance general. Por lo general, los períodos contables se refieren al año fiscal de la empresa, que puede contener varios períodos contables, como meses o trimestres.</p>
	<p class="parrafo">Para muchas empresas, el año fiscal no se alinea con el año calendario, por ejemplo, cuando el año fiscal finaliza el 30 de junio en lugar del 31 de diciembre. Para las empresas de nueva creación, el año fiscal podría incluso ser más largo que 12 meses.</p>
	<p class="parrafo">Business Central solo requiere períodos contables si desea cerrar un estado de resultados o ejecutar tareas de compresión de datos.</p>
	<p class="parrafo">Puede usar períodos contables en los informes, como cuando revisa las entradas registradas en la página Saldo/Presupuesto donde se especifica el intervalo de informes. Una de las opciones que puede especificar es informar por período contable. También puede crear un informe financiero que compare los resultados de diferentes períodos contables.</p>
	<h3>Creando un nuevo año fiscal</h3>
	<p class="parrafo">Puede crear períodos contables de forma masiva mediante el trabajo por lotes Crear año fiscal o manualmente.</p>
	<h3>Cómo crear periodos contables de forma masiva</h3>
	<p class="parrafo">Utilice el trabajo por lotes Crear año fiscal para dividir un año fiscal en períodos de igual longitud.</p>
	<div>
	<ul>
	<li><b>1.</b> Elija el Busque Página o lupa ícono, ingrese <b>Períodos contables</b> , luego elija el enlace relacionado.</li>
	<li><b>2.</b> Elija la acción <b>Proceso </b> y luego  <b>Crear nuevo ejercicio</b> .</li>
	<li><b>3.</b> En el campo <b>Fecha de inicio</b> , ingrese la fecha en la que comienza el año fiscal.</li>
	<li><b>4.</b> En el campo <b>Número de períodos</b> , ingrese el número de períodos contables en los que se dividirá el año fiscal. Puede haber hasta 365 períodos en un año.</li>
	<li><b>5.</b> En el campo <b>Duración</b>  del período , ingrese una duración para cada período. Los identificadores de duración incluyen 1M para un mes, 1T para un trimestre y 1Y para un año.</li>
	<li><b>6.</b> Elija <b>Aceptar</b> .</li>
	</ul> 
	</div>
	<div class="img-content">
	<img src="img/periodo1.PNG" alt="">
	</div>
	<h3>Cómo crear períodos contables manualmente</h3>
	<p class="parrafo">Si los períodos contables en su año fiscal tienen diferentes duraciones, como el calendario 4-4-5 que se usa en el comercio minorista, puede configurarlo manualmente.</p>
	<ul>
	<li><b>1. </b>Elija el Busque Página o Informe.ícono, ingrese<b>Períodos contables </b> , luego elija el enlace relacionado.</li>
	<li><b>2. </b>En el campo <b>Fecha de inicio</b>, ingrese la fecha en la que comienza el año fiscal. El campo <b>Nombre</b> mostrará el nombre del mes.</li>
	<li><b>3. </b>Elija la casilla de verificación <b> Nuevo año fiscal</b> para indicar que este es el primer período del año. Business Central usará este período para determinar qué períodos cerrar al final del año.</li>
	<li><b>4. </b> Repita los pasos 2 y 3 para cada período restante.</li>
	</ul>
	<h3>Cerrar un año fiscal</h3>
	<p class="parrafo">Cerrar el año fiscal es una de las tareas para cerrar los libros. Después de cerrar un año fiscal, las casillas de verificación Cerrado y Fecha de bloqueo se seleccionan para todos los períodos del año. No puede reabrir un año ni borrar las casillas de verificación.</p>
	<p class="parrafo"><b>Nota</b><br>Siempre debe tener al menos un año fiscal abierto. Al cerrar un año, asegúrese de que se haya creado un nuevo año. Además, tenga en cuenta que después de cerrar un año, no puede cambiar la fecha de inicio del año siguiente.</p>
	<ul>
	<li><b>1. </b> Elija el Busque Página o lupa ícono, ingrese <b>Períodos contables</b> y luego elija el enlace relacionado.</li>
	<li><b>2. </b>Elija la acción <b>Proceso </b> y luego <b>Fijar cierre</b>. </li>
	<li><b>3.</b> Le damos <b>Aceptar.</b></li>
	</ul>
	<h3>Contabilización de asientos en un ejercicio fiscal cerrado</h3>
	<p class="parrafo">Aunque un año fiscal esté cerrado, aún puede contabilizar entradas del libro mayor en él. Cuando lo hace, las entradas se marcan como contabilizadas en un año fiscal cerrado y se selecciona la casilla de verificación Entrada del año anterior . De forma predeterminada, la casilla de verificación no se muestra en la página, pero puede agregarla. Los siguientes pasos son cerrar las cuentas de la cuenta de resultados y trasladar los resultados del ejercicio a una cuenta del balance. Repita estos pasos cada vez que registre asientos en un año fiscal cerrado.</p>
	<p class="parrafo">Video Tutorial como Abrir un Periodo Contable</p>
	<iframe  class="ifra" src="https://www.youtube.com/embed/E1P-EFHtYtc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

	`;

	cuerpo.innerHTML= contenido;

}
/*==============================
	Cerrar Periodo Contable
=============================*/
let cerrarPeriodoContable = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Cierre de periodo contable</h2>
	<p class="parrafo">Al final de un año fiscal, hay una serie de tareas administrativas que debe realizar, como asegurarse de que todos los documentos y diarios estén registrados, asegurarse de que los datos de moneda estén actualizados, cerrar los libros y más. Las tareas reales dependerán de su empresa.</p>
	<p class="parrafo">La siguiente tabla proporciona una descripción general de las tareas que normalmente realiza para cerrar un año y un período.</p>
	<table class="tabla1">
	<tr>
	<th>Descripción</th>
	<th>Ver</th>
	</tr>
	<tr>
	<td>Defina su año fiscal y divídalo en períodos de tiempo para informar el desempeño financiero.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/finance-accounting-periods-and-fiscal-years"> Trabajar con períodos contables y años fiscales</a></td>
	</tr>
	<tr>
	<td>Especifique intervalos de fechas de publicación específicos del usuario y de todo el sistema. Dependiendo de las necesidades de su negocio, es posible que desee restringir los rangos de fechas de publicación de usuarios al comienzo del proceso de finalización del período o después de este.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/finance-how-specify-posting-periods">Especificar períodos contables</a></td>
	</tr>
	<tr>
	<td>Obtenga una descripción general de las actividades que se realizan comúnmente al final de un período, como publicar todos los documentos y diarios o ejecutar informes financieros.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/year-how-complete-period-end-processes">Períodos de cierre</a></td>
	</tr>
	<tr>
	<td>Actualice los tipos de cambio de divisas y ajuste los tipos de cambio de las entradas de cuentas bancarias, de clientes y de proveedores publicadas.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/finance-how-update-currencies">Actualizar tipos de cambio de moneda</a></td>
	</tr>
	<tr>
	<td>Asignar costos e ingresos entre cuentas y dimensiones.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/year-allocate-costs-income">Asignación de costos e ingresos</a></td>
	</tr>
	<tr>
	<td>Prepárese para informar los importes del impuesto sobre el valor añadido (IVA) recaudados por las ventas al servicio web de la autoridad fiscal.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/finance-how-report-vat">Informar el IVA a las autoridades fiscales</a></td>
	</tr>
	<tr>
	<td>Imprima informes para verificar los saldos del libro mayor, clientes, proveedores y cuentas bancarias antes de cerrar un período.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/year-prepare-preclose-reports">Preparación de informes previos al cierre</a></td>
	</tr>
	<tr>
	<td>Cierre los períodos contables y el año fiscal, transfiera los saldos del estado de resultados a las cuentas del balance y registre el asiento de cierre de fin de año.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/year-close-books">Libros de cierre</a></td>
	</tr>
	<tr>
	<td>Imprima informes que pueden ayudarlo a crear estados financieros.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/year-prepare-close-statement"> Preparación de declaraciones de cierre</a></td>
	</tr>
	</table><br>
	<h3>Cerrar los libros</h3>
	<p class="parrafo">Después de asegurarse de que todas sus cuentas estén actualizadas y de asignar costos e ingresos, puede cerrar los libros para un período o año fiscal.</p>
	<p class="parrafo">No está obligado a cerrar un año, pero hacerlo le facilitará el trabajo en el sistema porque podrá aprovechar las convenientes opciones de filtrado proporcionadas. Tampoco tiene que preocuparse por perder los detalles de las transacciones cuando cierra porque todos los detalles se conservan, incluso después de cerrar el año.</p>
	<h3>Proceso de cierre del libro</h3>
	<p class="parrafo">El proceso de cierre del libro incluye estas tareas principales:</p>
	<ul>
	<li><b>1.</b> Cierre del período contable. <br>
	Un año fiscal se define como uno o más períodos abiertos como se define en la página Períodos contables . Un año fiscal típico contiene 12 períodos de un mes cada uno, pero también puede elegir otro método para definir un año.
	</li>
	<li><b>2.</b> Registro de entradas de años anteriores. <br>
	Cuando cierra un año fiscal, debe ingresar una cantidad de transacciones administrativas (como artículos prepagos y devengados). Estas transacciones se denominan asientos de ajuste. No existen reglas especiales para contabilizar estas entradas y (al igual que otras entradas) contienen una marca de verificación en el campo Entrada del año anterior si se contabilizan en una fecha de un año fiscal cerrado. Aunque se haya cerrado un año fiscal, aún puede contabilizar entradas del libro mayor en él.
	</li>
	<li><b>3.</b> Transferencia de saldos de las cuentas del estado de resultados al balance general. <br>
	Después de que se haya cerrado un año fiscal y se hayan contabilizado todas las entradas del año anterior, las cuentas del estado de resultados deben cerrarse y el ingreso neto del año debe transferirse a una cuenta bajo el patrimonio de los propietarios en el balance general. Utilice el trabajo por lotes Cerrar declaración de ingresos para este propósito. El trabajo por lotes procesa todas las cuentas del libro mayor del tipo Estado de resultados y crea entradas que revierten sus saldos. Estos asientos se colocan en un diario desde el que se pueden contabilizar. El trabajo por lotes no los contabiliza automáticamente, excepto cuando se usa una moneda de informe adicional. Cuando se usa una moneda de informe adicional, el trabajo por lotes se registra directamente en el libro mayor. <br>
	Para obtener más información, consulte <a href="">Cerrar cuenta de resultados</a>.
	</li>
	<li><b>4.</b> Contabilización del asiento de cierre de ejercicio junto con los asientos contables compensatorios del patrimonio. <br>
	Cuando finaliza el trabajo por lotes Cerrar declaración de ingresos, contabiliza las entradas generadas por el trabajo. Si no especificó una cuenta de ganancias retenidas en el trabajo por lotes, ingrese una línea con una entrada de saldo que registre los ingresos netos en la cuenta del libro mayor correcta bajo el patrimonio de los propietarios en el balance general. Finalmente, publique el diario.
	</li>
	</ul>
	<h3>Qué pasa cuando cierras</h3>
	<p class="parrafo">Cuando cierra al final del año, el sistema mueve sus ganancias de las ganancias calculadas a la cuenta de ganancias retenidas. El sistema también marca el año fiscal como "cerrado" y marca todas las entradas posteriores del año cerrado como "entradas del año anterior".</p>
	<p class="parrafo">Luego, el sistema genera un asiento de cierre, pero no contabiliza el asiento automáticamente. Tiene la oportunidad de realizar el asiento o asientos de cuenta de capital de compensación, lo que le permite decidir cómo asignar su asiento de cierre. Por ejemplo, si su empresa tiene varias divisiones, puede dejar que el sistema genere un solo asiento de cierre para todas las divisiones y luego puede hacer una contrapartida para la cuenta de capital de cada división.</p>
	<p class="parrafo">Puede contabilizar en un año fiscal anterior, incluso después de que se hayan cerrado las cuentas del estado de resultados, si vuelve a ejecutar el trabajo por lotes Cerrar estado de resultados después.</p>
	<h3> Para cerrar periodos contables</h3>
	<ul>
	<li><b>1.</b> Elija el icono de busqueda, ingrese <b>Períodos contables</b> y luego elija el enlace relacionado</li>
	<li><b>2.</b> En la Página  <b>Períodos contables</b>, elija la opcion <b>Cerrar año.</b> <br>
	Si hay más de un año fiscal abierto, se selecciona automáticamente el primero para cerrarlo. Aparece un mensaje que identifica el año que cerrará y las consecuencias de cerrar el año.
	</li>
	<li><b>3.</b> Para cerrar el año, elija el botón <b>Sí</b>.</li>
	</ul>
	<div class="img-content2"><img src="img/cerrarperi1.PNG" alt=""></div>
	<p class="parrafo">Se cierra el año fiscal y se seleccionan los campos <b>Cerrado</b> y <b>Fecha</b> de bloqueo para todos los períodos del año. El año fiscal no se puede volver a abrir y no puede quitar la marca de verificación de los campos <b>Cerrado</b> o <b>Fecha de bloqueo</b>.</p>
	<p class="parrafo"><b>Nota</b> <br>
	No puede cerrar un año fiscal antes de crear uno nuevo. Tenga en cuenta que cuando se ha cerrado un año fiscal, no puede cambiar la fecha de inicio del siguiente año fiscal.</p>

	<p class="parrafo">Videotutorial Cierre del ejercicio en Business Central</p>
	<iframe class="ifra" src="https://www.youtube.com/embed/w1NaJ2oZmdg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br>
	<p class="parrafo">Videotutorial Cierre de Ejercicio en Dynamics NAV </p>
	<iframe class="ifra" src="https://www.youtube.com/embed/lVeFoaFkOkY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	<br>

	<p class="parrafo">Aunque se haya cerrado un año fiscal, aún puede contabilizar entradas del libro mayor en él. Cuando haga esto, las entradas se marcarán como contabilizadas en un año fiscal cerrado y se seleccionará el campo <b>Entrada del año anterior</b>.</p>
	<p class="parrafo">Después de que se cierra un año fiscal, debe cerrar las cuentas del estado de resultados y transferir los resultados del año a una cuenta en el balance general. Puede repetir esto cada vez que publique en el año fiscal cerrado.</p>

	`;

	cuerpo.innerHTML= contenido;

}

/*==========
Modelo 340
============*/
let crearModelo340 = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Modelo 340</h2>
	<p class="parrafo">El Informe <b>340</b> contiene información sobre facturas e impuestos emitidos o recibidos por su empresa en un período determinado y se basa en Fecha de IVA. El informe se genera en un formato que ha aprobado la administración fiscal. Este informe debe enviarse en el período de liquidación mensual o trimestral de la empresa, según el tamaño de la empresa.</p>
	<p class="parrafo">El modelo <b>340</b> es una declaración informativa (por lo que no tendrás que pagar nada) donde se incluye el detalle de todas las facturas emitidas (las que haces a tus clientes) y las recibidas (las de tus gastos).
	</p>
	<p class="parrafo">Es obligatorio presentar el modelo 340 sólo si estás inscrito en el Régimen Especial de Devolución Mensual  (REDEME), es decir, aquellos que devuelven el IVA mensualmente.</p>
	<p class="parrafo">Tendrás que hacerlo junto al modelo 303 IVA mensual que presentas todos los meses.</p>
	<p class="parrafo">Este formulario es igual tanto para autónomos como para sociedades.</p>
	<h3>Formato de archivo</h3>
	<p class="parrafo">El formato de archivo del <b>informe 340</b> incluye un registro de deponente y al menos una de las facturas emitidas y facturas recibidas. La información de deponente se obtiene de la tabla Información empresa y del formulario de solicitud. Las facturas emitidas se obtienen de las empresas a las que se han vendido mercancías o servicios. La información de cliente se obtiene de la tabla Cliente. Las facturas recibidas se obtienen de las empresas a las que se han comprado mercancías o servicios. La información de proveedor se obtiene de la tabla Proveedor.</p>
	<p class="parrafo"><b>Nota</b> <br> Si no hay ningún registro de formato, el archivo no se crea y se muestra un mensaje de error.</p>
	<h3>Movimientos incluidos en el informe 340</h3>
	<p class="parrafo">Los movimientos incluidos en el <b>informe 340</b> deben haberse registrado durante el ejercicio y el periodo que se ha indicado en el formulario de solicitud. Los movimientos que se incluyen en el informe de pagos en efectivo se pueden registrar del año anterior.</p>
	<div class="contentList">
	<ul>
	<li>Facturas de ventas y abonos registrados.</li>
	<li>Facturas de compras y abonos registrados.</li>
	<li>Facturas de servicios y abonos registrados.</li>
	<li>Autofacturas y autoabonos.</li>
	<li>Pagos en efectivo.</li>
	</ul>
	</div> 
	<p class="parrafo">Los movimientos del informe <b>Libro facturas emitidas</b> se deben incluir en el informe como facturas emitidas.</p>
	<p class="parrafo">Los movimientos del informe <b>Libro facturas recibidas</b> se deben incluir en el informe como facturas recibidas.</p>
	<h3>Restricciones del formato de archivo</h3>
	<p class="parrafo">Antes de crear el informe 340, debe tener en cuenta las siguientes restricciones de formato de archivo:</p>
	<div class="contentList">
	<ul>
	<li>Todos los importes se deben expresar en euros.</li>
	<li>Todos los importes deben ser positivos. En los campos donde son posibles importes negativos, se indica N.</li>
	<li>Todo el texto deber estar en mayúsculas.</li>
	<li>Todos los campos alfanuméricos se deben alinear a la izquierda.</li>
	<li>Todos los campos numéricos deben ir alineados a la derecha.</li>
	<li>Los caracteres especiales se convierten a caracteres estándar.</li>
	<li>Si no contienen ningún valor, los campos alfanuméricos se dejarán en blanco y los campos numéricos se rellenarán con ceros.</li>
	</ul>
	</div>
	<h3>Plazos para presentar el modelo 340</h3>
	<p class="parrafo">El modelo 340 es el modelo que acompaña al modelo 303 IVA mensual, así que <b>tendrás que presentarlo todos los meses</b>.</p>
	<p class="parrafo">El plazo máximo para presentarlo finaliza los <b>días 20 de cada mes</b>, fecha en la que deberás presentar los datos del mes anterior.</p>
	<p class="parrafo">Es decir, que en febrero deberás presentar los datos generados en enero, y así sucesivamente.</p>
	<div class="img-content2"><img src="img/modelo340.png" alt=""></div>
	<h3>Para crear el informe 340</h3>
	<ul>
	<li><b>1.</b> Elija el icono de busqueda, escriba <b>Modelo 340</b> y luego elija el enlace relacionado. <br>
	<div class="img-content2"><img src="img/modelo340-1.PNG" alt=""></div>

	</li>
	<li><b>2.</b> En la ficha desplegable <b>Opciones</b> de la página <b>Modelo 340</b>, rellene los campos tal y como se describe en la tabla siguiente. <br>
	<table class="tabla1">
	<tr>
	<th>Campo</th>
	<th>Descripción</th>
	</tr>
	<tr>
	<td>Ejercicio</td>
	<td>Escriba el año fiscal para el que desea crear la declaración de la operación.</td>
	</tr>
	<tr>
	<td>Mes</td>
	<td>Seleccione el mes que desea incluir en la declaración.</td>
	</tr>
	<tr>
	<td>Importe pago mín.</td>
	<td>Escriba el importe que ha recibido en efectivo en la Cuenta para pagos en efectivo seleccionada. Importante: El campo está diseñado para realizar pagos en efectivo. El importe seleccionado decide la suma de los movimientos de cliente en el informe. Si el importe total facturado para un cliente por año es menor que el importe especificado en el campo, la suma de los movimientos de cliente no se incluye en el informe. Si el importe total facturado para un cliente por año es mayor que el importe especificado en el campo, la suma de los movimientos de cliente se incluye en el informe. Cuando exporte los datos a un archivo de declaración .txt, verá que el campo Cantidad recibida en efectivo en el archivo .txt de declaración contiene el importe acumulado de movimientos de clientes en una línea por año.</td>
	</tr>
	<tr>
	<td>Cuenta para pagos en efectivo</td>
	<td>Seleccione uno o más en cuentas de contabilidad para incluir solo los movimientos que se registran en cuentas de contabilidad filtradas en el informe. Importante: El campo está diseñado para realizar pagos en efectivo. Cuando exporte los datos a un archivo de declaración .txt, verá que el campo Cantidad recibida en efectivo en el archivo .txt de declaración contiene el valor acumulado para las cuentas seleccionadas. Si no selecciona ninguna cuenta contable, no se crearán líneas del tipo 2 para pagos en efectivo.</td>
	</tr>
	<tr>
	<td>Nombre contacto</td>
	<td>Introduzca el apellido y el nombre de la compañía que está creando la declaración de operaciones.</td>
	</tr>
	<tr>
	<td>Número de teléfono</td>
	<td>Introduzca el número de teléfono de la compañía que está creando la declaración de operaciones.</td>
	</tr>
	<tr>
	<td>Grupos reg. prod. gen. no deduc.</td>
	<td>Seleccione el grupo contable de producto. Los grupos de registro seleccionados se consideran como IVA no deducible.</td>
	</tr>
	<tr>
	<td>Nº modelo</td>
	<td>Introduzca el número para identificar la declaración de operaciones.</td>
	</tr>
	<tr>
	<td>Código electrónico</td>
	<td>Especifique el código electrónico que proporciona la administración fiscal.</td>
	</tr>
	<tr>
	<td>Tipo de medio modelo</td>
	<td>Seleccione el tipo de medio del modelo.</td>
	</tr>
	<tr>
	<td>Modelo de sustitución</td>
	<td>Seleccione si se trata de una sustitución de una declaración anteriormente registrada.</td>
	</tr>
	<tr>
	<td>Número de modelo anterior</td>
	<td>Escriba el número de modelo anterior si la opción Modelo de sustitución está activada.</td>
	</tr>
	</table>
	</li>
	<li><b>3.</b> Seleccione los filtros apropiados y, a continuación, elija el botón <b>Aceptar</b>. Se creará el archivo de texto del Informe 340 en la ruta especificada. <br> 
	<div class="img-content2"><img src="img/modelo340-2.PNG" alt=""></div>

	</li>
	</ul>
	<h3>Sanciones del modelo 340</h3>
	<p class="parrafo">La sanción consistirá en una multa pecuniaria fija de <b>20 euros por cada dato</b> o conjunto de datos referidos a una misma persona o entidad que hubiera debido incluirse en la declaración con un mínimo de 300 euros y un máximo de 20.000 euros.</p>
	<p class="parrafo">El impacto sobre la economía de tu negocio que puede tener una presentación fuera de plazo de este modelo es muy importante.</p>
	<p class="parrafo">Estás obligado a aportar  <b>todas las facturas y documentos</b> que justifiquen tus ingresos y gastos en el plazo indicado.</p>
	<p class="parrafo">Al estar inscrito en devolución de IVA mensual es obligatorio presentar el modelo 303 y el modelo 340 de forma telemática a través de la página de la Agencia Tributaria.</p>

	`;

	cuerpo.innerHTML= contenido;

}
/*================
Modelo SII
==============*/
let modeloSii = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Suministro Inmediato de Información (SII)</h2>
	<p class="parrafo">La transformación digital es una realidad. En pocos años hemos visto como las nuevas tecnologías han revolucionado la forma en la que las organizaciones interactúan, se comunican y desarrollan su actividad económica. En este sentido, las administraciones fiscales no podían quedarse atrás y su respuesta ha sido el <strong>Suministro Inmediato de Información (SII)</strong>.</p>
	<p class="parrafo">El SII surge de la necesidad de agilizar los procesos de gestión del IVA, adaptándola al entorno digital. La digitalización de los impuestos permitirá, además, luchar contra el fraude de manera más efectiva.</p>
	<h3>¿Qué es el Suministro Inmediato de Información (SII)?</h3>
	<p class="parrafo">El Suministro Inmediato de Información (SII) es el nuevo sistema de tramitación del IVA, desarrollado por la Agencia Tributaria (AEAT), para la gestión electrónica de los libros registro del Impuesto sobre el Valor Añadido.</p>

	<p class="parrafo">Este nuevo sistema obliga a suministrar la información relativa a los registros de facturación (expedidas y recibidas) a través de la Sede Electrónica de la Agencia Tributaria en un plazo máximo de cuatro días, incluidas las facturas simplificadas. El plazo se ampliará a 8 días para aquellas organizaciones cuyas facturas sean emitidas por un tercero autorizado.</p>
	<h3>¿Para qué empresas es obligatorio el SII?</h3>
	<p class="parrafo">En una primera fase, el nuevo sistema SII será de carácter obligatorio para aquellas organizaciones que actualmente tienen obligación de autoliquidar el <b>IVA de forma mensual:</b></p>
	<div class="contentList">
	<ul>
	<li>Grandes empresas (facturación superior a 6 millones de euros).</li>
	<li>Empresas inscritas en grupos de IVA.</li>
	<li> Empresas inscritas en el Régimen de Devolución Mensual del IVA (REDEME).</li>
	<li>Todas aquellas empresas que, voluntariamente, decidan sumarse a este nuevo sistema telemático de gestión del IVA.</li>
	</ul>
	</div>
	<h3>Configurar SII para informes de IVA</h3>
	<p class="parrafo">Business Central admite los requisitos del SII españoles para la declaración del IVA (suministro de información inmediato).</p>
	<p class="parrafo">Para configurar el SII se debe realizar los siguientes pasos: </p>
	<ul>
	<li><b>1.</b> Elija el icono de busqueda que abre la función Dígame. , escriba <b>Configuración de SII</b> y luego elija el enlace relacionado.</li>
	<li><b>2.</b> En la ficha desplegable <b>General</b>, seleccione el campo <b>Habilitado</b>. <br> El campo <b>Habilitado</b> se selecciona automáticamente si importa un certificado en el campo Código de certificado en la ficha desplegable <b>Certificado</b>. <br> 
	<div class="img-content2"><img src="img/SII.PNG" alt=""></div>
	</li>
	<li><b>3.</b> En el campo <b>Fecha operación</b>, especifique si desea utilizar Fecha registro o Fecha emisión documento como fecha de operación en el archivo XML que se envía a través del SII a las autoridades fiscales.</li>
	<li><b>4.</b> Si desea enviar documentos en lotes, seleccione el campo Habilitar envío de lotes.</li>
	<li><b>5.</b> Configure los otros campos, importe un certificado válido y especifique los puntos finales relevantes con la URL de destino. Pase el cursor sobre un campo para leer una breve descripción.</li>
	</ul>
	<h3>Umbral de envíos de lotes de proyectos</h3>
	<p class="parrafo">Si desea utilizar el envío automático por lotes, el campo Umbral de envío de lotes de proyectos especifica el número de umbral de documentos con el estado Pendiente y eso activará un envío automático por lotes.</p>
	<p class="parrafo"><b>Nota</b> <br>
	Los campos <b>Habilitado y Envíos de lotes habilitados</b> deben seleccionarse para que el valor de umbral tenga efecto.
	</p>
	<p class="parrafo">Si el umbral se establece en 0, los documentos se enviarán cuando se registren.</p>
	<p class="parrafo">Si el umbral se establece en 1 o más, los documentos se envían automáticamente en lotes. Si el número de entradas pendientes supera el valor del umbral, todas las entradas pendientes se envían automáticamente.</p>
	<p class="parrafo">Siempre puede enviar documentos manualmente con un estado Pendiente eligiendo las acciones <b>Reintentar</b> o <b>Reintentar</b>  todo de la página <b>Historial SII</b> .</p>
	<h3>Videotutorial como Configurar SII</h3>
	<iframe class="ifra" src="https://www.youtube.com/embed/00mcDZSTyu0" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

	`;

	cuerpo.innerHTML= contenido;

}

/*=============
Resumen Ventas
==============*/
let resumenVentas = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `

	<h2 class="Subtitulos">Ventas en Business Central</h2>

	<p class="parrafo">Usted crea una factura de venta o una orden de venta para registrar su acuerdo con un cliente para vender ciertos productos en ciertos términos de entrega y pago.</p>
	<p class="parrafo">Debe usar <b>pedidos de venta</b>  si su proceso de ventas requiere que envíe partes de una cantidad de pedido, por ejemplo, porque la cantidad total no está disponible de inmediato. Si vende artículos entregándolos directamente de su proveedor a su cliente, como un envío directo, también debe usar órdenes de venta. En todos los demás aspectos, las órdenes de venta funcionan de la misma manera que las facturas de venta. Con los pedidos de venta, también puede utilizar la funcionalidad de promesa de pedido para comunicar ciertas fechas de entrega a sus clientes.</p>
	<p class="parrafo">Puede negociar con el cliente creando primero una cotización de venta, que puede convertir en una factura de venta o en una orden de venta cuando acuerde la venta. Después de que el cliente haya confirmado el acuerdo, puede enviar una confirmación de pedido para dejar constancia de su obligación de entregar los productos según lo acordado.</p>
	<p class="parrafo">Puede corregir o cancelar fácilmente una factura de venta registrada antes de que se pague. Esto es útil si desea corregir un error de escritura o si el cliente solicita un cambio al principio del proceso de pedido. Si se paga la factura de venta registrada, debe crear una nota de crédito de venta o una orden de devolución de venta para revertir la venta.</p>
	<p class="parrafo">Las buenas prácticas de ventas y marketing tienen que ver con cómo tomar las mejores decisiones en el momento adecuado. La funcionalidad de marketing en Business Central proporciona una descripción general precisa y oportuna de su información de contacto para que pueda atender a sus clientes potenciales de manera más eficiente y aumentar la satisfacción del cliente. </p>
	<p class="parrafo">La siguiente tabla describe una secuencia de tareas</p>
	<table class="tabla1">
	<tr>
	<th>A</th>
	<th>Ver</th>
	</tr>
	<tr>
	<td>Cree una tarjeta de cliente para cada cliente al que vende.</td>
	<td>  Registrar nuevos clientes</td>
	</tr>
	<tr>
	<td>Cree una cotización de venta para ofrecer productos en términos negociables antes de convertir la cotización en una factura de venta.</td>
	<td>Hacer cotizaciones de ventas</td>
	</tr>
	<tr>
	<td>Cree una factura de venta para registrar su acuerdo con un cliente para venderle ciertos productos en ciertos términos de entrega y pago.</td>
	<td>Factura Ventas</td>
	</tr>
	<tr>
	<td>Procese un pedido de ventas que implique envío parcial o envío directo.</td>
	<td>  Vender productos</td>
	</tr>
	<tr>
	<td>Comprenda lo que sucede cuando registra documentos de ventas.</td>
	<td>Publicación de ventas</td>
	</tr>
	<tr>
	<td>Prepárese para recoger artículos para el envío.</td>
	<td>  Imprimir la lista de selección</td>
	</tr>
	<tr>
	<td>Cumplir una orden de venta con múltiples envíos parciales.</td>
	<td>  Procesar envíos parciales</td>
	</tr>
	<tr>
	<td>Configure líneas de compra o venta estándar que pueda insertar rápidamente en documentos, por ejemplo, para pedidos de reabastecimiento recurrentes.</td>
	<td>Crear líneas de compras y ventas recurrentes</td>
	</tr>
	<tr>
	<td>Vincule una orden de venta a una orden de compra para vender un artículo de envío directo para que su proveedor lo entregue directamente a su cliente.</td>
	<td>Hacer envíos directos</td>
	</tr>
	<tr>
	<td>Haga que un proveedor envíe un artículo del catálogo a su almacén para que pueda enviar el artículo a su cliente.</td>
	<td>Crear pedidos especiales</td>
	</tr>
	<tr>
	<td>Realice una acción en una factura de venta registrada sin pagar para crear automáticamente una nota de crédito y cancelar la factura de venta o volver a crearla para que pueda hacer correcciones.</td>
	<td>Corregir o cancelar facturas de ventas impagas</td>
	</tr>
	<tr>
	<td>Cree una nota de crédito de ventas para revertir una factura de venta registrada específica para reflejar los productos que el cliente devuelve y el monto del pago que reembolsará.</td>
	<td>Procesar devoluciones de ventas o cancelaciones</td>
	</tr>
	<tr>
	<td>Gestione el compromiso de compra de su cliente en grandes cantidades entregadas en varios envíos a lo largo del tiempo.</td>
	<td>Trabajar con órdenes de venta abiertas</td>
	</tr>
	<tr>
	<td>Venda artículos de ensamblaje que no estén disponibles actualmente mediante la creación de un pedido de ensamblaje vinculado para suministrar la cantidad total o parcial del pedido de ventas.</td>
	<td>Vender artículos ensamblados a pedido</td>
	</tr>
	<tr>
	<td>Facture a un cliente una vez por envíos múltiples combinando los envíos en una factura.</td>
	<td>Combinar envíos en una sola factura</td>
	</tr>
	<tr>
	<td>Informe a sus clientes de las fechas de entrega de los pedidos calculando la fecha de capacidad para prometer o la fecha de disponibilidad para prometer.</td>
	<td>Calcular fechas prometedoras de pedidos</td>
	</tr>
	<tr>
	<td>Resuelva la confusión cuando existen dos o más registros para el mismo cliente.</td>
	<td>  Combinar registros duplicados</td>
	</tr>
	</table>

	`;

	cuerpo.innerHTML= contenido;

}
/*==================
Configuracion de Ventas
====================*/
let confiVentas= () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `

	<h2 class="Subtitulos">Configuración de Ventas</h2>
	<p class="parrafo">Antes de poder administrar los procesos de ventas, debe configurar las reglas y los valores que definen las políticas de ventas de la empresa.</p>

	<p class="parrafo">Debe definir la configuración general en la página <b>Ventas y cuentas por cobrar</b> , como qué documentos de ventas se requieren, cómo se registran sus valores y el tipo de líneas que se crearán de forma predeterminada. Esta configuración general generalmente se realiza una vez durante la implementación inicial.</p>
	<p class="parrafo">La configuración de ventas relacionadas con las finanzas, como los métodos de pago y las monedas, se tratan en la sección Configuración de finanzas. Para obtener más información, consulte <a href="https://learn.microsoft.com/en-us/dynamics365/business-central/finance-setup-finance">Configuración de finanzas</a> .</p>
	<div class="img-content2">
	<img src="img/confiventas1.PNG" alt="">
	</div><br>
	<p class="parrafo">Algunos de los campos de Configuración de ventas y cobros:</p>

	<table class="tabla1">
	<tr>
	<th>Campo</th>
	<th>Descripción</th>
	</tr>
	<tr>
	<td><b>Advertencia falta stock</b></td>
	<td>Especifica si se muestra una advertencia al especificar una cantidad en un documento de venta que ponga el nivel de inventario del producto por debajo de cero.</td>
	</tr>
	<tr>
	<td><b>Redondeo factura</b></td>
	<td>Especifica si se redondean los importes para las facturas de venta. El redondeo se aplica tal como se especifica en el campo Precisión redondeo fact. (DL) en la ventana Configuración contabilidad.</td>
	</tr>

	<tr>
	<td><b>Albarán al facturar</b></td>
	<td>Especifica si al registrar una factura se crean automáticamente un envío registrado y una factura registrada.</td>
	</tr>
	<tr>
	<td><b>Copiar el nombre del cliente en movimientos</b></td>
	<td>Especifica si desea que la descripción de las fichas de clientes se copien en los movimientos de clientes durante el registro.</td>
	</tr>
	<tr>
	<td><b>Permitir diferen. IVA</b></td>
	<td>Permitir diferen. IVA</td>
	</tr>
	<tr>
	<td><b>Gr.regis. IVA negocio (precio)</b></td>
	<td>Especifica un grupo de registro de IVA de negocio para los clientes a los que desea aplicar el precio de producto con el IVA incluido.</td>
	</tr>
	<tr>
	<td><b>Nº serie cliente</b></td>
	<td>Especifica el código de la serie numérica que se va a utilizar para asignar números a los clientes.</td>
	</tr>
	<tr>
	<td><b>Nº serie oferta</b></td>
	<td>Especifica el código de la serie numérica que se va a utilizar para asignar números a las ofertas de venta.</td>
	</tr>
	<tr>
	<td><b>Nº serie alb. venta registrado</b></td>
	<td>Especifica el código de la serie numérica que se va a usar para asignar números a los envíos registrados.</td>
	</tr>
	<tr>
	<td><b>Archivar ofertas</b></td>
	<td>Especifica si desea archivar las ofertas de venta cuando se eliminan.</td>
	</tr>
	<tr>
	<td><b>Archivar pedidos</b></td>
	<td>Especifica si desea archivar los pedidos de venta cuando se eliminan.</td>
	</tr>
	</table>
	<p class="parrafo">En la siguiente tabla veremos los pasos que previamente debemos cumplir antes de realizar una oferta de venta a clientes de la empresa.</p>
	<table class="tabla1">
	<tr>
	<th>A</th>
	<th>Ver</th>
	</tr>
	<tr>
	<td>Cree una tarjeta de cliente para cada cliente al que venda.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-register-new-customers">Registrar nuevos clientes</a></td>
	</tr>
	<tr>
	<td>Permita que los clientes paguen a través de PayPal eligiendo el logotipo de PayPal en los documentos de ventas.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-enable-payment-service-extensions">Habilitar el pago del cliente a través de PayPal</a></td>
	</tr>
	<tr>
	<td>Ingresa los diferentes descuentos y precios especiales que otorgas a los clientes según artículo, cantidades y/o fecha.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-record-sales-price-discount-payment-agreements?tabs=current-experience">Registro de precio de venta, descuento y acuerdos de pago</a></td>
	</tr>
	<tr>
	<td>Configure los vendedores para que pueda asignarlos a contactos de clientes o medir el rendimiento de los vendedores como base para calcular la comisión o bonificación de ventas.</td>
	<td><a href="">Configurar vendedores</a></td>
	</tr>
	<tr>
	<td>Especifique para clientes individuales o para todos los clientes cómo se envían los documentos de ventas de forma predeterminada cuando elige la acción Registrar y enviar .</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-setup-salespeople">Configurar perfiles de envío de documentos</a></td>
	</tr>
	<tr>
	<td>Configure su correo electrónico para que contenga un resumen de la información en el documento de ventas que se está enviando.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/ui-how-send-documents-email">Enviar documentos por correo electrónico</a></td>
	</tr>
	<tr>
	<td>Use un servicio web de la UE para verificar el número de registro de IVA de un cliente.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/finance-setup-vat">Verificar números de registro de IVA</a></td>
	</tr>
	<tr>
	<td>Define los diferentes incoterms que ofreces a los clientes o que te ofrecen tus proveedores.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-set-up-shipment-methods">Configurar métodos de envío</a></td>
	</tr>
	<tr>
	<td>Ingrese información sobre los diferentes proveedores de transporte que utiliza, incluido un enlace a su servicio de seguimiento de paquetes.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-to-set-up-shipping-agents">Configurar agentes de envío</a></td>
	</tr>
	<tr>
	<td>Especifique los informes predeterminados que se utilizarán para diferentes tipos de documentos.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/across-report-selections">Selección de informes en Business Central</a></td>
	</tr>
	</table>

	`;

	cuerpo.innerHTML= contenido;

}
/*==========================
Crear Pedido de ventas
=========================*/
let pedidoVentas = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `

	<h2 class="Subtitulos">Crear pedido de Ventas</h2>

	<p class="parrafo">Para realizar un pedido venta se debe seguir los siguientes pasos:</p>
	<ul>
	<li><b>1.</b> En la Página principal en la lupa de busqueda escribimos <b>Pedido ventas.</b></li>
	<li><b>2.</b> Se nos abrira la página<b> Sales Order List (9305, List)</b> que nos mostrar información de la tabla <b>Sales Header (36)</b>.</li>
	<li><b>3.</b> En los botones de la parte superior seleccionamos <b>Nuevo</b>, se no abrira la página <b>Sales Order (42, Document)</b>.</li>
	<li><b>4.</b> En el campo <b>Nombre del cliente</b> seleccionamos el cliente al que le haremos la venta, al seleccionar el cliente veremos que nos traera la ficha del cliente. </li>
	<li><b>5.</b> Selecionamos el tipo de venta que haremos.</li>
	<li><b>6.</b> En  nuestro caso hemos seleccionado <b>Articulo</b>.</li>
	<li><b>7.</b> En el campo <b>Nº</b> Seleccionamos el artculo que venderemos. </li>
	<li><b>8.</b> En el campo <b>Cantidad</b>, especificamos la cantidad que venderemos.</li>
	<li><b>9.</b> Una vez terminado de agregar los articulos  de venta, En la parte superior en los botones seleccionamos <b>imprimir</b></li>
	<li><b>10.</b> Se nos abrira una ficha donde le daremos a <b>vista prevía</b>, así podremos visualizar un reporte de la oferta de venta. </li>
	</ul>
	<p class="parrafo">En la captura vemos la ventana donde haremos el pedido de venta. </p>
	<div class="img-content2">
	<img src="img/pedidoVenta1.PNG" alt="">
	</div><br>
	<p class="parrafo">La captura nos muestra la ventana  de confirmación de impresión de pedido de venta.</p>
	<div class="img-content2">
	<img src="img/pedidoVenta3.PNG" alt="">
	</div><br>
	<p class="parrafo">Reporte del pedido de venta, vista previa antes de imprimirlo o enviarlo al cliente.</p>
	<div class="img-content2">
	<img src="img/pedidoVenta2.PNG" alt="">
	</div><br>
	<p class="parrafo">Videotutorial Como configurar términos de pago como crear pedido de venta.</p>
	<iframe class="ifra" src="https://www.youtube.com/embed/u_T2trb2uCg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

	`;

	cuerpo.innerHTML= contenido;

}
/*=================
Crear factura de ventas 
======================*/
let facturaVenta = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos"> Factura de Venta</h2>
	<p class="parrafo">Por lo general, puede crear una orden de venta o una factura de venta para registrar su acuerdo con un cliente para vender ciertos productos en ciertas condiciones de entrega y pago.</p>
	<p class="parrafo">Sin embargo, debe usar una orden de venta en lugar de una factura de venta si:</p>
	<div class="contentList">
	<ul>
	<li>Necesita enviar solo una parte de la cantidad de un pedido, por ejemplo, porque la cantidad total no está disponible.</li>
	<li>Envíe productos después de contabilizar las facturas de venta correspondientes.</li>
	<li>Venda artículos que su proveedor entrega directamente a su cliente, lo que se conoce como envío directo.Obtenga más información en <a href="https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-drop-shipment">Hacer envíos directos</a>  .</li>
	</ul>
	</div>
	<p class="parrafo">En todas las demás situaciones, las órdenes de venta y las facturas de venta funcionan de la misma manera. Obtenga más información sobre cómo utilizar los pedidos de venta en <a href="https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-sell-products">Vender productos</a> .</p>
	<p class="parrafo">Puede negociar con el cliente creando primero una cotización de venta, que puede convertir en una factura de venta cuando acuerde la venta. Obtenga más información en <a href="https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-make-offers">Hacer cotizaciones de venta </a> .</p>
	<h3>Para crear una factura de venta</h3>
	<ul>
	<li><b>1.</b> Elija el icono de busqueda, ingrese Facturas de ventas , luego elija el enlace relacionado.</li>
	<li><b>2.</b> En el campo Cliente , ingrese el nombre de un cliente existente.</li>
	<li><b>3.</b> Complete los campos restantes en la página Factura de venta según sea necesario. Pase el cursor sobre un campo para leer una breve descripción.</li>
	<li><b>4.</b> En la ficha desplegable Líneas , en el campo Tipo , seleccione el <b>tipo</b> de producto, cargo o transacción que registrará para el cliente en la línea de ventas.</li>
	<li><b>5.</b> En el campo <b>No.</b> , seleccione un registro para publicar de acuerdo con el valor en el campo Tipo . <br>
	Deje el campo No. en blanco en los siguientes casos:
	<div class="contentList">
	<ul>
	<li>Si la línea es para un comentario. Escriba el comentario en el campo Descripción .</li>
	<li>Si la línea es para un artículo del catálogo.</li>
	</ul>
	</div>
	</li>
	<li><b>6.</b> En el campo <b>Cantidad</b> , ingrese cuántas unidades del producto, cargo o transacción debe registrar la línea para el cliente.
	<br><b>Nota</b><br>
	Si el artículo es del tipo Servicio , o el campo Tipo contiene Recurso , entonces la cantidad es una unidad de tiempo, como horas, como se indica en el campo Código de unidad de medida en la línea.
	</li>
	<li><b>7.</b> Si desea otorgar un descuento, ingrese un porcentaje en el campo % <b>de descuento de línea</b> . El valor del campo Importe de la línea se actualiza en consecuencia. <br>
	Si se configuran precios de artículos especiales en la ficha desplegable Precios de venta y Descuentos de línea de venta en la ficha del cliente o del artículo, el precio y el importe en la línea de venta se actualizan automáticamente si se cumplen los criterios de precio.</li>
	<li><b>8.</b> En la opción <b>Registar</b>, <b>Vista previa de registro</b> podremos ver una vista previa de lo movimientos que afectuara nuestro registro. </li>
	<li><b>9.</b> Le damos <b>Registrar</b>, luego aceptar y nos mostrar un mensaje "La factura se registró con el número 103217 y se movió a la ventana de facturas de venta registradas."</li>
	</ul><br>
	<div class="img-content2">
	<img src="img/factura1.PNG" alt="">
	</div>
	<p class="parrafo">Vista previa de lo movimientos que efectuara el registro de la factura.</p>
	<div class="img-content2">
	<img src="img/factura2.PNG" alt="">
	</div>
	<h3>Facturas registradas</h3>
	<p class="parrafo">Una vez contabilizada la factura, podrá encontrarla en la lista de facturas contabilizadas. Tanto la lista Facturas de venta registradas como la lista Facturas de compra registradas muestran las facturas registradas con los números de factura finales. En la lista, puede buscar cada factura registrada y puede corregir o cancelar una factura registrada.</p>
	<p class="parrafo">Para cada factura registrada, puede buscar estadísticas, dimensiones y los asientos contables que son el resultado de la factura registrada. También puede imprimir o enviar la factura contabilizada.</p>
	<p class="parrafo">Factura archivada en el historico de facturas.</p>
	<div class="img-content2">
	<img src="img/factura3.PNG" alt="">
	</div>
	<p class="parrafo">Videotutorial como realizar una factura de venta.</p>
	<iframe  class="ifra" src="https://www.youtube.com/embed/HSNtfKoJi2k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	`;

	cuerpo.innerHTML= contenido;

}
/*===================
Crear Plantilla Cliente
=====================*/
let crearPlantillaCliente = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `

	<h2 class="Subtitulos">Crear Plantillas de clientes</h2>
	<ul>
	<li><b>1.</b> Vamos a ir a clientes y vamos a acceder a una de las fichas para poder crear una plantilla.</li>
	<li><b>2.</b> Una vez estamos dentro de la ficha del cliente vamos a las opciones acciones y en el apartado de opciones despliego plantillas. </li>
	<li><b>3.</b> Aquí puedo generar un nuevo documento de plantilla, le selecciono un nombre, por ejemplo, nacional. </li>
	<li><b>4.</b>  Le puedo indicar un número de serie para que automáticamente asigna esta plantilla al sistema.</li>
	<li><b>5.</b> Le puedo informar también una información de dirección y contacto. Entro en el apartado de facturación y le indicaremos los grupos de registro.</li>
	<li><b>6.</b>  En este caso es un cliente nacional pues le indicamos y el respectivo código.</li>
	<li><b>7.</b>  También puede indicar un código de idioma y términos y formas de pago.</li>
	<li><b>7.</b>  Guardamos todos los cambios efectuados.</li>
	</ul>
	<div class="img-content2">
	<img src="img/plantilla1.PNG" alt="">
	</div>
	<p class="parrafo">Una vez creada la plantilla nos saldra como una de las opciones de plantilla al crear un nuevo cliente.</p>
	<div class="img-content">
	<img src="img/plantilla2.PNG" alt="">
	</div>
	<p class="parrafo">Videotutorial Como configurar términos de pago como crear plantillas.</p>
	<iframe class="ifra" src="https://www.youtube.com/embed/a0oh5zglX54" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	`;

	cuerpo.innerHTML= contenido;

}


/*=====================
Clientes
=====================*/
let crearCliente = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Registrar nuevos clientes</h2>

	<p class="parrafo">Los clientes son tu fuente de ingresos. Debe registrar cada cliente al que le vende como una tarjeta de cliente. Las tarjetas de cliente contienen la información necesaria para vender productos al cliente.</p>
	<p class="parrafo">Antes de que pueda registrar nuevos clientes, debe configurar varios códigos de venta para elegir cuando complete las tarjetas de clientes. Obtenga más información en <a href="https://learn.microsoft.com/en-us/dynamics365/business-central/sales-setup-sales">Configuración de ventas</a>.</p>
	<h3>Adición de nuevos clientes</h3>
	<p class="parrafo">Puede agregar nuevos clientes manualmente completando la página Tarjeta de cliente , o puede usar plantillas que contienen información predefinida. Por ejemplo, puede crear una plantilla para diferentes tipos de perfiles de clientes. El uso de plantillas ahorra tiempo al agregar nuevos clientes y ayuda a garantizar que la información sea correcta cada vez.</p>
	<p class="parrafo">Si creas:</p>
	<div class="contentList">
	<ul>
	<li>Múltiples plantillas para usar con más de un tipo de cliente, puede elegir la plantilla adecuada cuando agrega un cliente.</li>
	<li>Solo una plantilla, se utiliza para todos los nuevos clientes.</li>
	</ul>
	</div>
	<p class="parrafo">Después de crear una plantilla, puede usar la acción <b>Aplicar plantilla</b> para aplicarla a uno o más clientes seleccionados. Para crear una plantilla, complete la información que se reutilizará en la página <b>Tarjeta de cliente</b> y luego guárdela como plantilla. Obtenga más información en la sección Para guardar la tarjeta de cliente como plantilla.  Obtenga más información en la sección <a href="https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-register-new-customers#to-save-the-customer-card-as-a-template">Para guardar la tarjeta de cliente como plantilla</a>.</p>
	<p class="parrafo"><b>Nota</b><br>Puede ser útil personalizar la página Plantilla de cliente cuando crea una plantilla. Por ejemplo, es posible que desee agregar el campo Límite de crédito a una plantilla. Obtén más información en la sección Personaliza tu espacio de trabajo.</p>
	<h3>Para crear una nueva tarjeta de cliente</h3>
	<ul>
	<li><b>1.</b> Elija la lupa de busqueda, ingrese <b>Clientes</b>  y luego elija el enlace relacionado.</li>
	<li><b>2.</b> En la página <b>Clientes</b> , elija la acción <b>Nuevo</b>. <br>Si solo existe una plantilla de cliente, se abre una nueva tarjeta de cliente con algunos campos llenos de información de la plantilla.

	Si existe más de una plantilla de cliente, se abre una página desde la que puede seleccionar una plantilla de cliente. En ese caso, siga los siguientes dos pasos.</li>
	<li><b>3.</b> En la página Seleccionar una plantilla para un nuevo cliente , elija la plantilla que desea usar para la nueva tarjeta de cliente.</li>
	<li><b>4.</b> Elija el botón Aceptar . Se abre una nueva tarjeta de cliente con algunos campos llenos de información de la plantilla.</li>
	<li><b>5.</b> Proceda a completar o cambiar campos en la tarjeta de cliente según sea necesario. Pase el cursor sobre un campo para leer una breve descripción. <br>
	La acción <b>Precios y descuentos</b> proporciona opciones para administrar precios especiales o descuentos para un cliente cuando un pedido cumple con ciertos criterios. Ejemplos de tales criterios pueden ser cuando compran un determinado artículo, ordenan una cantidad mínima o compran antes de una fecha, como cuando finaliza una campaña.
	</li>
	</ul>
	<p class="parrafo">Plantilla de cliente para seleccionar.</p>
	<div class="img-content2">
	<img src="img/cliente1.PNG" alt="">
	</div>
	<br>
	<p class="parrafo">Después de crear la nueva tarjeta del cliente ya estará habilitado para realizar operaciones con él.</p>
	<div class="img-content2">
	<img src="img/cliente3.PNG" alt="">
	</div><br>
	<p class="parrafo">El cliente ahora está registrado y la tarjeta de cliente está lista para usarse en documentos de ventas.</p>
	<h3>Eliminación de tarjetas de clientes</h3>
	<p class="parrafo">Si ha registrado una transacción para un cliente, no puede eliminar la tarjeta del cliente porque es posible 
	que se necesiten las entradas del libro mayor para la auditoría. Para eliminar tarjetas de clientes con entradas del libro mayor, 
	comuníquese con su socio de Microsoft para hacerlo a través del código.</p>
	<p class="parrafo">Video Tutorial como crear un nuevo cliente.</p>
	<iframe class="ifra" src="https://www.youtube.com/embed/u_hwamiNs04" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

	`;

	cuerpo.innerHTML= contenido;

}

/*==============================
Configuracion terminos de Pago
==========================*/

let configTerminosPagos = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Configuración de terminos de pagos</h2>
	<p class="parrafo">La configuración de los términos de pago, bajo este nombre encontramos la utilidad que tiene business central para calcular las fechas de vencimiento de nuestras facturas, el mantenimiento de términos de pago es común para clientes y proveedores por lo que tendremos que dar de alta todos los términos de pago que afecten a ambos mantenimientos. </p>
	<p class="parrafo">Para dar de alta un nuevo termino de pago, acederemos en la página en el icono de lupa escribiremos <b>Terminos de pagos</b> o <b> Condiciones de pagos</b></p>
	<ul>
	<li><b>1.</b> Presionamo sobre la opción de <b>Nuevo</b>.</li>
	<li><b>2.</b>  En el campo <b>código</b> que es alfanumérico, lo cual significa que podremos utilizar tanto números como letras recomendamos utilizar códigos visuales que sólo viendo el código sepamos el tipo de cálculo que realizará. </li>
	<li><b>3.</b> 
	Utilizaremos un 30 60 días es decir dos plazos por lo tanto en el campo código podemos informarlo de esta manera en el siguiente campo.</li>
	<li><b>4.</b> Tendremos que informar a business central cuánto tiempo ha de pasar entre la fecha de emisión del documento y el cálculo del vencimiento esta información se la tenemos que proporcionar a business central en formato de tiempo de business si queremos que calculé 30 días como es el caso ya tenemos que informar de esta manera 30 d.</li>
	<li><b>5.</b> Para informar el segundo plazo accederemos a <b>Navegar - Pagos - Plazos</b>  y aquí tenemos que informar el tanto por ciento del importe total del documento que será el primer vencimiento como son dos plazos pues será un 50 por ciento. </li>
	<li><b>6.</b>  En el siguiente campo que tenemos que informar es pasado este primer vencimiento cuánto tiempo tiene que pasar para calcular el segundo como hemos dicho que es un 30 60 habrán pasado 30 días se habrá calculado el primer vencimiento </li>
	<li><b>7.</b>para el siguiente vencimiento que han de pasar otros 30 días lo informamos y pasados esos 30 días cuál será el tanto por ciento del importe el otro 50% ya tenemos configurados nuestros plazos</li>
	<li><b>8.</b> Volvemos a la pantalla siguiente y el campo que nos encontramos es distribución del iva este campo es muy importante y por defecto business central coloca la opción de primer plazo pero según la legislación española cuando existen más de un vencimiento la distribución del iva tiene que ser proporcional por lo cual abriremos el campo de opciones y colocaremos el valor proporcional</li>
	<li><b>9.</b> El siguiente campo es número máximo díaz hasta fecha de vencimiento aquí podemos informar cuántos días dejamos que pasen entre la entrega del producto o el servicio para calcular el primer vencimiento a diferencia del primer campo de cálculo de fecha de vencimiento aquí no es necesario informarlo en tiempo en fórmula de tiempo ya que son siempre días por lo tanto si queremos que sean diez días pues colocaremos diez días.</li>
	<li><b>10.</b> Los tres campos que vienen a continuación hacen referencia al descuento de pronto pago en business central el descuento de pronto pago va asociado al termino de pago por lo cual significa que cada vez que utilicemos este término de pago business central calculará automáticamente el pronto pago que hayamos informado aquí podemos informar también en forma de tiempo qué fechas actuará este pronto pago es decir pasado cuántos días se puede aplicar este pronto pago o directamente como es lo más habitual el tanto por ciento del pronto pago que aplicaremos sobre este término de pago si es un 2% colocaremos el 2%</li>
	</ul>
	<div class="img-content2">
	<img src="img/termpago2.PNG" alt="">
	</div>

	<p class="parrafo">Paso 5 del Procedimiento:</p>
	<div class="img-content">
	<img src="img/termpago1.PNG" alt="">
	</div>
	<p class="parrafo">de esta manera hemos concluido la configuración de un nuevo término de pago.</p>
	<p class="parrafo">Videotutorial Como configurar términos de pago.</p>
	<iframe class="ifra" src="https://www.youtube.com/embed/Jfp8v2GlUzg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 

	`;

	cuerpo.innerHTML= contenido;

}
/*=======================
Pago Proveedores
============================*/

let pagoProveedores = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Pago Proveedores</h2>
	<p class="parrafo">En Business Central, puede pagar a un proveedor mediante pagos electrónicos. Los pagos se exportarán a un archivo, que luego se transferirá al banco. Después, el banco transfiere los pagos de manera electrónica de su cuenta de banco a la cuenta de banco del beneficiario (proveedor).</p>
	<ul>
	<li><b>1.</b> En el icono de la lupa, escribimos <b>Diario de Pagos</b>.</li>
	<li><b>2.</b> En el campo <b>Nombre Sección </b> seleccionamos <b>Generales</b>.</li>
	<li><b>3.</b> Seleccionamos  <b>Preparar </b>, luego <b>Proponer pago proveedores</b>.</li>
	<li><b>4.</b> En  <b>importe Disponible</b>  Colocamos la cantidad de dinero que disponemos para pagar a los proveedore. <br>
	Los Pagos a proveedores se ejecutaran de acuerdo al orden de prioridad que tenga cada uno.
	</li>
	<li><b>5.</b> Para ver un informe de prueba de la cantidad de pagos pendientes, seleccionamos <b>Acciones</b> apartado <b>Registro</b> y lugo en <b>Informe prueba, Vista previa</b>, <br>
	Se nos abrira un reporte donde nos muestra  la cantidad que se debe en los pagos a proveedores. </li>
	<li><b>6.</b> El reporte tenemos la opción de poder imprimirlo.</li>
	<li><b>7.</b> Despues  <b>Proceso </b>, <b>Liquidar movimientos</b>, se nos abrira una venta con varias facturas por pagar.</li>
	<li><b>8.</b> <b>Proceso</b>, <b>Marcar id de liquidación</b>, aceptamos.</li>
	<li><b>9.</b> <b>Registrar e imprimir</b>, <b>Registrar</b>, aceptamos.</li>
	</ul>
	<div class="img-content2">
	<img src="img/pagoprovee.PNG" alt="">
	</div>
	<br>
	<div class="img-content2">
	<img src="img/pagoprovee1.PNG" alt="">
	</div><br>
	<div class="img-content2">
	<img src="img/pagoprovee2.PNG" alt="">
	</div><br>
	<p class="parrafo">Videotutorial como relizar pago a proveedores.</p>
	<iframe  class="ifra" src="https://www.youtube.com/embed/qbep1nVv91U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

	`;

	cuerpo.innerHTML= contenido;

}
/*==============
Pago Clientes
================*/

let pagoCliente = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Registro de pagos de Clientes</h2>
	<p class="parrafo">Dependiendo de las necesidades de su negocio, puede recibir pagos y registrar un pago de diferentes maneras: manualmente, automáticamente y a través de servicios de pago.</p>
	<p class="parrafo">Puede procesar los pagos directamente desde la tarjeta del cliente. Utilice la acción <b>Registrar pagos de clientes</b> para obtener una descripción general de las facturas pendientes de pago de ese cliente. Luego, marque la factura como pagada parcialmente o en su totalidad. Esta conciliación de pagos procesa los pagos de sus clientes al hacer coincidir los montos recibidos en su cuenta bancaria con las facturas de ventas no pagadas relacionadas y luego registra los pagos.</p>
	<p class="parrafo">En entornos comerciales donde el cliente paga algún tiempo después de la entrega, de acuerdo con las condiciones de pago, una factura de venta registrada permanece abierta (sin pagar) hasta que el departamento de Cuentas por cobrar verifica que se recibió el pago y lo aplica a la factura de venta registrada.</p>
	<p class="parrafo">En entornos comerciales donde el cliente paga de inmediato, por ejemplo, mediante PayPal o en efectivo, el pago se registra inmediatamente cuando registra la factura de venta, es decir, la factura de venta registrada se cierra como totalmente aplicada. Seleccione el método relevante en el campo <b>Código de método de pago</b> en la orden de venta. Para pagos electrónicos, como PayPal, también debe completar el campo <b>Servicio de pago</b>.</p>
	<p class="parrafo"><b>Nota</b><br>Si desea enviar a sus clientes recordatorios de pagos vencidos, primero debe configurar niveles y términos de recordatorio. Obtenga más información en Configurar términos y niveles de recordatorio .</p>
	<p class="parrafo">Para registrar un cobro a un cliente se debe seguir los siguientes pasos: </p>
	<ul>
	<li><b>1.</b> En el icono de busqueda,  ingrese  <b>Diario Recibo de efectivo</b> y luego elija el enlace relacionado.  <br>
	<li><b>2.</b> En la página diario de recibo de efectivo rellenamos los campos.</li>
	<li><b>3.</b>  En <b>Tipo de documento</b> ponemos pago.</li>
	<li><b>4.</b> En <b>Nº documento</b> Podemos Poner <b> Cobro 1</b>.</li>
	<li><b>5.</b> En <b>Tipo Mov</b> debe ser <b> Cliente.</b></li>
	<li><b>6.</b> En el campo <b>Nº cuenta </b> el ID del cliente.</li>
	<li><b>7.</b>  En el campo <b>tipo contrapartida</b> podemos elegir (cuenta, banco).</li>
	<li><b>8.</b> Una vez rellenado los campos le damos click en <b> Proceso </b> y luego <b> </b></li>
	<li><b>9.</b> En la página movimientos del clientes, seleccionamos la factura que deseamo pagar, <b>Proceso</b> y luego <b>marcar id liquidación </b>, seleccionadas las facturas a pagar le damos  <b>Aceptar</b>.</li>
	<li><b>10.</b> Nuevamente en la página <b>Diarios de recibo de efectivo</b> podemos ver una una vista previa del registro que se realizaran en <b> Registrar e imprimir</b> y <b>Vista previa del registro</b></li>
	<li><b>11.</b> Para Finalizar le damos <b>Registrar e imprimir</b> <b> Registrar</b> y <b>Aceptar</b>. <br>
	Para ver el movimiento contable entramos en la ficha del cliente, <b>Acciones , Relacionado, Historial</b>y <b>Movimientos</b>.</li>
	</ul><br>
	<p class="parrafo">Campos de la pagina Diario Recibo de efectivo rellenados. </p>
	<div class="img-content2"><img src="img/pagoCli.PNG" alt=""></div>
	<p class="parrafo">Seleccionar la factura que se realizara el cobro.</p>
	<div class="img-content2"><img src="img/pagoCli1.PNG" alt=""></div>
	<p class="parrafo">Vista previa de los movimientos contables que se ejecutaran.</p>
	<div class="img-content"><img src="img/pagoCli2.PNG" alt=""></div>
	<p class="parrafo">Vista del historial de movimientos contables del cliente.</p>
	<div class="img-content2"><img src="img/pagoCli3.PNG" alt=""></div>

	<p class="parrafo">Videoutorial como registrar un pago de un cliente.</p>
	<iframe class="ifra" src="https://www.youtube.com/embed/1nKziXuV9GY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	<br>
	<p class="parrafo">Videotutorial Liquidar movimientos de clientes ya registrados en Business Central.</p>
	<iframe  class="ifra" src="https://www.youtube.com/embed/DCAtOLlcAzo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	`;

	cuerpo.innerHTML= contenido;

}
/*=======================
Pagos Directo Sepa
========================*/
let pagoSepa = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `

	<h2 class="Subtitulos">Cobrar Pagos con Débito Directo SEPA</h2>
	<p class="parrafo">Cuando llega la hora de gestionar facturas cualquier ayuda es bienvenida, ¿verdad?</p>
	<p class="parrafo">Si eres autónomo o autónoma, los conceptos ‘recibo domiciliado’,  ‘remesas bancarias’ o ‘ficheros SEPA’ ya te tienen que sonar de algo. Pero, si todavía no has oído hablar de ellos, lee el siguiente articulo.</p>
	<p class="parrafo">Para ser más eficaces, hay muchas tareas habituales que podemos delegar en un sistema de gestión empresarial.</p>
	<p class="parrafo">Según la modalidad de cobro que utilices, las remesas bancarias o ficheros SEPA te permitirán gestionar y automatizar las operaciones de pago o de cobro a tus clientes de una forma mucho más cómoda. </p>
	<h3>¿Qué son las remesas bancarias?</h3>
	<p class="parrafo">Una remesa bancaria es un documento financiero, compuesto de uno o varios recibos domiciliados pendientes de pago, que tiene como objetivo liquidar una compraventa de un producto o servicio, y que entregamos a nuestro banco para su gestión.</p>
	<p class="parrafo">Pongamos un <b>ejemplo</b>  para que quede más claro.</p>
	<p class="parrafo">Imagina que tienes 100 clientes y para cada uno de ellos tienes que emitir una factura con el cobro mensual de tu servicio. En vez de realizar cada cobro por separado, envías un fichero al banco con todos los datos necesarios, y ellos se encargan de todo el procedimiento.</p>
	<p class="parrafo">Esta práctica es mucho más rápida que realizar manualmente el cobro de cada una de las facturas.</p>
	<h3>¿Qué es la normativa SEPA?</h3>
	La normativa SEPA (<a href="https://www.sepaesp.es/sepa/es/">Single Euro Payment Area</a>) es la directiva que establece qué estructura debe tener una remesa. Esta normativa, aprobada en febrero de 2014 y en la que se acogen 34 países, se compone de una serie de normas estándar para facilitar y armonizar los trámites de compraventa.
	<p class="parrafo"></p>
	<p class="parrafo">Todos los ficheros de remesas bancarias tienen que adaptarse obligatoriamente a la normativa SEPA. </p>
	<p class="parrafo">Por ello, deberás tramitar una autorización (mandato), firmada por el deudor con el consentimiento al banco para cargar cobros en su cuenta bancaria. Puede ser para un pago recurrente o puntual, y caduca 36 meses después del último pago.</p>
	<p class="parrafo">Si no tienes un mandato SEPA firmado, las operaciones constarán como no autorizadas y el cliente puede devolver los recibos durante 13 meses. </p>
	<h3>¿Cuándo es útil generar ficheros SEPA?</h3>
	<p class="parrafo">Si tienes clientes que compran de forma recurrente o das un servicio que se cobra en una cuota mensual, este tipo de fichero es muy interesante ya que ahorras el tiempo de gestión de cada una de las facturas de tus clientes y te aseguras de recibir el dinero en la fecha pactada. </p>
	<p class="parrafo">Aunque este proceso también se puede hacer introduciendo manualmente los datos de cobro en la web de tu banco, puede resultar muy tedioso cuando tienes que repetirlos cada mes.</p>
	<p class="parrafo">Con el consentimiento de su cliente, puede cobrar los pagos directamente de la cuenta bancaria del cliente según el formato SEPA.</p>
	<p class="parrafo">Primero, configure el formato de exportación del archivo bancario que le indica a su banco que realice un débito directo. Luego, configure el método de pago del cliente. Por último, configure el mandato de domiciliación bancaria que refleje su acuerdo con el cliente para cobrar sus pagos en un determinado período de acuerdo.</p>
	<p class="parrafo">Para indicarle al banco que transfiera el monto del pago de la cuenta bancaria del cliente a la cuenta de su empresa, cree una entrada de cobro de débito directo, que contiene información sobre las cuentas bancarias, las facturas de venta afectadas y el mandato de débito directo. Luego, exporta un archivo XML basado en la entrada de cobro, que envía a su banco para su procesamiento. Cualquier pago que no haya podido procesarse le será comunicado por su banco y deberá rechazar manualmente los asientos de cobro domiciliados en cuestión.</p>
	<p class="parrafo">Puede configurar códigos de ventas de clientes estándar con el método de pago de domiciliación bancaria y la información del mandato. A continuación, puede utilizar Crear cliente estándar. Trabajo por lotes de facturas para generar varias facturas de venta con la información de domiciliación precargada. Esto se puede hacer de forma manual o automática, según la fecha de vencimiento del pago.</p>

	<p class="parrafo">Cuando los pagos se procesan con éxito, según lo comunicado por su banco, puede publicar los recibos de pago directamente desde Direct Debit Collect. Asientos o moviendo las líneas de pago al diario donde registra los recibos de pago, como la página Diario de recibos de efectivo . Alternativamente, dependiendo de su proceso de administración de efectivo, puede esperar y simplemente aplicar los pagos como parte de la conciliación bancaria.</p>
	<p class="parrafo"><b>Nota</b><br>Para cobrar pagos mediante Débito Directo SEPA, la moneda de la factura de venta debe ser el EURO.</p>
	<h3>Configuración de Débito Directo SEPA</h3>
	<p class="parrafo">Desde la página de <b>Órdenes de domiciliación de adeudo directo SEPA</b> , puede exportar instrucciones a su banco electrónico para realizar un cobro por débito directo de la cuenta bancaria del cliente a su cuenta bancaria según el formato de Débito Directo SEPA.</p>
	<p class="parrafo">Para habilitar la exportación de formatos de archivos bancarios que no se admiten de fábrica en Business Central, puede configurar una definición de intercambio de datos utilizando el marco de intercambio de datos. Para obtener más información, consulte <a href="https://learn.microsoft.com/en-us/dynamics365/business-central/across-how-to-set-up-data-exchange-definitions">Configurar definiciones de intercambio de datos</a>.</p>
	<p class="parrafo">Antes de que pueda procesar pagos de clientes electrónicamente mediante la exportación de instrucciones de domiciliación bancaria en el formato de domiciliación bancaria SEPA, debe realizar los siguientes pasos de configuración:</p>
	<div class="contentList">
	<ul>
	<li>Configure el formato de exportación del archivo bancario que le indica a su banco que realice un cobro por débito directo de la cuenta bancaria del cliente a su cuenta bancaria.</li>
	<li>Configurar el método de pago del cliente.</li>
	<li>Configure el mandato de domiciliación bancaria que refleje su acuerdo con el cliente para cobrar sus pagos en un determinado período de acuerdo.</li>
	</ul>
	</div>
	<h3>Para configurar su cuenta bancaria para débito directo SEPA</h3>
	<ul>
	<li><b>1.</b> Elija el icono de busqueda, ingrese <b>Cuentas bancarias</b> y luego elija el enlace relacionado.</li>
	<li><b>2.</b> Abra la cuenta bancaria que desea utilizar para la domiciliación bancaria.</li>
	<li><b>3.</b> En la ficha desplegable Transferir, en el campo <b> Formato de eportación de débito directo SEPA</b>, elija la opción para débito directo SEPA.</li>
	<li><b>4.</b> Rellenar Los campos <b>Código SWIFT</b>, <b>IBAN</b>, <b>Nº acreedor</b>.</li>
	<li><b>5.</b> Guardamos los cambios.</li>
	</ul>
	<div class="img-content2"><img src="img/sepa1.PNG" alt=""></div>
	<h3>Para configurar el método de pago del cliente para débito directo SEPA</h3>

	<ul>
	<li><b>1.</b> Elija el icono de busqueda, ingrese <b>Métodos de pago</b> y luego elija el enlace relacionado.</li>
	<li><b>2.</b> Elija la accción <b>Nuevo</b>.</li>
	<li><b>3.</b> Configura un método de pago. Rellene los campos específicos de domiciliación bancaria como se describe en la siguiente tabla. <br>
	<table class="tabla1">
	<tr>
	<th>Campo</th>
	<th>Descripción</th>
	</tr>
	<tr>
	<td>Débito directo</td>
	<td>Especificar si el método de pago es para cobro domiciliado SEPA.</td>
	</tr>
	<tr>
	<td>Pago por Débito Directo Términos Código</td>
	<td>Especifique las condiciones de pago, como NO PAGAR, que se muestran en las facturas de venta que se pagan con débito directo SEPA para indicar al cliente que el pago se cobrará automáticamente. Alternativamente, deje el campo vacío.</td>
	</tr>
	</table><br>
	<p class="parrafo"><b>Nota <br></b>No ingrese un valor en <b>Bal. Campo de número de cuenta</b>.</p>

	<div class="img-content2"><img src="img/sepa2.PNG" alt=""></div>

	</li>
	<li><b>4.</b> Elija El Boton <b>Aceptar</b> para cerrar la página <b>Formas de Pago</b>.</li>
	<li><b>5.</b> Elija el icono de busqueda, ingrese <b>Clientes</b> y luego elija el enlace relacionado.</li>
	<li><b>6.</b> Abra la tarjeta de cliente para el cliente que desea configurar el cobro de domicialiación bancaria Sepa.</li>
	<li><b>7.</b> Elija el campo <b>Código de método de pago</b> y luego seleccione el código de método de pago que especificó en el paso 3. <br>
	<div class="img-content2"><img src="img/sepa3.PNG" alt=""></div>
	</li>
	<li><b>8.</b> Repita los pasos 6 y 7 para todos los clientes que desee configurar para el cobro de domiciliación bancaria SEPA.</li> 
	</ul>

	<h3>Para configurar el mandato de domiciliación bancaria que representa el contrato de cliente</h3>
	<ul>
	<li><b>1.</b> Elija El icono de busqueda, ingrese <b>Clientes</b> y luego elija el enlace relacionado.</li>
	<li><b>2.</b> Abra la tarjeta del cliente que desea configurar para domiciliaciones SEPA.</li>
	<li><b>3.</b> Elija la acción <b>Cuentas Bancarias</b>.</li>
	<li><b>4.</b> En la página <b>Lista de cuentas bancarias del cliente</b> , seleccione la cuenta bancaria del cliente que utilizará débitos directos y luego elija la acción <b>Mandatos de débito directo</b>.</li>
	<li><b>5.</b> En la página de <b>Mandatos de Débito Directo SEPA</b>, complete los campos como se describe en la siguiente tabla. <br>
	<table class="tabla1">
	<tr>
	<th>Campo</th>
	<th>Descripción</th>
	</tr>
	<tr>
	<td>Código de cuenta bancaria del cliente</td>
	<td>Especifica la cuenta bancaria de la que se cobran los pagos de domiciliación bancaria. Este campo se llena automáticamente.</td>
	</tr>
	<tr>
	<td>Válida desde</td>
	<td>  Especifique la fecha en que comienza el mandato de domiciliación bancaria.</td>
	</tr>
	<tr>
	<td>Válido hasta</td>
	<td>Especifique la fecha en que finaliza el mandato de domiciliación bancaria.</td>
	</tr>
	<tr>
	<td>Fecha de la firma</td>
	<td>Especifique la fecha en que el cliente firmó el mandato de domiciliación.</td>
	</tr>
	<tr>
	<td>Tipo de secuencia</td>
	<td>Especifique si el acuerdo cubre múltiples ( recurrentes ) o un cobro único (único ) por domiciliación bancaria.</td>
	</tr>
	<tr>
	<td>Número esperado de débitos</td>
	<td>Especifique cuántos cobros domiciliados espera realizar. Este campo solo es relevante si seleccionó Recurrente en el campo Tipo de secuencia .</td>
	</tr>
	<tr>
	<td>Contador de débito</td>
	<td>Especifique cuántos cobros domiciliados espera realizar. Este campo solo es relevante si seleccionó Recurrente en el campo Tipo de secuencia .</td>
	</tr>
	<tr>
	<td>Obstruido</td>
	<td>  Especificar que los cobros por domiciliación no se pueden realizar mediante este mandato de domiciliación.</td>
	</tr>
	</table>
	<br>
	<div class="img-content2"><img src="img/sepa4.PNG" alt=""></div>

	</li>
	<li><b>6.</b> Repita los pasos del 1 al 5 para todos los clientes que desee configurar para domiciliaciones SEPA.</li>
	</ul>
	<p class="parrafo">Videotutorial pagos con débito directo SEPA</p>
	<iframe class="ifra" src="https://www.youtube.com/embed/qas42ZTBjKc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

	`;

	cuerpo.innerHTML= contenido;

}
/*=======================
Cartera de pagos y cobros
==========================*/
let carterapagos = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Cartera  de pagos</h2>
	<p class="parrafo">En Dynamics 365 Business Central, los pagos recibidos de los clientes se registran en el recibo de cobro, que se registra en la contabilidad, el banco, el cliente, el proveedor y las cuentas de activos fijos. Puede aplicar el pago a una o varias entradas del Debe cuando se contabiliza el pago o puede aplicar desde las entradas contabilizadas más tarde.</p>
	<p class="parrafo">Los pagos a proveedores se crean y registran en el diario de pagos. El diario de pagos es un diario general que se optimiza para realizar pagos e incluye varias funciones e informes potentes como la función Proponer pagos a proveedores que encuentra los pagos del proveedor vencidos y el informe Proveedor - Pagos por periodos que muestra una visión general de pagos de proveedor pendientes.</p>
	<p class="parrafo">El módulo Cartera permite utilizar documentos específicos, como letras de cambio y pagarés, para administrar pagos de clientes y proveedores.</p>
	<p class="parrafo">El módulo Cartera se puede utilizar para administrar transacciones efectuadas con diferentes unidades financieras, en función de:</p>
	<div class="contentList">
	<ul>
	<li>Tipo de documento</li>
	<li>Coste</li>
	<li>Límite de crédito</li>
	</ul>
	</div>
	<p class="parrafo">Los saldos se conservan en la divisa local y original.</p>
	<p class="parrafo">El módulo Docs. cartera a cobrar permite administrar las facturas generadas a partir de facturas de ventas. Los documentos se pueden administrar por:</p>
	<div class="contentList">
	<ul>
	<li>Fecha de vencimiento</li>
	<li>Banco</li>
	<li>Valor</li>
	<li>Tipo de Documento</li>
	<li>Divisa</li>
	</ul>
	</div>
	<p class="parrafo">Mediante el <b>Diario Cartera</b> se pueden crear facturas manualmente. También se puede utilizar el módulo Docs. cartera a cobrar para administrar todas las facturas de ventas que la empresa proporciona a una entidad de factoring.</p>
	<h3>Videotutorial  Business Central - Diario Cartera Cobros y Pagos </h3>
	<iframe class="ifra" src="https://www.youtube.com/embed/Qhtv-_gT8x0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	<h3>Remesas</h3>
	<p class="parrafo">Mediante el módulo Docs. cartera a cobrar, se pueden administrar remesas y remesas de descuento en la divisa local u original.</p>
	<p class="parrafo">Existen diferentes criterios para agrupar documentos en una remesa. Se pueden agrupar documentos girados para el mismo cliente, se pueden agrupar documentos que tengan la misma fecha de vencimiento, documentos girados en la misma plaza, etc. Pueden agruparse en una remesa uno o más documentos a cobrar.</p>
	<p class="parrafo">Una remesa se compone de uno o varios documentos que se agrupan para su entrega a un banco. Se puede enviar al cobro o descuento.</p>
	<p class="parrafo">Si se envían al cobro, el banco sólo es responsable de procesar el cobro de los documentos en la fecha de vencimiento.</p>
	<p class="parrafo">Si la remesa se envía al descuento, el banco avanzará el importe de la remesa (o una parte de este, en el caso de factoring) a la empresa y será responsable de cobrar en las fechas de vencimiento de los documentos que forman la remesa.</p>
	<p class="parrafo">Una remesa de facturas se puede enviar a una entidad de crédito (factor) para factoring con recurso (la empresa cubre el riesgo de insolvencia) o factoring sin recurso (el factor cubre el riesgo de insolvencia).</p>
	<p class="parrafo">Las remesas incluyen:</p>
	<div class="contentList">
	<ul>
	<li>Administración de intereses al cobro o descuento</li>
	<li>Intereses de facturas devueltas</li>
	<li>Interés al descuento</li>
	</ul>
	</div>
	<p class="parrafo">Con el módulo Docs. cartera a cobrar, se pueden proporcionar créditos o factoring de remesas de facturas de ventas, incluido el cálculo de intereses de la entidad de factoring. Se puede solicitar el valor anticipado de las facturas proporcionadas o sólo la administración del cobro.</p>
	<p class="parrafo">Se pueden utilizar remesas para:</p>
	<div class="contentList">
	<ul>
	<li>Factoring sin recurso: la entidad de factoring asume los riesgos asociados con el no-pago.</li>
	<li>Factoring con recurso: usted asume los riesgos asociados con el no-pago.</li>
	</ul>
	</div>
	<h3>Videotutorial gestión de Remesas y Cobros</h3>
	<iframe class="ifra" src="https://www.youtube.com/embed/5nVFMTo8lMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	<h3>Aplicar pagos</h3>
	<p class="parrafo">Cuando reciba el cobro de un cliente o pague a un proveedor, debe decidir si desea que se aplique el pago para cerrar uno o más movimientos abiertos de débito o de crédito. Puede especificar el importe que desee aplicar.
	Por ejemplo, puede aplicar pagos parciales a los movimientos de cliente. Cerrar los movimientos de cliente y de proveedor garantiza que la información, como estadísticas de cliente y proveedor, extractos de cuenta e intereses, es correcta.</p>
	<p class="parrafo">Puede aplicar los movimientos de cliente y de proveedores de varias formas:</p>
	<div class="contentList">
	<ul>
	<li>Introduciendo información en ventanas específicas, como Diario cobros, Diario de pagos y Diario de conciliación de pagos</li>
	<li>Desde documentos de abono de venta</li>
	<li>Desde movimientos de cliente y de proveedores, después de que los documentos de venta se hayan registrado pero no se hayan aplicado</li>
	</ul>
	</div>
	<p class="parrafo">Entre las formas en las que puede aplicar los movimientos de cliente y de proveedores, se incluyen:</p>
	<div class="contentList">
	<ul>
	<li>Aplicar un pago a un único movimiento de cliente o de proveedores</li>
	<li>Aplicar un pago a varios movimientos de cliente o de proveedores</li>
	<li>Aplicar movimientos registrados de cliente o de proveedores</li>
	<li>Corregir una aplicación de los movimientos de cliente o de proveedores</li>
	</ul>
	</div>
	<p class="parrafo">Los siguientes pasos usan como ejemplo clientes en el diario de cobros, pero se pueden aplicar las mismas funciones a los diarios de pagos de proveedores.</p>
	<p class="parrafo">Para aplicar un pago a un único movimiento de cliente, siga estos pasos:</p>
	<ul>
	<li><b>1.</b> Seleccione el icono <b> Buscar página</b> en la esquina superior derecha de la página, introduzca <b>diarios de recibos de efectivo</b> y, a continuación, seleccione el vínculo correspondiente.</li>
	<li><b>2.</b> Seleccione la acción Editar diario.</li>
	<li><b>3.</b> En la primera línea del diario, especifique la información pertinente sobre el movimiento a aplicar.</li>
	<li><b>4.</b> En el campo <b>Tipo de documento</b>, introduzca <b>Pago</b>.</li>
	<li><b>5.</b> En el campo <b>Tipo de cuenta</b>, introduzca <b>Cliente</b>.</li>
	<li><b>6.</b> En el campo <b>Tipo de cuenta de contrapartida</b>, introduzca <b>Banco</b>.</li>
	<li><b>7.</b> En el campo <b>Se aplica al N.º documento</b>, seleccione el campo para abrir la página  <b>Aplicar movimientos de cliente</b>.</li>
	<li><b>8.</b> En la página <b>Aplicar movimientos de cliente</b>, seleccione el movimiento para aplicar el pago. <br>
	<div class="img-content2"><img src="img/cartera1.PNG" alt=""></div>

	</li>
	<li><b>9.</b> En el campo <b>Importe a aplicar</b>, introduzca el importe que desea aplicar al movimiento. Si no especifica un importe, se aplica el importe máximo. <br>
	En la parte inferior de la página <b>Aplicar movimientos de cliente</b>, puede ver el importe específico en el campo <b>Importe aplicado</b> y si aplicación se compensa.
	</li>
	<li><b>10.</b> Haga clic en el botón <b>Aceptar</b>. La página <strong>Diario de cobros</strong>  ahora muestra el movimiento que ha seleccionado como se introdujo en los 
	campos <b>Se aplica al tipo de documento</b> y <b>Se aplica al n.º documento</b>. <br>
	<div class="img-content2"><img src="img/cartera2.PNG" alt=""></div>

	</li>
	<li><b>11.</b> Registrar el diario de cobros. <br>
	<div class="img-content2"><img src="img/cartera3.PNG" alt=""></div>
	</li>
	</ul>
	<h3>Desliquidar movimientos de clientes y proveedores</h3>
	<p class="parrafo">Cuando corrige una liquidación, se crean y registran movimientos correctores idénticos a los originales pero con el signo opuesto en el campo de 
	importe para todos los movimientos, incluido cualquier registro en la contabilidad que se derive de la liquidación, como descuento por pronto pago y pérdidas/ganancias 
	por cambio de divisa. Los movimientos cerrados por la liquidación se abren de nuevo.</p>
	<p class="parrafo">Para desliquidar movimientos de clientes, siga estos pasos:</p>
	<ul>
	<li><b>1.</b> Seleccione el icono Buscar página en la esquina superior derecha de la página, escriba <b>clientes</b> y luego elija el vínculo relacionado.</li>
	<li><b>2.</b> Abra la ficha de cliente correspondiente.</li>
	<li><b>3.</b> Seleccione la acción <b>Movimientos</b>.</li>
	<li><b>4.</b> Seleccione el movimiento que corresponda y, a continuación, seleccione la acción <b>Desliquidar movs</b>.</li>
	<li><b>5.</b> Como alternativa, seleccione la acción <b>Movimiento detallado</b>.</li>
	<li><b>6.</b> Seleccione el movimiento de liquidación y, a continuación, seleccione la acción <b>Desliquidar movs</b>.</li>
	<li><b>7.</b> Rellene los campos del encabezado y, a continuación, seleccione la acción <b>Desliquidar</b>.</li>
	</ul>
	<p class="parrafo">Como resultado, Business Central crea nuevos movimientos detallados de cliente que abrirán de nuevo el movimiento de cliente cerrado.</p>
	<div class="img-content2"><img src="img/cartera4.PNG" alt=""></div>
	<h3>Procesar registros de pago</h3>
	<p class="parrafo">Cuando sus clientes hayan realizado pagos a su cuenta bancaria electrónica, debe aplicar cada importe pagado al documento de ventas relacionado y 
	luego el pago para actualizar los movimientos de clientes, de contabilidad general y de banco. En función de sus necesidades de negocio, puede recibir pagos y registrar 
	ese pago de diferentes maneras: de forma manual, automática y mediante servicios de pago.</p>

	<p class="parrafo">La página <b>Registrar pagos de clientes</b> está diseñada para ayudarlo en las tareas relacionadas con el equilibrio de las cuentas internas mediante
	el uso de cifras de efectivo reales para asegurarse de que los pagos se cobren de manera eficiente a los clientes. Esta herramienta de procesamiento de pagos le permite 
	comprobar y registrar rápidamente pagos individuales o de suma global, procesar pagos con descuento y encontrar documentos impagados específicos para los cuales se realiza el 
	pago.</p>
	<p class="parrafo">Los pagos para diferentes clientes con distintas fechas de pago deben registrarse como pagos individuales. Los pagos para el mismo cliente que tienen la misma 
	fecha de pago se pueden registrar como un pago de suma global. Esto es útil, por ejemplo, cuando un cliente ha realizado un solo pago que cubre varias facturas de venta.</p>
	<h3>Registrar pagos de cliente</h3>
	<p class="parrafo">Si desea registrar rápidamente un pago de un cliente, puede abrir la página <b>Registrar pagos de clientes</b> en las páginas <b>Clientes</b> y <b>Ficha cliente</b> donde se filtra automáticamente para el cliente especificado. Para obtener acceso a la página Registrar pagos de cliente en la lista de clientes, seleccione <b>Proceso</b> y, a continuación, <b>Registrar pagos de cliente</b> .</p>
	<div class="img-content2"><img src="img/cartera5.png" alt=""></div>
	<p class="parrafo">Si desea registrar pagos de varios clientes, también puede abrir la página Registrar pagos de cliente para mostrar todos los documentos registrados para los que se puede registrar un pago siguiendo estos pasos:</p>
	<ul>
	<li><b>1.</b> Seleccione el icono Buscar página en la esquina superior derecha de la página, escriba <b>registrar pagos de cliente</b> y luego elija el vínculo relacionado.</li>
	<li><b>2.</b> Seleccione la opción <b>Pago realizado</b>  en la línea que representa el documento registrado para el que se ha realizado un pago. Si la opción Rellenar <b>fecha recepción automática</b> está seleccionada en la página <b>Configuración de registro de pago</b>, la fecha de trabajo se introduce en el campo <b>Fecha de recepción</b>.</li>
	<li><b>3.</b> En el campo <b>Fecha de recepción</b>, introduzca la fecha en que se realizó el pago. Esta fecha puede ser diferente a la fecha de trabajo.</li>
	<li><b>4.</b> En el campo <b>Importe recibido</b>, introduzca el importe que se ha pagado. Para pagos completos, este es el mismo que el importe del campo <b>Importe pendiente</b> de la línea. Para pagos parciales, este inferior que el importe del campo Importe pendiente de la línea.</li>
	<li><b>5.</b> Repita los pasos del 2 al 4 para otras líneas que representan documentos registrados para los que se realizan pagos.</li>
	<li><b>6.</b> Elija <b>Registrar pagos</b> para registrar los pagos.</li>
	</ul>
	<div class="img-content2"><img src="img/cartera6.PNG" alt=""></div>
	<p class="parrafo">La información de pago se registra para documentos representados por líneas donde la opción Pago realizado está seleccionada. Los movimientos de pagos se registran en la contabilidad general, el banco y las cuentas de los clientes. Cada pago se aplica al documento de venta registrado.</p>
	<p class="parrafo">Cuando desee registrar varios pagos para el mismo cliente que tienen la misma fecha de pago, puede registrarlos como un pago de suma total seleccionando la acción Registrar como pago total.</p>

	`;

	cuerpo.innerHTML= contenido;

}

	/*===========================
	Planificación de Almacenes
	===========================*/

let planificacionAlmacen = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Planificación de Almacenes</h2>
	<p class="parrafo">Las operaciones de producción requeridas para transformar los insumos en productos terminados deben planificarse diaria o semanalmente según el volumen y la naturaleza de los productos. Business Central ofrece funciones para satisfacer la demanda anticipada y real de ventas, ensamblaje y producción, así como funciones para la planificación de distribución utilizando unidades de almacenamiento y transferencias de ubicación.</p>
	<p class="parrafo"><b>Nota</b><br>Este tema describe principalmente la planificación para empresas involucradas en la gestión de fabricación o montaje, donde los pedidos de suministro resultantes pueden ser pedidos de producción, montaje, transferencia o compra. La interfaz principal para este trabajo de planificación es la página Hoja de trabajo de planificación .</p>
	<p class="parrafo">Business Central también admite la planificación del suministro para empresas mayoristas en las que los pedidos de suministro resultantes solo pueden ser pedidos de transferencia y compra. La interfaz principal para este trabajo de planificación es la página Hoja de trabajo de solicitud , que se describe indirectamente en este tema, ya que la mayoría de las funciones de planificación se aplican a ambas hojas de trabajo.</p>
	<p class="parrafo">La planificación puede verse como la preparación de las órdenes de suministro requeridas en los departamentos de compras, ensamblaje o fabricación para satisfacer la demanda de ventas o de artículos finales.</p>
	<p class="parrafo">La siguiente tabla describe una secuencia de tareas, con enlaces a los temas que las describen.</p>
	<table class="tabla1">
	<tr>
	<th>Descripción</th>
	<th>Ver</th>
	</tr>
	<tr>
	<td>Obtenga una breve introducción sobre cómo se puede utilizar el sistema de planificación para detectar y priorizar la demanda y sugerir un plan de suministro equilibrado.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/production-about-planning-functionality">Acerca de la funcionalidad de planificación</a></td>
	</tr>
	<tr>
	<td>Comprenda cómo funcionan todos los aspectos del sistema de planificación y cómo ajustar los algoritmos para cumplir con los requisitos de planificación en diferentes entornos.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/design-details-supply-planning">Detalles de diseño: planificación de suministro</a></td>
	</tr>
	<tr>
	<td>Aprenda cómo la lógica de planificación diferencia entre la demanda en las ubicaciones según la configuración de SKU y la demanda sin códigos de ubicación.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/production-planning-with-without-locations">Planificación con o sin ubicaciones</a></td>
	</tr>
	<tr>
	<td>Pronóstico de la demanda presentada por los componentes esperados de ventas y producción.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/production-how-to-create-a-forecast">Crear un pronóstico de demanda</a></td>
	</tr>
	<tr>
	<td>Cree órdenes de producción individuales o de proyecto a partir de una orden de venta para cubrir la demanda exacta de esa orden de venta.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/production-how-to-create-production-orders-from-sales-orders">Crear órdenes de producción a partir de órdenes de venta</a></td>
	</tr>
	<tr>
	<td>Utilice la página Planificación de pedidos para planificar manualmente la demanda de ventas o producción un nivel de BOM de producción a la vez.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/production-how-to-plan-for-new-demand">Plan para Nueva Demanda Orden por Orden</a></td>
	</tr>
	<tr>
	<td>Utilice la página Hoja de trabajo de planificación para ejecutar las opciones MPS y MRP para crear automáticamente un plan de suministro detallado o de alto nivel en todos los niveles de artículos.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/production-how-to-run-mps-and-mrp">Ejecute la planificación completa, MPS o MRP</a></td>
	</tr>
	<tr>
	<td>Utilice la página Hoja de trabajo de solicitud para crear automáticamente un plan de suministro detallado para cubrir la demanda de artículos que se reabastecen solo por compra o transferencia.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/production-about-planning-functionality#requisition-worksheet">Hoja de trabajo de solicitud</a></td>
	</tr>
	<tr>
	<td>Inicie o actualice una orden de producción como operaciones programadas aproximadas en el programa maestro de producción.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/production-how-to-replan-refresh-production-orders">Replanificar o actualizar órdenes de producción directamente</a></td>
	</tr>
	<tr>
	<td>Recalcular los calendarios de trabajo o centro de máquinas debido a cambios en la planificación.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/production-how-to-create-work-center-calendars#to-calculate-a-work-center-calendar">Para calcular un calendario de centro de trabajo</a></td>
	</tr>
	<tr>
	<td>Realice un seguimiento de la demanda del pedido (cantidad con seguimiento), la previsión, el pedido de venta abierto o el parámetro de planificación (cantidad sin seguimiento) que ha dado lugar a la línea de planificación en cuestión.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/production-how-track-demand-supply">Seguimiento de las relaciones entre la demanda y la oferta</a></td>
	</tr>
	<tr>
	<td>Vea el inventario disponible proyectado de un artículo en diferentes vistas y vea qué requisitos brutos, recibos de pedidos planificados y otros eventos influyen en él a lo largo del tiempo.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-availability-overview">Ver la disponibilidad de artículos</a></td>
	</tr>
	</table>
	<br>
	<p class="parrafo">¿Cuál es el nivel de almacén más adecuado para mi empresa en Business Central?</p>

	<p class="parrafo">Videotutorial Mejor almacén para  mi empresa</p>
	<iframe   class="ifra" src="https://www.youtube.com/embed/D96h9e4t9zU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

	`;

	cuerpo.innerHTML= contenido;

}
	/*===============================
	Administrar Inventario Almacén
	=================================*/
let administrarInventario = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Administrar Inventario</h2>
	<p class="parrafo">Para cada producto físico que intercambies, debes crear una ficha de artículo del tipo Inventario . Los artículos que ofrece a los clientes pero que no mantiene en inventario se pueden registrar como artículos de catálogo, que se pueden convertir en artículos de inventario cuando sea necesario. Puede aumentar o disminuir la cantidad de un artículo en el inventario registrándolo directamente en las entradas del libro mayor de artículos, como después de un conteo físico o si no registra compras.</p>
	<p class="parrafo">Los aumentos y disminuciones de inventario también se registran naturalmente cuando contabiliza documentos de compras y ventas, respectivamente. </p>
	<p class="parrafo">Las transferencias entre ubicaciones modifican las cantidades de inventario en los almacenes de su empresa.</p>
	<p class="parrafo">Para mejorar su visión general de los elementos y ayudarlo a encontrarlos, puede categorizarlos y asignarles atributos para buscarlos y ordenarlos.</p>
	<h3>Conciliación de inventario</h3>
	<p class="parrafo">Cuando registra transacciones de inventario, como envíos de ventas, facturas de compra o ajustes de inventario, los costos de artículos modificados se registran en entradas de valor de artículos. Para reflejar este cambio en el valor del inventario en sus libros financieros, los costos de inventario se registran automáticamente en las cuentas de inventario relacionadas en el libro mayor. Para cada transacción de inventario que registre, los valores apropiados se registran en la cuenta de inventario, la cuenta de ajuste y la cuenta COGS en el libro mayor.</p>
	<p class="parrafo">Aunque los costos de inventario se registran automáticamente en el libro mayor, aún es necesario asegurarse de que los costos de los bienes se transfieran a la transacción de venta saliente relacionada, especialmente en situaciones en las que vende bienes antes de facturar la compra de esos bienes. Esto se conoce como ajuste de costos. Los costos de los artículos se ajustan automáticamente cuando registra transacciones de artículos, pero también puede ajustar los costos de los artículos manualmente.</p>
	<h3>Tareas relacionadas con el inventario de almacén</h3>
	<p class="parrafo">En la tabla siguiente se describen las tareas relacionadas.</p>
	<table class="tabla1">
	<tr>
	<th>Descripción</th>
	<th>Ver</th>
	</tr>
	<tr>
	<td>Cree tarjetas de artículos para artículos de inventario que intercambie.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-register-new-items">Registrar nuevos artículos</a></td>
	</tr>
	<tr>
	<td>Estructura los artículos principales que vendes como kits que consisten en los componentes principales o que ensamblas por pedido o para almacenar.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-work-boms">Trabajar con listas de materiales</a></td>
	</tr>
	<tr>
	<td>Mantenga una visión general de los artículos y ayúdelo a encontrar y ordenar artículos organizándolos en categorías.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-categorize-items">Categorizar elementos</a></td>
	</tr>
	<tr>
	<td>Asigne atributos de artículos de diferentes tipos de valor a sus artículos para ayudarlo a ordenar y encontrar artículos.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-work-item-attributes">Trabajar con atributos de artículos</a></td>
	</tr>
	<tr>
	<td>Cree tarjetas de artículos especiales para los artículos que ofrece a los clientes pero que no mantiene en el inventario.</td>
	<td><a href="">Trabajar con elementos del catálogo</a></td>
	</tr>
	<tr>
	<td>Realice el conteo físico de su inventario con las páginas Orden de inventario físico y Registro de inventario físico.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-count-inventory-with-documents">Contar inventario usando documentos</a></td>
	</tr>
	<tr>
	<td>Realice conteos físicos, realice ajustes negativos o positivos y cambie información, como la ubicación o el número de lote, en las entradas del libro mayor de artículos.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-count-adjust-reclassify">Cuente, ajuste y reclasifique el inventario mediante diarios</a></td>
	</tr>
	<tr>
	<td>Vea la disponibilidad de artículos por ubicación, por período, por evento de compra o venta, o por su uso en listas de materiales (BOM) de ensamblaje o producción.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-availability-overview">Ver la disponibilidad de artículos</a></td>
	</tr>
	<tr>
	<td>Transfiera artículos de inventario entre ubicaciones mediante órdenes de transferencia, para administrar actividades de almacén o con el diario de reclasificación de artículos.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-transfer-between-locations">Transferir inventario entre ubicaciones</a></td>
	</tr>
	<tr>
	<td>Reserve inventario o artículos entrantes para órdenes de venta, órdenes de compra, órdenes de servicio, órdenes de ensamblado, órdenes de transferencia u órdenes de producción.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-to-reserve-items">Reservar artículos</a></td>
	</tr>
	<tr>
	<td>Configure el seguimiento de artículos para que pueda realizar un seguimiento de los números de serie de los artículos, por ejemplo, cuando necesite realizar un seguimiento de los artículos debido a las retiradas.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-setup-item-tracking">Configurar el seguimiento de artículos con números de serie, lote y paquete</a></td>
	</tr>
	<tr>
	<td>Asigne números de serie o números de lote a cualquier documento o línea de diario entrante o saliente.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-work-item-tracking">Trabajar con números de serie y de lote</a></td>
	</tr>
	<tr>
	<td>Encuentre dónde se utilizó cualquier número de serie o de lote en su cadena de suministro, como en situaciones de retiro.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-to-trace-item-tracked-items">Rastrear elementos: elementos rastreados</a></td>
	</tr>
	<tr>
	<td>Configure la descripción del artículo de un proveedor o cliente en su tarjeta de artículo para que pueda insertar rápidamente su descripción del artículo en los documentos comerciales.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-use-item-cross-refs">Usar referencias de elementos</a></td>
	</tr>
	<tr>
	<td>Administre operaciones comerciales en oficinas de ventas, departamentos de compras u oficinas de planificación de plantas en múltiples ubicaciones.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-responsibility-centers">Trabajar con centros de responsabilidad</a></td>
	</tr>
	<tr>
	<td>Utilice recursos con funciones específicas para varios servicios y elementos de servicio.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/service-how-setup-resource-allocation">Configurar asignación de recursos</a></td>
	</tr>

	</table>

	`;

	cuerpo.innerHTML= contenido;

}
	/*===========================
	Gestionn de Almacenes
	=========================*/
let gestionAlmacenes = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Gestion de Almacenes</h2>

	<p class="parrafo">Después de recibir los bienes y antes de enviarlos, se llevan a cabo una serie de actividades internas del almacén para garantizar un flujo efectivo a través del almacén y para organizar y mantener los inventarios de la empresa.</p>
	<p class="parrafo">Las actividades típicas del almacén incluyen guardar artículos, mover artículos dentro o entre almacenes y seleccionar artículos para ensamblaje, producción o envío. El ensamblaje de artículos para la venta o el inventario también pueden considerarse actividades de almacén, pero se tratan en otra parte</p>
	<p class="parrafo">En grandes almacenes, estas distintas tareas de manipulación pueden separarse por departamentos y la integración gestionarse mediante un flujo de trabajo dirigido. En instalaciones más sencillas, el flujo está menos formalizado y las actividades de almacén se realizan con las denominadas ubicaciones y selecciones de inventario.</p>
	<p class="parrafo">Antes de poder realizar actividades de almacén, debe configurar el sistema para la complejidad relevante del procesamiento de almacén</p>
	<p class="parrafo">Las tareas relacionadas con el inventario de contar, ajustar y reclasificar artículos pueden implicar tareas de almacén que se deben realizar en las entradas de almacén antes de que puedan sincronizarse con las entradas del libro mayor de artículos relacionados.</p>
	<p class="parrafo">La siguiente tabla describe una secuencia de tareas, con enlaces a los temas que las describen.</p>
	<table class="tabla1">
	<tr>
	<th>Descripción</th>
	<th>Ver</th>
	</tr>
	<tr>
	<td>Registre la recepción (incluida la recepción en exceso) de artículos en ubicaciones de almacén, ya sea solo con una orden de compra, en configuraciones de ubicación simples, o con un recibo de almacén, en caso de procesamiento de almacén semiautomático o totalmente automatizado en la ubicación.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/warehouse-how-receive-items">Recibir artículos</a></td>
	</tr>
	<tr>
	<td>Omita los procesos de ubicación y selección para acelerar un artículo directamente desde la recepción o la producción hasta el envío.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/warehouse-how-to-cross-dock-items">Artículos Cross-Docking</a></td>
	</tr>
	<tr>
	<td>Ubique los artículos recibidos de compras, devoluciones de ventas, transferencias o salida de producción de acuerdo con el proceso de almacén configurado.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/warehouse-put-away-items">Guardar artículos</a></td>
	</tr>
	<tr>
	<td>Mover artículos entre contenedores en el almacén.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/warehouse-move-items"> Mover elementos</a></td>
	</tr>
	<tr>
	<td>Seleccione artículos para enviar, transferir o consumir en ensamblaje o producción, de acuerdo con el proceso de almacén configurado.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/warehouse-pick-items">Recogiendo artículos</a></td>
	</tr>
	<tr>
	<td>Registre el envío de artículos desde ubicaciones de almacén, ya sea solo con una orden de venta, en configuraciones de ubicación simples, o con un envío de almacén, en el caso de procesos de almacén semiautomáticos o totalmente automatizados en la ubicación.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/warehouse-how-ship-items">Enviar artículos</a></td>
	</tr>
	</table><br>
	<p class="parrafo">Videotutorial Configuración de almacenes y gestión de inventario.</p>
	<iframe   class="ifra" src="https://www.youtube.com/embed/EL-X4VJ4KXM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

	`;

	cuerpo.innerHTML= contenido;

}
/*===================
	Crear Producto
	========================*/
let crearArticulo = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Registrar nuevos artículos</h2>
	<p class="parrafo">Los artículos, entre otros productos, son la base de su negocio, los bienes o servicios que comercia. Cada artículo debe registrarse como una ficha de artículo.</p>
	<p class="parrafo">Las tarjetas de artículos contienen la información necesaria para comprar, almacenar, vender, entregar y contabilizar los artículos.</p>
	<p class="parrafo">La ficha del artículo puede ser de tipo <b>Inventario</b> , <b>Servicio</b>  o <b>Sin inventario</b> para especificar si el artículo es una unidad de inventario físico, una unidad de tiempo de mano de obra o una unidad física que no se rastrea en el inventario.</p>
	<p class="parrafo">Si compra el mismo artículo de más de un proveedor, puede conectar esos proveedores a la ficha del artículo. Los proveedores aparecerán en la página Catálogo de proveedores de artículos , de modo que pueda seleccionar fácilmente un proveedor alternativo.</p>
	<p class="parrafo">Los artículos del catálogo son artículos que usted ofrece a sus clientes pero no desea administrarlos en su sistema hasta que comience a venderlos. Los artículos del catálogo no son artículos regulares del tipo <b>Sin inventario</b> .</p>
	<p class="parrafo"><b>Nota </b> <br> Si existen plantillas de artículos para diferentes tipos de artículos, aparecerá una página cuando cree una nueva tarjeta de artículo desde donde puede seleccionar una plantilla apropiada. Si solo existe una plantilla de artículo, las nuevas tarjetas de artículo siempre usan esa plantilla.</p>
	<p class="parrafo">El siguiente procedimiento explica cómo crear una ficha de artículo desde cero.</p>
	<h3>Para crear una nueva ficha de producto</h3>
	<ul>
	<li><b>1.</b> Elija el Icono de la lupa, escriba  Productos y luego elija el enlace relacionado.</li>
	<li><b>2.</b> En la página de articulos  , elija la acción <b>Nuevo</b>. <br>Si solo existe una plantilla de artículo, se abre una nueva tarjeta de artículo con algunos campos llenos de información de la plantilla.</li>
	<li><b>3.</b> En la página <b>Seleccionar una plantilla para un nuevo elemento</b> , elija la plantilla que desea usar para la nueva tarjeta de elemento.</li>
	<li><b>4.</b> Elija el botón <b>Aceptar</b> . Se abre una nueva tarjeta de artículo con algunos campos llenos de información de la plantilla.</li>
	<li><b>5.</b> Proceda a completar o cambiar los campos en la ficha del artículo según sea necesario. Pase el cursor sobre un campo para leer una breve descripción.</li>
	</ul>
	<div class="img-content2">
	<img src="img/arti1.PNG" alt="">
	</div>
	<p class="parrafo">Puede ver o editar precios especiales o descuentos que otorga, o que su proveedor le otorga, para el artículo si se cumplen ciertos criterios, como el cliente, la cantidad mínima de pedido o la fecha de finalización. Para ello, elija las acciones Establecer precios especiales o Establecer descuentos especiales . Cada fila en, por ejemplo, la página Precios de venta representa un precio especial. Cada columna representa un criterio que se debe aplicar para otorgar a un cliente el precio especial que ingresa en el campo Precio unitario en la página Precios de venta .</p>
	<p class="parrafo">El artículo ahora está registrado y la ficha del artículo está lista para usarse en los documentos de compra y venta.</p>
	<h3>Eliminación de fichas de artículos</h3>
	<p class="parrafo">Si registró una transacción para un artículo, no puede eliminar la tarjeta porque las entradas del libro mayor pueden ser necesarias para la valoración o auditoría del inventario. Para eliminar tarjetas de artículos con entradas de libro mayor, comuníquese con el socio de Microsoft para hacerlo a través del código.</p>
	<h3>Categorías, atributos y variantes</h3>
	<p class="parrafo">Las categorías y los atributos son dos formas diferentes de agrupar artículos de inventario. La variante del artículo es una forma de indicar que un artículo específico está disponible en diferentes colores o tamaños, por ejemplo. Dependiendo de cómo configure su inventario, puede usar categorías para agrupar sillas versus escritorios y luego usar atributos para agrupar artículos verdes versus artículos azules, por ejemplo. Luego puede complementar esta configuración agregando variantes para cada tipo de silla y escritorio. Al agregar variantes, puede ejecutar informes como Disponibilidad de artículos por variante para identificar las diferencias entre las sillas azules y las sillas verdes, por ejemplo.</p>
	<p class="parrafo">Para especificar sus atributos realizaremos los sisguientes pasos:</p>
	<ul>
	<li><b>1.</b> En la ficha del articulo seleccionamos <b>Producto</b>, <b>Atributos</b>.</li>
	<li><b>2.</b> Se nos abrira una ventana <b>Editar - Valores de atributo de producto</b></li>
	<li><b>3.</b> Rellenamos los campos <b>Atributo</b> y <b>Valor</b>.</li>
	<li><b>4.</b>Le damos <b>Aceptar</b>.</li>
	</ul>
	<p class="parrafo">Ventana Editar atributos.</p>
	<div class="img-content2">
	<img src="img/arti2.PNG" alt="">
	</div>
	<p class="parrafo">Ficha del articulo con sus atributos.</p>
	<div class="img-content2">
	<img src="img/arti3.PNG" alt="">
	</div>

	<p class="parrafo">Videotutorial Como crear un nuevo producto.</p>
	<iframe  class="ifra" src="https://www.youtube.com/embed/pDuSfIWPlO4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

	`;

	cuerpo.innerHTML= contenido;

}
/*==========
Compras
===========*/
let compras = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `

	<h2 class="Subtitulos">Compras</h2>
	<p class="parrafo">Crea una factura de compra o una orden de compra para registrar el costo de las compras y realizar un seguimiento de las cuentas por pagar. Si necesita controlar un inventario, las facturas de compra también se utilizan para actualizar dinámicamente los niveles de inventario para que pueda minimizar sus costos de inventario y brindar un mejor servicio al cliente. Los costos de compra, incluidos los gastos de servicio y los valores de inventario que resultan de la publicación de facturas de compra contribuyen a las cifras de ganancias y otros financieros en su área de trabajo.</p>
	<p class="parrafo">Debe usar órdenes de compra si su proceso de compra requiere que registre recibos parciales de una cantidad de pedido, por ejemplo, porque la cantidad total no estaba disponible con el proveedor. Si vende artículos entregándolos directamente de su proveedor a su cliente, como un envío directo, también debe usar órdenes de compra.</p>
	<p class="parrafo">Para obtener más información, consulte <a href="https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-drop-shipment"> Realizar envíos directos</a>. En todos los demás aspectos, las órdenes de compra funcionan de la misma manera que las facturas de compra.</p>
	<p class="parrafo">Puede hacer que las facturas de compra se creen automáticamente mediante el uso del servicio OCR (reconocimiento óptico de caracteres) para convertir las facturas en PDF de sus proveedores en documentos electrónicos, que luego se convierten en facturas de compra mediante un flujo de trabajo. Para usar esta funcionalidad, primero debe registrarse en el servicio OCR y luego realizar varias configuraciones. Para obtener más información, consulte  <a href="https://learn.microsoft.com/en-us/dynamics365/business-central/across-income-documents">Documentos entrantes</a>.</p>
	<p class="parrafo">Los productos pueden ser tanto artículos de inventario como servicios. Para obtener más información, consulte <a href="https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-register-new-items">Registrar elementos nuevos</a>.</p>
	<p class="parrafo">Para todos los procesos de compra, puede incorporar un flujo de trabajo de aprobación, por ejemplo, para exigir que el gerente de contabilidad apruebe las compras grandes. Para obtener más información, consulte <a href="https://learn.microsoft.com/en-us/dynamics365/business-central/across-how-use-approval-workflows">Usar flujos de trabajo de aprobación</a>.</p>
	<p class="parrafo">La siguiente tabla describe una secuencia de tareas, con enlaces a los temas que las describen.</p>
	<table class="tabla1">
	<tr>
	<th>Descripción</th>
	<th>Ver</th>
	</tr>
	<tr>
	<td>Cree una factura de compra para registrar su acuerdo con un proveedor para comprar productos en ciertos términos de entrega y pago.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/purchasing-how-record-purchases">Registro de compras</a></td>
	</tr>
	<tr>
	<td>Cree una cotización de compra para reflejar una solicitud de cotización de su proveedor, que luego puede convertir en una orden de compra.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/purchasing-how-request-quotes">Solicitar Cotizaciones</a></td>
	</tr>
	<tr>
	<td>Cree una factura de compra para todas las líneas o las seleccionadas en una factura de venta.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/purchasing-how-purchase-products-sale">Comprar artículos para una venta</a></td>
	</tr>
	<tr>
	<td>Comprenda lo que sucede cuando publica documentos de compra.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/ui-post-purchases">Publicación de compras</a></td>
	</tr>
	<tr>
	<td>Realice una acción en una factura de compra registrada sin pagar para crear automáticamente una nota de crédito y cancelar la factura de compra o volver a crearla para que pueda hacer las correcciones.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/purchasing-how-correct-cancel-unpaid-purchase-invoices">Corregir o cancelar facturas de ventas impagas</a></td>
	</tr>
	<tr>
	<td>Cree una nota de crédito de compra para revertir una factura de compra registrada específica para reflejar qué productos está devolviendo al proveedor y qué monto de pago cobrará.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/purchasing-how-register-new-vendors">Procesar devoluciones o cancelaciones de compras</a></td>
	</tr>
	<tr>
	<td>Prepárese para facturar múltiples recibos del mismo proveedor una vez combinando los recibos en una sola factura.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/purchasing-how-to-combine-receipts">Combinar recibos en una sola factura</a></td>
	</tr>
	<tr>
	<td>Convierta, por ejemplo, facturas electrónicas de sus proveedores en facturas de compra dentro de Business Central.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/purchasing-how-to-receive-and-convert-electronic-documents">Recibir y convertir documentos electrónicos</a></td>
	</tr>
	<tr>
	<td>Descubra cómo Business Central calcula cuándo debe pedir un artículo para recibirlo en una fecha determinada.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/purchasing-date-calculation-for-purchases">Cálculo de fecha para compras</a></td>
	</tr>
	<tr>
	<td>Resuelva la confusión cuando existen dos o más registros para el mismo proveedor.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-merge-duplicate-records">Combinar registros duplicados</a></td>
	</tr>
	<tr>
	<td>Administre su compromiso con un proveedor para comprar grandes cantidades entregadas en varios envíos a lo largo del tiempo.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-to-create-blanket-sales-orders">Trabajo con órdenes de compra abiertas</a></td>
	</tr>
	</table><br>
	<h3>Números de documentos externos</h3>
	<p class="parrafo">En documentos de compra y diarios, puede especificar un número de documento que se refiera al sistema de numeración del proveedor. 
	Utilice este campo para registrar el número que el proveedor asignó a la orden, factura o nota de crédito. Luego puede usar el número más tarde si, por alguna razón,
	necesita buscar la entrada publicada usando este número.</p>
	<p class="parrafo">La ext. <b>Doc. Núm.</b> El campo Obligatorio en la página <b>Configuración de compras y cuentas por pagar</b> especifica si es obligatorio ingresar un número de
	documento externo en las siguientes situaciones:</p>
	<div class="contentList">
	<ul>
	<li>En el campo N.° de <b>factura del proveedor</b> , el campo <b>N.° de pedido</b> del proveedor o el campo <b>N.° de factura del proveedor</b>. Campo <b>Memo No.</b> en un encabezado de 
	compra.</li>
	<li>En el campo <b>Número de documento externo</b> en una línea de diario general, donde el campo <b>Tipo de documento</b> está configurado en Factura , Nota de crédito o Nota de cargo
	financiero y el campo <b>Tipo de cuenta</b> está configurado en Proveedor .</li>
	</ul>
	</div>
	<p class="parrafo">Si selecciona este campo, no será posible contabilizar una factura, una nota de crédito o el tipo de línea de diario general descrito anteriormente sin un número de 
	documento externo.</p>
	<p class="parrafo">El número de documento externo se incluye en los documentos registrados donde puede buscar por el número correspondiente. También puede buscar utilizando el número de
	documento externo al navegar en las entradas del libro mayor de proveedores.</p>
	<p class="parrafo">Una forma diferente de manejar números de documentos externos es usar el campo <b>Su referencia</b>. Si utiliza el campo Su referencia , el número se incluirá en los 
	documentos publicados y podrá buscarlo de la misma manera que para los valores de los campos <b>Número de documento externo</b>. Pero el campo no está disponible en las líneas de diario.</p>
	`;

	cuerpo.innerHTML= contenido;
}
/*=====================
Crear Oferta de Compra
=======================*/
let crearCompra = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `

	<h2 class="Subtitulos">Crear una oferta de compra</h2>
	<p class="parrafo">Las compras que se realizan al mejor precio mejoran la administración del inventario de una empresa, reducen los costes y tienen un efecto directo en la capacidad de la empresa de satisfacer a sus clientes.</p>
	<p class="parrafo">Business Central proporciona un sistema completo de administración de pedidos de compra que puede registrar, solicitar información completa sobre todos los proveedores, acuerdos de precios, acuerdos de descuento y planes de envío o recepción.</p>
	<p class="parrafo">El sistema de oferta de compra integrado ayuda a los agentes de compras a buscar las mejores condiciones de compra. Esto incluye una cómoda conversión a pedidos de compra para ofertas con éxito. Los agentes de compras pueden utilizar el sistema integrado de pedidos abiertos de compra para registrar acuerdos de compra por adelantado y también pueden emplear esta información registrada en pedidos de compra posteriores.</p>
	<p class="parrafo">Se puede usar una oferta de compra como borrador preliminar para un pedido de compra, y el pedido se puede convertir en una factura de compra o en un pedido.</p>
	<p class="parrafo">Para crear una oferta de compra, seleccione el icono buscar página en la esquina superior derecha de la página, introduzca Ofertas de compra y, a continuación, elija el vínculo relacionado.</p>
	<ul>
	<li><b>1.</b> Para crear un documento nuevo, seleccione la acción <b>Nuevo</b>. </li>
	<li><b>2.</b> En el campo Proveedor, especifique el nombre de un proveedor existente. Otros campos de la página <b>Oferta de compra</b> se rellenan ahora con la información estándar para el proveedor seleccionado. Si el proveedor no está registrado, primero debe registrarlo como proveedor. No necesita dejar la oferta de compra para crear un nuevo proveedor, simplemente seleccione <b>Nuevo</b>.</li>
	<li><b>3.</b> Si ha especificado un nombre de proveedor para un proveedor que no está registrado, podría recibir el siguiente mensaje, en el que puede seleccionar <b>Cree una nueva ficha de proveedor</b> y después seleccionar el botón Aceptar para continuar. <br>
	<div class="img-content2"><img src="img/compra1.png" alt=""></div>
	</li>
	<li><b>4.</b> En la página Seleccionar una plantilla para un proveedor nuevo, seleccione una plantilla y, a continuación, seleccione el botón <b>Aceptar</b>. Se abre una nueva <b>Ficha proveedor</b>, previamente rellenada con la información de la plantilla de proveedor seleccionada. El campo <b>Nombre</b>  contiene el nombre del nuevo proveedor que introdujo en la oferta de compra. Puede seguir rellenando los campos restantes en la ficha de proveedor. Cuando haya rellenado la ficha del proveedor, seleccione el botón <b>Aceptar</b> para volver a la página <b>Oferta de compra</b>.</li>
	<li><b>5.</b> Varios campos de la página <b>Oferta de compra</b> se rellenan ahora con la información de la nueva ficha del proveedor. Rellene los campos restantes en la ficha <b>General</b>, según sea necesario. Por ejemplo, puede modificar la fecha de pedido y agregar la fecha de recepción solicitada como una fecha en que desea que el proveedor entregue a la dirección de envío. <br><br>
	<div class="img-content2"><img src="img/compra2.PNG" alt=""></div>
	</li>
	<li><b>6.</b> Ahora puede rellenar las líneas Oferta de compra con artículos de inventario o servicios que solicita de un proveedor.</li>
	<li><b>7.</b> En la ficha desplegable Líneas, en el campo N.º, introduzca el número de un producto o servicio de inventario (si el valor del campo Tipo de esta línea es Producto). En el campo <b>Cantidad</b>, especifique el número de artículos que desea solicitar.</li>
	<li><b>8.</b> Si está comprando una gran cantidad de productos o servicios diferentes, es posible que tenga muchas líneas en la oferta de compra. En esta situación, puede usar la función <b>Modo de enfoque</b> para contraer el cuadro informativo y la ficha desplegable <b>General</b>. Seleccione el botón <b>Modo de enfoque</b> y se abrirá una nueva página, centrada en las líneas del pedido de compra.</li>
	<li><b>9.</b> Para imprimir o enviar esta <b>Oferta de compra</b>, use la acción <b>Imprimir/Enviar</b>.</li>
	<li><b>10.</b> Cuando se haya completado la oferta de compra y se hayan aceptado todas las condiciones de su proveedor, podrá convertir su oferta de compra en un pedido de compra. Seleccione la acción <b>Convertir en pedido</b>. Dynamics 365 Business Central confirma que la oferta de compra se ha convertido en un pedido y, a continuación, le informa sobre el nuevo número de pedido de compra. Cuando se selecciona <b>Aceptar</b>, la oferta de compra se elimina de la base de datos.</li>
	<li><b>11.</b> El pedido de compra se crea a partir de la información de la oferta de compra. En el campo N.º oferta del pedido de compra puede ver el número de oferta de compra.</li>
	<li><b>12.</b> Abrimos el nuevo pedido de compra.</li><br>
	<li>
	<div class="img-content2"><img src="img/compra3.PNG" alt=""></div>
	</li>
	</ul>
	<p class="parrafo">Videotutorial como realizar un pedido de compra.</p>
	<iframe class="ifra" src="https://www.youtube.com/embed/sQBYIRneaKk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	`;

	cuerpo.innerHTML= contenido;
}
/*===================
 Crear factura de compra		
 ===========================*/

let facturaCompra = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Crear factura de compra</h2>
	<p class="parrafo">Crea una factura de compra o una orden de compra para registrar el costo de las compras y realizar un seguimiento de las cuentas por pagar. Las facturas de compra y las órdenes de compra también se utilizan para actualizar dinámicamente los niveles de inventario, lo que significa que puede minimizar los costos de inventario y brindar un mejor servicio al cliente. Los costos de compra, incluidos los gastos de servicio y los valores de inventario que resultan de la publicación de facturas o pedidos de compra, contribuyen a las cifras de ganancias y otros indicadores financieros clave de rendimiento  en su área de trabajo.</p>
	<p class="parrafo">Además de comprar artículos físicos ( tipo de artículo de inventario ), que afecta la valoración del inventario, puede comprar servicios representados por unidades de tiempo. Puede hacerlo con el tipo de elemento de servicio o con el tipo de línea de recursos .</p>
	<p class="parrafo">Cuando reciba los artículos de inventario o el servicio adquirido esté completo, registre la factura de compra o el pedido para actualizar el inventario y los registros financieros y para activar el pago al proveedor de acuerdo con las condiciones de pago.</p>
	<h3>Crear factura de compra desde pedido de compra</h3>
	<ul>
	<li><b>1.</b> Desde la página principal en el icono de la lupa de busqueda, insertamos <b>Pedidos Compra</b>, luego elija el enlace relacionado. <br>
	<div class="img-content"><img src="img/facompra.PNG" alt=""></div>
	</li>
	<li><b>2.</b> Al ingresar a la tarjeta que nos mostrara todos los datos sobre el pedido de compra y verificar que todo esté correcto y si no necesitamos modificar nada, en la opción  <b>Registrar</b>, le damos aceptar en <b>recibir y facturar</b>. <br>
	<div class="img-content2"><img src="img/facompra1.PNG" alt=""></div>
	</li><br>
	<li><b>3.</b> Una vez contabilizada la factura, podrá encontrarla en la lista de facturas contabilizadas <b>Historico de factura de compra</b>. <br>
	<div class="img-content2"><img src="img/facompra2.PNG" alt=""></div>
	</li>
	</ul>
	<h3>Cuándo usar órdenes de compra</h3>
	<p class="parrafo">Debe usar órdenes de compra si su proceso de compra requiere que registre recibos parciales de una cantidad de pedido, por ejemplo, porque la cantidad total 
	no está disponible con el proveedor. Si entrega artículos vendidos directamente de su proveedor a su cliente como un envío directo, también debe usar órdenes de compra.</p>
	<h3>Facturas Registradas</h3>
	<p class="parrafo">Una vez contabilizada la factura, podrá encontrarla en la lista de facturas contabilizadas. Tanto la lista Facturas de venta registradas como la lista Facturas de 
	compra registradas muestran las facturas registradas con los números de factura finales. En la lista, puede buscar cada factura registrada y puede corregir o cancelar una factura 
	registrada.</p>
	<p class="parrafo">Para cada factura registrada, puede buscar estadísticas, dimensiones y los asientos contables que son el resultado de la factura registrada. También puede imprimir 
	o enviar la factura contabilizada.</p>
	<p class="parrafo">Puede corregir o cancelar fácilmente una factura de compra registrada antes de pagar al proveedor. Esto es útil si necesita corregir un error de escritura o cambiar 
	la compra al principio del proceso de pedido. Obtenga más información en
	<a href="https://learn.microsoft.com/en-us/dynamics365/business-central/purchasing-how-correct-cancel-unpaid-purchase-invoices">Corregir o cancelar facturas de compra impagas</a> .
	Si ya pagó artículos o servicios en la factura de compra registrada, debe crear una nota de crédito de compra para revertir la compra. 
	Obtén más información en <a href="https://learn.microsoft.com/en-us/dynamics365/business-central/purchasing-how-process-purchase-returns-cancellations">
	Procesar devoluciones o cancelaciones de compras</a>.</p>
	<p class="parrafo">Videotutorial de factura de compra desde pedido de venta en Business Central</p>
	<iframe   class="ifra" src="https://www.youtube.com/embed/phGrR_NKIeQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	`;

	cuerpo.innerHTML= contenido;

}
 /*======================
	Registro de Compras 
	========================*/
let  registroCompra = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Registro de Compra</h2>
	<p class="parrafo">Cuando se contabiliza un documento de compra, se actualizan la cuenta del proveedor, el libro mayor (G/L), los asientos del libro mayor de artículos y los 
	asientos del libro mayor de recursos.</p>
	<div class="contentList">
	<ul>
	<li>Correo</li>
	<li>Vista previa de la publicación</li>
	<li>Registrar e imprimir</li>
	<li>Informe de prueba</li>
	<li>Publicar lote</li>
	</ul>
	</div>
	<p class="parrafo">Para cada documento de compra, se crea una entrada de compra en la tabla <b> Entrada del L/M .</b> También se crea una entrada en la cuenta del <b>proveedor 
	en la tabla Entrada de libro mayor de proveedores</b> y una entrada del L/M en la cuenta de cuentas por pagar correspondiente. Además, la contabilización de la compra puede dar 
	lugar a un asiento del impuesto sobre el valor añadido (IVA) y un asiento del L/M por el importe del descuento. El hecho de que se registre una entrada para el descuento depende
	del contenido del campo Registro de descuento en la página <b>Configuración de compras y cuentas por pagar</b>.</p>
	<p class="parrafo">Para cada línea de compra, según corresponda, se crean entradas en el:</p>
	<div class="contentList">
	<ul>
	<li><b>Tabla Entrada de libro mayor de artículos</b> si la línea de compra es del tipo<b>Artículo .</b></li>
	<li><b>Tabla Entrada</b> de mayor si la línea de compra es del tipo <b>Cuenta</b> de mayor.</li>
	<li>La tabla<b> Entrada de libro mayor de recursos</b> si la línea de compra es del tipo <b> Recurso</b>.</li>
	</ul>
	</div>
	<p class="parrafo">Antes de comenzar a contabilizar, puede imprimir un informe de prueba que contenga toda la información en
	la orden de compra e indique cualquier error allí. Para imprimir el informe, seleccione <b>Contabilización</b> y, a continuación, seleccione <b>Informe de prueba</b>.</p>
	<p class="parrafo"><b>Importante</b><br>
	Cuando registra una orden de compra para artículos, puede crear tanto un recibo como una factura. Estos se pueden hacer de forma simultánea o independiente. 
	También puede crear un recibo parcial y una factura parcial completando el campo <b>Cantidad. a recibir</b> y <b>cant. a los campos de Factura</b> 
	en las líneas de orden de compra individuales antes de contabilizar. Tenga en cuenta que no puede crear una factura de compra a partir de una orden de 
	compra de productos o servicios que no se han recibido. Es decir, antes de poder facturar, debe haber registrado un recibo, o debe elegir recibir y facturar al mismo tiempo.</p>
	<p class="parrafo">Para registrar una factura de compra sin registrar un recibo de compra en Business Central, cree el documento en la página <b>Facturas de compra</b>.</p>
	<h3>Visualización de asientos contables</h3>
	<p class="parrafo">Cuando se completa la contabilización, las líneas de compra contabilizadas se eliminan del pedido. Un mensaje le informa cuando se completa la publicación. 
	Después de esto, podrá ver los asientos contabilizados en varias páginas, incluidas las páginas Asientos contables de <b>proveedores, Asientos contables, Asientos contables</b> 
	de <b>artículos</b>, <b>Asientos contables</b> de <b>recursos</b>, <b>Recibos</b> de compra y <b>Facturas</b> de compra contabilizadas .</p>
	<p class="parrafo">En la mayoría de los casos, puede abrir asientos contables desde la tarjeta o documento afectado. Por ejemplo, en la página Tarjeta de <b>proveedor</b> , 
	elija la acción <b>Entradas</b>.</p>

	`;

	cuerpo.innerHTML= contenido;

}
/*=================================
	Configurar Precio de Compra
===================================*/
let confPrecioCompra = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Configurar precios de compras</h2>
	<p class="parrafo">Puede encontrar información habitual relacionada con los costes de los productos en la ficha del producto. Cuando se selecciona un producto en una línea del pedido de compra, Business Central recupera automáticamente el Último coste directo almacenado en la ficha del producto y lo copia en la línea del pedido de compra.</p>
	<p class="parrafo">Sin embargo, si un proveedor proporciona un artículo a un precio diferente basado en criterios adicionales, como la fecha de pedido o una cantidad de pedido mínima, el modelo de un coste por ficha de producto no puede dar cabida a estos requisitos adicionales.</p>
	<p class="parrafo">Los precios de compra habilitan la funcionalidad de precios más allá de la ficha de producto estándar.</p>
	<h3>Usar los precios especiales en pedidos de compra</h3>
	<p class="parrafo">Los precios de compra son precios especiales de un producto que se basan en la combinación del número de producto, el proveedor (opcional) y uno o más de los siguientes criterios:</p>
	<div class="contentList">
	<ul>
	<li>Variante de producto</li>
	<li>Unidad de medida</li>
	<li>Cantidad mínima comprada</li>
	<li>Fecha pedido</li>
	<li>Divisa pagada</li>
	</ul>
	</div>
	<p class="parrafo">Los precios especiales se pueden configurar para ayudar a los agentes de compras a cumplir su objetivo 
	de comprar siempre al mejor precio. El mejor precio es el precio más bajo con el descuento de línea más alto que está 
	disponible en la fecha de pedido.</p>
	<p class="parrafo">Cuando un agente de compras crea un pedido de compra, Business Central llevará a cabo las siguientes 
	tareas:</p>

	<div class="contentList">

	<ul>
	<li>Comprobar si los precios de compra especiales se configuran para el proveedor y el producto.</li>
	<li>Determinar qué precios especiales se aplican según si la cabecera de compra y los detalles de línea cumplen con las 
	condiciones.</li>
	<li>Seleccionar el mejor precio entre los precios especiales aplicables.</li>
	</ul>
	</div>
	<p class="parrafo">Si se selecciona un precio de compra especial, Business Central lo copia el en la línea de compra. 
	Si no se registra ningún precio de compra especial o no se cumplen las condiciones para aplicar al menos un precio especial, 
	se copia en su lugar el Último coste directo de la ficha de producto en la línea de compra.</p>
	<p class="parrafo">Para garantizar que no se pierden oportunidades de conseguir un mejor precio, Business Central informa a 
	los agentes de compras de los precios especiales actuales, incluso si no se pueden cumplir las condiciones para su aplicación. 
	Los agentes de compras pueden explorar estos precios especiales y obtener una vista previa de cómo se debe cambiar la línea o el 
	pedido de compra para poder optar al mejor precio.</p>
	<p class="parrafo">El siguiente procedimiento muestra cómo configurar un precio de compra para una cantidad mínima de diez piezas
	del producto 1908-S del proveedor 30000:</p>
	<ul>
	<li><b>1.</b> Seleccione el icono <b>Buscar</b> página en la esquina superior derecha de la página, introduzca Productos y, a 
	continuación, elija el vínculo relacionado.</li>
	<li><b>2.</b> Abra la ficha de producto para el producto 1908-S.</li>
	<li><b>3.</b> Seleccione **Precios y descuentos > Precios compra.</li>
	<li><b>4.</b> En el campo <b>N.º de proveedor</b> , introduzca <b>30000</b>.</li>
	<li><b>5.</b> En el campo <b>Cantidad mínima</b>, introduzca <b>10</b>.</li>
	<li><b>6.</b> En el campo <b>Coste unitario directo</b>, especifique <b>120</b>.</li>
	<li><b>7.</b> Use los campos <b>Fecha inicial</b> y <b>Fecha final</b> si los precios solo son válidos durante un período 
	específico.</li>
	<li><b>8.</b> Cierre la página <b>Precios compra</b>.</li>
	</ul>
	<div class="img-content2"><img src="img/precioComp.PNG" alt=""></div>
	<p class="parrafo">Business Central ofrece ayuda sobre precios y descuentos para que los agentes de compras puedan alcanzar el 
	objetivo de siempre obtener el mejor precio para los productos adquiridos. Esta ayuda a menudo tiene como consecuencia la 
	reducción de los costes de los pedidos y de los costes de los bienes vendidos.</p>
	`;

	cuerpo.innerHTML= contenido;
}

/*========================
	Crear Proveedor
	=============================*/
let crearProveedor = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Registrar nuevos proveedores</h2>
	<p class="parrafo">Los proveedores proporcionan los productos que usted vende. Cada proveedor al que le compre debe estar registrado con una tarjeta de proveedor.</p>
	<p class="parrafo">Antes de registrar nuevos proveedores, debe configurar varios códigos de compra para seleccionar cuando llene las tarjetas de proveedores. 
	Después de crear todos los datos maestros necesarios, puede agregar características únicas para un proveedor, como priorizar el proveedor para fines de pago o 
	enumerar artículos que el proveedor y otros proveedores suministran. Otro grupo de tareas de configuración para proveedores es registrar sus acuerdos sobre descuentos, 
	precios y métodos de pago.</p>
	<p class="parrafo">Las tarjetas de proveedor contienen la información necesaria para comprar productos de cada proveedor.</p>
	<h3>Adición de nuevos proveedores</h3>
	<p class="parrafo">Puede agregar nuevos proveedores manualmente, completando la página Tarjeta de proveedor , o puede usar plantillas que contienen información predefinida.
	Por ejemplo, puede crear plantillas para diferentes tipos de perfiles de proveedores. El uso de plantillas ahorra tiempo al agregar nuevos proveedores y ayuda a garantizar 
	que la información sea correcta cada vez.</p>
	<p class="parrafo"><b>Nota</b><br>
	Si existen plantillas de proveedores para diferentes tipos de proveedores, cuando comience a crear una nueva tarjeta de proveedor, verá una página desde la que puede seleccionar 
	la plantilla adecuada. Si solo existe una plantilla de proveedor, las nuevas tarjetas de proveedor siempre usan esa plantilla.
	</p>
	<p class="parrafo">Después de crear una plantilla, puede usar la acción Aplicar plantilla para aplicarla a uno o más proveedores seleccionados. Para crear una plantilla, complete 
	la información que desea reutilizar en la página Tarjeta de proveedor y luego guárdela como plantilla.</p>
	<p class="parrafo">Las direcciones de envío se utilizan cuando imprime cheques para pagar a sus proveedores, y los proveedores pueden tener múltiples direcciones de envío para los 
	pagos. Por ejemplo, un proveedor puede suministrar un artículo de una empresa subsidiaria, pero desea recibir el pago en su sede. Business Central le permite configurar varias 
	direcciones de correo para cada proveedor y puede elegir la ubicación correcta para enviar los pagos factura por factura.</p>
	<p class="parrafo">Las direcciones de envío se especifican en las páginas de la Tarjeta de proveedor y en la ficha desplegable Envío y pagos en las órdenes de compra y las facturas.
	Cuando crea líneas de diario de pago usando las acciones Pagar proveedor o Crear pago en la página de lista de proveedores o la página Tarjeta de proveedor, 
	o la acción Aplicar entradas en un diario de pago, se asigna el código de remitente en la entrada del libro mayor del proveedor. Puede sobrescribir este valor.</p>
	<h3>Para crear un nuevo proveedor</h3>
	<ul>
	<li><b>1.</b> Elija el Icono de busqueda, ingrese <b>Proveedores</b>  y luego elija el enlace relacionado.</li>
	<li><b>2.</b> En la página de <b>Proveedores</b>, elija <b>Nuevo</b>.
	<div class="img-content"><img src="img/proveedores1.PNG" alt=""></div>
	<p>Si existe más de una plantilla de proveedor, se abre una página desde la que puede seleccionar una plantilla de proveedor. En ese caso, siga los siguientes dos pasos.</p>
	<ul>
	<li><b>a.</b> En la página Seleccionar una plantilla para un nuevo proveedor , elija la plantilla que desea usar para la nueva tarjeta de proveedor. </li>
	<li><b>b.</b> Elija el botón Aceptar . Se abre una nueva tarjeta de proveedor con algunos campos llenos de información de la plantilla.</li>
	</ul>
	</li>
	<li><b>3.</b> Proceda a completar o cambiar campos en la tarjeta de proveedor según sea necesario. Pase el cursor sobre un campo para leer una breve descripción.</li>
	<li><b>4.</b> Luego de Crear el nuevo proveedor guardamos los cambios. <br><br>
	<div class="img-content2"><img src="img/proveedores2.PNG" alt=""></div>
	</li>
	</ul>
	<p class="parrafo">El proveedor ahora está registrado y la tarjeta de proveedor está lista para usar en los documentos de compra.</p>
	<p class="parrafo">Si desea utilizar esta ficha de proveedor como plantilla cuando cree nuevas fichas de proveedor, puede guardarla como plantilla de proveedor. </p>
	<p class="parrafo"><b>Nota</b><br>
	Si no conoce la dirección de facturación que se utilizará para cada factura de un proveedor, no complete el campo No. en la ficha desplegable General . 
	En su lugar, elija el número de proveedor de pago después de haber configurado una cotización de compra, un pedido o un encabezado de factura.
	</p>
	<h3>Eliminación y edición de la información del proveedor</h3>
	<p class="parrafo">Puede editar la información en las tarjetas de proveedor en cualquier momento. Sin embargo, si registró una transacción para un proveedor, 
	no puede eliminar la tarjeta porque es posible que se necesiten las entradas del libro mayor para la auditoría. Para eliminar tarjetas de proveedor con entradas de libro mayor,
	comuníquese con su socio de Microsoft para hacerlo a través del código.</p>
	<p class="parrafo"><b>Nota</b><br>Puede cambiar el Número de cuenta bancaria internacional (IBAN) en una cuenta bancaria de proveedor sin que el cambio afecte sus entradas
	históricas de registro de transferencias de crédito. Las entradas del registro de transferencias de crédito almacenan el IBAN del destinatario y el número de cuenta bancaria del
	destinatario especificados en los campos Cuenta bancaria del proveedor y Nombre del destinatario de la página Tarjeta del proveedor cuando se crearon las entradas.</p>
	<h3>Videotutorial como crear nuevo proveedor </h3>
	<iframe src="https://www.microsoft.com/en-us/videoplayer/embed/RE3PZtd?rel=0&postJsllMsg=true" class="ifra"></iframe>	

	`;
	cuerpo.innerHTML= contenido;

}
	/*==============================
	agregar Banco Proveedor
	==============================*/

let agregarBancoPro = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `

	<h2 class="Subtitulos">Configurar cuentas bancarias de proveedores</h2>
	<p class="parrafo">Así como puede usar la información de la cuenta bancaria en Business Central para realizar un seguimiento de las transacciones bancarias de su empresa, 
	también puede configurar los detalles bancarios de los proveedores.</p>
	<h3>Agregar o editar una cuenta bancaria de proveedor</h3>
	<ul>
	<li><b>1.</b> Elija El icono de busqueda, ingrese <b>Proveedores</b> y luego elija el enlace relacionado.</li>
	<li><b>2.</b> Abra la tarjeta del porveedor seleccionado.</li>
	<li><b>3.</b> Elija <b>Navegar</b> y luego <b>Bancos</b>.</li>
	<li><b>4.</b> En la Lista de <b>cuentas bancarias de proveedores</b> , seleccione la cuenta bancaria correspondiente o agregue una nueva cuenta bancaria seleccionando <b>Nueva</b>.</li>
	<li><b>5.</b> En la página <b>Tarjeta de cuenta bancaria del proveedor</b> , complete los campos según sea necesario. Pase el cursor sobre un campo para leer una breve descripción.</li>
	</ul><br>
	<div class="img-content2"><img src="img/Banco1.PNG" alt=""></div>
	<p class="parrafo"><b>Nota</b><br> Algunos campos están ocultos hasta que elige la acción <b>Mostrar más</b>  , generalmente porque se usan con poca frecuencia. 
	Otros deben agregarse a través de la personalización. Para obtener más información, consulte <b>Personalizar su espacio de trabajo</b>.</p>
	<p class="parrafo"><b style="background-color:red; padding: 5px;color: white;">Advertencia</b><br>Algunos campos de la cuenta bancaria del proveedor contienen datos comerciales confidenciales, 
	como el número de sucursal bancaria, el número de cuenta bancaria , el código <b>SWIFT</b> y el código <b>IBAN</b>. Para obtener más información sobre cómo monitorear y recibir 
	notificaciones cuando alguien cambia un valor en esos campos, consulte <b>Monitoreo de campos confidenciales</b>.</p>
	`;

	cuerpo.innerHTML= contenido;

}
	/*=========================
	Recursos Humanos
	==============================*/

let recursosHumanos = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Administrar Recursos Humanos</h2>
	<p class="parrafo">Básicamente, los Recursos Humanos de una empresa es el conjunto de empleados que la constituyen, es decir, todos nosotros. El área de RRHH será quien se encargue de la gestión y administración del capital humano que es el motor de la organización.</p>
	<p class="parrafo">Contar con un Departamento de Recursos Humanos es crucial para el éxito de una empresa y puede ser el recurso más importante para mejorar y mantener a los empleados motivados. Será el encargado de la selección, contratación, capacitación y motivación para así cumplir las expectativas de todo personal que conforma la empresa y los objetivos comerciales de la misma.</p>

	<p class="parrafo">En Business Central, puede mantener registros detallados de sus empleados. Puede registrar y mantener la información de los empleados, como contratos de trabajo, información confidencial, calificaciones y contactos de los empleados.</p>
	<p class="parrafo">También puede registrar las ausencias de los empleados, lo que le permite analizar las ausencias registradas según sea necesario.</p>
	<p class="parrafo">Para comenzar a usar la funcionalidad de Recursos Humanos, debe configurar empleados y otra información básica. Luego puede asociar varios códigos a un empleado, lo que le permite filtrar información para empleados específicos.</p>
	<p class="parrafo">La siguiente tabla describe una secuencia de tareas, con enlaces a los temas que las describen.</p>
	<table class="tabla1">
	<tr>
	<th>Descripción</th>
	<th>Ver</th>
	</tr>
	<tr>
	<td>Registre nuevos empleados o edite registros para empleados existentes y adjunte información relacionada, como contratos y artículos.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/hr-how-register-employees">Registrar Empleados</a></td>
	</tr>
	<tr>
	<td>Registre la ausencia de los empleados y vea las estadísticas de ausencia por varios filtros.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/hr-how-manage-absence">Administrar la ausencia de los empleados</a></td>
	</tr>
	</table><br>  
	<p class="parrafo">Videotutorial de Recursos humanos.</p>
	<iframe class="ifra" src="https://www.youtube.com/embed/eojFSCQzebk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	`;

	cuerpo.innerHTML= contenido;

}

/*===================
Registrar Empleados
=====================*/

let registroEmpleado = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `

	<h2 class="Subtitulos">Registrar Empleados</h2>
	<p class="parrafo">Para usar la funcionalidad de Recursos Humanos, primero debe agregar a cada empleado completando los campos en la página de la Tarjeta de Empleado </p>
	<h3>Adición de nuevos empleados</h3>
	<p class="parrafo">Puede agregar nuevos empleados manualmente, completando los campos en la página de la Tarjeta de empleado , o puede usar plantillas que contienen 
	información predefinida. Por ejemplo, puede crear plantillas para diferentes tipos de perfiles de empleados. El uso de plantillas ahorra tiempo al agregar nuevos
	empleados y ayuda a garantizar que la información sea correcta cada vez. Si crea plantillas para más de un tipo de empleado, puede elegir la plantilla que usará
	cuando agregue un empleado. Si crea solo una plantilla, se usará para todos los nuevos empleados. Después de crear una plantilla, puede usar la acción Aplicar
	plantilla para aplicarla a uno o más empleados seleccionados. Para crear una plantilla, complete la información que desea reutilizar en la página Tarjeta de empleado
	y luego guárdela como plantilla.</p>
	<p class="parrafo">Puede modificar los datos de un empleado en cualquier momento. Mantener actualizados los registros de los empleados puede simplificar las tareas 
	relacionadas con el personal. Por ejemplo, si cambia la dirección de un empleado, registre esto en la página Tarjeta de empleado.</p>
	<h3>Para agregar un empleado</h3>
	<ul>
	<li><b>1.</b> Elija el icono de busqueda, ingrese <b>Empleados</b> y luego elija el enlace relacionado</li>
	<li><b>2.</b> Elija la acción <b>Nuevo</b></li>
	<li><b>3.</b> En la página <b>Tarjeta de empleado</b>, complete los campos según sea necesario. para el cursor sobre un campo para leer una breve descripción.</li>
	</ul>
	<div class="img-content2"><img src="img/emple1.PNG" alt=""></div>
	<h3>Para insertar una foto de un empleado</h3>
	<p class="parrafo">Si tiene una foto de un empleado, puede insertarla en la tarjeta de empleado.</p>
	<ul>
	<li><b>1.</b> Elija el icono de busqueda, ingrese <b>Empleados</b> y luego elija el enlace relacionado.</li>
	<li><b>2.</b> Abra la tarjeta de empleado correspondiente.</li>
	<li><b>3.</b> En el cuadro informativo <b>Imagen del empleado</b>, elija el botón desplegable y luego seleccione importar.</li>
	<li><b>4.</b> En la página <b>Seleccionar una imagen para cargar</b>, seleccione el botón <b>Elejir</b>.</li>
	<li><b>5.</b> Seleccione el archivo y luego elija <b>Abrir</b>.</li>
	</ul>

	<p class="parrafo">La imagen se insertara en el cuadro informativo <b>Imagen del empleado</b>.</p>

	`;

	cuerpo.innerHTML= contenido;

}
/*===============
Ausencia Empleados
=================*/
let ausenciaEmpleado = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `

	<h2 class="Subtitulos">Administrar la ausencia de los empleados</h2>
	<p class="parrafo">Para administrar la ausencia de un empleado, debe registrar la ausencia en la página de <b>Registro de Ausencias</b> . Luego se puede ver de diferentes
	maneras para el análisis y las necesidades de informes.</p>
	<p class="parrafo">Puede ver las ausencias de los empleados en dos páginas diferentes: </p>
	<div class="contentList">
	<ul>
	<li>La página de <b>Registro de Ausencias</b>, donde registra todas las ausencias de los empleados con una línea para cada ausencia.</li>
	<li>La página de <b>Ausencias de Empleados</b>, donde se muestran las ausencias de un solo empleado. Esta es la información que ingresó en la página de <b>Registro de Ausencias</b>, filtrada por el empleado en particular.</li>
	</ul>
	</div>
	<p class="parrafo">Para obtener estadísticas significativas, siempre debe usar la misma unidad de medida (hora o día) al registrar las ausencias de los empleados.</p>
	<div class="img-content"><img src="img/ausencia1.PNG" alt=""></div>
	<h3>Para registrar la ausencia del empleado</h3>
	<p class="parrafo">Puede registrar las ausencias de los empleados diariamente o en algún otro intervalo que satisfaga las necesidades de su organización.</p>
	<ul>
	<li><b>1.</b> En la esquina superior derecha en el icono de busqueda, ingrese <b>Registro de ausencias</b> y luego elija el enlace relacionado.</li>
	<li><b>2.</b> Elija la acción <b>Nuevo</b>.</li>
	<li><b>3.</b> Complete una línea para cada ausencia de empleado que desee registrar. </li>
	<li><b>4.</b> Cierra la página.</li>
	</ul>
	<p class="parrafo"><b>Nota</b><br>Para obtener estadísticas significativas, utilice siempre la misma unidad de medida, hora o día, al registrar las ausencias de los empleados.</p>
	<div class="img-content"><img src="img/emple2.PNG" alt=""></div>
	<p class="parrafo">La visualización de las ausencias nos ayudará mucho a la hora de poder elaborar las nóminas de los trabajadores y determinar con exactitud el salario
	correspondiente de cada uno.</p>

	`;

	cuerpo.innerHTML= contenido;

}
/*===========================
 Permisos y Usuarios y grupos
 ==========================*/
let permisosUsuarios = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Asignar permisos a usuarios y grupos</h2>
	<p class="parrafo">El sistema de seguridad de Business Central controla a qué objetos puede acceder un usuario dentro de cada base de datos o entorno, en combinación con la licencia del usuario. Para cada usuario, puede especificar si puede leer, modificar o ingresar datos en los objetos de la base de datos.</p>
	<p class="parrafo">Antes de asignar permisos a usuarios y grupos de usuarios, debe definir quién puede iniciar sesión creando usuarios de acuerdo con su licencia. Para obtener más información, consulte <a href="https://learn.microsoft.com/en-us/dynamics365/business-central/ui-how-users-permissions">Crear usuarios según las licencias</a>.</p>
	<p class="parrafo">En Business Central, hay dos niveles de permisos para los objetos de la base de datos:</p>
	<div class="contentList">
	<ul>
	<li>Permisos generales según la licencia, también denominados derechos. <br>
	Las licencias incluyen conjuntos de permisos predeterminados. A partir del primer lanzamiento de versiones de 2022, los administradores pueden personalizar estos permisos predeterminados para los tipos de licencia relevantes. Para obtener más información, consulte <a href="https://learn.microsoft.com/en-us/dynamics365/business-central/ui-how-users-permissions#licensespermissions">Configurar permisos basados en licencias</a>.
	</li>
	<li>Permisos detallados que asigna en Business Central. <br>
	Este artículo describe cómo puede definir, usar y aplicar permisos en Business Central para cambiar la configuración predeterminada.
	Es posible que vea otros usuarios en la lista de <b>usuarios</b> además de los de su propia empresa. Cuando un administrador delegado de una empresa asociada distribuidora inicia sesión en un entorno de Business Central en nombre de su cliente, se crea automáticamente como usuario dentro de Business Central. De esta forma, las acciones realizadas por un administrador delegado se registran en Business Central, como la publicación de documentos, y se asocian con su ID de usuario.
	</li>
	</ul>
	</div>

	<p class="parrafo">Business Central en línea incluye grupos de usuarios predeterminados que se asignan a los usuarios automáticamente en función de su licencia. Puede cambiar la configuración predeterminada modificando o agregando grupos de usuarios, conjuntos de permisos y permisos. La siguiente tabla describe escenarios clave para modificar los permisos predeterminados.</p>
	<table class="tabla1">
	<tr>
	<th>Descripción</th>
	<th>Ver</th>
	</tr>
	<tr>
	<td>Para facilitar la administración de permisos para múltiples usuarios, puede organizarlos en grupos de usuarios y luego asignar o cambiar un conjunto de permisos para muchos usuarios en una sola acción.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/ui-define-granular-permissions#to-manage-permissions-through-user-groups">Para administrar permisos a través de grupos de usuarios</a></td>
	</tr>
	<tr>
	<td>Para administrar conjuntos de permisos para usuarios específicos</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/ui-define-granular-permissions#to-assign-permission-sets-to-users">Para asignar conjuntos de permisos a los usuarios</a></td>
	</tr>
	<tr>
	<td>Para aprender a definir un conjunto de permisos</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/ui-define-granular-permissions#to-create-a-permission-set">Para crear un conjunto de permisos</a></td>
	</tr>
	<tr>
	<td>Para ver o solucionar problemas de permisos de un usuario</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/ui-define-granular-permissions#to-get-an-overview-of-a-users-permissions"> Para obtener una descripción general de los permisos de un usuario</a></td>
	</tr>
	<tr>
	<td>Para obtener más información sobre la seguridad a nivel de registro</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/ui-define-granular-permissions#security-filters-limit-a-users-access-to-specific-records-in-a-table">Los filtros de seguridad limitan el acceso de un usuario a registros específicos en una tabla</a></td>
	</tr>
	</table><br>
	<h3>Para crear un conjunto de permisos</h3>
	<p class="parrafo"><b>Nota</b> <br>
	Cuando agrega un permiso del sistema, su conjunto de permisos definido por el usuario se actualizará automáticamente con cualquier cambio que Microsoft realice en esos permisos.
	</p>
	<ul>
	<li><b>1.</b> Elija el icono de busqueda, ingrese <b> Conjuntos de permisos</b> y luego elija el enlace relacionado</li>
	<li><b>2.</b> Elija la opción <b>Nuevo</b></li>
	<li><b>3.</b> En la nueva línea, complete los campos según sea necesario. Pase el cursor sobre un campo para leer una breve descripción. <br>
	<div class="img-content2"><img src="img/permisos1.PNG" alt=""></div>
	</li>
	<li><b>4.</b> Elija la opción <b>Permisos</b>.</li>
	<li><b>5.</b> En la página <b>Conjunto de permisos</b>, en el campo <b>Tipo</b>, incluya o excluya permisos para el objetode la siguiente manera: <br>
	<p class="parrafo">Para incluir el permiso, elija <b>Incluir</b> y luego elija el nivel de acceso para otorgar en los campos Permiso de <b>lectura, Permiso</b>  de <b>inserción, Permiso</b> de <b>modificación, Permiso</b> de <b>eliminación</b> y Permiso de <b>ejecución</b> . La siguiente tabla describe las opciones.</p>
	<table class="tabla1">
	<tr>
	<th>Opción</th>
	<th>Descripción</th>
	<th>Clasificación</th>
	</tr>
	<tr>
	<td>Vacio</td>
	<td>El usuario no puede realizar la acción en el objeto.</td>
	<td>Más bajo</td>
	</tr>
	<tr>
	<td>Sí</td>
	<td>El usuario puede realizar la acción en el objeto.</td>
	<td>Más alto</td>
	</tr>
	<tr>
	<td>Indirecto</td>
	<td>El usuario puede realizar la acción en el objeto, pero solo a través de otro objeto relacionado al que el usuario tenga acceso total.</td>
	<td>segundo más alto</td>
	</tr>
	</table><br>
	<p class="parrafo">En la siguiente imagen vemos como hemos agregado permisos para 4 tablas, en todas no damos permiso de eliminación pero en las otras acciones  tienen diferentes opciones marcadas. </p>
	<div class="img-content2"><img src="img/permisos2.PNG" alt=""></div>
	</li>
	<li><b>6.</b> Utilice los campos <b>Tipo</b> de objeto e <b>ID</b> de objeto para especificar el objeto al que está otorgando acceso. <br>
	<p class="parrafo">Las nuevas líneas muestran los valores predeterminados. Por ejemplo, el campo <b>Tipo de objeto</b> contiene Datos de tabla y el campo <b>ID</b>. de objeto contiene 0 . Los valores predeterminados son solo marcadores de posición y no se utilizan. Debe elegir un tipo de objeto y un objeto en el campo Id. de objeto antes de poder crear otra línea nueva.</p>
	</li>
	<li><b>7.</b> si está definiendo permisos para un tipo de objeto de datos de tabla, en el campo <b>Filtro de seguridad</b> puede filtrar los datos a los que un usuario puede acceder en los campos de la tabla seleccionada. Por ejemplo, es posible que desee permitir que un usuario acceda solo a registros que contengan información sobre un cliente en particular. Para obtener más información, consulte
	<a href="https://learn.microsoft.com/en-us/dynamics365/business-central/ui-define-granular-permissions#security-filters-limit-a-users-access-to-specific-records-in-a-table">Los filtros de seguridad limitan el acceso de un usuario a registros específicos en una tabla</a> y <a href="https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/security/security-filters">Uso de filtros de seguridad</a>. <br>
	En la columna <b>Filtro de campo</b> , ingrese el valor del campo que desea usar para limitar el acceso. <br>
	Por ejemplo, para limitar el acceso de un usuario solo a las ventas de Annette Hill, ingrese <b>AH </b>, que es el código de vendedor de Annette Hill, en la columna <b>Filtro de campo</b>. <br>
	<div class="img-content2"><img src="img/permisos3.PNG" alt=""></div>
	</li>
	</ul>
	<br>
	<p class="parrafo">Videotutorial de Perfiles roles y permisos en Business Central</p>
	<iframe class="ifra" src="https://www.youtube.com/embed/DH4LBo99Ero" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	<h3>Video de Gestión de usuarios, roles y permisos en Business Central</h3>
	<iframe class="ifra" src="https://www.youtube.com/embed/wfW2V1EG1bI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	`;
	cuerpo.innerHTML= contenido;
}
/*===========
Intrastat
=============*/
let intrastatconfig = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Qué es Intrastat ?</h2>
	<p class="parrafo">Intrastat es el sistema por el cual se recogen estadísticas de tráfico de mercancías entre los países de la Unión Europea. Comenzó a operar el 1 de enero de 1993, cuando reemplazó a las declaraciones de aduana como fuente de estadística comercial dentro de la Unión</p>
	<h2 class="Subtitulos">Trabajar con informes de Intrastat</h2>

	<p class="parrafo">Todas las empresas de la Unión Europea (UE) deben emitir informes sobre sus transacciones comerciales con otros países o regiones de la UE. Debe notificar el movimiento de mercancías al organismo de estadística de su país o región todos los meses, y el informe se debe remitir a las autoridades fiscales. Intrastat es el sistema para recopilar estadísticas comerciales de bienes dentro de estos países/regiones. Usa el Informe intrastat para completar informes periódicos de Intrastat (generalmente mensuales), recopilar, registrar e informar el comercio de bienes de acuerdo con la legislación del gobierno local.</p>
	<p class="parrafo">Los informes de Intrastat se basan en las normas básicas de la UE que se aplican a todos los países; sin embargo, en la práctica, existen algunas diferencias dentro de los países individuales. Cada país tiene sus reglas sobre qué y cómo informar exactamente.</p>
	<p class="parrafo"><b>Importante</b> <br>Este artículo describe la nueva experiencia Intrastat disponible en Business Central a partir del segundo lanzamiento de versiones de 2022, que incluye funciones ampliadas y debe estar activado para las empresas existentes. Póngase en contacto con su administrador para activar y configurar la nueva capacidad.
	</p>
	<h3>Video Introducción Intrastat</h3>
	<iframe class="ifra" src="https://www.youtube.com/embed/_3bhowTTc0U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	<h3>Habilitar la nueva experiencia de Intrastat</h3>

	<p class="parrafo">En el segundo lanzamiento de versiones de 2022, Business Central incluye una experiencia de Intrastat rediseñada con funciones ampliadas. Si la nueva funcionalidad de Intrastat no está habilitada en su entorno, un administrador puede habilitarla manualmente en la página <b>Gestión de características</b>.</p>
	<ul>
	<li><b>1.</b> Elija el icono busqueda que abre la característica Dígame. , escriba <b>Administración de características</b> y luego elija el enlace relacionado.
	</li>
	<li><b>2.</b> En la página <b>Administración de características</b>, seleccione la línea <b>Actualización de características</b> : reemplazar la funcionalidad de Intrastat existente por la nueva extensión de Intrastat. Obtenga más información sobre la administración de características en <a href="https://learn.microsoft.com/es-es/dynamics365/business-central/dev-itpro/administration/feature-management">Habilitar las próximas funciones de antemano</a>, en el contenido de la administración.</li>
	<li><b>3.</b> En la columna Habilitar para, elija Todos los usuarios.</li>
	<li><b>4.</b> Lea la explicación de cómo se actualizará el sistema y elija <b>Sí</b> si está de acuerdo.</li>
	<li><b>5.</b> Seleccione Siguiente y obtendrá una configuración básica para Intrastat. Obtenga más información sobre la configuración de Intrastat en la sección <a href="https://learn.microsoft.com/es-es/dynamics365/business-central/finance-how-setup-report-intrastat#intrastat-configuration">Configuración Intrastat</a>.</li>
	<li><b>6.</b> Después de terminar la configuración, elija <b>Finalizar</b> para comenzar a utilizar la nueva experiencia de Intrastat. <br>
	<div class="img-content2"><img src="img/intrastat1.PNG" alt=""></div>
	</li>
	</ul>
	<p class="parrafo nota-importante" ><strong>Importante</strong> <br> 
	Tenga en cuenta que no puede usar experiencias antiguas y nuevas en paralelo. Antes de activar la extensión en un entorno de producción, se recomienda que primero habilite y pruebe esta función con una copia de los datos de producción en un entorno de pruebas aislado antes de hacerlo en un entorno de producción. Una vez que active una nueva experiencia de usuario en el entorno de producción, no podrá volver a la antigua funcionalidad de Intrastat.
	</p>
	<p class="parrafo nota-solo"><b>Nota</b> <br>
	Dependiendo de la ubicación de su empresa, habilitar la función descrita anteriormente será suficiente. Para los países con características específicas para los informes Intrastat, debe habilitar la aplicación Intrastat específica del país además de la extensión principal.
	</p>
	<h3>Configuración de informes de Intrastat</h3>
	<p class="parrafo">La página <b>Configuración de informes de Intrastat</b>  se utiliza para habilitar los informes de Intrastat y establecer sus valores predeterminados. Puede especificar si necesita elaborar informes de Intrastat a partir de envíos (despachos), recibos (llegadas), o ambos, según los umbrales establecidos por sus regulaciones locales. También se pueden establecer naturalezas de transacción predeterminadas para documentos normales y de devolución, que se utilizan para la naturaleza de los informes de transacción</p>
	<p class="parrafo">Para configurar los informes Intrastat:</p>
	<ul>
	<li><b>1.</b> Elija el icono busqueda que abre la característica Dígame. , escriba <b>Configuración de informes de Intrastat</b> y luego elija el enlace relacionado. <br> 
	<div class="img-content2"><img src="img/intrastat2.PNG" alt=""></div>
	</li>
	<li><b>2.</b> Abra la ficha desplegable General y rellene los campos según sea necesario. Pase el cursor sobre un campo para leer una breve descripción. La siguiente tabla describe algunos de los campos clave: <br>
	<table class="tabla1">
	<tr>
	<th>Campo</th>
	<th>Descripción</th>
	</tr>
	<tr>
	<td>Informar recepciones</td>
	<td>Especifica que debe incluir las llegadas de artículos recibidos en los informes de intrastat.</td>
	</tr>
	<tr>
	<td>Informar envíos</td>
	<td>  Especifica que debe incluir los envíos de artículos distribuidos en los informes de intrastat.</td>
	</tr>
	<tr>
	<td>Envíos basados en</td>
	<td>Especifica en base a qué código de país se obtienen las líneas de informe Intrastat. Puede elegir una de las opciones: País de venta, País de facturación o País de destino.</td>
	</tr>
	<tr>
	<td>N.º de IVA basado en</td>
	<td>Especifica en base a qué código de cliente/proveedor se obtiene el número de impuesto sobre el valor agregado (IVA) para el informe Intrastat. Puedes elegir una de las opciones: IVA de venta o IVA facturado.</td>
	</tr>
	<tr>
	<td>CIF de empresa en archivo</td>
	<td>Especifica cómo se exporta el número de registro de IVA de la empresa al archivo Intrastat. Puede elegir una de las opciones: IVA Reg. No., agregando el código de país de la UE como prefijo y eliminando el código de país de la UE del registro de IVA. No.</td>
	</tr>
	<tr>
	<td>CIF/NIF proveedor en archivo</td>
	<td>Especifica cómo se exporta el número de registro de IVA del proveedor al archivo Intrastat. Puede elegir una de las opciones: IVA Reg. No., agregando el código de país de la UE como prefijo y eliminando el código de país de la UE del registro de IVA. No.</td>
	</tr>
	<tr>
	<td>CIF/NIF de cliente en archivo</td>
	<td>Especifica cómo se exporta el número de registro de IVA de un cliente al archivo Intrastat. Puede elegir una de las opciones: IVA Reg. No., agregando el código de país de la UE como prefijo y eliminando el código de país de la UE del registro de IVA. No.</td>
	</tr>
	<tr>
	<td>Obtener IVA de socio</td>
	<td>Especifica desde qué tipo de línea de Informe Intrastat se actualiza el CIF/NIF del socio. Según sus requisitos locales, puede elegir solo para recepción, solo para envío o para ambos tipos de líneas.
	</td>
	</tr>
	</table>
	</li>
	<li><b>3.</b> Abra la ficha desplegable <b>Transacciones predeterminadas</b> y rellene los campos según sea necesario. Pase el cursor sobre un campo para leer una breve descripción. La siguiente tabla describe algunos de los campos clave: <br>
	<table class="tabla1">
	<tr>
	<th>Campo</th>
	<th>Descripción</th>
	</tr>
	<tr>
	<td>Tipo trans. predeterminado</td>
	<td>  Especifica el tipo de transacción predeterminado para envíos de venta normales, envíos de servicios y recibos de compra.</td>
	</tr>
	<tr>
	<td>Tipo trans. predeterminado - devoluciones</td>
	<td>Especifica el tipo de transacción predeterminado de devoluciones de ventas, devoluciones de servicios y devoluciones de compras.</td>
	</tr>
	<tr>
	<td>N.º de IVA de persona privada predeterminada</td>
	<td>Especifica el número de IVA de la persona privada predeterminado en caso de que la persona privada deba tener un número de IVA dedicado en el informe de Intrastat.</td>
	</tr>
	<tr>
	<td>N.º IVA comercial predeterminado de terceros</td>
	<td>Especifica el número de IVA comercial de terceros predeterminado en caso de que no tenga su número de IVA.</td>
	</tr>
	<tr>
	<td>IVA predeterminado para estado desconocido</td>
	<td>Especifica el número de IVA predeterminado para un estado desconocido.</td>
	</tr>
	<tr>
	<td>Código país/región predet.</td>
	<td>Especifica el código de país de recepción predeterminado.</td>
	</tr>
	</table>
	</li>
	<li><b>4.</b> Abra la ficha desplegable <b>Notificación</b> y rellene los campos según sea necesario. Pase el cursor sobre un campo para leer una breve descripción. La siguiente tabla describe algunos de los campos clave: <br>
	<table class="tabla1">
	<tr>
	<th>Campo</th>
	<th>Descripción</th>
	</tr>
	<tr>
	<td>Código def. intercambio datos</td>
	<td>Especifica el código definición de intercambio de datos para generar el archivo de Intrastat. Funciona solo si el campo Dividir archivos de recibos/envíos se establece en No.</td>
	</tr>
	<tr>
	<td>Dividir archivos recepción/envíos</td>
	<td>  Especifica si se comunicarán las recepciones y los envíos en dos archivos independientes.</td>
	</tr>
	<tr>
	<td>Archivo zip (-s)</td>
	<td>Especifica si se agregará el archivo de informe (-s) al archivo zip.</td>
	</tr>
	<tr>
	<td>Código def. interc. datos - Recepción</td>
	<td>Especifica el código de definición de intercambio de datos para generar el archivo de Intrastat para mercancías recibidas. Funciona solo si el campo Dividir archivos de recibos/envíos se establece en Sí.</td>
	</tr>
	<tr>
	<td>Código def. interc. datos - Envío</td>
	<td>Especifica el código de definición de intercambio de datos para generar el archivo de Intrastat para mercancías enviadas. Funciona solo si el campo Dividir archivos de recibos/envíos se establece en Sí.</td>
	</tr>
	</table>
	</li>
	<li><b>5.</b> Abra la ficha rápida <b>Numeración</b> para configurar <b>Números de Intrastat</b>.</li>
	</ul>
	<h3>Otras configuraciones de Intrastat</h3>
	<p class="parrafo nota-importante"><b>Importante</b> Las fichas de cliente y proveedor incluyen un campo, <b>Tipo socio Intrastat</b>, que tiene los mismos valores de opción que el campo <b>Tipo socio</b>: "" (vacío), Compañía y Persona. El campo <b>Tipo socio Intrastat</b> ha reemplazado al campo Tipo socio en los informes de Intrastat. El campo <b>Tipo de socio</b> se utiliza en el Área Única de Pagos en Euros (SEPA) para definir el Esquema de Débito Directo SEPA (Core o B2B). El campo Tipo de socio Intrastat se utiliza solo para informes de Intrastat. De esta forma, puede especificar valores diferentes para los dos campos, si es necesario.
	Si el <b>campo Tipo socio Intrastat</b> se deja en blanco, el <b>valor del Tipo socio</b> se utiliza para los informes de Intrastat.</p>
	<p class="parrafo">Excepto por <b>Configuración del informe Intrastat, Definiciones de intercambio de datos</b> y <b>Lista de verificación del informe Intrastat</b>, también configurar otros ajustes: </p>
	<table class="tabla1">
	<tr>
	<th>Página</th>
	<th>Descripción</th>
	</tr>
	<tr>
	<td>Países/regiones</td>
	<td>Antes de comenzar a utilizar los informes de Intrastat, también debe configurar la página Países/regiones. En esta página, debe agregar el Código de país/región de la UE y el Código Intrastat para especificar un código para el país/región con el que está operando, ya que se utilizará en los informes de Intrastat.</td>
	</tr>
	<tr>
	<td>Códigos arancelarios</td>
	<td>En muchos paises, las autoridades aduaneras y fiscales han establecido códigos de 8 dígitos para los distintos productos. Para que los movimientos de productos contengan la información necesaria cuando el sistema los importe en la línea del diario de Intrastat, debe introducir el código de elemeno en la página Códigos arancelarios. Averigüe los códigos correspondientes a los productos que oferta su empresa e introdúzcalos en la página Códigos arancelarios.</td>
	</tr>
	<tr>
	<td>Modos transporte</td>
	<td>Existen siete códigos de un dígito para los modos de transporte de Intrastat. 1 para mar, 2 para ferrocarril, 3 para carretera, 4 para aire, 5 para correo, 7 para instalaciones fijas y 9 para autopropulsión (por ejemplo, transportar un coche conduciéndolo). Business Central no requiere estos códigos específicos; sin embargo, recomendamos que las descripciones proporcionen un significado similar.</td>
	</tr>
	<tr>
	<td>Naturalezas transacciones</td>
	<td>Los países y regiones tienen diferentes códigos para los tipos de transacciones de Intrastat, como la compra y venta ordinaria, el intercambio de mercancías devueltas y el intercambio de mercancías no devueltas. Configure todos los códigos que se aplican a su país o región. Luego estos códigos se usan en la ficha despegable Comercio exterior en los documentos de venta y compra, y cuando procese las devoluciones.</td>
	</tr>
	<tr>
	<td>Especificación transacciones</td>
	<td>Configure códigos para complementar las descripciones del tipo de transacción.</td>
	</tr>
	</table><br>
	<p class="parrafo nota-solo"><b>Nota</b> <br>
	A partir de enero de 2022, Intrastat requiere códigos de naturaleza de transacción diferente para envíos a particulares o empresas sin registro de IVA y empresas registradas con IVA. Para cumplir con este requisito, le recomendamos que revise y/o agregue nuevos códigos de naturaleza de transacción en la página <b>Tipos de transacciones</b> , de acuerdo con los requisitos de su país. También debe comprobar y actualizar el campo <b>Tipo socio Intrastat</b> a Persona para clientes particulares o empresas no registradas a efectos del IVA en la página <b>Cliente</b>. Si no está seguro del Itipo de socio Intrastat o del tipo de transacción que se usará, le recomendamos que consulte a un experto de su país o región.
	</p>
	<h3>Rellenar el informe de Intrastat</h3>
	<ul>
	<li><strong>1.</strong> Elija el icono busqueda que abre la característica Dígame. , escriba <b>Lista de Intrastat</b> y luego elija el enlace relacionado.</li>
	<li><strong>2.</strong> Seleccione la acción <b>Nuevo</b> para crear un nuevo <b>Informe Intrastat</b>.</li>
	<li><strong>3.</strong> Si necesita introducir alguna información interna sobre el <b>Informe Intrastat</b>, complete esta información en el campo <b>Descripción</b>.</li>
	<li><strong>4.</strong> En el campo <b>Período de la estadística</b>, especifique el mes para el que informar datos. Ingrese el período como un número de cuatro dígitos sin espacios ni símbolos. Dependiendo de su país, ingrese primero el mes y luego el año, o viceversa. Por ejemplo, escriba 2206 o 0622 para junio de 2022.</li>
	<li><strong>5.</strong> Elija la acción <b>Proponer líneas</b>. Los campos <b>Fecha inicial</b> y <b>Fecha final</b> aparecerán con las fechas especificadas como periodo estadístico en el encabezado del informe Intrastat.</li>
	<li><strong>6.</strong> En el campo <b>% Coste territorio nacional</b>, puede introducir un porcentaje que cubra el transporte y el seguro. Si escribe un porcentaje, el contenido del campo <b>Valor estadístico</b> del diario es proporcionalmente superior. Pero si desea utilizar esta función, debe cambiar el campo <b>Importe incluido Cargos por artículo a Sí</b>.</li>
	<li><strong>7.</strong> Eventualmente puede establecer configuraciones adicionales en la ficha rápida Adicional: <br>
	<ul>
	<li>a.<b> Omitir Recálculo para Cantidades Cero</b> para especificar que las líneas sin importes no se volverán a calcular durante el trabajo por lotes.</li>
	<li>b.<b> Omitir importes cero</b>  para especificar que los movimientos de producto sin importes no se incluirán en el proceso.</li>
	<li>c.<b> Mostrar movimientos de cargos de producto</b> para especificar si desea mostrar los costes directos que su empresa ha asignado y registrado como cargos de productos.</li>
	<li>d.<b> Omitir movimientos no facturados</b> para especificar si los movimientos de producto que se envían o reciben, pero que aún no se han facturado, deben excluirse del proceso.</li>
	</ul>
	</li>
	<li><strong>8.</strong> Elija <b>Aceptar</b> para iniciar el trabajo por lotes.</li>
	</ul>
	<p class="parrafo">El proceso recupera todos los movimientos de producto en el periodo estadístico y los inserta como líneas en el <b>Informe Intrastat</b>. Pase el cursor sobre un campo para leer una breve descripción.</p>
	<p>Video Configuración de Intrastat - Microsoft Dynamics 365 Business Central <a href="https://www.youtube.com/watch?v=s2_lfyVzHmA">aquí</a>.</p>

	`;
	cuerpo.innerHTML= contenido;
}


/*================
let tableRelation = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `


	`;

	cuerpo.innerHTML= contenido;

	}
=========================*/