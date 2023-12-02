const Login = {
  async render() {
    return `
    <section class="login">
      <div class="container">
        <div class="row"> 

          <div class="col col-sm-6 text-center">
            <img src="./images/img/login.jpg" class="img-login card-img-top" data-aos="fade-right" alt="...">
          </div>

          <div class="heading-login col col-sm-6">

            <h2>Login to your Account</h2>
            <p>See what is going on with your business</p>

            <div class="form-login mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" placeholder="Enter your email">

              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" id="password" placeholder="Enter your password">
            </div>

            <div class="forgot mb-4 text-center">
              <a href="#">Forgot Password?</a>
            </div>

            <div class="d-grid gap-2">
              <button class="btn-login btn" type="button">Login</button>
              <button class="btn-login-google btn" type="button"><img src="./images/img/google.png" class="card-img-top">Continue with Google</button>
            </div>

            <div class="register-create">
            <span>Not Registered Yet? <a href="#/register">Create an account</a>
            </span>
            </div>

          </div>

        </div>
      </div>
    </section>
    `;
  },

  // eslint-disable-next-line no-empty-function
  async afterRender() {

  },
};

export default Login;