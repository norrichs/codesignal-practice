// function adjacentElementsProduct(inputArray) {
//     let max = 0;
//     for(let i=0; i<inputArray.length-1; i++){
// 		(inputArray[i],inputArray[i+1])
// 		if(inputArray[i]*inputArray[i+1] > max){
//             ("ismax",inputArray[i]*inputArray[i+1])
//             max = inputArray[i]*inputArray[i+1]
//         }
//     }
//     return max
// }

// adjacentElementsProduct([2,3,4,7,-5,-3,6,8])

// function shapeArea(n){
// 	let acc = 1;
// 	for(let i=2; i<=n; i++){
// 		acc += (i-1)*4
// 	}
// 	return acc
// }

// [1,2,3,4,5].forEach((i) => {
// 	(shapeArea(i))
// })

// function makeArrayConsecutive2(statues) {
// 	let max = statues[0];
// 	let min = statues[0];
// 	for(statue of statues){
// 		if(statue < min) min = statue
// 		if(statue > max) max = statue
// 	}
// 	(max, min, statues.length)
// 	return max - min - statues.length + 1
// }

// (makeArrayConsecutive2([0,3]))

//  Too long execution
////////////////////////////////////////////////////////
// function almostIncreasingSequence(sequence) {
// 	const isIncreasing = (arr) => {
// 		for(let j=0; j<arr.length-1; j++){
// 			if(arr[j]>=arr[j+1]) return false
// 		}
// 		return true
// 	}

// 	if(isIncreasing(sequence)){
// 		return true
// 	}else{

// 		for(let i=0; i<sequence.length; i++){
// 			let copy = [...sequence]
// 			copy.splice(i,1)
// 			if(isIncreasing(copy)){
// 				return true
// 			}
// 		}
// 		return false
// 	}
// }
///////////////////////////////////////////////

// Pseudocode for shorter execution
// 	START
//	LET fail = 0
//	FOR index starts at 1, ends less than sequence length, increment by 1
//		IF seqence[index] < sequence[index-1]
//			fail +=1
//		ENDIF
//			return false
//		ENDIF
//	ENDFOR
//	RETURN TRUE
//	END
// (doesn't work)

// function almostIncreasingSequence(sequence) {
// 	(sequence)
// 	if(sequence.length < 3) return true
// 	if(sequence.length === 3){
// 		if(sequence[0] < sequence[1] || sequence[0] < sequence[2] || sequence[1] < sequence[2]) {
// 			('3, true')
// 			return true
// 		}else return false
// 	}else{
// 		for(let i=1; i<sequence.length-1; i++){
// 			if(sequence[i-1] >= sequence[i] && sequence[i-2] >= sequence[i] && sequence[i-1] >= sequence[i+1]) {
// 				return false
// 			}
// 		}
// 		return true
// 	}
// }

// Different algo
// 	IF length <= 3
//		RETURN true
// 	FOR index = 1; index<length-1; index++
//		IF ([i-1] >= [i])  AND ([i-2] >= [i]) AND (i-1 >= i+1)
//			RETURN false
//		ENDIF
//	ENDFOR
//  RETURN true
//

// failure conditions
// 1. 2 or more (i-1 >= i) && (i-2 >= i) not next to each other
//	EDGE CASES - length <= 3
//  SET removed = 0
// 	FOR i=2 to i<length-1
//		IF a pair fails
//			IF removing the first doesn't give success
//				SET removed +=1
//			ELSEIF removing the second doesn't give success
//				SET removed +=1
//		ENDIF
//		IF removed > 1
//			return false
//	ENDFOR
//	RETURN true

// function almostIncreasingSequence(s){
// 	('start:',s)
// 	if(s.length < 3) return true
// 	if(s.length === 3){
// 		if(s[0] < s[1] || s[0] < s[2] || s[1] < s[2]) return true
// 		else return false
// 	}else{
// 		let removed = 0
// 		let i = 1
// 		while( i<s.length ){
// 			// ('i='+i,s)
// 			if (s[i-1]>=s[i]){
// 				removed+=1
// 				// ("removed="+removed)
// 				if(removed>1) return false
// 				else{
// 					if( i === s.length-1 || s[i-1] < s[i+1]){		// IF remove [i] resolves, remove
// 						s.splice(i,1)
// 					}else if( i===1 || s[i-2] < s[i]){	// ELSEIF remove [i-1] resolves, remove
// 						s.splice(i-1,1)
// 					}else{						// ELSE return false
// 						return false
// 					}
// 					// ("new s=",s)
// 				}
// 			}else i+=1
// 		}
// 		return true
// 	}
// }
// //  On detection, test if removal of either in pair will resolve by testing flankers

// const tests = [
// 	[3,2,1],  		//false
// 	[1,2,3,4,5],	//true
// 	[1,2,6,3,4],	//true
// 	[6,4,3,2,1],	//false
// 	[1,2,1,2],		//false
// 	[1,3,2],		//true
// 	[1,2,3,4,3,6],	//true
// 	[1,2,3,4,3,3],	//false
// 	[1,3,2,1],		//false
// 	[1,1,2,3,4,4],	//false
// 	[5,1,2,3,5,4], 	//false
// 	[3,5,67,98,3]	//false
// ]
// tests.forEach((test) => {
// 	(almostIncreasingSequence(test))
// })

// 	SET hauntedArray = array of length matrix width, filled w/ zeros
//	SET total = 0
// 	FOR i from 0 to matrix height-1
//		FOR j from 0 to matrix width-1
//			IF !hauntedArray[j]
//				IF	matrix[i][j] === 0
//					SET hauntedArray[j] = 1
//				ELSE
//					SET total = total + matrix[i][j]
//				ENDIF
//			ENDIF
//		ENDFOR
//	ENDFOR
//	RETURN total
// function matrixElementsSum(matrix) {
// 	const hauntedArray = new Array(matrix[0].length).fill(0)
// 	let total = 0
// 	for (let i = 0; i<matrix.length; i++){
// 		for (let j = 0; j<matrix[0].length; j++){
// 			if(!hauntedArray[j]){
// 				if(matrix[i][j] === 0){
// 					hauntedArray[j] = 1
// 				}else{
// 					total = total + matrix[i][j]
// 				}
// 			}
// 		}
// 	}
// 	return total
// }

// const test = [
//    [[1, 1, 1, 0, 5], // 9
// 	[0, 5, 0, 1, 0],
// 	[2, 1, 3, 10,5]],

//    [[0, 1, 1, 2,],  //9
// 	[0, 5, 0, 0],
// 	[2, 0, 3, 3],
// 	[2, 3, 2, 4]]
// ]

// test.forEach((arr) => {
// 	(matrixElementsSum(arr))
// })

// function commonCharacterCount(s1, s2) {
// 	const arr1 = s1.split('')
// 	const arr2 = s2.split('')
// 	let count = 0
//     for(let i=0; i<arr1.length; i++){
//         for(let j=0; j<arr2.length; j++){
//             if( arr1[i] === arr2[j] ){
// 				(i,arr1[i],j,arr2[j],arr2)
//                 count += 1
// 				arr2.splice(j,1)
// 				j = arr2.length
//             }
//         }
//     }
// 	return count
// }

// (commonCharacterCount('aabcc', 'adcaa'))

// let test = 'abcde'
// (
// test[2].toUpperCase(),
// test
// )

// function isLucky(n) {
//     const str  = n.toString()
// 	(str, str.substr(0, str.length/2).split('').reduce((tot,num) =>{return tot + parseInt(num)},0))
//     return str.substr(0, str.length/2).split('').reduce((tot,num) =>{return tot + parseInt(num)},0) === str.substr(str.length/2, str.length).split('').reduce((tot,num) =>{return tot + parseInt(num)},0)
// }
// (isLucky(1230))

