$(document).ready(function() {
    const API_KEY = "at_PnUJi8e21hGhZxfNXslSn2cOSfm6d";

    /* let map = L.map('map', {
        center: [39.452481, -0.371985],
        zoom: 13
    }); */

    $('#formulario').submit(function(e) {
        e.preventDefault();
        let IP = $('#ip_address').val();
        let URL = `https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=${IP}`;

        $.ajax({
            url: URL,
            method: 'GET'
        }).done(function(response) {
            console.log(response);

            $('.IP > p').text(response.ip);
            $('.LOCATION > p').text(`${response.location.city}, ${response.location.country} ${response.location.postalCode}`);
            $('.TIMEZONE > p').text(response.location.timezone);
            $('.ISP > p').text(response.isp);
        });
    });
});