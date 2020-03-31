const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });
  
  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ong')
    //.set('Authorization', 'idválidodeong') >>>>>> Para usar quando tiver Authorization no header  
      .send({
        name: "LMK-2",
        email: "leomayerk@gmail.com",
        whatsapp: "4797176053",
        city: "Joinville",
        uf: "SC"
      });
      
      expect(response.body).toHaveProperty('id');
      expect(response.body.id).toHaveLength(8);
  });
});