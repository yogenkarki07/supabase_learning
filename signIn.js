function handleSignIn() {
    // Implementation for sign-in logic

    let result = db.auth.signInWithPassword({
        email: "kdowd10@gmail.com",
        password: "12345678",
    });

    let data = result.data;
    let error = result.error;

    if (error) {
        alert("Invalid login credentials"); // e.g. "Invalid login credentials"
         return;
    }

    // if (data.session) {
    //     console.log("SUCCESS");
    //     // update UI, user has logged in
    // }
}