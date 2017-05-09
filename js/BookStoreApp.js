//*********Manejo de Angular JS************


//Se crea una fucnion recursiva la cual significa que se llamará a si misma
//Estructura basica:  (function(argumentos){ definicfión })(argumentos);
(function(){

	//
	var app = angular.module('book', []);

	//Arreglo de objetos
	var books = [ {
		id: '1',
		name: 'Redes Informaticas',
		author: 'José Dredodigene',
		editorial:'3 edition' ,
		description: 'Este libro sobre redes se dirige tanto a principiantes que quieran conocer las redes informáticas, como a informáticos más experimentados que deseen reforzar y actualizar sus conocimientos. Se presentan los principios básicos (normas, arquitecturas comunes, cableado, cifrado de datos, topología, redes inalámbricas, interconexión de redes…) y los diferentes protocolos existentes en las redes informáticas (Ethernet, Wi-Fi, Bluetooth, ADSL, WiMax…) desde un punto de vista operativo, sin confundir al lector en un discurso demasiado teórico. Asimismo, se muestra un resumen sobre la virtualización, que permite al lector comprender los problemas, ventajas e inconvenientes aportados por las diferentes soluciones del mercado. También se abordan las tecnologías ATM y otras conexiones de tramas. Se presentan en detalle los protocolos TCP/IP: en particular la descomposición en sub-redes en IPv4, así como un completo y nuevo enfoque del direccionamiento IP v6 (incluyendo VoIP). Hay todo un capítulo que trata de los principios básicos de seguridad frente a las amenazas que pueden afectar a una red. El anexo proporciona una lista de los acrónimos más significativos en el mundo de las redes informáticas.',
		canpurchase: true,
		soldOut: true,
		images: [
			{
				full:'public/img/img2.jpg',
				thumb:'public/img/img2.jpg'
			}
		]
		
	}
	,
	{
		id: '2',
		name: 'Seguridad Informática para Empresas y partuculares',
		author: 'cv ',
		editorial: 'c xc ',
		description:'La informática ha pasado a formar parte de la actividad cotidiana de empresas y particulares. Los ordenadores almacenan información, la procesan y la transmiten a través de redes, abriendo nuevas posibilidades de ocio y de negocio. Cuanto mayor es el valor de la información gestionada, más importante es asegurarla. La mayoría de usuarios particulares y de empresas poseen la percepción de que la seguridad de la información es una tarea difícil de aplicar, que exige gran cantidad de dinero y tiempo. En realidad, con muy poco esfuerzo se puede alcanzar un nivel de seguridad razonable, capaz de satisfacer las expectativas de seguridad de particulares y de pequeñas y medianas empresas.',
		canpurchase: false,
		soldOut: true,
		images: [
			{
				full:'public/img/img3.jpg',
				thumb:'public/img/img3.jpg'
			}
		]
	}
	,
	{
		id: '3',
		name: 'Desarrollo de sofware',
		author: 'cdc',
		editorial: 'adcs' ,
		description: 'El libro contiene un ejemplo completo de un desarrollo dirigido por modelos. El desarrollo comienza con la definición de un modelo abstracto expresado en UML y finaliza con el despliegue de un programa ejecutable escrito en Java. La transformación del modelo a código es realizada a través de la aplicación de transformaciones expresadas en un lenguaje estándar. Este ejemplo brinda un panorama completo y comprensible sobre los aspectos técnicos de MDD.',
		canpurchase: false,
		soldOut: true,
		images: [
			{
				full:'public/img/img4.jpg',
				thumb:'public/img/img4.jpg'
			}
		]
	}
	,
	{
		id: '4',
		name: 'Redes Cisco. Guía De Estudio Para La Certificación CCNA Routing Y Switching ',
		author: 'sadcas',
		editorial: 'adv' ,
		description: 'Este libro representa una herramienta de autoestudio para el aprendizaje de los temas relacionados con los objetivos del examen de certificación CCNA 200-120. Esta obra proporciona los conceptos, comandos y prácticas necesarias para configurar routers y switches Cisco para que funcionen en las redes corporativas y para alcanzar dicha certificación. Aunque este libro fue creado para aquellos que persiguen la certificación CCNA R&S, también es útil para administradores, personal de soporte, o para los que simplemente desean entender más claramente el funcionamiento de las LAN, las WAN, sus protocolos y los servicios de acceso.',
		canpurchase: false,
		soldOut: true,
		images: [
			{
				full:'public/img/img5.jpg',
				thumb:'public/img/img5.jpg'
			}
		]
	}

	]


	//Esto es para poder mostrar mis datos en la pagina
	//Para la cual necesitamos un controlador
	app.controller('BookApp', function(){
		//this quiere desir que solo el controlador puede manejar esta variable y tambien el scope para poder
		//manejarlo en la pagina web
		this.products = books;

	});



})();
