import Stoned from "../stoned";
import Daemon from "../daemon";
import Magician from "../magician";

test("Проверка дурмана", () => {
  const stoned = new Stoned("Ivan", "Daemon", 2);
  expect(stoned).toEqual({
    name: "Ivan", 
    level: 1, 
    health: 100,
    type: "Daemon",
    distance: 2
  });
});

test("Magician атакует 2-ую клетку без дурмана", () => {
  const magician = new Magician("Ivan");
  magician.stoned = false;
  magician.distance = 2;
  expect(magician.attack).toBe(9);
});

test("Magician атакует 2-ую клетку с дурманом", () => {
  const magician = new Magician("Ivan");
  magician.stoned = true;
  magician.distance = 2;
  expect(magician.attack).toBe(4);
});

test("Daemon атакует 6-ую клетку без дурмана", () => {
  const daemon = new Daemon("Alex");
  daemon.stoned = false;
  daemon.distance = 6;
  expect(daemon.attack).toBe(0);
});