// function sortByHeight(a){
// 	let people = []
// 	for(el of a){
// 		if(el != -1) people.push(el)
// 	}
// 	people.sort((a,b) => {return a>b})
// 	let j = 0
// 	for(let i=0; i<a.length; i++){
// 		if(a[i] != -1) {
// 			a[i] = people[j]
// 			j++
// 		}
// 	}
// 	return a
// }

// let test = [4, 2, 9, 11, 2, 16]
// (sortByHeight(test))

//	reverseInParentheses
//	SET start = 0, end = 0, result = "", revStr =''

//	WHILE
//		SEARCH for open paren -> index
//		IF index === -1										// end of string condition
//			CONCATENATE result, substr(end)
//			RETURN result
//		ELSEIF index > start								// get non reversible substring
//			CONCATENATE result, substring(start, index)
//		ELSE
//		SET end    = indexOf(")", start)					// get end of reversible string
//		CONCATENATE result, REVERSED substring(start, end)  //

// function reverseInParentheses(inputString) {
// 	let start  = 0
// 	let end    = 0
// 	let result = ''
//     while(start < inputString.length){
// 		start = inputString.indexOf( "(" )
// 		end   = inputString.indexOf( ")" )
// 		result = result + inputString.substring(start,end)
// 		return result
// 	}
// }

// FUNCTION reverseInParentheses(inputString)
//		FOR index from start of string to end
//			IF open paren
//				CALL reverseInParentheses(inputString.slice(index+1))
//			ELSEIF close paren
//				inputString.slice(0,index-1).slice('').reverse().join('')

// function reverseInParentheses(inputString) {
// 	("RIP inputstring", inputString);
// 	let newString = inputString
// 	for (let i = 0; i < newString.length; i++) {
// 		('for loop ',i,newString[i])
// 		if (newString[i] === "(") {
// 			let revString = reverseInParentheses(newString.slice(i+1))
// 			('input',newString,'rev',revString, 'i', i)
// 			newString = newString.split('')
// 			('newString array 1',newString)
// 			newString.splice(i+1,revString.length,...revString.split(''))

// 			('newString array 2', newString)
// 			newString = newString.join('')
// 			('newString', newString)
// 			i+=revString.length+1
// 			(i)
// 		} else if (newString[i] === ")") {
// 			let result = newString.slice(0, i).split("").reverse().join("");
// 			('reversed, result', result)
// 			return result;
// 		}
// 	}
// 	return newString;
// }

// function reverseInParentheses(inputString) {
// 	let str = inputString
// 	for (let i = 0; i < str.length; i++) {
// 		if (str[i] === "(") {
// 			let revString = reverseInParentheses(str.slice(i+1))
// 			str = str.split('')
// 			str.splice(i+1,revString.length,...revString.split(''))
// 			str = str.join('')
// 			i+=revString.length+1
// 		} else if (str[i] === ")") {
// 			let result = str.slice(0, i).split("").reverse().join("");
// 			return result;
// 		}
// 	}
// 	return str;
// }

// function reverseInParentheses(inputString) {
// 	let stringArray = inputString.split("");
// 	const rev = (arr) => {

// 		for (let i = 0; i < arr.length; i++) {
// 			if (arr[i] === "(") {
// 				// At beginning of reversible section.  Get section from here to end, including parens
// 				let revArr = rev(arr.slice(i + 1)).split("");
// 				// ('arr:',arr,'revArr',revArr)
// 				arr.splice(i + 1, revArr.length, ...revArr);
// 				i += revArr.length + 1;
// 			} else if (arr[i] === ")") {
// 				let result = arr.slice(0, i).reverse().join("");
// 				return result;
// 			}
// 		}
// 		return arr;
// 	};

// 	let revArr = rev(stringArray);

// 	for (let i = 0; i < revArr.length; i++) {
// 		if (revArr[i] === "(" || revArr[i] === ")") {
// 			revArr.splice(i, 1);
// 			i-=1
// 		}
// 	}
// 	return revArr.join("");
// }

// let test = "foo(bar)baz(blah)blip(bl(klop)f)";

// test = "1(((23)45)67)890";
// ("test", reverseInParentheses(test));

// function addBorder(picture) {
// 	const res = picture.map((line)=>`*${line}*`)
// 	res.push('*'.repeat(res[0].length))
// 	res.unshift('*'.repeat(res[0].length))
// 	return res

// }

// (addBorder([
// 	"abcd",
// 	"efgh",
// 	"ijkl"
// ]))

// var twoSum = function(nums, target) {
//     for(let i=0;i<nums.length;i++){
// 		(nums.slice(i+1))
//         if(nums.slice(i+1).indexOf(target-nums[i]) !== -1){
//             return [i, i+1 + nums.slice(i+1).indexOf(target-nums[i])]
//         }
//     }
// };

// (twoSum([3,2,4,4,3,5,7,9],6))

//* https://app.codesignal.com/arcade/intro/level-4/xYXfzQmnhBvEKJwXP
//
//  INIT - diff = []
//  FOR all elements
//      IF a[i] !== b[i]
//          PUSH i onto diff
//          IF diff.length > 2
//              RETURN false
//  IF diff.length = 1
//      RETURN false
//  ELSE IF a[diff[0]] === b[diff[1]] && a[diff[1]] === b[diff[0]]
//      RETURN true

// const areSimilar = (a,b) => {
//     const diff = []
//     for(let i=0; i<a.length; i++){
//         if(a[i] !== b[i]){
//             diff.push(i)
//             if(diff.length>2) return false
//         }
//     }
//     if(diff.length===1) return false
//     else if(a[diff[0]] === b[diff[1]] && a[diff[1]] === b[diff[0]]) return true
//     else return false
// }

// (areSimilar([1,2,3],[1,3,2]))

// function arrayChange(inputArray) {
//     let tot = 0;
//     let d = null;
//     for(let i=1;i<inputArray.length;i++){
//         d = inputArray[i] - inputArray[i-1]
//         if(d <= 0){
//             inputArray[i] -= d-1
//             tot -= d-1
//         }
//     }
//     return tot
// }

// (arrayChange([-5,1,0,-3,1]))

// function palindromeRearranging(inputString) {
//     const arr = inputString.split('').sort()
//     (arr)
//     for(let i=0;i<arr.length-1;i+=2){
//         if(arr[i] !== arr[i+1]) return false
//     }
//     return true
// }

// SPLIT into array
// SET count = 0
// reduce (acc,b)

// TRUE IF  -> max 1 letter with odd count
// else FALSE

// function palindromeRearranging(inputString){
//     const arr = inputString.split('').sort()

//     (arr)
//     let letterCount = 1;
//     let oddCount = 0;
//     for(let i=1; i<arr.length; i++){
//         if(arr[i] === arr[i-1]){
//             letterCount +=1
//         }else{
//             if(letterCount%2 === 1){
//                 oddCount +=1
//                 if(oddCount > 1) return false
//             }
//             letterCount = 1
//         }
//         (arr[i-1], arr[i], letterCount, oddCount)
//     }
//     if(letterCount%2 === 1) {
//         oddCount+=1
//         if(oddCount > 1)return false
//     }
//     return true
// }

// (palindromeRearranging('afabbccd'))

// function isIPv4Address(inputString) {
//     const arr = inputString.split('.')
//     (arr)
//     if(arr.length === 4) {
//         for(n of arr){
//             (n.split('').forEach((d)=>{
//                 ('digit',d);
//                 return parseInt(d)}))
//         }
//         return true
//     }else return false
// }
// (isIPv4Address('1.1.1.1a'))

///////////////////////////////////////////////////
//
//
//
///////////////////////////////////////////////////

// unoptimized, works
// function avoidObstacles(inputArray){
//     inputArray.sort((a,b)=>a-b)
//     (inputArray)
//     const max = inputArray[inputArray.length-1]+1
//     for(let i=2; i<=max; i++){
//         ('i=',i)
//         let complies = ()=>{
//             for(let j=i; j<=max; j+=i ){
//                 ('j',j)
//                 if(inputArray.includes(j)) return false
//             }
//             return true
//         }
//         ('complies', i, complies())
//         if(complies()) return i

