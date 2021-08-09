const newPigForm = document.querySelector("#newPiggy");
newPigForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newPigObj = {
        name: document.querySelector("#pigName").value,
        breed: document.querySelector("#pigBreed").value,
        birthdate: document.querySelector("#pigBirthday").value,
        sex: document.querySelector("#pigSex").value,
        weight: document.querySelector("#pigWeight").value,
        location: document.querySelector("#pigLocation").value,
        farm_name: document.querySelector("#pigFarm").value,

    }
    console.log(newPigObj);

    fetch("/api/piggy", {
        method: "POST",
        body: JSON.stringify(newPigObj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        if (res.ok) {
            console.log("success")
            res.json().then(data => {
                location.assign(`/directory`)
            })
        } else {
            alert("Sorry we cannot accept this little piggy")
        }
    })
})