import supertest from "supertest";
import { faker } from '@faker-js/faker';

import app from "../../src/app";

import httpStatus from "http-status";

const api = supertest(app);

jest.mock("uuid", () => ({ v4: () => 'geração de protocolo' }))

describe("Pacients API Test", () => {

 


  //não deve gerar um protocolo se faltarem dados
  it("should not generate a protocol if data is missing", async () => {
    const pacientData = { // documento está faltando
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName()
    };

    const { status } = await api.post("/pacients").send(pacientData);
    expect(status).toBe(httpStatus.UNPROCESSABLE_ENTITY);
  })

});