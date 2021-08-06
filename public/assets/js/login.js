// const loginForm = document.querySelector("#loginForm");
// loginForm.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const authObj = {
//         email: document.querySelector("#email").value,
//         password: document.querySelector("#password").value,
//     }
//     console.log(authObj)
//     fetch("/api/users/login", {
//         method: "POST",
//         body: JSON.stringify(authObj),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     }).then(res => {
//         if (res.ok) {
//             console.log("success")
//             res.json().then(data => {
//                 location.assign(`/account/${data.id}`)
//             })
//         } else {
//             alert("Your Email or Password is incorrect.")
//         }
//     })
// })

const loginForm = document.querySelector("#loginForm")
loginForm.addEventListener("submit",(e) => {
  e.preventDefault();
  const authObj={
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value,

  }

  console.log(authObj);
//   fetch("/api/users/login", {
//     method:"POST",
//     body:JSON.stringify(authObj),
//     headers:{
//       "Content-Type":"application/json"
//     }
//   }).then(res=>{
//     if(res.ok){
//       return res.json()
//     }else {
//       alert("error!")
//     }
//   })
//   .then(data=>{
//     console.log(data);
//   })
})