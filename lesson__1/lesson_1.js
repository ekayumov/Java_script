// 1.
// var x = 6, y = 15, z = 4;
// y /= x + 5 % z;
//  1) ...%... 2) ...+... 3) .../=...
//  Результат: y=2.142857142857143
// 2.
// var x = 6, y = 15, z = 4;
// z = x++ + y * 5;
//   1)...++ 2) ...*... 3) ...+...4) =
//   Результат: z = 81 x = 7
// 3.
// var x = 6, y = 15, z = 4;
// x += y - x++ * z;
//   1) ...++ 2) ...*... 3) ...-... 4) =
//   Результат: x = -3
// 4.
// var x = 6, y = 15, z = 4;
// z = -- x - y * 5;
//   1) --... 2) ...*... 3) ...-... 4) =
// Результат: x = 5 z = -70
//  5.
// var a = 3;
// var b = ++a + 1 + a++;
// 1) ++... 2) ...++ 3) ...+... 4)...+... 5) =
// Результат: a = 5 b = 9
