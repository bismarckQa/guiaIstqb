let sintaxis = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Trabajar con instrucciones compuestas y de comentario</h2>
	<p class="parrafo">Al escribir código para cualquier lenguaje de programación, se recomienda realizar comentarios en el código. Un comentario es una descripción o explicación adicional en el código sobre este. Las instrucciones de comentario no se consideran codificación; las instrucciones solo están disponibles para que otros desarrolladores puedan comprender mejor el código que ha escrito.</p>
	<p class="parrafo">Puede realizar comentarios mediante dos barras diagonales (//), de la siguiente manera:</p>
	<pre class="content-code">
	<code class="lang-al-language">
        //Esto es un comentario....
	</code>
	</pre>
	<p class="parrafo">En Visual Studio Code, puede seleccionar Editar y luego Alternar comentario de línea (o usar las teclas de método abreviado Ctrl+:) para comentar.</p>
    <p class="parrafo">Para comentar un bloque completo de código, puede usar <b>/ _ y */_*.</b></p>
	<p class="parrafo">En Visual Studio Code, puede seleccionar Editar y luego Alternar comentario de bloque (o usar las teclas de método abreviado <b>Alt+Mayús+A</b>) para comentar un bloque de código.</p>
	<pre class="content-code"> 
	<code class="lang-al-language">
        /*
         
        This is a comment
		on multiple
		multiple
		multiple
		lines.

		*/    

	</code>
	</pre>
	<p class="parrafo">Al agregar comentarios XML en el código, puede mejorar la legibilidad, agregar información útil sobre la implementación y ayudar a otros a hacerse cargo del código que escribió. Con los comentarios XML también habilita IntelliSense en Visual Studio Code en los objetos de AL que agrega en su código como ayuda para otros desarrolladores, que trabajan con su código o lo amplían. Esto significa que cuando haya creado una extensión y alguien amplíe este código, obtendrá documentación en línea cuando llame al objeto determinado.</p>
	<p class="parrafo">El siguiente ejemplo se toma del archivo Email.Codeunit.al en la aplicación del sistema. En este ejemplo, el parámetro EmailMessageId se documenta mediante la sintaxis <param>.</p>
	<pre class="content-code">
	<code class="lang-al-language">
        /// &lt;summary&gt;
        /// Provides functionality to create and send e-mails.
        /// &lt;/summary&gt;

	codeunit 8901 "Email"
	{
		Access = Public;

          /// &lt;summary&gt;
          /// Enqueues an email in the outbox to be sent in the background.
          /// &lt;/summary&gt;
          /// &lt;param name="EmailMessageId"&gt;The ID of the email to enqueue&lt;/param&gt;
		procedure Enqueue(EmailMessageId: Guid)
		begin
		EmailImpl.Enqueue(EmailMessageId);
		end;
		...
          /// &lt;summary&gt;
          /// Provides functionality to create and send e-mails.
          /// &lt;/summary&gt;    
		</code>
		</pre>
		<p class="parrafo">Los comentarios de código mejoran la legibilidad del código que ha desarrollado y resultan muy útiles para cualquiera que modifique o mantenga ese código. Además, los comentarios de código forman la base de la documentación generada automáticamente.</p>
		<p class="parrafo">Los buenos comentarios de código hacen lo siguiente:</p>
		<div class="contentList">
		<ul>
		<li>Nunca diga lo obvio.</li>
		<li>Escriba un comentario significativo, utilice una redacción precisa para describir por qué.</li>
		<li>Póngase en la piel del desarrollador que utiliza este código, ¿qué le gustaría saber?</li>
		<li>Para las propiedades y los métodos, utilice palabras activas como Sets..., Gets... y Specifies..., y luego explique lo que hace.</li>
		<li>Enumere todas las condiciones previas para sus parámetros (no pueden ser nulos, deben encontrarse dentro de un rango determinado, etc.).</li>
		<li>Enumere las condiciones posteriores que podrían influir en cómo los autores de llamada tratan los valores devueltos.</li>
		<li>Enumere las excepciones que el método puede arrojar (y bajo qué circunstancias).</li>
		<li>Si existen métodos similares, explique las diferencias entre ellos.</li>
		<li>Llame la atención sobre cualquier cosa inesperada (como modificar el estado global).</li>
		<li>Enumere los efectos secundarios, si los hay.</li>
		<li>Sea uniforme y conciso.</li>
		<li>Asegúrese de que sus comentarios se revisen.</li>
		</ul>
		</div>
		<h3>Directiva del compilador de región de código</h3>
		<p class="parrafo">Use regiones de código para estructurar el código relacionado, agregar documentación de secciones de código y expandirlas o contraerlas para una navegación rápida en su código con un esquema sencillo del código.</p>
		<p class="parrafo">Las directivas son una nueva construcción en el lenguaje AL que especifica cómo el compilador AL trata una sección de código cerrada. El mismo concepto se conoce en otros lenguajes. El compilador debe admitir las instrucciones específicas de la directiva; no puede crear instrucciones de preprocesamiento personalizadas.</p>
		<p class="parrafo">La directiva #region se usa para marcar un bloque de código que se puede expandir o contraer. Esto puede resultar útil, por ejemplo, para archivos más grandes para una mejor legibilidad o para centrarse en el código en el que está trabajando actualmente. La #endregion especifica el final de un bloque de código #region.</p>
		<p class="parrafo">Una bloque #region debe terminar con una directiva #endregion. Un bloque #region no puede superponerse con un bloque #if. Sin embargo, un bloque #region se puede anidar en un bloque #if, y un bloque #if se puede anidar en un bloque #region.</p>
		<p class="parrafo">En este ejemplo, la directiva #region hace que un bloque de código que se puede refactorizar sea contraíble:</p>
		<pre class="content-code"> 
		<code class="lang-al-language">
		#region Ugly code - let's not look at this
		procedure UglyCode()
		begin
          // No one should look at this
		end;
		#endregion    
		</code>
		</pre>
		<p class="parrafo">Ejemplo de definición de regiones en una codeunit:</p>
		<div class="img-content"><img src="img/sintaxis1.jpg" alt=""></div>
		<p class="parrafo">Ejemplo de contracción de regiones:</p>
		<div class="img-content"><img src="img/sintaxis2.jpg" alt=""></div>
		<h3>Instrucciones compuestas</h3>
		<p class="parrafo">Una instrucción compuesta es una instrucción que consta de varias instrucciones. Las instrucciones compuestas se indican mediante begin y end, y todo lo demás es una instrucción compuesta.</p>
		<pre class="content-code">
		<code class="lang-al-language">
		<span class="rojo">begin</span>
		 statement 1;
		 statement 2;
		 statement 3;
		...
		<span class="rojo">end</span>
		</code>
		</pre>
		<h3>Trabajar con instrucciones condicionales</h3>
		<p class="parrafo">Las instrucciones condicionales se usan con frecuencia en los lenguajes de programación, incluido el lenguaje de aplicación (AL). Una instrucción condicional se utiliza para probar una condición. Según la evaluación de dicha condición, se podrían ejecutar una o varias instrucciones.</p>
		<h3>Instrucciones if</h3>
		<p class="parrafo">La instrucción condicional más utilizada es la instrucción if.</p>
		<pre class="content-code">
		<code class="lang-al-language">
		var 
		a: Integer;
		b: Integer;
		c: Integer;
		begin
		 a := 10;
		 b := 5;

		 <span class="rojo">if</span> a > b then
			 c := a - b;
		end;
		</code>
		</pre>
		<p class="parrafo">En el ejemplo anterior a las variables <b>a</b> y <b>b</b> se les asigna un valor. Con la instrucción <b>if</b>, se prueba la condición de que <b>a</b>  sea mayor que <b>b</b>. Si esta condición es true, a la variable <b>C</b> se le asignará el valor de a minus <b>b</b>.</p>
		<p class="parrafo">Observe la posición del punto y coma. Un punto y coma indica el inicio de una nueva instrucción. Dado que <b>if</b> .. <b>then</b>  se considera una instrucción, el punto y coma se coloca después de la última instrucción, no después de la palabra clave then.</p>
		<p class="parrafo">Solo puede introducir una instrucción después de la palabra clave <b>then</b>. Si desea ejecutar varias instrucciones cuando la condición es true, debe usar una instrucción compuesta, tal y como se muestra en el siguiente ejemplo.</p>
		<pre class="content-code"> 
		<code class="lang-al-language">
		var
		a: Integer;
		b: Integer;
		c: Integer;
		begin
			a := 10;
			b := 5;

			if a > b then begin
				c := a - b;
				Message('%1', c);
			end;
		end;
		</code>
		</pre>
		<p class="parrafo">Es importante tener en cuenta las posiciones de los diferentes puntos y comas después de cada instrucción dentro de la instrucción compuesta, y también al final de la misma.</p>
		<h3>Instrucción If-then-else</h3>
		<p class="parrafo">La instrucción <b>if</b> suele combinarse con una instrucción <b>else</b>. Si la condición no se evalúa como true, se ejecutarán las instrucciones en el bloque <b>else</b>.</p>
		<pre class="content-code"> 
		<code class="lang-al-language">
		var
		a: Integer;
		b: Integer;
		c: Integer;
		begin
			a := 10;
			b := 5;
			<span class="rojo">if</span> a > b then
				c := a - b
			<span class="rojo">else</span>
				c := a + b;
		end;    
		</code>
		</pre>
		<p class="parrafo">No se coloca ningún punto y coma al final de la instrucción en el bloque then; solo se coloca uno al final de la instrucción completa <b>if-then-else</b>.</p>
		<p class="parrafo">También puede usar instrucciones compuestas en una estructura <b>if-then-else</b>.</p>
		<pre class="content-code"> 
		<code class="lang-al-language">
		var
		a: Integer;
		b: Integer;
		c: Integer;
		begin
			a := 10;
			b := 5;

			if a > b then begin
				c := a - b;
				Message('%1', c);
			end
			else begin
				c := a + b;
				Message('%1', c);
			end;
		end;
		</code>
		</pre>
		<p class="parrafo">Dado que una instrucción <b>if-then-else</b> también es una instrucción normal, puede introducir instrucciones <b>if</b>  en otras instrucciones if, que crearán instrucciones <b>nested if</b>.</p>
		<p class="parrafo"></p>
		<pre class="content-code"> 
		<code class="lang-al-language">
		begin
			if Amount &lt;&gt; 0 then
				if Amount > 0 then
					Sales := Sales + Amount
				else
					if Reason = Reason::Return then
						if ReasonForReturn = ReasonForReturn::Defective then
							Refund := Refund + Amount
						else
							Credits := Credits + Amount
					else
						Sales := Sales - Amount;
		end;    
				</code>
				</pre>
				<p class="parrafo">Tenga cuidado con las instrucciones nested if, ya que suele ser difíciles de leer y pueden ser complejas. Comprobar las posiciones de los puntos y comas puede facilitar su lectura y comprensión.</p>
				<h3>Instrucción Case</h3>
				<p class="parrafo">Otra instrucción condicional que puede usar es la instrucción <b>case</b>. En función del valor de una condición, la instrucción case ejecutará otras instrucciones.</p>
				<p class="parrafo">En el siguiente ejemplo se muestra que, en función del valor de <b>Tipo de Documento</b>
				 (que es un campo de opción de una tabla), la instrucción case ejecutará algunas instrucciones.
				  La instrucción case puede usar un bloque else que se ejecutará cuando no se ejecuten otros bloques.
				   Dado que solo puede ejecutar una instrucción para cada bloque con una instrucción <b>case</b>,
				    debe usar instrucciones compuestas para ejecutar más instrucciones de forma simultánea.</p>
				<pre class="content-code">
				<code class="lang-al-language">
				var
					a: Integer;
				begin
					case "Document Type" of
						"Document Type"::Quote:
							a := 1 + 1;
						"Document Type"::Order:
							a := 2 + 1;
						"Document Type"::Invoice:
							begin
   								 // Some statement 1;
   								 // Some statement 2;
   								 // Some statement 3;
								a := 3 + 1;
							end;
						"Document Type"::"Return Order":
							if Reason = Reason::Return then begin
   								 // Some statement 1;
   								 // Some statement 2;
   								 // Some statement 3;
								a := 4 + 1;                
							end;
						else
							a := 5 + 1;
					end;

				end;    
				</code>
				</pre>
				<h3>Suprimir advertencias de AL</h3>
				<p class="parrafo">En algunos casos, las advertencias del compilador o del analizador se deben al uso previsto del código. Para reducir el desorden de modo que los desarrolladores puedan centrarse en las advertencias que deben atenderse, estamos agregando soporte para suprimir explícitamente las advertencias, ya sea para una extensión completa o localmente en una carcasa de código.</p>
				<p class="parrafo">Hay dos maneras de admitir las advertencias:</p>
				<div class="contentList">
				<ul>
				<li>Globalmente (para una extensión)</li>
				<li>Localmente</li>
				</ul>
				</div>
				<p class="parrafo">Recuerde que la mayoría de las advertencias están ahí por una razón, y suprimirlas podría provocar un impacto repentino, si las advertencias se convierten en errores (como obsoletos).</p>
				<h3>Global</h3>
				<p class="parrafo">Hay una nueva propiedad <b>SuppressWarnings</b> en el manifiesto <b>app.json</b> para que pueda suprimir una lista separada por comas de ID de advertencia cuando compile la extensión:</p>
				<pre class="content-code">
				<code class="lang-al-language">
				"suppressWarnings": [Warning ID,Warning ID2,...]   
				</code>
				</pre>
				<h3>Local</h3>
				<p class="parrafo">Directivas es una nueva construcción en el lenguaje AL que especifica la manera en que el compilador AL trata una sección de código adjunta. El mismo concepto se conoce en otros lenguajes. Las instrucciones específicas de la directiva deben ser compatibles con el compilador. No puede crear instrucciones de preprocesamiento personalizadas.</p>
				<p class="parrafo">Una de las nuevas directivas es una pragma de advertencia, que puede configurar alrededor de una sección de código para suprimir una lista de advertencias separadas por comas solo en esa carcasa.</p>
				<p class="parrafo">Si no se proporciona un cierre pragma, será el resto del archivo. La restauración lo devuelve al estado de supresión global, tal y como se ha descrito anteriormente. Cuando no se especifican números de advertencia, Desactivar deshabilita todas las advertencias y Restaurar habilita todas las advertencias.</p>
				<pre class="content-code">
				<code class="lang-al-language">
				#pragma warning disable warning-list
				#pragma warning restore warning-list   
				</code>
				</pre>
				<h3>Usar Bucles</h3>
				<p class="parrafo">Puede usar instrucciones repetitivas cuando quiera repetir la implementación de una o más instrucciones. Los cinco tipos diferentes de instrucciones repetitivas que se pueden usar son:</p>
				<div class="contentList">
				<ul>
				<li>for-to-do</li>
				<li>for-downto-do</li>
				<li>foreach-in-do</li>
				<li>while-do</li>
				<li>repeat-until</li>
				</ul>
				</div>
				<h3>Instrucción for</h3>
				<p class="parrafo">Una de las instrucciones repetitivas más utilizadas es la instrucción <b>for</b>. Si usa la instrucción <b>for</b>, ya debería saber cuántas veces va a repetir la implementación de instrucciones.</p>
				<p class="parrafo">En el siguiente ejemplo, la instrucción <b>for</b> se utiliza para realizar un bucle de cinco veces. La variable intCount cuenta el número de veces que se ha realizado el bucle.</p>
				<pre class="content-code">
				<code class="lang-al-language">
				var
					intCount: Integer;
					total: Integer;
				begin
					for intCount := 1 to 5 do
						total := total + 3;
				end;   
				</code>
				</pre>
				<p class="parrafo">La instrucción <b>for</b> solo puede ejecutar una instrucción. Si quiere ejecutar más de una instrucción, debe usar una instrucción compuesta con <b>begin</b> y <b>end</b>.</p>
				<h3>Instrucción for downto</h3>
				<p class="parrafo">Con la instrucción <b>for</b>, cuenta hacia arriba, lo que significa que la instrucción for aumentará el valor de la variable. También puede disminuir utilizando la instrucción for downto, que realiza la cuenta hacia abajo.</p>
				<p class="parrafo">De modo similar a la instrucción <b>for</b>, que solo puede ejecutar una instrucción, la instrucción <b>for downto</b>  solo ejecuta una instrucción. En el siguiente ejemplo se muestra el uso de la instrucción compuesta.</p>
				<pre class="content-code">
				<code class="lang-al-language">
				var
					intCount: Integer;
					totalSales: Integer;
					numberSales: Integer;
					sales: array[5] of Integer;
				begin
					GetSales(sales);

					for intCount := 5 downto 1 do begin
						totalSales := totalSales + sales[intCount];
						numberSales := numberSales + 1;
					end;
				end;   
				</code>
				</pre>
				<h3>Instrucción foreach</h3>
				<p class="parrafo">La instrucción <b>foreach</b> solo se puede usar en colecciones de tipo Enumerable (Lista de y Diccionario de), y no se puede usar con matrices.</p>
				<p class="parrafo">Con cada instrucción <b>foreach</b>, la variable obtendrá el valor de un artículo determinado de las colecciones. A cada bucle se le asignará el siguiente valor.</p>
				<pre class="content-code">
				<code class="lang-al-language">
				var
					stringList: List of [Text[20]];
					stringItem: Text[20];
				begin
					foreach stringItem in stringList do
						Message(stringItem);
				end;   
				</code>
				</pre>
				<h3>Instrucción while</h3>
				<p class="parrafo">La instrucción <b>while</b> comprueba primero si la condición es verdadera antes de iniciar el bucle. En caso de que esta condición siga siendo verdadera, seguirá ejecutando las instrucciones en el bloque de <b>while</b>.</p>
				<p class="parrafo">En consecuencia, es posible que las instrucciones no se ejecuten en absoluto si la condición no es cierta la primera vez.</p>
				<pre class="content-code">
				<code class="lang-al-language">
				var
					index: Integer;
					totalSales: Integer;
					sales: array[5] of Integer;
				begin
					GetSales(sales);

					while totalSales < 8 do begin
						index := index + 1;
						totalSales := totalSales + sales[index];
					end;
				end;   
				</code>
				</pre>
				<p class="parrafo">Si quiere ejecutar varias instrucciones, debe usar una instrucción compuesta.</p>
				<h3>Instrucción repeat until</h3>

				<p class="parrafo">La instrucción <b>while</b> comprueba primero si existe una condición válida antes de iniciar el bucle, mientras que la instrucción <b>repeat until</b> se ejecuta primero y después comprueba una condición. Se repetirá en bucle hasta que la condición sea válida, lo que significa que las instrucciones <b>repeat until</b> se ejecutan al menos una vez. El bucle continuará, siempre que la condición no sea válida.</p>
				<p class="parrafo">La instrucción <b>repeat until</b> es una instrucción, y pondrá sus propias instrucciones dentro del bloque. Esto implica que no tiene que usar una instrucción compuesta si quiere ejecutar varias instrucciones.</p>
				<pre class="content-code">
				<code class="lang-al-language">
				var
					index: Integer;
					totalSales: Integer;
					sales: array[5] of Integer;
				begin
					GetSales(sales);

					repeat
						index := index + 1;
						totalSales := totalSales + sales[index];
					until totalSales >= 8;
				end;   
				</code>
				</pre>
				<p class="parrafo">La instrucción <b>repeat until</b> se suele usar cuando se quiere realizar un bucle por un conjunto de registros. En el siguiente ejemplo, realizará un bucle por todas las filas de la tabla <b>MyTable</b>.</p>
				<pre class="content-code"> 
				<code class="lang-al-language">
				var
					myTable: Record MyTable;
				begin
					myTable.FindSet();
					repeat
						myTable.Amount := 100;
					until myTable.Next() = 0;
				end;    
				</code>
				</pre>
				<h3>Instrucción with</h3>
				<p class="parrafo">La instrucción <b>with</b> se usa a veces en combinación con una instrucción repetitiva, pero también se puede usar de forma independiente. El propósito de la instrucción <b>with</b> es reducir el uso de las variables del registro. Esta estructura se ilustra en el siguiente ejemplo, donde se crea una variable myTable y se asigna un valor a todos los campos de la tabla.</p>
				<pre class="content-code">
				<code class="lang-al-language">
				var
					myTable: Record MyTable;
				begin
					myTable."No." := 1;
					myTable.Amount := 100;
					myTable.Credits := 10;
					myTable."Document Type" := myTable."Document Type"::Invoice;
					myTable.Reason := myTable.Reason::Return;
					myTable.Refund := 100;
				end;   
				</code>
				</pre>
				<p class="parrafo">En lugar de volver a escribir la palabra <b>myTable</b>, puede usar la instrucción <b>with</b>.</p>
				<pre class="content-code">
				<code class="lang-al-language">
				var
					myTable: Record MyTable;
				begin
					with myTable do begin
						"No." := 1;
						Amount := 100;
						Credits := 10;
						"Document Type" := "Document Type"::Invoice;
						Reason := Reason::Return;
						Refund := 100;
					end;
				end;
				</code>
				</pre>
				<h3>Uso de Break</h3>
				<p class="parrafo">Si quiere detener la ejecución de un bucle, puede usar la instrucción break.</p>
				<pre class="content-code">
				<code class="lang-al-language">
				var
					intCount: Integer;
					total: Integer;
				begin
					for intCount := 1 to 5 do begin
						if (total > 8) then
							<span class="rojo">break;</span>

						total := total + 3;
					end;
				end;
				</code>
				</pre>

					`;

					cuerpo.innerHTML= contenido;

				}