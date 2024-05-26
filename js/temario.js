/*============================
Introducción ISTQB
===============================*/

let introduccion = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
  <div class="content_funciones">
  <h2 class="subtitulos">Introducción a ISTQB</h2>
  <p class="parrafo">El International Software Testing Qualifications Board (ISTQB) es una organización global sin fines de lucro dedicada a promover 
  la excelencia en las pruebas de software. Fundada en 2002, ISTQB tiene como objetivo establecer estándares internacionales en el campo de las pruebas de 
  software y certificar a profesionales en base a estos estándares. La misión de ISTQB es mejorar la calidad del software y la eficiencia de las pruebas mediante la definición de un cuerpo de conocimientos común y la creación de un marco de trabajo reconocido a nivel mundial.</p>
  <h3>Tipos de Conceptos: Validación y Verificación:</h3>
  <div class="contentList">
  <p><b>1. Validacion</b></p>
  <ul>
  <li><b>Definicio</b> La validación en el contexto de las pruebas de software se refiere al proceso de evaluar si un producto de software cumple con los requisitos y expectativas del cliente y si es útil para su propósito previsto en el entorno de uso previsto.</li>
  <li><b>Actividades: </b> Las actividades de validación pueden incluir la revisión de requisitos con los stakeholders, la realización de pruebas de aceptación del usuario (UAT), y la evaluación del software en un entorno de producción simulado o real.</li>
  <li><b>Objetivo: </b> El objetivo principal de la validación es garantizar que el software satisfaga las necesidades y expectativas del cliente y sea adecuado para su uso previsto.</li>
  </ul>
  </div>
  <p><b>2. Verificación:</b></p>
  <div class="contentList">
  <ul>
  <li><b>Definición:</b> La verificación se refiere al proceso de evaluar si un producto de software cumple con los estándares y requisitos especificados
   durante el proceso de desarrollo. Se centra en la revisión y evaluación del software en relación con sus especificaciones.</li>
  <li><b>Actividades: </b> Las actividades de verificación incluyen la revisión de código, la ejecución de pruebas de unidad, la inspección de documentos de diseño y 
  la realización de pruebas de integración para garantizar que el software se esté construyendo correctamente.</li>
  <li><b>Objetivo:</b> El objetivo principal de la verificación es garantizar que el software se esté construyendo correctamente según las especificaciones y estándares
  definidos, y que no contenga defectos o desviaciones no deseadas.</li>
  </ul>
  </div>
  <p>Estos dos conceptos, validación y verificación, son fundamentales en el proceso de aseguramiento de la calidad del software y se complementan entre sí para 
  garantizar que el software entregado cumpla con los requisitos del cliente y las expectativas de calidad.</p>

   <h3>Tipos de pruebas</h3>
  <p>Tanto las pruebas dinámicas como estáticas son esenciales en el proceso de desarrollo de software para garantizar que el producto final cumpla con los requisitos y expectativas del cliente, mientras se minimiza el riesgo de errores y defectos.</p>

  <h4>Pruebas Dinámicas:</h4>
  <p>Las pruebas dinámicas implican la ejecución del software para evaluar su comportamiento y desempeño en tiempo de ejecución. Estas pruebas son cruciales para verificar si el software cumple con los requisitos funcionales y no funcionales especificados. Algunos tipos comunes de pruebas dinámicas incluyen:</p>
  <div class="contentList">
    <ul>
      <li><b>Pruebas Funcionales: </b>Verifican que el software cumple con los requisitos funcionales establecidos, como la entrada de datos, el procesamiento y la salida esperada.</li>
      <li><b>Pruebas de Rendimiento: </b> Evalúan el comportamiento del sistema en términos de velocidad, escalabilidad y estabilidad bajo diferentes condiciones de carga y uso.</li>
      <li><b>Pruebas de Usabilidad:</b> Evalúan la facilidad de uso del software y la experiencia del usuario, centrándose en la navegación, la accesibilidad y la satisfacción del usuario.</li>
      <li><b>Pruebas de Regresión: </b> Verifican que las modificaciones o actualizaciones realizadas en el software no introduzcan nuevos defectos ni afecten negativamente a las funcionalidades existentes.</li>
    </ul>
  </div>

  <h4>Pruebas Estáticas:</h4>
  <p>Las pruebas estáticas se centran en revisar y analizar los artefactos de software sin ejecutar el código. Estas pruebas son fundamentales para identificar defectos y problemas en una etapa temprana del ciclo de vida del desarrollo de software. Algunos tipos comunes de pruebas estáticas incluyen:</p>
  <div class="contentList">
    <ul>
      <li><b>Revisión de Código: </b> Consiste en examinar el código fuente para identificar posibles errores, malas prácticas y oportunidades de mejora.</li>
      <li><b>Análisis Estático: </b> Implica el uso de herramientas automatizadas para examinar el código en busca de problemas como vulnerabilidades de seguridad, errores de sintaxis y malos patrones de programación.</li>
      <li><b>Inspección de Documentos: </b> Se realiza para revisar y validar los documentos de requisitos, diseño y especificaciones del software en busca de inconsistencias, ambigüedades y omisiones.</li>
    </ul>
  </div>

  <h4>Importancia y Diferencias:</h4>
<div class="contenList">
  <ul>
    <li><b>Importancia: </b> Ambos tipos de pruebas son fundamentales para garantizar la calidad del software. Las pruebas dinámicas ayudan a validar el comportamiento real del software en tiempo de ejecución, mientras que las pruebas estáticas permiten identificar problemas y defectos en una etapa temprana del proceso de desarrollo, lo que resulta en ahorro de tiempo y recursos.</li>
    <li><b>Diferencias: </b> La diferencia principal entre las pruebas dinámicas y estáticas radica en cuándo y cómo se realizan. Las pruebas dinámicas se llevan a cabo durante la ejecución del software y requieren la interacción con el sistema en tiempo real, mientras que las pruebas estáticas se realizan sin ejecutar el código y se centran en la revisión y análisis de los artefactos del software. Ambos enfoques son complementarios y se utilizan de manera conjunta para garantizar una cobertura exhaustiva de las pruebas y una mayor calidad del software.</li>
  </ul>