//     }

//     return 'none'
// }

// function avoidObstacles(inputArray){
//     inputArray.sort((a,b)=>a-b)
//     const max = inputArray[inputArray.length-1]+1
//     for(let i=2; i<=max; i++){
//         let complies = ()=>{
//             for(let j=i; j<=max; j+=i ){
//                 if(inputArray.includes(j)) return false
//             }
//             return true
//         }
//         if(complies()) return i
//     }
//     return 'none'
// }

// const tests = [
//     [5,3,6,7,9],
//     [8,4,7,10,11,15],
//     [1,4,10,6,2],
//     [2,3]
// ]
// tests.forEach(test=>{
//     ('result',avoidObstacles(test))
// })

// function boxBlur(image) {
//     const w = image[0].length
//     const h = image.length
//     let res = []
//     for(let i=1;i<h-1;i++){
//         res.push([])
//         for(let j=1; j<w-1;j++){
//             res[i-1].push( Math.floor((image[i-1][j-1] + image[i-1][j] + image[i-1][j+1] +
//                          image[i][j-1]   + image[i][j]   + image[i][j+1]   +
//                          image[i+1][j-1] + image[i+1][j] + image[i+1][j+1]) / 9 ))

//         }
//     }
//     return res
// }

// const tests = [
//     [
//         [7, 4, 0, 1],
//         [5, 6, 2, 2],
//         [6, 10, 7, 8],
//         [1, 4, 2, 0]
//     ],
//     [
//         [1, 1, 1],
//         [1, 7, 1],
//         [1, 1, 1]
//     ]
// ]

// tests.forEach((test)=>{
//     ('test',boxBlur(test))
// })

// // boxBlur(image) = [[5, 4],
// //                   [4, 4]]

// //          image = [[1, 1, 1],
// //          [1, 7, 1],
// //          [1, 1, 1]]

// //          boxBlur(image) = [[1]]

// function minesweeper(matrix) {
// 	let total = []
// 	for(let i = 0; i < matrix.length; i++){
// 		total.push([])
// 		for(let j = 0; j< matrix[0].length; j++){
// 			total[i].push((matrix[i-1] ? (matrix[i-1][j-1] ? 1 : 0) : 0)+
// 				(matrix[i-1] ? (matrix[i-1][j  ] ? 1 : 0) : 0)+
// 				(matrix[i-1] ? (matrix[i-1][j+1] ? 1 : 0) : 0)+
// 				(matrix[i  ] ? (matrix[i  ][j-1] ? 1 : 0) : 0)+
// 				(matrix[i  ] ? (matrix[i  ][j+1] ? 1 : 0) : 0)+
// 				(matrix[i+1] ? (matrix[i+1][j-1] ? 1 : 0) : 0)+
// 				(matrix[i+1] ? (matrix[i+1][j  ] ? 1 : 0) : 0)+
// 				(matrix[i+1] ? (matrix[i+1][j+1] ? 1 : 0) : 0))

// 		}
// 	}
// 	return total
// }

// // For

// matrix = [[true, false, false],
//           [false, true, false],
//           [false, false, false]]
// // the output should be

// // minesweeper(matrix) = [[1, 2, 1],
// //                        [2, 1, 1],
// //                        [1, 1, 1]]

// console.dir(minesweeper(matrix))

// Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.
// function variableName(name) {
// 	return !name.match(/[^_0-9a-zA-Z]/g) && !name.match(/^\d/g) == true
// }

// tests = ['var_1__Int', 'qq-q', '2w2']

// tests.forEach(test=>console.log(variableName(test)))

// alphabetic shift
// function alphabeticShift(inputString){
// 	let resultString = ''
// 	for(let c of inputString){
// 		resultString = resultString.concat(
// 				String.fromCharCode((c.charCodeAt()-96)%26+97)
// 			)	}
// 	return resultString

// }

// console.log(alphabeticShift('crazy'))

// function chessBoardCellColor(cell1, cell2) {
// 	return ((cell1[0].toLowerCase().charCodeAt()-97)%2 ===
// 			parseInt(cell1[1]-1)%2) ===
// 		((cell2[0].toLowerCase().charCodeAt()-97)%2 ===
// 			parseInt(cell2[1]-1)%2)

// }

// console.log(chessBoardCellColor('a1', 'f3'))

// Given a sorted array of integers a, your task is to determine
// which element of a is closest to all other values of a. In
// other words, find the element x in a, which minimizes the following sum:

//   abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)

//  If there are several possible answers, output the smallest one.
// https://app.codesignal.com/arcade/intro/level-7/ZFnQkq9RmMiyE6qtq

// function absoluteValuesSumMinimization(a) {

// 	let absSums = a.map(x => a.reduce((acc,val)=>{return acc+ Math.abs(val-x)},0))
// 	let minAbsSum = [absSums[0],a[0]]
// 	for(let i=1;i<a.length;i++){
// 		if(absSums[i] < minAbsSum[0]) minAbsSum = [absSums[i], a[i]]
// 		else if(absSums[i] === minAbsSum && a[i] < minAbsSum[1]) minAbsSum[1] = a[i]
// 	}
// 	return minAbsSum[1]
// }

// console.log(absoluteValuesSumMinimization([2,4,7]))

// Given an array of equal-length strings, you'd like to know if it's possible to rearrange the order of the elements in such a way that each consecutive pair of strings differ by exactly one character. Return true if it's possible, and false if not.

// Note: You're only rearranging the order of the strings, not the order of the letters within the strings!

// Example

// For inputArray = ["aba", "bbb", "bab"], the output should be
// stringsRearrangement(inputArray) = false.

// There are 6 possible arrangements for these strings:

// ["aba", "bbb", "bab"]
// ["aba", "bab", "bbb"]
// ["bbb", "aba", "bab"]
// ["bbb", "bab", "aba"]
// ["bab", "bbb", "aba"]
// ["bab", "aba", "bbb"]
// None of these satisfy the condition of consecutive strings differing by 1 character, so the answer is false.

// For inputArray = ["ab", "bb", "aa"], the output should be
// stringsRearrangement(inputArray) = true.

// It's possible to arrange these strings in a way that each consecutive pair of strings differ by 1 character (eg: "aa", "ab", "bb" or "bb", "ab", "aa"), so return true.

// Algo 1:  2 part -  success test & permute
// 		1.  Success test (partial)
//			w/ variable start index, test

// Algo 2: recursive function
// 		level 0:
//			loop through values for position 0
//			test if position 1 is valid
//			level 1:
//				loop through values for position 1
//				test if position 2 is valid
// etc

/*
Use subfunction
	Loop through array, getting "current" string and "remaining" array
	Pass current and remaining to subfunction
		Subfunction:
			If remaining.length === 1 && within 1, return true
			Loop through remaining array, testing if "newcurrent" and "current" strings are off by 1 character
				If match, pass newcurrent and newremaining and return result
			Return false

		
		Match function (str1, str2)
			2 nested loop
			outerloop: 
				remove letter @ i
				innerloop: 
					remove letter @ j
					if remaining1 === remaining2, return true

			return false
*/

// function stringsRearrangement(inputArray) {
// 	// Single loop, looking for matches if a single letter of same position deleted
// 	function oneOffMatch(str1, str2){
// 		if(str1 === str2) return false
// 		console.log('    compare:', str1, str2)
// 		for (let i = 0; i < str1.length; i++){
// 			if (str1.substr(0,i).concat(str1.substr(i+1)) === str2.substr(0,i).concat(str2.substr(i+1))){
// 				console.log('    true - ',str1.substr(0,i).concat(str1.substr(i+1)),str2.substr(0,i).concat(str2.substr(i+1)))
// 				return true
// 			}else{
// 				console.log('    false',str1.substr(0,i).concat(str1.substr(i+1)),str2.substr(0,i).concat(str2.substr(i+1)))
// 			}

