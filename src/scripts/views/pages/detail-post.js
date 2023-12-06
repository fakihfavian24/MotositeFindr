import UrlParser from '../../routes/url-parser';
import MotorSource from "../../data/motor-source";
import detailPostCreator from '../templates/detail-post-creator';


const DetailPost = {
  async render() {
    return `
      <jumbotron-section></jumbotron-section>
      <section class="detail">
      <div class="container" id="detailMotor"></div>
      </section>
      `;
    },

  async afterRender() {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const motor = await MotorSource.detailMotor(url.id);
      console.log(motor);
      const detailContainer = document.querySelector('#detailMotor');
      detailContainer.innerHTML = detailPostCreator(motor);
  },
};

export default DetailPost;