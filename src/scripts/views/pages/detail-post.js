import UrlParser from '../../routes/url-parser';
import MotorSource from "../../data/motor-source";
import detailPost from '../templates/detail-post-creator';


const DetailPost = {
  async render() {
    return `
      <jumbotron-section></jumbotron-section>
      <section class="detail" id="detailMotor"></section>
      `;
    },

  async afterRender() {
    try {
      const url = UrlParser.parseActiveUrlWithCombiner();
      const motor = await MotorSource.detailMotor(url.id);
      console.log(motor);
      const detailContainer = document.querySelector('#detailMotor');
      detailContainer.innerHTML = detailPost(motor);
    } catch (error) {
      console.error('Error rendering detail page:', error);
    }
  },
};

export default DetailPost;