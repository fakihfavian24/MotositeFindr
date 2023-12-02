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

            <div class="form-contact">
              <div class="mb-3">
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Name">
              </div>
              <div class="mb-3">
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email*">
              </div>
              <div class="mb-3">
                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Phone Number*">
              </div>

              <div class="mb-3">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your message..."></textarea>
              </div>

            </div>

            <div class="d-grid gap-2">
              <button class="btn-contact btn" type="button">Send Message</button>
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

export default Contact;