</div>

  </div>

	`;
	cuerpo.innerHTML= contenido;

}
/*=====================
Objetivos de las pruebas
========================*/

let  objetivosPruebas = () =>{
    let cuerpo = document.querySelector(".bodyContent");
    let contenido = `
        <div class="content_funciones">
    
            <h2 class="subtitulos">Objetivos de las pruebas</h2>
          <div class="contentList">
            <ul style="list-style-type: decimal;">
          <li><b>Evaluar los productos de trabajo:</b> Uno de los objetivos principales de las pruebas de software es evaluar los productos de trabajo, como el código fuente, los documentos de diseño y los artefactos de software, para identificar cualquier defecto o problema que pueda existir en ellos. Esto ayuda a garantizar que los productos de software cumplan con los estándares de calidad requeridos.</li>
          <li><b>Verificar el cumplimiento de todos los requisitos: </b> Las pruebas de software se utilizan para verificar si el software cumple con todos los requisitos especificados en los documentos de requisitos. Esto implica asegurarse de que todas las funciones, características y comportamientos del software funcionen como se espera según lo definido en los requisitos.</li>
          <li><b>Validar si el objeto de prueba está completo:</b> La validación en las pruebas de software se refiere a confirmar si el software satisface las necesidades y expectativas del cliente y si es útil para su propósito previsto en el entorno de uso previsto. Esto implica asegurarse de que el objeto de prueba, es decir, el software bajo prueba, esté completo y listo para su uso.</li>
          <li><b>Generar confianza en el nivel de calidad del sistema: </b>Un objetivo importante de las pruebas de software es generar confianza en el nivel de calidad del sistema. Esto se logra identificando y corrigiendo defectos en el software antes de su lanzamiento, lo que ayuda a garantizar que el software funcione de manera confiable y satisfactoria para los usuarios finales.</li>
          <li><b>Prevenir defectos: </b> Las pruebas de software también tienen como objetivo prevenir defectos al identificar y corregir problemas en una etapa temprana del ciclo de vida del desarrollo de software. Esto ayuda a evitar que los defectos se propaguen a lo largo del proceso de desarrollo y se conviertan en problemas más costosos y difíciles de solucionar más adelante.</li>
          <li><b>Encontrar fallos y defectos:</b> Un objetivo clave de las pruebas de software es encontrar fallos y defectos en el software mediante la ejecución de diferentes tipos de pruebas, como pruebas funcionales, pruebas de rendimiento, pruebas de seguridad, etc. Esto ayuda a garantizar que el software sea robusto, confiable y seguro.</li>
          <li><b>Proporcionar información para la toma de decisiones:</b> Las pruebas de software proporcionan información crítica que ayuda a los equipos de desarrollo y a los stakeholders a tomar decisiones informadas sobre la calidad del software y los riesgos asociados. Esta información ayuda a priorizar actividades de desarrollo y a asignar recursos de manera efectiva.</li>
          <li><b>Reducir el riesgo de que ocurran defectos en producción: </b> Otro objetivo importante de las pruebas de software es reducir el riesgo de que ocurran defectos en producción. Al identificar y corregir defectos durante el proceso de desarrollo, las pruebas ayudan a minimizar la posibilidad de que se produzcan problemas en el entorno de producción, lo que puede afectar la satisfacción del cliente y la reputación de la empresa.</li>
          <li><b>Cumplir con los requisitos o normas contractuales legales o reglamentarias:</b> Las pruebas de software también se utilizan para garantizar que el software cumpla con los requisitos contractuales, legales o reglamentarios aplicables. Esto es especialmente importante en industrias reguladas donde el cumplimiento de normas específicas es obligatorio para lanzar un producto al mercado.</li>
        </ul>
   </div> 
   <div class="img-content2"><img src="img/pruebas.png" alt=""></div>



    </div>


    `;

    cuerpo.innerHTML= contenido;

    }

/*====================
Probar y Depurar
=============================*/    

let probarDepurar = () =>{
    let cuerpo = document.querySelector(".bodyContent");
    let contenido = `
    <div class="content_funciones">
    
         <h2 class="subtitulos">Probar y Depurar</h2>
   <p>Probar y depurar son dos actividades fundamentales en el proceso de desarrollo de software, y son esenciales para garantizar la calidad del producto final. En el contexto de los exámenes de ISTQB, entender la importancia de probar y depurar es crucial, ya que estas actividades están en el corazón del aseguramiento de la calidad del software.</p>
   <h3>Probar:</h3>
   <div class="contentList">
     <ul>
       <li><b>Validación del Comportamiento del Software: </b>  Las pruebas permiten verificar si el software se comporta como se espera según los requisitos definidos. Este proceso incluye ejecutar el software con diferentes conjuntos de datos, entradas y escenarios para identificar cualquier discrepancia entre el comportamiento real y el esperado.</li>
       <li><b>Identificación de Defectos: </b> Las pruebas revelan defectos y errores en el software. Estos pueden ser funcionales, de rendimiento, de seguridad, o de cualquier otro tipo. Identificarlos temprano en el proceso de desarrollo es clave para corregirlos de manera eficiente y económica.</li>
       <li><b>Mejora de la Calidad del Software: </b> Al encontrar y corregir defectos, las pruebas contribuyen a mejorar la calidad del software. Esto es esencial para garantizar que el software cumpla con las expectativas del cliente y funcione de manera confiable y efectiva.</li>
       <li><b>Cumplimiento de Requisitos:</b> Las pruebas ayudan a garantizar que el software cumpla con los requisitos funcionales y no funcionales definidos en la etapa de especificación. Esto es fundamental para asegurar que el software entregado satisfaga las necesidades del cliente.</li>
     </ul>
   </div>
   <h3>Depurar:</h3>
   <div class="contentList">
     <ul>
       <li><b>Identificación y Corrección de Defectos: </b> Depurar implica identificar, analizar y corregir los defectos encontrados durante las pruebas. Esto incluye la revisión del código, la ejecución de pruebas específicas para reproducir y aislar los problemas, y la modificación del código para eliminar los errores.</li>
       <li><b>Optimización del Rendimiento:</b> La depuración también puede implicar optimizar el rendimiento del software, identificando y corrigiendo cuellos de botella, fugas de memoria u otros problemas que puedan afectar el rendimiento del sistema.</li>
       <li><b>Garantía de Estabilidad: </b>  Depurar es crucial para garantizar la estabilidad del software. Corregir los defectos encontrados durante las pruebas ayuda a evitar fallas y bloqueos inesperados, lo que mejora la experiencia del usuario y la fiabilidad del software.</li>
     </ul>
   </div>
   <p>En resumen, probar y depurar son actividades esenciales en el proceso de desarrollo de software, ya que contribuyen a garantizar la calidad, confiabilidad y funcionalidad del producto final. En el contexto de los exámenes de ISTQB, comprender estos conceptos es fundamental para demostrar conocimiento y comprensión de los principios del aseguramiento de la calidad del software.</p>
   <p>Depurar es un proceso crucial en el desarrollo de software que permite a los desarrolladores identificar y corregir errores en el código para garantizar que el software funcione correctamente y cumpla con los requisitos y expectativas del usuario. Depurar es una habilidad fundamental para cualquier desarrollador de software y es parte integral del ciclo de vida del desarrollo de software.</p>
    <div class="img-content2"><img src="img/pruebas_software_diagrama.png" alt=""></div>
    <h3>¿ Por qué es necesario probar ?</h3>
  <p>Estos puntos destacan la importancia de probar el software desde diferentes perspectivas para garantizar su calidad y cumplimiento con los requisitos del cliente:</p>
  <div class="contentList">
  <ul>
    <li><b>Evaluar que haga lo que tiene que hacer: </b> Las pruebas son necesarias para verificar que el software realiza las funciones y tareas que se espera según los requisitos definidos. Esto implica validar que todas las características y funcionalidades del software funcionen correctamente y produzcan los resultados esperados.</li>
    <li><b>Evaluar que no haga lo que no tiene que hacer: </b> Además de asegurarse de que el software realice las funciones necesarias, las pruebas también ayudan a identificar cualquier comportamiento no deseado o inesperado. Esto incluye errores, fallos de seguridad, o cualquier otra actividad no autorizada que pueda comprometer la integridad del sistema.</li>
    <li><b>Detectar oportunidades de mejora: </b> Durante el proceso de prueba, es común descubrir áreas del software que pueden mejorarse. Esto puede incluir identificar posibles optimizaciones de rendimiento, simplificaciones de procesos, mejoras en la usabilidad o cualquier otra mejora que pueda beneficiar al usuario final.</li>
    <li><b>Cumplir con los objetivos pactados: </b> Las pruebas son esenciales para garantizar que el software cumpla con los objetivos pactados entre el cliente y el equipo de desarrollo. Esto incluye asegurarse de que el software satisfaga todos los requisitos funcionales y no funcionales acordados, así como cumplir con cualquier otro criterio de calidad, rendimiento y seguridad definido en el contrato o acuerdo inicial.</li>
  </ul>
  </div>
    <p>En resumen, probar el software no solo implica verificar que funcione correctamente, sino también garantizar que cumpla con las expectativas del cliente, identificar áreas de mejora y asegurar su conformidad con los objetivos acordados. Estos puntos resaltan la importancia crítica de las pruebas en el desarrollo de software y cómo contribuyen a la entrega de un producto final de alta calidad.</p>

    </div>
    `;

    cuerpo.innerHTML= contenido;

    }

/*==================
principios Pruebas
===================*/
let principiosPruebas = () =>{
    let cuerpo = document.querySelector(".bodyContent");
    let contenido = `
    <div class="content_funciones">
        <h2 class="subtitulos">Principios de las Pruebas</h2>
   <p> Cada uno de estos puntos refleja un principio fundamental en el contexto de las pruebas de software:</p>
   <div class="contentList">
     <ul>
       <li><b>Las pruebas ponen en evidencia defectos:</b> Este principio reconoce que el propósito principal de las pruebas es identificar defectos en el software. A través de la ejecución de pruebas, se busca encontrar errores y problemas en el software, lo que permite corregirlos antes de que afecten la calidad del producto final.</li>
       <li><b>Las pruebas exhaustivas no son posibles: </b> Este principio reconoce que es imposible probar todas las combinaciones posibles de entradas y situaciones de ejecución en un sistema de software. En lugar de intentar realizar pruebas exhaustivas, los equipos de prueba deben priorizar las áreas críticas y los escenarios más probables para maximizar la cobertura y la efectividad de las pruebas.</li>
       <li><b>Probar en fases tempranas: </b> Este principio promueve la idea de realizar pruebas lo antes posible en el ciclo de vida del desarrollo de software. Al identificar y corregir defectos en etapas tempranas del proceso, se reduce el costo y el impacto de los problemas encontrados más adelante en el ciclo de desarrollo.</li>
       <li><b>Agrupamientos de defectos:</b> Este principio reconoce que los defectos tienden a agruparse en ciertas áreas o módulos del software. Por lo tanto, al encontrar un defecto en una parte específica del sistema, es probable que haya otros defectos similares en la misma área. Esto guía a los equipos de prueba para enfocar sus esfuerzos en áreas de alto riesgo y probabilidad de encontrar más defectos.</li>
       <li><b>Paradoja del pesticida: </b> Este principio se basa en la idea de que repetir las mismas pruebas una y otra vez puede llevar a pasar por alto nuevos defectos que surgen con el tiempo. Al igual que los insectos pueden volverse resistentes a un pesticida si se utiliza constantemente, los defectos pueden permanecer sin descubrir si se aplican las mismas pruebas una y otra vez. Por lo tanto, es importante adaptar y evolucionar las estrategias de prueba con el tiempo.</li>
       <li><b>Las pruebas son dependientes del contexto: </b> Este principio reconoce que las estrategias de prueba efectivas dependen del contexto específico del proyecto, incluyendo los requisitos del cliente, las características del sistema, los plazos de entrega y otros factores. No existe una única estrategia de prueba que sea aplicable en todos los casos, por lo que es importante adaptar las prácticas de prueba a las necesidades y características únicas de cada proyecto.</li>
       <li><b>Falacia de ausencia de errores: </b> Este principio señala que la ausencia de errores conocidos en el software no garantiza su calidad ni su correcto funcionamiento. Incluso si un sistema pasa todas las pruebas sin errores, aún puede contener defectos que no se han descubierto. Por lo tanto, las pruebas deben centrarse en encontrar defectos, pero también en validar la funcionalidad y el comportamiento del sistema en diversos escenarios de uso.</li>
     </ul>
   </div>

  <h3>Las pruebas contribuyen al éxito del proyecto de diversas formas:</h3>
   <div class="contentList">
      <ul>
        <li><b>Mejora de la calidad del producto: </b> Las pruebas ayudan a identificar y corregir defectos en el software, lo que resulta en un producto final de mayor calidad. Esto se traduce en una mejor experiencia para el usuario final y una mayor satisfacción del cliente.</li>
        <li><b>Reducción de riesgos: </b> Al identificar y solucionar problemas en etapas tempranas del desarrollo, las pruebas ayudan a reducir los riesgos asociados con el proyecto, como retrasos en el cronograma, costos adicionales y posibles fallas del sistema en producción.</li>
        <li><b>Ahorro de tiempo y recursos: </b> Corregir defectos en etapas tempranas del ciclo de vida del desarrollo de software es más eficiente y económico que hacerlo más tarde en el proceso. Las pruebas contribuyen a este ahorro al identificar y corregir problemas antes de que se conviertan en costosos errores en producción.</li>
        <li><b>Mejora de la satisfacción del cliente: </b> Al garantizar la calidad del software entregado, las pruebas contribuyen a la satisfacción del cliente al cumplir con sus expectativas y requisitos. Un producto final de alta calidad aumenta la confianza del cliente en el equipo de desarrollo y fortalece la relación cliente-proveedor.</li>
        <li><b>Cumplimiento de los objetivos del proyecto: </b> Las pruebas ayudan a garantizar que el software cumpla con los objetivos del proyecto, tanto en términos de funcionalidad como de calidad. Esto incluye asegurarse de que el software satisfaga todos los requisitos definidos y cumpla con los estándares de calidad acordados.</li>
        <li><b>Mejora de la reputación de la empresa: </b> Un software de calidad refleja positivamente en la reputación de la empresa desarrolladora. Las pruebas contribuyen a esta reputación al demostrar el compromiso con la calidad y la excelencia en el desarrollo de software.</li>
      </ul>
   </div>
   <p>En resumen, las pruebas desempeñan un papel crucial en el éxito del proyecto al mejorar la calidad del producto, reducir riesgos, ahorrar tiempo y recursos, mejorar la satisfacción del cliente, cumplir con los objetivos del proyecto y mejorar la reputación de la empresa desarrolladora. Como resultado, las pruebas son una inversión esencial para cualquier proyecto de desarrollo de software.</p>

   <h3>Factores que Influyen en las pruebas</h3>
   <br>
   <p>Cada uno de estos factores influyen en la planificación y ejecución de las pruebas de software de la siguiente manera:</p>

   <div class="contentList">
     <ul>
       <li><b>Modelo de ciclo de vida y metodología: </b>  El modelo de ciclo de vida del desarrollo de software y la metodología utilizada determinan cuándo y cómo se realizan las pruebas. Por ejemplo, en un enfoque de desarrollo ágil, las pruebas se integran continuamente durante todo el proceso de desarrollo, mientras que en un enfoque en cascada, las pruebas tienden a ocurrir en etapas específicas, como después del desarrollo.</l>
       <li><b>Tipos o niveles de pruebas:</b>  Los diferentes tipos o niveles de pruebas, como pruebas unitarias, de integración, de sistema y de aceptación, influirán en la planificación y ejecución de las pruebas. Cada tipo de prueba tiene sus propios objetivos, alcance y técnicas de ejecución.</l>
       <li><b>Riesgos: </b> Los riesgos identificados en el proyecto, como la complejidad técnica, los plazos ajustados o los cambios frecuentes en los requisitos, influirán en la estrategia de prueba. Las pruebas pueden priorizarse en áreas de alto riesgo y se pueden dedicar más recursos a mitigar esos riesgos.</l>
       <li><b>Madurez de la organización:</b> La madurez de la organización en términos de procesos de desarrollo y prácticas de prueba afectará la efectividad de las pruebas. Una organización con procesos de prueba bien establecidos y maduros es más probable que tenga éxito en la ejecución de pruebas efectivas.</l>
       <li><b>Dominio del negocio:</b> El conocimiento del negocio y del dominio de la aplicación impactará en la identificación de los requisitos y escenarios de prueba relevantes. Los equipos de prueba con un buen entendimiento del negocio pueden diseñar pruebas más efectivas que reflejen las necesidades del usuario final.</l>
       <li><b>Restricciones:</b> Las restricciones, como limitaciones de tiempo, recursos o presupuesto, pueden afectar la planificación y ejecución de las pruebas. Es importante equilibrar estas restricciones con la necesidad de realizar pruebas exhaustivas y efectivas.</l>
       <li><b>Presupuesto: </b> El presupuesto disponible influirá en la cantidad de recursos y herramientas que se pueden asignar a las pruebas. Un presupuesto limitado puede requerir que se prioricen ciertas actividades de prueba sobre otras.</l>
       <li><b>Disponibilidad de recursos: </b> La disponibilidad de recursos humanos y técnicos, como personal de prueba, herramientas de prueba y entornos de prueba, afectará la capacidad de ejecutar pruebas de manera efectiva y oportuna.</l>
       <li><b>Plazos:</b> Los plazos de entrega del proyecto determinarán el tiempo disponible para realizar pruebas. Los plazos ajustados pueden requerir estrategias de prueba más ágiles y enfocadas en áreas críticas del software.</l>
       <li><b>Acuerdos contractuales:</b> Los acuerdos contractuales con los clientes o partes interesadas pueden especificar requisitos de prueba específicos que deben cumplirse, así como métricas de calidad que deben alcanzarse.</l>
       <li><b>Estándares a seguir: </b> Los estándares de la industria y las mejores prácticas en pruebas de software, como las definidas por ISTQB, pueden influir en la forma en que se planifican y ejecutan las pruebas, asegurando la conformidad con las normas reconocidas de calidad del software.</l>
     </ul>
   </div>

    </div>
    `;

    cuerpo.innerHTML= contenido;

    }

/*==================
Plan de Pruebas
=====================*/

    let planPruebas = () =>{
    let cuerpo = document.querySelector(".bodyContent");
    let contenido = `
    <div class="content_funciones">
        <h2 class="subtitulos">Estructura del plan de Pruebas</h2>
  <p><b>1.- Actividades</b></p>
    <div class="contentList">
      <ul>
        <li><b>Planificación de la prueba: </b> Esta actividad implica definir los objetivos, alcance, estrategia, recursos y calendario para las pruebas. Se establecen los criterios de aceptación y se identifican los riesgos asociados con las pruebas.</li>
        <li><b>Monitorización y control de la prueba: </b> Durante esta actividad, se supervisa el progreso de las pruebas, se gestionan los recursos y se toman medidas correctivas según sea necesario. Se garantiza que las pruebas se realicen según lo planificado y que se cumplan los objetivos establecidos.</li>
        <li><b>Análisis de la prueba: </b> En esta etapa, se analizan los requisitos y se definen los escenarios y casos de prueba necesarios para cubrirlos. Se identifican los datos de prueba y se establecen los criterios de aceptación.</li>
        <li><b>Diseño de la prueba: </b> Aquí se desarrollan los casos de prueba detallados, incluyendo los pasos de prueba, datos de entrada, resultados esperados y condiciones de prueba. Se define la estrategia de prueba y se crean los artefactos de prueba necesarios.</li>
        <li><b>Implementación de la prueba: </b> Esta actividad implica la preparación del entorno de prueba, la configuración de herramientas de prueba y la preparación de datos de prueba. Se asegura que todo esté listo para la ejecución de las pruebas.</li>
        <li><b>Ejecución de la prueba: </b>  Durante esta fase, se ejecutan los casos de prueba según lo planeado. Se registran los resultados de la prueba y se documentan los defectos encontrados.</li>
        <li><b>Finalización de la prueba (compleción): </b> En esta etapa, se revisan y validan los resultados de las pruebas. Se preparan informes de prueba y se realizan actividades de cierre, como la liberación de recursos de prueba y la revisión de lecciones aprendidas.</li>
      </ul>
    </div>
  <p><b>2.- Productos</b></p>
     <div class="contentList">
      <ul>
        <li><b>Planificación de la prueba: </b> Producto: Plan de pruebas, que incluye los objetivos, alcance, estrategia, recursos y calendario de las pruebas.</li>
        <li><b>Monitorización y control de la prueba:</b>  Producto: Informes de seguimiento de pruebas, que muestran el progreso de las pruebas, la utilización de recursos y las medidas correctivas tomadas.</li>
        <li><b>Análisis de la prueba: </b> Producto: Matriz de trazabilidad de la prueba, que vincula los requisitos a los casos de prueba.</li>
        <li><b>Diseño de la prueba: </b> Producto: Casos de prueba detallados, que incluyen los pasos de prueba, datos de entrada, resultados esperados y condiciones de prueba.</li>
        <li><b>Implementación de la prueba: </b> Producto: Entorno de prueba configurado y preparado, que incluye herramientas de prueba instaladas y datos de prueba disponibles.</li>
        <li><b>Ejecución de la prueba: </b> Producto: Informes de resultados de la prueba, que muestran los resultados de la ejecución de los casos de prueba y los defectos encontrados.</li>
        <li><b>Finalización de la prueba (compleción): </b> Producto: Informe de cierre de pruebas, que resume los resultados de las pruebas, las lecciones aprendidas y las recomendaciones para futuros proyectos.</li>
      </ul>
    </div>
  <p><b>3.- Trazabilidad</b></p>
    <div class="contentList">
      <ul>
        <li><b>El poder de auditar las pruebas: </b>  La trazabilidad permite rastrear el origen y el destino de cada prueba, lo que facilita la auditoría y la revisión de las pruebas realizadas.</li>
        <li><b>Cumplir con los requerimientos de TI: </b> La trazabilidad asegura que cada requisito esté cubierto por al menos un caso de prueba, lo que garantiza el cumplimiento con los requisitos del sistema.</li>
        <li><b>Tener mejores informes:</b>  La trazabilidad facilita la generación de informes detallados sobre el estado y los resultados de las pruebas, lo que proporciona una visión clara del progreso y la calidad del proyecto.</li>
      </ul>
    </div>
    <h3>Psicologia detras de las Pruebas</h3>
    <p>La psicología del proceso de pruebas juega un papel crucial en la efectividad y el éxito de las pruebas de software. Aquí están los puntos clave relacionados con la psicología del proceso de pruebas:</p>
    <p><b>1. Sesgo de confirmación:</b></p>
    <div class="contentList">
      <ul>
        <li>El sesgo de confirmación es la tendencia humana a buscar, interpretar y recordar información de manera que confirme nuestras creencias o hipótesis preexistentes. En el contexto de las pruebas de software, este sesgo puede llevar a los testers a buscar principalmente evidencia que confirme que el software funciona como se espera, ignorando posibles problemas o defectos. Para mitigar este sesgo, es importante que los testers mantengan una mente abierta y estén dispuestos a considerar todas las posibilidades, incluyendo la presencia de defectos.</li>
      </ul>
    </div>
    <p><b>2. Recomendaciones:</b></p>
    <div class="contentList">
      <ul>
        <li><b>Actitud colaborativa:</b> Fomentar una actitud colaborativa entre el equipo de desarrollo y el equipo de pruebas puede mejorar la eficacia de las pruebas al promover una comunicación abierta, la resolución conjunta de problemas y un enfoque compartido en la calidad del producto.</li>
        <li><b>Enfatizar en los beneficios de las pruebas:</b> Destacar los beneficios de las pruebas, como la mejora de la calidad del producto, la reducción de riesgos y costos, y la satisfacción del cliente, puede motivar a los miembros del equipo a participar activamente en el proceso de pruebas.</li>
        <li><b>Comunicación neutral basada en hechos:</b> Mantener una comunicación neutral y basada en hechos durante el proceso de pruebas ayuda a minimizar la influencia de sesgos personales y emociones en la evaluación de los resultados de las pruebas.</li>
        <li><b>Empatía: </b> Desarrollar empatía hacia los usuarios finales y comprender sus necesidades y expectativas puede guiar la selección de casos de prueba relevantes y mejorar la calidad del proceso de pruebas.</li>
        <li><b>Confirmar entendimiento: </b> Asegurarse de que todos los miembros del equipo comprendan claramente los requisitos, objetivos y expectativas del proceso de pruebas ayuda a alinear sus esfuerzos y a minimizar malentendidos o discrepancias.</li>
      </ul>
    </div>
    <p><b>3. Forma de pensar del tester y el desarrollador es diferente:</b></p>
    <div class="contentList">
      <ul>
        <li>Los testers tienden a adoptar una mentalidad crítica y orientada a la detección de defectos, mientras que los desarrolladores a menudo se centran en la creación y el funcionamiento del software.</li>
        <li>Esta diferencia en la perspectiva puede llevar a enfoques complementarios en el proceso de pruebas, donde los testers buscan activamente defectos y los desarrolladores se esfuerzan por mejorar la calidad y el rendimiento del software.</li>
        <li>Fomentar la colaboración y la comunicación entre testers y desarrolladores puede ayudar a superar estas diferencias y promover un enfoque integrado y efectivo en las pruebas de software.</li>
      </ul>
    </div>
    <p><b>4. Independencia de las pruebas:</b></p>
    <div class="contentList">
      <ul>
        <li>La independencia de las pruebas se refiere a la separación de responsabilidades entre el equipo de desarrollo y el equipo de pruebas para garantizar la objetividad y la imparcialidad en la evaluación del software.</li>
        <li>Al mantener la independencia de las pruebas, se evita el conflicto de intereses y se promueve una evaluación imparcial de la calidad del software.</li>
        <li>Sin embargo, es importante mantener una comunicación abierta y una colaboración efectiva entre los equipos de desarrollo y pruebas para garantizar que se aborden adecuadamente los problemas identificados durante las pruebas.</li>
     </ul>
    </div>
    <h4> El plan de pruebas es un documento fundamental en el proceso de desarrollo de software, y tener uno bien estructurado conlleva una serie de beneficios importantes:</h4>

    <div class="contentList">
      <ul>
        <li><b>Organización y claridad: </b> Un plan de pruebas bien estructurado proporciona una visión clara de los objetivos, alcance, estrategias y recursos necesarios para llevar a cabo las pruebas de manera efectiva. Esto ayuda a mantener a todo el equipo enfocado y alineado en cuanto a las actividades de prueba que se deben realizar.</li>
        <li><b>Ahorro de tiempo y recursos:</b> Al tener un plan de pruebas detallado y bien definido desde el principio, se evitan confusiones y retrabajos posteriores. Esto conduce a una utilización más eficiente de los recursos y ahorra tiempo que de otro modo se gastaría en corregir errores y defectos encontrados más tarde en el proceso de desarrollo.</li>
        <li><b>Identificación temprana de riesgos:</b> El proceso de elaboración de un plan de pruebas implica identificar y evaluar los riesgos asociados con el proyecto de desarrollo de software. Esto permite a los equipos de proyecto tomar medidas proactivas para mitigar estos riesgos y prepararse para posibles problemas que puedan surgir durante las pruebas.</li>
        <li><b>Garantía de calidad: </b>  Un plan de pruebas bien estructurado incluye criterios de aceptación y métricas de calidad que se utilizarán para evaluar el éxito del proyecto. Esto asegura que el software entregado cumpla con los estándares de calidad y satisfaga las necesidades y expectativas del cliente.</li>
        <li><b>Facilita la comunicación: </b> El plan de pruebas sirve como un punto de referencia compartido para todos los miembros del equipo, facilitando la comunicación y la colaboración entre los diferentes roles y departamentos involucrados en el proyecto. Todos tienen una comprensión clara de lo que se espera en términos de pruebas y calidad del software.</li>
        <li><b>Documentación y trazabilidad: </b> El plan de pruebas actúa como una referencia documentada para las actividades de prueba realizadas durante todo el proyecto. Esto proporciona trazabilidad, permitiendo que los equipos rastreen y auditen las pruebas realizadas, los resultados obtenidos y las decisiones tomadas a lo largo del ciclo de vida del proyecto.</li>
      </ul>
    </div>
    <p>En resumen, un plan de pruebas bien estructurado es esencial para el éxito del proyecto de desarrollo de software, ya que proporciona organización, claridad, eficiencia, calidad, comunicación, documentación y trazabilidad en todas las actividades de prueba realizadas.</p>
       <div class="img-content2"><img src="img/Test-plan.png" alt=""></div>

    </div>
    `;

    cuerpo.innerHTML= contenido;

    }

/*===============
    Glosario
================*/
let glosario = () =>{
    let cuerpo = document.querySelector(".bodyContent");
    let contenido = `
    <div class="content_funciones">
        <h2 class="subtitulos">Glosario de ISTQ</h2>
  <div class="contentList">
    <ul>
      <li><b>Análisis de prueba: </b><span class="verde">"Test Analysis"</span> El análisis de prueba es el proceso de revisar los requisitos, especificaciones y otros artefactos relacionados con el software para identificar elementos que puedan ser objeto de prueba. Esto incluye identificar funciones, características y escenarios que deben ser probados para garantizar la calidad del software.</li>
      <li><b>Aseguramiento de la calidad: </b><span class="verde">"Quality Assurance"</span> El aseguramiento de la calidad es el proceso de planificar, coordinar y ejecutar actividades diseñadas para garantizar que un producto o servicio cumpla con los requisitos de calidad especificados. Esto incluye establecer estándares de calidad, realizar revisiones y auditorías, y asegurar el cumplimiento de procesos y procedimientos definidos.</li>
      <li><b>Base de prueba: </b><span class="verde">"Test Basis"</span> La base de prueba es la información y los artefactos utilizados como referencia para el diseño, implementación y ejecución de pruebas. Esto incluye los requisitos, especificaciones, casos de uso, diseños de sistemas, entre otros documentos relacionados con el software que sirven como punto de partida para la creación de pruebas.</li>
      <li><b>Calendario de ejecución de prueba: </b><span class="verde">"Test Execution Schedule"</span> El calendario de ejecución de prueba es un plan detallado que establece cuándo se llevarán a cabo las actividades de prueba durante el ciclo de vida del proyecto. Esto incluye la programación de la ejecución de casos de prueba, la asignación de recursos y la gestión de plazos para garantizar que las pruebas se realicen de manera oportuna y eficiente.</li>
      <li><b>Calidad: </b><span class="verde">"Quality"</span> La calidad se refiere al grado en que un producto o servicio cumple con los requisitos y expectativas del cliente. En el contexto del desarrollo de software, la calidad se relaciona con la ausencia de defectos, la funcionalidad adecuada, el rendimiento satisfactorio y la usabilidad del software.</li>
      <li><b>Caso de prueba: </b><span class="verde">"Test Case"</span> Un caso de prueba es un conjunto de condiciones o acciones que se ejecutan durante la prueba para verificar el comportamiento o la funcionalidad de un componente o sistema de software. Cada caso de prueba tiene un resultado esperado que se compara con el resultado real durante la ejecución de la prueba.</li>
      <li><b>Causa raíz: </b><span class="verde">"Root Cause"</span> La causa raíz es el origen o la fuente de un problema o defecto en el software. Identificar la causa raíz es importante para comprender por qué ocurrió un problema y tomar medidas correctivas efectivas para evitar que vuelva a ocurrir en el futuro.</li>
      <li><b>Cobertura: </b><span class="verde">"Coverage"</span> La cobertura se refiere al grado en que un conjunto de pruebas cubre los requisitos o funcionalidades de un sistema de software. Puede incluir la cobertura de código, la cobertura de requisitos y la cobertura de casos de uso, entre otros tipos de cobertura.</li>
      <li><b>Completación de la prueba: </b><span class="verde">"Test Completion"</span> La completación de la prueba se refiere al estado en el que todas las actividades de prueba planificadas se han realizado según lo previsto. Esto incluye la ejecución de casos de prueba, la revisión de resultados y la documentación de hallazgos.</li>
      <li><b>Condición de prueba: </b><span class="verde">"Test Condition"</span> Una condición de prueba es un criterio específico que debe cumplirse durante la ejecución de un caso de prueba para determinar si la funcionalidad o el comportamiento del sistema de software es correcto.</li>
      <li><b>Datos de prueba: </b><span class="verde">"Test Data"</span> Los datos de prueba son los valores, entradas o condiciones utilizados durante la ejecución de casos de prueba para validar el comportamiento del software. Pueden incluir datos de entrada, datos esperados y datos de prueba de esquina para probar diferentes escenarios.</li>
      <li><b>Defecto: </b><span class="verde">"Defect"</span> Un defecto es una discrepancia o problema en el software que causa un comportamiento no deseado o incorrecto. También se conoce como bug o error y puede surgir durante cualquier etapa del ciclo de vida del desarrollo de software.</li>
      <li><b>Depuración: </b><span class="verde">"Debugging"</span> La depuración es el proceso de identificar, analizar y corregir defectos en el código de software para restaurar su funcionalidad correcta. Implica localizar la causa raíz de un problema y realizar cambios en el código para solucionarlo.</li>
      <li><b>Diseño de prueba: </b><span class="verde">"Test Design"</span> El diseño de prueba es el proceso de crear casos de prueba y planificar estrategias de prueba basadas en los requisitos y especificaciones del software. Esto implica identificar las condiciones de prueba, definir escenarios de prueba y seleccionar técnicas y herramientas de prueba apropiadas.</li>
      <li><b>Control de la prueba: </b><span class="verde">"Test Control"</span> El control de la prueba es el proceso de supervisar y gestionar las actividades de prueba para asegurar que se ejecuten de acuerdo con el plan de pruebas establecido. Esto implica monitorear el progreso de las pruebas, gestionar recursos, identificar y resolver problemas, y tomar decisiones para garantizar el éxito del proceso de prueba.</li>
      <li><b>Ejecución de prueba: </b><span class="verde">"Test Execution"</span> La ejecución de prueba es el proceso de llevar a cabo los casos de prueba según lo definido en el plan de pruebas. Esto implica ejecutar los casos de prueba, registrar los resultados obtenidos, investigar y documentar cualquier defecto encontrado, y validar el comportamiento del software en relación con los criterios de aceptación definidos.</li>
      <li><b>Error: </b><span class="verde">"Error"</span> Un error es una acción humana que produce un resultado incorrecto o inesperado en el software. También puede referirse a una discrepancia entre el comportamiento esperado y el comportamiento real del sistema.</li>
      <li><b>Fallo: </b><span class="verde">"Failure"</span> Un fallo es la ocurrencia de un comportamiento incorrecto, inesperado o no deseado del software durante su ejecución. Es el resultado observable de un defecto en el software y puede manifestarse como un error en la salida o un comportamiento inconsistente con los requisitos.</li>
      <li><b>Juego de prueba: </b><span class="verde">"Test Suite"</span> Un juego de prueba es un conjunto de casos de prueba relacionados que se agrupan y se ejecutan juntos para validar una característica específica, un componente o una funcionalidad del software. Los juegos de prueba pueden incluir diferentes tipos de pruebas, como pruebas unitarias, pruebas de integración o pruebas de aceptación del usuario.</li>
      <li><b>Implementación de prueba: </b><span class="verde">"Test Implementation"</span> La implementación de prueba es el proceso de preparar y configurar el entorno de prueba, incluyendo la instalación de herramientas de prueba, la creación de datos de prueba y la configuración de casos de prueba para su ejecución. Esto asegura que todo esté listo para llevar a cabo las actividades de prueba de acuerdo con el plan establecido.</li>
      <li><b>Monitorización de prueba: </b><span class="verde">"Test Monitoring"</span> La monitorización de prueba es el proceso de supervisar y controlar el progreso y el estado de las actividades de prueba en curso. Esto incluye el seguimiento de la ejecución de casos de prueba, la revisión de resultados, la gestión de recursos y la identificación de problemas para garantizar que las pruebas se realicen de manera efectiva y eficiente.</li>
      <li><b>Objetivo de prueba: </b><span class="verde">"Test Objective"</span> El objetivo de prueba es la declaración clara y específica de lo que se espera lograr con un conjunto de pruebas. Describe el propósito y el alcance de las pruebas y establece los criterios de aceptación que deben cumplirse para considerar las pruebas exitosas.</li>
      <li><b>Objeto de prueba: </b><span class="verde">"Test Object"</span> El objeto de prueba es el componente o sistema de software que se somete a pruebas. Puede ser un módulo individual, una función específica, un subsistema o el sistema completo, dependiendo del alcance y los objetivos de las pruebas.</li>
      <li><b>Oráculo de prueba: </b><span class="verde">"Test Oracle"</span> El oráculo de prueba es un criterio o mecanismo utilizado para determinar si el resultado de una prueba es correcto o no. Puede ser un conjunto de expectativas, un conjunto de datos de referencia o cualquier otra fuente de información que se utilice para validar la salida esperada del sistema de software durante las pruebas.</li>
      <li><b>Planificación de prueba: </b><span class="verde">"Test Planning"</span> La planificación de prueba es el proceso de definir los objetivos, alcance, estrategias, recursos y calendario para las actividades de prueba. Esto incluye la identificación de los elementos de prueba, la selección de las técnicas y herramientas de prueba adecuadas, y la elaboración de un plan detallado para llevar a cabo las pruebas de manera efectiva y eficiente.</li>
      <li><b>Procedimiento: </b><span class="verde">"Procedure"</span> Un procedimiento es una serie de pasos o acciones secuenciales que se siguen para llevar a cabo una tarea o alcanzar un objetivo específico. En el contexto de las pruebas de software, un procedimiento puede referirse a un conjunto de pasos detallados para ejecutar un caso de prueba o realizar una actividad de prueba específica.</li>
      <li><b>Guión de prueba: </b><span class="verde">"Test Script"</span> Un guión de prueba es un documento que contiene una secuencia de pasos detallados que se deben seguir para ejecutar un caso de prueba específico. Incluye información sobre las acciones a realizar, los datos de entrada a utilizar y los resultados esperados que se deben verificar durante la ejecución de la prueba.</li>
      <li><b>Producto de prueba: </b><span class="verde">"Test Artifact"</span> Un producto de prueba es cualquier artefacto o documento generado durante el proceso de prueba de software. Esto puede incluir casos de prueba, informes de resultados de pruebas, registros de defectos, matrices de trazabilidad, entre otros documentos que respaldan y documentan las actividades de prueba realizadas.</li>
      <li><b>Prueba: </b><span class="verde">"Test"</span> Una prueba es un proceso sistemático para evaluar el comportamiento o el rendimiento de un componente o sistema de software. Consiste en ejecutar un conjunto de casos de prueba y comparar los resultados obtenidos con los resultados esperados para validar el funcionamiento del software y detectar posibles defectos.</li>
      <li><b>Trazabilidad: </b><span class="verde">"Traceability"</span> La trazabilidad es la capacidad de rastrear y seguir la historia, la aplicación o la ubicación de un elemento a lo largo del tiempo. En el contexto de las pruebas de software, la trazabilidad se refiere a la capacidad de vincular y rastrear los requisitos, los casos de prueba, los defectos y otros artefactos relacionados con el software para garantizar la transparencia y la integridad del proceso de desarrollo y pruebas.</li>
      <li><b>Validación: </b><span class="verde">"Validation"</span> La validación en el contexto de las pruebas de software se refiere al proceso de evaluación para determinar si un sistema cumple con los requisitos y expectativas del cliente y si es útil para su propósito previsto en el entorno de uso previsto. Se centra en asegurar que el software construido sea el correcto y cumpla con las necesidades del usuario final.</li>
      <li><b>Verificación: </b><span class="verde">"Verification"</span> La verificación se refiere al proceso de evaluación para determinar si un producto de software cumple con los estándares y requisitos especificados durante el proceso de desarrollo. Se centra en la revisión y evaluación del software en relación con sus especificaciones para garantizar que se esté construyendo correctamente. La verificación asegura que el software se construya correctamente.</li>

    </ul>
  </div> 
    </div>
    `;

    cuerpo.innerHTML= contenido;

    }


/*=======================
Habilidades en testing
=========================*/    
let HabilidadesTesting = () =>{
    let cuerpo = document.querySelector(".bodyContent");
    let contenido = `
    <div class="content_funciones">
    
        <h2 class="subtitulos">Habilidades esenciales y buenas prácticas de testing</h2>
  <p>
