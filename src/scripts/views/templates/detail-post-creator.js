const detailPostCreator = (motor) => `
        <div class="row">
          <div class="img-detail col col-sm-6 ms-auto text-center">
            <img src="./images/heros/gambar-dasar.jpg" class="card-img-top" alt="...">
          </div>

          <div class="desc-detail col col-sm-6 text-start">
            <h5 class="title-detail mb-4">${motor.title}</h5>

            <div class="row">
            <p class="spec-detail-title col col-sm-3">License Plate:</p>
            <p class="spec-detail-desc col col-sm-7">${motor.licensePlate}</p>
            </div>

            <div class="row">
            <p class="spec-detail-title col col-sm-3">Model:</p>
            <p class="spec-detail-desc col col-sm-7">${motor.model}</p>
            </div>

            <div class="row">
            <p class="spec-detail-title col col-sm-3">Date and Time:</p>
            <p class="spec-detail-desc col col-sm-7">${motor.dateTime}</p>
            </div>

            <h5 class="title-desc mt-3">Description</h5>
            <p class="description">${motor.description}</p>

            <div class="icon-detail">
            <a class="icon-comment" href="#/"><i class="fa-regular fa-comment"></i></a>
            <a class="icon-edit" href="#/edit"><i class="fa-regular fa-pen-to-square"></i></a>
            </div>

          </div>

          <div class="comment">
          ${motor.comments.map((review) => `
            <p class="user-comment"><i class="fa-solid fa-user"></i> ${review.author.name}</p>
            <p>${review.body}</p>
            <a class="icon-comment-time" href="#/"><i class="fa-regular fa-comment"></i> <span> ${review.dateTime}</span>
            </a>
          `).join('')}
          </div>

          <button class="btn-comment-more btn" type="button">Load More</button>

        </div>
`;

export default detailPostCreator;