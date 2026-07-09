// Supabase Configuration
const SUPABASE_URL = 'https://xsnptmmkicwequoxrtyr.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzbnB0bW1raWN3ZXF1b3hydHlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM1NjYxNDcsImV4cCI6MjA5OTE0MjE0N30._qGGtGSpcye4oS7sVtA07Z6157q0cohMhTDO6-XHXZE';

// Initialize the Supabase Client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let isLoginMode = false;

// Expose toggleForm globally so the onclick handler in HTML can reach it
window.toggleForm = function(type) {
    const title = document.getElementById('form-title');
    const submitBtn = document.getElementById('submit-btn');
    const toggleText = document.getElementById('toggle-text');
    const professionGroup = document.getElementById('profession-group');
    const nameInput = document.getElementById('name');
    
    isLoginMode = (type === 'login');
    
    if(isLoginMode) {
        title.innerText = 'Log In to Your Account';
        submitBtn.innerText = 'Log In';
        toggleText.innerHTML = 'Don\\'t have an account? <a onclick="toggleForm(\\'signup\\')">Sign up here</a>';
        professionGroup.style.display = 'none';
        document.getElementById('profession').removeAttribute('required');
        nameInput.parentElement.style.display = 'none';
        nameInput.removeAttribute('required');
    } else {
        title.innerText = 'Become a Freelancer';
        submitBtn.innerText = 'Create Account';
        toggleText.innerHTML = 'Already have an account? <a onclick="toggleForm(\\'login\\')">Log in here</a>';
        professionGroup.style.display = 'block';
        document.getElementById('profession').setAttribute('required', 'true');
        nameInput.parentElement.style.display = 'block';
        nameInput.setAttribute('required', 'true');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.auth-form');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const submitBtn = document.getElementById('submit-btn');
        
        // Simple loading state
        const originalBtnText = submitBtn.innerText;
        submitBtn.innerText = 'Processing...';
        submitBtn.disabled = true;
        
        try {
            if (isLoginMode) {
                // Handle Log In
                const { data, error } = await supabase.auth.signInWithPassword({
                    email: email,
                    password: password
                });
                
                if (error) {
                    alert('Login failed: ' + error.message);
                } else {
                    alert('Logged in successfully!');
                    // Redirect to homepage after login
                    window.location.href = 'index.html';
                }
            } else {
                // Handle Sign Up
                const name = document.getElementById('name').value;
                const profession = document.getElementById('profession').value;
                
                const { data, error } = await supabase.auth.signUp({
                    email: email,
                    password: password,
                    options: {
                        data: {
                            full_name: name,
                            profession: profession
                        }
                    }
                });
                
                if (error) {
                    alert('Signup failed: ' + error.message);
                } else {
                    alert('Account created successfully! Please check your email to verify.');
                    window.toggleForm('login');
                }
            }
        } catch (err) {
            alert('An unexpected error occurred.');
            console.error(err);
        } finally {
            // Restore button state
            submitBtn.innerText = originalBtnText;
            submitBtn.disabled = false;
        }
    });
});
