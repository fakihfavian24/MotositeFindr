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

  static async postMotor(data) {
    const rawResponse = await fetch(API_ENDPOINT.POST_MOTOR, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return rawResponse;
  }

  static async register(data) {
    const response = await fetch(API_ENDPOINT.REGISTER, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return response;
  }
}

export default MotorSource;