Las habilidades esenciales y las buenas prácticas en pruebas de software incluyen una comprensión sólida de los principios de prueba, capacidad para diseñar casos de prueba efectivos, habilidades de comunicación para colaborar con equipos multidisciplinarios, aptitud para analizar y solucionar problemas, así como una mentalidad orientada a la calidad y la mejora continua. Es crucial tener habilidades técnicas para utilizar herramientas de prueba automatizadas y conocimientos en el dominio de la aplicación bajo prueba. Las buenas prácticas incluyen la planificación y priorización de pruebas, la documentación clara de casos de prueba y resultados, la atención a la trazabilidad y la retroalimentación continua para mejorar el proceso de prueba y la calidad del software.</p>
<h3>Habilidaqdes Genéricas requeridas</h3>
<div class="contentList">
  <ul>
    <li><b>Conocimiento de testing: </b>Esta habilidad implica entender los principios, técnicas y metodologías de prueba. Incluye conocimiento sobre tipos de pruebas, estrategias de prueba, herramientas de prueba y estándares de calidad relacionados con la industria del desarrollo de software.</li>
    <li><b>Minuciosidad: </b> La minuciosidad se refiere a la capacidad de prestar atención a los detalles y realizar pruebas exhaustivas para identificar incluso los errores más pequeños o sutiles en el software. Esto implica seguir procedimientos meticulosamente y realizar un análisis profundo durante las pruebas.</li>
    <li><b>Conocimientos técnicos: </b> Esto incluye comprensión de lenguajes de programación, tecnologías de desarrollo de software, sistemas operativos y arquitecturas de aplicaciones. Los testers deben ser capaces de comprender el funcionamiento interno del software que están probando y utilizar herramientas técnicas para automatizar pruebas cuando sea necesario.</li>
    <li><b>Conocimientos del dominio: </b> Esta habilidad implica comprender el contexto y los requisitos específicos del negocio o la industria para la cual se está desarrollando el software. Los testers necesitan conocer el entorno operativo y las expectativas del usuario final para asegurarse de que las pruebas sean relevantes y efectivas dentro de ese contexto.</li>
    <li><b>Pensamiento analítico: </b>  Implica la capacidad de analizar y comprender los requisitos del sistema, así como las posibles áreas de riesgo y vulnerabilidad. Los profesionales de pruebas necesitan ser capaces de descomponer problemas complejos en componentes más simples para abordarlos de manera efectiva.</li>
  </ul>
