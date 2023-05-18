import Character from "../character";
import Daemon from "../daemon";

test("instance of the class Character", () => {
  const daemon = new Character("Ivan", "Daemon");
  expect(daemon).toEqual({
    health: 100, 
    level: 1, 
    type: "Daemon", 
    name: "Ivan",
  });
});



test("throws on name", () => {
  expect(() => new Character("A", "Daemon")).toThrow("Имя должно содержать от 2 до 10 символов!");
  expect(() => new Character("Qweasdzxcvb", "Daemon")).toThrow("Имя должно содержать от 2 до 10 символов!");
});

test("throws on type", () => {
  expect(() => new Character("Ivan", "Prist")).toThrow("Неверный тип!");
});