// 		}
// 		console.log('    return false')
// 		return false
// 	}
// 	function recursiveStringsRearrangement(str, arr){
// 		console.log('  recursive ', str, arr)
// 		if(arr.length === 1) return oneOffMatch(str, arr[0])
// 		for(let i = 0; i < arr.length; i++){
// 			if (oneOffMatch(str, arr[i])){
// 				let newArr = [...arr]
// 				console.log('init new array', newArr)
// 				newArr.splice(i,1)
// 				console.log('spliced array', newArr)
// 				console.log('      newstr:', arr[i],'newarr:', newArr, i)
// 				return recursiveStringsRearrangement(arr[i], newArr)
// 			}
// 		}
// 	}

// 	for(let i = 0; i < inputArray.length; i++){
// 		const remainingArray = [...inputArray]
// 		const currentString  = remainingArray.splice(i,1)[0]
// 		console.log('current', currentString, ' remaining', remainingArray)
// 		if(recursiveStringsRearrangement(currentString, remainingArray)) return true
// 	}
// 	return false
// }

// function stringsRearrangement(inputArray) {
// 	// Single loop, looking for matches if a single letter of same position deleted
// 	function oneOffMatch(str1, str2){
// 		if(str1 === str2) return false
// 		for (let i = 0; i < str1.length; i++){
// 			if (str1.substr(0,i).concat(str1.substr(i+1)) === str2.substr(0,i).concat(str2.substr(i+1))) return true
// 		}
// 		return false
// 	}
// 	function recursiveStringsRearrangement(str, arr){
// 		if(arr.length === 1) return oneOffMatch(str, arr[0])
// 		for(let i = 0; i < arr.length; i++){
// 			if (oneOffMatch(str, arr[i])){
// 				let newArr = [...arr]
// 				newArr.splice(i,1)
// 				return recursiveStringsRearrangement(arr[i], newArr)
// 			}
// 		}
// 	}

// 	for(let i = 0; i < inputArray.length; i++){
// 		const remainingArray = [...inputArray]
// 		const currentString  = remainingArray.splice(i,1)[0]
// 		if(recursiveStringsRearrangement(currentString, remainingArray)) return true
// 	}
// 	return false
// }

// Different algo
// 	use array.sort((a,b)=>oneOff?)

// Recursive algorithm

//	FOR i->arr.length
//		let arr = [...argArray]
//		let elem = arr.splice(i,0)
//		IF recursive algo ( arr ) && offByOne(elem, arr[0])
//			return true
//
//

// const stringsRearrangement = (level, inputArray) => {
// 	const spaceArray = new Array(level)
// 	const spaceStr = spaceArray.fill("-").join('')

// 	if (inputArray.length === 1) return true;
// 	for (let i = 0; i < inputArray.length; i++) {
// 		const arr = [...inputArray];
// 		const el = arr.splice(i, 1)[0];

// 		console.log(spaceStr, i, el, arr);

// 		if (isOffByOne(el, arr[0])  && stringsRearrangement(level + 1, arr) ) {
// 			console.log(spaceStr + "valid array", [el, ...arr]);
// 			return true;
// 		}else{
// 			console.log(spaceStr + "invalid array", [el, ...arr])
// 		}
// 	}
// 	return false;
// };

// recursive permutation

//	recursive( input )
//		FOR first:last
//			console log( [first, recursive( rest )])

// const stringsRearrangement = function(input){
// 	for( let i=0; i<input.length; i++){
// 		const rest = [...input];
// 		const first = rest.splice(i,1)[0]
// 		if(perm(first, rest)) {
// 			return true
// 		}
// 	}
// 	return false
// }
// const perm = function(prev, input){
// 	if(input.length === 1){
// 		if(isOffByOne(prev, input[0])) return true
// 		else return false
// 	}

// 	for( let i=0; i<input.length; i++){
// 		const rest = [...input]
// 		const first = rest.splice(i,1)[0]
// 		if(isOffByOne(prev, first) && perm(first, rest)) {
// 			return true
// 		}
// 	}
// 	return false
// }

// const isOffByOne = (a, b) => {
// 	let offBy = 0;
// 	for (let i = 0; i < a.length; i++) {
// 		if (a[i] !== b[i]) offBy += 1;
// 	}
// 	return offBy === 1;
// };

// console.log(stringsRearrangement(
// 	[
// 		"142",
// 		"112",
// 		"113",
// 		"121"
// 	]
// ));

// algo -
// non recursive?
// sort the array throug all permutations, testing w/ each example

// function extractEachKth(inputArray, k) {
//     console.log(inputArray, k)
// 	const resultArray = []
// 	inputArray.forEach((el,i)=>{
// 		if( (i+1)%k !== 0 )	resultArray.push(inputArray[i])
// 	})
// 	return resultArray
// }

// function extractEachKth(inputArray, k) {
// 	return inputArray.filter((el,i)=>(i+1)%k !== 0 )
// }

// console.log(extractEachKth(
// 	[
// 		1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
// 	],
// 	3
// ))

// function firstDigit(inputString) {
//     const digits = ['0','1','2','3','4','5','6','7','8','9']
//     for(char of inputString){
//         if(digits.includes(char)) return char
//     }
// }

// console.log(firstDigit('abc3xyz4lmn'))

// function differentSymbolsNaive(s) {
//     const uniqueArray = []
// 	for(char of s){
// 		if(!uniqueArray.includes(char)) uniqueArray.push(char)
// 	}
// 	console.log(uniqueArray)
// 	return uniqueArray.length
// }

// console.log(differentSymbolsNaive('ben is pretty cool'))

// function arrayMaxConsecutiveSum(inputArray, k) {
// 	let max = 0;
// 	for(let i=0; i<=inputArray.length - k; i++){
// 		let sum = 0
// 		for(let j=0; j<k; j++){
// 			sum += inputArray[i+j]
// 		}
// 		if( sum > max) max = sum
// 	}
// 	return max
// }

// console.log( arrayMaxConsecutiveSum( [ 1,2,3,4,5,6,20],3))

// function growingPlant(upSpeed, downSpeed, desiredHeight) {
// 	let height = 0;
// 	let days = 1
// 	while( height < desiredHeight){
// 		height += upSpeed
// 		if( height >= desiredHeight) return days
// 		height -= downSpeed
// 		days += 1
// 	}
// }

// function knapsackLight(value1, weight1, value2, weight2, maxW) {
// 	if( weight1 + weight2 <= maxW) return value1 + value2
// 	else if( weight1 <= maxW && weight2 <= maxW) return Math.max( value1, value2)
// 	else if( weight1 <= maxW) return value1
// 	else if( weight2 <= maxW) return value2
// 	else return 0
// }

// function longestDigitsPrefix(inputString) {
// 	const digits = ['0','1','2','3','4','5','6','7','8','9']
// 	let prefix = ''
// 	for(char of inputString){
// 		if(digits.includes(char)) prefix = prefix + char
// 		else return prefix
// 	}
// 	return prefix
// }

// function digitDegree(n) {
//     let reduced = n.toString()
// 	let degree = 0
// 	while(reduced.length > 1 ){
// 		let sum = 0
// 		for(char of reduced){
// 			sum += parseInt(char)
// 		}
// 		reduced = sum.toString()
// 		degree += 1
// 	}
// 	return degree
// }

// console.log(digitDegree(5))

// function bishopAndPawn(bishop, pawn) {
//     const cols = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8}
//     const deltaCols = Math.max(cols[bishop[0]], cols[pawn[0]]) - Math.min(cols[bishop[0]], cols[pawn[0]])
// 	const deltaRows = Math.max( parseInt(bishop[1]), parseInt(pawn[1]) ) - Math.min( parseInt(bishop[1]), parseInt(pawn[1]) )
// 	return deltaRows === deltaCols
// }

