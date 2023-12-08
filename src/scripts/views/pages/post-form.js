import MotorSource from '../../data/motor-source';
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
                  <label for="licensePlate" class="form-label">License Plate</label>
                  <input type="text" id="licensePlate" name="licensePlate" class="form-control" placeholder="Enter motorcycle license plate">
                </div>

                <div class="mb-4">
                  <label for="model" class="form-label">Model</label>
                  <input type="text" id="model" name="model" class="form-control" placeholder="Enter motorcycle model">
                </div>

                <div class="mb-4">
                  <label for="dateTime" class="form-label">Date and Time</label>
                  <input type="date" id="dateTime" name="dateTIme" class="form-control" placeholder="Enter date and time when the motorcycle was lostm">
                </div>

                <div class="mb-5">
                  <label for="image" class="form-label">Add Image</label>
                  <input class="form-control" type="file" enctype="multipart/form-data" id="image" name="image" accept="image/">
                </div>
                <div id="imagePreview" class="mb-5"></div>

                <div class="mb-4">
                  <label for="description" class="form-label">Description</label>
                  <textarea class="form-control" id="description" name="description" rows="3" placeholder="Enter motorcycle description..."></textarea>
                </div>

              </div>

              <div class="btn-form text-center">
              <button class="btn-submit" type="submit" id="submitPost">Submit</button>
              </div>

              </form>

          </div>

        </div>
      </div>
    </section>
    `;
  },

  async afterRender() {

    const fileInput = document.getElementById('image');

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
          });
          fileInput.value = '';
        }
      }
    });
    

  const form = document.getElementById('formTambahData');
  
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const licensePlate = document.getElementById('licensePlate').value;
    const model = document.getElementById('model').value;
    const dateTime = document.getElementById('dateTime').value;
    const image = document.getElementById('image').files[0];
    const description = document.getElementById('description').value;

    // Validation: Check if required fields are not empty
    if (!title || !licensePlate || !model || !dateTime || !image || !description) {
      alert('Please fill in all required fields.');
      return;
    }

    // Prepare data for submission
    const dataInput = {
      title,
      licensePlate,
      model,
      dateTime,
      image: image.name, // Adjust this based on your needs
      description,
    };

    // Send data to the server (you may want to handle errors appropriately)
    await MotorSource.postMotor(dataInput);

    // Update the UI with the new review
    // eslint-disable-next-line no-use-before-define
    updateUI(dataInput);
  });

  // Function to update the UI with the new review
  const updateUI = (dataInput) => {
    const detailContainer = document.querySelector('#detailMotor');
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date().toLocaleDateString('id-ID', options);

    const newReview = `
      <div class="row">
        <div class="img-detail col col-sm-6 ms-auto text-center">
            <img src="${dataInput.image}" class="card-img-top" alt="...">
          </div>

          <div class="desc-detail col col-sm-6 text-start">
            <h5 class="title-detail mb-4">${dataInput.title}</h5>

            <div class="row">
            <p class="spec-detail-title col col-sm-3">License Plate:</p>
            <p class="spec-detail-desc col col-sm-7">${dataInput.licensePlate}</p>
            </div>

            <div class="row">
            <p class="spec-detail-title col col-sm-3">Model:</p>
            <p class="spec-detail-desc col col-sm-7">${dataInput.model}</p>
            </div>

            <div class="row">
            <p class="spec-detail-title col col-sm-3">Date and Time:</p>
            <p class="spec-detail-desc col col-sm-7">${date}</p>
            </div>

            <h5 class="title-desc mt-3">Description</h5>
            <p class="description">${dataInput.description}</p>

            <div class="icon-detail">

            <button type="button" class="btn btn-comment" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <i class="fa-regular fa-comment"></i>
            </button>

            
            <a class="icon-edit" href="#/edit"><i class="fa-regular fa-pen-to-square"></i></a>
            </div>

          </div>
      </div>
    `;

    detailContainer.innerHTML += newReview;

    // Optional: Clear the form after submission
    form.reset();
  };
  },
};

export default FormPost;