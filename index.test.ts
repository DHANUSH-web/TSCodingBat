import { expect, test } from "bun:test";

import {
  fetchJsonPlaceholderTodo,
  fizzString,
  fizzString2,
  frontAgain,
  greenTicket,
  inOrder,
  inOrderEqual,
  lastDigit,
  lastTwo,
  lessBy10,
  maxMod5,
  minCat,
  near10,
  redTicket,
  seeColors,
  teaParty,
  twoAsOne,
  withoutDoubles,
  type JsonResponseProps,
  centeredAverage,
  sum67,
  has22,
  lucky13,
  sum28,
  more14,
  fizzArray,
} from "./index";

test(lastTwo.name, () => {
  expect(lastTwo("coding")).toBe("codign");
  expect(lastTwo("cat")).toBe("cta");
  expect(lastTwo("ab")).toBe("ba");
});

test(seeColors.name, () => {
  expect(seeColors("redxx")).toBe("red");
  expect(seeColors("xxred")).toBe("");
  expect(seeColors("blueTimes")).toBe("blue");
});

test(frontAgain.name, () => {
  expect(frontAgain("edited")).toBe(true);
  expect(frontAgain("edit")).toBe(false);
  expect(frontAgain("ed")).toBe(true);
});

test(minCat.name, () => {
  expect(minCat("Hello", "Hi")).toBe("loHi");
  expect(minCat("Hello", "java")).toBe("ellojava");
  expect(minCat("java", "Hello")).toBe("javaello");
});

test(near10.name, () => {
  expect(near10(12)).toBe(true);
  expect(near10(17)).toBe(false);
  expect(near10(19)).toBe(true);
});

test(teaParty.name, () => {
  expect(teaParty(6, 8)).toBe(1);
  expect(teaParty(3, 8)).toBe(0);
  expect(teaParty(20, 6)).toBe(2);
});

test(fizzString.name, () => {
  expect(fizzString("fig")).toBe("Fizz");
  expect(fizzString("dib")).toBe("Buzz");
  expect(fizzString("fib")).toBe("FizzBuzz");
  expect(fizzString("hello")).toBe("hello");
});

test(fetchJsonPlaceholderTodo.name, async () => {
  const originalFetch = globalThis.fetch;

  globalThis.fetch = ((async () =>
    new Response(
      JSON.stringify({
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
      } satisfies JsonResponseProps),
    )) as unknown) as typeof fetch;

  try {
    const data: JsonResponseProps = await fetchJsonPlaceholderTodo(1);

    expect(data.userId).toBe(1);
    expect(data.id).toBe(1);
    expect(data.title).toBe("delectus aut autem");
    expect(data.completed).toBe(false);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test(fizzString2.name, () => {
  expect(fizzString2(1)).toBe("1!");
  expect(fizzString2(2)).toBe("2!");
  expect(fizzString2(3)).toBe("Fizz!");
});

test(twoAsOne.name, () => {
  expect(twoAsOne(1, 2, 3)).toBe(true);
  expect(twoAsOne(3, 1, 2)).toBe(true);
  expect(twoAsOne(3, 2, 2)).toBe(false);
});

test(inOrder.name, () => {
  expect(inOrder(1, 2, 4, false)).toBe(true);
  expect(inOrder(1, 2, 1, false)).toBe(false);
  expect(inOrder(1, 1, 2, true)).toBe(true);
});

test(inOrderEqual.name, () => {
  expect(inOrderEqual(2, 5, 11, false)).toBe(true);
  expect(inOrderEqual(5, 7, 6, false)).toBe(false);
  expect(inOrderEqual(5, 5, 7, true)).toBe(true);
});

test(lastDigit.name, () => {
  expect(lastDigit(23, 19, 13)).toBe(true);
  expect(lastDigit(23, 19, 12)).toBe(false);
  expect(lastDigit(23, 19, 3)).toBe(true);
});

test(lessBy10.name, () => {
  expect(lessBy10(1, 2, 11)).toBe(true);
  expect(lessBy10(11, 2, 10)).toBe(false);
  expect(lessBy10(0, 10, 2)).toBe(true);
});

test(withoutDoubles.name, () => {
  expect(withoutDoubles(2, 3, true)).toBe(5);
  expect(withoutDoubles(3, 3, true)).toBe(7);
  expect(withoutDoubles(3, 3, false)).toBe(6);
});

test(maxMod5.name, () => {
  expect(maxMod5(2, 3)).toBe(3);
  expect(maxMod5(6, 2)).toBe(6);
  expect(maxMod5(3, 2)).toBe(3);
});

test(redTicket.name, () => {
  expect(redTicket(2, 2, 2)).toBe(10);
  expect(redTicket(2, 2, 1)).toBe(0);
  expect(redTicket(0, 0, 0)).toBe(5);
});

test(greenTicket.name, () => {
  expect(greenTicket(1, 2, 3)).toBe(0);
  expect(greenTicket(2, 2, 2)).toBe(20);
  expect(greenTicket(1, 1, 2)).toBe(10);
});

test(centeredAverage.name, () => {
  expect(centeredAverage([1, 2, 3, 4, 100])).toBe(3);
  expect(centeredAverage([1, 1, 5, 5, 10, 8, 7])).toBe(5);
  expect(centeredAverage([-10, -4, -2, -4, -2, 0])).toBe(-3);
});

test(sum67.name, () => {
  expect(sum67([1, 2, 2])).toBe(5);
  expect(sum67([1, 2, 2, 6, 99, 99, 7])).toBe(5);
  expect(sum67([1, 1, 6, 7, 2])).toBe(4);
  expect(sum67([6, 7, 2])).toBe(2);
  expect(sum67([1, 6, 7, 6, 7])).toBe(1);
  expect(sum67([1, 6, 7, 2, 6, 99, 7])).toBe(3);
  expect(sum67([1, 6, 99, 7, 7])).toBe(8);
  expect(sum67([6, 7, 7])).toBe(7);
})

test(has22.name, () => {
  expect(has22([1, 2, 2])).toBe(true);
  expect(has22([1, 2, 1, 2, 5])).toBe(false);
  expect(has22([1, 1, 2])).toBe(false);
});

test(lucky13.name, () => {
  expect(lucky13([0, 2, 4])).toBe(true);
  expect(lucky13([1, 2, 3])).toBe(false);
  expect(lucky13([1, 2, 4])).toBe(false);
});

test(sum28.name, () => {
  expect(sum28([2, 3, 2, 2, 4, 2])).toBe(true);
  expect(sum28([2, 3, 2, 2, 4, 2, 2])).toBe(false);
  expect(sum28([1, 2, 3, 4])).toBe(false);
});

test(more14.name, () => {
  expect(more14([1, 4, 1])).toBe(true);
  expect(more14([1, 4, 1, 4])).toBe(false);
  expect(more14([1, 1])).toBe(true);
});

test(fizzArray.name, () => {
  expect(fizzArray(4)).toEqual([0, 1, 2, 3]);
  expect(fizzArray(1)).toEqual([0]);
  expect(fizzArray(10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});