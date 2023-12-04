class Stolen extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="stolen">
      <div class="container">
        <div class="row">

          <div class="col col-sm-6">
          <div class="stolen-up">
            <div class="card-stolen card" data-aos="fade-right" style="max-width: 240px;">
              <img src="./images/heros/gambar-dasar.jpg" class="card-img rounded-circle mx-auto d-block" alt="...">
              <div class="card-body text-center">
                <h5 class="card-title">Merek Motor</h5>
                <p class="card-text"><small class="text-muted">License Plate: ABC123</small></p>
                <h6 class="card-text">Last seen: XYZ Street</h6>
              </div>
            </div>

            <div class="card-stolen card mb-5" data-aos="fade-right" style="max-width: 240px;">
              <img src="./images/heros/gambar-dasar.jpg" class="card-img rounded-circle mx-auto d-block" alt="...">
              <div class="card-body text-center">
                <h5 class="card-title">Merek Motor</h5>
                <p class="card-text"><small class="text-muted">License Plate: ABC123</small></p>
                <h6 class="card-text">Last seen: XYZ Street</h6>
              </div>
            </div>
            </div>

          </div>

          <div class="heading-stolen col col-sm-5 text-center">
            <h2>Recent Stolen Motorcycles</h2>
            <p>Learn about the prevalence of motorcycle theft</p>
          </div>

        </div>
      </div>
    </section>
    `;
  }
}

customElements.define('stolen-section', Stolen);