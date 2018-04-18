$.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
    type: 'GET',
    header: {'Access-Control-Allow-Origin': '*'},
    crossDomain: true,
    success: function(data) {
        // console.log(data);
        data.forEach(function(element){
           $('#ajax').append('<span>' + element.id + ' ' + element.title + '<span><br>');
        });
    },
    error: function(response,status,error){
        console.log(status);
    }
});