// console.log(bishopAndPawn('a1', 'c3'))

// function isBeautifulString(inputString) {
// 	const alphabet = "abcdefghijklmnopqrstuvwxyz".split('')
// 	arr = inputString.split('').sort()
// 	console.log(arr)
// 	let count = 1
// 	let prevCount = 0
// 	let prev = arr[0]
// 	for(let i=1; i<arr.length; i++){
// 		if(prev === arr[i]){

// 			count += 1
// 			if(count > prevCount && prevCount > 0) return false
// 		}else{
// 			prevCount = count
// 			count = 1
// 		}
// 		console.log(arr[i], 'count',count,'prevCount', prevCount)
// 		prev = arr[i]
// 	}
// 	return true
// }

// function isBeautifulString(inputString) {
// 	const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
// 	arr = inputString.split("").sort();
// 	let count, prevCount
// 	prevCount = arr.filter(char => char===alphabet[0]).length
// 	for(let i=1; i<alphabet.length; i++){
// 		count = arr.filter(char => char===alphabet[i]).length
// 		if(count > prevCount) return false
// 		prevCount = count
// 	}
// 	return true
// }

// console.log(
// 	isBeautifulString("abcdefghijklmnopqrstuvwxyzqwertuiopasdfghjklxcvbnm")
// );

// function findEmailDomain(address) {
// 	while(address.includes("\"")){
// 		startQuote = address.indexOf("\"")
// 		endQuote = address.substr(startQuote+1).indexOf("\"")
// 		address = address.substr(endQuote + 2)
// 	}
// 	return address.split('@')[1]
// }

// console.log( findEmailDomain( "\"what.theHell@Dude!\"@domain.com"))

// function buildPalindrome(st) {
// 	console.log('start string', st)
// 	let testStr
// 	for(let i=0; i<st.length; i++){
// 		testStr = st + st.substr(0,i).split('').reverse().join('')
// 		if(testStr.split('').reverse().join('') === testStr) return testStr
// 		console.log(testStr)
// 	}
// }

// console.log(buildPalindrome('abcdc'))

// function electionsWinners(votes, k) {
// 	return votes.filter((thisOldCount, i, all)=>{
// 		return isWinner(thisOldCount + k, all.filter((elem, j)=>j!==i))
// 	}).length
// }

// const isWinner = (final, votes) => {
// 	console.log(final, votes)
// 	for( let i=0; i<votes.length; i++){
// 		if(final <= votes[i]) return false
// 	}
// 	return true
// }

// function electionsWinners(votes, k){
// 	if(k===0 ){
// 		if(votes.filter(count=>count === Math.max(...votes)).length === 1) return 1
// 		else return 0
// 	}
// 	let winnerCount = 0;
// 	let final
// 	for(let i=0; i<votes.length; i++){
// 		final = votes[i]+k
// 		if(Math.max(...votes) < final){
// 			winnerCount += 1
// 		}

// 	}
// 	console.log('got some winners')
// 	return winnerCount

// }

// function electionsWinners(votes, k){
// 	if(k===0 ){
// 		if(votes.filter(count=>count === Math.max(...votes)).length === 1) return 1
// 		else return 0
// 	}
// 	const maxVotes = Math.max(...votes)
// 	return votes.filter(count=>count + k > maxVotes).length
// }

// console.log(electionsWinners([40, 50, 52, 20], 3));

// function isMAC48Address(inputString) {
// 	validChar = "0123456789ABCDEF"
// 	const arr = inputString.split("-")
// 	if(arr.length !== 6) return false
// 	for(str of arr){
// 		if(str.length !== 2) return false
// 		if(!validChar.includes(str[0]) || !validChar.includes(str[1])) return false
// 	}
// 	return true
// }

// console.log(isMAC48Address("00-1B-63-84-45-E6"))
// console.log(isMAC48Address("Z1-1B-63-84-45-E6"))

// function lineEncoding(s) {
// 	let prev = s[0]
// 	let word = s[0]
// 	let encoded = ''
// 	for( let i=1; i<s.length; i++){
// 		if(s[i] === prev){
// 			word = word + s[i]
// 		}else{
// 			encoded = encoded + (word.length === 1 ? word[0] : word.length + word[0])
// 			word = [s[i]]
// 		}
// 		prev = s[i]
// 	}
// 	encoded = encoded + (word.length === 1 ? word[0] : word.length + word[0])
// 	return encoded

// }

// console.log(lineEncoding('aaaabbbyxxxxxxccddddd'))

// function chessKnight(cell) {
// 	const cols = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8 };
// 	const col = cols[cell[0]];
// 	const row = parseInt(cell[1]);
// 	const relativeMoves = [
// 		{ row: 1, col: 2 },
// 		{ row: 1, col: -2 },
// 		{ row: -1, col: 2 },
// 		{ row: -1, col: -2 },
// 		{ row: 2, col: 1 },
// 		{ row: 2, col: -1 },
// 		{ row: -2, col: 1 },
// 		{ row: -2, col: -1 },
// 	];
// 	return relativeMoves
// 		.map((m) => {
// 			return { row: m.row + row, col: m.col + col };
// 		})
// 		.filter((m) => {
// 			return m.row > 0 && m.row < 9 && m.col > 0 && m.col < 9;
// 		}).length;
// }

// console.log(chessKnight("g6"));

// function deleteDigit(n) {
// 	nArr = n.toString().split("").map(d=>parseInt(d));

// 	const sums = nArr.map((d, i, all) => {
// 		return all.reduce((acc, val, j) => {
// 			if(i===j) return acc
// 			else return acc  + val
// 		}, 0);
// 	});
// 	console.log(sums);
// 	return Math.max(...sums)
// }

// function deleteDigit(n) {
// 	nArr = n.toString().split("").map(d=>parseInt(d));

// 	const subNumbers = nArr.map((d, i, all) => {
// 		const sub = [...all]
// 		sub.splice(i,1)
// 		return parseInt(sub.join(''))
// 	});
// 	console.log(subNumbers);
// 	return Math.max(...subNumbers)
// }

// console.log(deleteDigit(212));

// function longestWord(text) {
// 	const alphabet = 'abcdefghijklmnopqrstuvwxyz'
// 	const wordArray = text.split(" ")
// 	const cleaned = wordArray.map(word=>{
// 		let clean = ''
// 		for(char of word){
// 			if(alphabet.includes(char.toLowerCase())) clean = clean + char
// 		}
// 		return clean
// 	})
// 	console.log(cleaned)
// 	let maxLength = 0;
// 	let longest
// 	cleaned.forEach(word => {
// 		if(word.length > maxLength) {
// 			maxLength = word.length
// 			longest = word
// 		}
// 	})
// 	return longest
// }

// function longestWord(text) {
// 	const alphabet = 'abcdefghijklmnopqrstuvwxyz'
// 	let cleaned = ''
// 	for(char of text){
// 		if(alphabet.includes(char.toLowerCase())){
// 			cleaned = cleaned + char
// 		}else{
// 			cleaned = cleaned + ' '
// 		}
// 	}
// 	const wordArray = cleaned.split(" ")

// 	let maxLength = 0;
// 	let longest
// 	wordArray.forEach(word => {
// 		if(word.length > maxLength) {
// 			maxLength = word.length
// 			longest = word
// 		}
// 	})
// 	return longest
// }
// console.log(longestWord('ABCde! fa asdfsdfas asdfa sfasdfklsaf lkjas flskjfdsa lkdfjsalkdfjs;ldfjkas ;ldfjk slkfdj salkjfda'))

// function validTime(time) {
// 	return (parseInt(time.substr(0,2)) < 24 &&
// 			parseInt(time.substr(0,2)) >= 0 &&
// 			parseInt(time.substr(3,2)) < 60 &&
// 			parseInt(time.substr(3,2)) >= 0 )
// }

// console.log(validTime("02:70"))
// console.log(validTime("12:13"))

