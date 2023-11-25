const Form = {
  async render() {
    return `
    <section class="form">
      <div class="container">
        <div class="row">
          <div class="heading-form col col-sm-6 text-center">
            <h2>Filling Out</h2>
            <p>Follow these steps to utilize Motor Finder and recover your lost motorcycle</p>
            
            <div class="fill-form"> 
              <div class="mb-4">
                <label for="exampleFormControlInput1" class="form-label">License Plate</label>
                <input type="text" class="form-control" placeholder="Enter motorcycle license plate">
              </div>

              <div class="mb-4">
                <label for="exampleFormControlInput1" class="form-label">Model</label>
                <input type="text" class="form-control" placeholder="Enter motorcycle model">
              </div>

              <div class="mb-4">
                <label for="exampleFormControlInput1" class="form-label">Description</label>
                <input type="text" class="form-control" placeholder="Enter motorcycle description">
              </div>

              <div class="mb-4">
                <label for="exampleFormControlInput1" class="form-label">Date and Time</label>
                <input type="date" class="form-control" placeholder="Enter date and time when the motorcycle was lostm">
              </div>

              <div class="mb-5">
                <label for="formFile" class="form-label">Add Image</label>
                <input class="form-control" type="file" id="formFile">
              </div>

            </div>

            <div class="text-end">
            <button class="btn-submit" type="button"><a href="#/">Submit</a></button>
          </div>

          </div>

          <div class="col col-sm-6">
          

          </div>
        </div>
      </div>
    </section>
    `;
  },

  async afterRender() {

  },
};

export default Form;