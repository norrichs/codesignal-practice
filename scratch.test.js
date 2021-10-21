const {
	fizz_buzz,
	cyclicString, 
	beautifulText
} = require('./scratch.js')
 
// describe("FizzBuzz", () => {
//     test('[3] should result in "fizz"', () => {
//       expect(fizz_buzz([3])).toBe('fizz');
//     });
 
//     test('[5] should result in "buzz"', () => {
//       expect(fizz_buzz([5])).toBe('buzz');
//     });
 
//     test('[15] should result in "fizzbuzz"', () => {
//       expect(fizz_buzz([15])).toBe('fizzbuzz');
//     });
 
//     test('[1,2,3] should result in "1, 2, fizz"', () => {
//       expect(fizz_buzz([3])).toBe('fizz');
//     });
 
// });


// describe("cyclicString", ()=> {
// 	test('"cabca" should result in 3', () => {
// 		expect(cyclicString("cabca")).toBe(3);
// 	})
// })

describe("beautifulText", ()=>{
	test("Look at this example of a correct text should result in true", ()=>{
		expect(beautifulText("Look at this example of a correct text",5,15)).toBe(true)
	})
})