// function sumUpNumbers(inputString) {
// 	const digits = "0123456789"
// 	const arr = inputString.split(' ')
// 	let sum = 0
// 	for(word of arr){

// 		if(digits.includes(word[0])){
// 			sum += parseInt(word)
// 		}
// 	}
// 	return sum
// }

// function sumUpNumbers(inputString){
// 	const digits = "0123456789"
// 	let cleaned = ''
// 	for(char of inputString){
// 		if(digits.includes(char)) cleaned = cleaned + char
// 		else cleaned = cleaned + " "
// 	}
// 	let arr = cleaned.split(' ')
// 	console.log(arr)
// 	let sum = 0
// 	for(word of arr){
// 		if(digits.includes(word[0]))
// 		sum += parseInt(word)
// 	}
// 	return sum
// }

// console.log(sumUpNumbers("2 apples, 3 bananas"))
// console.log(sumUpNumbers("2apples, 3 bananas"))
// console.log(sumUpNumbers("2 apples, 003 bananas"))

// function differentSquares(matrix) {
// 	const squares = [];
// 	let thisSquare;
// 	for (let i = 0; i < matrix.length - 1; i++) {
// 		for (let j = 0; j < matrix[0].length - 1; j++) {
// 			thisSquare =
// 				matrix[i][j].toString() +
// 				matrix[i + 1][j] +
// 				matrix[i][j + 1] +
// 				matrix[i + 1][j + 1];
// 			if (!squares.includes(thisSquare)) squares.push(thisSquare);
// 		}
// 	}
// 	console.log(squares);
// 	return squares.length;
// }

// console.log(
// 	differentSquares([
// 		[1, 2, 1],
// 		[2, 2, 2],
// 		[2, 2, 2],
// 		[1, 2, 3],
// 		[2, 2, 1],
// 	])
// );

// function digitsProduct(product){
// 	let digitsNum = 1;
// 	let digits = []
// 	let thisProduct
// 	console.time('exec')
// 	while(digitsNum < 1000000){
// 		thisProduct = 1
// 		digits = digitsNum.toString().split('')
// 		digits.forEach(d=>thisProduct = thisProduct * parseInt(d))
// 		// console.log('digitsNum', digitsNum, 'thisProduct', thisProduct)
// 		if(thisProduct === product) return digitsNum
// 		digitsNum += 1;
// 	}
// 	console.timeLog('exec')
// 	return -1
// }

// console.log(digitsProduct(0))

// function fileNaming(names) {
// 	const newNames = []
// 	names.forEach(name =>{
// 		// if name in newnames
// 		//		concatenate '(1)'
// 		//		while(new name is in newnames)
// 		//			increment suffix
// 		if(newNames.includes(name)){
// 			let number = 1
// 			let newName = name + "(" + number + ")";
// 			while(newNames.includes(newName)){
// 				number +=1
// 				newName = name + "(" + number + ")"
// 			}
// 			newNames.push(newName)
// 		}else{
// 			newNames.push(name)
// 		}
// 	})
// 	return newNames
// }

// // For names = ["doc", "doc", "image", "doc(1)", "doc"], the output should be
// // fileNaming(names) = ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"].

// console.log(fileNaming(["doc", "doc", "image", "doc(1)", "doc"]))

// function messageFromBinaryCode(code) {
// 	let message = ''
// 	for(let i=0; i<code.length/8; i++){
// 		message += String.fromCharCode(parseInt(code.substr(i*8, 8), 2))
// 	}
// 	return message
// }

// console.log(messageFromBinaryCode("010010000110010101101100011011000110111100100001"))

// function spiralNumbers(n) {
// 	let spiral = new Array(n);
// 	for (let i = 0; i < n; i++) {
// 		spiral[i] = new Array(n);
// 		spiral[i].fill(0);
// 	}
// 	if (n % 2 === 1) spiral[Math.floor(n / 2)][Math.floor(n / 2)] = n * n;
// 	else {
// 		spiral[n / 2 - 1][n / 2 - 1] = n * n - 3;
// 		spiral[n / 2 - 1][n / 2 - 0] = n * n - 2;
// 		spiral[n / 2 - 0][n / 2 - 0] = n * n - 1;
// 		spiral[n / 2 - 0][n / 2 - 1] = n * n;
// 	}
// 	let layers = (n - 1 - (n % 2)) / 2;
// 	let x = 1;
// 	for (let layer = 0; layer < layers; layer++) {
// 		// fill top
// 		for (let i = 0; i < n - 2 * layer; i++) {
// 			spiral[layer][i + layer] = x;
// 			x += 1;
// 		}
// 		// fill right
// 		for (let i = 0; i < n - 2 - 2 * layer; i++) {
// 			spiral[layer + 1 + i][n - 1 - layer] = x;
// 			x += 1;
// 		}
// 		// fill bottom
// 		for (let i = 0; i < n - 2 * layer; i++) {
// 			spiral[n - 1 - layer][n - i - 1 - layer] = x;
// 			x += 1;
// 		}
// 		// fill left
// 		for (let i = 0; i < n - 2 - 2 * layer; i++) {
// 			spiral[n - 2 - layer - i][layer] = x;
// 			x += 1;
// 		}
// 	}

// 	return spiral;
// }

// console.dir(spiralNumbers(9));

// function sudoku(grid) {
// 	const column = (colNum) => {
// 		return [
// 			grid[0][colNum],
// 			grid[1][colNum],
// 			grid[2][colNum],
// 			grid[3][colNum],
// 			grid[4][colNum],
// 			grid[5][colNum],
// 			grid[6][colNum],
// 			grid[7][colNum],
// 			grid[8][colNum]
// 		];
// 	};
// 	const subGrid = (n) => {
// 		const off = n%3*3
// 		return [
// 			grid[off + 0][off + 0], grid[off + 0][off + 1], grid[off + 0][off + 2],
// 			grid[off + 1][off + 0], grid[off + 1][off + 1], grid[off + 1][off + 2],
// 			grid[off + 2][off + 0], grid[off + 2][off + 1], grid[off + 2][off + 2]
// 		]
// 	}
// 	const isComplete = (arr) => {
// 		for(let i = 1; i<=9; i++){

// 			if(!arr.includes(i)) return false
// 		}
// 		return true
// 	}

// 	for (let i = 0; i < 9; i++) {
// 		if (!isComplete(grid[i])) return false;
// 		if (!isComplete(column(i))) return false;
// 		if (!isComplete(subGrid(i))) return false;
// 	}
// 	return true;
// }

// console.log(
// 	sudoku([
// 		[1, 3, 2, 5, 4, 6, 9, 2, 7],
// 		[4, 6, 5, 8, 7, 9, 3, 8, 1],
// 		[7, 9, 8, 2, 1, 3, 6, 5, 4],
// 		[9, 2, 1, 4, 3, 5, 8, 7, 6],
// 		[3, 5, 4, 7, 6, 8, 2, 1, 9],
// 		[6, 8, 7, 1, 9, 2, 5, 4, 3],
// 		[5, 7, 6, 9, 8, 1, 4, 3, 2],
// 		[2, 4, 3, 6, 5, 7, 1, 9, 8],
// 		[8, 1, 9, 3, 2, 4, 7, 6, 5],
// 	])
// );
// console.log(
// 	sudoku([
// 		[1, 3, 2, 5, 4, 6, 9, 8, 7],
// 		[4, 6, 5, 8, 7, 9, 3, 2, 1],
// 		[7, 9, 8, 2, 1, 3, 6, 5, 4],
// 		[9, 2, 1, 4, 3, 5, 8, 7, 6],
// 		[3, 5, 4, 7, 6, 8, 2, 1, 9],
// 		[6, 8, 7, 1, 9, 2, 5, 4, 3],
// 		[5, 7, 6, 9, 8, 1, 4, 3, 2],
// 		[2, 4, 3, 6, 5, 7, 1, 9, 8],
// 		[8, 1, 9, 3, 2, 4, 7, 6, 5],
// 	])
// );

