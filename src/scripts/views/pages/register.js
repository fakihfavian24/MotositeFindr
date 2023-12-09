import MotorSource from "../../data/motor-source";

const Register = {
  async render() {
    return `
    <section class="register">
      <div class="container">
        <div class="row"> 

          <div class="heading-register col col-sm-6">

            <h2>Register Form</h2>
            <p>Please register here</p>

            <form id="formTambahData">
              <div class="form-register mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" name="username" placeholder="Enter your username" required>

                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" name="password" placeholder="Enter your password" required>

                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" name="name" placeholder="Enter your name" required>

                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" name="email" placeholder="Enter your email" required>
                
              </div>

              <div class="d-grid gap-2">
                <button class="btn-register btn" type="button">Register</button>
              </div>
              
              <div class="already-have-account">
              <p>Already Have Account? <a href="#/login">Click Here</a>
              </p></div>

            </form>

          </div>

          <div class="col col-sm-6 text-center">
            <img src="./images/img/register.jpg" class="img-register card-img-top" data-aos="fade-left" alt="...">
          </div>


        </div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const registerFunction = async () => {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;

      if(!username || !name || !email || !password){
        alert('Isi woy');
        return;
      }

      const dataInput = {
        username,
        name,
        email,
        password,
      };

      MotorSource.register(dataInput);
    };

    document.querySelector('.btn-register').addEventListener('click', registerFunction);
  },
};

export default Register;