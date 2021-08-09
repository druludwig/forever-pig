const requestBtn = document.querySelector("#requestBtn");
requestBtn?.addEventListener("click",e=>{
    fetch(`/api/users/request/${requestBtn.getAttribute('data-pigId')}`,{
        method:"POST",
        headers:{"Content-Type": "application/json"}
    }).then(res=>{
        if(res.ok){
            location.reload()
        }else {
            alert('oopsies')
        }
    })
})