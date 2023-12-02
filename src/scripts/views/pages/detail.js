const Detail = {
  async render() {
    return `
    <section class="detail">
      <div class="container">
        <div class="row">
          <div class="img-detail col col-sm-6 ms-auto text-center">
            <img src="./images/heros/gambar-dasar.jpg" class="card-img-top" alt="...">
          </div>

          <div class="desc-detail col col-sm-6 text-start">
            <h5 class="title-detail mb-4">Lost my motorcycle, any help is appreciated</h5>

            <div class="row">
            <p class="spec-detail-title col col-sm-3">License Plate:</p>
            <p class="spec-detail-desc col col-sm-7">D 1 EWE</p>
            </div>

            <div class="row">
            <p class="spec-detail-title col col-sm-3">Model:</p>
            <p class="spec-detail-desc col col-sm-7">Kawasaki</p>
            </div>

            <div class="row">
            <p class="spec-detail-title col col-sm-3">Date and Time:</p>
            <p class="spec-detail-desc col col-sm-7">May 5, 2023</p>
            </div>

            <h5 class="title-desc mt-3">Description</h5>
            <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt dolore magni reprehenderit cupiditate ipsum nam reiciendis ad. Laudantium, sed nostrum!. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt dolore magni reprehenderit cupiditate ipsum nam reiciendis ad. Laudantium, sed nostrum!
            </p>

            <div class="icon-detail">
            <a class="icon-comment" href="#/"><i class="fa-regular fa-comment"></i></a>
            <a class="icon-edit" href="#/edit"><i class="fa-regular fa-pen-to-square"></i></a>
            </div>

          </div>

          <div class="comment">
            <p class="user-comment"><i class="fa-solid fa-user"></i> Mas John Doe</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illo accusantium reprehenderit culpa Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illo accusantium reprehenderit culpa delectus iste enim tenetur exercitationem deleniti nisi.
            </p>
            <a class="icon-comment-time" href="#/"><i class="fa-regular fa-comment"></i> <span> 5 min ago</span>
            </a>

            <p class="user-comment"><i class="fa-solid fa-user"></i> Mbak Jane Doe</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illo accusantium reprehenderit culpa delectus iste enim tenetur exercitationem deleniti nisi.
            </p>
            <a class="icon-comment-time" href="#/"><i class="fa-regular fa-comment"></i>  <span> 5 min ago</span>
            </a>
          </div>

          <button class="btn-comment-more btn" type="button">Load More</button>

        </div>
      </div>
    </section>
    `;
  },

  // eslint-disable-next-line no-empty-function
  async afterRender() {

  },
};

export default Detail;