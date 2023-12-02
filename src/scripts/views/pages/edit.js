const Edit = {
  async render() {
    return `
    <section class="edit">
      <div class="container">
        <div class="row">
          <div class="heading-edit col col-sm-9 ms-auto text-center">
            <h2>Edit</h2>
            <p>Edit Post</p>
            
            <div class="fill-edit"> 
              <div class="mb-4">
                <label for="exampleFormControlInput1" class="form-label">License Plate</label>
                <input type="text" class="form-control" placeholder="license plate">
              </div>

              <div class="mb-4">
                <label for="exampleFormControlInput1" class="form-label">Model</label>
                <input type="text" class="form-control" placeholder="model">
              </div>

              <div class="mb-4">
                <label for="exampleFormControlInput1" class="form-label">Date and Time</label>
                <input type="date" class="form-control">
              </div>

              <div class="mb-5">
                <label for="formFile" class="form-label">Add Image</label>
                <input class="form-control" type="file" id="formFile" accept="image/">
              </div>
              <div id="imagePreview" class="mb-5"></div>

              <div class="mb-4">
                <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="description..."></textarea>
              </div>

            </div>

            <div class="btn-edit text-center">
            <button class="btn-save" type="button"><a href="#/">Save</a></button>
            </div>

          </div>

        </div>
      </div>
    </section>
    `;
  },

  // eslint-disable-next-line no-empty-function
  async afterRender() {

  },
};

export default Edit;