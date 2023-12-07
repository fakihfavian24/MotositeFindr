import CONFIG from "../../globals/config";
// eslint-disable-next-line import/no-unresolved, import/order
import Swal from 'sweetalert2';

const FormPost = {
  async render() {
    return `
    <section class="form">
      <div class="container">
        <div class="row">
          <div class="heading-form col col-sm-9 ms-auto text-center">
            <h2>Filling Out</h2>
            <p>Follow these steps to utilize Motor Finder and recover your lost motorcycle</p>
            
            <form id="formTambahData">

              <div class="fill-form">

                <div class="mb-4">
                  <label for="title" class="form-label">Title</label>
                  <input type="text" id="title" name="title" class="form-control" placeholder="Enter motorcycle license plate">
                </div>

                <div class="mb-4">
                  <label for="license" class="form-label">License Plate</label>
                  <input type="text" id="license" name="license" class="form-control" placeholder="Enter motorcycle license plate">
                </div>

                <div class="mb-4">
                  <label for="model" class="form-label">Model</label>
                  <input type="text" id="model" name="model" class="form-control" placeholder="Enter motorcycle model">
                </div>

                <div class="mb-4">
                  <label for="date" class="form-label">Date and Time</label>
                  <input type="date" id="date" name="date" class="form-control" placeholder="Enter date and time when the motorcycle was lostm">
                </div>

                <div class="mb-5">
                  <label for="gambar" class="form-label">Add Image</label>
                  <input class="form-control" type="file" id="gambar" name="gambar" accept="image/">
                </div>
                <div id="imagePreview" class="mb-5"></div>

                <div class="mb-4">
                  <label for="deskripsi" class="form-label">Description</label>
                  <textarea class="form-control" id="deskripsi" name="deskripsi" rows="3" placeholder="Enter motorcycle description..."></textarea>
                </div>

              </div>

              <div class="btn-form text-center">
              <button class="btn-submit" type="submit">Submit</button>
              </div>

              </form>

          </div>

        </div>
      </div>
    </section>
    `;
  },

  async afterRender() {

    document.getElementById('formTambahData').addEventListener('submit', async (event) => {
      event.preventDefault();

      const title = document.getElementById('title').value;
      const license = document.getElementById('license').value;
      const model = document.getElementById('model').value;
      const date = document.getElementById('date').value;
      const gambar = document.getElementById('gambar').files[0];
      const deskripsi = document.getElementById('deskripsi').value;

      const formData = new FormData();
      formData.append('title', title);
      formData.append('license', license);
      formData.append('model', model);
      formData.append('date', date);
      formData.append('gambar', gambar);
      formData.append('deskripsi', deskripsi);

      try {
        const response = await fetch(`${CONFIG.BASE_URL_API}motors/create/upload`, {
          method: 'POST',
          body: formData
        });

        if (!response.ok) {
          throw new Error('Gagal menambahkan data');
        }

        const data = await response.json();
        console.log('Data berhasil ditambahkan:', data);
      } catch (error) {
        console.error('Gagal menambahkan data:', error.message);
      }
    });

    const fileInput = document.getElementById('gambar');

    fileInput.addEventListener('change', () => {
      const selectedFile = fileInput.files[0];

      if (selectedFile) {
        const validImageTypes = ['image/jpeg', 'image/png', 'image/jpg'];

        if (!validImageTypes.includes(selectedFile.type)) {
          Swal.fire({
            icon: 'error',
            title: 'Invalid Image Type',
            confirmButtonColor: '#00EBC7',
            color: '#00214D',
            text: 'Please select a valid image file (JPEG, PNG, JPG).',
            footer: '<a href="#/contact">Why do I have this issue?</a>'
          });
          fileInput.value = '';
        }
      }
    });
  },
};

export default FormPost;