</div>
<h3>Enfoque de todo el equipo</h3>
<div class="contentList">
  <ul>
    <li><b>Whole Team Approach (Enfoque de equipo completo): </b>Este principio se basa en la idea de que la calidad del software no es responsabilidad exclusiva de un equipo específico, como el equipo de pruebas, sino que es responsabilidad de todo el equipo de desarrollo de software. Esto significa que todos los miembros del equipo, incluidos desarrolladores, testers, analistas de negocio, diseñadores, y otros stakeholders, colaboran activamente para garantizar la calidad del producto final. El enfoque de equipo completo promueve la idea de que todos tienen un interés y una participación en la calidad del software y trabajan juntos hacia ese objetivo común.</li>
    <li><b>Colaboración, comunicación y sinergia: </b>Estos tres elementos son fundamentales para el éxito del enfoque de equipo completo. La colaboración implica trabajar juntos para lograr un objetivo común, aprovechando las habilidades y conocimientos de cada miembro del equipo. La comunicación efectiva garantiza que todos estén alineados en cuanto a los objetivos, requisitos y expectativas del proyecto, y que se compartan de manera transparente los avances, problemas y soluciones. La sinergia se refiere a la combinación de esfuerzos individuales para lograr resultados que sean mayores que la suma de las partes. Cuando hay una colaboración sólida y una comunicación abierta, se crea una sinergia que impulsa la eficacia y la eficiencia del equipo.</li>
    <li><b>Independencia de las pruebas: </b> A pesar de trabajar en equipo, es importante mantener la independencia de las pruebas para garantizar una evaluación imparcial y objetiva del software. Esto significa que los testers deben poder realizar sus pruebas de manera independiente, sin influencia indebida de otros miembros del equipo. La independencia de las pruebas ayuda a identificar y prevenir posibles sesgos o conflictos de interés que podrían afectar la calidad de las pruebas y los resultados obtenidos.</li>
  </ul>
</div>
<h3>Niveles de independencia de las pruebas</h3>
<div class="contentList">
  <ul>
    <li><b>Sin independencia: </b> En este nivel, las pruebas se llevan a cabo sin ningún tipo de separación entre los equipos de desarrollo y de pruebas. Esto significa que los testers pueden estar influenciados por los desarrolladores o por otros miembros del equipo, lo que puede afectar su capacidad para evaluar de manera imparcial la calidad del software. La falta de independencia puede conducir a sesgos y conflictos de interés que comprometen la objetividad de las pruebas y la calidad del producto final.</li>
    <li><b>Cierta independencia:</b> En este nivel, se establece cierto grado de separación entre los equipos de desarrollo y de pruebas, lo que permite que los testers realicen sus actividades de manera más independiente. Aunque aún pueden existir algunas interacciones entre los equipos, se implementan medidas para mitigar los posibles sesgos y conflictos de interés. Esto puede incluir la designación de equipos separados para el desarrollo y las pruebas, así como la implementación de procesos y políticas que promuevan la objetividad y la imparcialidad en las pruebas.</li>
    <li><b>Alta independencia: </b> En este nivel, se promueve una mayor separación entre los equipos de desarrollo y de pruebas, lo que permite que los testers operen con un alto grado de autonomía e independencia. Los equipos de pruebas tienen la autoridad y la libertad para realizar sus actividades sin interferencias externas y pueden tomar decisiones basadas en su propia evaluación de la calidad del software. Se implementan controles y procedimientos adicionales para garantizar que las pruebas se realicen de manera imparcial y objetiva, y que los resultados obtenidos sean fiables y confiables.</li>
    <li><b>Muy alta independencia: </b> En este nivel, se establece una separación casi completa entre los equipos de desarrollo y de pruebas, lo que permite que los testers operen de manera totalmente independiente. Los equipos de pruebas tienen total autonomía para planificar, ejecutar y evaluar sus actividades sin interferencias externas y sin influencia de otros equipos. Se implementan controles y salvaguardias adicionales para garantizar que las pruebas se realicen de manera completamente imparcial y objetiva, y que los resultados obtenidos sean totalmente confiables y libres de sesgos. Este nivel de independencia es típico en organizaciones que requieren un alto nivel de garantía de calidad y cumplimiento de estándares.</li>
  </ul>
</div>

<h3>Ventajas de la independencia:</h3>
<div class="contentList">
  <ul>
    <li><b>Objetividad: </b>La independencia en las pruebas permite una evaluación más objetiva del software, ya que los testers pueden realizar sus actividades sin influencias externas o conflictos de interés. Esto ayuda a identificar de manera más precisa los errores y defectos en el software.</li>
    <li><b>Fiabilidad de los resultados: </b> Al operar de manera independiente, los equipos de pruebas pueden producir resultados más fiables y confiables. La independencia reduce la posibilidad de sesgos y garantiza que las pruebas se realicen de manera imparcial, lo que aumenta la confianza en los resultados obtenidos.</li>
    <li><b>Mayor cobertura de pruebas: </b>  La independencia permite que los testers exploren diferentes aspectos del software sin restricciones externas. Esto puede conducir a una mayor cobertura de pruebas, ya que los testers pueden identificar y abordar una variedad más amplia de escenarios de prueba y casos de uso.</li>
    <li><b>Detección temprana de defectos: </b>Los equipos de pruebas independientes pueden identificar defectos y problemas en el software en etapas tempranas del ciclo de vida de desarrollo, lo que permite su corrección oportuna y reduce los costos asociados con la resolución de problemas en etapas posteriores.</li>
    <li><b>Confianza en la calidad del software: </b>La independencia en las pruebas contribuye a la percepción de calidad del software por parte de los stakeholders, ya que demuestra un compromiso con la objetividad y la excelencia en las actividades de prueba. Esto aumenta la confianza en la calidad del producto final.</li>
  </ul>
</div> 

<h3>Desventajas de la independencia:</h3>
<div class="contentList">
  <ul>
    <li><b>Mayor costo: </b>Mantener equipos de pruebas independientes puede resultar costoso, ya que requiere recursos adicionales en términos de personal, herramientas y procesos. Esto puede ser prohibitivo para algunas organizaciones, especialmente aquellas con presupuestos limitados.</li>
    <li><b>Duplicación de esfuerzos: </b>  La independencia puede llevar a la duplicación de esfuerzos si los equipos de pruebas realizan pruebas similares o idénticas a las realizadas por otros equipos. Esto puede resultar en un uso ineficiente de recursos y tiempo.</li>
    <li><b>Posible falta de alineación: </b> La independencia puede dar lugar a una falta de alineación entre los equipos de desarrollo y de pruebas, lo que puede dificultar la comunicación y la colaboración efectiva entre ellos. Esto puede dar lugar a malentendidos y conflictos que afectan negativamente la calidad del software.</li>
    <li><b>Retrasos en la retroalimentación: </b> La independencia puede conducir a retrasos en la retroalimentación sobre los problemas identificados durante las pruebas, ya que los equipos de pruebas pueden no tener una comunicación directa con los desarrolladores. Esto puede prolongar el tiempo necesario para resolver y corregir los defectos.</li>
    <li><b>Falta de contexto: </b> Los equipos de pruebas independientes pueden carecer del contexto completo del proyecto y del conocimiento detallado del negocio, lo que puede limitar su capacidad para realizar pruebas efectivas y relevantes. Esto puede llevar a la realización de pruebas poco realistas o inadecuadas en relación con las necesidades del usuario final.</li>
  </ul>
