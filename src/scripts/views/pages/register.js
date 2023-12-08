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

            <div class="form-register mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" placeholder="Enter your email">

              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" id="password" placeholder="Enter your password">
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

  },
};

export default Register;