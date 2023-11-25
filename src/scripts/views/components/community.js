class Community extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="community">
      <div class="container">
        <div class="row-card row">

          <div class="heading-community col col-sm-6 text-center">
            <h2>Community Help</h2>
            <p>Join our community to support each other in finding lost motorcycles</p>
          </div>

          <div class="col col-sm-3">

            <div class="card-community card mt-2 mb-5" style="width: 15rem;">
              <img src="./images/heros/gambar-dasar.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title-community">Lost my motorcycle, any help is appreciated</h5>
                <span class="badge bg-secondary">Motorcycle Help</span>
                <p class="card-text"><i class="fa-solid fa-user"></i> JohnDoe</p>
              </div>
            </div>

          </div>

          <div class="col col-sm-3">

            <div class="card-community card mt-2 mb-5" style="width: 15rem;">
              <img src="./images/heros/gambar-dasar.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title-community">Lost my motorcycle, any help is appreciated</h5>
                <span class="badge bg-secondary">Suspected Theft</span>
                <p class="card-text"><i class="fa-solid fa-user"></i> JohnDoe</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
    `;
  }
}

customElements.define('community-section', Community);