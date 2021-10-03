let main_form = document.getElementById('main_form');


main_form.addEventListener('submit',function(event){
    event.preventDefault();
    let name = document.getElementById('name');
    console.log(name.value)
    if ((name.value).length > 0) {
    
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
            //body: JSON.stringify({input_name:name.value})
        }
        fetch ("http://127.0.0.1:5000/token",requestOptions)
        .then (response => response.json())
        .then(data => sessionStorage.setItem("token", data.access_token))
    }
})

function test_token () {
    const requestOptions_post = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({access_token:sessionStorage.getItem("token")})
    }

    fetch ("http://127.0.0.1:5000/token_test",requestOptions_post)
        .then (response => response.json())
        .then(data => {
            console.log(data)
            if (data == 'success'){
                window.location.href = "http://127.0.0.1:5000/access_html"
            }
        })

}