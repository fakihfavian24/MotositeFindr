class About extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="about">
      <div class="container">
          <div class="heading-about text-center">
            <h2>About MotositeFindr</h2>
            <p class="about">
              MotorsiteFindr is an online platform specifically designed to help people find and report lost motorcycles. 
              Using advanced technology and features, MotorsiteFindr provides an effective solution for motorcycle owners who have lost their vehicles.
            </p>

            <div class="row">
              <div class="col col-sm-6">
                <h3>Our Vision</h3>
                <p>
                  MotositeFindr aims to offer cutting-edge and leading solutions in the search for lost motor vehicles. 
                  We understand the importance of your vehicles, and our vision is to be a reliable partner in helping you recover vehicles that may be lost or stolen.
                </p>
              </div>
              <div class="col col-sm-6">
                <h3>Our Mission</h3>
                <p>
                  MotositeFindr's mission is to provide a reliable and effective platform to help the community in rediscovering lost vehicles, 
                  as well as offering the necessary support throughout the search process.
                </p>
              </div>
            </div>
          </div>
      </div>
    </section>
    `;
  }
}

customElements.define('about-section', About);