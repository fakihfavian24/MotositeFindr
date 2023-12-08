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
            <form id="formRegister">
              <div class="form-register mb-3">
                <label for="username" class="form-label">username</label>
                <input type="username" class="form-control" id="username" placeholder="Enter your email">
                
                <label for="name" class="form-label">name</label>
                <input type="name" class="form-control" id="name" placeholder="Enter your email">
                
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Enter your email">

                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Enter your password">
              </div>

              <div class="d-grid gap-2">
                <button class="btn-register btn" type="submit">Register</button>
              </div>
            </form>
            <div class="already-have-account">
            <p>Already Have Account? <a href="#/login">Click Here</a>
            </p></div>

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
    const form = document.getElementById('formRegister');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const username = document.getElementById('username').value;
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

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

      await MotorSource.register(dataInput);
      
    });
    form.reset();
  },
};

export default Register;