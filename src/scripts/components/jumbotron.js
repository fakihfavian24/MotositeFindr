class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="jumbotron">
      <div class="p-5 mb-5">
        <div class="container-fluid py-5">
          <h1 class="fw-bold text-center pt-5" data-aos="fade-right">Find Your Lost Motorcycle</h1>
          <p class="text-center" data-aos="fade-left">Enter the details of your lost motorcycle to start the search</p>

          <div class="form-input">
            <input class="form-control" type="text" placeholder="Enter motor model" aria-label="default input example">
          </div>

          <div class="text-center mb-5">
            <button class="btn-filter" type="button"><a href="#/">Filter</a></button>
            <button class="btn-search" type="button"><a href="#/searchpages">Search</a></button>
          </div>

        </div>
      </div>
    </section>
    `;
  }
}

customElements.define('jumbotron-section', Jumbotron);