async function signupFormHandler(event) {
    event.preventDefault();
    const newUser = {
        first_name: document.querySelector('#first_name').value,
        last_name: document.querySelector('#last_name').value,
        email: document.querySelector('#email').value,
        password: document.querySelector('#password').value
    }
    fetch("/api/users", {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        if (res.ok) {
        } else {
            console.log(res)
            location.replace('/directory')
        }
    })
}

document
    .querySelector('.registration-form')
    .addEventListener('submit', signupFormHandler);