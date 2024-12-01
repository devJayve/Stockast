import { getAccessTokenFromKis } from "../Api/kis/ouath";

class KisTokenService {
  private accessToken: string | null;
  private tokenExpiredAt: Date | null;
  private lastFetchTime: Date | null;

  constructor() {
    this.accessToken = null;
    this.tokenExpiredAt = null;
    this.lastFetchTime = null;
  }

  private async fetchAccessToken(): Promise<void> {
    try {
      const tokenData = await getAccessTokenFromKis();

      console.log(`fetchAccessToken tokenData: ${JSON.stringify(tokenData)}`);

      this.accessToken = tokenData.access_token;
      this.tokenExpiredAt = new Date(tokenData.expires_in * 1000 + Date.now());
      this.lastFetchTime = new Date();
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch access token");
    }
  }

  public async getAccessToken(): Promise<string> {
    if (!this.accessToken || !this.tokenExpiredAt || !this.lastFetchTime) {
      await this.fetchAccessToken();
    }

    if (!this.accessToken) {
      throw new Error("Access token is not available");
    }

    return this.accessToken;
  }
}

export default new KisTokenService();
