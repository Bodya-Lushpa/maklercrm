        // Определяем переменную map
        var map;
        // Функция initMap которая отрисует карту на странице
        function initMap() {     
            // В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
            map = new google.maps.Map(document.getElementById('map'), {
                // При создании объекта карты необходимо указать его свойства
                // center - определяем точку на которой карта будет центрироваться
                center: {lat: 55.767268, lng: 37.620003},
                // zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
                zoom: 11,
                // disableDefaultUI: true,
                 styles: [
									    {
									        "featureType": "administrative",
									        "elementType": "all",
									        "stylers": [
									            {
									                "saturation": "-100"
									            }
									        ]
									    },
									    {
									        "featureType": "administrative.province",
									        "elementType": "all",
									        "stylers": [
									            {
									                "visibility": "off"
									            }
									        ]
									    },
									    {
									        "featureType": "landscape",
									        "elementType": "all",
									        "stylers": [
									            {
									                "saturation": -100
									            },
									            {
									                "lightness": 65
									            },
									            {
									                "visibility": "on"
									            }
									        ]
									    },
									    {
									        "featureType": "poi",
									        "elementType": "all",
									        "stylers": [
									            {
									                "saturation": -100
									            },
									            {
									                "lightness": "50"
									            },
									            {
									                "visibility": "simplified"
									            }
									        ]
									    },
									    {
									        "featureType": "road",
									        "elementType": "all",
									        "stylers": [
									            {
									                "saturation": "-100"
									            }
									        ]
									    },
									    {
									        "featureType": "road.highway",
									        "elementType": "all",
									        "stylers": [
									            {
									                "visibility": "simplified"
									            }
									        ]
									    },
									    {
									        "featureType": "road.arterial",
									        "elementType": "all",
									        "stylers": [
									            {
									                "lightness": "30"
									            }
									        ]
									    },
									    {
									        "featureType": "road.local",
									        "elementType": "all",
									        "stylers": [
									            {
									                "lightness": "40"
									            }
									        ]
									    },
									    {
									        "featureType": "transit",
									        "elementType": "all",
									        "stylers": [
									            {
									                "saturation": -100
									            },
									            {
									                "visibility": "simplified"
									            }
									        ]
									    },
									    {
									        "featureType": "water",
									        "elementType": "geometry",
									        "stylers": [
									            {
									                "hue": "#ffff00"
									            },
									            {
									                "lightness": -25
									            },
									            {
									                "saturation": -97
									            }
									        ]
									    },
									    {
									        "featureType": "water",
									        "elementType": "labels",
									        "stylers": [
									            {
									                "lightness": -25
									            },
									            {
									                "saturation": -100
									            }
									        ]
									    }
									]
            });

 							var marker1 = new google.maps.Marker({
                // Определяем позицию маркера
                position: {lat: 55.633664, lng: 37.765190},
                // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
                map: map,
                // Пишем название маркера - появится если навести на него курсор и немного подождать
                title: 'Метро Алма-Атинская',
                // Укажем свою иконку для маркера
                icon: 'img/pin.png'
							});

							var contentString1 = 
								'<div id="win-content">'+
									'<div class="marker-left">'+
										'<h1 id="firstHeading" class="firstHeading"><img src="img/metro-icon.png" alt="" class="metro-i">Алма-Атинская</h1>'+
										'<div id="bodyContent">'+											
												'<p class="marker_desc marker_desc-hide">'+ 'ул.Борисовские пруды 26 вл.2'+'<br>'+'</p>'+																					
											'<p class="marker_desc">'+ 'Бокс, Тайский-бокс, Растяжка'+
											'</p>'+
										'</div>'+
									'</div>'+
									'<div class="marker-right">'+
										'<a href="#" class="directions_add_btn marker_btn">+</a>'+
									'</div>'+
								'</div>';

								var infowindow1 = new google.maps.InfoWindow({
     							content: contentString1,
     							maxWidth: 400
								});

								marker1.addListener('click', function() {
     								infowindow1.open(map, marker1);
									});


								var marker2 = new google.maps.Marker({
                // Определяем позицию маркера
                position: {lat: 55.548064, lng: 37.554614},
                // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
                map: map,
                // Пишем название маркера - появится если навести на него курсор и немного подождать
                title: 'Метро Скобелевская',
                // Укажем свою иконку для маркера
                icon: 'img/pin.png'
							});

							var contentString2 = 
								'<div id="win-content">'+
									'<div class="marker-left">'+
										'<h1 id="firstHeading" class="firstHeading"><img src="img/metro-icon.png" alt="" class="metro-i">Скобелевская</h1>'+
										'<div id="bodyContent">'+
											'<p class="marker_desc">'+ 'ул.Изюмская 22 к. 3'+
											'<p class="marker_desc">'+ 'Бокс, Тайский-бокс, Растяжка'+
											'</p>'+
										'</div>'+
									'</div>'+
									'<div class="marker-right">'+
										'<a href="#" class="directions_add_btn marker_btn">+</a>'+
									'</div>'+
								'</div>';

								var infowindow2 = new google.maps.InfoWindow({
     							content: contentString2,
     							maxWidth: 400
								});

								marker2.addListener('click', function() {
     								infowindow2.open(map, marker2);
									});

								/*--------marker3------*/

								var marker3 = new google.maps.Marker({
                // Определяем позицию маркера
                position: {lat: 55.542183, lng: 37.531654},
                // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
                map: map,
                // Пишем название маркера - появится если навести на него курсор и немного подождать
                title: 'Метро Скобелевская',
                // Укажем свою иконку для маркера
                icon: 'img/pin.png'
							});

							var contentString3 = 
								'<div id="win-content">'+
									'<div class="marker-left">'+
										'<h1 id="firstHeading" class="firstHeading"><img src="img/metro-icon.png" alt="" class="metro-i">Горчакова</h1>'+
										'<div id="bodyContent">'+
											'<p class="marker_desc">'+ 'ул.Адмирала Руднева 4'+
											'<p class="marker_desc">'+ 'Бокс, Тайский-бокс, Растяжка'+
											'</p>'+
										'</div>'+
									'</div>'+
									'<div class="marker-right">'+
										'<a href="#" class="directions_add_btn marker_btn">+</a>'+
									'</div>'+
								'</div>';

								var infowindow3 = new google.maps.InfoWindow({
     							content: contentString3,
     							maxWidth: 400
								});

								marker3.addListener('click', function() {
     								infowindow3.open(map, marker3);
									});

								/*--------end-marker3------*/

								/*--------marker4------*/

								var marker4 = new google.maps.Marker({
                // Определяем позицию маркера
                position: {lat: 55.846337, lng: 37.361126},
                // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
                map: map,
                // Пишем название маркера - появится если навести на него курсор и немного подождать
                title: 'Метро Митино',
                // Укажем свою иконку для маркера
                icon: 'img/pin.png'
							});

							var contentString4 = 
								'<div id="win-content">'+
									'<div class="marker-left">'+
										'<h1 id="firstHeading" class="firstHeading"><img src="img/metro-icon.png" alt="" class="metro-i">Митино</h1>'+
										'<div id="bodyContent">'+
											'<p class="marker_desc">'+ 'ул. Барышиха, 14'+
											'<p class="marker_desc">'+ 'Бокс, Тайский-Бокс, Йога, Растяжка'+
											'</p>'+
										'</div>'+
									'</div>'+
									'<div class="marker-right">'+
										'<a href="#" class="directions_add_btn marker_btn">+</a>'+
									'</div>'+
								'</div>';

								var infowindow4 = new google.maps.InfoWindow({
     							content: contentString4,
     							maxWidth: 400
								});

								marker4.addListener('click', function() {
     								infowindow4.open(map, marker4);
									});

								/*--------end-marker4------*/

								/*--------marker5------*/

								var marker5 = new google.maps.Marker({
                // Определяем позицию маркера
                position: {lat: 55.846337, lng: 37.588856},
                // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
                map: map,
                // Пишем название маркера - появится если навести на него курсор и немного подождать
                title: 'Метро Савеловская',
                // Укажем свою иконку для маркера
                icon: 'img/pin.png'
							});

							var contentString5 = 
								'<div id="win-content">'+
									'<div class="marker-left">'+
										'<h1 id="firstHeading" class="firstHeading"><img src="img/metro-icon.png" alt="" class="metro-i">Савеловская</h1>'+
										'<div id="bodyContent">'+
											'<p class="marker_desc">'+ 'ул. Вятская, д. 27, корп. 12'+
											'<p class="marker_desc">'+ 'Бокс, Тайский-Бокс, Йога, Растяжка'+
											'</p>'+
										'</div>'+
									'</div>'+
									'<div class="marker-right">'+
										'<a href="#" class="directions_add_btn marker_btn">+</a>'+
									'</div>'+
								'</div>';

								var infowindow5 = new google.maps.InfoWindow({
     							content: contentString5,
     							maxWidth: 400
								});

								marker5.addListener('click', function() {
     								infowindow5.open(map, marker5);
									});

								/*--------end-marker5------*/

								/*--------marker6------*/

								var marker6 = new google.maps.Marker({
                // Определяем позицию маркера
                position: {lat: 55.822948, lng: 37.644295},
                // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
                map: map,
                // Пишем название маркера - появится если навести на него курсор и немного подождать
                title: 'парк ВДНХ',
                // Укажем свою иконку для маркера
                icon: 'img/pin.png'
							});

							var contentString6 = 
								'<div id="win-content">'+
									'<div class="marker-left">'+
										'<h1 id="firstHeading" class="firstHeading">парк ВДНХ</h1>'+
										'<div id="bodyContent">'+
											'<p class="marker_desc">'+ 'Бег'+
											'</p>'+
										'</div>'+
									'</div>'+
									'<div class="marker-right">'+
										'<a href="#" class="directions_add_btn marker_btn">+</a>'+
									'</div>'+
								'</div>';

								var infowindow6 = new google.maps.InfoWindow({
     							content: contentString6,
     							maxWidth: 400
								});

								marker6.addListener('click', function() {
     								infowindow6.open(map, marker6);
									});

								/*--------end-marker6------*/

								/*--------marker7------*/

								var marker7 = new google.maps.Marker({
                // Определяем позицию маркера
                position: {lat: 55.822948, lng: 37.601185},
                // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
                map: map,
                // Пишем название маркера - появится если навести на него курсор и немного подождать
                title: 'Парк Горького',
                // Укажем свою иконку для маркера
                icon: 'img/pin.png'
							});

							var contentString7 = 
								'<div id="win-content">'+
									'<div class="marker-left">'+
										'<h1 id="firstHeading" class="firstHeading">Парк Горького</h1>'+
										'<div id="bodyContent">'+
											'<p class="marker_desc">'+ 'Бег'+
											'</p>'+
										'</div>'+
									'</div>'+
									'<div class="marker-right">'+
										'<a href="#" class="directions_add_btn marker_btn">+</a>'+
									'</div>'+
								'</div>';

								var infowindow7 = new google.maps.InfoWindow({
     							content: contentString7,
     							maxWidth: 400
								});

								marker7.addListener('click', function() {
     								infowindow7.open(map, marker7);
									});

								/*--------end-marker7------*/

								/*--------marker8------*/

								var marker8 = new google.maps.Marker({
                // Определяем позицию маркера
                position: {lat: 55.822948, lng: 37.676398},
                // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
                map: map,
                // Пишем название маркера - появится если навести на него курсор и немного подождать
                title: 'Парк Сокольники',
                // Укажем свою иконку для маркера
                icon: 'img/pin.png'
							});

							var contentString8 = 
								'<div id="win-content">'+
									'<div class="marker-left">'+
										'<h1 id="firstHeading" class="firstHeading">Парк Сокольники</h1>'+
										'<div id="bodyContent">'+
											'<p class="marker_desc">'+ 'Бег'+
											'</p>'+
										'</div>'+
									'</div>'+
									'<div class="marker-right">'+
										'<a href="#" class="directions_add_btn marker_btn">+</a>'+
									'</div>'+
								'</div>';

								var infowindow8 = new google.maps.InfoWindow({
     							content: contentString8,
     							maxWidth: 400
								});

								marker8.addListener('click', function() {
     								infowindow8.open(map, marker8);
									});

								/*--------end-marker8------*/

								/*--------marker9------*/

								var marker9 = new google.maps.Marker({
                // Определяем позицию маркера
                position: {lat: 55.772029, lng: 37.753844},
                // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
                map: map,
                // Пишем название маркера - появится если навести на него курсор и немного подождать
                title: 'Парк Измайлово',
                // Укажем свою иконку для маркера
                icon: 'img/pin.png'
							});

							var contentString9 = 
								'<div id="win-content">'+
									'<div class="marker-left">'+
										'<h1 id="firstHeading" class="firstHeading">Парк Измайлово</h1>'+
										'<div id="bodyContent">'+
											'<p class="marker_desc">'+ 'Бег'+
											'</p>'+
										'</div>'+
									'</div>'+
									'<div class="marker-right">'+
										'<a href="#" class="directions_add_btn marker_btn">+</a>'+
									'</div>'+
								'</div>';

								var infowindow9 = new google.maps.InfoWindow({
     							content: contentString9,
     							maxWidth: 400
								});

								marker9.addListener('click', function() {
     								infowindow9.open(map, marker9);
									});

								/*--------end-marker9------*/

								/*--------marker10------*/

								var marker10 = new google.maps.Marker({
                // Определяем позицию маркера
                position: {lat: 55.733383, lng: 37.605904},
                // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
                map: map,
                // Пишем название маркера - появится если навести на него курсор и немного подождать
                title: 'Парк Музеон',
                // Укажем свою иконку для маркера
                icon: 'img/pin.png'
							});

							var contentString10 = 
								'<div id="win-content">'+
									'<div class="marker-left">'+
										'<h1 id="firstHeading" class="firstHeading">Парк Музеон</h1>'+
										'<div id="bodyContent">'+
											'<p class="marker_desc">'+ 'Бег'+
											'</p>'+
										'</div>'+
									'</div>'+
									'<div class="marker-right">'+
										'<a href="#" class="directions_add_btn marker_btn">+</a>'+
									'</div>'+
								'</div>';

								var infowindow10 = new google.maps.InfoWindow({
     							content: contentString10,
     							maxWidth: 400
								});

								marker10.addListener('click', function() {
     								infowindow10.open(map, marker10);
									});

								/*--------end-marker10------*/

								/*--------marker11------*/

								var marker11 = new google.maps.Marker({
                // Определяем позицию маркера
                position: {lat: 55.718067, lng: 37.676226},
                // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
                map: map,
                // Пишем название маркера - появится если навести на него курсор и немного подождать
                title: 'метро Дубровка',
                // Укажем свою иконку для маркера
                icon: 'img/pin.png'
							});

							var contentString11 = 
								'<div id="win-content">'+
									'<div class="marker-left">'+
										'<h1 id="firstHeading" class="firstHeading"><img src="img/metro-icon.png" alt="" class="metro-i">Дубровка</h1>'+
										'<div id="bodyContent">'+
											'<p class="marker_desc">'+ 'УЛ. ШАРИКОПОДШИПНИКОВСКАЯ, Д. 11, СТР. 5'+
											'</p>'+
											'<p class="marker_desc">'+ 'Бокс, Тайский-бокс, Растяжка, Бокс'+
											'</p>'+
										'</div>'+
									'</div>'+
									'<div class="marker-right">'+
										'<a href="#" class="directions_add_btn marker_btn">+</a>'+
									'</div>'+
								'</div>';

								var infowindow11 = new google.maps.InfoWindow({
     							content: contentString11,
     							maxWidth: 400
								});

								marker11.addListener('click', function() {
     								infowindow11.open(map, marker11);
									});

								/*--------end-marker11------*/

								/*--------marker12------*/

								var marker12 = new google.maps.Marker({
                // Определяем позицию маркера
                position: {lat: 55.678136, lng: 37.506723},
                // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
                map: map,
                // Пишем название маркера - появится если навести на него курсор и немного подождать
                title: 'метро Проспект Вернадского',
                // Укажем свою иконку для маркера
                icon: 'img/pin.png'
							});

							var contentString12 = 
								'<div id="win-content">'+
									'<div class="marker-left">'+
										'<h1 id="firstHeading" class="firstHeading"><img src="img/metro-icon.png" alt="" class="metro-i">Дубровка</h1>'+
										'<div id="bodyContent">'+
											'<p class="marker_desc">'+ 'Ленинский проспект, 101'+
											'</p>'+
											'<p class="marker_desc">'+ 'Бокс, Тайский-бокс, Растяжка, Бокс'+
											'</p>'+
										'</div>'+
									'</div>'+
									'<div class="marker-right">'+
										'<a href="#" class="directions_add_btn marker_btn">+</a>'+
									'</div>'+
								'</div>';

								var infowindow12 = new google.maps.InfoWindow({
     							content: contentString12,
     							maxWidth: 400
								});

								marker12.addListener('click', function() {
     								infowindow12.open(map, marker12);
									});

								/*--------end-marker12------*/

								/*--------marker13------*/

								var marker13 = new google.maps.Marker({
                // Определяем позицию маркера
                position: {lat: 55.571793, lng: 37.449505},
                // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
                map: map,
                // Пишем название маркера - появится если навести на него курсор и немного подождать
                title: 'жилой комплекс “Дубровка”',
                // Укажем свою иконку для маркера
                icon: 'img/pin.png'
							});

							var contentString13 = 
								'<div id="win-content">'+
									'<div class="marker-left">'+
										'<h1 id="firstHeading" class="firstHeading">5 км Калужского ш., жилой комплекс “Дубровка”</h1>'+
										'<div id="bodyContent">'+
											'<p class="marker_desc">'+ 'ул. Сосновая, 1Б'+
											'</p>'+
											'<p class="marker_desc">'+ 'Бокс, Тайский-бокс, Йога, Растяжка'+
											'</p>'+
										'</div>'+
									'</div>'+
									'<div class="marker-right">'+
										'<a href="#" class="directions_add_btn marker_btn">+</a>'+
									'</div>'+
								'</div>';

								var infowindow13 = new google.maps.InfoWindow({
     							content: contentString13,
     							maxWidth: 400
								});

								marker13.addListener('click', function() {
     								infowindow13.open(map, marker13);
									});

								/*--------end-marker12------*/
        }