</div> 
    </div>
    `;

    cuerpo.innerHTML= contenido;

    }

/*===========================
Modelos de ciclos de vida
===========================*/
let modeloCicloVida = () =>{
    let cuerpo = document.querySelector(".bodyContent");
    let contenido = `
    <div class="content_funciones">
          <h2 class="subtitulos">Modelos de ciclos de vida</h2>
   <p><b>Características</b>:</p>
   <div class="contentList">
     <ul>
       <li><b>Secuencia de actividades: </b> Los modelos de ciclo de vida del software describen la secuencia de actividades que deben llevarse a cabo durante el desarrollo de un sistema de software, desde la concepción hasta la entrega y mantenimiento. Estas actividades pueden incluir la planificación, el análisis, el diseño, la implementación, las pruebas y el despliegue.</li>
       <li><b>Estructura temporal: </b> Cada modelo de ciclo de vida define una estructura temporal para las actividades de desarrollo de software, especificando el orden en el que deben llevarse a cabo las actividades y las relaciones entre ellas. Algunos modelos siguen un enfoque secuencial, mientras que otros pueden permitir iteraciones o repeticiones de ciertas actividades.</li>
       <li><b>Flexibilidad: </b>  Los modelos de ciclo de vida del software varían en su grado de flexibilidad y capacidad para adaptarse a diferentes tipos de proyectos y contextos organizacionales. Algunos modelos son altamente estructurados y prescriptivos, mientras que otros son más adaptables y permiten ajustes según las necesidades específicas del proyecto.</li>
       <li><b>Enfoque en la calidad:</b>  Muchos modelos de ciclo de vida del software incluyen actividades y procesos dedicados a garantizar la calidad del producto final. Esto puede implicar la realización de pruebas en diferentes etapas del ciclo de vida, la revisión continua de los requisitos y diseños, y la retroalimentación del cliente para mejorar continuamente el producto.</li>
       <li><b>Gestión de riesgos: </b> Los modelos de ciclo de vida del software suelen incorporar prácticas para la gestión de riesgos, identificando y mitigando posibles riesgos que puedan surgir durante el desarrollo del proyecto. Esto puede incluir la realización de análisis de riesgos, la asignación de recursos para abordar riesgos específicos, y la planificación de contingencias en caso de que ocurran eventos adversos.</li>
       <li>Para cada actividad de desarrollo, haya una actividad de prueba asociada.</li>
       <li>Cada nivel de prueba tiene objetivos específicos</li>
       <li>El análisis y diseño de la prueba para un nivel comienza durante la actividad de desarrollo correspondiente.</li>
       <li>Los tester participan en discusiones para definir los requisitos y el diseño y están involucrados en la revisión de los productos de trabajo tan pronto como las versiones borradores estén disponibles.</li>
     </ul>
   </div>

   <h4>Modelos más comunes</h4>
   
   <p><b>1.- Modelo Secuencial (Cascada):</b></p>
   <div class="contentList">
     <ul>
      <li>Flujo lineal de actividades</li>
      <li>Enfoques antiguos</li>
       <li><b>Características: </b> El modelo secuencial, también conocido como el modelo en cascada, es uno de los enfoques más antiguos y lineales para el desarrollo de software. En este modelo, las fases del ciclo de vida del desarrollo de software se realizan en secuencia, una después de la otra, de manera que cada fase debe completarse antes de avanzar a la siguiente. Las fases típicas incluyen la planificación, el análisis, el diseño, la implementación, las pruebas y el mantenimiento.</li>
       <li><b>Ventajas: </b> Este modelo es simple y fácil de entender, lo que lo hace adecuado para proyectos pequeños y bien definidos. Además, proporciona una estructura clara y una visión general del progreso del proyecto.</li>
       <li><b>Desventajas: </b> Puede resultar inflexible cuando se enfrenta a cambios de requisitos o problemas descubiertos en etapas posteriores del desarrollo. Los errores detectados en las etapas finales pueden ser costosos y difíciles de corregir. Además, la comunicación entre equipos puede ser limitada debido a la estructura lineal del modelo.</li>
     </ul>
   </div>

   <p><b>2.- Iterativo o incremental</b></p>
   <div class="contentList">
     
   <ul>
     <li><b>Características: </b> El modelo iterativo e incremental divide el desarrollo de software en pequeñas iteraciones o ciclos. En cada iteración, se llevan a cabo actividades de todas las fases del ciclo de vida del desarrollo de software, incluyendo la planificación, el análisis, el diseño, la implementación, las pruebas y el despliegue. Cada iteración produce un incremento funcional del producto, lo que permite obtener retroalimentación temprana y continua del cliente.</li>
     <li><b>Ventajas: </b> Este modelo es más flexible y adaptable que el modelo cascada, ya que permite abordar cambios de requisitos y correcciones de manera más rápida y eficiente. Además, proporciona una mayor visibilidad del progreso del proyecto y permite obtener retroalimentación temprana del cliente.</li>
     <li><b>Desventajas: </b> La gestión de múltiples iteraciones puede ser compleja y requerir una planificación cuidadosa para asegurar que se alcancen los objetivos en cada iteración. Además, la estructura iterativa puede resultar confusa para los stakeholders acostumbrados al modelo cascada.</li>
   </ul>
   </div>
   <p><b>3.- Modelo en Espiral:</b></p>
   <div class="contentList">
     <ul>
       <li><b>Características: </b>El modelo en espiral combina elementos del modelo secuencial con enfoques iterativos y de prototipado. Se divide en ciclos, cada uno de los cuales consiste en cuatro fases: determinación de objetivos, evaluación y reducción de riesgos, desarrollo y validación, y planificación.</li>
       <li><b>Ventajas: </b>Permite una gestión más efectiva de riesgos, ya que cada ciclo se enfoca en la identificación y mitigación de riesgos específicos. Es flexible y puede adaptarse a cambios en los requisitos o circunstancias del proyecto.</li>
       <li><b>Desventajas: </b> Puede requerir más tiempo y recursos debido a la necesidad de realizar múltiples iteraciones. La gestión del riesgo puede ser compleja y requerir habilidades especializadas.</li>
     </ul>
   </div>
   <p><b>4.- Modelo de Desarrollo en Espiral (RUP):</b></p>
   <div class="contentList">
     <ul>
       <li><b>Características: </b>El Proceso Unificado de Desarrollo (RUP) es un marco de desarrollo de software que combina elementos del modelo en espiral con principios de orientación a objetos. Se organiza en fases, cada una de las cuales se centra en aspectos específicos del desarrollo, como la captura de requisitos, el diseño, la implementación y las pruebas.</li>
       <li><b>Ventajas: </b> Proporciona una estructura sólida para el desarrollo de software orientado a objetos y promueve buenas prácticas de ingeniería de software. Es flexible y adaptable a diferentes tipos de proyectos y requisitos.</li>
       <li><b>Desventajas: </b> Puede ser complejo de implementar, especialmente para equipos sin experiencia en desarrollo orientado a objetos. Requiere una planificación cuidadosa y una gestión efectiva de riesgos.</li>
     </ul>
   </div>
   <p><b>5.- Modelo de Desarrollo en Cascada con Iteraciones:</b></p>
    <div class="contentList">
      
   <ul>
     <li><b>Características: </b> Este modelo combina elementos del modelo secuencial (cascada) con enfoques iterativos. Se divide en fases, pero permite iteraciones dentro de cada fase para abordar cambios o mejoras en los requisitos.</li>
     <li><b>Ventajas: </b> Proporciona la estructura y la claridad del modelo cascada, pero con la flexibilidad adicional de las iteraciones. Permite una adaptación más fácil a cambios en los requisitos o necesidades del cliente.</li>
     <li><b>Desventajas: </b> Aún puede ser menos adaptable que otros modelos más iterativos. Requiere una gestión cuidadosa de las iteraciones para evitar problemas de control de cambios o desviaciones del alcance.</li>
   </ul>
    </div>

  <h4>Elegir un modelo de desarrollo de software adecuado depende de varios factores que influyen en el proyecto. Aquí tienes cómo estos puntos pueden influir en la elección del modelo:</h4>
  <div class="contentList">
    <ul>
      <li><b>Objetivos del Proyecto: </b> Los objetivos específicos del proyecto, como la entrega oportuna, la calidad del producto final y la satisfacción del cliente, pueden determinar qué modelo es más adecuado. Por ejemplo, si se prioriza la entrega rápida de un prototipo funcional, un modelo iterativo e incremental puede ser más apropiado. Si se enfatiza la estabilidad y la previsibilidad, el modelo cascada puede ser preferible.</li>
      <li><b>Tipo de Proyecto: </b> El tipo de proyecto, ya sea de desarrollo de software, investigación y desarrollo, o un proyecto interno de la organización, puede influir en la elección del modelo. Proyectos complejos con requisitos cambiantes pueden requerir modelos más flexibles y adaptativos, mientras que proyectos más simples y bien definidos pueden beneficiarse de enfoques más lineales.</li>
      <li><b>Prioridades del Negocio: </b> Las prioridades y las necesidades del negocio, como los plazos de entrega, el presupuesto disponible y los requisitos del cliente, pueden orientar la selección del modelo. Por ejemplo, si el negocio requiere una entrega rápida y continua de valor al cliente, un modelo ágil puede ser la opción preferida.</li>
      <li><b>Riesgos: </b>La evaluación de los riesgos asociados con el proyecto, como los riesgos técnicos, los riesgos de negocio y los riesgos del mercado, puede influir en la elección del modelo. Los modelos iterativos e incrementales permiten abordar y mitigar los riesgos de manera temprana y continua, mientras que los modelos más lineales pueden resultar menos efectivos en situaciones de alta incertidumbre.</li>
      <li><b>Equipo: </b> La experiencia y las habilidades del equipo de desarrollo pueden influir en la elección del modelo. Los equipos con experiencia en prácticas ágiles y colaborativas pueden preferir modelos iterativos e incrementales, mientras que los equipos menos experimentados pueden sentirse más cómodos con enfoques más estructurados y predecibles.</li>
      <li><b>Cultura Organizacional: </b> La cultura organizacional y la tolerancia al cambio pueden influir en la selección del modelo. Las organizaciones con una cultura orientada a la innovación y la adaptabilidad pueden favorecer los modelos ágiles, mientras que las organizaciones más tradicionales pueden preferir enfoques más conservadores y predecibles.</li>
    </ul>
  </div>

    </div>
    `;

    cuerpo.innerHTML= contenido;

    }

/*============================
Niveles de pruebas componentes
============================*/

    let componentes= () =>{
    let cuerpo = document.querySelector(".bodyContent");
    let contenido = `
    <div class="content_funciones">
         <h2 class="Subtitulos">Niveles de Componentes</h2>
   <p>Las pruebas de componentes son un tipo de prueba de software que se centra en verificar el funcionamiento individual de unidades de código o módulos, conocidos como "componentes", dentro de un sistema de software más grande. El objetivo principal de estas pruebas es asegurar que cada componente funcione correctamente de forma aislada, verificando tanto sus aspectos funcionales como no funcionales, y detectando y corrigiendo cualquier defecto o error antes de integrarlo con otros componentes o partes del sistema. Estas pruebas se realizan utilizando diferentes técnicas y herramientas para evaluar el comportamiento y el rendimiento de cada componente, garantizando así su calidad y confiabilidad dentro del contexto del sistema completo.</p>
   <h3>Objetivos principales</h3>
   <div class="contentList">
     <ul>
       <li><b>Reducir el riesgo: </b> Las pruebas de componentes ayudan a reducir el riesgo al identificar y corregir defectos en las unidades individuales de código antes de que se integren en el sistema completo. Al encontrar y solucionar problemas en una etapa temprana del desarrollo, se minimiza la probabilidad de que estos defectos se propaguen y causen problemas más graves en etapas posteriores del proyecto.</li>
       <li><b>Verificar que los comportamientos funcionales y no funcionales del componente son los diseñados y especificados: </b> Las pruebas de componentes se centran en validar tanto los aspectos funcionales como los no funcionales del componente, como su comportamiento esperado, su rendimiento, su seguridad y su usabilidad. Se aseguran de que el componente se comporte de acuerdo con los requisitos y especificaciones establecidos durante la fase de diseño.</li>
       <li><b>Generar confianza en la calidad del componente:  </b>Al realizar pruebas exhaustivas y rigurosas, las pruebas de componentes ayudan a generar confianza en la calidad del componente. Al demostrar que el componente funciona correctamente y cumple con sus especificaciones, se incrementa la confianza en su capacidad para integrarse correctamente en el sistema y cumplir con los objetivos del proyecto.</li>
       <li><b>Encontrar defectos en el componente: </b> Uno de los objetivos principales de las pruebas de componentes es encontrar y corregir defectos en el código del componente. Esto incluye identificar errores de lógica, problemas de rendimiento, vulnerabilidades de seguridad y cualquier otro problema que pueda afectar el funcionamiento del componente en el contexto del sistema más amplio.</li>
       <li><b>Prevenir la propagación de defectos a niveles de prueba superiores: </b> Al identificar y corregir defectos en una etapa temprana del desarrollo, las pruebas de componentes ayudan a prevenir que estos defectos se propaguen a niveles de prueba superiores, como las pruebas de integración y las pruebas del sistema. Esto reduce la cantidad de errores que deben corregirse en etapas posteriores del proyecto, lo que ahorra tiempo y recursos.</li>
     </ul>
   </div>
   <h3>Base de pruebas </h3>
   <div class="contentList">
     <ul>
       <li><b>Diseño detallado: </b>La base de pruebas incluye el diseño detallado del componente, que proporciona una descripción exhaustiva de su estructura, funcionalidad y comportamiento esperado. Esta documentación es fundamental para entender cómo debería comportarse el componente y qué aspectos deben ser probados durante las pruebas.</li>
       <li><b>Código: </b> El código fuente del componente es otro elemento importante de la base de pruebas. Este incluye todas las instrucciones y algoritmos que definen el comportamiento del componente. Durante las pruebas de componentes, se analiza y ejecuta el código para verificar que funcione correctamente según lo especificado en el diseño.</li>
       <li><b>Modelo de datos: </b> En muchos casos, los componentes interactúan con datos, ya sea para procesarlos, almacenarlos o recuperarlos. Por lo tanto, el modelo de datos asociado al componente también forma parte de la base de pruebas. Este modelo describe la estructura y la relación de los datos utilizados por el componente y se utiliza para diseñar casos de prueba que cubran diferentes escenarios de manejo de datos.</li>
       <li><b>Especificaciones de los componentes: </b> Las especificaciones del componente proporcionan detalles adicionales sobre su funcionamiento y comportamiento esperado. Estas especificaciones pueden incluir información sobre los requisitos funcionales y no funcionales, las interfaces de usuario, los protocolos de comunicación y cualquier otra característica relevante del componente. Durante las pruebas de componentes, estas especificaciones se utilizan como referencia para verificar que el componente cumple con los criterios de aceptación definidos.</li>
     </ul>
   </div>
   <h3>Obejeto de pruebas</h3>
   <div class="contentList">
     <ul>
       <li><b>Componentes, unidades o módulos: </b> En las pruebas de componentes, los objetos de prueba son los propios componentes, unidades o módulos que se están evaluando. Estos pueden ser unidades individuales de código, como funciones o métodos, o conjuntos de código relacionados que realizan una función específica dentro del sistema de software. Durante las pruebas, se someten a diferentes escenarios y condiciones para verificar su correcto funcionamiento y detectar posibles defectos.</li>
       <li><b> Código y estructuras de datos: </b> Los objetos de prueba también incluyen el código fuente y las estructuras de datos asociadas al componente o módulo que se está probando. Esto implica evaluar tanto el comportamiento funcional del código como la manipulación adecuada de los datos por parte del componente. Se diseñan casos de prueba específicos para cubrir diferentes aspectos del código y asegurar su robustez y eficacia.</li>
       <li><b>Clases: </b> En el contexto de la programación orientada a objetos, las clases son plantillas para la creación de objetos. En las pruebas de componentes, las clases que componen el componente bajo prueba son también objetos de prueba. Se evalúa la funcionalidad y la interacción de estas clases dentro del componente para asegurar que cumplan con los requisitos y especificaciones establecidos.</li>
       <li><b>Módulos de base de datos: </b> Cuando un componente interactúa con una base de datos, los módulos de base de datos también son considerados objetos de prueba. Esto incluye los procedimientos almacenados, las consultas SQL y otras estructuras relacionadas con la manipulación de datos. Durante las pruebas, se verifica la correcta comunicación y manipulación de los datos por parte del componente, así como su capacidad para mantener la integridad y consistencia de la base de datos.</li>
     </ul>
   </div>
   <h3>Defectos que se encuentran</h3>
   <div class="contentList">
     <ul>
       <li><b>Funcionamiento incorrecto: </b>  Este tipo de defecto ocurre cuando el componente no realiza correctamente la función para la cual fue diseñado. Puede manifestarse como resultados inesperados, errores en la salida o comportamientos inconsistentes con los requisitos especificados. Por ejemplo, un componente de cálculo puede producir resultados incorrectos debido a errores en la lógica de procesamiento.</li>
       <li><b>Problemas de flujo de datos: </b> Los defectos relacionados con el flujo de datos se refieren a errores en la manipulación, transformación o almacenamiento de datos dentro del componente. Esto puede incluir la pérdida de datos, la corrupción de datos, la falta de validación de datos o la incorrecta propagación de datos entre diferentes partes del componente. Por ejemplo, un componente de gestión de datos puede perder información debido a problemas en el proceso de almacenamiento o recuperación de datos.</li>
       <li><b>Código y lógica incorrectos: </b> Estos defectos se relacionan con errores en el código fuente del componente y en la lógica de programación subyacente. Pueden incluir problemas de sintaxis, errores de cálculo, condiciones lógicas incorrectas o malentendidos en la implementación de los requisitos. Por ejemplo, un componente de validación de datos puede no funcionar correctamente debido a errores en las condiciones de las sentencias if o en los cálculos realizados para verificar la validez de los datos.</li>
     </ul>
   </div>
   <h3>Enfoques y responsabilidad </h3>
   <p><b>Enfoques:</b></p>
   <div class="contentList">
     <ul>
       <li>Los desarrolladores tienen un enfoque proactivo en las pruebas de componentes, ya que son responsables de garantizar la calidad del código que producen.</li>
       <li>Utilizan enfoques como las pruebas unitarias para verificar el comportamiento de unidades individuales de código, como funciones o métodos, y las pruebas de integración para validar la interacción entre diferentes componentes.</li>
       <li>Los enfoques pueden incluir técnicas como TDD (Desarrollo Dirigido por Pruebas) donde se escriben las pruebas antes de implementar la funcionalidad, lo que ayuda a garantizar que el código cumpla con los requisitos especificados.</li>
     </ul>
   </div>

   <p><b>Responsabilidades:</b></p>
   <div class="contentList">
     <ul>
       <li>Los desarrolladores son responsables de diseñar, implementar y mantener los componentes de software.</li>
       <li>En términos de pruebas, su responsabilidad principal es escribir y ejecutar pruebas unitarias para validar el comportamiento del código que han escrito.</li>
       <li>Además, pueden ser responsables 
        identificar y corregir defectos encontrados durante las pruebas, así como de colaborar con otros miembros del equipo para realizar pruebas de integración y asegurar la calidad del sistema en su conjunto.</li>
     </ul>
   </div>
   <p>En resumen, los desarrolladores desempeñan un papel crucial en las pruebas de componentes al garantizar la calidad y fiabilidad del código que producen, utilizando enfoques proactivos y asumiendo responsabilidades tanto en la escritura de pruebas como en la corrección de defectos.</p>   
    </div>
    `;

    cuerpo.innerHTML= contenido;

    }

/*============================
Niveles de pruebas componentes
============================*/

let integracionComponentes = () =>{
    let cuerpo = document.querySelector(".bodyContent");
    let contenido = `
    <div class="content_funciones">
    <h2 class="Subtitulos">Integración de componentes</h2> 
  <p> "integración de componentes" se refiere a una fase del proceso de desarrollo de software en la que los diferentes componentes de un sistema se combinan y se prueban en conjunto para asegurar que funcionen de manera cohesiva y se integren correctamente entre sí. Durante esta etapa, los componentes individuales, que pueden haber sido desarrollados y probados por separado, se ensamblan y se someten a pruebas para verificar su interoperabilidad, su comportamiento conjunto y su capacidad para cumplir con los requisitos del sistema. La integración de componentes es crucial para garantizar que el sistema completo funcione como se espera y para detectar y corregir problemas de interoperabilidad y funcionalidad antes de que el software se entregue al cliente o se implemente en producción.</p>
  <h3>Objetivos principales </h3>
  <div class="contentList">
    <ul>
      <li><b>Reducir el riesgo: </b>Durante la integración de componentes, uno de los objetivos principales es reducir el riesgo al detectar y corregir problemas de interoperabilidad y funcionamiento incorrecto antes de que afecten al sistema en su conjunto. Al identificar y abordar estos problemas en una etapa temprana del proceso de desarrollo, se minimiza la probabilidad de que ocurran problemas graves en etapas posteriores del proyecto.</li>
      <li><b>Verificar que los comportamientos funcionales y no funcionales de las interfaces sean los diseñados y especificados: </b>Otro objetivo es asegurar que las interfaces entre los diferentes componentes del sistema funcionen según lo esperado y cumplan con los requisitos especificados. Esto implica verificar tanto los aspectos funcionales, como la comunicación y la transferencia de datos, como los aspectos no funcionales, como el rendimiento, la seguridad y la usabilidad de las interfaces.</li>
      <li><b>Generar confianza en la calidad de las interfaces: </b> La integración de componentes busca generar confianza en la calidad y fiabilidad de las interfaces entre los componentes del sistema. Al demostrar que las interfaces funcionan correctamente y cumplen con sus especificaciones, se incrementa la confianza en la capacidad del sistema para operar de manera eficiente y efectiva en su conjunto.</li>
      <li><b>Encontrar defectos: </b>  Durante el proceso de integración de componentes, se busca identificar y corregir defectos en las interfaces y en la interacción entre los componentes. Esto incluye problemas de comunicación, errores de datos, fallos de interoperabilidad y cualquier otro problema que pueda afectar el funcionamiento del sistema en su conjunto.</li>
      <li><b>Prevenir la propagación de defectos a niveles de prueba superiores: </b> Un objetivo importante es evitar que los defectos detectados durante la integración de componentes se propaguen a niveles de prueba superiores, como las pruebas del sistema. Al abordar estos problemas de manera proactiva y resolverlos en una etapa temprana, se minimiza el impacto en el desarrollo del proyecto y se reduce la necesidad de correcciones costosas en etapas posteriores del ciclo de vida del software.
      </li>
    </ul>
  </div>
  <h3>Base de pruebas </h3>
  <div class="contentList">
    <ul>
      <li><b>Diseño de software y sistemas: </b> La base de pruebas incluye el diseño detallado del software y los sistemas que se están integrando. Esto proporciona una descripción completa de la estructura, la arquitectura y las interacciones entre los diferentes componentes del sistema. Los documentos de diseño son fundamentales para comprender cómo deben interactuar los componentes y qué comportamientos deben ser verificados durante las pruebas de integración.</li>
      <li><b>Diagramas de secuencia: </b> Los diagramas de secuencia son una herramienta visual que muestra la secuencia de interacciones entre los diferentes componentes del sistema en respuesta a un evento específico. Estos diagramas son útiles para identificar los flujos de datos y las comunicaciones entre los componentes durante la integración, lo que ayuda a diseñar casos de prueba efectivos y a verificar el comportamiento esperado del sistema.</li>
      <li><b>Especificaciones de interfaz y protocolos de comunicación:</b> Las especificaciones de interfaz describen cómo se comunican entre sí los diferentes componentes del sistema, incluyendo los formatos de datos, los protocolos de comunicación y los métodos de interacción. Estas especificaciones son esenciales para garantizar una integración exitosa y sin problemas entre los componentes, así como para diseñar pruebas que verifiquen la interoperabilidad y la compatibilidad entre ellos.</li>
      <li><b>Casos de uso: </b> Los casos de uso describen los diferentes escenarios de interacción entre el usuario y el sistema, incluyendo las acciones que realiza el usuario y las respuestas del sistema. Durante la integración de componentes, los casos de uso son útiles para identificar los flujos de trabajo y las funcionalidades que deben ser probadas, así como para diseñar casos de prueba que cubran todas las posibles interacciones entre los componentes.</li>
      <li><b>Arquitectura a nivel de componente o de sistema: </b> La arquitectura del sistema define la estructura general y la organización de los componentes que lo componen, así como las relaciones y dependencias entre ellos. Durante las pruebas de integración, es importante tener en cuenta la arquitectura del sistema para asegurar que todos los componentes se integren correctamente y cumplan con los requisitos de diseño especificados.</li>
      <li><b>Flujos de trabajo: </b> Los flujos de trabajo describen las secuencias de pasos y acciones que deben realizarse para completar una tarea específica dentro del sistema. Durante la integración de componentes, es importante verificar que los flujos de trabajo funcionen correctamente y que los diferentes componentes se comuniquen y cooperen de manera efectiva para lograr los objetivos del sistema.</li>
      <li><b>Definiciones de interfaces externas: </b>Las interfaces externas son los puntos de conexión entre el sistema y otros sistemas o componentes externos. Las definiciones de estas interfaces especifican cómo se comunican y se intercambian datos entre el sistema y su entorno externo. Durante la integración de componentes, es fundamental verificar que estas interfaces funcionen correctamente y cumplan con las especificaciones establecidas para garantizar la interoperabilidad y la compatibilidad del sistema con otros sistemas externos.</li>
    </ul>
  </div>
  <h3>Defectos que se encuentran</h3>
  <div class="contentList">
    <ul>
      <li><b>Datos incorrectos o faltantes:</b> Este tipo de defecto ocurre cuando los datos transmitidos entre los componentes son incorrectos o incompletos. Puede deberse a errores en la generación, manipulación o transmisión de datos, lo que puede afectar el funcionamiento adecuado del sistema.</li>
      <li><b>Secuenciación o sincronización incorrecta de las llamadas a la interfaz: </b> Se refiere a defectos que afectan la secuencia o el orden en el que se realizan las llamadas entre los componentes del sistema. Esto puede resultar en comportamientos imprevistos, errores de lógica o problemas de rendimiento en el sistema.</li>
      <li><b>Incompatibilidad de la interfaz:</b> Este tipo de defecto ocurre cuando hay discrepancias en la forma en que interactúan dos o más componentes debido a diferencias en las especificaciones de interfaz. Puede manifestarse como errores de comunicación, fallos en la interpretación de los datos o comportamientos inesperados en el sistema.</li>
      <li><b>Fallos en la comunicación entre componentes: </b> Son defectos que afectan la comunicación adecuada entre los diferentes componentes del sistema. Esto puede deberse a problemas de red, errores en los protocolos de comunicación o fallos en la implementación de las interfaces de comunicación.</li>
      <li><b>Componentes tratados de forma incorrecta: </b> Este tipo de defecto ocurre cuando un componente es utilizado de manera incorrecta por otro componente. Puede deberse a malentendidos en la documentación de la interfaz, errores en la implementación o falta de conocimiento sobre el uso adecuado del componente.</li>
      <li><b>Suposiciones incorrectas: </b> Son defectos que surgen cuando se hacen suposiciones incorrectas sobre el comportamiento o la funcionalidad de los componentes durante la integración. Esto puede llevar a errores de diseño, implementación o prueba que afectan la calidad y el rendimiento del sistema.</li>
      <li><b>Estructuras de mensajes inconsistentes: </b> Este tipo de defecto ocurre cuando las estructuras de mensajes intercambiadas entre los componentes no son coherentes o no cumplen con las especificaciones definidas. Puede resultar en errores de interpretación de datos, pérdida de información o fallas en la transmisión de datos.</li>
      <li><b>Incumplimiento de las normas de seguridad: </b>Son defectos relacionados con la falta de cumplimiento de las normas y políticas de seguridad establecidas para el sistema. Esto puede incluir vulnerabilidades de seguridad, acceso no autorizado a datos o funcionalidades, o fallos en los mecanismos de autenticación y autorización.</li>
    </ul>
  </div>
  <h3>Enfoques y responsabilidad</h3>
  <h4>Desarrollador</h4>
  <p><b>Enfoque: </b>El desarrollador se centra en la creación y el desarrollo de los componentes individuales del sistema. Su objetivo principal es escribir código de alta calidad que cumpla con los requisitos especificados y que pueda integrarse de manera efectiva con otros componentes.</p>
  <p><b>Responsabilidades:</b></p>
  <div class="contentList">
    <ul>
      <li>Diseñar y desarrollar los componentes de acuerdo con las especificaciones y requisitos establecidos.</li>
      <li>Realizar pruebas unitarias para verificar el correcto funcionamiento de los componentes y detectar posibles defectos.</li>
      <li>Corregir cualquier defecto identificado durante las pruebas unitarias y asegurar la calidad del código producido.</li>
      <li>Documentar adecuadamente el código y las interfaces para facilitar la integración y la colaboración con otros miembros del equipo.</li>
    </ul>
  </div>
  <h4>Tester</h4>
  <p><b>Enfoque: </b>El tester se enfoca en evaluar la funcionalidad y la interoperabilidad del sistema en su conjunto, incluida la integración de los diferentes componentes. Su objetivo principal es identificar defectos y problemas de rendimiento que puedan surgir durante la interacción entre los componentes.</p>
  <p><b>Responsabilidades:</b></p>
  <div class="contentList">
    <ul>
      <li>Diseñar y ejecutar pruebas de integración para verificar la interoperabilidad y la compatibilidad entre los componentes del sistema.</li>
      <li>Identificar y reportar defectos encontrados durante las pruebas de integración, asegurando su resolución oportuna.</li>
      <li>Colaborar con los desarrolladores para comprender los problemas encontrados y facilitar su corrección.</li>
      <li>Realizar pruebas de regresión para garantizar que los cambios realizados no afecten negativamente la funcionalidad existente del sistema.</li>
      <li>Proporcionar retroalimentación sobre la calidad y la estabilidad del sistema en su conjunto, ayudando a garantizar su entrega exitosa y sin problemas.</li>
    </ul>
  </div>
    
    </div>
    `;

    cuerpo.innerHTML= contenido;

    }

/*================
Niveles de pruebas Sistema
=====================*/    

let sistemas = () =>{
    let cuerpo = document.querySelector(".bodyContent");
    let contenido = `
    <div class="content_funciones">
     <h2 class="Subtitulos">Pruebas de Nivel de Sistema</h2>  
  <p>Las pruebas de nivel de sistema son un conjunto de actividades diseñadas para evaluar el funcionamiento integral de un sistema de software. Estas pruebas se centran en verificar tanto los aspectos funcionales como no funcionales del sistema en su conjunto, incluyendo la interacción entre sus componentes, la cumplimentación de los requisitos especificados y la identificación de posibles defectos que podrían afectar su calidad, rendimiento y seguridad. El objetivo principal de las pruebas de nivel de sistema es reducir el riesgo, generar confianza en la calidad del sistema y prevenir la propagación de defectos a niveles de prueba superiores, asegurando así que el sistema cumpla con las expectativas y requisitos del cliente.</p>
  <h3>Objetivos Principales</h3>
  <div class="contentList">
    <ul>
      <li><b>Reducir el riesgo: </b> Este objetivo implica identificar y abordar posibles riesgos que podrían afectar el funcionamiento del sistema en su conjunto. Al realizar pruebas exhaustivas, se pueden detectar y mitigar riesgos relacionados con la funcionalidad, el rendimiento, la seguridad y otros aspectos críticos del sistema, reduciendo así la probabilidad de fallos o problemas inesperados en producción.</li>
      <li><b>Verificar que los comportamientos funcionales y no funcionales del sistema son los diseñados y especificados: </b> Se trata de asegurar que el sistema cumpla con todos los requisitos funcionales y no funcionales establecidos durante la fase de diseño y especificación. Esto incluye verificar que el sistema realice las funciones previstas de manera correcta, así como garantizar que cumpla con los criterios de rendimiento, usabilidad, seguridad y otros aspectos no funcionales esperados.</li>
      <li><b>Validar que el sistema está completo y que funcionará como se espera: </b> Este objetivo implica confirmar que todas las funcionalidades y características del sistema están completamente implementadas y que el sistema en su conjunto funciona de acuerdo con las expectativas del cliente y los usuarios finales. Se busca garantizar que no haya funcionalidades faltantes o incompletas que puedan afectar la experiencia del usuario o el cumplimiento de los objetivos del sistema.</li>
      <li><b>Generar confianza en la calidad del sistema considerado como un todo: </b> Se busca demostrar que el sistema en su conjunto es de alta calidad y que cumple con los estándares y expectativas de calidad establecidos. Esto implica evaluar la integridad, la estabilidad y la fiabilidad del sistema en diferentes escenarios y condiciones de uso, lo que ayuda a generar confianza tanto en los usuarios finales como en los stakeholders del proyecto.</li>
      <li><b>Encontrar defectos:  </b> Durante las pruebas de nivel de sistema, se busca identificar y corregir cualquier defecto o anomalía que pueda existir en el sistema. Esto incluye problemas de funcionalidad, errores de lógica, fallos de rendimiento, vulnerabilidades de seguridad y otros tipos de defectos que podrían afectar la calidad y el funcionamiento del sistema en su conjunto.</li>
      <li><b>Prevenir la propagación de defectos a niveles de prueba superiores o a producción: </b>Se busca evitar que los defectos identificados a nivel de sistema se propaguen a etapas posteriores del proceso de desarrollo o lleguen a producción, donde corregirlos podría ser más costoso y disruptivo. Al abordar y resolver los problemas de manera temprana, se minimiza el riesgo de fallos en etapas posteriores y se asegura la estabilidad y la calidad del sistema en su conjunto.</li>
    </ul>
    
  </div>
  <h3>Base de Pruebas</h3>
  <div class="contentList">
    <ul>
      <li><b>Especificaciones de requisitos del sistema y del software: </b>Estas especificaciones detallan los requisitos funcionales y no funcionales del sistema, incluyendo sus características, comportamientos esperados, restricciones y criterios de calidad. Sirven como referencia para verificar que el sistema cumple con lo establecido durante el proceso de desarrollo.</li>
      <li><b>Informes de análisis de riesgo: </b> Estos informes contienen una evaluación de los riesgos potenciales que podrían afectar el desarrollo y funcionamiento del sistema. Proporcionan información sobre los riesgos identificados, su impacto potencial y las medidas de mitigación recomendadas.</li>
      <li><b>Casos de uso: </b> Los casos de uso describen las interacciones entre los usuarios y el sistema, detallando los diferentes escenarios de uso y las acciones que los usuarios pueden realizar. Ayudan a comprender cómo se espera que el sistema se comporte en situaciones específicas y son útiles para diseñar casos de prueba relevantes.</li>
      <li><b>Épicas e historias de usuario: </b> Estas son descripciones de alto nivel de funcionalidades o características del sistema, expresadas en términos de las necesidades y requerimientos del usuario. Las épicas son descripciones amplias y generales, mientras que las historias de usuario son descripciones más detalladas y específicas de funcionalidades individuales.</li>
      <li><b>Modelos de comportamiento del sistema: </b> Estos modelos representan el comportamiento esperado del sistema en diferentes situaciones o estados. Pueden incluir diagramas de flujo, diagramas de actividad o cualquier otra representación gráfica que ayude a comprender cómo interactúan los diferentes componentes del sistema.</li>
      <li><b>Diagramas de estado: </b> Estos diagramas muestran los diferentes estados que puede tener un sistema y las transiciones entre estos estados en respuesta a eventos o acciones específicas. Son útiles para comprender el comportamiento dinámico del sistema y diseñar casos de prueba que cubran todos los escenarios posibles.</li>
      <li><b>Manuales del sistema y del usuario: </b>Estos manuales contienen información detallada sobre el funcionamiento del sistema, incluyendo instrucciones de instalación, configuración y uso. Proporcionan orientación sobre cómo interactuar con el sistema y pueden utilizarse como referencia durante las pruebas de nivel de sistema para validar su funcionamiento según lo documentado.</li>
    </ul>
  </div>
  <h3>Objeto de pruebas</h3>
  <div class="contentList">
    <ul>
      <li><b>Aplicaciones:  </b>Se refiere a las aplicaciones de software que forman parte del sistema bajo prueba. Esto puede incluir aplicaciones desarrolladas internamente, así como aplicaciones de terceros que se integran en el sistema. Las pruebas se centran en verificar el correcto funcionamiento de estas aplicaciones y su interoperabilidad con otros componentes del sistema.</li>
      <li><b>Sistemas hardware/software: </b> Incluye tanto los componentes de hardware como los de software que componen el sistema. Esto puede abarcar desde servidores y dispositivos de red hasta periféricos y dispositivos de usuario final. Las pruebas se enfocan en garantizar que tanto el hardware como el software funcionen correctamente y se integren adecuadamente para cumplir con los requisitos del sistema.</li>
      <li><b>Sistemas operativos: </b> Se refiere al sistema operativo utilizado por el sistema bajo prueba. Esto puede incluir sistemas operativos de escritorio, móviles o embebidos, según el tipo de sistema que se esté probando. Las pruebas se centran en verificar que el sistema operativo funcione correctamente y sea compatible con el software y hardware del sistema.</li>
      <li><b>Sistema sujeto a prueba (SSP): </b> Es el sistema o componente específico que está siendo sometido a pruebas en el contexto de las pruebas de nivel de sistema. Puede referirse a un subsistema, módulo o conjunto de funcionalidades del sistema completo. Las pruebas se diseñan para evaluar el comportamiento y la funcionalidad del SSP en diferentes condiciones y escenarios de uso.</li>
      <li><b>Configuración del sistema y datos de configuración: </b>Incluye la configuración del sistema, como parámetros de configuración, opciones de personalización y ajustes de usuario. También abarca los datos de configuración necesarios para que el sistema funcione correctamente, como archivos de configuración, bases de datos de configuración y cualquier otro dato necesario para inicializar o personalizar el sistema. Las pruebas se centran en verificar que la configuración del sistema y los datos de configuración sean correctos y se apliquen adecuadamente según lo esperado.</li>
    </ul>
  </div>

