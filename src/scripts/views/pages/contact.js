/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const Contact = {
  async render() {
    return `
    <section class="contact">
      <div class="container">
        <div class="row">
        
          <div class="heading-contact col col-sm-6 text-center">
            <h2>Get in Touch</h2>
            <p>Feel free to reach out if you have any questions, suggestions, or collaboration opportunities. We are here to assist you with pleasure.</p>
            
          </div>

          <div class="col col-sm-6">

            <form>
              <div class="form-contact">
                <div class="mb-3">
                  <input type="text" class="form-control" id="subject" placeholder="Subject">
                </div>
                  <div class="mb-3">
                    <input type="text" class="form-control" id="name" placeholder="Your Name">
                  </div>
                  <div class="mb-3">
                    <input type="email" class="form-control" id="email" placeholder="Email*">
                  </div>
                  <div class="mb-3">
                    <input type="number" class="form-control" id="phone" placeholder="Phone Number*">
                  </div>

                  <div class="mb-3">
                    <textarea class="form-control" id="yourMessage" rows="3" placeholder="Your message..."></textarea>
                  </div>

                </div>

                <div class="d-grid gap-2">
                  <button class="btn-contact btn" type="submit">Send Message</button>
                </div>

              </div>
            </form>
          </div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const form = document.querySelector("form");
    const fullName = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const yourMessage = document.getElementById("yourMessage");
    const subject = document.getElementById("subject");

    function sendEmail() {
      const bodyMessage = `Name: ${fullName.value}<br> Email: ${email.value}<br> Phone: ${phone.value}<br> Message: ${yourMessage.value}`;
      Email.send({
        Host: "smtp.elasticemail.com",
        Username: "mifthah.pbgame1@gmail.com",
        Password: "03450C1208D896F2009311AF96005E577807",
        To: "mifthah.pbgame1@gmail.com",
        From: "mifthah.pbgame1@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
      }).then(message => alert("mail sent successfully"));
    }
    form.addEventListener("submit", e => {
      e.preventDefault();
      sendEmail();
    });
  }
};

export default Contact;
