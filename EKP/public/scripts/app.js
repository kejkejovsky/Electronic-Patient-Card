$(function(){
    $("#Startowy").show()
})

var page = 0

function ShowPatList(){
    axios.get('/showpatlist',{
    })
    .then(function(response){

    })

    .catch(function(error){

    })
}

function ShowObservation(){
    axios.post('/showobservation',{
    })
    .then(function(response){

    })

    .catch(function(error){

    })
}