<h3>Defectos que se encuentran</h3>
<div class="contentList">
  <ul>
    <li><b>Cálculos incorrectos:  </b>Se refiere a errores en los resultados de cálculos realizados por el sistema, como operaciones matemáticas, fórmulas o algoritmos. Estos errores pueden llevar a resultados incorrectos que afectan la precisión y fiabilidad del sistema.</li>
    <li><b>Comportamiento funcional o no funcional del sistema incorrecto o inesperado: </b>Esto incluye cualquier desviación del comportamiento esperado del sistema, ya sea en términos de funcionalidad (por ejemplo, funciones que no realizan lo que se espera) o en términos de requisitos no funcionales (por ejemplo, rendimiento, usabilidad, seguridad).</li>
    <li><b>Control y/o flujos de datos incorrectos dentro del sistema: </b> Se refiere a problemas con la manipulación y el flujo de datos dentro del sistema, como errores en la lógica de programación que pueden llevar a resultados incorrectos o a la pérdida de datos.</li>
    <li><b>Incapacidad para llevar a cabo, de forma adecuada y completa, las tareas funcionales extremo a extremo: </b> Esto ocurre cuando el sistema no puede realizar ciertas tareas de extremo a extremo de manera correcta o completa, lo que puede deberse a fallos en la integración de componentes, problemas de comunicación entre sistemas o deficiencias en la funcionalidad del sistema.</li>
    <li><b>Fallo del sistema para operar correctamente en el/los entorno/s de producción: </b>Se refiere a problemas que surgen cuando el sistema se ejecuta en el entorno de producción real, como fallos de rendimiento, incompatibilidades con otros sistemas o configuraciones específicas del entorno que no se han tenido en cuenta durante el desarrollo y las pruebas.</li>
    <li><b>Fallo del sistema para funcionar como se describe en los manuales del sistema y de usuario: </b>Esto ocurre cuando el sistema no cumple con las expectativas establecidas en los manuales de usuario y sistema, lo que puede incluir errores en la documentación, funcionalidades ausentes o malentendidos sobre el uso del sistema.</li>
  </ul>
