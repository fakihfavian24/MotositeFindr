class Header extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand ms-5" href="#"><i class="fa-solid fa-motorcycle"></i> MotositeFindr</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto me-5">
            <li class="nav-item px-2">
              <a class="nav-link" aria-current="page" href="#/">Home</a>
            </li>
            <li class="nav-item px-2">
              <a class="nav-link" href="#/post">Post</a>
            </li>
            <li class="nav-item px-2">
              <a class="nav-link" href="#/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
    `;
  }
}

customElements.define('header-section', Header);