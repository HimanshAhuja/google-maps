function initMap(){
    var options = {
        zoom: 3,
        center: {lat: 20.5937, lng: 78.9629}
    }
    var map = new google.maps.Map(document.getElementById('map'), options)
    var markers = [
        {
            coords: {lat: 25.2744, lng: 133.7751},
            content: '<h1>Australia</h1>'
        },  
        {
            coords: {lat: 1.3521, lng: 103.8198},
            content: '<h1>Singapore</h1>'
        },  
        {
            coords: {lat: 14.2350, lng: 51.9253},
            content: '<h1>Brazil</h1>'
        }
    ]
}

for(var i = 0; i < markers.length; i++){
    addMarker(markers[i])
}

function addMarker(props){
    var marker = new google.maps.Map({
        position: props.coords,
        map: map,
    })
    if(props.content){
        var infowindow = new google.maps.InfoWindow({
            content: props.content 
        })
        marker.addListener('click', function(){
            infowindow.open(map,marker)
        })
    }
}
