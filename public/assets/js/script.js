// Wait for html document to load
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }

    // Button to update burger to devoured = true
    const devourBtn = $(".devour-btn");

    // When the button devour it is clicked
    devourBtn.click((e)=>{

        const id = $(e.target).attr("data-id");
        const updateDevoured = {devoured: true}

        // run put request
        fetch(`/api/burgers/${id}`, {
            method: "PUT",
            headers: {
                "Accept" : "application/json",
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(updateDevoured)
        })
        .then((response) => {
            if(response.ok){
                location.reload();
            }
            else{
                alert("Something went wrong!")
            }
        })
    })

    // Button to add new burger
    const addBurgerForm = $("#add-burger");

    // When the form is submitted
    addBurgerForm.submit((e)=>{

        e.preventDefault();
        const newBurger = {burger_name: $("#burgerText").val()};

        // post request 
        fetch("/api/burgers", {
            method: "POST",
            headers: {
                "Accept" : "application/json",
                "Content-Type" : "application/json"
            }, 
            body: JSON.stringify(newBurger)
        })
        .then(()=> {
            location.reload();
        })
    });
});