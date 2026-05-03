export function lastTwo(str: string): string {
  const size = str.length;

  if (size < 2) return str;
  return size > 2
    ? str.substring(0, size - 2) + str[size - 1] + str[size - 2]
    : str[1]! + str[0]!;
}

export function seeColors(str: string): string {
  return str.startsWith("red") ? "red" : str.startsWith("blue") ? "blue" : "";
}

export function frontAgain(str: string): boolean {
  const size = str.length;
  return size >= 2 && str[0] === str[size - 2] && str[1] === str[size - 1];
}

export function minCat(a: string, b: string): string {
  const aSize = a.length;
  const bSize = b.length;

  return aSize > bSize
    ? a.substring(aSize - bSize) + b
    : aSize === bSize
      ? a + b
      : a + b.substring(bSize - aSize);
}

export function near10(num: number): boolean {
  return num % 10 <= 2 || num % 10 >= 8;
}

export function teaParty(tea: number, candy: number): number {
  return tea < 5 || candy < 5 ? 0 : candy >= tea * 2 || tea >= candy * 2 ? 2 : 1;
}

export function fizzString(str: string): string {
  if (str.startsWith("f") && str.endsWith("b")) return "FizzBuzz";
  if (str.startsWith("f")) return "Fizz";
  if (str.endsWith("b")) return "Buzz";
  return str;
}

export interface JsonResponseProps {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export async function fetchJsonPlaceholderTodo(id: number): Promise<JsonResponseProps> {
  const response: Response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return response.json() as Promise<JsonResponseProps>;
}

export function fizzString2(n: number): string {
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz!";
  if (n % 5 === 0) return "Buzz!";
  return `${n}!`;
}

export function twoAsOne(a: number, b: number, c: number): boolean {
  return a + b === c || a + c === b || b + c === a;
}

export function inOrder(a: number, b: number, c: number, bOk: boolean): boolean {
  return (bOk || b > a) && c > b;
}

export function inOrderEqual(a: number, b: number, c: number, equalOk: boolean): boolean {
  return (equalOk && a <= b && b <= c) || (a < b && b < c);
}

export function lastDigit(a: number, b: number, c: number): boolean {
  return a % 10 === b % 10 || a % 10 === c % 10 || b % 10 === c % 10;
}

export function lessBy10(a: number, b: number, c: number): boolean {
  return Math.abs(a - b) >= 10 || Math.abs(a - c) >= 10 || Math.abs(b - c) >= 10;
}

export function withoutDoubles(die1: number, die2: number, noDoubles: boolean): number {
  return noDoubles && die1 === die2 ? (die1 === 6 ? 1 : die1 + 1) + die2 : die1 + die2;
}

export function maxMod5(a: number, b: number): number {
  return a === b ? 0 : a % 5 === b % 5 ? Math.min(a, b) : Math.max(a, b);
}

export function redTicket(a: number, b: number, c: number): number {
  return a === 2 && b === 2 && c === 2 ? 10 : a === b && b === c ? 5 : a !== b && b !== c ? 1 : 0;
}

export function greenTicket(a: number, b: number, c: number): number {
  return a === b && b === c ? 20 : a === b || a === c || b === c ? 10 : 0;
}

export function centeredAverage(nums: number[]): number {
  let sum = 0, min = nums[0]!, max = nums[0]!;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]!;

    if (nums[i]! < min) min = nums[i]!;
    if (nums[i]! > max) max = nums[i]!;
  }

  return Math.floor((sum - min - max) / (nums.length - 2));
}

export function sum67(nums: number[]): number {
  let sum = 0;
  let skip = false;

  for (let n of nums) {
    if (n === 6) skip = true;
    else if (n === 7 && skip) skip = false;
    else if (!skip) sum += n;
  }

  return sum;
}

export function has22(nums: number[]): boolean {
  for (let i = 0; i < nums.length-1; i++)
    if (nums[i] === 2 && nums[i+1] === 2)
      return true;
  
  return false;
}

export function lucky13(nums: number[]): boolean {
  // nums.forEach(n => {
  //   if (n == 1 || n == 3)
  //     return false;
  // });

  for (let n of nums)
    if (n === 1 || n === 3)
      return false;

  return true;
}

export function sum28(nums: number[]): boolean {
  let sum = 0;

  for (let n of nums)
    if (n === 2) sum += n;

  return sum === 8;
}

export function more14(nums: number[]): boolean {
  let count = 0;

  for (let n of nums) {
    if (n == 1) count++;
    if (n == 4) count--;
  }

  return count > 0;
}

export function fizzArray(n: number): number[] {
  let arr: number[] = [];

  for (let i = 0; i < n; i++)
    arr.push(i);

  return arr;
}

export function only14(nums: number[]): boolean {
  for (let n of nums)
    if (n !== 1 && n !== 4)
      return false;

  return true;
}

export function fizzArray2(n: number): string[] {
  let arr: string[] = [];

  for (let i = 0; i < n; i++)
    arr.push(i.toString());

  return arr;
}

console.log("Run `bun test` to test your logic.");