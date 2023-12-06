import API_ENDPOINT from "../globals/api-endpoint";

class MotorSource {
    static async listMotor() {
      try {
        const response = await fetch(API_ENDPOINT.LIST);
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
        }
        const responseJson = await response.json();
        return responseJson.motors;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    }
  
    static async detailMotor(id) {
      try {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
        }
        const responseJson = await response.json();
        return responseJson.motor;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    }
  }
  
  export default MotorSource;