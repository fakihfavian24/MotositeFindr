const Home = {
  async render() {
    return `
    <jumbotron-section></jumbotron-section>
    <statistic-section></statistic-section>
    <stolen-section></stolen-section>
    <community-section></community-section>
    `;
  },

  // eslint-disable-next-line no-empty-function
  async afterRender() {

  },
};

export default Home;