</div>
<h3>Enfoques y responsabilidad </h3>
<p>En el contexto de las pruebas de integración de sistemas, el enfoque y la responsabilidad del tester implican varias actividades y roles específicos:</p>
<div class="contentList">
  <ul>
    <li><b>Diseño de casos de prueba de integración: </b> El tester es responsable de diseñar casos de prueba que cubran la interacción entre los diferentes componentes del sistema y verifiquen su integración adecuada. Esto implica identificar los puntos de integración, definir los escenarios de prueba relevantes y elaborar casos de prueba que validen el flujo de datos y la comunicación entre los componentes.</li>
    <li><b>Ejecución de pruebas de integración: </b> Una vez diseñados los casos de prueba, el tester es responsable de ejecutar las pruebas de integración de acuerdo con el plan de pruebas establecido. Esto implica configurar el entorno de prueba, ejecutar los casos de prueba, registrar los resultados y documentar cualquier defecto encontrado durante las pruebas.</li>
    <li><b>Análisis de resultados: </b> Después de la ejecución de las pruebas, el tester debe analizar los resultados para identificar posibles problemas de integración, como fallos de comunicación entre componentes, errores de interoperabilidad o inconsistencias en los datos. Esto requiere una comprensión profunda de la arquitectura del sistema y de los puntos de integración identificados.</li>
    <li><b>Reporte de defectos: </b> Si se encuentran defectos durante las pruebas de integración, el tester es responsable de reportarlos de manera clara y completa en el sistema de seguimiento de incidencias. Esto incluye proporcionar información detallada sobre el defecto, como pasos para reproducirlo, datos de prueba utilizados y cualquier impacto potencial en el funcionamiento del sistema.</li>
    <li><b>Colaboración con otros equipos: </b> El tester debe colaborar estrechamente con otros equipos involucrados en el proceso de desarrollo y prueba, como los desarrolladores de software, arquitectos de sistemas y otros testers. Esto implica comunicarse de manera efectiva, compartir información relevante y trabajar juntos para resolver problemas de integración de manera oportuna y eficiente.</li>
  </ul>
</div>
<p>En resumen, el enfoque y la responsabilidad del tester en las pruebas de integración de sistemas incluyen el diseño, ejecución, análisis y reporte de pruebas, así como la colaboración con otros equipos para garantizar la integridad y calidad del sistema en su conjunto.</p>
    




    </div>
    `;

    cuerpo.innerHTML= contenido;

    }    

/*===================
Pruebas de Nivel de aceptacion
=========================*/
let aceptacion = () =>{
    let cuerpo = document.querySelector(".bodyContent");
    let contenido = `
    <div class="content_funciones">
    
     <h2 class="Subtitulos">Pruebas de nivel de Aceptación</h2>  
   <p>Las pruebas de nivel de aceptación son el proceso de evaluación final del software para determinar si cumple con los criterios de aceptación y requisitos del cliente. Se realizan desde la perspectiva del usuario final o del negocio para validar que el sistema se ajusta a sus necesidades y expectativas. Estas pruebas se centran en verificar la funcionalidad del software en un entorno lo más cercano posible al de producción y pueden incluir pruebas de aceptación del usuario, pruebas alfa, pruebas beta, entre otras. Su objetivo es garantizar que el software esté listo para su implementación y uso en el mundo real.</p>
   <h3>Objetivos de las pruebas</h3>
  <div class="contentList">
    <ul>
      <li><b>Establecer confianza en la calidad del sistema en su conjunto: </b> Estas pruebas buscan proporcionar una evaluación completa de la calidad del sistema, desde la perspectiva del usuario final o del negocio, para generar confianza en su funcionamiento y rendimiento general.</li>
      <li><b>Validar que el sistema está completo y que funcionará como se espera: </b> Se verifica que todas las funcionalidades y características del sistema estén presentes y funcionen correctamente según lo esperado por el cliente. Esto asegura que el sistema esté listo para ser implementado y utilizado en producción.</li>
      <li><b>Verificar que los comportamientos funcionales y no funcionales del sistema sean los especificados: </b> Se asegura que el sistema cumpla con todos los requisitos funcionales y no funcionales establecidos durante el proceso de desarrollo. Esto incluye verificar que las funciones operen correctamente y que el sistema cumpla con los estándares de rendimiento, seguridad, usabilidad, entre otros.</li>
    </ul>
  </div>
  <h3>Base de pruebas</h3>
  <div class="contentList">
    <ul>
      <li><b>Procesos de negocio: </b> Descripciones detalladas de cómo se llevan a cabo las actividades y operaciones dentro de la organización, lo que permite validar si el software respalda eficazmente estos procesos.</li>
      <li><b>Requisitos de usuario o de negocio: </b> Especificaciones detalladas de las necesidades y expectativas del usuario final o del negocio, que guían el desarrollo y las pruebas del software para garantizar su alineación con los objetivos del cliente.</li>
      <li><b>Normativas, contratos legales y estándares: </b> Cualquier requisito legal, contractual o estándar que el software debe cumplir, como regulaciones gubernamentales, acuerdos de nivel de servicio (SLA) o estándares de la industria.</li>
      <li><b>Casos de uso: </b>Escenarios detallados que describen cómo interactuarán los usuarios con el sistema, ayudando a validar la funcionalidad y la usabilidad del software desde la perspectiva del usuario final.</li>
      <li><b>Requisitos de sistema: </b>Especificaciones detalladas de los requisitos técnicos y de rendimiento del sistema, incluidos aspectos como la compatibilidad de hardware y software, la capacidad de procesamiento y la escalabilidad.</li>
      <li><b>Documentación del sistema o del usuario:</b> Manuales y guías que proporcionan información detallada sobre el funcionamiento y el uso del sistema, facilitando la comprensión y la capacitación del usuario final.</li>
      <li><b>Procedimientos (instalación, copia de seguridad, etc.): </b> Instrucciones detalladas sobre cómo instalar, configurar y mantener el software, así como procedimientos de copia de seguridad y recuperación de datos.</li>
      <li><b>Informes de análisis de riesgo: </b> Evaluaciones formales de los riesgos asociados con el software y su implementación, ayudando a priorizar las actividades de prueba y mitigar posibles problemas.</li>
      <li><b>Requisitos no funcionales: </b> Especificaciones relacionadas con aspectos como el rendimiento, la seguridad, la usabilidad y la accesibilidad del sistema, que complementan los requisitos funcionales y garantizan una experiencia de usuario satisfactoria.</li>
      <li><b>Documentación de operaciones: </b>Instrucciones detalladas sobre cómo operar y mantener el sistema en un entorno de producción, incluidos procedimientos de monitoreo, diagnóstico de problemas y mantenimiento rutinario.</li>
      <li><b>Instrucciones de despliegue e instalación: </b> Pasos detallados para implementar y configurar el software en un entorno de producción, incluidas consideraciones de compatibilidad y requisitos de hardware y software.</li>
      <li><b>Objetivos de rendimiento: </b> Metas específicas relacionadas con el rendimiento del sistema, como tiempos de respuesta, capacidad de usuarios concurrentes y escalabilidad, que deben cumplirse para satisfacer las expectativas del cliente.</li>
      <li><b>Paquetes de base de datos: </b> Especificaciones y configuraciones relacionadas con la estructura y el contenido de las bases de datos utilizadas por el sistema, incluidas las migraciones de datos y la integración con sistemas existentes.</li>
      <li><b>Estándares o reglamentos de seguridad: </b> Requisitos relacionados con la protección de datos, la privacidad y la seguridad de la información, que el software debe cumplir para garantizar la integridad y confidencialidad de los datos del usuario.</li>
    </ul>
  </div>
  <h3>Objeto de pruebas</h3>
  <div class="contentList">
    <ul>
      <li> <b>Sistema sujeto a prueba: </b>El software o sistema específico que está siendo evaluado durante las pruebas de aceptación.</li>
      <li><b>Configuración del sistema y datos de configuración: </b>La configuración del sistema, incluidos los ajustes de software y hardware, así como los datos de configuración necesarios para el funcionamiento correcto del sistema.</li>
      <li><b>Procesos de negocio para un sistema totalmente integrado: </b> Los procesos operativos completos que se ejecutan en el sistema integrado, lo que permite probar cómo el software respalda y facilita estas operaciones.</li>
      <li><b>Sistemas de recuperación y sitios críticos: </b>Los sistemas y procedimientos de respaldo y recuperación utilizados para restaurar la funcionalidad del sistema en caso de interrupción o fallo.</li>
      <li><b>Procesos operativos y de mantenimiento: </b>Los procedimientos y actividades operativas y de mantenimiento necesarios para garantizar el funcionamiento continuo y eficiente del sistema en producción.</li>
      <li><b>Formularios: </b> Los documentos o interfaces utilizados para recopilar y presentar información dentro del sistema, incluidos formularios electrónicos y físicos.</li>
      <li><b>Informes: </b> Los informes generados por el sistema que presentan datos y análisis relevantes para la toma de decisiones y el seguimiento del rendimiento.</li>
      <li><b>Datos de producción existentes y transformados: </b>Los datos reales utilizados por el sistema durante las pruebas, así como los datos transformados o simulados para reproducir escenarios específicos de prueba.</li>
    </ul>
  </div> 
  <h3>Defectos que se encuentran</h3>
  <div class="contentList">
    <ul>
      <li><b>Los flujos de trabajo del sistema no cumplen con los requisitos de negocio o de usuario: </b> Situaciones donde las secuencias de operaciones dentro del sistema no se alinean con los procesos empresariales esperados o las necesidades de los usuarios finales.</li>
      <li><b>Las reglas de negocio no se implementan de forma correcta: </b> Errores en la aplicación de las reglas y políticas empresariales dentro del sistema, lo que puede llevar a resultados incorrectos o no deseados.</li>
      <li><b>El sistema no satisface los requisitos contractuales o reglamentarios: </b> Incumplimiento de los requisitos contractuales acordados con el cliente o las regulaciones legales y normativas pertinentes.</li>
      <li><b>Fallos no funcionales tales como vulnerabilidades de seguridad, eficiencia de rendimiento inadecuada bajo cargas elevadas o funcionamiento inadecuado en una plataforma soportada: </b> Defectos relacionados con aspectos no funcionales del sistema, como la seguridad, el rendimiento y la compatibilidad, que pueden afectar la experiencia del usuario o la integridad del sistema en su conjunto.</li>
    </ul>
  </div>
  <h3>Enfoques y responsabilidad</h3>
  <div class="contentList">
    <ul>
      <li><b>Validación de requisitos y expectativas: </b>Los clientes o usuarios son responsables de validar que el software cumpla con sus requisitos y expectativas. Esto implica revisar los resultados de las pruebas y proporcionar retroalimentación sobre la funcionalidad, usabilidad y rendimiento del sistema.</li>
      <li><b>Participación en la definición de criterios de aceptación: </b> Los clientes o usuarios colaboran en la definición de los criterios de aceptación que se utilizarán para evaluar si el software cumple con sus necesidades y expectativas. Esto garantiza que las pruebas se centren en los aspectos más importantes para el cliente.

</li>
      <li><b>Aprobación de la entrega del software: </b> Los clientes o usuarios tienen la responsabilidad final de aprobar la entrega del software después de que se hayan completado las pruebas de aceptación. Esto asegura que el software esté listo para ser implementado y utilizado en producción.</li>
      <li><b>Proporcionar datos y casos de uso relevantes: </b>  Los clientes o usuarios pueden proporcionar datos de prueba y casos de uso reales que reflejen escenarios de uso del mundo real, lo que ayuda a validar la funcionalidad y la usabilidad del software en situaciones reales.</li>
      <li><b>Colaboración en la resolución de problemas: </b>Los clientes o usuarios pueden colaborar con el equipo de desarrollo y pruebas en la identificación y resolución de problemas encontrados durante las pruebas de aceptación, proporcionando información adicional y retroalimentación sobre posibles soluciones.</li>
    </ul>
  </div>

    </div>
    `;

    cuerpo.innerHTML= contenido;

    }

/*======================
Tipos de pruebas funcionales
=========================*/

let pruebasFuncionales = () =>{
    let cuerpo = document.querySelector(".bodyContent");
    let contenido = `
    <div class="content_funciones">
    
    <h2 class="Subtitulos">Pruebas Funcionales</h2>
<p>Las pruebas funcionales son un tipo de prueba de software que se centran en verificar que el software cumpla con los requisitos funcionales especificados. Estas pruebas se centran en qué hace el sistema, es decir, en sus funciones y comportamientos esperados. Aquí hay más detalles sobre las pruebas funcionales:</p>
<div class="contentList">
  <ul>
    <li><b>Verificación de requisitos: </b> Las pruebas funcionales verifican si el software cumple con los requisitos funcionales establecidos en la documentación del proyecto, como los casos de uso, las historias de usuario y las especificaciones de requisitos.</li>
    <li><b>Validación de comportamientos: </b> Se aseguran de que el software funcione según lo esperado por el usuario final, incluyendo la interacción con la interfaz de usuario, la navegación por el sistema y la ejecución de las funciones principales.</li>
    <li><b>Pruebas de casos de uso: </b> Las pruebas funcionales a menudo se basan en casos de uso y escenarios de usuario para probar el software en condiciones similares a las del mundo real. Esto garantiza que el software sea útil y adecuado para los usuarios finales.</li>
    <li><b>Datos de entrada y salida: </b>Se prueban diferentes combinaciones de datos de entrada para verificar si el software produce los resultados esperados. Esto incluye probar diferentes valores, rangos y formatos de entrada para garantizar la robustez y la precisión del software.</li>
    <li><b>Pruebas de navegación:  </b>Se aseguran de que la navegación dentro del software sea coherente y lógica, y de que los usuarios puedan acceder fácilmente a todas las funciones y características.</li>
    <li><b>Pruebas de integración: </b>A veces, las pruebas funcionales también incluyen pruebas de integración para verificar que los diferentes componentes del software funcionen correctamente juntos y produzcan los resultados esperados cuando se integran.</li>
    <li><b>Automatización:  </b> Las pruebas funcionales pueden automatizarse utilizando herramientas de automatización de pruebas para ejecutar escenarios de prueba repetitivos de manera eficiente y liberar tiempo para pruebas más complejas o de mayor prioridad.</li>
    <li><b>Regresión:</b>  Las pruebas funcionales también se utilizan para detectar regresiones, es decir, cambios no deseados en el comportamiento del software que ocurren después de una modificación o actualización. Esto garantiza que las nuevas características no introduzcan errores en las funciones existentes del software.</li>
  </ul>
</div>
<p>En resumen, las pruebas funcionales son fundamentales para garantizar que el software cumpla con los requisitos y expectativas del usuario final, y se centran en verificar su funcionalidad y comportamiento esperado.</p>
<h3>¿Qué es la cobertura funcional ?</h3>
<p>La cobertura funcional se refiere a la medida en la que un conjunto de pruebas cubre las funcionalidades especificadas en los requisitos del software. Es una métrica que evalúa qué tan bien se han probado las diferentes funciones y características del sistema durante las pruebas.</p>

<p>Para que un sistema tenga una cobertura funcional adecuada, debe cumplir con los siguientes aspectos:</p>
<div class="contentList">
  <ul>
    <li><b>Cubrir todas las funciones y características especificadas: </b> Esto significa que todas las funcionalidades identificadas en los requisitos del software deben ser probadas para garantizar que el sistema las implemente correctamente.</li>
    <li><b>Incluir diversos casos de prueba: </b> Se deben diseñar casos de prueba que abarquen una variedad de escenarios de uso, entradas de usuario y condiciones del sistema para garantizar una cobertura completa.

