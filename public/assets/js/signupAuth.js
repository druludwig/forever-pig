const signupForm = document.querySelector("#signupForm")
signupForm.addEventListener("submit",(e) => {
  e.preventDefault();
  const authObj={
    first_name:document.querySelector("#first_name").value,
    last_name:document.querySelector("#last_name").value,
    email:document.querySelector("#email").value,
    password:document.querySelector("#password").value,

  }
  fetch("/api/users", {
    method:"POST",
    body:JSON.stringify(authObj),
    headers:{
      "Content-Type":"application/json"
    }
  }).then(res=>{
    if(res.ok){
      return res.json()
    }else {
      alert("error!")
    }
  }).then(data=>{
    console.log(data);
  })
})