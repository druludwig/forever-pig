const requestBtn = document.querySelector("#requestBtn");
requestBtn?.addEventListener("click",e=>{
    const requestObj = {
        request:e.target.getAttribute(user.id)
    }
    fetch("api/users/request",{
        method:"POST",
        body:JSON.stringify(requestObj),
        headers:{"Content-Type": "application/json"}
    }).then(res=>{
        if(res.ok){
            location.reload()
        }else {
            alert('oopsies')
        }
    })
})