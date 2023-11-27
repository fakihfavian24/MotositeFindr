const Form = {
  async render() {
    return `
    <section class="form">
      <div class="container">
        <div class="row">
          <div class="heading-form col col-sm-9 ms-auto text-center">
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
                <input class="form-control" type="file" id="formFile" accept="image/">
              </div>
              <div id="imagePreview" class="mb-5"></div>

            </div>

            <div class="btn-form text-center">
            <button class="btn-submit" type="button"><a href="#/">Submit</a></button>
            </div>

          </div>

        </div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const fileInput = document.getElementById('formFile');
    
    fileInput.addEventListener('change', () => {
      const selectedFile = fileInput.files[0];

      if (selectedFile) {
        const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];

        if (!validImageTypes.includes(selectedFile.type)) {
          alert('Please select a valid image file (JPEG, PNG, GIF).');
          fileInput.value = '';
        }
      }
    });
  },
};

export default Form;