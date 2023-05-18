import Daemon from "../daemon";

test("instance of the class Daemon", () => {
  const daemon = new Daemon("Ivan");
  expect(daemon).toEqual({
    health: 100, 
    level: 1, 
    _attack: 10, 
    defence: 40, 
    type: "Daemon", 
    name: "Ivan",
  });
});