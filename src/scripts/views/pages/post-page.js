const PostPage = {
    async render() {
      return `
      <section class="post">
        <div class="container">
          <div class="row">
            <div class="heading-post col col-sm-6 text-center">
              <h2>How It Works</h2>
              <p>Follow these steps to utilize MotositeFindr and recover your lost motorcycle:</p>
  
              <div class="text-start">
              <button class="btn-getstarted" type="button"><a href="#/form">Get Started</a></button>
            </div>
  
            </div>
  
            <div class="col col-sm-6">
  
              <div class="card-post card mb-4" data-aos="fade-left" style="max-width: 540px;">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="./images/img/step/step1.jpeg" class="img-statistic img-fluid rounded mb-1" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Step 1</h5>
                      <p class="card-text">Fill all the form</p>
                    </div>
                  </div>
                </div>
              </div>
  
              <div class="card-post card mb-4" data-aos="fade-right" style="max-width: 540px;">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="./images/img/step/step2.jpeg" class="img-statistic img-fluid rounded" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Step 2</h5>
                      <p class="card-text"> MotositeFindr will analyze multiple sources and databases to track your motorcycle.</p>
                    </div>
                  </div>
                </div>
              </div>
  
              <div class="card-post card mb-5" data-aos="fade-left" style="max-width: 540px;">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="./images/img/step/step3.jpeg" class="img-statistic img-fluid rounded" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Step 3</h5>
                      <p class="card-text">Receive real-time updates and location details about your motorcycle.</p>
                    </div>
                  </div>
                </div>
              </div>
  
            </div>
          </div>
        </div>
      </section>
      `;
    },
  
    async afterRender() {
  
    },
  };
  
  export default PostPage;