export function fib(n: i32): i32 {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}