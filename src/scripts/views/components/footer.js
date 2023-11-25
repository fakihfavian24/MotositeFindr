class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer class="border-top border">

            <div class="container">
              <div class="d-flex justify-content-evenly mt-5 mb-4">
                <p class="footer-text">© 2023 MotositeFindr. All rights reserved.</p>
                <p class="footer-text">Privacy Policy</p>
                <p class="footer-text">Terms of Service</p>
              </div>
            </div>
          </footer>
    `;
  }
}

customElements.define('footer-section', Footer);