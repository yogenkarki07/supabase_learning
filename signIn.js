async function handleSignIn() {
    const userEmail = document.querySelector("#email").value.trim();
    const userPassword = document.querySelector("#password").value.trim();

    if(userEmail == "" || userPassword == ""){
        console.warn("Email or password is empty");
        return;
    }

    let result = await db.auth.signInWithPassword({
        email: userEmail,
        password: userPassword,
    });

    let data = result.data;
    let error = result.error;

    if (error) {
        alert("Invalid login credentials"); // e.g. "Invalid login credentials"
         return;
    }

    if(data){
        console.log(data);
        checkSession();
    }
}

async function checkSession(){
    const res = await db.auth.getSession();
    let status  = document.querySelector(".status span");
    let email = document.querySelector(".status .email");

    if(res.data.session){
        status.textContent = "Logged In";
        email.textContent = res.data.session?.user?.email || "";
        // email.textContent = email;
    } else {
        status.textContent = "Not Logged In";
        email.textContent = "";
    }
}

async function logOut(){
    await db.auth.signOut();
    checkSession();
}

checkSession();