// function lateRide(n) {
//     let timeStr = ((n - n % 60) / 60).toString() + (n % 60).toString();
// 	console.log(timeStr)
// 	let sum = 0;
// 	for(digit of timeStr){
// 		sum += parseInt(digit)
// 	}
// 	return sum
// }

// console.log(lateRide(240))

// function phoneCall(min1, min2_10, min11, s) {
// 	let remaining = s;
// 	let callLength = 0;
// 	if (min1 > s) return 0;
// 	else {
// 		callLength = 1;
// 		remaining -= min1;
// 	}
// 	if (min2_10 >= remaining) return callLength;
// 	else if (remaining <= min2_10 * 9) {
// 		return callLength + Math.floor(remaining / min2_10);
// 	} else {
// 		callLength += 9;
// 		remaining -= min2_10 * 9;
// 	}
// 	return callLength + Math.floor(remaining / min11);
// }

// console.log(phoneCall(3, 1, 2, 20));

// function extraNumber(a, b, c) {
// 	if(a === b) return c
// 	if(a === c) return b
// 	if(b === c) return a
// }

// console.log(extraNumber( 10, 10, 4))

// function isInfiniteProcess(a, b) {
// 	return (b > a && (a % 2 !== b %2 )) || b < a // crossover or stay diverged -> true

// }

// console.log(isInfiniteProcess(2, 6)) // false
// console.log(isInfiniteProcess(2, 3)) // true
// console.log(isInfiniteProcess(3, 1)) // true
// console.log(isInfiniteProcess(4, 4)) // false

// function arithmeticExpression(a, b, c) {
//     return a * b === c || a / b === c || a + b === c || a - b === c;
// }

// function tennisSet(score1, score2) {
// 	return ((score1 > 5 && score2 < 5) || (score2 > 5 && score1 < 5) ||
// 		(score1 !== score2 && Math.max(score1, score2) === 7)) && !(Math.max(score1, score2) >= 7 && Math.min(score1,score2)<5);
// }

// console.log(tennisSet(3,6)) // true
// console.log(tennisSet(8,5)) // false
// console.log(tennisSet(6,5)) // false
// console.log(tennisSet(7,7)) // false
// console.log(tennisSet(7,2)) // false

// function metroCard(lastNumberOfDays) {

// 	 return lastNumberOfDays === 31 ? [28, 30, 31] : [31]
// }

// const monthDaysArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// monthDaysArray.forEach(m=>{console.log(metroCard(m))})

// function killKthBit(n, k) {
// 	const bin = n.toString(2)
// 	console.log(bin, bin[k], Math.pow(2, k-1), "isAlreadyZero", (n.toString(2)[n.toString(2).length-k] === '0'), "isOutofRange",  (n.toString(2).length < Math.pow(2,k-1)))

// 	return (((n.toString(2)[n.toString(2).length-k] === '0') || (n.toString(2).length < k))
// 		? n
// 		: n - Math.pow(2,k-1));
//   }

//   console.log(killKthBit(37,3)) // 33
//  //k-1 0 1 2 3 4  5  6  7
//   // k 1 2 3 4 5  6  7  8
//   //   1 2 4 8 16 32 64 128

// function arrayPacking(a) {
// 	return parseInt(a.reduce((res, n) => {
// 		return "0".repeat(8 - n.toString(2).length) + n.toString(2) + res;
// 	},''),2);
// }
// console.log(arrayPacking([24, 85, 0]));

// function rangeBitCount(a, b) {
//     let ones = 0;
//     for(let i=a; i<=b; i++){
//         ones += i.toString(2)
//             .split('')
//             .reduce((total,digit)=>{
//                     return total + parseInt(digit)
//                 },0)
//     }
// 	return ones
// }

// console.log(rangeBitCount(1,4))	// 1, 10, 11, 100 -> 5
// console.log(rangeBitCount(5,8))	// 101, 110, 111, 1000 -> 8

// function mirrorBits(a) {
// 	return parseInt(a.toString(2).split('').reverse().join(''),2)
// }

// console.log(mirrorBits(97))

// function secondRightmostZeroBit(n) {
// 	return Math.pow(2, n.toString(2)
// 		.split('')
// 		.reverse()
// 		.map((digit, i)=>{return {digit: digit, index: i}})
// 		.filter(n=>{return n.digit === '0'})[1].index)
//   }

//   console.log(secondRightmostZeroBit(37)) //   100101 -> 101001 8

// function swapAdjacentBits(n) {
// 	return parseInt(('0'.repeat(n.toString(2).length % 2) + n.toString(2))
// 		.split('')
// 		.map((digit, i, arr)=>{
// 			return i % 2 === 0 ? arr[i+1] : arr[i-1]
// 		})
// 		.join(''), 2);
//   }

//   console.log(swapAdjacentBits(13)) // 13 -> 1101 -> 1110 -> 14
//   console.log(swapAdjacentBits(21)) // 19 -> 010101 -> 101010 -> 42

// function differentRightmostBit(n, m) {
// 	console.log(n.toString(2), m.toString(2));
// 	return Math.pow(2, Math.max(n, m)
// 		.toString(2)
// 		.split("")
// 		.reverse()
// 		.map((digit, i, arr) => {
// 			const smaller = (
// 				"0".repeat(arr.length - Math.min(n, m).toString(2).length) +
// 				Math.min(n, m).toString(2)
// 			)
// 				.split("")
// 				.reverse();
// 			return digit === smaller[i] ? 1 : 0;
// 		})
// 		.indexOf(0));
// }

// function differentRightmostBit(n,m){
// 	console.log('n', n.toString(2), 'm', m.toString(2), (n^m).toString(2), (-(n^m)).toString(2),(n^m), -(n^m), (n^m) & -(n^m))
// }

//   console.log(differentRightmostBit(11,13)) // 1011 , 1101 bitwise and   1001 -> 2
// console.log(differentRightmostBit(7, 23)); //  00111, 10111 bitwize and

// 00111;
// 10111;
// 00111;

// function equalPairOfBits(n, m) {
// 	console.log(n.toString(2), m.toString(2));
// 	return Math.pow(2,Math.max(n, m)
// 		.toString(2)
// 		.split("")
// 		.reverse()
// 		.map((digit, i, arr) => {
// 			const smaller = (
// 				"0".repeat(arr.length - Math.min(n, m).toString(2).length) +
// 				Math.min(n, m).toString(2)
// 			)
// 			.split("")
// 			.reverse();
// 			console.log(smaller.join(''), arr.join(''))
// 			return digit === smaller[i] ? 1 : 0;
// 		})
// 		.indexOf(1));
// }

//   console.log(equalPairOfBits(10,11))

// function leastFactorial(n) {
// 	// find k where k is the smallest  k! >= n
// 	const getFactorial = (x) => (x === 1 ? 1 : x * getFactorial(x - 1));
// 	let factorial
// 	let k = 1;
// 	while ((factorial = getFactorial(k)) < n) {
// 		k++;
// 	}
// 	return factorial
// }

// console.log(leastFactorial(17)) // 24


// function countSumOfTwoRepresentations2(n, l, r) {
// 	let count = 0;
// 	for(let i=l; i<=Math.floor(n/2); i++){
// 		if(n-i <= r) {
// 			count++
// 		}
// 	}
// 	return count
// }

// console.log(countSumOfTwoRepresentations2(20,2,16))


// function magicalWell(a, b, n) {
// 	let total = 0;
// 	for(let i=0; i<n; i++){
// 		total += (a+i) * (b+i)
// 	}
// 	return total
// }

// console.log(magicalWell(1,2,2))

