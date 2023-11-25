const Home = {
  async render() {
    return `
    <jumbotron-section></jumbotron-section>
    <statistic-section></statistic-section>
    <stolen-section></stolen-section>
    <community-section></community-section>
    `;
  },

  async afterRender() {

  },
};

export default Home;