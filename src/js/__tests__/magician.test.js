import Magician from "../magician";

test("instance of the class Magician", () => {
  const magician = new Magician("Alex");
  expect(magician).toEqual({
    health: 100, 
    level: 1, 
    _attack: 10, 
    defence: 40, 
    type: "Magician", 
    name: "Alex",
  });
});