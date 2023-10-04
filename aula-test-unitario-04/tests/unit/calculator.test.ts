import calculator from "../../src/calculator";


describe("calculator tests", () => {
  
  // soma
  it("should sum two numbers", async () => {
    const soma = calculator.sum(10, 5)
    expect(soma).toBe(15);
  });

  // subitração
  it("should sub two numbers", async () => {
    const subitração = calculator.sub(10, 5)
    expect(subitração).toBe(5);
  });

  // multiplicação
  it("should mul two numbers", async () => {
    const multiplicação = calculator.mul(10, 5)
    expect(multiplicação).toBe(50);
  });

  // divisão
  it("should div two numbers", async () => {
    const divisão = calculator.div(10, 5)
    expect(divisão).toBe(2);
  });

  // divisão por zero
  it("should div zero two numbers", async () => {
    const divisãoZero = calculator.div(10, 0)
    expect(divisãoZero).toBe(0);
  });

  it("should work", async () => {
    expect(true).toBe(true);
  });

})