// function lineUp(commands) {
// 	const correct   = {L: 1, R: -1, A: 2}
// 	const incorrect = {L: -1, R: 1, A: 2}
// 	const team = [0,0]
// 	let alignedCount = 0;
// 	for(c of commands){
// 		team[0] = (4+ team[0] + correct[c]) % 4
// 		team[1] = (4+ team[1] + incorrect[c]) % 4
// 		if(team[0] === team[1]) alignedCount++
// 	}
// 	return alignedCount
// }

// console.log(lineUp("LLARL"))

// function additionWithoutCarrying(param1, param2) {
// 	let larger = Math.max(param1, param2).toString()
// 	let smaller = Math.min(param1, param2).toString()
// 	let answer = larger.substr(0,larger.length - smaller.length)
// 	for(let i=0; i< smaller.length; i++){
// 		let sumStr = (parseInt(larger[larger.length - smaller.length + i]) + parseInt(smaller[i])).toString()
// 		answer += sumStr[sumStr.length-1]
// 	}
// 	return parseInt(answer)
	
// }

// console.log(additionWithoutCarrying(456, 1734))


// function appleBoxes(k) {
// 	// smallest box size 1, up to k
// 	// odd size contain yellow, even red
// 	// apples per box = m * m
// 	let red = 0;
// 	let yellow = 0;
// 	for (let m = 1; m <= k; m++){
// 		if(m % 2 === 0) red += m * m;
// 		if(m % 2 === 1) yellow += m * m;		
// 	}
// 	return red - yellow;

// }

// function increaseNumberRoundness(n) {
// 	const nArrRev = n.toString().split('').reverse()
// 	console.log(nArrRev)
// 	for(let i=0; i<nArrRev.length-2; i++){
// 		if(nArrRev[i] !== '0'){
// 			const remaining = nArrRev.slice(i)
// 			console.log(remaining)
// 			if(remaining.includes('0')) return true
// 			else return false
// 		}
// 	}
// 	return false
// }


// console.log(increaseNumberRoundness(902200100)) // true

// function rounders(n) {
// 	const arrRev = n.toString().split('').reverse().map(d=>parseInt(d));
// 	let rounded = []
// 	for(let i=1; i<arrRev.length; i++){
// 		if(arrRev[i-1] >= 5 ) arrRev[i] += 1
// 		rounded.unshift(0)
// 	}
// 	rounded.unshift(arrRev[arrRev.length-1])
// 	return parseInt(rounded.join(''))
// }

// console.log(rounders(1445)) // 2000
// console.log(rounders(1230)) // 1200

// function candles(candlesNumber, makeNew) {
// 	let candlesBurnt = candlesNumber;
// 	let candleEnds = candlesBurnt;
// 	let newCandles = 0
// 	while(candleEnds >= makeNew){
// 		// Make new candles out of ends
// 		newCandles = Math.floor(candleEnds / makeNew)
// 		candleEnds = candleEnds % makeNew
// 		// Burn new candles
// 		candlesBurnt += newCandles;
// 		candleEnds += newCandles;
// 		newCandles = 0
// 		console.log('endloop  burnt',candlesBurnt,'ends', candleEnds)
// 	}
// 	return candlesBurnt;
	
// }

// console.log(candles(5, 2)) // 9

// 5 candles -> 5 leftovers -> Math.floor(5/2) candles, 1 leftover

// function countBlackCells(n, m) {
// 	if(n===m) return 1 + ( n - 1) * 3
// 	else if(n===1 || m===1) return Math.max(n,m)
// 	else{
// 		let black = 0
// 		let rows = Math.min(n,m)
// 		let columns = Math.max(n,m)
// 		const slope = rows / columns
// 		let intersection

// 		const rowArr = new Array(rows)
// 		rowArr.fill(0)
// 		const rowLineArr = new Array(rows-1)
// 		rowLineArr.fill(0)
// 		for(let columnLine = 1; columnLine < columns; columnLine++){
// 			intersection = columnLine * slope;
// 			if(intersection % 1 === 0) rowLineArr[intersection-1] +=2
// 			else rowArr[Math.floor(intersection)] += 1
// 		}
// 		// reduce rowlines
// 		black = rowLineArr.reduce((total,current)=>{return total + current},0)
// 		// map rows add 1, then reduce
// 		black = rowArr.map(rCount=>rCount+1)
// 			.reduce((total,current)=>{ return total + current}, black)
// 		return black
// 	}
// }
// console.log(countBlackCells(3,3))	//7
// console.log(countBlackCells(3,4))	//6
// console.log(countBlackCells(3,5))	//7
// console.log(countBlackCells(3,6))	//10
// console.log(countBlackCells(4,6))	//10
// console.log(countBlackCells(4,7))	//10

// console.log(countBlackCells(10,10))	//28


// 1. make array of intersections
// 2. bin into rows  and rowlines
// 3. get count for each row and rowline
// 4. for each row, increment by count + 1
// 5. for each rowline, increment by 2


// function concatenateArrays(a, b) {
// 	return [...a,...b]	
// }

// console.log(concatenateArrays([1,2,3], [4,5,6]))


// function removeArrayPart(inputArray, l, r) {
//     inputArray.splice(l,r-l+1)
//     return inputArray
// }
// console.log(removeArrayPart([2, 3, 2, 3, 4, 5],2,4)) // [2,3,5]


// function isSmooth(arr) {
// 	let middle
// 	if(arr.length % 2 === 1){
// 		middle = arr[Math.floor(arr.length / 2)]
// 	}else{
// 		middle = arr[arr.length / 2] + arr[arr.length / 2 -1]
// 	}
// 	return arr[0] === arr[arr.length - 1] && arr[0] === middle
// }

// console.log(isSmooth([7, 2, 2, 5, 10, 7])) // true
// console.log(isSmooth([-5, -5, 10])) // false
// console.log(isSmooth([-12, 34, 40, -5, -12, 4, 0, 0, -12])) // true
// console.log(isSmooth([-6, 6, -6])) // false

// function makeArrayConsecutive2(statues) {
// 	let count = 0;
// 	for(let i=Math.min(...statues)+1; i<Math.max(...statues); i++){
// 		if(!statues.includes(i)) count +=1
// 	}
// 	return count
// }

// console.log(makeArrayConsecutive2([1])) // 3


// is givien number a power of some non negative integer?
// function isPower(n) {
// 	for(let i=1; i<=20; i++){
// 		for(let j=2; j<=9; j++){
// 			if(Math.pow(i,j)===n) return true
// 		}
// 	}
// 	return false
// }

// console.log(isPower(125)) // true, 125 === 5^3
// console.log(isPower(72)) // false, 


// function isSumOfConsecutive2(n) {
// 	for(let i = 1; i<n/2; i++){
// 		console.log('i', i)
// 		// make loose estimate, 2 iterations
// 		let spread = n-i
// 		let tryQty = spread / (i+1)
// 		let tryAverage;
// 		console.log('spread', spread, 'tryQty1', tryQty)

// 		let tryMax = i + Math.ceil(tryQty)
// 		tryAverage = (tryMax - (i+1)) / tryQty
// 		tryQty = 
// 		console.log('tryAverage', tryAverage)
		









// 		// spread = (i + 1 + tryQty)
// 		// tryAverage =  spread / tryQty
// 		// tryQty = spread / tryAverage
// 		// console.log('tryQty2', tryQty)
// 		// tryAverage = spread / tryQty
// 		// tryQty = spread / tryAverage
// 		// console.log('tryQty3', tryQty)

// 		// test precisely 

		
// 	}
// }
function isSumOfConsecutive2(n) {
	let count = 0;
	let total
	let j
	for(let i=1; i<n/2; i++){
		total = i;
		j = i+1
		while(total < n){
			total = total + j;
			// console.log('count', count,'i',i,'j',j,'total', total)
			j+=1
		}
		if(total === n){

			count +=1
		}
	}
	return count
}


console.log(isSumOfConsecutive2(999000000)) // 3+4+5+6+7+8 = 33   qty = 6, average=5.5, spread = 30, tryAverage = 6, tryQty = 5