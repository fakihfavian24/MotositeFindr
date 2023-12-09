import Swal from 'sweetalert2';
import CONFIG from "../../globals/config";

const Login = {
    async render() {
        return `
    <section class="login">
        <div class="container">
            <div class="row">
                <div class="col col-sm-6 text-center">
                    <img
                        src="./images/img/login.jpg" class="img-login card-img-top" data-aos="fade-right" alt="..."/>
                    </div>

                    <div class="heading-login col col-sm-6">
                    <h2>Login to your Account</h2>
                    <p>See what is going on with your business</p>

                    <div class="form-login mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input type="username" class="form-control" id="username" name="username" placeholder="Enter your email"/>

                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" name="password" placeholder="Enter your password"/>
                    </div>

                    <div class="forgot mb-4 text-center">
                        <a href="#">Forgot Password?</a>
                    </div>

                    <div class="d-grid gap-2">
                        <button id="loginButton" class="btn-login btn" type="button">Login</button>
                        <button class="btn-login-google btn" type="button">
                        <img
                            src="./images/img/google.png"
                            class="card-img-top"
                        />Continue with Google
                        </button>
                    </div>

                    <div class="register-create">
                        <span
                        >Not Registered Yet? <a href="#/register">Create an account</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;
    },
    async afterRender() {
        document.getElementById('loginButton').addEventListener('click', async () => {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Buat objek data yang akan dikirim ke API
            const data = {
                username,
                password,
            };

            try {
                // Kirim permintaan ke API untuk melakukan login
                const response = await fetch(`${CONFIG.BASE_URL_API}login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                if (!response.ok) {
                    throw new Error('Login failed');
                }

                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: 'Welcome back!',
                });

                window.location.hash = '#/home';
            } catch (error) {
                console.error('Login failed:', error.message);
                // Handle error, misalnya menampilkan pesan kesalahan kepada pengguna
            }
        });
    }
};

export default Login;
