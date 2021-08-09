const loginForm = document.querySelector("#loginForm")
loginForm.addEventListener("submit",(e) => {
  e.preventDefault();
  const authObj={
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value,

  }

  console.log(authObj);
  fetch("/api/users/login", {
    method:"POST",
    body:JSON.stringify(authObj),
    headers:{
      "Content-Type":"application/json"
    }
  }).then(res=>{

    if(res.ok){
      window.location.href='/directory';
    }else {
      alert("error!")
    }
  })
})