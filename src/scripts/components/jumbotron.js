class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#searchInput").value;
  }

  render() {
    this.innerHTML = `
    <section class="jumbotron">
      <div class="p-5 mb-1">
        <div class="container-fluid py-5">
          <h1 class="fw-bold text-center pt-5" data-aos="fade-right">Find Your Lost Motorcycle</h1>
          <p class="text-center" data-aos="fade-left">Come find your motorbike easily and for free</p>
          <div
            <div class="text-center mb-1">
              <a href="#/searchpages"><button class="btn-search" type="button" id="searchButton">Get Started</button></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    `;

    this.querySelector('#searchButton').addEventListener('click', this._clickEvent);
  }
}

customElements.define('jumbotron-section', Jumbotron);