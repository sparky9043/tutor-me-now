import { describe, test } from 'node:test';
// import assert from 'node:assert';
import app from '../app.ts';
import supertest from 'supertest';

const api = supertest(app);

void describe('Generic test statement', () => {
  void test('True is equal to true', async () => {
    const response = await api
      .get('/ping')
      .expect(200);
    
    console.log(response.body);
  });
});
