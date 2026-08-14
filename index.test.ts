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
  only14,
  fizzArray2,
  no14,
  isEverywhere,
  either24,
  matchUp,
  has77,
  has12,
  modThree,
  haveThree,
  twoTwo,
  sameEnds,
  tripleUp,
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
  expect(frontAgain("edited")).toBeTrue();
  expect(frontAgain("edit")).toBeFalse();
  expect(frontAgain("ed")).toBeTrue();
});

test(minCat.name, () => {
  expect(minCat("Hello", "Hi")).toBe("loHi");
  expect(minCat("Hello", "java")).toBe("ellojava");
  expect(minCat("java", "Hello")).toBe("javaello");
});

test(near10.name, () => {
  expect(near10(12)).toBeTrue();
  expect(near10(17)).toBeFalse();
  expect(near10(19)).toBeTrue();
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
    expect(data.completed).toBeFalse();
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
  expect(twoAsOne(1, 2, 3)).toBeTrue();
  expect(twoAsOne(3, 1, 2)).toBeTrue();
  expect(twoAsOne(3, 2, 2)).toBeFalse();
});

test(inOrder.name, () => {
  expect(inOrder(1, 2, 4, false)).toBeTrue();
  expect(inOrder(1, 2, 1, false)).toBeFalse();
  expect(inOrder(1, 1, 2, true)).toBeTrue();
});

test(inOrderEqual.name, () => {
  expect(inOrderEqual(2, 5, 11, false)).toBeTrue();
  expect(inOrderEqual(5, 7, 6, false)).toBeFalse();
  expect(inOrderEqual(5, 5, 7, true)).toBeTrue();
});

test(lastDigit.name, () => {
  expect(lastDigit(23, 19, 13)).toBeTrue();
  expect(lastDigit(23, 19, 12)).toBeFalse();
  expect(lastDigit(23, 19, 3)).toBeTrue();
});

test(lessBy10.name, () => {
  expect(lessBy10(1, 2, 11)).toBeTrue();
  expect(lessBy10(11, 2, 10)).toBeFalse();
  expect(lessBy10(0, 10, 2)).toBeTrue();
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
  expect(has22([1, 2, 2])).toBeTrue();
  expect(has22([1, 2, 1, 2, 5])).toBeFalse();
  expect(has22([1, 1, 2])).toBeFalse();
});

test(lucky13.name, () => {
  expect(lucky13([0, 2, 4])).toBeTrue();
  expect(lucky13([1, 2, 3])).toBeFalse();
  expect(lucky13([1, 2, 4])).toBeFalse();
});

test(sum28.name, () => {
  expect(sum28([2, 3, 2, 2, 4, 2])).toBeTrue();
  expect(sum28([2, 3, 2, 2, 4, 2, 2])).toBeFalse();
  expect(sum28([1, 2, 3, 4])).toBeFalse();
});

test(more14.name, () => {
  expect(more14([1, 4, 1])).toBeTrue();
  expect(more14([1, 4, 1, 4])).toBeFalse();
  expect(more14([1, 1])).toBeTrue();
});

test(fizzArray.name, () => {
  expect(fizzArray(4)).toEqual([0, 1, 2, 3]);
  expect(fizzArray(1)).toEqual([0]);
  expect(fizzArray(10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test(only14.name, () => {
  expect(only14([1, 4, 1, 4])).toBeTrue();
  expect(only14([1, 4, 2, 4])).toBeFalse();
  expect(only14([1, 1])).toBeTrue();
});

test(fizzArray2.name, () => {
  expect(fizzArray2(4)).toEqual(['0', '1', '2', '3']);
  expect(fizzArray2(1)).toEqual(['0']);
  expect(fizzArray2(10)).toEqual(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
});

test(no14.name, () => {
  expect(no14([1, 2, 3])).toBeTrue();
  expect(no14([1, 2, 3, 4])).toBeFalse();
  expect(no14([2, 3, 4])).toBeTrue();
});

test(isEverywhere.name, () => {
  expect(isEverywhere([1, 2, 1, 3], 1)).toBeTrue();
  expect(isEverywhere([1, 2, 1, 3], 2)).toBeFalse();
  expect(isEverywhere([1, 2, 1, 3, 4], 1)).toBeFalse();
});

test(either24.name, () => {
  expect(either24([1, 2, 2])).toBeTrue();
  expect(either24([4, 4, 1])).toBeTrue();
  expect(either24([4, 4, 1, 2, 2])).toBeFalse();
});

test(matchUp.name, () => {
  expect(matchUp([1, 2, 3], [2, 3, 10])).toBe(2);
  expect(matchUp([1, 2, 3], [2, 3, 5])).toBe(3);
  expect(matchUp([1, 2, 3], [2, 3, 3])).toBe(2);
});

test(has77.name, () => {
  expect(has77([1, 7, 7])).toBeTrue();
  expect(has77([1, 7, 1, 7])).toBeTrue();
  expect(has77([1, 7, 1, 1, 7])).toBeFalse();
});

test(has12.name, () => {
  expect(has12([1, 3, 2])).toBeTrue();
  expect(has12([1, 3, 5, 2])).toBeTrue();
  expect(has12([1, 7, 1, 2, 7])).toBeTrue();
  expect(has12([1])).toBeFalse();
});

test(modThree.name, () => {
  expect(modThree([2, 1, 3, 5])).toBeTrue();
  expect(modThree([2, 1, 2, 5])).toBeFalse();
  expect(modThree([2, 4, 2, 5])).toBeTrue();
});

test(haveThree.name, () => {
  expect(haveThree([3, 1, 3, 1, 3])).toBeTrue();
  expect(haveThree([3, 1, 3, 3])).toBeFalse();
  expect(haveThree([3, 4, 3, 3, 4])).toBeFalse();
});

test(twoTwo.name, () => {
  expect(twoTwo([4, 2, 2, 3])).toBeTrue();
  expect(twoTwo([2, 2, 4])).toBeTrue();
  expect(twoTwo([2, 2, 4, 2])).toBeFalse();
});

test(sameEnds.name, () => {
  expect(sameEnds([5, 6, 45, 99, 13, 5, 6], 1)).toBeFalse();
  expect(sameEnds([5, 6, 45, 99, 13, 5, 6], 2)).toBeTrue();
  expect(sameEnds([5, 6, 45, 99, 13, 5, 6], 3)).toBeFalse();
});

test(tripleUp.name, () => {
  expect(tripleUp([1, 4, 5, 6, 2])).toBeTrue();
  expect(tripleUp([1, 2, 3])).toBeTrue();
  expect(tripleUp([1, 2, 4])).toBeFalse();
});
