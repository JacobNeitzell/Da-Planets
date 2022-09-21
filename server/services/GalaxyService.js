import { dbContext } from "../db/DbContext.js";

class GalaxyService {
  async getGalaxy() {
    const galaxys = await dbContext.Galaxy.findById



  }
}