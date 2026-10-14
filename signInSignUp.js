function toggleForms(event) {
    event.preventDefault(); // Prevents the page from jumping
        const signInSection = document.getElementById('sign-in-section');
            const signUpSection = document.getElementById('sign-up-section');

            if (signInSection.style.display === 'none') {
                signInSection.style.display = 'block';
                signUpSection.style.display = 'none';
            } else {
                signInSection.style.display = 'none';
                signUpSection.style.display = 'block';
            }
        }

// toggleForms();
 