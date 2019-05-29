var myMap ,
    myPlacemark1,
    myPlacemark2,
    myPlacemark3,
    myPlacemark4
    ymaps.ready(init);
    function init(){    
        myMap = new ymaps.Map("map", {
            center: [59.9308,30.3532, 59.9334,30.3772],
            zoom: 12 ,
            controls: ['zoomControl'] ,
            behaviors: ['drag']
        });
    



    myPlacemark1 = new ymaps.Placemark([59.9724, 30.3094], {
    balloonContent: 'sadas'
    
    
    },
    {
        iconLayout:'default#image',
        iconImageHref:'img/icons/map-marker.svg',
        iconImageSize: [46 , 57]
    });

    myPlacemark2 = new ymaps.Placemark([59.9433, 30.3764], {
        hintContent: 'uu' ,
        balloonContent: '333'
        
        },
        {
            iconLayout:'default#image',
            iconImageHref:'img/icons/map-marker.svg',
            iconImageSize: [46 , 57]
        });
    
    
    myPlacemark3 = new ymaps.Placemark([59.9230, 30.4809], {
            hintContent: '' ,
            balloonContent: ''
            
            },
            {
                iconLayout:'default#image',
                iconImageHref:'img/icons/map-marker.svg',
                iconImageSize: [46 , 57]
            });
    
    myPlacemark4 = new ymaps.Placemark([59.8999, 30.3197], {
                hintContent: 'uu' ,
                balloonContent: '333'
                
                },
                {
                    iconLayout:'default#image',
                    iconImageHref:'img/icons/map-marker.svg',
                    iconImageSize: [46 , 57]
                });
    
    
    myMap.geoObjects.add(myPlacemark1);
    myMap.geoObjects.add(myPlacemark2);
    myMap.geoObjects.add(myPlacemark3);
    myMap.geoObjects.add(myPlacemark4);



    }
