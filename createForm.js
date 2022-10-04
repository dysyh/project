const thisForm = document.getElementById('form');

thisForm.addEventListener('submit',async function(e){
    e.prevetDefault();
    const formData = new FormData(thisForm).entries()
    const response = await fetch("",{
        method:"POST",
        headers: {'':''},
        body:JSON.stringfy(Object.fromEntries(formData))
    });
    const result = await response.json();
    console.log(result)
});