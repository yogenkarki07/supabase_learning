// function for Sign-in/log-in section 
async function handleSignIn() {
    const userEmail = document.querySelector("#email").value.trim();
    const userPassword = document.querySelector("#password").value.trim();

    if(userEmail == "" || userPassword == ""){
        console.warn("Email or password is empty");
        return;
    }

    //call supabase's signIn method
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

//function -- checkSession
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

checkSession();

async function logOut(){
    await db.auth.signOut();
    checkSession();
}

// function for Sign-up/Registser-user section 
async function handleSignUp(){
    const userEmail = document.querySelector("#signup-email").value.trim();
    const userPassword = document.querySelector("#signup-password").value.trim();

    console.log("hello");
    console.log(userEmail);
    console.log(userPassword);

    if(userEmail == "" || userPassword == ""){
        console.warn("Email or password is empty.");
        alert("Please, enter both email and password");
        return;
    }

    //call Supabase signUp method
    let result = await db.auth.signUp({
        email: userEmail,
        password: userPassword,
    });

    let data = result.data;
    let error = result.error;

    if(error){
        alert("Sign-up failed: " + error.message);
        return;
    }

    if(data){
        console.log("Sign-up successful: ", data);
        alert("Registration successfull: Please check your email for confirmation.");
        checkSession();
    }
}