</li>
    <li><b>Ejercitar todas las rutas de ejecución: </b>Las pruebas deben ejecutar todas las rutas posibles a través del software, incluyendo diferentes caminos de navegación, flujos de trabajo y combinaciones de acciones del usuario.</li>
    <li><b>Identificar y probar las condiciones límite: </b> Se deben diseñar casos de prueba que cubran situaciones extremas, como valores máximos y mínimos, para garantizar que el sistema maneje adecuadamente estas condiciones límite.</li>
    <li><b>Verificar la integración entre funciones: </b>Además de probar las funciones individualmente, también es importante probar la integración entre ellas para asegurarse de que trabajen correctamente juntas.</li>
  </ul>
</div>
<p>En resumen, la cobertura funcional se refiere a la extensión en la que las pruebas abarcan las funciones y características del sistema, asegurando así que se hayan probado adecuadamente y que el software cumpla con los requisitos establecidos. Un sistema con una cobertura funcional sólida es más probable que sea confiable y libre de errores en su funcionamiento.</p>



    </div>
    `;

    cuerpo.innerHTML= contenido;
    }

/*===============================
Tipos de pruebas No funcionales
================================*/

let pruebasNoFuncionales = () =>{
    let cuerpo = document.querySelector(".bodyContent");
    let contenido = `
    <div class="content_funciones">
        <h2 class="Subtitulos">Pruebas No Funcionales</h2>  
   <p>Las pruebas no funcionales se centran en aspectos del software que no están relacionados directamente con sus funcionalidades, sino en sus características de rendimiento, seguridad, usabilidad y otros atributos que afectan la experiencia del usuario y la calidad del sistema en su conjunto. Aquí tienes una explicación más detallada de las pruebas no funcionales:</p>
   <div class="contentList">
     <ul>
       <li><b>Rendimiento: </b>  Estas pruebas evalúan cómo responde el sistema bajo diferentes cargas de trabajo y condiciones, incluyendo pruebas de rendimiento, escalabilidad y tiempo de respuesta. Se busca garantizar que el sistema pueda manejar la cantidad esperada de usuarios y transacciones sin degradación del rendimiento.</li>
       <li><b>Seguridad: </b> Se centran en verificar que el sistema proteja adecuadamente la información confidencial, tenga controles de acceso adecuados y sea resistente a posibles amenazas y vulnerabilidades de seguridad. Se prueban aspectos como la autenticación, autorización, cifrado y gestión de sesiones.</li>
       <li><b>Usabilidad: </b>  Estas pruebas evalúan la facilidad de uso y la experiencia del usuario del sistema. Se analizan aspectos como la navegación, el diseño de la interfaz de usuario, la claridad de las instrucciones y la accesibilidad para personas con discapacidades.</li>
       <li><b>Fiabilidad: </b> Se centran en la estabilidad y confiabilidad del sistema, evaluando su capacidad para funcionar de manera consistente y predecible bajo diferentes condiciones. Se prueban aspectos como la tolerancia a fallos, la recuperación de errores y la disponibilidad del sistema.</li>
       <li><b>Compatibilidad:  </b> Estas pruebas se aseguran de que el sistema sea compatible con diferentes plataformas, navegadores, dispositivos y entornos operativos. Se verifican aspectos como la interoperabilidad, la portabilidad y la conformidad con estándares y regulaciones.</li>
       <li><b>Mantenibilidad: </b> Evalúan la facilidad con la que el sistema puede ser mantenido y modificado en el futuro. Se prueban aspectos como la claridad del código, la modularidad, la documentación y la facilidad de corrección de errores y actualización de funciones.</li>
       <li><b>Eficiencia: </b> Se enfocan en la optimización de recursos del sistema, como el uso de CPU, memoria y ancho de banda. Se busca garantizar que el sistema utilice eficientemente los recursos disponibles y minimice el consumo de recursos innecesarios.</li>
       <li><b>Conformidad: </b> Se aseguran de que el sistema cumpla con los requisitos legales, regulatorios, éticos y de estándares aplicables a la industria o el dominio en el que se utiliza.</li>
     </ul>
   </div>
   <p>En resumen, las pruebas no funcionales son críticas para garantizar que el software no solo cumpla con sus funcionalidades esperadas, sino también con los estándares de calidad en términos de rendimiento, seguridad, usabilidad y otros atributos clave que afectan la experiencia del usuario y la confiabilidad del sistema.</p>
   <h3>Cobertura No Funcional</h3>
   <p>La cobertura no funcional se refiere a la medida en que se prueban y cumplen los aspectos no funcionales del sistema, como los mencionados anteriormente. Esto implica diseñar casos de prueba y escenarios de prueba que aborden estas áreas y garantizar que el sistema cumpla con los estándares y requisitos establecidos en términos de fiabilidad, rendimiento, seguridad, usabilidad y otros atributos no funcionales clave. Una cobertura no funcional completa asegura que el sistema no solo funcione correctamente en términos de funcionalidad, sino también en términos de calidad y experiencia del usuario.</p>
    




    </div>
    `;

    cuerpo.innerHTML= contenido;
    }

/*=======================
Pruebas de caja blanca
========================*/

let pruebasCajaBlanca = () =>{
    let cuerpo = document.querySelector(".bodyContent");
    let contenido = `
    <div class="content_funciones">
    
   <h2 class="Subtitulos">Pruebas de Caja Blanca</h2>  
   <p>Las pruebas de caja blanca, también conocidas como pruebas estructurales o de caja clara, son un tipo de prueba en el que el tester tiene acceso y conocimiento de la estructura interna del software que está siendo evaluado. Esto significa que el tester examina el código fuente, la arquitectura del sistema y otros detalles técnicos para diseñar y ejecutar casos de prueba.</p>
   <p>Aquí hay algunas características y aspectos importantes de las pruebas de caja blanca:</p>
   <div class="contentList">
     <ul>
       <li><b>Acceso al código fuente: </b>En las pruebas de caja blanca, el tester tiene acceso al código fuente del software que está siendo evaluado. Esto le permite examinar cómo se ha implementado el software y comprender su estructura interna.</li>
       <li><b>Conocimiento de la estructura interna: </b> Los testers que realizan pruebas de caja blanca tienen un conocimiento detallado de la estructura interna del software, incluyendo variables, funciones, flujos de control y estructuras de datos. Esto les permite diseñar casos de prueba que prueben diferentes aspectos del software, como la lógica de negocio, la cobertura de código y las rutas de ejecución.</li>
       <li><b>Tipos de pruebas: </b> Las pruebas de caja blanca pueden incluir diferentes tipos de pruebas, como pruebas de flujo de control, pruebas de flujo de datos, pruebas de bucles, pruebas de camino crítico y pruebas de cobertura de código. Estas pruebas se centran en evaluar la estructura y el comportamiento interno del software.</li>
       <li><b>Herramientas de apoyo: </b> Para realizar pruebas de caja blanca de manera efectiva, los testers pueden utilizar diversas herramientas y técnicas, como depuradores, analizadores estáticos, instrumentación de código y herramientas de cobertura de código. Estas herramientas les ayudan a examinar y evaluar el código fuente de manera más eficiente.</li>
       <li><b>Cobertura de código: </b> Una de las métricas importantes en las pruebas de caja blanca es la cobertura de código, que mide la cantidad de código que ha sido ejecutado durante las pruebas. Una alta cobertura de código indica que se ha probado una gran parte del código fuente, lo que puede ayudar a identificar áreas que necesitan más pruebas o atención.</li>
     </ul>
   </div>
   <p>En resumen, las pruebas de caja blanca son un enfoque riguroso y detallado para evaluar la calidad y el comportamiento del software, mediante el examen y la evaluación de su estructura interna y su implementación en el código fuente. Estas pruebas son especialmente útiles para identificar errores de programación, defectos lógicos y vulnerabilidades de seguridad que pueden no ser evidentes en pruebas de caja negra.</p>



    </div>
    `;

    cuerpo.innerHTML= contenido;
    }

/*=======================
Pruebas Osociada Cambio
=========================*/

let pruebasOsociadaCambio = () =>{
    let cuerpo = document.querySelector(".bodyContent");
    let contenido = `
    <div class="content_funciones">
        <h2 class="Subtitulos">Pruebas Asociadas al cambio</h2> 
    <p class="parrafo">Las pruebas asociadas al cambio, también conocidas como pruebas de regresión, son un tipo de prueba que se realiza para asegurar que los cambios introducidos en el software no hayan afectado negativamente a las funcionalidades existentes. Estas pruebas son especialmente importantes cuando se realizan modificaciones, actualizaciones o mejoras en el software, ya que pueden introducir errores o impactar en áreas que anteriormente funcionaban correctamente.</p>
    <h3>Pruebas de Confirmación</h3>
    <p class="parrafo">Las pruebas de confirmación son una parte importante de las pruebas asociadas al cambio y se centran en verificar que un defecto reportado previamente ha sido corregido correctamente en el software. Aquí está la explicación de cada punto:</p>
    <div class="contentList">
      <ul>
        <li><b>Verificar que el defecto se haya corregido: </b>El primer paso de las pruebas de confirmación es asegurarse de que el defecto reportado haya sido solucionado de manera adecuada en el software. Esto implica revisar la descripción del defecto, entender su causa subyacente y comprobar que la solución implementada aborde completamente el problema.</li>
        <li><b>Se vuelven a ejecutar todos los casos de pruebas que fallaron por ese defecto: </b>Una vez que se ha corregido el defecto, se vuelven a ejecutar todos los casos de prueba que originalmente fallaron debido a ese defecto. Esto se hace para confirmar que la corrección ha resuelto efectivamente el problema y que las funcionalidades afectadas ahora funcionan como se espera.</li>
        <li><b>Confirmar que el defecto reportado se resolvió: </b>Finalmente, se verifica de manera explícita que el defecto reportado inicialmente se ha resuelto satisfactoriamente. Esto implica revisar los resultados de las pruebas de confirmación y compararlos con el comportamiento esperado del software. Si los casos de prueba afectados ahora pasan exitosamente y no se encuentran errores relacionados, se puede confirmar que el defecto ha sido resuelto.</li>
      </ul>
    </div>
    <p class="parrafo">En resumen, las pruebas de confirmación son esenciales para asegurar que los defectos reportados sean abordados de manera efectiva y que el software corregido funcione correctamente. Al volver a ejecutar los casos de prueba relevantes y verificar que el comportamiento del sistema ahora cumpla con las expectativas, se garantiza que la calidad y la estabilidad del software se mantengan después de aplicar los cambios y correcciones necesarias.</p>
    <h3>Pruebas de Regresión</h3>
    <p class="parrafo">Las pruebas de regresión son fundamentales dentro del proceso de desarrollo de software, especialmente cuando se realizan modificaciones, actualizaciones o mejoras en el software existente. Aquí te explico cada punto:</p>
    <div class="contentList">
      <ul>
        <li><b>Detectar posibles efectos secundarios no deseados: </b>Una de las principales funciones de las pruebas de regresión es detectar cualquier efecto secundario no deseado que pueda surgir como resultado de los cambios realizados en el software. Estos efectos secundarios pueden manifestarse como errores nuevos o como el deterioro de funcionalidades existentes que antes funcionaban correctamente. Al realizar pruebas exhaustivas después de cada cambio, se pueden identificar y abordar estos problemas de manera temprana.</li>
        <li><b>Asegurar que lo que está funcionando siga funcionando: </b>Además de detectar nuevos errores, las pruebas de regresión también tienen como objetivo garantizar que las funcionalidades existentes que anteriormente funcionaban correctamente continúen haciéndolo después de los cambios en el software. Esto se logra al volver a ejecutar casos de prueba específicos que cubren estas funcionalidades y verificar que el comportamiento del sistema no se ha visto afectado de manera negativa.</li>
        <li><b>Automatización en desarrollos interactivos e incrementales: </b>En entornos de desarrollo ágiles, donde se realizan cambios de forma frecuente e incremental, las pruebas de regresión suelen estar automatizadas para garantizar una cobertura exhaustiva y una rápida retroalimentación sobre la estabilidad del software. La automatización permite ejecutar un conjunto predefinido de pruebas de regresión de manera eficiente y repetitiva, lo que ayuda a identificar rápidamente cualquier regresión potencial y a mantener la calidad del software a lo largo del tiempo.</li>
      </ul>
    </div>
    <p class="parrafo">En resumen, las pruebas de regresión son esenciales para asegurar la estabilidad y la calidad del software durante todo su ciclo de vida. Detectan posibles efectos secundarios no deseados de los cambios, garantizan que las funcionalidades existentes sigan funcionando correctamente y suelen estar automatizadas en entornos de desarrollo ágiles para una rápida retroalimentación y una mayor eficiencia en las pruebas.</p>
    <p class="parrafo">En resumen, las pruebas asociadas al cambio son una parte crucial del proceso de desarrollo de software, ya que ayudan a garantizar que los cambios introducidos en el software no causen regresiones o problemas inesperados en las funcionalidades existentes. Mediante la identificación, diseño, ejecución y automatización de pruebas específicas, se puede mitigar el riesgo de introducir errores y mantener la estabilidad y calidad del software a lo largo del tiempo.</p>
    

    </div>
    `;

    cuerpo.innerHTML= contenido;
    }

/*========================
Pruebas de Mantenimiento
================================*/

let pruebasMantenimiento = () =>{
    let cuerpo = document.querySelector(".bodyContent");
    let contenido = `
    <div class="content_funciones">
    <h2 class="Subtitulos">Pruebas de Mantenimiento</h2>  
  <p class="parrafo">Las pruebas de mantenimiento son un tipo de prueba que se realiza en el software existente después de que ha sido puesto en producción y durante su ciclo de vida operativo. Estas pruebas se centran en verificar que el software continúe funcionando correctamente después de haber sido implementado y también pueden abordar cambios, actualizaciones o mejoras realizadas en el software durante su período de uso.</p>
  <div class="contentList">
    <ul>
      <li><b>Verificación de la integridad del software: </b>Las pruebas de mantenimiento se realizan para garantizar que el software mantenga su integridad y funcionalidad a lo largo del tiempo. Esto implica revisar regularmente el software en producción para identificar posibles problemas o deficiencias que puedan surgir debido a cambios en el entorno operativo, actualizaciones del sistema o nuevos requisitos de usuario.</li>
      <li><b>Actualización y corrección de defectos: </b>Durante el ciclo de vida del software, pueden surgir nuevos defectos o errores que necesiten ser corregidos. Las pruebas de mantenimiento se utilizan para identificar y solucionar estos problemas, lo que ayuda a mejorar la calidad y la estabilidad del software en producción.</li>
      <li><b>Adaptación a cambios: </b> A medida que cambian las necesidades del negocio o los requisitos del usuario, es posible que se requieran modificaciones en el software existente. Las pruebas de mantenimiento se utilizan para verificar que los cambios implementados no introduzcan nuevos problemas y que el software modificado siga cumpliendo con las expectativas y requisitos del usuario.</li>
      <li><b>Optimización del rendimiento: </b> Además de detectar y corregir errores, las pruebas de mantenimiento también pueden incluir la optimización del rendimiento del software. Esto implica identificar áreas donde el rendimiento del sistema puede ser mejorado y realizar ajustes o mejoras para garantizar un funcionamiento eficiente y sin problemas.</li>
    </ul>
  </div>
  <p class="parrafo">En resumen, las pruebas de mantenimiento son esenciales para garantizar que el software existente siga siendo confiable, funcional y eficiente a lo largo del tiempo. Ayudan a identificar y corregir problemas, adaptarse a cambios en el entorno operativo y mantener la calidad del software durante todo su ciclo de vida operativo.</p>
    <h3>Organigrama de Pruebas de mantenimiento</h3>
    <div class="img-content2"><img src="img/maintenance.png" alt=""></div>
    </div>
    `;

    cuerpo.innerHTML= contenido;
    }


/*
let tableRelation = () =>{
    let cuerpo = document.querySelector(".bodyContent");
    let contenido = `
    <div class="content_funciones">
    




    </div>
    `;

    cuerpo.innerHTML= contenido;
    }

    */
