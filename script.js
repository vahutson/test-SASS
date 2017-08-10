// console.log('ok');
//

$.ajax({
    url: "https://anypoint.mulesoft.com/apiconsoleproxy/api/v1/proxy/http://504080.com/api/v2/services/categories",
    type: "GET",
    headers: {'Authorization': 'ACCESS_TOKEN'},
    done(function( data ) {
        console.log('sucess');
        console.log(data );
    })
    .error(function (data) {
        console.log('error');
        console.log(data );
    });
});


$.get( "https://anypoint.mulesoft.com/apiconsoleproxy/api/v1/proxy/http://504080.com/api/v2/services/categories" )
    .done(function( data ) {
        console.log('sucess');
        console.log(data );
    })
    .error(function (data) {
        console.log('error');
        console.log(data );
    });