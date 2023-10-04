import { PacientInput } from "validator";
import { faker } from '@faker-js/faker';
import httpStatus from "http-status";
import { generateProtocolForPacient } from "protocols-generator";


jest.mock("uuid", () => ({ v4: () => 'geração de protocolo' }));

describe("calculator tests", () => {
  it("should work", async () => {
    expect(true).toBe(true);
  });

   //deve gerar um protocolo bem-sucedido para um paciente
   it("should generate a successfull protocol for a pacient", async () => {
    const pacientData: PacientInput = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      document: faker.finance.accountNumber(),
    }

    const result = generateProtocolForPacient('monique', 'souza', true )
    console.log(result.protocol)
    expect(result.protocol).toBe('geração de protocolo');
   
  });
});