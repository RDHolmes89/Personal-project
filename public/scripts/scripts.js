
function initMap() {
    //Map options
    var options = {
        zoom: 8,
        center: { lat: 42.3601, lng: -71.0589 },
    }
    //New map
    var map = new
        google.maps.Map(document.getElementById('map'), options);
    //Listen for click on map addList
    google.maps.event.addListener(map, 'click', function(e){
        addMarker({coords:e.latLng});
    });
//  IMAGINE when you click it and trigger the event will save and store the lat and longitude in the markers array?// //WOULD I NEED A SAVE BUTTON OR FORM?

    // create array of markers
    //THIS ARRAY CAN BE STORED IN A DATABASE//
    //WILL PROBABLY NEED TO CHANGE THE COORDS AND CONTENT SAVED TO BE BASED ON WHAT IS CLICKED

    //maybe will plug in coords etc as the values for my form if i need to create one//
    //PROBABLY need to create a varable to store what the content is acutually based on long and lats (i.e. content: plug in whatever var you chose)
//might use flagiconimage for ending points only!
    var markers = [
        {
            coords: { lat: 42.5195, lng: -70.8967 },
            
            content: 'Salem, MA'
        },
        { coords: { lat: 42.2832, lng: -71.1265 },
    content: 'Roslindale, MA'
    },
    { coords: { lat: 42.3601, lng: -71.0589},
    content: 'Boston, MA'
    }
    ];

    //Loop through markers
    for(var i=0;i < markers.length; i++ ){
        //ADD MARKER
        addMarker(markers[i]);
    }
    
    //Add Marker Function
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            draggable: true
        });
        //check for custom icon
        if (props.iconImage) {
            //Set icon image
            marker.setIcon(props.iconImage);
        }
        // Check content
        if(props.content){
            var infoWindow = new google.maps.InfoWindow( {
                content: props.content
            });
  // maybe add info to bottom addlistener function to save the location of where you dropped your pin//
            marker.addListener('click', function(){
                infoWindow.open(map, marker);
            });
        }
    }
}

