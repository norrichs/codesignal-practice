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
// function isSumOfConsecutive2(n) {
// 	let count = 0;
// 	let total
// 	let j
// 	for(let i=1; i<n/2; i++){
// 		total = i;
// 		j = i+1
// 		while(total < n){
// 			total = total + j;
// 			// console.log('count', count,'i',i,'j',j,'total', total)
// 			j+=1
// 		}
// 		if(total === n){

// 			count +=1
// 		}
// 	}
// 	return count
// }

// console.log(isSumOfConsecutive2(999000000)) // 3+4+5+6+7+8 = 33   qty = 6, average=5.5, spread = 30, tryAverage = 6, tryQty = 5

// function squareDigitsSequence(a0) {
// 	const sumSqDigits = (n) => {
// 		const m = n.toString()
// 		let total = 0
// 		for(let i=0; i<m.length; i++){
// 			total += parseInt(m[i] * m[i])
// 		}
// 		return total
// 	}

// 	let arr = [a0]
// 	while(!arr.includes( sumSqDigits(arr[arr.length-1]) )){
// 		arr.push( sumSqDigits(arr[arr.length-1]) )
// 	}
// 	return arr.length+1

// }

// console.log(squareDigitsSequence(16)) 	//9		16, 1^2 + 6^2 = 37, 3^2 + 7^2 = 58
// console.log(squareDigitsSequence(103)) 	//4

// function pagesNumberingWithInk(current, numberOfDigits) {
// 	let total = current.toString().length
// 	while(total <= numberOfDigits){
// 		current += 1
// 		total += current.toString().length
// 	}
// 	return current-1
// }

// console.log(pagesNumberingWithInk(1,5)) 	// 5
// console.log(pagesNumberingWithInk(21,5)) 	// 22
// console.log(pagesNumberingWithInk(8,4)) 	// 10

// function comfortableNumbers(l, r) {
// 	const sumDigits = (n) => {
// 		return n.toString()
// 			.split('')
// 			.map(d=>parseInt(d))
// 			.reduce((t,d)=>{return t+d},0)
// 	}

// 	let pairs = []
// 	for(let i = l; i <= r-1; i++){
// 		for(let j = i+1; j<=r; j++){
// 			pairs.push([i,j])
// 		}
// 	}
// 	// console.log(pairs)

// 	const result = pairs.reduce((count, pair)=>{
// 		const [a,b] = pair
// 		return (
// 			a - sumDigits(a) <= b &&
// 			a + sumDigits(a) >= b &&
// 			b - sumDigits(b) <= a &&
// 			b + sumDigits(b) >= a
// 		) ? count + 1 : count
// 	},0)
// 	return result
// }

// console.log(comfortableNumbers(12, 108)) // 707
// console.log(comfortableNumbers(239, 777)) // 6166
// console.log(comfortableNumbers(1, 1000)) // 11435

// console.log(comfortableNumbers(1, 20)) // 707

// function weakNumbers(n) {
// 	//weakness x is number of positive integers  < x with more divisors than x
// 	const weakness = (x) => {
// 		const divisorsOfX = divisors(x)
// 		let weakness = 0
// 		for(let i=1; i<x; i++){
// 			if(divisors(i) > divisorsOfX) weakness +=1
// 		}
// 		return weakness
// 	}

// 	const divisors = (n) => {
// 		const limit = Math.sqrt(n)
// 		let count = 0
// 		for(let i=1; i<=limit; i++){
// 			if(n % i === 0) {
// 				count += 1
// 				if(i!==n/i)	count += 1
// 			}
// 		}
// 		return count
// 	}

// 	let weaknessArray = new Array(n)
// 	weaknessArray.fill(0)
// 	weaknessArray = weaknessArray.map((x,i)=>i+1)
// 	weaknessArray = weaknessArray.map((x)=>{return weakness(x)})
// 	const weakest = Math.max(...weaknessArray)
// 	return [weakest, weaknessArray.filter(w=>{return w===weakest}).length]

// }

// console.log(weakNumbers(9)) // [2,2]

// function rectangleRotation(a, b) {
// 	const longLeg = Math.sqrt(Math.pow(Math.max(a,b),2) / 2)
// 	const shortLeg = Math.sqrt(Math.pow(Math.min(a,b),2) / 2)
// 	const h = shortLeg + longLeg
// 	console.log('longleg', longLeg,'shortleg', shortLeg,'h/2', h/2)

// 	const startX = 0 - h / 2
// 	const endX1 = startX + shortLeg
// 	const endX3 = h / 2
// 	const endX2 = endX3 - shortLeg

// 	const startY = 0 - h / 2 + shortLeg
// 	const startY2low = 0 - h / 2
// 	const startY3high = h / 2

// 	let count = 0
// 	let dx1 = 0
// 	let dx2 = 0
// 	for(let x = Math.ceil(startX); x<endX3; x++){
// 		if(x < endX1){
// 			dx1 = x - startX
// 			dx2 = x - startX
// 			count += Math.floor(startY + 1 * dx1) - Math.ceil(startY - 1 * dx2) + 1
// 			console.log('x=',x,'count=', count)
// 		}else if(x < endX2){
// 			dx1 = x - startX
// 			dx2 = x - endX1
// 			count += Math.floor(startY + 1 * dx1) - Math.ceil(startY2low + 1 * dx2) + 1

// 			console.log('x=',x,'count=', count,'high')
// 		}else{
// 			dx1 = x - endX2
// 			dx2 = x - endX1
// 			count += Math.floor(startY3high - 1 * dx1) - Math.ceil(startY2low + 1 * dx2) + 1
// 			console.log('x=',x,'count=', count)
// 		}
// 	}
// 	return count
// }

// get top point x
// get bottom point x
// make column lines array
// for each column line
//	if zone 1
//		count between topleft and bottom left
//	else if zone 2
//		count between topleft and bottomright
//	else if zone 3
//		count between tomright and bottomright
//	return count
//

//		get top point
//			if columnline x < top point x
//				dx = columnline x - left point x
//				top y = left point y + slope * dx
//		get bottom point
//				bottom y = left point y - slope * dx
//		count points between
//
// a2+b2=c2
// 2a2=c2
// a = sqrt(c2/2)

// 	rectangle, sides a and b
// 	center @ origin
//	sides are @ 45 degrees to axes
//	how many points w/ integer coordinates are inside rectangle, inclusive of sides

// 1. find endpoints
//	a) 2 isoceles triangles, with short and long hypotenuse.
//	b) height = width = short leg + long leg
//	c) vertices @
//		top 	(h/2 + longleg, h/2)
//		right 	(h/2, 0-h/2+longleg)
//		bottom 	(h/2-longleg, -h/2)
//		left	(-h/2, h/2-longleg)
// points = (Math.floor(top Y bound) - Math.ceil(bottom Y bound)) *
//			(Math.floor(top X bound) - Math.ceil(bottom X bound)

// console.log(rectangleRotation(6,4)) // 23

// university dr
// pleasant st amherst
// ludlow
// easthampton
// holyoke

// const highlight = (word, l1, l2,orientation) =>{
// 	let arr = word.split('')
// 	for(let i=0; i<arr.length; i++){
// 		if(i===l1 || i===l2) arr[i] = '[' + arr[i] + ']'
// 	}
// 	if(orientation==='h') return arr.join('')
// 	else return arr.join('\n')
// }

// function crosswordFormation(words) {
// 	// algo 2 -
// 	// 24 permutations
// 	//	generate permutations
// 	let permutations = []
// 	for(let i=0; i<4; i++){
// 		let tempWords0 = [...words]
// 		let word0 = tempWords0.splice(i,1)
// 		for(let j=0; j<3; j++){
// 			let tempWords1 = [...tempWords0]
// 			let word1 = tempWords1.splice(j,1)
// 			for(let k=0; k<2; k++){
// 				let tempWords2 = [...tempWords1]
// 				let word2 = tempWords2.splice(k,1)
// 				permutations.push([word0[0], word1[0], word2[0], tempWords2[0]])
// 			}
// 		}
// 	}
// 	// loop permutations
// 	let count = 0
// 	for(perm of permutations){
// 		let [l,t,r,b] = perm
// 		const vNegLimit = 3-r.length;
// 		const vPosLimit = l.length-3
// 		// loop left / right word vertical offset (lrV)
// 		for(let lrV = vNegLimit; lrV <= vPosLimit; lrV++){
// 			const hPosLimit = Math.min(t.length,b.length) - 1
// 			// loop left / right word horizontal offset (lrH)
// 			for(let lrH=2; lrH<=hPosLimit; lrH++){
// 				// loop top word vertical position (tvp)
// 				for(let tvp=0; tvp<lrV+r.length-2; tvp++){
// 					// loop top word letters 0->length-1-horiz offset
// 					for(let tLetter=0; tLetter<t.length-lrH; tLetter++){
// 						// if top[i] === left[tvp] && top[i+horizoffset] === right[tvp-vertoffset]
// 						if(t[tLetter]===l[tvp] && t[tLetter + lrH]===r[tvp-lrV]){
// 							// loop bottom word vertical position (bvp) [tvp+2 : Math.min(l.length, lr_voff+r.length)]
// 							const bvpLimit = Math.min(l.length, lrV+r.length)
// 							for(let bvp=tvp+2; bvp<bvpLimit; bvp++){
// 								// loop bottom word letters 0->length - 1 - lr_h_offset
// 								for(let bLetter=0; bLetter<b.length-lrH; bLetter++){
// 									// if bottom[j] === left[bvp] && bottom[j+lr_h_offset] === right[bvp-lr_v_offset]
// 									if(b[bLetter]===l[bvp] && b[bLetter + lrH]===r[bvp-lrV]){
// 										// console.log(highlight(l, tvp, bvp,'v'))
// 										// console.log(highlight(t, tLetter, tLetter+lrH, 'h'))
// 										// console.log(highlight(r, tvp-lrV, bvp-lrV, 'v'))
// 										// console.log(highlight(b, bLetter, bLetter+lrH, 'h'))
// 										count += 1
// 									}
// 								}
// 							}
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// 	return count
// }

// ALgo 1 - massively nexted loops (incompletely pseudocoded)
//	split this up into a recursive function?

//	loop words 0-3
//		(first word is left)
//		loop letters 0-> length-3 = target1
//			loop words 1-3
//				loop letters 0->length-1
//					if letter === target1
//						loop letters index+2->length-1 = target2
//							loop words 2-3
//								loop letters 0->length-1
//									if letter === target2
//										loop letters index+2->length

// crossword has 4 words
//	4 words form 4 pairwise intersections
//	all words either l-r or t-b
//	area of rectangle formed by empty cells !==0

// find # of ways to form crossword following rules, given 4 words

// console.log(crosswordFormation(["crossword", "square", "formation", "something"])) // 6

// function properNounCorrection(noun) {
//     return noun[0].toUpperCase() + noun.toLowerCase().substr(1)
// }

// console.log(properNounCorrection('pARiS'))

// function isTandemRepeat(inputString) {

// 	if(inputString.length % 2 === 1) return false
// 	if(inputString.substr(0,inputString.length/2) === inputString.substr(inputString.length/2)) return true
// 	return false
// }

// console.log(isTandemRepeat('tandemtandem')) // true

// console.log(isTandemRepeat('qqq')) // false

// console.log(isTandemRepeat('2w2ww')) // false
// console.log(isTandemRepeat('aa')) // true

// function htmlEndTagByStartTag(startTag) {
// 	if(startTag.indexOf(' ')===-1) return '</' + startTag.substr(1)
// 	return '</' + startTag.substr(1,startTag.indexOf(' ')-1) + ">"
// }

// console.log(htmlEndTagByStartTag('<button type="button">')) // </button>
// console.log(htmlEndTagByStartTag('<i>')) // </i>

// function isMAC48Address(inputString) {
// 	const hexDigits = "0123456789ABCDEF"
// 	const arr = inputString.split("-")
// 	if(arr.length !== 6) return false
// 	for(str of arr){
// 		if(str.length !== 2) return false
// 		for(d of str){
// 			if(!hexDigits.includes(d)) return false
// 		}
// 	}
// 	return true
// }

// console.log(isMAC48Address("00-1B-63-84-45-E6")) // true
// console.log(isMAC48Address("Z1-1B-63-84-45-E6")) // false
// console.log(isMAC48Address("not a MAC-48 address")) // false

// function isUnstablePair(filename1, filename2) {
// 	const sortFunction = (a,b)=>{
// 		const short = Math.min(a.length, b.length) === a.length ? a : b
// 		for(let i=0; i<short.length; i++){
// 			if(a[i]>b[i]) return -1
// 			else if(a[i]<b[i]) return 1
// 		}
// 		if(a.length === b.length) return 0
// 		return a === short ? 1 : -1

// 	}
// 	console.log(filename1, filename2, sortFunction(filename1, filename2), filename1.toUpperCase(), filename2.toUpperCase(),sortFunction(filename1.toUpperCase(), filename2.toUpperCase()))

// 	return sortFunction(filename1, filename2) !== sortFunction(filename1.toUpperCase(), filename2.toUpperCase())
// }

// console.log(isUnstablePair('aa', 'AAB'))	// true
// console.log(isUnstablePair('A', 'z'))		// false
// console.log(isUnstablePair('123za', '123Z'))		// false

// function stringsConstruction(a, b) {
// 	let bArr = b.split('')
// 	for(char of a){
// 		if(bArr.includes(char)) console.log(char, ...bArr.splice(bArr.indexOf(char),1))
// 		else return 0
// 	}
// 	console.log(bArr.join(''))
// 	return stringsConstruction(a, bArr.join('')) + 1
// }

// function stringsConstruction(a, b) {
// 	let bArr = b.split('')
// 	let doLoop = true
// 	let count = 0
// 	while(doLoop){
// 		for(char of a){
// 			if(bArr.includes(char)) bArr.splice(bArr.indexOf(char),1)
// 			else doLoop = false
// 		}
// 		doLoop ? count ++ : null
// 	}
// 	// console.log(bArr.join(''))
// 	return count
// }

// function stringsConstruction(a,b){
// 	const aArr = a.split('').sort()
// 	const bArr = b.split('').sort()
// 	const res = []
// 	// console.log(aArr,bArr)
// 	let i = 0;

// 	while(i<a.length){
// 		console.log(i, aArr[i], bArr.filter(el=>el===aArr[i]).length + "/" + aArr.filter(el=>el===aArr[i]).length)
// 		res.push( [bArr.filter(el=>el===aArr[i]).length, aArr.filter(el=>el===aArr[i]).length ])
// 		console.log('res', res)
// 		i += res[res.length-1][1]
// 	}
// 	console.log(res.map(el=>el[0] / el[1]))
// 	return Math.floor(Math.min(...res.map(el=>el[0] / el[1])))
// }

// make array
// sort
//	resultArray = [[leter, acount, bcount, bcount/acount]]
// 	while index < length
//		get letter at index
//		count = array.filter(letter).length
//		index += count
//	end while
//	return Math.min(...counts)

// new algo -
// count each letter in a, count each letter in b find return Math.min(letterBCount / letterACount)
// console.log(stringsConstruction('abc', 'aaaabbbbcccc')) //2
// console.log(stringsConstruction("zezzezeeeeezezzzeeeeeezeezeeeezzzzzezeeeezezzzezzeezzzezeezzezeeeeeezzeeeezzezezeezezezzezeeeeeeezzzeeeeezeeeeeeezzeeezeeezeezezezeezeezzzzeeezzezzezzezzzzzezeezezzeezezezezzezzzzzezeeeeezezezzezezzeezzezeeezeeeezzzzzezeeeeeezzeezzzzezzzzzzzzzzeezzezzzzezzezzeeezeezzeezzzeezzzzezzzzezezezzzeeezezzzzzzzezzzezzezzzzeeezzeezezeeeeezzeezezzzezzeeeeeezzeezzzezeezzzzzzzezzzezzzzeezezzzzzzzzezzeeezezzzzzzzzzeeezezzezezzezeezzeezzeezezzzeeeeezezzzeezeeezzezeezeezzzezeezzezzeezzezeezeezzzezzzezezeezeezzzezezezeeezeeeezzezzzzzeeeeeeezeezezezeeeeezeezzeeezzzezeezzzezzezezezezzzzzeeeeezzezezeeeeezzeeeezezzzezeeeeezezzzeeeeezzezezeezeeeezzezeezzeezezezezeeezezeezzzzezeezzzzzzeeeeeeezzezezzzzeeezzzzzeeeezeezzzzezzeezeezzzeeeezezzeezzzzzeeezzeezeeeezezzzezezezezzezeeeeeeezezezzzezzeezezeezzzezzzezzzezeezzzezezzzzzezzzezzezezzzeezezeezezzzzzeezezzzzzzzeeezeezezzzeeeezeezzzezzzezezezeeezezzzzeezeezzezzezzeeezeeezeezzzezzzeezzezzzezeeeezzeeeezeeezezeeeezzezzeezzezezezzzezezzeezzezzezeezeezzzeezzeezezzzeezeezezzeezzzeeeezezezzezzzzeezzzeezzzzezzzzzezzzeeezezezzzezzezzzzzezzeezzeeezzezzzzeeeezezeezeezezzeeezzezeeeezeezezzeeezezeeeeezezzezeeeeeezezezezzezzeeezzzzezzzzzzzzezzezezeezeeezzzzzezeeezzzezeezzezezzzzeeezezzeezeezeezzzezeezzeezzeezzezeeeezeezezzzzezeezzezzzezeeeeezezzzeeezzzzezzzezezeeeeeezezeezzeezzezeezzeeeeeeezzzeezzeeezzzzzzezezezzeezzeezeezezezzeeezzzzeeezzezeeeeeezezzzezezzzezzzeeeezzezzezzeeezeezeeezzzeeezeezzzezzezezzzezezzzzeezzzzezzzzzzeezzzzzzzzezzezzeeezeeezezzzzzzzzzeezezzezezzzezzeezezeeezeezzzeezeeeezzezezezeeeeezeezeezezzezezzzezezeeezzezezzzzeeezzezeezzezzeeeezzeeezzzezezzeeezezzezzzzeeezzzezeezzzzzzzezezezezezezeeezeeezezezzeeeeeezzeeezezzzezeezzzzeezzzeezzeeeezzezeezezezzzeeezezzezezeezzzeeezeeezezzezzeeezezezezzzeezezzzeeeezeeezzezzzeezzeezzeeezzezezzezzzeezeezzezezzzeezzeeezzeezzeezezzeeezezzeeeezezezzzzeezeezeeeeeeezezzeeezzzeeezzezeeeezzezzzzzzzzzzeezzzezzzzeezezzezeeezezeeeeezzzezeezezeezzezzeeezezzzezezezezzzeeezzeezzzzeeezezzezzzzezzezezeeeezzezzzezezeeezeezeeezzzeezzzezzzezeeezzzezzzeezezzzezezzzzzeezeezzeeezezzzeezzzzzzzezeezezzeezzeeeeezeeeeezezeezeezezezeeezzzeezzzezeezzezeeeezeezzzzzzezzzezzzzezezzeezzezzezzezeezzzzezezzzzzeezezzeeezezeezeeezzezzezeezeeezzzzezzeezzezzezzzezzzeeeeezezeezezezezezzezzzezzzezzzzzezzzzzezeeeezzeeezezezzzzzzeezeezezzeeeeezzezzzeeezzzeezzzezzzeeezeeezezeeeeezzeezeezzzzeeezeezeezeezeezzeezezeeeeeezezeezzeeeezzezzzzezzzzeeezeezzeeeeeeezzezezzzeezzeeezeezzzzzzzzeezezezezeeeezzzzzezezeezezzzzzeeezeeeezzeeezeezzzzzeezzzezzzzzzzeezzezezezezezzzezzeezzzeeezzzzezzeezzzezzezezeeeezzzzeeezezeezzzzzeezeeeezezzeeezezzzzzzzzeeezzzzzzzzezzzzezeezeeeezzzzeezzzezeeeezzzeeeeeeezzzzzzzezzezzezzezezzeeeezeezezzzzeezzezeezzzzeezzzzzezezezeezzeezzzeezzzzzeeeezezzzzzezzzzezzeezzeeezzzzeezzeezezzzezezeeezeeeezzzzzezzzezzzezeezezzzzzezeeeezzezzzzzzzzzeezzezzzeezzzezzezeeezezezzzeezzeeezeeezzeeezzzeezezezeeeeezzezeezzzzzeeeezezeezezzzeeezzzezezzzzzzzeezzeezeezeezeezzzeeezezzeezeezezeezzezzeeeezezezezzzzezeeeezzezzzzzezzezzzezeezzezzzezzzzeezzeeeezzeeeeezeeeezzezeezeezeezzzeeeeezeeezzzezezezeezzeeezzzeezeezezzzzzeeeezzezezzzzeeeeeezeezzzeezeezzeezeezezezzzezzzzeeeezezzeeeeeezeezzezezzzzeezeezzezzzeeeezeeeeezezzeezzezzezezzezzeezzezeeezzzezezzezzzeeezezzzeeezeezzzeeeezzzezzeezezzezzzezzzzeeeezeezzeeeezzzezzeezzezeeeezzzeeezzezzezzezeezezzezzzzzeeeezezzezzzeezzzzeezezeezzzezzezezzzezeeezezzzzzzzezzezeeeeeezzzzzzzzzzzeezezzzzeezzzeeezzzzezezezeeezzeeeeeezzzzeezezezezzzzzzzeezezezzeezezeeeeezezeezezezeezezzezzzezezzzzezezezzezeezzeezezeeezzzzeezezzeezeeeezzzzzzezzeezzzzzzzzzezezezzzzeeeezzzeeeeeezezeeeeeezezezzzzezzezeezzeeeeezzzzzzezzezzzeeezeeezzzeeezzzeezeeeezezeeezzzzezzezzeezzeezeezzezeeezzeezzzzzezzzezzzzzeezzeeezzezzzezezzzzezezzezeeezeeeezezzzzezezeeeeezzzezzeezezezzzeeezezezeezzezzeezezezzezzzeeezeeezeezzzeezzeeezzzeezzeezeeezzzzezezzzeezzzeezzezzzeezzeezzeezezzeeeezzzzzezezezzzeeeezzzzzzzezeeeezeeezzzzzezzezezeeezzzzzzzeezezzzzeezzeeezezzzeezeezzezezezezzzzzzzeezezzezeezzeeeeezezzezeezzezezzeezeezzezezzzezeezzeeeeeeezezzezzzzeezeezzzeeeeezeezzzzeezzeeezzzzzeeezzezezeeezezzzeezeezzzeeeezezezeezzeeezezzzzzezzezzzzezzzzzzzezzeezeezezezzeezzezezzzezezzzezeeezezzzzeezeeeezzzezezeeeeeezeeeeeeeezeezzzzzeeeeezezzeeeezzzezzezeezeezzezeezeeezezeeeezeezzzzeeeeeeezezezezezeeeezeeeeezeeeezezeezzzzzeeeeezzzzezzzzezezezeezeezzzeezeezezzeeeezeezeeeezzezezzzezezeeezzezzzeeezzzeeeezzzeezezeeeeeeeeeeezzeeeeeeeezeezeeeeeezzezezeeezezzezeezzzeezzzezezzzeeeezzzzzezeezzzeezzzzzzzzzzezzezeeeezezzzzzezzezeezzeezzezzeezeeezezezzzezzzzzeeezeeeezeeezzeeeeezzeeeeezzzezeezezzzeezzzzeezezzzeeeeezeezeeezeeeeeezzzeezeeeezzzzeezezzzzeeezeezzzeezzeezezezzzeeezezezzzzzzzeeeezeezezzzeezzzzzeeeeezeeeezzzezzeezzeeeezezzzzzzeezezzzeezeezzezeeeeeezzeeeezzzzeezezeezzzzeezzeezzezzeezzzeeezeezezeeezzeeezeeeezzeezzzzzezzzzeezezezzzezzzezzezzzezzezeeeeezzeezezeezezzeeezzeeeeeeezzeeezeeezezeezeezeeezeeeeeezezzezeezeezeezzeeeeeezeeeeeeeezzezzeezezezzzeeeeeeezezzzezeeezzeezezzezeeeezzeezzzzzzeeezzeezezzzezeeezezzzezzezzezzezzezezzeezezzzzeezzeezzeeeezzzzeeezzeeeezeeeezezzeezeeeezzzzzezzzzeezeeeeezzeeeeezezzeeezzzeezezeezeezzzzezzzzezeezzeezezezeezzeeeeeeeezezzezeezzezezzzzezezezzezzezzzeezzzzzeezzeezezzzeezzeezezzeezzzeezzzezzzzzzzezezzzeeezzezzzzeeezezeeeeeezzzeezezzzezeezeezzeezeezzeeezezzzzzezezzezezzezzzzzezezzeeezzezzezezzezzezzzzeezeezzzzezzzzzeeezeezeeeezeeeeezezeezezzeezzezzeeeezeeezzezeeezzzzezezeezezezzeeezzezezzeezeezezzeezzezzeeeeezzeeeezeeezeezzeezeezzzeeezezzeezezezzezeeezzzzeeezeeezzzzzzezzezzezzeezeezzezeeeezeezzeeeezezzezzzeeeeeeeezezzezeeezzezzeeezezzeeezzezzeeezzzzzezezeeeezzzzeeeezeezezzeezezeeeezzezezezzezeeezeezzezzeeezezzzzeezzzezeezeezzzzzeeezzeeezzzzeezeeeeeeezeeezeezzzzzzezeezezzzezzzezezezzezeezzezeeeeeeeezzzzeeezezeezeeeeezzzzeezezzzzezzzezezzeeeezezzzezzeezzzzzezzzezzeezezzeeeeezzezzeezzzzzzezzzzezezeezzzzzezezeezzeezzeezeezeeezezzzezeeeezezeezezzzzeeezzzezezzzzeeezzzeezzzzzezzzzeeezezzzzeezeezzzezezzzeezezeezzezeezezezzzzeeezzzzeezeeezeezezeezzezezzzeezzzezzzeezzzzezzezezzeezezzeezeeeezeezzeezezzzeeeezzezeeezeeeeezezzeezzzzeezzzzezzezeezzzzeezezzzezzezzeezzzzzezezzzeeeezeeeeeeezzezezezzezzeezzzezzeezzeeezzzezeeezezzzzeeeezezeezezzzzeezeezzeeeeezzzeeeezzzeezzzezzzezezezezzzzeeezeezzzzezezeezzzezezzeezeezeeeezzzezzezezeezeezezzzzzzzzezeeezeezzezzzezzeezezeezzezeezeeezzeezzzzzzezeezzeeezeeeezzzzzzzezezzezzeezzeezezzzeeezeezezeeeeezzzezeeeezezeezeeezzzzeezzezeeezezezezezzzzzeezeezezzzzzzeezezzezzzeezzezzzezzeeezeezzzzzzezeeeeeezeezzzeezeezezzezzzezzzzeezeeeeeeezeeezzezeeeezzezezezeezzeezzezzezezzezeeezzezeezeeezzezzzzzeeeeezezzeeeeezzzzzeeezeeeeeeezeeeezzeeeezeezeezzeeeezeeezzzeeeeeezzzeeezezezzeezezezeeeeezzzeeezzeezzezzezeezeezzezezeezzeeeeezezzzzzzezzeezzeezzzzzzeezzzzezezzezzezezeezzzeezzzeeeeezzezzzezzzzzezezzezzzzzezeeezzezeezzezzeezzeezeezezzzzzzeeezzezzzeezezzezezzezezzzeeezeezezeeeeezzzzzezeeeeezzeezeeezeeeezeeeeeezzezzzzzzezzzezeeeeeezzezzzeeeezeeezzzeezeezzzzzzeeezzzeezezzzezeezzzzezezezzezzzzzzeezzezeezezezeeezzeezezzeeezeezzeezzzezzeezeeezzzezzzezzezezzzzezzzzzezzzzezzezzezeeeezezezzezeeeeeezzzzezeezeezzezzzzzeeezzeezezzzezzzzezezzeezezzeeezezzzeezeezzzezzzzezezezzezezezeeezezeeezzzeeezeezzezzeeeeezeeezzezezezzeezzzeezezeeeezezeeeezeeeeeezezzzezzezzzezeezezezzzeeezezzzezeeeezzzezzezezeezzeezzzezezeeeezzzezeezzzzzzzzezzeeeezezzezeezeezzeezezeeezeezzezezezzezeeeezzeezeezezeeeezezezezzeezzeezezzeezezzzzeeeezzezezzzezezzeeezeezezzeeeeeeezzeezezezezezzzzeeezezezzzezzzzzzezzeezezzzzeezzzzezzzzezzzezeezeezzezzezzzeezeezeezzezzeezzezezzezzezeeezeezzeezzzzezeezzzezezeeezzezezzzzezeezeeezzezezeezezeeeeezeezzzzezeezeeezzezezzezezezezzezzeeezzzezeezeeeeeeeeeezezeeezezzezzezezeeeeeeezezezezzzzzezezezzeezzzeezzzeezzzzezzzzeezezezezezezeezzzzezeeezeezezzzzezzzzzzzzzzzeezzeezzzezzeeezzzezzzeezzzezzeezezzzezezzeeeezeezzeeezeezzzzeezeeezzezzeezeeezezzzzzzeezeezeezzeezzezezeeezeezzeezezeezeeeezeezezeeeeezezzeezzzzzzeezzezeezzzeeezezzzzeeezzzezezezzzeeeeezzezzeeeeeeeeezezzezeezzzzeezzzzezeeezzeezzeezzzezzzezeeezezezzezzeeezezeezzzeezzzezeeeeezzzezzzezzzeeezeeeezezeezeezzzezzeeezzzzeeeeezeezzeeezezeeezzzezzeeeezeezezzezzzzeezeezzzeezeezeezzeeezezeezezzzzeeeezzzeeeezzzezzezezeeezeezezeezzezzzeeeezzeezezeezzeezezezeezzeezzzzzeezezeeezzezezzezzzzeeeezzzezzzzzeezeeeeeezeeeezzzezezzezezzeeeeeezezezezzezezzezeeezezzezezeezezezzzezezzezeeeeezeezeeeeezeezzezzeezzzzeeeeeeezzezzeezezezezezzezzezeeezzezzeezzzeezeeezezeezzzzzzzeeeeeeezeezezeeezzezzzzzzezzzezezeezezzzzeeeeeeeeezzezeezeezeezzeeeeeezzeezzzezeezeezzeezzezzzeeeezzzeezzzeeeezeeezzezzeezzzezzzzzzeeezzeeeezzeeezzzeeeeeezzeezzeezeeezzeeeezezzeeezezzezeeezezzzzzzezzeeeezzeeezezezezzzeeezezzzzeezeezezzzzzeeezeezzzzeezzeeeezezzzezzezzeeezzeeeezeeezzzzzezzzeezzezzeeezeeezeeezzzeezezeeeeezeeezezzezzzzeezeezzzzeezeeeezzezzezzzezzzzzeeeezeezeezzeezzzzeezeeeeeeeezzezzzzezeezezezezeeeeezzezzzezzzzeezeeezeezeeezzzzzezezzzezzeezeeezezeezeeezeeezzzezzzzzzezzeeeezezzzzeezezeezeezzezzezzzeeeeezezzzezzzeezzzezzezezzzzeeeeezezzeeezzzezzzzeezeeeeezezeezzzzezezeeeeeeezzezzezezzezeeeezezezeeezeeezzzezeezezzzezezzeezeezzezzeezeezzezezeeezeezzeezeeezezezeezeeeezzzeeezezezzzeezzezezzeezzeezeezezeezzeeeezzeezeeezzezeeeeeeezeeezezzezezzezzzzzzzzezzzzeeeeezzezezeeeezzezzezzzezzeeezzeeeeeezzzezzeeeeeezeeezeezzezzezeezeezzeeeeeezeeeezeezzzzzzzzzzeezezzezeeezzezeeezzezeeezezzzezezzeezzzeeezzzeeeeezzzzeezzezzzzezzezeeeeezezzeezezzzzeeezzezeeezeezezezezzzzeeeezeezeezezeezezzzzzeezeeezzzezeezzzzzzzzzzzzzeezzzeeezzzzzeezezeezzezzeeeeezzzzzzzeeezezzezzezezzeezzeezeeezeezzezezezzezeeezeeezzzezezzezeeezeeezeeezeezezeeeezezezzeezzeeezzzzeezezzzezzzzeeeeeezzeezzzzezzzezzeezzezezezezzezeezzezzzzezezeeezzeeezzeezeezezzzzeeeeezzezeeezzeezzzeezzeezzeeezzeezzzezezeeeezzeeeeezezzeeeezezeeezeeezzeeeezeeeeeezeezzeezezzeeeezzzezezzzzeeezzezeeeeeezzzzezezeeezeeeezzezzezzzzzzzzzzzezezeezzeeezezzeeezzezzzzzezezzzzezeezzzezzezezeeezzzeezzezezezezzzezeezezezzzezzzezezezzzeeezeezzzzeeezezeeezezeeeezezzezeezeezeezeeezeeezzzzzeezeezzzeeezzeeeezzezzzeeezeezzeezzeeeeezzzeeeeezzzeezzezzezezezzzeeezezeezzzezzzzezezeezeeezzee", "hncvohcjhdfnhonxddzeeeeezzzzeeeezeezeeezezeeeezzzzeezzezzezeezzzzzzezzeezzeezzezeezeezeeezeeeezezeeeeezezzeezeezezezezeezzeeeezeeeezzzeeezzezzezeezezeezeeezeeezzzeeeezeeeezzzzzzeeeeezezzzzeeezezzeezzzezzzzzzzeeeeezzzzzzezzzzzzzzeezezzeeeezeezzzeezeeezezezzezeezezzzzeezezeeezeeezeeeezezezeezeezezeezzzeezzzzeeezzzeeeeezeeeeeeezzeeeeeezezeeeezzezezezezzezezeezzzeeezezeezzzzzeeezzezzezzzezeezzeezzeeeezzeezeeezzezezzezzzezeeezzeeezzzeezzzzezzezezzeezezeezzzeezezzzzezezezeeezzeezzeezezeeeezezzezezzeeezzzezzeeeeezeeeeeeeeezzzezzezzzzeezezzezzezezzzzzezezzzzzezzzzezzzzezzeezzzeezeeeeeeeeezzzzeeezzzeeezezzezzzzzzezezeezzzzeeezzzezzezezzezeeeezeeeeezzezezzzezeeeezzezzzeezzezezeeezezzeezzezzzeeezeeezeezezezzeezzezeeeezezezzeezzzeeeeeeezzezzeezzzeezezzzeezzzzzzeezezzeezzzzzeeezzeezzzezezezezzeezeeeeezezeeeezeeeeeeeezezzeezzzzzezzzzezezzezezezezezeezzezeeeeezzzzeezeezezzzzzezezzeezzzzzezeezzezzzezzzeezezzezezezzeeezeezzzeeeezzezzzeeeeezezzezzzezeeezeeeeeeezzzzzzzeeezzzeezezeeeezeeeeezzzzeezezeezzeeeezezezzzeeeezzeeezzeezzezzeezzzzeezeeezzzzzezzeeeeezzezeezzzzzzzeezeezzzezezeeeeeeeeeeezezezezzeeezzezeeeeeezezeeeeeezzzezezzezezzzeezzezeeeezezzezzezezzzeezzezeeezeezzzezeezzzeezzzzzzzzzezzeezezzeeeeeeezzeezzzzezzzzzeezezezeeeezeeezeeeeeezeezeezzeeeeeezeezeezzzzezzzeezzeeezezzezzzezzezeeeezezzzzzzezzeeezezzzzezezzezzeeezzzzezezzezzeeezzeezzzeezeeeeezezzzzzzzzezezzzezzzzzzezeeeezezzeeeeezzeeeezzzeezzeeeeeeezezzzezeeeezeezzeezzezzezezzzezezezzezzzzzezzeezeeezzeeeeezeeeezzeeeezeezezzzeezeeeeeeezezeeeezzzezzezzeezeezezzzezzzezeeezezzeeezzzeezzezzzeezeezeezzeeeeeezzezezzzzezzezezeeezezezzzzeeeezzzzzzeeeeeezeezeeezeezezeezezeezeeeeezzezeezzzezeeeezzzezezeeezzezeeeezzeeezzeeezzzzeezezezzezezzzeeezzezeeezeezeeezzeeezezeeezeezezeeezzeezezzzezzzzzeeeeezzzzzzezeezzeeeeeeezzeezzzzezeeeeezeezeezeezzeeeezezzzzeeeezzzezzzeeezezeezezezeezeezzzezeeezezzeeeeezzzezeeezzzezzzzeezzeezezezezeezeeezzzzezzeezezzeeezzzeezzzzzezeezezzeeezezzeeezzzeeezezzzzzzzezzezezzzzeeeezzezezzezzeeezezzzezezzeeezzeeezezzzzeeeezzeezeezezezeeeeeezeezzzeezzzzeezzezzzzzeeezzeeezezezeeezzeezzeeezezzzeeeeezezzezzeezezeeeezeezzzezeeeeezzzzzeezeeezeezzeeeeezzzeezzezezzzzeezzeezeezeezzeezzzezeeeeezeeezeeeezzzezzeezzeeezezezeezeeeezzezzezezeeezzezzeeeezzeezzzeezezzzeezzzzzeezezzzezezzzzzzzeezzzzeeeeezeeezzzezzzeezzezzeeezeeeezzzezzzzzzzzzezezzzzezeezezzzzzeezezzezzezezzzeezeeeeeeezeezzeeezeezeeeezzzzezzzezeeeezeezezezezeeeezzezezzzzzeeeeezezeezeezeeeezezeezzzzeezeeeeezeeeeezzzeeeezezeeeezezeeeeezzezzzezeezzzzeeeeeezzezzeeeeezzzeezezzeeeezezezeezeezzezzeezezeeeezeezezzeezzzzzezeeeeeezeezeeezzezezzezzezzzzzzzzzeeeezzzezzeezeezeezeeezeezezzezezezezzzzezezezezezzezeezeezzezeeeeezeezzzezezezeeezzzezzzzeezzzeeezzzeezeezzzzzzezzzeezeezzzezzzzeezzeeeeezzzezzezzzzzezeeezzeeezeezeezzzzezzeezeezzeezezezezezzzeezzzeezeeeezzezzezzezeezzezzeeezzezeeezzzzzezzzeeeezezezzezeezzezzeeezzzeezzzeeeezeeeezzzzzzeeezzezzzezzezeeezeeeeeeezezezezeezzezeezezeezzeezzzzzezzzzzeezezeezzezezeezzezezeezzzezzeeezzezzzzeezezzzezezeeeezzezezezzzeeeeezezezzzezeeeeezeeeeeeeezzeezeezzzzzezeezeeeeeeeeezeezeeezeezeeeeeezezzeeezeezezzeezezzzzzzezzzezzzeeezezeeeezzzezzzzeezzezeezzzzezeezeezzezeezzeezzzzeezeeeeezzezezeezeezzeezzzezeeezezezzzeeeezzezzezezeeeeezezeezezzeezzzzzezzzzeeezeeeeezezzeezzeeeeeeezzeezzezzeezezzezeeeezzzezzeezzezzzzzzeeezeeezzzzezzeezezeeezzezzzezezezeeezeezezzzezeeeezezzzezzezzeeezeezeeezezzzeeezeezezzeeezezezeeeezzzeeezzeeezeeezeeezzezzzzzezzezzzezzzzeeezzzzzezzzezzeeezzezezzeeeezeezzezeeeeezzeezeezzeeezzzzeeezezezzeeeeeeezezzezezzeeeezzezezeezezzezeeeezzezzzezezzezzzeeeezezzzzezzzzzzezezezzzzzezeeezzzzeeeezezzeeeezezzeeeeezzezzeeezzzezeeeezezzzzzzzzzzeezeeezezezzezeezzezeezezeeezeeezzzezezezeeezzzeeeeezezzezezzezzzzeezeeezzezezzzzeezzzeezzeeezeezezzezzeeeezzeezzeeeeeezzeezeezzzezzzezzzzzzzeezzeezezeezezzzzzzzzzzeezzzzezeeezeeeezeeeeeeezezzeezzeeeeeezzeezeezzeezzzezzzzzezzzzeezezzezeeeezzzzzzezezezzzeezzeeezeezezezzzezeezezzzeezzzzzzzeeezzezzeezzzzzzzzezezzezezeeezzzzezeezzeezzezzezeezezzzezzezzezezzzzeezezzzezeezezzzzezzezzeezeezzeeeezeeeeeezzeeezzezezzeezezezezezeezzeezezzzeezzezzzzzzzeezzzzzzzzezeeezeeezezzzeezzeeeezezeeeeezzzzeezzzeeeezzeeeezzezeezzeezezzzeezezzzezezzeeezeeeeezezezzzzzeeeeeeezzzzeezezeezzeeeezzzezezzzzzzezeeeezeeezzzezezeezzzzezzeeezezezzzzezezzzzzezeezezeeezeezezzzzeezeeezezzeezzeezzezezezezezezzzeeezzezeezezzeeezzzezzezezezeezzeezzzzzzezeezzezezezezeezeeeeezzzezzezeeezzzeeezeeeezzezezzezeeezzzzeezezezzezzzeeeeezeezezezeezzeeezzzzezzzezezezeeeeeezeezzeezezzezezezezzezzezeeezeeezzezezzzzzezezezezzzzzzeeezezzeezzzezzzzzezeezezezzezzezzzeeeezeezezzzzzzzezzezezzezezeezzzezzezzzeeezzzezzezeeeezezezezzezzeezeeezzeeezzezzzeeeezzzzzeeezzzzezzeezzzeezzezeezeeeezeezezzeezzeeezzezeezezezeeezzzzzeezzeeeeezzzzzzezeezzezezeeeeezezezezzzzzezezezzezzzeezzezzzezzzzzeezzzeeezezzezeeeezeezezzezeezzeeezzzzzeezzzzzzezeezeezzezzzzezeeezzzeezeeeeeezzezzezeezezezzezezzzzzezezzzzzezzeeeeeeezezeeezzzeezeezzeeeezezzeeezzezzzeezezzzeezezzezzzezezzzezeeezzezzzezeezzezzezezzezeeeezzezeezzezezezeezzzezezeeezzeezeeeeeezzezezzezzezezeezzzezezeezezeeezezeeeeezezzezeezezezeezeezzeezeezeezezzzezezezezezzezzeeezeezeezzezeeeeeezzzeeeeezzezzzzeeezzezzzezeezzezeeeeezzeezeezeeeezezzeeeezeeeeezzzezzeezezeeezezzezzezzezezzezzzzzzeezezzeezeeezezeeezzeeezzzezzeeezzzeeeeeeezezeeezezeeezezzeeeeezeezezzzzzezezzzzeeezzezzezzzeezeeezezezeezezzzeezezzezzeeeeezezezezeeeezezeezzzezeeeezzezeezezzzeezzzeeezzezzezzezzezzzezzeeezzezzezezeeeeeezeeeezzzzzzzeezzeezezzzzzzezezeezeeezzezzeezeeeeeeezeezzezzzeeeezezzzzezzzezzzeeezezzeeeeeeezzzeeeezezzzezeezezeeeeeeeeeezzeeeeeezeeezzzzeeeezzezezzeeeezezeeeeezzzzzzeezeeeeeezzzeeezeezzeezezezzezzzzzzzezeeeezzeezezeezzezzeeeeezezzeeezeeeeeeezzzeezezezezeeeeeezezeeeezzezzzeeeezeeeeezzzzeezzeeeeeezezezeeezzzzzzezeeezeezezzeezzzzeezzzzzeeeezeeeezezzzzzzezzezzeeezezezeeezzzzeeeezzeeezzzzeezzeezzeezzzezzezzzzeeeezezeeezzzeeeeezzeeeezzeeezzzzzzzeezzezeezeezezeeezzzzzezeezzeezezeeeezeeezzzzzzzezzzezzezeeeezzzzzzeeeeezzzzzzeezeeezzezeeezzzeeezzzzeezeeeezzeeezzeeeezezezzezzzeezezezezzeezeeezeeeeeezeeezzeezeeeeeezzezzzeezzzzzzzzzzzzzzzzeezzezzzzeezzzzzeezzeezeeezeeezzezeeeeeezzzzeezzezeezezeezzzzzezzezezezzeezzzeezzzzezzeeeezzzeezezeezeezeeeeezezzzzzzzzezeezzeezzzeezzzzzzzzezzeezezzzezezzezzeeezzeezzezzzeeeezzzeezzeeezeeezezzzzeeezzzzzezzezzzezezzzezzzzezzzeeeeezzezezeeeeeeeeezzezzezzezzzeeeeezezezzzzezzezzzzeeeezzzzezezezzzezezzzzezeezzzzeeeezeezzezzezeezezzzeezeezezeezzezzzeeezzzezezzzeeeeeezeezzezezzezezeezeeezezezeezeeezeezezzzezzeezzzzeezzezezezezzeeezeeeezzezzzzezzzzzeeeeezeezeeezezzeezzezzzzzzezezezzeeeeezzeeeezzezzezzezeeeeeezzeezzezzzzzzzzezzezzeezzeezeezzzeezeezeezeeezezezeeeezzeezzeezeezzezeeeeezeezzeeezeezezzeeezzeezeezezeeezzezeezzeezzzzzzezeeeeeezezzzezezzzzeezzeeeeeezeezezezzzeeeeezezzezzeeezzzeezzezzeezzeezzeezeezeeezezzzzeezzzzezezezzzzzzezezzeeeezzeezeeezzeezzzeezzzzzezezzzeezzzzzeeezezzeezzzzzezzzezzeeeezzezeezzzzeeezzzeezzeezzzzzezeeezzezzzzzzzzzeeeezeezzeezzzzeezzzeeeeeezeezeeezeeezzezeeezzezzeeeeezzeeeezeezezeezezeeeeezeeezzeeezezzezezezeeezzzeezzeezeeeeezezzeezzzzzezzzeezzzzzezzzezeezzzzzezzeezzezeezzezezzzzeeeeezzzzeeezzzeeeeezeeezzezzzeeeeeezezezzzzzzezzeezzzezzzeezzzzzeezeeezzzeezzzzzeeezzezzezezzezezzzezzeeezezzezzzzzezezeezzzzzzeeezeeeeezzzezeeeezeezeezzzezeezzeeeezeezeezezzzezezezzzezzezeeeeeezzzzzezeezeeeeezzeeeeeeeezzezzezezeezzzezezeeeeezeezzzezezezeezezzzzezzezeezeezzeeezezzeezezeezzezeeeeeezezeezzeezzezzeezezezzzezzzzzzzzzzzezezzzeezezzezezzeezezeeezezzzeeezezezzzzeeezzeeezzzzezzzezzzezzzzeeezzeeezzzezeezeeezezezzzzeeezezeeezzzeeezzezzzezeeezzzezzzzezezeeeeezzeezzzzzezzzezeeeeeeezzzezezzeezeezeezzzzzzeezzezezezzzzzezzezzeeezzezzzzzezzeeeezzzeeeeezeezzeezzzzzezezzezeezezzzzezeeeeezzzzezzzzezzzzezeeeeezzzzzzzeeeezzzzzezeezezzzzeeezzzeezeeezezezzezeeezzeeezzzzezezzzzzezeezezeeezzezeeeezezzzzezzezzzezzezzezzezezzzezzezzzzzzezzezeeezezzeezeeeezezeeeezzzzeezeeezzeezzzzeeezzzezzeeezzeeezeeezezzzzezzeeeeezzeezezzeeeeezzzzeeezzezeezeezzeezzeeeezeeezezeeeezeeeeeezeeezzzzeezzzezzeezzeezeezzzeezeezezzezzzzzezezeezzzzezzzeeezeezzezeezezezezzezzzeezzzeezeeeezeeeeezzezzezeeeeeeeezezeezzzezzezezeeeeeezezezeeezeezzzeezeezezzeeeezeezzzzeeezzezzezzezezeeeezzeezzzzzeeeezezeezzzeezezzezzeeeezeeeezezzezzezzzzezeezzzeeeeezzzezzezezezzzeezezzzeeeezzezzezzeezzzezzezeezeeeezzzeezeezezezeeezzezzeezzzzzzeezezzzzezezezezezzeezeeezzzezzzezzezzeeeeeeeeezeezezzzezzzzeezzezzeezzzeeezezeezeeezezezezzzezzeeezezezzzeezzeezzeezeezzezzezzeezzezzzezzzzzzzzzezezzzeezzezzzzeeezzzzzeezezezzeezzzzzzzzezeezzzzzzzzeeeezezzeezeeezzzzzzzzeeeezzzezzzeeezzezeezeezeezeeeeeezezzzzezzzzzeezezezzezezzezzzeezzezezzeeeezzezezzzzezzzzezezzzezezzzeezeezeeezezzezeezezzzeeeeeezezeezzeezzeezzeezzezezzzeezezeeezeezeezzeezzezzzzezezezezzeezzzeeezezeeeezzezezeeezezezzzzeeezezeezezzzezeeeeezzezeeezezeeezeezezezzzzzezeezeeezeezzeezeeezzzeezezeeeeezeezzezzezeeeeeezzzzezeeezzzezeeezzzzzezzeezezzzeeezzzeeeeeezzeezeeeezzzeeezeeezezzeezeezeeeezzzezzzeezezzezezeeeezzzzezezzeeeeeezezeeeeeeezzzzzezeezzzzzezezzzzeeezeezzezeeezzeeezzzzzezzzeeeeeeezzzzzzezeeezezezzzezzezezeeezzzzzzzzeeezeeeezzzeeezzeezzeeeezeeeezzzzeeeezzeezzzzzzzeezzezeezeeeeeeezzzezeeezzzezezzezzzeezzeeezeezezzzzeeeeeezzeezzeeezzzzzzezzzzzzezzezzzeezzzzezzezezzzezeezzeeezzzeezzzeeeezeezzzeezzezezzeeeeeeeeeezeezzzeezzzzezzzzzzzezzzezzzzzzzeeezzeeezeezzeeeeezzzzezzzzezzzezezezezezezzzzeeezezeeeezzeezezeeezzeeezzezzeezeeeeezzzezzeeeeeeeeeezezzzeezzezzezzezzezzzeezezzzzzezzzzeezzzzzeezzzezzeezzezzzezeeeezzzzezzeezzezzzezeeezzzzeezeezzezezzzezeezzeeeeezeeezezezeeeeeezzzeezzezezzeezzzeeezzeeezzezzeezeeeezeeeeeezeezzeezeeeezzzzeezezezezzzezzzzzezzzezzeeezzzzeezeeezzzeeeeeeeeezzeeezezzezzzzzeezzzezzzzzzzeeeeeeezeezzezzeezzzezzzzeeeeezzezeezezeezzeeezzeeeeeeezzezezezzzzzzeeezeezzezzzzeeeeeeeezezeeeeeeezzzzezeezezezezzeeezzezzezzzzzzzzzzzeeeezzezzzzzezezzezezzzzezzeeeeeeeezzzzzezezzzzzzezezzezzezzzzzezzzzeezzzeeezezeeeezzezzeeeezzzzeezzeezzzzzzzezzzezeezeeeezzezeeezeeezezezezezzeeeezzeezzzzezzeezeezeezezzzeezzzzezzzzeeezezeeezzzzzeezezeeezeeeeezezeezzeezeeezzeeeeezzeeeeezeeezzeeeezeezzzezezzzzezeezezeezezeeeeezzezzzzzzzzzzzeeeezzeezzezeeezeezezezzzezeezeezeezzzezzzzezzzeeezzeeeeezzzzzzzezezezeeeezzeeezeeezeezzzzzzzeeezezzeeezeeeeezzzeezzezzzzezezezezeezzeezezzeezzezezezzeeezeezzezezzezzzezezeezezeezeezzzzeeeezeeezeezzzzeeeezezeezzzezeezeezeeeezezzeezeeezeezzzzezzeeeezzzzzezzeezeezzzzeezeezezezzezezzzezezzezzzzzeezeezeeeezzezezzzeeeeeezzzzeezeeezezeeeezzezeeeeeeeeeezzzeezeezezzzzzeezeeeeezzezezzezezezezzzezeezezzezezeezzzeezzezzzezzzeeezzezeeeeeezezezeezezzeezeeezzeeeeezeeezezzzezezzzeezzezzzzezezezzzezzzzzzeeezezeeezzzezezzeezezeezeezzezzezzeeezezzezzezeeezezzzzzzzzzezzezzezzzezeeezzezzzzzzzzezzzzezzzezezeezzezzzzeeeeezzeeezzeezezeeezzzeeeezzeeezeeeezezeezezzeeeezezzzezzeeezezezzezeezzezezeezzeeeeezzzeezzzzzzezzzezzzezzzzeezeeezezzzezzzzeeezzzzeeeezzzezeeezezzezzzeezeezzzzeeezezzzezezezzzzeeeezzzeeeezeezzezzzzzezezzzzeeeeezezezzeezzezzzezezezezezezeeezezzezzezzzeezezezezeezzzzzezeeeeezezzzezeezezeeezeezezezzzeeezeezeezeezezzeeeeeeezezeeeeeeeeezzzzeezzeezezeeezzezezezeeeezzeezeeezeezeeeezzezzeeeezzzzzezeeezezezzezzezezeeezzeezzzezzezzzzzezzeeezzzezezeezzzzezeezzeeeezzeeezeeezezzezeezezezzzeezezzezzezeezeeezezeeeeezzzzezezzzezezzeeeeezzeeeezzzeezzeezzeezezezzzzzezzzzzezzeezezzezzezzzzezezeeezezzeezzzeezzzzezzzzzeezeezzzzeeezezezezzeeezeeezzzeezezzzzezeeeeeezezeezzezzezzeezeeeezeezezzezeeezzzzzzzzzzeezzzzezeezezezzezzeezeezzzezzzezezzeezzeeezezezzzezezezezeezeeeeeeezezezzzzeeeezzeeezzzeezzzzezezzzzeezzzeeeeeeezeezezzzzezzeezzzezeezeeeeeeezezzzzzezzeeezeezezezzeezzezezzzeezzezezzezzezzzezzeezzeeezzezezzzezzezeeezzzzzzeezeezzzzzezzzeeeezzzezzzeezzzeeezzeeeeezzzezzzzzzezzezeeeeeezzzzzezzezzezezzzzezzzezzzezeeeeezzzzezezezeeeezzzzzzzezezeezzzzzezzeeeezzeezzzzzzzeeezezzzezzezzeezeeeeezezzeeezeeezzeezzeezezezzezzezezzeezzzeezzzeeeeezezzzzzzzzezzzezzzezezzzezzzeezezzzeeezzzzzeeeeeeeeeeezeezzezzezeeeezeeeezzzzzezeezezeezzzzezezeezzeezzzzeeeeeeeeeeeezzeezezzeeezezezezeeezezeeezezzezzeezzezzezezzeeeeezzzeeeezzezeezzezzezzzeezzzzzzzzzeezzezzzzezezzeeeeeeezezzeezzzeeeeezzezeeezzzeezzezzezzzzezezzeezeezezzeeezeezzzzzeeeeeeeezzezeezeeeeezzzezeeezezeeeezezzeezzzezezzzezeeezeeeeeezzzezezezzeeeezeezzeeezezzzzzeezzzzzeezeeezzzezzzzeeezzzzeezzezzezeeezezeeezzeezzeeezezzzzzzeezeeeezzzeeezzezezzezzezzzeeezeeeeezeezzeeezezezeezezeezzeezzezeezeeeezzzzeeeeeezezzzeeeeeeeezeezezzzezeeeeezzzezeezezzeezeeezzeeeezeezzzeezzeezeeezzzeeeeeezezeeezeeezeezezeeezzzzezeeezzeeeeezeezeeezzezzeezzzzzeezeezzzezzzzeeezzzzeeeeezeezzzzzezezezezzzeezzzzzeezezezezzzeezzzzezzzzezeeezeezzzzzeezeeeezzezzzeezzeeeeezzeeeeezzezezzzzeeezzzzezzeezezzeezeezezzzezzzzzzzzzeeezeeeezzezeeeeeeeeezezzeezzeezezzeeezzezeezzzezzzzezezezzzzzeezezzeeezezezzeezzzezzzezeeeeezzezzezzeeezeeezezzzezeezeezeeezezzzzzezzzzeeezezzzeezzzeezeeeezzeezzzeezeezzeeezeezeeeezeeezzzzeezzezzezzzezeeeeezeeezzzeeeezezzzzeeezzzzzeeeezzezzzeezzzzeezzzzzeeeezzzeeeezezeeeezeezeezzzezeeezzzzezzzeeeezzzzeezzzzeeeeeeeezeeezeeezezzeezeeezzezzzezzeezezzzezzzzezzzzezeeeezeezzzzezzzzzzzeeezzezzezezzzeeezezeeezzzezzzzzezzzzezzzzeezzezzeeezzezzeezzeeeeezezzezzezzezeeeeeeezezzezezezzezezzzezezeezzzzeeeeezzeeeeezzezzzeeeezzezzzeezzzzezzzzezezzzzeeeeeezzezeeezezzzzzezezezeezeezzzeezezzezezeeezezeezzezzzezezezzzezzeeeezezzeezezzzeezeezzzezzeeezzzezzzeezzzzeeeeezeeezeeeezzzezzzzzeeeezzzeezeeezzzezeezzzezzezezzzeezzzeezzzzeezezzzeeezzzeezzzezeeeeezezeeezzezeezzezezezzzzzezzzezzezeezzeezezeeezzezezeeeeeeezezezzzzzzeeezzeeeezzeeezezzezzeezzzezeeeeeezeeeezzeeeeezzezezeezzzeezzeezeeezzzzeezezzzeezezzzzezeezeezeeeezzezezzezzezzezzeezezeezezeeeeezeeezezezzzeezzzeeezzeeeezeezeezzeeezzezzezeeeezezezzzzeeeezzzezezeeezezzeeezzezzeeeeezeeezzzzezeeeeeezzzezezezzzeezeeezzzzezzeeeeezzzzzzzezzzzzzezeezzzezzezzzzzzeeeezzzeeeeeeezzzeeeeezzezezzeeezezeeezzzzeeeeeeeeeeezzzeezzzezzzezzezeezzeezzeezzezeezzezzzzezezeezzzzzezeeezzzzezeeeezezzezzzzzeezzeeezzeeeezeeezezzeezezzzzzzezzeeeezzeeezeezzzzeezeezezzezeezezzeeezzzeezzzeezzeeeeeeeeeezeezezezzeezzezzezzzeeeeezezezzezzzezezeezeeezzeezzezzezezezzezzezeeeezezzzzzezeeezezezezzzeezeezeeezzezzzzeeezeeezzzezzeezeeeeezzzeezzzezezzzeezzeeezeezezzzzeezezzeeeezzezzzeezezezeezezeezeezeezzzzzezzezezzeezeezeeeezzzezezeeeeezezzeezzzeeezzeeeezezezeeeezzzzeezzezezeeeeezzezzezzzzzezzeeeeeeeezzzzzezzeezzezeeeezezzeezeezzzeezzzezeeezzzzzeeezzzzeezzzeezzzzzeezezzzzeezezzzeeeezezzezeezzezeeeeeezeeezzzezeeezzeeeeeeeeeeeezzzzzzzzzeezzezzeezzeezezzeeezzeezezezzzzzzzezzzeezzzezzzezzezezeeezezzeezzzezezzzezzeezezeeeeezeezeeeezzeeeeezezzeeezzezzeeezzzzezzzzezezzzzzeeezezeezzzezeeezeeeezezzezezeezzezeezzeeeeeezzeezzzzzzeeezezzezzzzzezzeeeezzzeezzzzezeeeezezzzzezzeeeeeezzzeeeeezzzzzzzzzezzzzzezzzzeeezzeezeezeezzezezzzzzeeezzeeeeeeeeeezzeezzzeezezeezzzezzezzeezeeezzeeeeeezzzzezzzzzezzeeeezezzezezezzeeeezzezzzzzzzezzezeezezezezzeeeeeezezeeezeeezezezezzezeeezezezzeeeezezeezzzzeeeeezezezzeeeezezzzeezezzzzzezezzezezzezzzzzeeezzezzeeeeezzzezzeeezzezeezzeeezzzzezeeeeezeeezzzzzeeeeeeeezeeeezeeeeeeezeeeezzzzzzzezzezzzzzezzezzzzeezeeeezezzzezzzezzzzezzeezezzezzzzzeeeezezzezezzeeeezzzzeeezezzezezzzeeeezezezezeezezezezeeeeeeeezeeeezezzezzzeeeeeeezzzzezeeezeezzzzzezezzzeezezezzezzezezeezezeezzezzzeeezzeezeeezezzzzeeeeeeezeeezzzzzzezeeezzzzzzzzezzeeezezzeeeezeeeezezzzeezzeezezeezezeeezezezezzezzeezzezzzzeeezeezzzzezezezzzezezzzzeeeezzezeezeezzezeezzzzezzezzzzeezzzzzzzzeezezzzeeezzzeezzeeezzzzzzzezzezzzzezzezzzezezzzeeezzzezezzezezzeezeezeezezzzeezeeeeeeeeeezzeezezzzezzezzeeezeezeeezzzezzeezezeezeezzzzzzzzezezzezzzeeeeeezezzeezezzeeeezzezzeezzezzeezeezeeeezezezeezzzeeezezzzezezzeezeeezzezzezeezezeezeezeeeezeeezeezzzzezzzezezzezzzeeezzeeezezezzzzzeeeeeezzezzzzzzezeezezezeeeezezeeezzezeezzezeezezzeezeezeezeeezzzzzzeeeezeezezzezzezezeeeeeezeezezzzezezzezzezzzeezeeezezeeezezzzzzezzezzzezeezezezzzzzzzzeeezzezeeeezzezzezzzezzezeezezzzzezzeeezezezezezezezzezzezezzeezzeezzezezzeezezezzezzzezzzeeeezzezzezeezezzeeezzzezeezzzzzzeeeezeezzezzeezeeezeezzeezzezeeeeezeezzezzezzzzzeezeezeeeezzeeezzeezezzezzezzeezezzezzezeezzzezzzeezzeezzzzzeeezezezeezezezeeeeezezezezezezzzzzeeezeeeeezeeeeeeezzeeeezezezezzzeeezzeezeeeezzzeezzeezzzeezzeeezzezzeezzzezezezzzzezzeezezzzeeezzeezzzeezeezzzzeeeezzezezezzezeeezzzzezzzeeeeeezzzzzezezezzeezezzeeezezeezzeezzezeeeezzzzeezezzezeeeeezzezzzzzzzeezzzzzezzzeezezzezzzzzeezzezzeezzezzeezezeezzeeeezeezeeeeezezzzeezezzezezzzezeeezeeeezezezzezzeeeeeeeezezzzeeeezzzzezeeeeezezzzzzezezzeezzzezzeezzezzezezeezezezezzzezezzzeeezezzzeezzezezezezzezzeeeezeeeeeezezeeezzezezzeezzeezezzzezzzeeezzzezeeezezeeeeeeezeezezezeezeezzzeeeeeeeeeeeezzezzzzzzezeeezeezeeezzzeezezezzezzzzzzeeeezzzzzzeezeezzeezzezezzeezeeeezzeeeezezzzzzezeezeeeezezeezezzzzzeezzzezeeeezeezeeezzeezeezzeezezzezzzezezeeeezezzzzezezeeeeeezezezzeeezezzezezezzzezzzzeezzzzzeeezzzzzzzzezzeeezeeezeezeeezeezezeezzzzzzzeeeeezeeeezezzzeezezzeezeeeezeeeeezzzeezeeezeeezezezzzzzezzzzzeeezeezzezezezzezzeeeezzeeeeeezzeezzezzezzeezzzeeezzezezeezzezezezezzzzzzeezezeeeezeeezzzzeeezzzezeezezeeeeezzzeeeeezzezzzeezeezzzzeeezzeezzzzzezeeeeezeezezzzzzzzeezezzezzzeezzzzzzzeeezezeeezeezezezeezzezzeezeeeezeezzezzeezeezezzeezezzzeezzeeeezzzzzzzzzeeezeezezzezzzezeezzzzezzeeeezezezeezezzezeeezzzeeezzzeezeezzzzzzeeezzeezzezzeeezezzzezeeezzezzzzzzezzezzezeeezezeeeeeezzeezezzzzeeezeezeezezzzzzezzzzzzezzzeezzezeezezzzzzeezeezzzezezzeezeeeezeeezzeeeeezeezezzzezeezeeezzzzzzzeeeeezezeeezeezezzeezezzezezzzeeeeeezzzzeeeezezzzzezzzzezeeezzzeeeeezzeeeeeeezzezzzeeezezzzeeeeezezzezzzeezzzezezzeezzzezeeeezzeezzezzeeezzeeezzeezezzzezzezzezezzeeeezezezezzezeezzzeeezzeezzzeezzeezzzzeeeeeezeeeezzeeezeezzeezzzezzzzeezeezzzeeezzzeeezeezeezezzezezeezzzeezzzzzezeeeeezezzzzzezzzeezeeezzzezzezzezeezezezzzzeeeezeeezeeezeezzeezzzeezezzzzzeezeeezzeeeeezezeeezzezeezzzeeeeezeeezzezzezezezzezezzezezzzeeezzzeezzezezezzezeeeezeeeezeeeezzezzeeezeezzzeeeeezzeezezzzzezezzezzezeeezzzeezzezzzeeezezezeezeezeeezzeeezzeeeeezzzzzzeeeeezeeezeeezzezezeezeeeezeeeezeeeezeeezzzeeezzzzzezzeezzzezzezezezezeezezezzezezezeezzzeezzeezeezzzzzzzzeezzzezeezeeezezzeeezezzzeeezezzeezzeeezezezzeezezzzeeezzzeeezzezeezezezzzzzeezzezzzezzezzzzezzzezzzzezezeezzeeezzeezzeeeezzzeezzzeezeezeezeezzezzezezeezezzzezzzezeezzzezzeezzezeeeezezzezzeezeezezzzezzzeezezzezeeeeezezzzeezzeezeezeeezeeezzzzzezeezzezzeeezzezeeeeeeezeeeezezzzeeezezzzzzezezzezzeeeeeezzzzzeeeezeeezzeeeezezzezeezeezzeeezzzzezeezeeezzzezezeeezzzzezezzeeezezezzeeeezezzeeezezzezzzezezezzzezeezzeeezeeezzzezezeeeeezezzzzzezeeeeeeezeezeeeezzezezzeeeeezeezeeezzzeezzzzzzzeeeezzezzzeezezzzzeeezeezeezeeezzezeezezzzezzzzeeezzzzzzeeezezzezzzezzeeezezeezzezeezezeezezeezzzeeeeezeezeezzzzzzeeezeezzzezzzezzzezzzzzzzezezeezeezezeeezezzeezeezzzzeeezzeezeezezeeeeezezeeezzeezzzezzzzeezezzeeeezzzzzeeeeeezzezzeeeeezzzeezzeeezzzezzezzzezezzezeezezzzeeezezzezezeezezzeeeeezzzezzezzzeeezeezezezezzeezzeezeezezezzzeezezeeeeezzzzeezzzzezzzzzzeeezzzzzeeeeezezzzzeeeezeeeeeeezzezeezeeezzezzezeeeeezezezzzzezeeeezezezezezzzzezezezzeezzeeezeeeeeeezeezezzezzzeezeezzezeeezeezeezzezzzezezzzeezezezeezzzzzezeezezzzzeezeezezzzzezzezezzezzeeezzzeeezezzzezezzezzzeeeeeezzzzeezezzezezzzzezeezzeeeeezzzzzzezezezeezezeezezzzzzzezzezzezzzezeezeezeeezzzeeezezeeezzeeeezzezzzeeezezzeezezzzezezeezeezezzeeeeeezezzeezzzezzezezzzezeeeezeezzezeezezzzzeezeezzzzezzeezzezzzezezzzzezezzzzezeezezeezzzzeeezezeezzzeeezezeezezezeeeezeezezezeeeezezzzezzzzezzezeezzzezzezeezeeezzezeezzezezzzeezezezezzeezzezezzezezezezeezzeezzzeeeeeeezezeeezzzzzzzzezzeeeezzeezezezzezezzezezeezzezzezzzeeeeeezeezzzeezeezezzzzeeeezezzzeezeeeezzzzzzezezeezezezeezzeeezeeezeeezeezzeezezzzzeezzezeeeeezezezezeezzeeezzezzezzzezezzeezeeeeeezeezzezzeezzzeeezezeezezzeezzezzeezezzeeeeezeeezzzzezzezzeeeezezezezezzzzeezzeezzzezeeezeezzeezeeezezzzeeezeezezzzeeeeeezzeezezzeezezeeeezezeezezeeeezeezzzzezezeeezeezzzzzzezzeeezzezezzezeeeeezezezeeezezzezezzeezezeezezeeeezeezzzezezeeeezezezeezzzeezezzzezzzzzzzzeeeezeeezzezezezzeezzzeezzeeezeeezzeeezezzezzzezezzezezzeezzeeeeeezzzeeezzezezzzeezzeezzeezeezzzzzezzeeezezzzzezezzzeezeezzezzeeezeezezeeezzzzzezzeeezzezeeezeezezzezezzzezezzeeeeezeezezeeezezezezzeeezeezezzezzeezzeeeeeezezezzeezzezeezzezezeezezzzeeeezeezezeezzeeeeeeeeeeeeezzezzeeeeeezeeezzezezzzezeezzezzzzezzezezzezeezzeeeeezezeeezezezzeezzezeeeezzzzzzzeeeeezezzeezzezeeeeezzzeeezzeezzeeezzzeeezzeeeeeeezzzzzzezeeezzeezezzeeeezezeezezeezzzezzezzzeeeezezzeeeeeezzezezzzezeezeeezezzezzzzeezzzzezzeezzeeeeeeezzezezzezzezzeeezezeeeezezezzeeezzezeeezzzzzeeezzzzeezzzzzeezezeezzzeezezezeeeezezzzezzzzzzeezeeeeezezzeeezzzezzeeeezzezzeezzezzeezezzeezeeezzzzzzzeezzzzezzezzeezeeeezzzzeezzzeeezezzezzzeezeeeezeezzeezezzzzzzzzezezzezeeeeeeeeezezeezzezzeezeezzzeezezezeezezzezeezzzzezzzzzzezzzzeeezzezzezezeeezzzzezezezeeezzzeeeeezezzzezzzeezzezzeezzzezeezzeezzzeeeezzzezzzzzeeezezeezzezeeezezezezezzzzzzeeeezzezeeeeeeezeeezezzezeezeezezzzzzzzzzezezzzezzzzeeeeezezeeezzezzezzezzeezzezezezezzzezzzzzzzezzeezeeeeezzzzeezezeezeeezeezzzzezzezeezeeeezzzeezezzezzzzzezzzezzeezeezzzezzzeeeezezzezzzezezzeezzzzeezezeezzzzzzeeezzzzeeezzzezzeezzzzeezeezzzezezeeezezezzeeezeezzzezezzzzezeeezezzeeezzzezzeezeezeeezezeezezzeeeezzeezzeeeeeezeezzzzeezzezezzezzezzzzzzezzeeezzezeezzzzeeeeezezzeeezeeezzzezeeezzeezzzeeezeeeeezzzzzzzeeezzeeezzzzeeeeezezeezeezeeezzezezeeeeeeezeezezzezeeezeeezzzzzezezzezeeeezzezzzzzzzezezzzzezezezeeezezeezzezezzzezezzezzezzzezzzzzezeezzzeeezzzzzzeeezeeeezezzzzzeeeezezzzzezezzezzzeezzzeeeeezzzeeeeeeezezeeezeeeezeezzzzzezzeezeezzzzeeezzezezzzzeezzezezzzezzeezzzzzeezzezezzezeezzzzeezzzzzzzzezzeezeeeeeezzzeeeeezzzezzzeeeezezzzzezezzzzezzeezzzzzzeeeeezezzzzezezezeezzzezzzeeezezezeeezezezzzezeeezzzezeezezzzzeezzezezzzzezzezezeezzezeezeezzeezzzeeezeeezzeezzzeeezezzzzeeezeezzezzzzezezzezzeezzzeezezezeezzeezeeeezeezzeezeezzzeeeezezzezezzeeeeeezezzeeezzeeeezeeeeeezzzzzzzezzezzzzzeezeezzzzezeezeezzezeezzeeezezeezzeezeezezzzeezzzeezeezzzzzeeeeeezeezeeeeeezeezzeezezeezezezeezzeeeeezeezzezeeeeeeeezzeeezzzezzzezzeeeeeezzeeezezzzzzezzzeeezzzzzzezzzezezzzzezzzzzzezzzzeeezzzzeeezezezzzzzzezzezzezzzzzezeeeeeezzeeeeeezzzzzezezeeezezzzzzezeeeezzzzeezzeeeezzzzzzzzeeeeeeeezzzeeeeeeeeeezzzzzzeeezeezeeezzeeeezezzezzzzzzezzezeeezzzezeeezzezzeezeezzzzezzzzzeeezeeeezzezzzeeezezezzeeeezzzeeeezezzeeezeezezezzzeezeeezzzezzzzezzeeezzeeezzzzezezzzeezezezzzezzzeezeeezzezeezeeezzzzezzezzeeeezzzezzzzeeeeeezeezzeeezezezezezezezeezzzezeezzzeeezezezezzzzezzzzzzzeezzzzezezeezezzzeezzzezzeezeezezezzezzzzzeeeeeeeeezzzzzeeezezzezzeeezezzzzeezzzzzeezzzzzzzezzzzezzeeezzezzzeezezezzzzeezzezzzeeezzzzzzezezezzezeeeeeeezzzzezzzezeeezzezezeeeeezeezezezeezzzzezezzeezzezzzezeeeeezezzeezeezzzzezzzzzzezzzzzzeezzzzzzzzzeezzzeeezzezzeezeezeezzezezeeezeeeeezzezezezzzezezzezezzzezeezeeezzezezzzeezeezeeeeezzzzzzeezezezezeeezzzeeezeezzzeezezzzzzezezzzzzzzzeezezzzeeeezzeeezzzzezzzeezzezzzzezzezzzzzezzeeezezzeeeezzzzezzzzzeeezeeezeeezezzzzezzeezeezzzzzzeeezezeeezzzezzeeezeezeezzzezeeezzezzzezzezzzzzeezzeeezzeeezzeeeeezezzzzzeezezeeeeeeezzeezezzzzzzeeezezzzzzzezeeezezzeeeezeeeeeeeezezeeezzezzeezzzzezeeezeezzezeeeezeeezzzezeezeezeezzzzzzezezeeezzeeeeeeeeeezeezzezeezeeezzezzzzzezzzzzezzezeeeezzeeezeezzezzezeeeezzeeeezezzzezeeeezeezzeezzezzeezezzzeeezzzezzezeezeezzzeezzzzezezzeezzezzzeeeeeezzzzeezzzeezezezzeezzeezzezzzzeezzzzzezeezezzeezzeezzzezeeeeezezzeeeezzeeeezzzzezzeezzeezzzzzeeeezzezezzezzeezeeezzezezeezezzzezezezezzzzezzeezezzzzzezzzzzezeeeezeezezzzzezzezzeeeezzezzeeezzeezeeezeeezzzezzezzeeeeeeeeezezzeezeeezzeezzezzzeeezzeeezzeezzzzzzezezzeeezeeezezzeeezezezezzeezezezzzezzzzezezzzzezeeeeezzzeezezezzezeeezzeeezzezeeeezzezeezzzeezzzezzzzzezeeezeeezeezezeezzzeeezeezzzzzezezzeeeezzeeeezzzzeeeezeezeezeezzzzeezeezzeeezezzzeeeeeeezzeezeezezzzzezzezzezzzezzeezezezzzeeezzezezzzzezeeezeeezzzzezzezezzezezezzeezezzeezezzeezzzzeeezzeeezzezzzezeezzzezzzeezzzeezzzzzeeezzzzezzeezzezzzezzzzzzeezzzeezzzzzzzeezezzeezezeezezzzzezzezzzeezzeezzzeezzeeezeeeeezeezeezeeeeeeeeezzezzzezzezzeezzeezezzezzzezzzeeeezzezzzezeezzezeeeezeezeezezzezzezzzzzezzzeezeeeeeeeeezeezezeeeeezezezezezzzzezezzzeezezzeeezeezzezezzezeezeeeezzzeeezezezzezzeeeeezzezzeezzeeezzezezzzeeeeeeeezzeeeeeeeezzzezzzzezezeezeezzeezeezezeezzzeeezezezeeeezzezezezeezeeeeeeeeeezzeeeeezzzezezzeeezeeeezzeezzeezzezzzezezzezzzeezzezeezzezzzzzzezzzezeezzzezzzezeezeeezeeeezezzzezezeeezezzzeeeeezzezzeezzeeezzzzezeeezzezzzeeeezzzzzezzzezezeeezzezzezeeezeeezzzezeeeeeeeeezeezzzzzzzzeezzeeeezeezeeeeeezzezezezezeeezeeezeeeezeeeezzezzzezzzezzeezzezezezzeeezezezzeezeeezzzezzeezzzzezezzzezzzezezeeezezzzzzzzezezzezzzeeeezezezeeezzzezzzzzeezeeeeezzezezzzzzzzzzeezzzzzzzzzezzezeeezzeeeeeezeezezzzzezzezeezezzezeeeezeezzeezzezezzzeezzezzezzeeeezzeeeeeeezzezzezeezezezzzzeezzeezzezezezzzezzeezzezzezzeeeezeezezzeezzzezezzezzzzezeezezeezzeeeezeezezezzeeeezzeeezeeezeeeeeeezeeeezzzzzezezzeeeeeezzezzezezzzzezzezzezezeezzzezeeezzzzezeezeeezeeeezezezzeezeeezezezeeeeezzzezezzzzzzeeezzzezzzeeeezezeeeezzezezzeeeezeeeeeezzeezzzzzezezzzeeezezzzzezezeeeezezzeezzeezzezeezezzezzeezzzezzezzzzzzzzeezzezeeeeeeezeezzzeeeezeezezezezzzeeezeeeezezzeezeeezeeeezzeezeeezzezzzzezzzzzzeeeezzezzezezzezeeezzezzzzzezzezezzezzzzzezzzzzzzzezzeezzzezezeeeezeezeeezeeeezzzzzzzzezzeeezezzeeeeezzzzezeeezzeezzzezzzzzzzezzeeezeezzezzzezeezeeezzzzzzzeezzeeezeeezezezeezeezezzzezezeeeeeezzeezezzzezzeeezzezzzeezzeeezezzezezzzeeeezeeezezeezezezeeezzezzeeeezezezezzzeeezzzzeezezezzezzzezeeezezeeeezzzezzeezezzzzzezeeezzzeezzeezezzezeeeeeezeeeezzzzeeeezzzezeeezzezezeezzzzzezeezzzeeeezzezzezezeezezezzzezzzeeeeezezzeezzzezezzzezzeeezzzzezzeezezzzezeezzzezzzzzezzzzzezezzeeezzzzzzzeezzzzzzzezzzeezeezezeeezzzzeezeeezezezezezzezzeezzeezzezezezeezzezeeezzzezezeezzzeeeezeezeezzzzeeeezeezeeeeeeeezeezzezzzzeeeeezezzzezezzzzeeezzeezeeeeeeezezzeezezzzezezezeezzzzeeeeezzeeezezzzzzezzezzzezezeeezzezezzezzzezzzzezzzezeeeeezeeeeezeeeezzzzzeeezeeezzzzeezeeezeezzzzzeezeeeeezeeeezzzzzezeezezezzzzeezeeeezzezzzezeezzzezezzzzzzzzzeeeezzzzzzzezezzzzezezezeeeezzzzeeeezezezzzzzzzezeezzezezzzeezzzeezzeeezezzezezezzzeezzeezzzzezzeeeezzzzzzzeezeezezzzzeeezezeeeezzeezezzzzzzezeezeeeeeeeezeeeeezeezezezeeezzezeeeeeezzzzzzzzzezeezzzezezzezzeezezeeezzzzzezzeeezzzezzezzzeezzzzzeeezeezezzzezeeezezzzeeeeezezzeezezzezzeezzzeeeezzzzzezzeeeezeezzezzezzzzzzeeezeezeezeezzezeeezzeeezezzzezzeeezzezzzzeeeeeezezzzeeezezezeeezeezzzezezzzzezeeeezzzezeezzeezezzezzezzzzeezeeeeeeeeezeezzzzzzzzzzeezezeeezezeezzzzzeeeeezeezeeezeeezezzzzzzezezzezeeeeeeezeeeeezzzezezzezeezeezeeezzezeeezzeezezezzzzeeezzeeezzzezzzeezzzzzezeeezezzzezzeezzezzeeezeeezezzzezzezzzezzzzezzeezeeeeezzzeezeezzeezeezzeeeezeezeeezzzezezzzeezeeezzzeezzzzzzzzezezzzeezezeezzzezzeezzzezeeeeezeezezeeezzezzeezzeezzzezzeezeezzezezeeeezzeeezzezzezzezzezezzzzezzezezzezeeeeeezzezzzzezezzzezzezzzezezezzezeezzeezzzezezzeeeezzeezezezezeeeeezeezzezezzezeezzzezzeeeezzezezzeeeeezeezeeezezezzzzezzzeeezzzezzzeeezezezzezezeeeezzzzzezezzzezeezeeezzzzzzezzzzzezzzezezzzezezzeeeeezezezezzzeezzeeeezezzeezeeeeezzezzeezeezeeezzzzeeezezezezzzeeezzeezzezzzeeezzezzezzeezzezeeezezeeeeezezezeezzzzeezeeeeezeezeezezeeeezzzzezzezzzzeezzzezeezzzezezezezzzzzzzeezezezzeezezeeezzezzzzzzzezeezezzeeezezzzzzzeeezeeezeeezezezeezzeezeeezzezezezzezzzeezzzezzzzzzeezzeezzeezezzzzzezzezezezezezzezzeezeezzzzeeeezzzzezzzeezzeeezzzzzeeeezezzzzezeezzzzzzzeeezzzzeezezezzzeezeezezzeeeeezeezeeezzeeeezzeezzzeeeezeeeeeezeeezzzzeeeezzezezzzezeezezzzzeezzeezzezzzzeeezzzeeeezzezezezeeeezeeeeeezzeezezezzzeeezeezzzeezeezezzzeezzeezzezeeeezzezzzzzzezzezzezeezzezeeeezeeezzeezeezezzzzzzeezzzzezzzzezzzzeezzzzzezezzzzeeezezzezzzzezeeeeezezeezzzzezezzzeeeezezzzzeeeeezeezzezeeeeezzzzzzezeezeezzeezzeeezezzzezezezeezezeezezezzzzezeeeeeeezezzzzzezezezezzzeeeezzzeeezzzzzezzzeeeezzzeeezeeeezeeezzeezeezzzzezzzzezezzzzeezezzeezezezzezzzzzezeezezeezeeezezzeeezeeeezzzzzeeezzeezezezeeezeezzeezeezzeezzzeeeezzzzezeeezeezeeezezeeezezezzzzzeezzzezzeezeeezzzezzzzzzzzezzezeeezzeezzzeezeeeezezeeeeezzezeezeezzzeeezeezeeeezzeeeeeeeeeeeeezeeezeeeezeezzzezezzzeeezzzeeeezzeezeeeeeeezezzzeeezeezzeezzzzzzzezeeezzzzzezezeeezzzzzeezeezzzezezzeezeezzzezezezezezzzezezezeezzeeezzezzzezzzezzeezzzeezzeeeezezeezzzezzezzeezeeezezeeezzzezzzzeeeeezzeeezzzezeezeeeezezzeeezzezeeeeeezeezzzzezeezzzzezezzzzezezeeeezzeezeezzzzezeezezzezeeeeezzeezezeezzeeezzezeezzzzzezezzzeezeezzezezzzezeeeeeezzeeeezezeezzzezzzzzezezezezeezzzeezeeezzzzzzzzzzzzeezzezzzezzezezeeezzeeeezeezeezezezzzezzeezeeeeeezezzeezezzzzzzzzeezzzezeezezzzzezzzeezeezezeezzeezezeezzezeezeezezezzzzezzzeezezezzeeezzzzeezeezzzzzzeezzeeeeeezzzeeeeezzzzeeezzzzzzzzeezzezezzeezzezzezeeezzzezeeezeezzzzezeeeeezzeeeeezeezeezzzzezezeeezeezzzzzzeezeezzeezzzzzzzeezezzeeezezezzeezzeeeeeeezeeezzzezzezzezzezezeezzzzzezeezezzezzezeezzezzzzeeezezzeeeeezzzzezezezzzzzezezezezeezezzeeeeezeeeeeeezeeezzezezzezzeeeeezezeezezzzzzzezzzeeeezeeezeezeezeeezeeezezeeeezezezezzzzzzezzzezzzezezzezzzzzzzeezzzeeezeeeezezzeezzzzeeezzeezezezeezeezzzzzzzezeeeezzeezeeeeezzzeezezzzzzzzzzezezzezzzzzezeezezzezzeeeezzzzzeeezzzzzeeezeeezzzeezeeeeeeezzeeezzeeezzeezzzzzeeeezzezzzzeezezzzzzzzzezzeeeezezeeeeeeezzezeeezeezezezezzzezzzezzezeezzezzeeezzzzzzzzzzeezzezzzzezzzzzeezeeezzzzeezeezzzeezzzzeezezezzzezzzzzzzzeezzezzeezeeeeezzezezzeezzeezezzzezeezezzzzzezezeezzezeeezzeeeezeeeezezzeezzezeezeezzzzezeeeezzeeezzeezeezzzzezzzzezeezzzezezezezezzzzeezeeeeeezeezeeeeezeezeeezeezzeezezzzzeezzzzeezzeezezezezezzeezeezezezzeeezeeeeeeezzzezezzezeezzzzeeeezezzeeezzezzeezeezzzezzezeeeezzzeeeeezeezezeeeezzezzezezzzeezeeezzezezzezeezzezezezzezeeezeeeeeeeeeeezeezeezzzezeeezzezzzzzeezezzeezeeezzzzzezzzzezeezzzzzzeeeeeezzzezzeeezzzezzezzezzeezeezzzzzzzeeezezezezezeeeeezeeezezeezeeezezezeezzzzezzzezezezzzezeeeezzeezezzzzeezzzzeeeezzzzezeeeezeezzeezezzzezeeezezeezezzeezeeeezzezezzzzzzzeezezeeeeezzezeeeeeezzezzzzeezzezzezzzeeeeeeeezzeezzzzezzeeeeeezeeezzezzzzezzzeezzeezzezezeeezezzezezzzzeeeeezzeeeezeezzzeezzezzezezeezezzzezezeeeezezzzeezzzzzzeeeeezzezeezzeezeeeezeeeezezezzzeeeeeeezezeeezezzeezezzezezzzezeezzezezzzeeeeeeeeezeezezezzezeeezezezeeeeezzezzzezeeeezzzezzzzezzzzezeeezzeeezezzeezezeezzzezezeeezeeeeeeezeezzeezzezezezeezeezezezzzezzzezezzzzezzzzzezzzzzezzzeezzeezzezeezeezeezzzzzzzzzzezzezeezeeezezezeeezezeezeezeezzezzeezzezzzzzzzzzezezzezzzzeezzeeezzezeezzezzezeeeeeeezzezzzzzzzeezezezezzzzeeezzzzezeeezzeezezeeeezzzzzzzeeeezezzzezzzezeezeezzeezezzeeeeeezeeeeeezezezzezzzeeeeezeeezezeeeezeezeeeeeeezzezezzzzezzezzzzzzeeeezzzzzzzeezzeezezzeezezezzzezezezezzzzezzzezeezzzzzzeeeeeezzeezezzzzezzzezzzeeezzzzezzzzzzzezzzzzzzzezezzzezeeeeezeeeeeeeeezzzzeezzeezzezezzzzzzzeeeezzeeezezzzeezeeezzzzzezeeeeezzzzeezzzzezzzeezzezezezzzzzzzezezezeezeeeeeezzezzeeeeeeezzezzzzeeeezeezezzeeezzeeeezzeeezzeezzzezeeeezzezzzzzzzezeeeezzezzzezeezzezezzzzzeezezzeezzezeezzzzzzezeezeezeeeezzzzzzzeeeeezezeezezezzeeezzzzzezzezeeeeezzeeeeeeezeeezeeeezeezezeeezzzzezzzzzeeeeeezzzezeezzeezzeezzzezeezezzzzeeezzzzzeezzezeezeeezeeeeezzzeezeezzeeezezeezezezzzezzezezzezeeeeezzeezezeezeeezeezzeezzezzzeezzzzzzezzeezzeezezezzezezeeezeezezeezzzzzezzezzzezzeezzeezeezezzzzzezeezzeezzzeeeezzzezezezezezeezeezzeeeezezzeeeeezzzezezezezzezeeeezzzezzezzzzzzzeeezeezezzeeeezezzezzeezzzzzeezzezeezzzeezeezezezzzzzeeezezzeeezeeezezeeeeezzeezzezzezezzzezeezzzeezzeezzzeezeezzzezezzzzzzzeezzeezeezeeezzzeezzzzeezzeeeeezeeezzzzzzeezeezzzzezeeeeeezeezezeezzezzeeeeeeezzzezeeezzzzzezzezzzeezeezezezzzzeeezzezeezeeezezeezzzeeeezzeezzeeeeeezzzzzezezezezzeeeezezzzzzzeeeezeezeezzezezzzezeezzzzezezzzzzzzezezzezezezeezzzzeeezzezzzzzezzeeeeeezzeezeeeezzezeezzzzzezzeeezzzezzeezzzezzezezeezeeeeeeezeeezezeeezezzzzezeezzeeeeezeeeezzzezzezezezeeeeezeezeezeezezzzeezeeezzzeezzzzzzzzzzzezeeeeezeezeeeeeeezezezezezzzzzezzzzezzeeeeeeeezzzzzeezeezeeeezzeeezzeeezezzezeezzzezzezeeeezeezzzzezeeezezzzzeezezzeezzeeeeeeeezeezeeeeeeeeeezezzzeezzeezzzeezezzzeeezeezeezzzzzzzeezzzzzezzeeezzzezeezeeezzzezeeeeeezzzzeeeezzeezezeeeeeeezezezeezzeezzeezezezzzezeezzeeeeezeezzezzezezzeeeezzezeeezzeezzezezzzzzzezzzzeeeeezeezezzzezeezezezezzzzzeezzeezezzezeezeezzzeeeeezezeeezzezezezeezzzzeeeezzezzzzeezeezzezzezzezzeeeeeezezeeezezzeeezeezezeezzzzzeezezzeeeeezzzzzezeezzzeeezzzzzeeeeezeeeeezzzezzzzeezzzzeeeezzzezeezeeezzzzezezeezeezezeeeezezezzeeeeeezzezeeeezzeezezeeezzeeezeeezezzezzzzeeeezzzezzzeezeeeeeezzzezeeeeeeeezzzeezeeeeezeezeeezzeeeeeezzezezzzezzeezeezeeeezzzzeeezezzeezeezzzzzzzezzzeeeezeeezeezzezeezzeeezeezezzzezzzzeezzeezezzzzzzzzezzezzzezzeezezzzzeezzzezzzeeezzezezzezzzzzezzzzeeezzeezzzezzezeeezeezzeeezzeezezzezzzeeeezzzzezeeezeeeezeeeezzezezzezzezezezzzeeeeezzzzezeeeeeezzeeezeeezezzzezzzezezeezzeeeezeezezzzzzzezezezeezzeeeeeeezezzzzzezezezeezezeezzezeezzzzezeezezeeeezzzzeezezzezzeezzzezeeeeezeezezeeeeezeeeezzzeezezzeeezzeeezzeezeeeeeezeezezezezezezzezeezezzeezezzzzezzzzeezezeeeezzzeezezzezeezzzeeeezezzzzzezzzezzzzezeeeezezzzeeeeeeeezzzeeeezezeezzeeeezzezezzezzeeezeeezeezzzzezezzeezzzzeeeeeezzzezzzzzezzezzezzezezezzezzezeeezezzezzezeeeeezeeezzeezzzzezzezeeeezezeezezezzzzeezezezzezeeezezzezzzzzezzezeeezeeezzzzzeezzezzezeeezzzzzezeezeeezzzzezeeeeezzzeezzeeezeeezeeezeezeezzzezzzezzeezzzzzezzeeezezeezeezezzzezezzeeezeeezzzeeeeezzzezeeezzzzezzezeezzeeeezezeezeezzezeeezeeezezzzzzezzeeeeezzzzzeeezzeeezzzezzeezeezzzzezezezzzezeezezzzeeezzeezzzzzzzzzzeezzzzezezeezeezzzeeeezezzezzzzzeezezzezzeezezzzeeeeezzzzeeeezeeeezezezezzzeezzeeeeeeezeeeezeeeeezeeeezzzzzzzeeezzeeezzzeezezzzezzzzzzzezeezezzzzzzzezezzzeeeezzzzzezeeezeeezezeezeeezzezzeeezezzeezzzezzeezzeezzezzeezzezeeezeeeezzzzeeeezezzezzzeezezzeeezzzezzzezzzzzzezeezeeeeeezeezzzzzzeezzzezezzzezzzezeezezzzezezezezezzzeeezezezzzzeeezzezzeeezzzzzezzezzezeezzezezzzzzzzzezzeeeezeezeeezzzzzzzzzzzzzezeeeezezezzeezzzeezzzezzzzeeezzzzzzzeezzeeezzezeeeezezzzezezezeezezzezzezzezzzzzezeezzzzzzeezezzzzzezzzzeezeeezzeeezzezezeeeezzzzzzezzzzezezeeeezzezezzezeeezezezzeezzezzzezezzzzeezzzeezzeeezzeezeezezzezzeeeeeezeeezeeezzezeeezzzeeezeezzzzeezeezeeezezeezeeeeeeezeeeeezzzzzzzzeezezzzezeeeezezezeeeeeeeezeeeeeezeezzeezeezezzeeeeezzzzzeezezzeezzzzzeezeeezzeezeezzeeezezezezzzeezzezezzezzzeeeezzezezezzeeeezezeeeeezeezzeeeezezezeeezeeeeeeezzeeezzzezezeezzeezzzeezzeeeezezzezzzzezeeezeeezzeezezeeeezzezzezezzeeeezezzezezeezezezezzeezezzzzezzzezezzezeezeezzezzzzzzezezeeezezzezzzzeezezeezzezzeeeeezezezzeeezezeezzzzeeezezeeezzeezeeezzzzezzzeeeezzzzezeeeezeezeezeezzezezzezzezzzzezezzzzzezzzeezeeeezzzzzezzezeezzezezezzeezzzzeezezeeeeeeeezeeezeezzezezzezzeeezzezezzzzzzeezezzzzzeeeeezezeeezzzzeezzeezzezzzeezezzezzezzzzzeezzeezzeezeeezezzezeezzzzezzezezzzzezezzzeeezezzzzzeezeezzzezeezzezeeeeeezezezeeezzzzeezezzzzzezezeezezzzeeezezezeezzezzzzeeezzzezezeezzzezeeezeezzzeezezezezzezzeeeezezeeezzzeezezezezzzezezeeeeezzzezeeeeezzeeezeeezeeezzezzzzzzzzzeeezzeeezezzzzezeezezzzzzeezezzezezeeezzzezzzzzezezeezeezzeezzeeezeeezezzeezezezzzzzezzzezezezzezzzzzzzeezezeeezeeezeezezeeeezeeeezzzzeeezezezeeeeeeeeezeezzeezeeeezzeezzzzzzezzeezzzzezzeeezeeeezeezzezezeeezzezzzeezzeezezezeeeezzeezezezzezezezzzzezeezzzeeeeeezzeeeeezezeezeezzeeeezzzzzezzeezzzzeezeezzzezeezzzzzezzezezeezzezezezeezezeeezzeezzeeeezeeeezezeezzzeeeeeeezezezezzezeeezezeeezezezezeezeeezezeeezzzezzzeeezeeeezzezzezzeezzeezezzezzzzezzeeeezzeezezzezzeeezzzzzezzzzezezeeeeeezeeeezzeeezezzzzzzzzzezeezzezezeezzzzzezzzzezzzeezezezzzeeezzzezeeeeeeezzzeezzzzzeezzzeeezzzzzzeeezzzeezzzzzzeezeeeezezezzezezezeeezezezzezeeezzezeezeeezeeezezzzeezeezezeeeeezezzeeeezzezeeezzezeeeezezzeeeezzzzeezeezeeezeezzzzezzzeeezezzzzzzzeeezezeezzzzezeezeeezzeeezzezzzzeeeezezzeeeezeeezzzeeeezeeezezeezezezzzeeeezeeezzezezzezzzzeeeezezezzzzezzezzeeezzzzeeeezezzzzeezezezzeeezeezeezzzzeeezeezezezzzzezezeezezzezezezeeeezzeeezeeeeezezeezzzzezeezezeeezezezzzezezzeezzeeeeeeeeeeeezzeezzzzeeeezzezezeeezeezzezzzzzezzeeeeezzzzezezeezezzzzzezezezezzeezezzeezeeezezeeeeezeezzezzeezzezezzzezzeezezzzeeeezzeeezeeezzeeezezzezezzzeeeezezeeeeezeezzzzezzzeeezzeeeeeeeezzeezezezeezeezzeezzzeeezzeeezezzeeeezezzeezeezzzezzzzezeeezeeezeezzeezzezzeeezeezeeeezezzzzezzzzzezezezzzeeeezeezzzzzzeezezzezeeezeeezzzzezeeezezezzzezzzezezeezzeezeezeezzzezzeeeeeezzzeezezeezzzeeeeeezzzezzzzzeeezzzeezzzezeezzzzzzzzeeeezezeezzzezeezzezezzeezeezeeezzzezzzezeeezezeezzeezzeezzzeezezzeeezzzzzzzzzeezezeezzzzezezezzeezzzzeeeeezzeezezzzzezzzzezzzzzezezzzzeeeeeeezeeeezzzeeezzzzezzzezzeezezeezzzeezeeezzzezeeeezzzeezzzeezeeeezzzzzzeeezezezeezzeezezzezezzeeezeeezzezzzeezzzezzezzzzezzeezeeezzeeeezeezeezzzezzzzeezzzeezzzeezzezzezzzeeeeeeezzezzzzzzezzezzzezeeezzeezzzzezzeeeezzzzezeezeezeeezezzzzeeezzzeeezzezeeeeezzezezzezzezzezeezzzeeezzeeezzzzezzezeeezeeeezzzzzzzzeeezeezeezzzzzzzezzeeeeezeeezzzeezeeezezeeezezezzzzzezezeeezeezezezezezzzeeeeeeezzzzeezzzzzzezzzzzeezzezzeeezzeezezeeezzeezzzzeeezezezzzzeezeeezzezezzezeeeezzzezzeezzzeeezzzeeezzezeezeezzzzezzezeezezezzzzezezzzeeezzezzzeeeezezzeeeeezeeezzzzeeeezzezzzeezzzeeeezzeeezzezzzezzezeeeeeeeeeeezeeezzzzeezezzeezzzeezzezzezezeeeeeezezezzezzezeezzezezzzeeeeezzeezezezezzzezezzeeeeeeeeezzzezzzeeeeeezeeeeeeezzzzzeeeezezzezeeeeezzeezeezeezeezezzzzzzzezzzeezzzzezzeeezezzezezzeezeezzzzzezeeeeeezezeeezezezzzzeeezezezzeezzezezzezzzezzezeezzeezeezzezzeezezezezzzeezeeeeeezzzzezeeeeeezezzzzezeezeeezzezezzzeezeezzezzeezzzzzezezeezzzzezzzeezeezeeezzzzzeeezeezeezzzzeeezeeezeezzeeeezeezzzeezezzzeeeezeeeeeeeezezeeezzzzeezeeezeeezzezzzeezzezzzezzeeeeeeeeezzeezzzzezzezzzzzeezeeeeeezzezeeeeezeeezeezzzeeezzeezeezzeeeeeezeeezzzezzeezzzezzzeeeezzezezzezzzeezezezzezezeeezezzezzzzzezeeeezeeezeeezezzezzeeezeeeeeezezeeezezzzzzzeezzezzezzeezzeezezzzeeeezzzzzzeezezzzzeezeezezzezezeeeeeeezzeezzeezeeezezeezzzezeezeeeezeezzezezzezeeeeeeezezzezzeeeeeeezezezeeeeezeezzzzzzzezzzzzeezzezzzzzzeeezezeezzzeeeeeezzezeeezezezeezeeeezeeeeeeezzzzezeeezezeeezzeezeezezzzezeeeeeezzzzzzzezezeezeezzzezezzeeeeeezzeeezzeezezzzeezeezzezzzzzzeezzezezzzeezezezeeezzzzzzeezzeezzzeezezzeeeezezezezzzeezzzeezezzzezzzezzzzzeeeezezzzezezzeezzzeezeeezzzeeeeeeezzezzzzeeeezzzzzezzzzzeeeeeeeeezzeezezzeezeezzezzzzzezzzezzzezeeezzezeeeezzeeezeezzeeeeezeezeeezzeeezzeeeezeezzzzeeezezezzezzezzzzeezzezzezzzezzezzzezeezzezeeezezzzzzeeeeezeezzzeeezzeezezeezezzzzzzeeeeeeeeeeezzzeezzzezezzzzeeezzeeeeeezzzzeeezezezeezezzzeeeeeezzzezzzzeeezzzeeeeezezzeezzezezeeezeezzezezzezezeeeezzezzezeezeeezeezeezeeeezzzezzeezezzzzzezzzzzeeeezeezzzezzeeezzeezzzzezeezezzeezzzezezzzezeezzzzeezzzzzezeeeezzzzzezezzezzeezezeeeezzezezzzeezzezzzzzeeezezzzeezeeezzezzzezzzezzzzezzezezzzzzzeeeezzzzeezzeeeezzzeezeezzezeeezzeeezeezzezeezeezezzeezzezzezzzzzezeeeeezeeeezezezzeeezzzzzzzzzezeezzzzzzzzzzezezzzzezezzezezzzzzezeezeeeezezzezzzezzeezezzezzezeeezzezzezezzezezezeeeezeeezzzzzezeezezzzeezzzzzzeezezeeezeezzzezzzezzzzzezzeezeezezezeeeezzeezzzeezezzezeezezzeeeezzzeeezzzzeezezezzzeeezezeeeeezzzzzzeezeeezzeezzeeezeezeezezzzzeeezzzzzeezeezezeeeezezzezeeeezzeezzzzzzzeezezezzeeeezezezeezzezeezeezzeezeezzzezezeeezzezzezeeezzeeeeeezeeeeezzzzzzezzzzezeeeeezeeeeeeezzzezezzeeeeezezzzezeeezzzeeeezeeezzzezezzzeeezezezzzezzeeeeeeeeezezeezzzzezzezezeeeezzezeezezzzeezzezzeezzzzzeezezzezeezzzzezeezezezezzzzzzzzzezezezezzzezzzeezzzzeeezzeeezzzezezzeezeeezeeezezzzezzeeezzzeezezezzezzzzzezezeeezeezeezezeeezeezzzzzzzzzzzzezezeezzzzzeezzezeezezzeezezezzeeeeezezzeeezzzeeeeezezezzeeeezzzzzeeezzezeeeeezzzzzzzzeezezzeezeezzezezezzeeezzezzzzezzzezzezeezeezeeeezeeeezzzezzezzzeeeeezeezeeezzzzzzeeezeezezeeeeeeeeeeezezezezezzzzeeezzezezzzezezzezeeeezzzzezeeeezeeeezzzeezzzeeeeezezezzzeezeeeezezeezzzzeezzeezzezzeezzzzzezezeezzzzeezezzzzezzeeeezezzezzzezeezezeeeezzzezeezzezeezzezeeeeezzzzzzezeeeezzzzzzezeezezzzzeeezeeezzzezezezzeeezeeezezzeeeeeeezzzeeeeezezezzezzeezzeeeeezzzezzeezeezezezzezezzeeeezezzzeezzzezzezzezeezezezzzeezzeezeeeezezzzeezzeezzeezezezzzzzeezeezzeezzezzzzzzezzezzzeezezezeezzezeezzzeeezzezzeeezzezzzezzeezzzzzzeeezzezeeezzzzzzzeezeeeezeezezeezzzeeezezzzeeezzezeezezzzzzeezeeeezzezzezezzzezezzezeezezezezezeeezezzzzezzzzeeeeeeezzzzezezezezeezzezzezzzzeezezzeeezzezzzeeezzeeeezezeezezezzezzzzzzzezeeezeezzzezeeeezeezezzzezezzzzeeezzzzzzeezzzeeezzezzzzeeeeeezeeezezzzeezezzeezezzzezezzzzzezezzzzzzeezzeeeeeezezezezzzzzzzeeezezezezezzzeezeeeeezzezezezeeeezzzeezzeeezezeezzezzeezzzzzzeeeezeezezzeeezzezzzzzeeeezezeezzeezezeezeezezeeezeezzzzeezzzzzezezzzezezzezzezezzeeeeezezezzeeeezezeezzeeeezeeeeeeezezeezzeezezeeezezzzezezeezzeeeezezzezezezezeeezeezzezezzzeezeeeeeeeeezezzeezzzeeezzzzeezzezzzeezzzezezeezzezzzzezezzezzzezezeeezzezzzezzzzezzezeezzzezzzzzzzeeeeeezeezzezzzeezezzezezezzezzezzeeezzzeeezezzeeeeeezeeeezeezzzezezezzeezezezzeeezzezezzeeeezeezzzzzeezezezeezeeezzzzzzzeezzeeezzeezeezzeeezezzzezezezeezeezeeeeezezeezzezzeezeezeezzezzzzzezezzzezeeezezzzezeezzzzezzezezzzzzezezezzzeeeezzeezezzezzeezzezezzezzzzezzzezzeeeezeeeezzeezzezezzeezzzezezzezeezezzezzeeeezzeezezzzezeezeeezzzezzeeeeezzeezezeeeeeeeezzeeezzezezzeezeezezzeezeeezeezzeezzzzzzeeeezeeezzzeeezezzezzezzzzzeeeezzzeeeeezezzeezezezzeezzeezezeezeezzezeeeeeeeezezzzzeezeezezzeeezeeezzezzzzezezezzeezzeeeezzzzzeezzzzzzzzezzzeeeezzeeeeezezzzzzzzezzzeezeeeeezezzeezzzzzzzezeezeeeezezzezzzeeezzzzeezezezzzzzzzzzeeeezeezzeezzzeezzeeeeezezzzzeezzzzezeeezezeeeeeeeezzeezezezzzeeeezeezeezzeezeeezzezzeezeezzzezzeezzeeezzzezeezzezzeeeeezeezeeeezezzzzezeeeezeeezzzeezzezzeezzezeezeezeezzzzzezezeezezeeeeeezezezeezzzzzezzzeezzeeezezezzzzeezeeeeeezzezezzeezzezeezzeeezzzzezezezzeezzzeezeeeezzzzzzzzzzeeezzeezzezzzzezezezzeezeeeezzzeeezezezzeezzezezzzzzezeezezzzzezzeeezzzzzezzzzzeezzezezzeezeezzeeeeeezzzezeeezzzzezzzzzzezeezzzezeeeeeezzezzzeeeezezeezzeeeeezzzeezzezzeezeezzzzzzeezeezezzzzeezeezzeeeezeeezeeezzezezezeeeeezeezeeezeeeezezzzeeeezzezeezzeeezzezzzzezzezzzezezzzezezzeezzzzzezzzezzeeeeezezezzzzeezzeeeeeeeezezeezzzzeeezzzzzeezzeeezeeeezeezezzzzezeezeeezzzzeeeezezzzzeezzeeeezzeeeeeeeezzzeezzezezezzezeeeezzezzzzzzzezezezzeezeeezzzzzezzezzezzzzeeeeeeezzzezeezezezeezzeezzeezezzzezzeeezzeeezeeeezzeezeeeeezzzeezzzzzzezezezeeezezeeeezeeezzeeeezezzzzezeezezezzezeeeeeeeezeeeezzeeezeezezezzeeezeeeeeezzezezeeezzzzezzezzeeezzeeezeezezzzzezeezzeezzzzzeezzzezzezezezezzezezezzezzzzzzeezzezezzzzezzzezzzeeezzeeeezezzezezeezzzzeeeezzzzzezzezzzezzezeeezezeeezezzzzzzzezezzezzeezzezzzzzezzezezezzezzeeeeezzeezzezzeeezzezeezzezeeezezeezzzzezeeezezeeeeezeeezzzzzezzeeezzezzzezezzeeeeeezzeeezzeezeeeezeezzzezzzeezzzzezzzezzzzzeeezzeeeezeeezeezeezzezzzeezzeezzeeezezeeezezezeezzeezezezeezeezezezzzeezzzzezezezzzeezzeeezzzzezzeezeeezezzzzzezeeezeeeezzezezeeeezezeeezeeeezeeezzzezzzezzzzzezeezezezzzezzzzzezzeeezezzezzezeeeezzzeeezezzzzzzzeeezzezeezeezzzzezzezzezzezezzezzezeeeeezezezzzeezzezeeeeeeeeeezzezzzezzzeezeeezeeezeezezzeeezzzzzzeezezzeeeeezezzeeeeezeeeezzzeeeezzezzeeeeeezezzeezzeeezezzezzzzezeeeezezezzzzeeeezezezzeezzzzzezzezzeeeezeeezeeeezeeeezzzeezzeezzeeeezzezzzezzeezezzzezezezzeeezezeeeezeeezezezezezeeezezzzezzzzeezezzeezeezezzeeeezezzezeezzeezzzezzezeeezzzeeezeeeezzzzzzzezeezzzzeeeezezezezzzeezeezeezezezezeeeeezezzzezzzezzzzzzzeezeeezeeezezzzeeeezezezzezezezezezeeeezzeeezzzzeezzzeezzezzzzzzezzzeeezezeezzzzeezzezeeeezeeezzzezzeeeeezzezzzezzezzzzzezzeeeeezezezeezeezzezzzeezzzzzeeezezzzezzezzzezeeeeeeezeezeezezezezezezzzeeezeezzzzeeeeeeezezzzzzeeeeezzzezzezzzezzezzzezezzeezezeezzezzzzzeezzeezeeezzzzzezeezezezezzezeeeezezzzezzzzezezzzeeezeezzeeeezzzzeezeezezzzzeezezzzzezzzezzzezzzzeeeezezzzezzezezeeeeezezezeeeeeeezzeezzzezzzzeezzzzzeeezzezezzezzeezzezezzzezezzzeezeeezezzzezzezezeeezzezeeeeezzeeezeezeezeeezzeezezeezezezeeeeeezzzeezeeeeezzeezzeezzzezezzzeeezzezeeezzzzeezeezzzezeezzzzezezzzeezzzzeeeeezzezezzeezezzeeeeezezezzezzzezzzeezzezezezzzzzezezezzeezzzzezzzzeezeezeeezezezzzeeezeezeeezezzeezzezzeezezzzezeezzezzezzzeezeeeeeeezzezeezzezezezeeezeeezezezezzezzeezeezzezzzezeeezzeezeeeeezzeezzzeezzezzzzeezezzzeezzzzzezzeezzzzzzzeeezezzzzzezzezzezzeeeeeeeeeezeezzeezzezeeeeeezeezeezzeeeeezeeezzezzezzeezezezzezzzezzezzzzzzezeezezzzezezezezeeeezzzeezzzeeeezzzezzzzzzezezeeezzezezezzzezzeeeezeezzeezzezezzezeeezeeeezezzezeeeezzzezzezezezzzeezeeeezzzzeezezzzzzezzzezzezeeeezzzzzzezzzzzzeezzzzezzzezeeezezzezezezzezezzzezeeezzzzzeezezzzzezeeeezzzeeeezezezeezezeeezzezzzeeeeeezzzzezeezeeezzeeezezeeeezzzezzzzezeezzeezzeezzzzzzezezeeeezzzeeezzezeeeeezeeezzzezezzzezzezeeeezezzzzzzeeeeezeezzeeeeezezzzeeeeeeeezzeeezzzzeezezzeeeeezzezeezezzeezezeeeeeezezzzzeeezzezzzzezzeeeeeezeeezeeeeeeezzzzeezezzzeezeezzzzzeeeezzzeeeezezezeeeeeezezzezzzezeezzeeeeeeezzezzzezzzzzeeezeezeezeezzzzzzzezeezzezzeezzzzezeeezezeeeeeezezezzeezezeeeezezeeeezeezzzeeezeeezzeeeezeezezzzezeeezzezeezezeezzezeeeezzezzzeeezzzeezzezezzzzzezzeeezezzzzezezzzzeezzzezzzeezezeeezeeezeeeeeeeeezzzezezzeeeezezezeezeeeeezeezzzeezeeezzzezzzezezeezeeezezzezzezezeeezzzezzeezeeeezzzeeeeeeezezezzeeezzzzzzzezzzeezeeezzeeeezezzzezezezeeezezzeezzeeezzeezeeeeeezzzeezzzzezeezzzzezzzeeezzzzeezezeeezzeezzezzzezzzeezzzezzeeezezeezzeezzzeeeezzeezezezzeeezezzezeezzezeeezeezezeeezzezzzeeeezezzeeezezzzzeezzzzezzeeeezeeeezzzzzezeeezeezezzzzzzzezzeezeezzzzzzezzezzzeezezzzzzzzezzeezeeeeeezzzzeezezeeeezeezezzzzezezeezzeezeeezzzzzezeeezzzzzzzezeeeeeezzeezzezezeeezzeeeeezeeezezzzzeezzeeezezeezzzeezezeezzzzzezezeezzezezzzeeezezeezezzzzzzeeezeeezeezzzezezzzeeeezeezzzzeezezezeeeeeeezezzezzzezzezeezeeezzezezzzzzzzzeezeezzzzzezzeezzeezzezezeeeezezeeezzezzzezzeezezzeezzzeeezezzeezzezeezezezzeeezeeezeezeezeezzezzeezezeeeeeezzezeezeezezzezeezeezzezzezzeezzzezzzzzezzzezzezeeeeezzzzezeeeezeezeeeezezezeeeezzezzezeeeeezeezezzzezezzzezeezzzeeeezzzzeezzzezzezeeeezzzzeeezzzzzezzeezzeeeezzzezzeezezeeezzzzzezzzeeeezeeeeeezezzzzzzzezzzzzzezzezezeeeeezezeeezeeezeeeeezzzezeezzzzzezzeeeeeeezeezeeezeezeeeeezzzzezzzzezeeeeezzzeezeeezeezzzeezeeezzzzzezezzzeezeezezzzeezzezzeeeeezzzeeeezzezzzezezzzeezzzeezezeeezeeezzeeezezezzeezzeeeezeezezzzzezeezezzeezeeeeeezezzeeezzzezzeezzzzezzezzzeeeeezzzzzeezzzezzeezezzzeeezzeeeezzeezzzezzzzzezzzezeeeeezzeezezzzezeeezzeeezeezezzzezeeeezezzezzezezzzezzeeeeezzezeeezzeeezzzzeeeezzzezeezezezzzzezzeeeezzzzzeezzezeeeeeezezezeezezezezezzezeezezeeezezeezeezzzzzzeeezzezzezzezzeezezezeezezzzeeezzeeezzeeeeezezezzzeeeezzzzzzezeezeeeezzezzeezeezzezzeeezezeeeezzeeeezzezeeezezzezeezzzzezezeeeezzzzezzezezezzzeeeezeeezezezzezzzzzzeezeezzzzeeezzezezzezezzezzezzzzeeezeezzzzeeeeeeeezeezeeeezzzzzezzzzzzzeezezzzzezezzeeeeezzzezzezeezezezezzzeezzzeeezeeezzzzzezeeezzeezzeeeezzzezzzeeezzeezzezeeeeezezeeezeezzezzeezzeezezezzezezezzeezeeeezzeeezezzezezzeezezeezezzezeeezeezzeeeezzzezeezezeezeeeeeezzezeeeezzezezzeezezzzeeezeezzzzezezeeezezeezzzeeezzzezezezzezeeezzzeezzezeezezeeezezezeezzzzeeeeezzeezezzzzzzzezezzzzeezzzezzzzzezzzzzzeeezzezzzezzezzzzeeeeeeeezeezzzzezeezeezzzzzzezzeeeezzzzeeeezzzzzzzzezzzeezzzzzzezezezzezeezezezezzezezzezzzzeezzzzzezezezeezzezzzzzzezzzzzezzeezzzeezzzzzzzzeeezezzzeeezezzezezezzeezeeeezezzeeezeezzzeeezeeezeezzeezezezzezezzzeeeeeezeeeeezeezzzzezzeeezezezeezezeezzzezzezzzzzzeezeezeezzzezzeeeezzezzezzzezezezeezezeezeeezzeezzzeezeezzeezeezzzezezezzezeeezeeezzzzezeezezeezzzezzzzzzezzezzzzeeeeezzzzeeezezeezzzezezzzezzezeeeeeezeezeezzeezezzeezezeezzzeeeeezzezezeeeeeezezzzzzzzzeeezezezeeeeezzezzzzzzzzezezeezeezzeezzzzeeezzezzezeeezezzeezezeeeezeezeeezzzezezzeezeeeezeeezzzzeeezzeeeezezezeezezzzzezzezzzzzzzzzezzzzezzzzzeeeezzezeeeeeeezzeeezzeeezeeeeezzzezeeeezezzezzzzzzzeezezzeezezzzzeezzezeezeezeeeeeeeeeezezzeezzzzezezzeeeezezeeezzzzzeezezzezezeezeezezzzezzeezzeeezeeezzezezezzzzzzezezzzzezezzeeeezeezzzzezzezzeeeeezzzzzezeezeezzezeeeezzezzzeezezeeeezzeezeezzzezeeeezezzeezzzezzezzzeeeeezzzzezzezezeeezzeezzezzzeeezzzzzzzzzzzzeezzzzzezezzzzeeeezzeeeeezzezzzezezzeezzezeeezeeezezzeezzzeeeezeeezeezezzzeeeeeeeeezezezzzzzeezzzezzezeezzeeeeeeezeezezzzzzzzzeezzzeezeezezzezeezeeezezzeeeeeeezzzeeezzzzezzeezeeeezezezeeezzeezzeezeeezzeeezzeeezezzzzeeeezzzeeezezzezeeeezezzeezeezzeeezzezeeezzezezeeeeezeezezeeezzzzzezzezezzezezezzezzezzeezzzzezzzzzzeezzezzzeeezzzeeeeezeezeeeezezzezzzeeeeezezzezzzezezezeeezzezzzzezzeezzeezzzeeezezeeezzezzezezezzeeeeezeeeezeeezeeeezeeeeeeeezzezzeeeeeezzzezzezeeeezezzzzzezzzzeeeezzzzzeeeezeezezzeeeeeezezezzzzezeeeezeeeezezeezeeeeeezzezeeezzzzeeezzezezezzzeezzzeezeeezeezzeeezezzezzzezeeezzeeezeezezeeezzzzezzezezzeeezzezeeeeezzzzezeezezzezzzezeezeeeeeezzezzezzzezzeezzeezzzeezezeezezeezzzzezzzzzzzezeezzeeezezeezezezzeezzeezzeeezeeeezzezzeezzezezzeeeeeeezzzzzzzzzeeezeezzezezezzezeezzezzzzeezzeeeeeezzzezzzzeeeezezeeezzezezzezzzezzzzeezeeeeeeeezzezeezzzzeezeeeeezeeeezeezzezezeeezzeezzzeeeezeezeeezzzeezeezeezzzzeeezezzezeezeeezezzeezzzzzezeezzezzzzzzzeezezezezzzezzeeeeezzzzeeezzeezezeeezzezzzeezeezzeezezezzeezzezezeeezzeeezeezezzezezezzzzzeezeezzeeezezzeeezzeezzezezezzzezzzezzeeeezeeezzeezzzezzeeeezzzeezeeeezzeezezzzezeezzzeezzzzeezzezeeezezzeeeeeezzzeezezzzeezezeezeeeezezzezzzzzzzezzeeezzzzzeeezezzzezzzezzzezeezeezeezzzezezzzeeezzeezezzezzeeeeeezeezezzzezezzezezeezzeezzzeeezzezeeezzeeezezzezeezezzzeezzezzzzzezzzzeeeezezeezeeezeezezeeeeezezeeeeezezzzeezzeeeezzeeezeezzzzzzzzzeeeeezzeezzzezzzezeeeezeeezzezezzezezezzezeeeezezzzzezzzezeeeezzzzeeeezzezeezzzezzzeezzzezzeeeeezzeeezzezzzzzezzeeezezzzeezeeeezeezezeezeezzezzzzezeeeeezzzzezeezeeeezeezzzzeezeeeezeezzzezezezezeeeeezzeezzzeezzzeeezzeeeezezzzzzzzzzeezzezeeezezzzezezzezeeezezezeezzeeezzeezeezezezzzzzeezezezzzzzezzezezzeezeezeeezzezzezzzezezezzeeezeeezzzezzzzeeezezeezezzzezzeezzzzezezeeeezzzezeeezzezzezeezzzezzeezzzzezeezezeeeezezezeeezeezeezzeezzezezzzezzzzeezeeezeezeeeeezeeeezezzezzezzzzzeezzeezezezeezzezzzeezezeeeeezzeezezeezeeezezezzezzzzzzzzeeezzezzzzzzezeezzeezzezzeeezzeeezeeezzzeeeeezeeeezezzzzzeeezzzzeezezezezezezzezezzezeezeeezezzeezzzezeezezzeeeezezzezezeezzeeezezzzezzzezezzezezezeezeezzeeezezzezzezeeeeeezzzezzeeeeezeezeeeezzezzeeezzezzzeezzezeeeezzzzzzzzeeeeeeezezzezeeezeeeezeezzzzeeezzzzzzzeezzeeeeezzeeezzezeeeeezzeezeezzezzzeeezezzeeezeezeeeezzezezzeezeezzzzzezzzezezezezeeezzeezzzezezzzzeeeezezzeezzeeezeezeezeeezeezezeeeezezzzezzezeezzzzzzeeeezezeezzeeezzzzezzeeezzzezeeezeezzzzezezzzezeeeezzzzeeeeezzzzzezzezeeeeeeeeezezzezezzzezzzeeeezezeezzeeeeeeeeezeezeezezezzezeeeezzzezezzezzzezzzezeezezezzeeezezzzeeezzezezzezzezezeeeeeeeezzezeezzzzezzzzeeeeeezzezzzeezezzzezezeezezzezzeezezzezezzeezzzzeezzzezeeezezeezezezezzezeezzezzzzzzzzeezezezzeeeezzzeezeeezzeeeezeezzeeeeeezeezeeeeezeeeezzzezeeeeezezeezeezzeeezezzzzezzezeeeezzezzzzzzezezeeezzezzzeezzzzzzezzezzzzzzeezeezzeeezezzezeeeeeezezzzezeezeeezzzzeeeezezeeeezezezzezzezeeeeezzeeezezzzzezezeeeezezzzzeezezezezzzeezzzzeeeeezzeezezezzzezezezezzezzeezezzzzzezezeeezezzzezezzeezzeezezezezzezzezeeeeezzzezeeezzezzzeezzzzzezzzeeezzzeeezzeezzzzzezezzezzezezezeeezezezzzzzeezeezezeeeezzzzzzeezzezzezeezzezzeeezzezzeeeezeeeeeezezeezzezzezeeezezzeezezzzezzzezeezezezezzezeezzeeeezzeeezzeezzzeezezezezzezzeeeezezzezezezzeezzzzzeeeezeezzezzezezezzeeeeeeezezzeezzzzezeeezezzeezzzzzezzeezzzzezeeeezzeezzeezzeezzeezezzeeeeeeezzzzzzzzzzeeezeezzzezezzzzezeezzzzezzzzezezeezzeezzzezezeeezzzzezeeezeeezzezzeeeeeeeeezzzzezzzezeezzzeezzezezeeezzzeeeeezzeeeeeeeeezzeezezzzezezzeeezezzezezzzezeeeeeezzzezzzeezeezzzzzzzzezeezzzzzzzezezezzzezeeeeezzezeeeezzezezezeeeezeeeeezeezeezeezzezezeezzzezzeezzzzeezeeezzeezezezeezzeeeeeezezeeezezeeeeeeeezeezzezzeeezezeezzezezezzzeeezzeeeezezzeeeezzezezzezeeezzzzzezzzzeezeezeeezeeezzzeeezeezeezzezzezeezezezzzzzezzzeezeezezzezeeezezeezzzzeeezzeezeeezeeeezezzzzzzzezzeezeeeeeezezezeezezzzezeeeezeeeeezzzeeeezzeeeezzeeezzezeeezzezzeezeeezzezezezzezezezeezezezzzzzezeezzezezzzzzzezezzezzezezezzeeezzzzeeezeezezzzzzzezezzezzeeezezzzzzeezzezezeeezzzeeeezzeeeezezzzeeezezzzzzzeeeezezezzzezezzzeeeezeeezzeezzezezeezzezzzezeezzzzezeeeeezzzzzezezeeeeeeezezzzezzzeeezezezzeeeezezezezzzeeezezeezzzzezezezezzzzezezeeeeezzezeeezeezzezzeeeeezzezzeezzeeezzezzzzeezzzzeeezezezzezzzeeeeezzezeeezezzzezzzezzzezzeeezezzzzzeeezezezzzzzeezzzzzezezeezzezezzezezzzezzzzzeezzzeeeezzzeezezezezeeezezzezzzeeezezezezeeezezezezeezzezzeezeeezzezzzzezzeezzzzzeezzezezzezeeeeezezzeezezeezzezezzzzzzzzeeeeezzzeezeezzezzeezeezzzeezeeeeeezezzzeezezezzzzzeeezzezzzzeezzezzezzezzzezeezzzeeeezezeeezeezzeezeezzeeeezzeeezezzezzzeezzeeezezeezeezzeeezeeezezezzzzzzeezzzzeeezezezezezzzeezeeeezezzezezeeezeezzeeezzzzzzeeeezezezzeeeeeezezeezezzeezzeezzzzzzzzeeeezeeezzzzzeezzezeeezeeezeezezeezzeezeezzzzzzeeeeeezezezeezzzezezezzezzzezezzeezezzeeezezeezzzeeeezeezzzeeezzezzezzeeezzezeezzzeeeeezeezzezzeezzezeeezeezezezeeeezzzzzezzeeezzzeezeeezzzzzzzzzezzeeezzezzeezzeezzezzeezezezzzezeezzzzzezezzzezzezeeeeeezezzzezeeezeeeeezzzeeeeeeeeeezzeeeeezezzzezeezzezeeeezzezezezezezzzzezezzzzzzeeeeeeezezeezeezzzezeezzzezezezeezzzezezeezzeeezeezzezzezeezezzeezzeeeeezeezeezezzzzeeezezeezeeezzeeezzzeeezzeezzzzzzzezzzzzzezzzzzeeezeeeeezzzzezzezzezzeezzezzezeezzeeeezeezzezzzzeeezeezezzeezzzeeezzeeezzeezzzezzezzeeezezezzezzzeeeezezzeeeeezzeeeeeeeezeeezzeeeezezezeezzeezeeeeezzeeezzzzezezzezzzzzeeezzzzzzeeezeeeeeeezzezezzezzeeeezeeeeeezeezzeeeeeeeezzzezzeezzzezeeeezeezezzzzzzzzezzezezezezeeezezzzeezeeeeeeeezzzzzezzzzezzzeeeezeeezezzeezzzzzzeezeeeeeeeeeeezeezzzeezzezzeeeezeezzezezzezezezeeezezzeeezzeeeezeeeezezzzzzzezzzezzzzezezzzzzzezezeezzzzeezzeeeeezezeezzzezzzzzeeeeezzezeeezezzzezzeezzeeezeeezzeeezezzzezzzeezzzzezeeeezzeeeeeeezzzezezzeezezeeezzezzezzzezzeeezezzzezzezeeezeeeezzzeeezeeezeezzzzezzezzezzeeezzzezzeezzeezeeezzezezezezezeeezzeeezzzzzzezeeezeezzzzzzezzezzeeeezeezzzzzzeeeeeezezeezezzezzzeezezezzzeeezezzeeeeeeezzzzzeezeezzezzezzzzeezzeeeezzzzzeezezezzeezeeeeeezzezzzzzezezeezeeezzzeeeezezeezzzezeezezezzzezzezeeeeeezezzeezzezezezzzzezeezeeeezzzeeeezeezzezezzzzezzzezzezzzeeeeezzeeezzeezezzzzzeezzeezezzeezzzeeezzezzzeezezzeeeeeezzeezeezezzzzzzezezzzzzzzzzzzeeezzezeezzzeezzzezzzeeezeeeezzzeezzzzezeezezezezeezzezzzzezzezeeezzzeeeezezezzzzeezezzezeeezzeeezezzeeezzzezzzeeeeeeeezzzezzzzzezezezezzeezeezzzzeezzzezezzezeeezzzzeezzzzeeeeeezezzeeeezeezzzeezezzeeeezzeeeeezeeeezeeeezeeeezzeezezzzzeezeezzzzzzzezeeeeezezeezezzzzeezzzezzeeezzzeeezzzeezeezezzzeeezezzezezeeeezeeeezeeeeeeeeezzezzzzzeeezzezezzzzeezzzzzeezezezeeeezeezeezeeezezzezzezezzeeezeeezzzeezezeezezezeeeezzezzezzeeeezezzzezeezeezeeezeezzeeeezzeeezeeezzzzzezezeeezzezezzezzeeezzzezeeeeeeeezzzezzzzeezezeeezzezzzezeezzzzzzzezzezzezeezzzzeezeeeezzzezeeeeezzzeezzzezzezzezezeezzzeeezezzeeezzezeeeeeezeezezezzzezezezzezezzzzezzzeeezzzezeeezzzzezezeezeezzeezzzzzeeezzezeezzezzzzzeeezeezzeezzezzezzezzzeeeeeezeeeeezzeeezeeezezezzezzzeeeeeezzzezezzezzzezeeezeezzzzzeezzzeeezezeeeezeeezeeeezezzzeeezeezezezzzzzzzezezeeeeeezzzeezzzezzeeezzezeezezzzzzezzzzzeezzzzzezzzeezzezzezezeeeeezzzeezzzzeeezezzezezezzeezeezezeeeezzzeeeezzzzzezzzzzeeeeezezeezzezeezzeezzezeezzezzzzezzeeezeeezezezezezzzeeezzzezezezzzzezzeeezzezzzezezeezezzezezzezzeezeezezzzezzezzzeezzzeeeeezeezzzeeeezzezezezeezzeezezzezezzzzzezzeeezeezzzzzezzezzzzzzzezezzezzzeezezeeezezzeezeezezezezeeezeeezezezzzezezzeeezzeeezzzezzzeezzezzzezezzezeezzeezezeeezezeeezzeeezzezezezzzzeeezzzzzezzzeezzzzezezezzezeezzzezezzzzzzezezzzzzzezeeezeezzezezzzzezzzzzeeezzzeezzzeezezezezzzzeeeezzezzzezzzezeeezezzzezezeezzeezzezzzeeeeezzezzeezzzezezeezeeezeezezeezzeeeezeezezzzzzezzzzezezeeezezzeezzeezezeezzezeeeezeezeeezezeeezeeezzeezzeezzzzezeezeeezzeezeezeeeezeezzzzzzezzzzezeezzezezeeeeezezezeeeeeezezezezeeezeezzeeezzzeeeeezzeeezezzeeezzzzzezzzzeeezzzzeeezzzeezezezezzeezzeeeezezzezeeeezzezeezzezzzzzeezeeeezzeeezzzzeezzeezeeezezezezezezezezzeeeezeeeezzeeezezezezeeeezzezezeeezzeeeezzzzezzzezzzzzzzeezezeeezeeeeezzezzzzezzzzeezzzezezzzzzeezzzezeezzzzeeeeeeezezezeeezeezezeezzezzzezzzzzezzzzzzzezezzzeezezzzeezzezzzzzezzzzzzezezeezzezezzzzeezzzzzeezezzzezzzzzzezzzeeeeeezezzezezzzzzeeeeezezzezzzzzzeezzeeezezzezzzzzzeezzeezeeeeezzeeeezzzzezezzzezezezeeeezzeeezzzzzeezzzezeezzeezzezzzezzzzzzzeeezezzezzzezeeezeeezzeeezzeezzeeezeeeezeeeeezezzzeezzezzezzzeezezzzzeezzzeezzeeezeezzeeeezezezezeeeeezeeezeeezzeeeeeeeezezeeeeeeezezezzezezzeezeeezzzzezeezzzzzzeezzezzzzeeeeeezezeezzzzeezzezzeeeezzzeeeezzzezezezeeezezzzeeezezezzeezezzezzeeezzeeezzzzezezzeezzzezezeeezezzzzezzezzzezzeezezeeezeeeezeezezzezezzeeezezeezezzzezeezezzezeeezzeezeeeeezzzzzezzezzzzzeezezezezezezezzeezezezzeezeeeeezzzzeezezeezeezezzeezeezzeezeeezzeeeeeezzzezezeezeeeezeeezzzzzezeezezzzezzzzeeeezzeezzzeezzzeeezzzzeeeeeeeezzzezzezzzeeeezeezeezzzzeeezeeeezzeeeezzzeezeeeeezezzzeezeeezezzezzeezzzeezzzezezeezezzezezzzeezezzzzzzzzezeeeezzeeeeeezzeeeezzezzeeezezzzeeeezzeezzezzzzzzeeeeeeeezezezzeeezezzeezezzeeezeezzzezzeeeezeeezzeezeezeezeezzzezzzeeeezezzzzzzzzezzzzezeezeeeezezeeezeezeeezzezzeeezezezzeezeeezeezzzeezeezzzeeezzzezezeezezeeeezzezeeezzezeezzzzzzeeezzzezzzezezzzzzeeezeezzeezzzzezzzzeeeeezezzeeeeezzzezzzeezzzzzzzeeezeezzeeeeezzezzeeeezeezzzezezzzzeeezzeezeezzzeezzeeezezzeeeezezeeeeezezzezezezeeeeezezzzzezzezzzzzzzzeezzezeeeezzzzzzeeeezzeeezzezezzeeeeezzezeezezezzzezezeezzzzzzzzzeezzzzeezzzezzzzezzzzzzezezzeeezzzzeezzzeeeeeeezzezzezeezzeezeezzzeezezeezeezzzezzzeeezzzeezezezzezzzeezeezeeeeezzeezeezzeeezzezzzzzezeezzzeeezeezeeezezezzezezzezzeeezezzezzzzeeeezzzezzezzezezeeezzzeezeezezzzzzezzezzzzezezezzzezezezzzeeeeeeezzezzzezzzzeezzeezzeezeeeeezezezeezeezezezzeeeeezzzzeeeezezzeeeezzzzzzeezzeezezzeeezzeeezeezezezezeeezzzzezzzezeeeezezezzzzezzzzeezezzzeeezzzzzzezezeezzezeezezeeeeeeezezzeezeezezzezzezzezezezeezeeeezzzeezeezzzezzezzezeezeeeeeezzezzzzzeezezezezzzezzzzzezeeeeeezzeeeezzzzzezzeezzzzeeezeeeeezzzzzezezzeezezeeezeeeeeezzeezzzeeezzezeeeezezeeeezeezzzzeezeezeeeezezzzeeezzzzzezzezzeeeeeeezzzezzzezezzezeeezzezzzzeeezzzzzzzezeezzzezzeeezzeezezzzezezzeeezeezzeeezezeezezezezeezezezzzeeezezeeezeezezzzezzezeeezzezzzeezeezezzeeezzeezezzezzzeezzezzeeeeeeezzzeezzezeeezzeezeezzzezezeeeeezzeeezezzeezzezeezeeeezeeezeeezzzzezezeeezzzzzeezeezeezzeeezeeezzeeezezzzezzzezeeezezezzzzzzeezezeeeezeeeeeeeezeezeeezezeezzezzezezezezzzzzezezzzzzzzeeeezzzezzezezezeezezezezezzeezzezzezeeeeeezeezzeeezzzezezzzezezezzeezeeeezzzzzezzeezzzzeeeezezzezezzezeeeezeezeeezeeezezezzzzzezzzzeeezezzezzeeeeeeeeeeeezzezzezzeeezezeeeezzezeeeezeezzeezzzeezzeeeezzzzezezzezeeeeezzezezeeezzzzeeezzeeeeezezeezezzzzzzezzezzeeeezzzzzzzzzzzeeezeeezezzezeezeezeezzezeeezezeeeeezzzzeezzzzzzzzezzezzeezezzzezeeezzzeeezzezezezeeezezzeeeezeezezezzezezzzzezzezezzzzzzzezzeezzzzzzzezzzeezezzeeeezeeezeeeezeeezeeeezezzzzzezzeeezzzezeeeeeeeezzzezezzeeeeeeeeezzzezezzzeezezeezeezzzeezzzezeezeeezzezzzzezezezzezezezzeezzezeeezeeezeezeezezzzezzzzezzzezzzzzezeezezzezeezzeezzezeezzeeezzezeezezzzzeezezezzzeeezezeeezeezzzezzezeezezzzzezeezzezzzzzezzezzzzeezezeeezzezzzeeeeezezeezzeeezezezzeezzezzzeeeeeezezzezzzzzeezzezzeeeeezeeezzzzzezezezzeeeezzeezzezzzezeezeeezzzzzezeezezzzzeezzzezzzezzzeeeezeeeezzeeeeezezeezeezezeezzeeezeeeezezezzezezezzeeeezeeeeeeezzzezezzzzeezeezezzzeezzeeezzezeeezzezzezeeeezezzeezezzeezezzeeezezeezzeezeezezeeeezzeezeezzeezzzeeezzzeezzezezeeeezeezezeeeeeezezzzzezeeeezzeeeezzeezzeezzzzzzezzzzeeezezezzzezzzzzeeezzezzeeeeezzzzzzeeeeezzzzzezeeeezeezeezeeeezeeeeezeezeezeeeeezzeezzzezeeeeezzzzeeezzeezezeeeezezezzzezzeeeezezzzzezzzzezezzzeeeezeeeeeeezzezzzezzeeeeezzeeeeeeeezzzzezzzzzezezeeeeeezzzezzzzezezzzeeezzzzzzeezzezzezzeeeezezezzzzezeezeeeezezeeeeezzezezeezzeezzzeeezezzzzzzzezzzzzzzezezzeeezzeeezezezzzzzzeeeeezezzzzeeeezeezeezzeeeezzeezzzzzzzzzzzeeeeezzzeezeeeezezezezzzzzeeeezzzzzeeezeezzezzzzzeeeezzzzezzezzezezeezzzeezzzzezeeeeeezzzezzezzzeeezezzezzezzzezzzezeezezezeeeeeeeeezeezeezeezezzeezeezzeezzzzzzzeeezezeezzezeeeeezeeeezzezezezzzzezeeezzeezzzeezzezezezzezzezeeezzeeezzzeezzzezeeezzzzzezzzezzzezeezezezzeezzezeezeezezzeezzzeeezeeeeeezezzzzzzezzzeezeezzzzezezezzezzeezezzezzeezzzeezzeeeezzeezeezzzeezezezezeeeezzzzeeeeezeezezzeeeeeezeeeezeeeezezeezzzzeeezezeeeeeeeeeezeeezeezzzzzeeeezzzeezezzzeezeezzzzzeezzzzeezezezzeezezeeezeezeezzezzzzeezzezzzzezeeeezzzezzzeeezzzezezzezzezeeeezezeeezzezezzeeeeeezezzzezzezzezzezezeeezzeezeeeezzzezeezeezzzzzzzzzzzzzzzzzzzezzzeeeezeeezeezeezzzeezzzzzzezeezzzezzeezzezzezzzzzezzezzezeeeeeeeeeeezezezezezezzzzzzzeezzeeeeeeeeezzzzzezeeeeezezezzzzzeezezeeeeezzzzeezzzzezzzeeezezeezzzzzzezezezzezzezzzezzeeezeezzeeezeezzeezzzezeeeezzzzzzzzeeeezzezeeezeezzezzezezzeeezezzzeezeezeeeeeeeeeeezzzzzezzeeeezezzzezzeeezzzzeezezzezzzzzzzzezzzezzzeezzzzezzeeezzzzzezzezezzzeezezezeezezeezzzzeezezzzeeezezzezzzzeeezezzeezezzezezezezzezzeeeezzeezzzzzeeeeeezzezezezzeeeeeeezzeezeeeeezzzeeezzezzezeezeezezzeezzezzeeezzeezzeeezzzzeezzezeeezzzeezzezezezzezzzzzzzzezzzeeezzzzzeeeeeezeeeezzezeeezezzeezeezzzzezzzeeezeeeezzeezeeeeezzezzzeeezzeeezezzeezeezzeeeeeeeezzzzeeeeezeezzeeeeeezezeezeeeezzeeeeezezzezezeeezzezzzeezzeeeeeezzzezzeezzzeezzzezeeezzzzeeezeezezeeeezzezzezezezzeeezzzezzezzeeezeeezzeeeeezzzzzeezezzzzzzzeezeezezeeezzzeezzzzeeeeezezzzezzezezzezzezeezeeezzeeeezzeezeezezezzeeezzzzezzeezeeeeezezzzezzezeeeeeeezzezzezeeezzezzeeeezeezzzzzzzeezzeezzeeezzeeeeeeeezzezezezzezezezzzeeezzezeeezzzzzzeezzezzzzzeezzzezzeezeezezzzezezeezzezzzzeezeeeeezezzezzzzezezeezzzezzzeezzeezzzzzzzeeeeeezzzzzzzzzzzzezzezeezezezzezzeezzzeezeezezzzzezeeeezezezzeeezzzzezzezzzeezzzzeezzzezzezeezeezeeeeeeeeeezzzeezezzzzzzzezzzeezzeezzzzzzzeezezezzezeezzzezezzzzzzzzzzzzzzzeezzeeezzzezzeezeezzzeezzzeeezzezzezeeezzezeezzezezeezeeezezeezezezeeezeezeeeeeeezeezezezzzeeezzeezeezezzzezzeezzezzezezzzeeeezezezzezzzzezzezeezzeeezzeeezezeezzezzzzzzzzezzeeeezeeezzzeezeezzeeeeeeeezeeeezzeeeezeeeezzezzeezzzezeezzezzzzeeezzezezzzzeezzzezezzzeezezezezzzzzeezzzzeeezezzezzzezzzzeezeezeeeezzzeezzzzzezeeeeezzezzeeezezzzeeeeezezzzzzzezeeeezezezzzzzzzezzzzzeeeezezzeezezeezzezzeezezezezezzezzzeeezeezzzeeeeezezeezzzzzzzezzezezzezzezezzzezezzzeeezeeeezzezzzeezzeeezezezzeeeeezeeezzzzzezeezzeezezzzzezzzeeezezzzeeezzeeezezzeezzezeezezzezeeezzeeezzzzeezzzzezeezezzzzezzeeeezezezzzeeeeeezzzezeezzzzeezzzzeeeeezeezeezezezzzeeeezzezzzzezzzezezzezzzzeeeezzezezzeezezeezeeeeezezeeezeezezeeezeeezzzezezzzzeeezzzeeezeeeeezzeeezeeezzezzzezzeezzeezezezezezeezezzeezzzeezezzeeezeeeeeeezzeezzzeeeezezeeeezzezzzezzzezeeezezeezzzeeezzezzeezzezeezeeeeezeeeezzzzzeezeezeezzezzzezzzeeeeeeeezezzzzeezzezezeeeeeeeezzzzzzezzzzzzezezzzzezezzzzeeeezzeeeezeezezzeezzzezzeeezezeeezzzzzeeeeeeeeeezzzzezzezezeeeezeezzeeezzzzzezeezeeezzeezezzeeeeeezezezezezzzeezeezzeezeeeezzzezzezeeeeezzeeezzzeeeeezezzzezezzeeezzzzzzeezzeezzzzezezzzezezezzeeezezzzeeeeezzzzzeeeeeeeeeezeeeezzzezzeezeeezezzzzeeeeeezzzzzezzzzzeezeezzeezzzezzeezzezezzeeezzeezezzezzzezeeezzzeeezezzzeezeeezeeezzzeezezzzzzzezezezeezzzezzzeezeeeeezzzezezzeeezzeeezzzzzeeezzeezzzezzzzezeezezzeezzeeezeezzeezzezeezzzzzzeezzezeeeeezzzzezezzeeeeezzeeezeezezzezzzzeezzzzezzeeezzeeezezzzzzeezzzezzzzeeezezeeeezzezezeezeeezezzeeeeeezzeezeezezeezzzezzezezzzzeeeeezzezzeezzezzezzzzzzzezeeeezzezeeeezezeeeeezezzezezzzezeezeezzeezezeezzezzezeeeeeezezzzzezezzezzzezeezzeezzzzzzzzzzezeezeezzezeeezeezezezzeeezeeeezzeeezzeezeezzzeeeeezzezzzzzeeeeeeezzeezzzezeeeezezzzzezzezezzzzzzzzezeeeezeezeezzeeeezeeezezzezeezzzeezzzezeezzzzzzzzeeeezeeezzezzzeeeezezzzeeeezezzzeeezezzezezeezeeezezezzezzezezzzzezezezezeeeeezzeezzeezezezeezezzzzzzzeeezzezezzzzzzzzzzzezeezeeeezzzezezzzezzeezzzeeezzeezezzzzzeeeeezeezzzezzezzeezezzzezzeezeezezezzezzzezezeezzzzeezzzeezezzeezezzezezzeeezzzzezezezeeezezzezeeezzzzzzeeeeeezezzzzezeeezzeeeezzzzezezeeeeeeeeeezzezeeezezzzeezezeezzzezzzzezzeezzzzeeeeeezeeeezzzzzeezezzezeezeezezeeeezzezzzeezezzezzezezezzezezzeezzzezezeezezzeeeezezzzezzzezzzzeeezezezezezzzzzeeeezezzzzezzzzeezzzeeezzzezeezezezzezzzzezeezzzezezzzzeeezzezzzeeeeeeeezeeeeezezeezezzzezzezeeezeezzezezezzzeeezezzzeezzeeeezeeezzezeeeezzzzzeezzezezeeeeezeezzzzeezezzeezezeeeezzezzeeeezzzzzzezeeezzzezzeeezezzzzzzezeezezeeezezzzezzzezzeezeeeezeeeezzeeeeezzzezzzzezzeezeeeeezezezzzezzzzzzezzezeezzzezzzezezzzzezezzzeezeezezzeezeeezzezzzzeeeezezzzezeezeeezezezzezzeezeezezezezzeeezeeezezzzzeezzzzeeezzzzeezzzeeezeeeeeezezezzeezeeezeezeezezzzeeezzeeezzzeezeeeeezzzezezezzeezezeeezzzzezezzzzzzeeezeeeezeeezzeezzezezezezzeeeezzezeezeezzzeeeezezzezezeeezzzeeezeezzezzeezzzzezzzzzzeezezzezeeezeeezzzzzezzzezeeezzeeezeeeezezzeeeeeezezzeeezeezezzezezzzeeezeeezzzzzezezeezeezzeeeezeezzzezzezzezzzeezezeezzzeezzezzzezezeezzeezeezzeeezeezzeeeeezeezeezzeezzeeezeeeezzzzzzezzzzezzeeezeeezzzzzzezeeeezeezeezezezzezezezezzzeezzeeezeezzeeeeezzzzezeezeeezzeezeeeezzeeezzzzezezzeeezzzzeeezzezzzzezezeezzzzzezeezezezeezzezzzzzeeeeezzezzzzeezzzeezeeeezzezeezzezzzeeezezzezezzzzezeeezzzzezezzeeeezzeezzeezeezezzzzzzeeezzeezezezeeeezzzzzzzeezzeezeeezeezezeezzzezzezezzeezezezezzeezeezeezzzzeeezezzzezzzzezeezzezeezzezezezezezzzezzeeeeeeezeeeeeeezzzzeezzzezzezeezeeeezezezzzeeezzzzeezeezzzzeezzeeeezzeezzeezzezzezzeeezzeeeezzeezzzzzzzzzeeeeeezzezzzzeeezzzeeeeeezzzzeeeeezezezzzeezezezzeeezzzzzezzeeeezezzzzezeezzzzzzeezzezeeeezezeezzeezzzzezzezeezezeezeezezzzzzeeeeeeezeeezzzeezezezeeezzezzzzeezzeeeeeezzzzzezzezeeeeezzzeezzzzzzzzezzzeezzeezzeezeezezzzzezezezzezzzezzzzeezezezzzzzzzzzzzzezeezezezeeezzzzezeeeezezezzeeeezeeezzzzeezzezeezeezeeeezezeeezzzeeezezzeeezeeeezzzezeeezeeeeezezezeeezzeeeeeezzzezeeeezzzeeeezeezzeeeezeeeezzezzzezzzezezezeeezzzezzzzeeezzeeeezeezezzzezzzezzzzzzeezzzezzeeezzezzzeeeezzzeezzeezzzzzezzzzzezzeeeeeezezzeeezezzezzzeezezeeezzzzeeeezzezzzezezezzezzzeezeezezeezeeeeeezzeezeezzezzezzezzeeezeezeeeezzzezezeezzzzzeeezeezeezezezzeezezzezezezzzzzeezeeeezezzzezeeeezzzzeezzezeeeeezzzzzezzeezzzzezzeezzzzzeeeezzzzezzeeeezzzzzzeeeezzeezzzzeezeezzezzeezzezezezzezzzeezzeezeezzezeeeezeeezeezzeeezzeeezeezeeeezzezzzezzzzzezzzezeezezzzzzeezeezezzzeeeezzeeeeeezeeezezzzeeeeezezzeeezezeeezeeezezezzzzezzzezeezezezzeezzzezzzezeeezzezeezzeeezezzzeezzzezezeezezeezzzezeezeeeezzzezeezeeezeezzeeezzezzzezezzzzzzeeezzzeezzeezzzzzeezeeezezeezzzezeezzzezezzzzzzzezzeeezezezzzezzeeezzeeezzezzzezzezzeezzzzezeeeeezzzeezeezeeezezzezzzzzzzeezeezeeeeeezzzezeezezzzzezeeeeezzezezezzezeeeeeezzezzezzzezezeeezzeeezezeeeeezezzzezeezeezezezzeeezzzeezzzzeeezzzeezzzzeezezzzeezeeezzzzeeezezzzzezzzezzeezeezeezzzeeeezezzeezezezeeeezzezezeezezzeezeeezezzezezezzzzzeeezezzzzzzzeezeezzeeeezzzzezzezzeezzzzzzezzeezezzzeezzezeeeeezezzeeezezeezeezzeeeezzzeeezzzeezezezzeezzeeeezzzzzezzzzzezzzzzzzezzeezezeezeeeezezezezezezeeezezzeezeezzezzeezeeezzeezzzzzzzeeezezzzeezzeezezeezzezzezezezzzezzzeezzzzeezzeeeezzzzezeeeeezzzezezeezeezeeeezzeeeezzeeezzzzzezzezzzzeeezzzzezzezzezezzeeezezzeezeeezeeezzzeezzzezzzzeeeezzezzezezeeeeezezezzeeeezezezeezeezeezzzezzzezeezzzzeeeezzzeeezzezzeezzzezeeezzzezzeeezzzzezeeezzeezeeezzezezezzezzeeezzezezeeezzeeezezzzzzeezezzeeeeeeeeezzzzeezeeezzzeeezzzezzeeeeezeeeeezezeezzzzzzeeezzezezzeeeezeeezzzezezzzezzzeezezzeezezzezzezeeeeezzezezezeeezzzzzzeeeeezzzeezeezeezeezzeeeeezeezzzeezzzzzzzzeezzzezezzeezeezeezzzzzezzzeezeezzeezeeeeeeezeezeeezezzeeeeeeezezeeeeezeeezezzezzeezezzzezzezzezzeezezezzeezeeezeezzezzzeezezzezzzezezeeezzzzzzezezezeeeeezezeeeezeeeeeezeezeeezezzzzzeeezzezeezzeezzezzzzezzzzzezzzeezeezeeeezzezzeeeeezezzzeeezzezzeezzeeeeeeeezzzzzzezzeezzeeeezzezeeeeezeezezezeeezzzzezzzezzzeeezzzeezzzezzzzezeeezezezeeezezzezezezezeeeezzeezzeeezzzezzzzeezzzeeezeezezeeezeezeeezzezzzezeezzzzezezezzzzezzzzzeeezezeeeezzeeeeezeezzeeezzezzeeeeeeeezeezzezzzzzzezzezezeezzeeeeezzzeeezeezzzeeeeeeezezzzezzzzzzeeeeeezzeeeezezzeeezezeezeezezzeeeezezeezezzzzeeeeezzzeeeeezezezzzzzzezeezezzzzzeezzezeeeezeezeeeezzzezzeeeezzzzzeezzezezzezzeezezeeeeezzeeeezzzeeezzezzzezezzezezeeezezzezzzezzezezzzzzeezezezeeezzzzezzeeezezzeeeezezezzezeezezeezzzezzezzeezzeeeezezezezzezezzezzzzezzzzezezeeeeezzezzzeeezeeezeeeezeeeezezzezzzeeeezzezzezezzezezeeeezeezzzzzzzzzeezezezzeezeeezzezezzzzezezzzzzezzeeezzezzzzezzzzzezeezzzezeeeezeezezzzezezezzeezeezeezeeezzzzzzeeezzezeeeeezzzezzzzezeezzeeeezzeezeeezzzezzeeeezezezzzzeezezeeezzzzzeeeezeezeezzzzzzzzzezezzezezzeeezzzeeeeeezeezzeeeeeeezeeezzzezzzzeeezzzeezzeezzzezzeezeeeezzeezezeezezzeeeezeeezezzeeeeeeeeezezezezzeezezeezzzeeezezezzzeezeeeeezzezzzzezzeeeeezeeeeezezezzezezeeezezeeeezeeezezzzeeezzeezzezeeezzezzzzzzeezzeezeezeeeezeeeeeezezezeeeezezzeeeezzeeezzezeeezezeezzezzeezezeezzzzeezzezeeeezeezzzeezezzzeezezezeeeeeezzeezzeeeezzezzezzzezzeeezzeezzezzzeeeeeezzzezeezeezezzeezzezzezeeeeeeezeezezzezzzeezezzeezzzzzeezeezzezeezzeeezzeeeezzzzeeezzzezzzzzezzeezeeezzezeezzeezzeeeeezzeezezzzezzeezzzezzezzzzzzezzezeeeezezezezzezezzzzeezezzezzzeezzzeeeezezzzezzzeezeezzzeezzezzzzeezezzzezzzeezeeeeeeezzzzzezzzeezzzzzezeezzezeeeeeeeezezeeeeezzzzeeeeeezzzzeeezzzzeezzzzzeezzzeeeezezeezezzzzezzzezzzzzeezzezzzzzeeezezzzzeezezezzzzzeezzzzeeeezzezeezezeezeeezzeezeeezeeezezeeezzzeezeeeezzzzeezzezeezeeeeeezezzezeezzezezeeezeeeeeeezzzzzeeeezzzeeezzzzezzezzezeeeeeeeezezeeezezezeeezzzzezzezezezeeezzzezezzzeeeezzezeezezzzzzeezzzeezeeeeezzeeezzzzzzezeezzezezeeeeezzezeeeeeezzzeezzeeeeeeeeeezeezzezeeezezezzeezzzezeeezzzezzeezezeezezzzzzzzzzzezeezezezzzezezezzzezzzzzzzezeeeezezzzzzzzezzzeezeezzzzzzezezzezeezzzezzzezezezezezeeeezzzzezzeeeeezezzzzeezzeeeezezeezzezezezezezeeeeeeezzzzzeeezzzeezzezzzeezezzeeeezezezzzeeezezezeeezeezezzezzeezezeezeeezzzzzzzzzzeezezzezezeeezezeeeezezzezeeeezzezeeeeezzezeeezzezezezzeezezzzzezzezzeeezzzezzzzzeeezezzeezezzzzezezzzzeeezezzezeezezeezezzzeeezezzezeezzeezeeezzzzzezzzzeezezezzzezzeezeeeezzezeeeezeezzeeeeeezzeeeezzzezzzzzzzzeezezeeeeeezeezzezzezzezzzzzzeezzezezzzezeeezeezzzzezzeezezzzzzezzzzeezeezzeezzezeeezzzzezzzzeeezzzezeezzeezzezzzzezeeeeeeeeeeeezzzezzeezzezezezzezzezeeezzzzeeeeezzzezzzezzzzzzezzezzezzzzezzzeezzzezzeezezzeeezzezeeeezezzezezezzezzezezzeeezezezzzzzzeeezzezezezzeezzeeezezzeezzezzzzzzezzzzzzzzzeeeeeeeezzeeeeezzzzzezezzezzezeeezzzezeeeezezzeezzzzzeezezeeeezzzzezzzzezzzzeeezzzzeezzezzzeezzzezzezezezezeeeeeeezezzzzzzeezezeeeezzeezzzzzzezezzezeeezezezzzeezezeezeeezzzeeezezezezzeeezezeeezzzezezzezzezzezezeezeezeezzzeezezzzezzezezezezezeeezzezeezzzzezzezzzeezzeezzzzezezzeeezeeezzezzzezzzzezeezezeezzzzzzzzezezeezezezzezeeezezzzeezzeezezezeezezeeezezzzezzzeeezezzzzzezzeezzezzzeeezzzeeezeezeezeeezzezzezezezzzzezeezzezzeezzzzzzezzzeeeezeeezezeeezzzzeezeezeeezzeeeeeeeezzzezeeeezezeeezzzezzzzeezeeeezzzzezezzzeezezeeezeeeeeezzezzeezeezezzezzeezzezzzzzzzezzeeezezzzzzezezzezezeezeeezezzeezeeezezezzzzzeezzeeezzzzzezeezzzzzzezzzzzezzezeezzzeeeezezezzzeezeeezezeeeeezzezzzzezzeezzezzzzzzezezezezezezzzzezzeezezzzeezezzezzzzezezeezzzeeezzzezzezezezezzzeezeezzzezeeezzzezeezzeezzzzzzezeeezzeezzzeezzezzezzzezeezzzezeeeezeezzeezzeeeeeeeezzzeeeeezzzezzezzzeezzezzezeeeeeezzzeezzezzeeezezezzzzezzzeezezezezezezzzezzzezzzzzezzzezzezzzezzzzzezeeezezeeeeezzeezezzzzzzzzezzeezzezeeezzezzzezezzeeeeeeezeeeeeezzzeezezzezezzezzezzzzzzzeeezzzzeeezzezzzezezeeeezzeezeezzzeezeeeeeezeezezeeezeezezeeeezeeezzezzzzzzzzezzzeezeeezzzezzeezeezeezzeezeezzzzzzezzzeeeeeezzezzeezzzezeeezzzeezezezzeeezzezzzezeeeezeeezzzezezeeezeeeeeeezzzeeezzzzzezeezezzzezzzezeezeezzzzezzeezzzeezezezezzzezeeeeeezezezzzezzezzeezezzeezeeeezzzzeezezezeezzeeeeeeeezezzzeezzzeeeezeezeezzzeeezeezzzeeezeeeezezzeezzezzezzzezzezzzezezezeeeeeeezeeeeezeezzeeeeeeezzeeezzzzzeeeeezeeeeezezeeeeezzzzeezezzzzezzzeezeeezezeeezzezzeeeeeeeezeezzzzzzzzzzzeezzzzeezzzezezzzzzezeezzezzeezzzzzzzzezzzzezzzeezeeezezzeeeeezezzezzeeeeezezzezzzezeeezzzezeeezzezeeezeezzeezzzzeezeeeeeeezeeezezzeeeezeeeeezeezezeezzezzzeeeezeezezzzzezeeeeezzzzeezzzzeezeezezzzezeeezeezzzzzezzezeeeezeezzzezzzeeeezzezzeezeeeeezezzzezeezzzzeezezeeeeeezzzzezezeezzezezezeezzezezzzzzzeeezzezzeeezezzzzezeezzeezezzzzezzezzezzeezezezzeeezezeeeezeeeezzzzeezzeeezzzeezezzeezeeezzzezzzezeezezeeeezzzeeezeezezeezeezzzzezeezzeezzzzzzezzeeeezzzezeeezzezezeezzzzezezzzeezzzzzezzezzeezzeeezezzezeezeezzzzeezzzzezzzeeeeezeezeezzezzzeeeezzeezzzezezezezzezezeezezzezzeezzzzzzzezzzzezzezeezezzezzzezeezzeezzezzzezezzzeezzezeezeeezzeeeeeeezezezeezezzezezzzzzezeeeeeezezezeezzeezezzzeeeeeeeezezezeezeezzeezeeeezeeezeezzezezezeeeezeezzzzzzzzzzezzezeeeezzezzezzezeezezzezeezeeeezzzeeezezzzezeezezezzezezeezeeezeezzezeezezeeezzzzezzeeeeezzzeezezezeezzzezezezzezzzzeezzzzzzeeezzzzeeeeeeeezeeeezzeeeezzeezezezeezzeezzzezezzzezzezezzzeezzzzzeezzeezeezeeezzeeeeezeezzzzeezzzzezeezezzeezzeezzezeezezzzeezzeezzeeezzeezzzzzzeezzezeeeeeeezzezzeezezzzzeeezeeeezzeezeezezeeeeeezzzeeezeezeeezezzzzzzzzzzzzzzezzeeeezeeeezeeeeeezezzeezzzezzezzzzzzezzezeezzezeeeeeezeeezzezzezezezzeeezezzeeeezzzeeezeeeeeezzzeeeeezeeeeezzzzeezeezzzezzeeezzeeezzzzeeezezzezezzzeeeeeeezzezeezzeeezezezzeezezezzzezzezeezezzzezezzzeezeezeeezeezezzeeeeeeeezzzezeeezzzezezzzeeeezezzezeeeezzzzeeeezzzeeeezzzeeezzzeezeezeezzezezezezzezeeezeeezezzeezeeezzeezeezzezzzzezzeeeezzzeeezeezzzezeeezzezeezeeeeezezezzezeeezzezeeezzzzzzezzzzeeeezeeeezzzzzeezezeeeeezeezezeezzzzzezzzzeeezzzeezezeezzeezzzzzezezeeezeezezeezzzeezezzzeezezeezzzzeezzezeezeezeezeezeezzzzeeezzeezzeezezezzeezeezzezezzeezezzzeeeeeeezeezzezeeeezezezzezezeeezezzzeeezeezzzeezzezzzezzzezeeezzezezzzezezeezzzzzeezzzeeeezzezezzeeeezzzeeeeezzzzzzeeeeezeezezezzzezeeeezeezzeezzzzeezezzzezezzezeezzzeeeezezeezzezezezeeeezezeeezezezzzeeezezeeeeezzzzzeeezzzzezeezzezezzzezezezezzezeeezzeeeezzzeezezzzzzeeezzeeezezeeezezzeezeezzeezeezeezzeezzeeeeezeezzezzeeeezzzezeeeezezeezzezzzezeeeeezezezzzzezezezezeeezeezzeezeeeezzezeezezzeeeezeezezzezezeeezzzzzzeeezzezeezzeeezzezzeezzeezzezzzzzzezezzezezzeeezzezzzeezzeeeezezeezzzzzeeeezezzzeezeezzzeeezzzzeezzezzzezzzzeezzzzzeezezzzzezzeezezzeeezzeeeezzzeeeezeeezeeeezezeezezeezezzzeezzzzzezzeezzezzeezeeezzezzzzeeezezezeezzeezzezzzzzzezzeezezezeeezzeezzezzzezeezzzzzzeezezezeeeeezzeezzezzzezzzzzeezeeeeezeezzzeezzeeezeeeeezzzzzzezzezezezzzzzzezeezzeezzzzezeeezeeezzezezezeeezzezeeezezezezeeeezzzezezzeezeeeezzezzezzzzezzeezzzzzeeezeezezeezzezeezzezeezezzezzzzzeeeezzzezeezzzeeezeeeeezzezzeeeezeezezeezzzzezzzezeeezzeeezeeezezzzezzezezzeezezeezzeezzzeeezezzzzzezzzzzzeeeezzzzeeezzzzzzzzzezeeeeezezzeeezeeeeeeeezezezeeezzezezezeezeezzezeezzzezzzzezzeezzzzeezezzeezzzeeezeeezezzezeezzeezzezzezzeeeezeezeezeezzzeeezeezezzeeezezzzzzezzzzeeeeeeezzeezeezezzzeezzezzzzeeezzzzezzeezzzzeeezezeeezeezeeeeeeezeeezeezzzeezzezzzeeezeeeezezzzezezeezzeeezzeezeezzzzezezzzzeezzezzzzzzezezzezzzeeezeezzeezzzezzzzzzezzzzzzezzeeeeeezzzzezezzzzezzzzezzzezezzeeezzezzeezeezzeeeeeeeeezeezzzeezeezzzezzzzeeeezezzzzzeezzeezezzezzezzezezezzzzzezezezzzzzezeeezzezzzezzezeeeeezezzeeezezeezzezezzzzzeezzzzeeezzezzezezzzeezeeezzeeezzeeeeezzezzeezeezzzeezzzzzzeezzeezeeeeeezzezzeezeeezezezzzzezezeezeezzeezzezzeezzzzeezzezzeezzeeeezezeeezzzzezzzzeeeezezzzeeeeeezzeezzezezeezezzeeezzezeezeeeezzeezezeeeezzzzeezezezzezzzzzzeezzezzezezzzeezzzzzzzzeezezeeezzeeeeeeezeezzezzzzezeeezzzezzzeezezzzeezzeeezezezezzzzezeezzzzeeezeezzezeeezzzzzeeezzezeezeezzeezezezzezzezzzzeezeeeeezeezeezeeeeezzzzzeeezezzezezzzzeezeezezzzeezezzzzezzzzezzeeezzzzzeeeezeezeeezeeeezzezzzezzeeezzeeezeeeezzzzezezzeezeeezezeezeeeeezzzeezezzzzzzeezzeezzeezzzeezezezzzezzeezeezzzzzeeezzeezezeezeezzzzeeezzeezeeezeeeeezeeeeezzeezzezzzeezzzzezezezezzzeeeeeezzzzezezezeeeeeezezeeeeezeeeeezzzezzeeezezeezezezeezezeezzezeeezezeeezezzezzezzezezezeeeeeeezeeezezzzzzzezzeeeeezeeeeeeeeeeeezzzzzeezeezeezzzzeeeeezeeeeezezzzzezzzezezzeeeezeezeeezezzeezzeezzzeezezzzeezzezzzzzeeeezzzzeezezzzzezzzeezzzzzezzzezzzeeezeeezzzzzzzzzzzeezezeezzzzzeeeeezzzezezzzeezzeezezzezzzezzeeezzzeeeezezezzzzzeezzzeezzzeezeezeeeezzzzzeeeezezeeezzzzzezzzezezeeeezeezezzzeeezezeezzzezzzzeeezzzzeezezzezeeezeeeeeezezezzeezzezeezzzzezezezezzeeeezzezezeeezezeeezeezezzzzeezeeezzezzzeeeezzzeeeezezzzzezezezezzeeeeezezeeeezezezzzzzzeeeeeezzezeezzezzezezzezzeeezzzezzzeeeeezezezzzzzzzezezezeezeeezzzzeezezezzeeezeezzzezezzzeezzzeezeezeeeeeezeeeezzzezzezzzzezzzeeeezezzezeezzzezeezzzeezeezzeezeeeezeezezzeezezzeezzeeezeezeeezeezezeezezezzeeezzezezeezezezzzzeezeeezezezezzezeezezzzeezeezeezeezezeeezzezzeeeeezzeeeeezeeezeeezzzzzzezzeeezeezzzzzzzeezeezeeezzeezzezeezeeeeezezzzzzzeezzeezeezzzezeezzeezzeezezeeezzeezezezzzeezzzezezeezezeeezzzzzezzzzezezzzeezzzzezezzzzezzeeezzeezezeeeeeeeezzeeeeezzezezeezezezzzeeeeeeeezzeeeeeeeeezeeeeeezzzezezeezeeezeezzeezezzeezezzzzezeezzeezzzzeeeeezzzzzeezezezzezezeeezeezezezeezezezezeeeeeeezzezzezzzeeezzeezzzezzeezeezzezezzzeeezeezeezezzzzeeezzezzezeezzzzezezzeeezzezzeeezzzezezeezezeeezzeezeezeeezeeeezzeezeezzezeezzzeezeeezeezzzezzzzzzzeeezzezzeeeezeeezeeeezezzezeeezeeezzeeeeeezezeezezeezeeeeeeezezzzzezzeeezzezzezezezezzzzeeeezzzzzezzzezzeezzzzzezeezzeezeezeezzzezzzezzezzeezeeeezeezezzeezzezezzzeezzezeezezeezezzezeeeezzeezeezzzzezzzezezzzzezeeeezzzzzzzeezezezezezzzezezezzzeezeezezezeeezzezeezzeeeeeezezezzeezeeezeezezzeezeeezeezezzezzzeeeeeeezeezeeeezzzeeezzeezezezzezeezzeezeezezeeeezzeezeezzeezzzzeeezeezzzezzezeeeeeezezzzzezeeeezeezeeezeeeezezezezeeezeeeezzzezezzzzzzezzeezezezzeeezzzzeeezzezeeezeeezeeeeezeezezezeezeezeezzeeeeezzeezzzezzzzzzzezzzezzezzzzezezeezezeezeeeeezeeeeezzzezezezezezeeeeeezeezzzzzeeeeeeeeezzezzzezzzzzezeezezzzzeezeeeezeezeeeeezeezeezzzeezzeeeezzezeezezzeeezzzzeeeeeezezezzeeezzezeeezzezeezzezeezeezezzeezzeeezezeezzzzzezzzzzezzeeeezzeezzeeeezzzzeezzzeezzzezeeezzeeezezzezzeezzezzeezzzeeeeeeeeeezzezeezzeezezzzzzzzezezzezeeeeezzzzzezzzeezezzzzzeezzzzzezzzzezezzezzzzezzezzeezzzzzezezeezzzeezeezzezeeezzezzzeezzeeezeezzezeezzeezezeezzzzzeezzezzzezezeeezzzeeezzzzeeeezezzzzezeezeezeezzzzzezeezeeezezzzzezezezezeezeeeeeezeeeeezeeeezezzezzezzeezeezeeezzeeeezezzezzeezeeezezeeeeezzezezzezezzeezezzeezezzzeezeeeezzzeezeezeezeeezzeeeezzzzezzeeezzeezeezeeeeeezzzzezezezzeezezzeezzzezzezzzzeeezezeezzeezezzzezeeezezeeeezeeeezzezezzzzzzzzezzeezzzezezeeeeeeezzezzzzzzzzezezeezeeeeezeezzzzeeezezzeeezzezezzeezeeeezzeezezzezezeezezezzzzzezeezeeeezzezzzzezzzeezzeezezezeeezezzeezzeezezzeezezzeezzzzezzeezeezzzeezzzeezezzzezzeezeezeeeezeeezeeeeeezeeeeeeeeeezzezeezzeezzzezzzzeezezezzzeeezzezezezeeezeeezeezezeeezeeeezzzeezzezeeeezezezeezeeeezeeezzzezzzzeezzezzzzeeezzezzeezezzeeeezeezezeeeeeezzeezeezzzezzeezeezeezzzzzzzzzzezzzzzzezzzzeeezzzzezeezeeeeezeezzzeeezezeezezzeeeeeezezeezzzeezzzzezezeezzzzezzzzzeezeezzzzeezezzezeezzzeeezezzezezezzezezezezzeeeezzezzezzeezeezezeeeeezeeezzzeeeeezzeezezzzezeeezeeeezzzzzezeeezzeezzzeeezzezezeezezeezezeezzezezezeezezeeeeezezezzzezzzzezezzezzeezzzezzezeezzzeeezezzezzeeeezeeeezezzzzeezezezezezeezezzzeeezzzeeeeeeezzeeeeeeeeeezzeeezezezezeeezzezezezzzzzezezezezezzzzeeeeezzezzeezzeeezzzzzzeeeezzzzezeezzezzezzzzzezzzezzzzezezezezeeeeeeezezezezzzzzezezeeeeeeeezzzzezeezezezzzzzezezzzezezzezeeezzzeeezezezeezeezzezzzzzeezzzezezzezzezzeeezezeeeeezeezzezzzzezzezzeeeezzezeeeezezezezezeezzezezzezezezzeezeezeeezzzzezzzeeeeezzzzzeeeezezeeezeeezzezeezeezeezeezzzezeeeezezzezezezezzzzeezeeeezzeezzzzzzzezzzzzeezzeeeeeezezzezezeezezeeeezeezzezeeeezzezzzeezzzzzzzzzzezeeeezeezzeeeezzzezezzzezzezezezzzezezezzzeeezzzzzzeeeeeezzezzzzzzzeezeeeeezeeeezzezzzeeeezezzezzzeezezzzzzzeezeeezzeezzzeezeeeeeeeezeeeezzeeeeezzzezzzzzeezezzzzezeezzzezezezzezeeeezeezeezzzzeezeeeezzeeeezzeezeeeeezzezeeeeeezzezzzezzzeeeeeezzzzzezzzzezezzzzeezeezzezeezeeezeeeezzzzzzzezzzzezzzzzeezezezezezzeeezzzzzeezezzezzzezeeeezzezeeezezezzeeeezeeezzzzzzzzzeeezzzzeeezeeeezzezzeeeezezzezzzezezeezzzezzeeezeezzezzzzeeeeezzezeezzzeezezzzezzzeeezzzzzeezeezeeeezezezeezeezzzzzeeezzezezzzzzzzzezeeezeeeezzzeezezzeeeeeezzezeezezzezeeeezezzzzzezeezezeeezezzeezzezzeezezeeezzzzzezzezeezeezezzezzeezzezezeezezzeezzezezezezeezezeeeeeeezzzzzezzzezeeezezzzzezzzeeezzzezezzzeezeeezzezezzzezzzezzzeezzzzeeezeezzzezezeeeezezzeeezzeezezezzezeezzzeeezeezezezzzzzzezeeezeezzezezzezeezezzzeezzeeeeeeeezzeeeezeeezezzzezzezzzezzezzezezeeezzzzzeezzzzezzezeezezzeeezezzzezzzezezzezezeeeezzzeezzzezezezzzeezezzzeeezeezezeeeezzzzezeeeezzeezeezzzezezzzeezezzezezeeezzezzzeeeezzeeezeeeeezeeeeeezzzeezzeezzzzezeezezzezezzeezzeezeezezezzzzzeeezeezzezzezeeeeeeezzzzezzzzezzezezzzezeezeezeeeeeeezzzezzzzzeezeezeeeeezeezeeezzezezezzeeezezzzzzezeezzeeeezzeezzzzeezeezzzezeeeezzzzezeezezzezzzeeezzzeeeezzezzeeezezzezzzzezzeezzzzzeeezezeeeezzezzzzzeeezzzeeezezzeezezzezezzezeeezezezeezeeeeezeeezzezzzeeeeeezezzeeeezzezeeezzeeezezzzzeeezzeezeeezzzzzeezezeezezezezzezzeeezzeezeezzzeeezzezeezezeeezzeezeezzezeeezeeeeezzzezzzzzzeezzeeezzezezezzzezzeeeezzeezzeeeezezzzeeezeeezeeeezezeezzeezeeezzeezezzzzzzeezeeeezzzzezzzeezeeeeezzezeezzzzeezeezezezzzeezzeeezzeeezezzzezzzezzzeeezezzzzzzezezezzeezeezzzeezeeezzeeezzezzezeeezzeezzzzzezzezeezezzeeezzzzeezezzeezzzzzzzzzzeezzzezzzezezezezzeeezezzeezezeezeeezzzzezezzeezeeezezezzzeeezzzeezeeezzezezzezeezzzezeezeeezezzezzezzezzezezezezeezzezzzzeeeezeezzzeezeeezezzeeeezeeeezzzzzzzeeezzzzzeezezezzzezzezzzezezezeezeeezeeeeezezeeezzeezezeezezezzzezzzzzezzzzezzezezeeeeezzezeeezeezezeeezzezzzzezezzzzzzzzzzezezzezeezezzzezeeeezzzzzeezezzzeezzzzeeezzeeezezezzezezzzzzzezzzzeezzeeezeezezeezeezezeezezzzezzezzezzzzzeeeezzzeeezeeeezeezezeezezezzeeeeeezeeezezeezeeezezzezzzzeezeezzezzezezezezeeeezeeeeeeezeezzeezeeezeezeezzzeezzeezezzezzzzzeeeeeeezezeeeezzzezeezzezeezezzzezeezzeezzzzzeezzzeeeezezzeezezzzezezzezeeeezzezzzeezezezezzezeeeeezzzeeezzzzeezezzeeezzzeeeezzzzeeezezzzeeezzeezzezzzzzeeeeezzzeezeezezzezzzezeeezzeeeezzeeeeeezzeezezeezezzzzzzeeezeeezezeeezeeeeezezzzzezezzezeeezzezzezzzeezezzzeezzezzeeeeeeeezzzezeezzeezzzezzzzeeeeezzzzezeeezeezezezezeezezeezzzeeezzzzeezeeeezezeezzezezzzzezezeezzeeeezeezzzzzezzzzzzzeeeeeeeezzzezzeeeezzzeeeeezzzzezezezzzeezzzzzeezezezzzzeeezzeeezeezeezzezezeezeezezezezzzzeeeezzezzzzezzzzeeeeeezzeezzzezezeeeezzezeeeeeeezzeeezezzezeeeezeezezezeeezzzzezezezezezezeezzeeezzezeeezzezeeezezezzeezzezeeezezzezezeeezeezezeezzezeeeeeezezzezezzezeeeeeezzezezzzzeeeezzzzezezezeezezezzeeezzzeezzeeeeeeeeeezezzezeezzezezeezzzzezeeezezzzezeezezzzzeezzzzeeeezezzeeeeeeezzzezzeezzeeeeezzzezzzeezeeezezzzeezzzzzzzeezeeeeezezezzzezezezzzeezezzzzezzezzezeezezezzeezzeeeezzzeeeeezzzezzzeeezezezzezzzzzeeeezezzzeezezzeeeezezzzzezeeezzzezeeeeeezzeezzzzzezzeezeeeeeeeeeeeezezeezzeezeeeezezezzzzzeeeezeeeezzzzeezeezzzezzezzeezzzeezzeeeezzzzezeezeeeezezeezeeeeezeeezeeezeeeeeezeeeezzzzzezeezzzeezzezzzzezzzezeezezezezeeeeeezzzeezzzzzeezzeezzeezezzzzeezzzezzezeeeeezezzezzeeeeezzzzzzeezzezzezzeeeezzzzeezeezzzezzzzzeeeeezzezeezezzzzeeeeeeeezeeeezezzzzzzeeeezzzzzzzeeezezzzezzeeeeeezeeezzezezezzezeeeezeezzeeezeeezzzeeeeeezzzzzzezezeezeezezeeezeeeeezeezzeeezezezezezeezzzzzzzezzzeeeezeezeezzzzzzeeeezezeeezezzzeeeeeeeezzeeezzzzezzezeeezeezzzzeezzezeeezezezzeezezzeeeeeeeeeezzzzezzeeeeeeezzezzzeezzeezezzezezzzezeezezeeezzzzzeeeeezzzeeeeeezeezezezzeezzzezzzzzzeeezzeeezzeezeeezzeeezeeeeeezzezeeezzeezeezzzzezzzzzeezezzezzzezzezzezeezezeeeezeeeeezzzeezzzzeezzeeezezzzzzzzezzezzzeezzeezezzzzzezezzeeezzzezzzzzeeeeezzeezzeeeezzzzezzeezezezeeeeezezzzzzeezezeeezzezeeezeeeeezezeeeeezzezezzzezezzzezzzzeezezzzezeezzeeezeezzzezezzeezzzeezezzezzzzezeezzzzezeeeezeezezezezzzeeezezezzezezezeezeezzzeeeeezzezezzezeeeezeezezzzzzeeezzzzzeezeezzzeeeeeeeeezzzzezzzzeeezezzeeeezzeezezeeeezzzezzzezeezezeeeezeezzeezezeezezzzzzzzezezeezzeezzeezeeezezeezeezezzzeezeezeeeezzzzzzzeezezeeezeeeezzzezeeezezzzzzzzezeezeeeeeeeezezeezeeeeezezezzezeezzzzezeezzeezzeeezezzeezezeezzzezeezeezeezezzezzezezeeeeeezzeeezezzezzeezezzeeezzzeezezeezzeezzzezzzezzzzzezzzeezzezzezeezzeezzzeezeeezeezzeeezeeeeeezzzzzezzeezzezzzzzzzzzezezezeeeezeezezeeezezzzzezezzzezzzzzezeezezeezezzzzezezzezezeezeezezezeezeeeeezzzeeeezzzeezzeezzzzezezezzezeeeeeeezzeezzeezezzzezezzzzeezezzzeeeezzeezeeeeezezzzezezzezeeeeezezzezeeezzzzzezezezeeeeezeeezzezzeeezzezzzeezzezzzezzeeeezezzzzzzeeezeezzzeezezzzeeeezzzzzzzzeeezzzeezzezzeezeezzeeezezzeeezzzzezzeezzzzeeezeezeeezeeezeeezzzeeeezeeeezzzzezeezeezzzzzzzzzzzeezzzezeezezzzzeeeezeezezzezezeeeeeezzezzeezzzezeezezeeeezeeeezeeeeeezzezzzeeeezzeeeeeeeezzeeezzezeeeezzzezzzzezzeeeeeezezzezeeeezzezzzzzzezeeezzzzeezeezeezeezeezeezzzzzezzeezzezezzzzzezezezeezezezezzezzzzezeezeezzeeeezeeezzeezeeeezzzezezzeeeeezzezzzezezzeezzzzzeezzzeezeeeezzzeeezezzezezzeeezzzzzezeezzezzzzezezzeezzezzzezzzezezezezzzzezzzezeezezeezezeeeeezzezzeeezzezezzzzezzzzeeeezezzzzzeezzzzezezzzzzeeeezzzzeeezzezezzeeeezzzezeezeezeezzezzzezzzzzzeeeezzezzzezzeeezezeeezzzzzeezeezeeeeezeeeeezzezzezezezzzeezzzzzezezeezzezeeezezzezzeezzezeezeeeeeeezzzzzezzeeeezzzzezzezezezezezezzzzzezeeeeeezzzzzzezzzeeeezezzezzeeeeezzeezzeezezeeezzezzzeeezeeezeeezeezeeeeezezezzeeeezzzzzzezezzzeeezezzzzezzzzezzzzzezezezezeeezezeezzzezzeeeeeeeezezezzeezzezzeezezzzzeeezezezezzzzezzzzeezeezezzzzzzezzezezzzzeezezzezeeeezzzzzzzzzeezeeeeeeezzzzzzezeezezeezeezezeeezzeezezeeezzzzzezeezezeezzzeeeezzzezzzeezzezeezzezzzeeeeezzzzzzzzzzezzzeezzeeezezzzzzeezzezezeeezzzeeeeeezzezzezzeezeezzzzzezeeezeezezeeezzzzeeezzzeeeeezzezezezezeeezezzezezzzzeezzzzeezeeeeezzzzzzeeeeezeezeezzezzzezeezezzeeezzzzzzezzeeezezzeezzeeeeeezeeezzeezeeeeezzzeezzezeeezzzzzzeeeeeeezezeezeeeeezzzzzzzezzzezzzeezzzeezezeeezeezeezeezezzeeezzezeeeezzzzezezzeeezeezzezzeeezezeeeeezzeezzzzeezzeeeeeeezezzezzeezezzzzzzzzezezezzzzzeezezeeeezzeeezeeeeezzzzzeezeezzzezzzzzzeezeezeezzzezzzzzezzeezezezzzzzzzzzzzeezeeeeeeeeezzzeezzzezzzzzzeeeeeeezezzeeeezeezezeeezzzezeeeezezeeezezeeeezzzzzezezezzzzzzezzzeeezezzzeezezeeeeezzezzzzzeezzezezeeeeeeezzzzeeezzezeeezeeezeeezeezezzezezzezzzzzzzezezzzeezzzzzeeezzzzeezzezzzezzzezzzeeeeezeeezzzzeezeeezzzzezzzeeezezezezzzzzzzzeezeeezzeezzzzezzzezzeeezezzzzezeezeezeeeeezezeeezzzzzezeeezzzezezzezzezzeeezezeezzezzzzeeeeezzeeeezeezezzezzzzzzzzzezezeezzzezzezeeeeezzeezzzzeezezezzeeeezzeeeeeeezeezzzezezezeeezezezzeeeezzzzezeezeeeezeeezzzezezzezzzeezzzzezzeezezzzzezzzzzezzezezzezzezezzezzeezeeeeezezeezzzezzeezeeezeezzzeezezeeezezezezzzzeezezzzeezezzezzezezeeezezeeeeeeezzzzezzeeeezeeeeezzezzzeezzzezzzeezezeezzeeeeeeeezeezezeezzzeeezeezzzzeeezeeezeeezezeezzeezzzezezzeeeeeezeezezzeeezzezezeeezezezzeeezeezeezzzeezzzzzeeezzeezezzeeezeezzzzezzzzezzezezzzzzeeeeezzezzeezezeeeeeeeeezzzeeeezzeeeezezzzezeeeezeezzezeeeeeezzzezzeezzzzezzzzeeezzzeezezzezezeezzeeeezzzzzzeeezeezzzzezzeeeeezzezzeezzzzzzeeeezzzezezzeeeeeezzeeezzzezezezezzzezzezeezzzzezzezzzezezzzezzzeezzeeezzeeezzeezeezeezzeezeezezeezzzzzzeeezzzzzeezzeezzezzezezeezeezzzezeezeeeeezezezzzzzzzeezzeeezezeeeezzezzezzezzezezzezzzezzezezzeezzzezezezeeeeeezzezzeezzzzzeezzzezzeeeezzzezzzezzezezzzzeeezzzzeezeeezeeezzezeezzzzzzzzezzzzzzeeezezzezezzeezzeezezzzzzeezeeezezezzeezeeezzzeeeezzzzezezzeeezzzzeeeezeeeeezzzezeeezzeezzeeeezeeezezezzzzezeezeeezezezezeezzzezezzeeeezzzeezzzezeezezezezzzezzezezzezzzeeezeeezzzeeezzeeeeezzezzeeezezezezeezzeezeeeeezeeezzezzzzzezzeezzzzzzezeezzezzzeeezzzzezzezzezezzzzzzezeeeezezeezzzzeeeezezezzeeeeezezeezzzzzzzezzeezezzzezezzeezzzezezzezzzzeezezzzzeezezeeezeeezzeezeezzeeeeezezzzeezzzeezeeezeezzzzzeezezeeezeeeezzezeeezeezeeeezeezeeezeezeeezzezezzzezeeeeezzezezeeeezeezezezeeezezzzezzzzzezeeezzzeeezeezeeezezzzzeeezezeeezzzzzzeezeeeezezeezeeeeezeeeezeezzzeezezezzeeeezzeezezeezzzezezzezezezezezzzzezzezzzzezzzeezzzzezzzzezzzzeeezezezezeezeeeeezzezzzzeezezezzzzzeeezzeeeezzezezzezzeezeezezzzzezzezezezzeeeeeezzezzeeeezzezeeezzzeeeeezzzzzezzzeezezeeezeeezzezzeeeezeezzeeeezzeezeezzezezzezzzzzezzezzzeezezezzezzzzzezzezzeeezeezeeezzzezzezezeeezeeezzeeezzezezzeezezzeezzeezzzezzzzeezzezzzezeezzezzzeezeezzzeeeeeezeezezezeezzzezezezezzzezeezeeeeezeezezezeezzzzzzzzezzzzezzeeezzzeeeezzzzeeezeezzeezzezzzzzzezezzzzeezzzeeeeeezzeezzzeeeeeezeeezzzezzzzzzezzzeeezzzzezzzeezezezezzzeezeeezzzeezeeeezzzezzezezzzzzzeezezzezeezezeezzezezzzzeezezzzeeeezeezzezzzzzezzezezzzezezzzezeezezzeeezezeeeezzezeezzeezezezeeezzezeeezzzeezzzzzzzzezzezzezezzezzeezezezezzeezzzeeeeezezeeezeezezzezezzeeezeeezzezezeezzeeezezzeeeezzeezezeezeeezezzeezezeeezzzezeeezzzeezzeezeeezzezezeeeeezzzzzezezezzezzzeezzeezzzeeeeezezezeezzezzezeezzzzezeezezeezezzezezzzzzzzzezzzzzzzzeezeeezezezezezeezezzeezeeezzzzezezzzeeezzzzezeeezzeeeezzezzezzzzzzezezzezezeeezeezzzezzezzeezzzzeeeezeeeezzzzezezzezeezezeeeezezzzzezzezeeeeezzezzezzzeeeeezzzeeezzzzezeezzeeeeezzeeezzeezezzzezezezzzzezzezzzzezzzzezeeeeezzzzzezezzeeezeezzzeezzzzezzeezezezezzzzezzezzzzzezzzzezeezzezezzzeeezzzzeeeeezezzezezeeeeezeeezzeeeezezeezzeezeeeezezezzzzzzezzzezzzzzzezzeezezeezzzzzeezzeezzezezeeezzeeeezzezzeezzeeeezeezzeeezzzezezzzeezeezzzeeeeeeezezzezzzzzzzzzzzzzzeezezzzzeeezezzzeeezeeeeezzzzzzezezezzeezezzzzezezzzezzezezzzzeeezeeezzeeezzzezezzeeeeeeeeezzzeezeezezezezeeezezzezeezeeeezzzzezeezeezeeeeeezzezzzzezzzezzzzzezzzzzzzezezezzzezzezzezzzzzeeeeezeeeezeeeezzzeezzzeeeeeeeezzzeeeeezeezeeeeeezeezeeeezeezeeeeeeeeezezeeezezzzzzezzzeezzzzzezeeezzzeezzezzzezezzeezezzzezzezezeezzeeezzezzeezeezeezzezzzzzezzzzezzzezezzzzeeezzzezezzeeezzzzzeeeezzeezezzzezezezzzezzzzzezzeezzezzeezzzzzeeezezeezeeezezzeezeezeezzezzzeezezzezezeezzzzeeeeezezezezzeeeezzzzeezzzezzzeeezzezeeeezzzeeezzezezzeeezzezzzeeeezeeezeezzeezezezeeeezzezzzzzzeeeeeezzeeeezzzeezzeezezeeeezeeezzzzeeezeezzeezezeezezzezeezzzezezezeeeeeezzeeezzzzzzezeeeeezezzzeeezezzzezezzeezezeeeeezeezezeezzzeeezzzeeeeezeeezzzzeeezezzzezzzeeeezzeeeeezeezzzezezeeeezzzeeeeeezezezezzzeezzzzeeeezzzzezzzeeezeezzzezezzezzzzzzeezezzeezeeeezzzezzzezzeezzezeeezzzeezezzzeezzzezezzeeeezezezeezeeezzeezzzezezeeezzzezeeezzzezzzzezzeeeeezezzeeezeeezzeeeeezezzzeeezeeeeeezzzeezzzzezezzzzeeezeezeezeezzezezzezzezezezzezzzeeeeeezeezzeeezzezzzezeeeezzeeeezzzzezezzeezezeeeeeezzezzzeezzzezeeezeeezezzzzzeeezeeeezzezeeeezeezzeezzeezzzzzzzzeeeeezezezzeezezzzezzzzeezzzezeeeeeeeezzzzezeeeeezeeeezeezzzezzezzzzzzeeezeezeeeezzezeezzezzezzzeezeeeezezeeezzeeezezzeeezzezezezzzeezeeezzeezezzzeeezeeezzzzeezzzeeeeeezzezzezeezeeeeezezzezzeezezzzzzezzzeeeeeezzeeeeeezezzeeeezzezzezeeeeezzezzeezezzzezzeeezzzzzezezzzzzzeezzezeezzzzzzzezezeeezeezezeezzeeeeezzzzzezezzzzeeezzzzezzzzezeezzeeezzezzezezzzezezeeezzzezzezezzezzzzzezzzezzzzezezezeeeezzezzeezezezzzzeeezeezzezezezzeezezzezeeeeezzeeeezzzzeeeeeezezezezezzzzzeeeeezezeezeezzeezzzeeeeezeeezeezzeeeeezzezzeeezezeezzezezzeezzeezzzeeezezezezezzeeeezzezzzzzzzzeeeezzeezzzzezzeezeeezzezzeeeeeezezzzzeezzzzezzzeeezezezzzezzzezeeezzzzzezzzeezzzeezzzeeezzzzzezeeezeezzzeezzzzezzzezeeeeeeezezzeezzezezeeeeezezezeezzzezeezeeezezezzeeezezeezeezzzzzeeezezzzezzezezezeezzzzzeezezeeeezzezezzzeeeezzzezzezeeezeezzezzeeezzzzzzezeezezzzzeeeezzzzezzeezezzzzzeeezzzeeeeeezzezezzezzzeeeeezzzezzeezzzzzzezzeezzzzeeeeeezzezeeezezzzzezezzzeeeezzzeeezzezzeezeeezzezzzzzzzeezezezezeeezzzezeezeeezezzezeezezzeeeeezezeeeeeeeezeeezezezeezzeezezzezeeeezzzzeeezeeezzzzeezezzzezzezzzzzeeeeezeezzzzzzzezeeeezzeeezzzzzezzeezzezeeezezeezezezezezeezezeezezezzzzzzeeeezzeezeeeeezzezzezeeezezzeeeeeeezeezzzzezzezzezeeezezezeezezzezzzzezezzzzzzzeeeezeeeeezeezeezzezzeeezzeezzeeezezeezeeezeezezeezzzeezeezzzezzeeeezzeeeeeeeezzzeezeezezezzeeeezezezzzezezzzzzeezzzzzeeeezezezeezzeeeeeezzeezeezzzezezezeezeeezzzeezeezezezzzzzezzzzezzzeezzezzezzzeezzeezezzzzzezeezzeezeeezzzzzezezzzezzeezezezeeezezzzzzeeeezezezzezezzeezezzzezzzeezezeeeeezzzzzeeezzzzezzeeezezeeezeeeezzzeezeeezeezzzzezeeezzeezeeezzeezezzeezeezezezeezezeezzzzezezzezeeezeezzezzzzzzzezezezzezeezzezeezzezeezzeezzzeeezzzeezzeeeezzzzeeezzeezzezzeeezeeeezeeeezezzzzzzzezeeezezzezzzzzezezzzzzzzzzezzzzzeeeeeeezzzeezezezezezeeeezzzzezezeeezzzzzezeezezzeeezezezeezezeeezzeezzeezezezzzezzeeezeeeezezeezzzezezeeeezeezzeeezeeezzezzeeeezezeezeeeezeezzeezzezzezzzzzzzeeezezeezzeeezzzzeezzzeeeeezezeeeezzeezezeeeeezzezeeeezezzeezezzzzzezezeezzzzeeeezeezzezzezzeezzzeezzezzzzzzzezzeeezezzezzezzzzzzeezzzzeezzzeezeeezzzezzzzzeezzzeeeeezzeezeeeezzzzeeeezzeezzzezezzzzezezezeezeezeeeeezzezezeezzzzezzeeezeeezezezzeezzeeeezeeeeeezeezzzezeezeezeezezeeezzzzeeezeezezeezzzzezezezezezezezzezzzzezzeezzzzeeeeeezezzzezzeeezeeeezeeezzzzeezeeeezzzzezeeeezzzzezzzzzzeeezezzezzzezzeeeeeeeezeeezeeezzzzeezezzeeeezzzezzezzzzezezzzezzzzzzezzzzezeeezeezezzezezzeeezeeeezzzzezezeeezzezeeezzzeeeeeeezzeeeeezzzzzeezezzzzzezeezzzeezeeezzeezzeeeezzezzzzzzzzeezzezzzzzeeeeeeezzezeeezezezezzzzzzzeezzeezzzzeeeezzezzzzzezezzeeeezeeeeezezzezzeeeezezeeeeeeezzeezeezeezeezeeezezeeezezeezeeezzzzeeezzzezeezzezeeeezzezzezezeezezzzeezzzzzezeeezzeeezzzzeeeezzeeezzzzzeezeeeeezzzezeeezzzezezeezzzezzzezeeezeeeeeeeezzzezezzzeeeeeezzezzezzeeezzzzzezezeezeeezeeeeezzzzezzzeezeeezzzezzzzezezzzzzeezzezezezeeeeezezzzzeezzzeezzeezzeezeezzezzzzzzzzezezzeezeezeeeeezeeeeezzzzeeezzezezzezzzezezezezzeeezzezzzezzezzezezzeezeezzeeezezezzzezzeezzzeezeeeeezzzeeezeeeeeeeeezzzzezeeeeezzezzzeezeezezzeeezzzeeezeezzeeezzezzzeeezeeezzzzezezeezzeezzeezeeeezzezzezzzzzzeeeezezzeeeeeezzeezzzezeeeezzzzzzeezeezzezeeeeezeezzzzzezeeezezzeezzeeeeezezezzeezzzzzeezeezzzzezeezezzzzzzzzzzzeezezezzzzeezeezzezeeezzzezeezeezeezzezezeezzeeeezzzzzzzezzeeeeezzezezzzzzzeezezezeeeezzeeezzeezzzeeezzeezzezzezezezzzzzzzezezeezeeeeeezeezzezzzzzzzzeeezezzzzzezezzzeezzezeeezzzzzeezzzeezezzzezeeeezzeezezezzzzzzeeeezzzzzeeeeeeeezzeeezzeezzzzzezzzzeeezzzeeezeezzezzezezzezzeeezzeeeezeeezeezzzeeeezezezzzezzezeezezezzzeeeezezzeezeeeezezezezzeezeezzzezzzeeezzeeeeezezzeeeeeezzeeeezzezzzzzeeezeezezezezeezezzzzezzzezezzzezezeeezezeeeezzzzzeezzezzzeeeezezzezzezezeezzezzzzzzzzzezezeezzezzeezeezzeeeezeeezzzzzzzeeezzezezezezzeezzzezeeeezezezeeezzezezzzzeeeeeezzezzzzzezzezezezeeeeezzzeezzzezeezeeezezeezeeeeeeeeeezzeezzeeezeezezzzzezezezzeeeezezezeeeezezzeeezeezeeeezeezzzeeezeezeeezzzzeezzzezezzzzzeezezzzezzeeezeezzezeeezzeeezeeeeeezeeeeezzeeezzzzzzzzeezzeeeezzzzzzezzeeezezeeeezzezzeezeeezzezzezeezzzeeezzezezezeezzzezzzzeeezeeezezzeezezezzeeezezzeezeeezzzzzezezzeezezzzeeezzzezeezzezzzzeezezeeezzeeezzeezzezzzzeezezeezezzzezezzzezzeeezzzzzeezzzzzeezezzeeezeeeeezeeeeeezezzzezzzzeezezeeeezezeeezzezeeeezezzzezzzeeeezezzzezezezezzzeeeeeezezzzzzzzeeeeeezzeezzezeeeezzezzeezeeezezeeezzezzeezzezezzzeezzezzzzezezzzzeezzzzzzezzezeezzzezzezzzezzzeezzzzezzezzzzeeezzzezezzeeezeezezeezzeeeeeeeeezzeeezzzeezeeezezzzezezzzzeezezezezzzzeezeeeezeezezezeeeeezzeeeeeezzeezeeeezzzzeezezzeezeeezezzzezeeezzezezzzzzzeezzzezeezzzzzeezeeezeezeeeeezzeeeezzeezzeezzzzzezeezzzeezzeezezezzezeeezeezeezzzzeezzzeeezeezeezeeezezeezeeeeezzeezezeezzzezzzezzezeezezzzzzzezzzzeeezezeezzezezezeezezzeeeeeeezezzzeeeeeezezzzeezeeeezezezezezzzzzezeeezzzezezzzzeezezeeezezezezeezeezeezzzezzezezzzezzzezezezzeeeeezeeezzzezezzzezzzzezzzzezzeeeezzzzzezzezzzzezzzzezzzzzeezzeezzzzzeeezezzzzezezzzzzeeeezzzzzeeezezzzzzezeeeezzzeeeeezzeezzeezzeeeeeezezzzeeezeezzezzzzezzezzeeezzzzezzzezezzzezezzeezzezzzeezeezezezzeezeeezzezeezzzeezezzzeeeeezzzeezezzzzeeeezezzezzeezeeezzezzeeezzezzzzeeezeezeeeezeezeeezzeezzzeeeezzeezzezzezezzeeezzzezzzeeezzeeeezeeeezeeezezeezzzzezezzeezzzezzezzezzzzezezezzzeezeeezeeezzzzeezeeezzzeeezeezeeeezzzzzeezeeeezzeezezeezzezeeezezezezezzzezezeeeezzzzzzzzzzzeezzeezezzeeezzzzeeezzeeeeeezzzeeeezezeeeezezeezeeeezezzezezeeeeeeeeezzzzeeezeezeezzeeeeezezzeeezzzzzzeeezzzeeeeezezzzzeezzzezzzezzezzzzzeezezzezzeezezezeezzzeezzeezzezezezeeeeeezzezeeezzzzezezzeezeezzzezezeezeezzeeeeeezeeezzeeeezeezzzezeezzezzezeeeezeezzeeeeezzzeezeezzzezeeezeezzzeezeezzeeeezeezzeeezzzeeezeeeeeezzzezzzeezeezzezeeeeeeeeeezzezzzezeeeeezzeezzezzzeezeezezzzeeezezeezeezzezzeeezzezzzeezzeeezzezeeeeeezzeeezzzzezzezeeezzzzzzezzzzezeeeeeeezezzzezezeeezzzzeezeezeeezeezeezzezzezezezzzzeeezzezezeeeezezzzezzezzzzeezzzzeezezeezzezezzeeezzzzezeeeeeeeeeezeeeezzeeezzezeezzezezzeezeezzeeeeezzezezeezzezeezeezeezzezzzezeeeezezezezzzezeeezzeeeeeeezezeezeezzezzezezeeezzzzeezzeezzezezzeeeeezeeeeezzzeezzezeeeeezzeeeeezezezzeezzezezezezezeezzzzzeezeezeeezezeezzezzeeeezezezezzezezzeezzzezzezezezezzzezzeeezezeeezeeezezezzeeeezzzeezeeeeeeezeeeezzezezezzzzzzzezezzzeezzeezeezzezzzeeezzezzeezzzeeezezzeeezeeezeezzezzzezzeezzzzzezzzeeeezeezeeeezeeeeeezeezzzzzeezeeeezeeeezzezzzeezzezzezzeezzzeeeezeeezzeeezzzzzzeezzezeezezeezzezzzezezzzeezeezezzzzezzezzzzezzezzzezzzzzeezzzeezezeeezeeeeeeezeeeeeezeeezezzzzezeeezzezzezezeezzezzzzeeezezzeezzezezzzezezzeezeeezezzzeezzezzzzeeezeezezezeezeezeeeezzezeezzzzeeeezzeeezzezzeeezezeeeezeeezezeeezzzezzeezzezezzzezzzeeezeezeeeeezeeeezzeeezeezeeeezezezzzzzezzeeeeezeezezzezezzzezzzezezeeezeeezeeeezzzeeezeeezeezezzeezezzezzeezzeezeeezezezzzeezzzeezezezzzezzezzzzzzzeeezezezezezzezzeeezzzeeezzeezezeeezezzzezzeezzzzeezzzzeezzeeezeezezeeeezzezeezzeezeezzeeeeeeezzzeeeeeeeeeeezezzzzzezeeeezzzzezzzezzzeezzzeeeeezzzzzzeezzezeezzzeezzzzzezeeeezeeeezezeezzeezzzeeeezzzezzeeezeeeezezezeezeeeezeezzzzezezzzezzzezzzzeezzzezezezezzezeeeeezzezezeezezzeeezzeezeezzzeezeezzzeezeezzzezezezeeeezeeezezzzzzzzzzeeezzezzzezezeezzezeezezzzzzzeezzezzzeeezeezezzeezzezzeeeeeeeeeezzzezzeezezeezezeeezezzzzeezezezzezezzzeezzzzzezezeeeeeeezzzezeeezezeezezezeezzzzeezezzeeezzzzeezzeezeezzeeeeezeezzzeezzezzzzzezzzezzeezezeeezeezzzzezezzzzeeezezeeeezzzezzezezezzeeezzeeezzeeezezzzezeezzeezzzzzezzeeeeezeezeeeeeeezeeezzzezezzezzezeezezzzzeeeeezeeeezzezeezezzzezezeeezzezeezeeeezzzeeeezzzzezeeezzezeeezzzezzeezeezzzzeeezezzzeezzzzzzezezzezzzzezezzzzzzzzezzzzezzzzezeeezeezezeeeeezzezezzeezezezzeezeeeeezzezzzeezeeezeezeeezzzezzeezzeezzzzeeeeezzzzezzzezeezeezzeeezzezezzezzzeezzeezzzzzezzzezezzeeeezzezeeeezeezeezezezezeeezezzzezzzeeeeeeezzeeeezzeeeezezzeezzeeezezzzezezzzeezeezezeezeeeezzeeezzezzzeezeezzzezzzzzeeezeeezzzzzezzzezeeeezeeeeeezeezzzezezzzezzzzzzeezzzeezeeeezzzeeeezezzzzeezzzeeeeeezzezzzzzezezeezezzzezzzezezzzeezzeeeeezezzzezzeeeeeeezzzzzzezeezezeezzzzezzzzzzzzzeezzeeezzzzzeeezezzeezzzzezzzzzeezzzzzezzzezezzzeezeeezzezzezzezeeeezzzzezzezzeeeezzzzeezzeeeeezezzzezzzeeeeezzeeeezeeezzzzzzzzeezzzezzzezzeeezezzezzzzzezeezzeezzzezzezezezeeezzzzzzeezzzzzezeeezezeeezzeezzeezezezezezezzzeeeezeezeeezzeezzezeezzzezezezeezeezzzeeezezeeezzzezezeezzzzezeeeeezzzzzezzeezezzezeezzzeeeeeezezeeeezeezzezezeeezezzezzeeezezezezezezzeezezzzzzeezezzeezeezeeeeezeeezezzzzeeezzeezzeezzzzzzzzzeeezezezeeeezzeezeeezzeeeeeeeezzeezzzeezeeeeezezeeezezzzeeezzzeezezzezeeeezezzeeeezzzzeeeeeezezzzzzzezzzzezzzzeeezzzzeezzezezeezzzezzeezezzezezeezzzeezzeezeezezezezeezezezeeeezezzezzzzzzzzeezezzezezezezeezzeezzezzzzzeeeezzeeeezzeeeeeeezzzzezezezzzzzzezzeeezzeezzzzzezzezeeezezzezeeeeezezzzeezzzezzeezezzezezezezeeezzeezzzzeeezzezzzeeeeeeeeezzezzeezzzezeezezzzzzezezzzezzezzeezzezzzzeeezzezeeezzzezzzeeezzzezzezzezezezeeeezeeezezzzzzzzeeeeeeeeezzzzezezzzzezeeezzeeeezzezezzzzzzeeezezeeeeeezezzzzeezezzeeeeeeezzeeezezeeeezzzezzzzezzzeezezzzzezezzeezzzzeezzzzeezzzzzzzzzezzzzzzzeezzzeeezezzzeezeezeeeezeeeeeezzzzezzzezzzzeezeezzeezezeeeeeeezzeeeeezzezzeeezzzzzezzezzzzezezeezzezzeezezzezzzzeezezzzeeezeezezezzzzezzzzeeezeezzezeezzeeeezzzzeeezzezezeeeeezeeeezzezezzzzzzeeezzeezzzeezezzzzezeeeeezzezeezzzeeezeezzeezzzzzeeeezzezzezezzezzeezezzzzeeeezeeezeeezzzzzzzezzzzzeezeezeezzzeeezzzzzeezzzzzezzezzezezeezzzeezzzzzzzezezeeezezeezzzzzeeezzzzzzzezeezezzeezzzeezzezzeezzezeezzzezezzzzzezzezzzzzzeezzeeeezzezezeezeeeeeezzzeeezzzzeeezzezzeezzezzezezzzeezzezezezzezezeezezzzezeeeezzzzzeezezeeeeeezzeeeeezeezzzzeezezeeeezzzzzeeeezzzzzezeeezeeeezezzzeezzezzeeeeeezzzzzzeeezeezeezeeezeezzezeezeeezzzzzezzzzzezezezezzeezeeezeeezzezezzzeezzzzzeeezzzezeezzzezzezeezzzezzzzezzezzzzeeezeeezzzeeezezezzeeezzzeeeeezeeezezzzezzzezzzzzzzeeezezzzeezzzzezezeeeeezezezeezezzeeeeezeeeezzzezzzzzzzzezzeeeeeeeezezeeezezezzzezezezeezeezzzeeeezzzzeezzzzzezezezzezeeeezzeezeezeezzzeeeezzeezeezzeezzzezzeezzzezezezzeeezzezzzzzeezzzeeezezeeeeeeezzezezzeezezzeeezzeezezzzzeezzeeezeeeeeeezzezzezezzzzezezzzezezeeezeezeeezzzezzzzzzzzeeezzzzzezeezeezezeeezezzeezeezeeezzeeezzzeeezeezzzezeezeeezzzezzzezezzeeeeezzzzezzzzeeezeeezezzezzzezzezezzzzezeeeeeezezzzezezzezezzeeezezzezezeezezzeeeeeeeezzzeezzeezzeezzeezezzezzzzeeeezeeeezeezzeezeeezzzzezzezzzezzeezezzeezeezezeeeezeezzezzzzzzeezzezzzeezezeezeeeeeezezeezeezezzzeeeeezzezzzzzeeezzzzzezezzezezeezeeeeeeeeezzeezeezzzezzzzzzeeeezzzezzezeezzezeeezezezzezezeeezzzezezezzeezeeeeezeezezezzezeeezzzeeeezzzzeezeezzzeeeeeezeeeezezezzzzzeeeezzzezeeeezzzzeezeeeezezzzzeeezezezezeezzzeezzezzezzeezzzeeezzezzeeeeezeeezzeezzzzeezzzezzzzzzzezzezeezzeezeezzezzzeeezzeezezzeeezeezzzzezzzzezeeezeeezzeeeezzzzzezzezezzezzeezeeeeezezeeezzeezezzeezzzzeezezeezzeezzezzzeezezzzezzzzeeezzzezzeeezezezezzzzeezeezezzezezzeezzeeezzzezzeezzeezzezzzeeeeeezzzeeezzezzzzzeeezeezzzzzezeezezezeeeeezeeezzzzezezeeezzeeezeeezzezeezzeeeeeeeeezezzzzeeezeezzzezezzeezzzzzzeeezezzzzeeeezezezezzzzeezzeeeeeeezzezeezzzzezeeeeezzzezzeeeeeezzeezeezzzzzzeezzeezzezeezeezezzzeezzzezezeeezzzzezezezeezzezezzeeezeeeezzezzeeezezzzeezzzezezzeezzezzzzezeeezeezzeeezezzzzezezeezezezeeeeeezezezezeezzzezeezzzzzeezzeeeeezezezzzzzeeeeezzezeeezeeeeeeeeeeeezzezzeeeezeezzzzzeeeezezzezzzeezzezezezeeezzezeezeezzeezzzeezeezezzezeeeeezeezeeeezezzzzezeezezzeezezezzzeeezeezzezeeezzzzzeeezezzzzzezzzzzzzzzezezzzzeeeeeeeeeeezeeezzezzzezezzezezzeezeeezezeeezzzzezzeeezzzzeeeeezezzeezeeeezeeeezzeezzzzzezezzzezzzzezzeezzzezzzzezezzzzzzzzzzezzeeezzezzzeeeeeeeeeezzezeezezezzeeeeezezzzzeezezezezzezzeezezeeezeeezezzezzzzezzzeezzzeeezzezeeezezeeezeeezezzeeezeeeezeezzezzzzzezeeezezezzzeezzezzeezzezzzezeezezzzezeeeezezeeeeeeeeeezeeeeeezzzeeeezzezeezezeeezezeeeeeezzeezzzeezzeeezezzzezezezeezeeezzzeezeezezeezzezezzeeeezeezzzeezzzzzzzeeeeeeezezzezzeezeezezeeezzezzzezeeeezzeeeeeezeeezezezzzzezzzzzeeezeeeezeeezeezzeeezeeezzezezezzezeeezezzzzezzezeezzzzzeezeeeezezzzezzzzzeezzeeeezzeeezzezezeeeezeezezeezeezzeezezzzzzeeeeezeezezzezzzzezzzezzzzzezeezzzzeeezzeeezzezezezzzeeezzzeezzzezeezzezzeeeeeeezeezeezzezezeeeezeezeezzezezezezzzezzzzzzezzeezzzezzezezzezezzezzzzzzeezeeezzzezezzzezzeezezzeezzzezzezezeezzeezzzzzzzezezeezeeeezeeezezzeezzeezezzeeezeeeezzzzeezzzzeezeeeeezzzezzeezezezzezeeeeeezzezzzeezzezeeeeeeezezezzezzzzeezzzezezeezzzezezzezzezzeeeeezezzezzzeeezzzzzeeeeeezeeezzezzzzeezeezeeeezzezzezezeezzzeeeeezezzzzzzezzzezzzzzeezzezezzzezzezzeezzeezzzeeeezzezezeezezzezezzezzzzezezzzzzzzezzezeeezzeezzzezzeeeezzzeeezzzzzezzzzzezzezzzeeezzzeezzzeeezeezeeezeezzzeeezzezzzzezezeezzezezezzzzeeeezezzzzzezezzeezeezzeezezezzzezzeezeeezeeeezezeezzeeeeeeezzzzzzzeeezezzezzzezezzezezzeeezezezzezzeeezzezezezeeeeezzezzezeeezzeezezeeeeezeeeezezzezeezezezeezzzzzzzezzeezezezeezezzeeeeeeeezezeezeeezezzzzzzeezeeezzzzezeezzzeeezzzzeezzeeezzeezezeecocjncchnvohchnjohcvnhjdhihsn")) //3

// function isSubstitutionCipher(string1, string2) {
// 	let cipherAlphabet = {}
// 	for(let i=0; i<string1.length; i++){
// 		if(cipherAlphabet[string1[i]] === undefined){
// 			if(Object.values(cipherAlphabet).includes(string2[i])) return false
// 			else cipherAlphabet[string1[i]] = string2[i]
// 		}else if(cipherAlphabet[string1[i]] !== string2[i]) return false
// 	}
// 	return true
// }

// console.log(isSubstitutionCipher('ab', 'ac')) // true
// console.log(isSubstitutionCipher('aa', 'bc')) // false
// console.log(isSubstitutionCipher('ab', 'bc')) // true

// function createAnagram(s, t){
// 	let sArr = s.split('')
// 	for(let i=0; i<t.length; i++){
// 		if(sArr.includes(t[i]))	{
// 			sArr.splice(sArr.indexOf(t[i]),1)
// 		}
// 	}
// 	return sArr.length
// }
// // sArr
// //	loop s letters
// //		if t.includes(s[i])
// //			s.spice(i,1)
// //	return s.length
// //

// console.log(createAnagram('AABAA', 'BBAAA')) // 1
// console.log(createAnagram('OVGHK', 'RPGUC')) // 4
// console.log(createAnagram('AABCDS', 'BASEAE')) // 2

// function constructSquare(s) {
// 	const getSig = (st) => {
// 		let arr = st.split('')
// 		let unique = ''
// 		let sig = []
// 		for(char of arr){
// 			if(!unique.includes(char)){
// 				unique += char
// 				sig.push(arr.filter(c=>c===char).length)
// 			}
// 		}
// 		// console.log(sig.sort().join(','))
// 		return sig.sort().join(',')
// 	}

// 	let n = 0
// 	let str;
// 	let res = -1
// 	const sLength = s.toString().length

// 	for(let i=1; i<=99999; i++){
// 		n = i * i;
// 		str = n.toString()
// 		// console.log(i, str)
// 		if(str.length > s.length){
// 			// console.log(str, s)
// 			break;
// 		}else if(str.length === s.length){
// 			if(getSig(str) === getSig(s)) res = n
// 		}
// 	}
// 	return res
// }

// console.time('constructSquare')
// console.log(constructSquare('aaaabbcde'))
// console.timeEnd('constructSquare')

// // console.log(getSig('aaaaaaabbb'))

// function numbersGrouping(a) {
// 	let unique = []
// 	let nBin = 0
// 	a.forEach(n=>{
// 		nBin = Math.floor(n/10000)
// 		if(!unique.includes(nBin)) unique.push(nBin)
// 	})
// 	return unique.length + a.length

// }

// function numbersGrouping(a) {
// 	let unique = new Set()
// 	a.forEach(n=>{unique.add(Math.floor((n-1)/10000))})
// 	console.log(unique)
// 	return unique.size + a.length
// }

// // function numbersGrouping(a) {
// // 	let unique = []
// // 	let nBin = 0
// // 	a.forEach(n=>{
// // 		nBin = Math.floor(n/10000)
// // 		if(!unique.includes(nBin)) unique.push(nBin)
// // 	})
// // 	return unique.length + a.length

// // }
// // split array of numbers in to groups 1-10^4, 10^4+1 - 2*10^4 ... 99*10^4+1 - 10^6

// // All the numbers will then be written down in groups to the text file in such a way that:

// // the groups go one after another;
// // each non-empty group has a header which occupies one line;
// // each number in a group occupies one line.

// // Return the number of lines

// // For a = [20000, 239, 10001, 999999, 10000, 20566, 29999], the output should be
// // numbersGrouping(a) = 11.  (7 numbers, 4 headers)
// console.time('numbersGrouping')
// console.log(numbersGrouping([20000, 239, 10001, 999999, 10000, 20566, 29999])) // 11
// console.timeEnd('numbersGrouping')
// console.time('numbersGrouping')
// console.log(numbersGrouping([10000,1])) // 11
// console.timeEnd('numbersGrouping')

// function differentSquares(matrix) {
// 	let unique = new Set()
// 	for(let i=0; i<matrix.length-1; i++){
// 		for(let j=0; j<matrix[0].length-1; j++){
// 			unique.add(matrix[i][j] + "." + matrix[i+1][j] + "." + matrix[i][j+1] + "." + matrix[i+1][j+1])
// 		}
// 	}
// 	return unique.size

// }

// console.log(differentSquares([[1, 2, 1],
// 	[2, 2, 2],
// 	[2, 2, 2],
// 	[1, 2, 3],
// 	[2, 2, 1]])) // 6

// function mostFrequentDigitSum(n) {
// 	const getSum = (k) => {
// 		let sum = 0
// 		for(char of k.toString()){
// 			sum += parseInt(char)
// 		}
// 		return sum
// 	}

// 	let unique = []
// 	let array = [n]
// 	let x = n
// 	while( x > 0 ) {
// 		x -= getSum(x)
// 		array.push(x)
// 	}
// 	array = array.map(a=>getSum(a))
// 	array.forEach(a=>{if(!unique.includes(a)) unique.push(a)})
// 	unique = unique.map(a => {
// 		return [a, array.filter(b => b===a).length]
// 	})
// 	const mostFrequent = Math.max(...unique.map(arr=>arr[1]))
// 	return Math.max(...unique.filter(arr => arr[1]===mostFrequent).map(arr=>arr[0]))
// }
// // let unique, array = []
// // x=n
// // while x > 0
// //	x = step(x)
// //	push to array
// // endwhile
// // array = array.map(s(x))
// // array.forEach(if !unique.includes  -> unique.push)
// // unique.map(array.filter().length)
// // if(unique.filter(Math.max(...unique)).length > 1)

// console.time('mostFrequentDigitSum')
// console.log(mostFrequentDigitSum(8)) // 8
// console.timeEnd('mostFrequentDigitSum')

// function numberOfClans(divisors, k) {
// 	let numArr = new Array(k);
// 	let unique = new Set();
// 	numArr
// 		.fill(1)
// 		.map((num, i) => num + i)
// 		.map((num) => {
// 			return divisors
// 				.map((d) => {
// 					return num % d === 0 ? 1 : 0;
// 				})
// 				.join("");
// 		})
// 		.forEach((sig) => {
// 			unique.add(sig);
// 		});

// 	return unique.size;
// }

// console.log(numberOfClans([6, 2, 2, 8, 9, 2, 2, 2, 2], 10)); // 4

// numbers
/*

1 neitherfunction numberOfClans(divisors, k) {

}

2 2 !3
3 !2 3
4 2 !3
5 neither
6 2 3

*/

// function houseOfCats(legs) {
// 	let res = []
// 	const start = (legs/2)%2===0 ? 0 : 1
// 	for(let i=start; i<=legs/2; i+=2){
// 		res.push(i)
// 	}
// 	return res
// }

// console.log(houseOfCats(20)) // [1,3]

// function minimalNumberOfCoins(coins, price) {
// 	let count = 0
// 	let p = price
// 	let qty
// 	for(let coin of coins.reverse()){
// 		qty = Math.floor(p/coin)
// 		if(qty>0) {
// 			count += qty
// 			p -= coin * qty
// 		}
// 	}
// 	return count
// }

// // for array coins, coins[i] % coins[i-1]===0
// // what is minimal # of coins summed to price

// console.log(minimalNumberOfCoins([1,2,10], 28)) // 6

// function addBorder(picture) {
// 	picture.unshift("*".repeat(picture[0].length))
// 	picture.push("*".repeat(picture[0].length))
// 	return picture.map(str=>"*"+str+"*")
// }

// console.log(addBorder(["abc","ded"]))

// function switchLights(a) {
// 	for(let i=0; i<a.length; i++){
// 		if(a[i]){
// 			for(let j=0; j<=i; j++){
// 				a[j] = a[j] ? 0 : 1
// 			}
// 		}
// 	}
// 	return a
// }

// console.log(switchLights([1,1,1,1,1])) // [0,1,0,1,0]
// console.log(switchLights([0,0])) // [0,0]

// function timedReading(maxLength, text) {
// 	return text.split(' ')
// 		.map(word=> word.replace(/[^a-zA-Z]/g,''))
// 		.filter(word=>word.length<=maxLength && word.length > 0)
// 		.length
// }

// // console.log(timedReading(4, "The Fox asked the stork, 'How is the soup?'")) // 7
// console.log(timedReading(1, "...")) // 7

// function electionsWinners(votes, k){
// 	if(k===0 ){
// 		if(votes.filter(count=>count === Math.max(...votes)).length === 1) return 1
// 		else return 0
// 	}
// 	const maxVotes = Math.max(...votes)
// 	return votes.filter(count=>count + k > maxVotes).length
// }

// // console.log(electionsWinners([40, 50, 52, 20], 3));

// console.log(electionsWinners([2,3,5,2], 3)) // 2

// function integerToStringOfFixedWidth(number, width) {
// 	let str = number.toString()
// 	return str.length < width
// 		? '0'.repeat(width - str.length) + str
// 		: str.substr(str.length - width)
// }

// console.log(integerToStringOfFixedWidth(1234,4)) // '234'

// function areSimilar(a, b) {
// 	for(let i=0; i< b.length;i++){
// 		if(!a.includes(b[i])) return false
// 	}
// 	const misMatch = b.filter( (el, i) => el !== a[i]).length
// 	if(misMatch === 0) return true
// 	if(misMatch === 2){
// 		const missBSorted = b.filter((el,i) => el !== a[i]).sort()
// 		const missASorted = a.filter((el,i) => el !== b[i]).sort()
// 		console.log(missASorted, missBSorted)
// 		if(missASorted[0] === missBSorted[0] && missASorted[1] === missBSorted[1]) return true
// 		return false
// 	}
// 	return false
// }

// // need to catch duplicates

// console.log(areSimilar([1, 4, 2, 5, 3, 7, 4, 8, 4, 2, 25], [1, 4, 2, 5, 3, 3, 7, 8, 4, 2, 25]))
// console.log(areSimilar([1,2,3], [2,1,3]))

// function adaNumber(line) {
// 	let num
// 	let base
// 	// test if decimal
// 	if(!/[^0-9_]/.test(line) && /[0-9]/.test(line)) return true
// 	else if(line.includes('#')){
// 		base = parseInt(line.substring(0,line.indexOf('#')).replace("_",""))
// 		console.log('line', line,'base', base)
// 		if(base < 2 || base > 16 || line[line.length-1] !== '#') return false
// 		else{
// 			let digits = '0123456789abcdef'
// 			let pattern1, pattern2
// 			if(base < 11) {
// 				pattern1 = "[^0-" + digits[base-1] + "_]"
// 				pattern2 = "[0-" + digits[base-1] + "]"

// 			}else if(base === 11) {
// 				pattern1 = "[^0-9a_]"
// 				pattern2 = "[0-9a]"
// 			}else {
// 				pattern1 = "[^0-9a-" + digits[base-1] + "_]"
// 				pattern2 = "[0-9a-" + digits[base-1] + "]"
// 			}
// 			let re1 = new RegExp(pattern1, 'i')
// 			let re2 = new RegExp(pattern2, 'i')
// 			num = line.substring(line.indexOf('#')+1,line.length - 1)
// 			console.log('num',num)
// 			if(re1.test(num) || !re2.test(num) || num.length === 0) return false
// 			return true

// 			// return [base,num, pattern, re.test(num)]
// 		}
// 	}else return false
// }

// // console.log(adaNumber("123_456_789")) // true
// // console.log(adaNumber("16#123abc#")) // true
// // console.log(adaNumber("10#123abc#")) // false (digits abc out of range 0-9)
// // console.log(adaNumber("10#10#123ABC#")) // false (too many #)
// // console.log(adaNumber("10#0#")) // true
// // console.log(adaNumber("10##")) // false (no digits between ##)
// console.log(adaNumber("16#1234567890ABCDEFabcdef#")) // true
// console.log(adaNumber("9#____#")) // false
// console.log(adaNumber("1_4#___C63A_4cc6_5B362d__3#")) // true -
// console.log(adaNumber("__")) // false

// function threeSplit(a) {
// 	let count = 0
// 	let sum
// 	let total = a.reduce((total, current) => total + current, 0)
// 	for(let i=1; i<a.length-1; i++){
// 		sum = a.slice(0,i).reduce((total,current) => total + current,0)
// 		if(sum === total / 3 ){
// 			for(let j=i+1; j<a.length; j++){
// 				if( sum === a.slice(i,j).reduce((total,current) => total + current,0)){
// 					count += 1
// 				}

// 			}
// 		}
// 	}
// 	return count
// }

// function threeSplit(a) {
// 	let count = 0
// 	let sum1 = 0
// 	let sum2 = 0
// 	let total = a.reduce((acc,n)=>acc+n,0)
// 	for(let i=0; i<a.length-2; i++){
// 		sum1 += a[i]
// 		if(sum1 === total / 3 ){
// 			sum2 = 0
// 			for(let j=i+1; j<a.length-1; j++){
// 				sum2 += a[j]
// 				if(sum1 === sum2){
// 					console.log('i', i,'j', j, 'sum1',sum1, 'sum2', sum2)
// 					count += 1
// 				}
// 			}
// 		}
// 	}
// 	return count
// }

// console.log(threeSplit([0,-1,0,-1,0,-1])) // 4
// console.log(threeSplit([0,0,0,0,0])) // 6 - 0 0 000, 0 00 00, 0 000 0, 00 0 00, 00 00 0, 000 0 0

// function newNumeralSystem(number) {
// 	let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// 	const dec = alphabet.indexOf(number)
// 	let res = []
// 	for(let i=0; i<=Math.floor(dec / 2); i++){
// 		res.push(alphabet[i] + " + " + alphabet[dec - i])
// 	}
// 	return res

// }

// console.log(newNumeralSystem('G')) // ["A + G", "B + F", "C + E", "D + D"]

// function cipher26(message) {
// 	const alphabet = "abcdefghijklmnopqrstuvwxyz"
// 	let res = [alphabet.indexOf(message[0])]
// 	let encrypted
// 	let decrypted
// 	let sum = res[0]
// 	for(let i=1; i<message.length; i++){
// 		encrypted = alphabet.indexOf(message[i])
// 		decrypted = (( encrypted+26 ) - sum%26)
// 		res.push( decrypted%26 )
// 		sum = sum + decrypted
// 	}
// 	return res.map(i=>alphabet[i]).join('')
// }

// console.log(cipher26("taiaiaertkixquxjnfxxdh")) // thisisencryptedmessage

// // console.log(cipher26('taia')) //this

// //  	19 	19+7%26=0 26+8%26=8 34+18%26=52%26=0
// //		19	(19+x)%26=(0+(n*26))%26

// function stolenLunch(note) {
// 	const cipher = "abcdefghij"
// 	const numbers = "0123456789"
// 	let decrypted = ''
// 	let inMessage = true
// 	for(char of  note){
// 		// console.log(parseInt(char))
// 		if(inMessage){
// 			if(char === ":") {
// 				inMessage = false
// 				decrypted += char
// 			}else if(numbers.includes(char)) decrypted += cipher[parseInt(char)]
// 			else decrypted += char
// 		}else{
// 			if(cipher.includes(char)) decrypted += cipher.indexOf(char).toString()
// 			else decrypted += char
// 		}

// 	}
// 	return decrypted
// }
// function stolenLunch(note) {
// 	const cipher = "abcdefghij";
// 	const numbers = "0123456789";
// 	return note
// 		.split("")
// 		.map(ch => {
// 			if(cipher.includes(ch)) return cipher.indexOf(ch).toString()
// 			else if(numbers.includes(ch)) return cipher[parseInt(ch)]
// 			else return ch
// 		})
// 		.join("");
// }

// // console.log(stolenLunch( "you'll n4v4r 6u4ss 8t: cdja")) // "you'll never guess it: 2390"
// console.log(stolenLunch("jihgfedcba")); // 9876543210

// function higherVersion(ver1, ver2) {
// 	const serial = (ver) => {
// 		return ( ver
// 			.split(".")
// 			.reverse()
// 			.reduce((acc, x, i) => {
// 				return acc + parseInt(x) * Math.pow(100, i)
// 			}, 0))}

// 	return serial(ver1) > serial(ver2)
// }

// console.log(higherVersion("1.0.5", "1.1.0")); // true

// function decipher(cipher) {
// 	let res = ''
// 	let i = 0
// 	while(i<cipher.length){
// 		if( parseInt(cipher[i]) === 9 ){
// 			res += String.fromCharCode(parseInt(cipher[i] + cipher[i+1]))
// 			i += 2
// 		}else{
// 			res += String.fromCharCode(parseInt( cipher[i] + cipher[i+1] + cipher[i+2] ))
// 			i += 3
// 		}
// 	}
// 	return res
// }

// console.log(decipher("10197115121")) // 'easy'

// console.log('z'.charCodeAt(0))

// function alphanumericLess(s1, s2){
// 	// get tokens
// 	const tokenize = (s) => {
// 		// console.log(s)
// 		const numbers = '0123456789'
// 		let i = 0;
// 		let tokens = []
// 		while(i<s.length){
// 			if( numbers.includes(s[i])){
// 				tokens.push(['',0])
// 				while( numbers.includes(s[i])){
// 					tokens[tokens.length-1][0] += s[i]
// 					tokens[tokens.length-1][1] += 1
// 					i++
// 					// console.log(tokens)
// 				}
// 				tokens[tokens.length-1][0] = BigInt(tokens[tokens.length-1][0])
// 				console.log(tokens)
// 			}else{
// 				tokens.push([s[i], 0])
// 				i++
// 			}
// 		}
// 		return tokens
// 	}
// 	const t1 = tokenize(s1)
// 	const t2 = tokenize(s2)
// 	const shorterLength = Math.min(t1.length, t2.length)
// 	for(let i=0; i<shorterLength; i++){
// 		if( t1[i][0] > t2[i][0] ) return false
// 		if( t1[i][0] < t2[i][0] ) return true
// 	}
// 	if(t1.length !== t2.length) return t1.length < t2.length
// 	else{
// 		console.log('equal',t1,t2)
// 		for(let i=0; i<t1.length; i++){
// 			if(t1[i][1] > 0) {
// 				if( t1[i][1] !== t2[i][1] ) return t1[i][1] > t2[i][1]
// 			}
// 		}
// 		return false
// 	}
// }

// // console.log(alphanumericLess('a', 'a1')) 	//true
// // console.log(alphanumericLess('ab', 'a1')) 	//false
// // console.log(alphanumericLess('b', 'a1')) 	//false
// // console.log(alphanumericLess('ab1c', 'ab001c')) 	//false
// // console.log(alphanumericLess('ab1c', 'ab1c')) 	//false
// // console.log(alphanumericLess('ab01c', 'ab1c')) 	//true
// console.log(alphanumericLess('12345678909876543210', '12345678909876543211')) 	//true

// function arrayConversion(inputArray) {
//     let j=1
//     let input = [...inputArray]
//     let output = [...input]
//     while(input.length > 1){
//         output = new Array(input.length / 2)
// 		output.fill(0)
//         if(j % 2 === 1) {
//             output = output.map((x,i)=>input[i*2]+input[i*2+1])
//         }else{
//             output = output.map((x,i)=>input[i*2]*input[i*2+1])
//         }
//         j++
//         input = [...output]
//     }
//     return output[0]
// }

// console.log(arrayConversion( [99])) // 186

// function arrayPreviousLess(items){
// 	let result = new Array(items.length)
// 	result.fill(-1)
// 	for(let i=0; i<items.length; i++){
// 		console.log(i,items[i])
// 		for(let j=i-1; j>=0; j--){
// 			console.log('i,j', i, j,'i', items[i], 'j', items[j])
// 			if( j < 0) result[i] = -1
// 			else if(items[j] < items[i]){
// 				console.log('prev less')
// 				result[i] = items[j]
// 				break;
// 			}
// 		}
// 	}
// 	return result
// }
// console.log(arrayPreviousLess([3,5,2,4,5])) // [-1,3,-1,2,4]

// function pairOfShoes(shoes) {
// 	let pairs = []
// 	shoes.forEach(shoe=>{
// 		pairs[shoe[1]] === undefined
// 			? pairs[shoe[1]] = (shoe[0] * 2 - 1)
// 			: pairs[shoe[1]] = (shoe[0] * 2 - 1) + pairs[shoe[1]]
// 	})
// 	for(let pair of pairs){
// 		if(pair !== 0 && pair !== undefined) return false
// 	}
// 	return true
// }

// console.log(
// 	pairOfShoes([
// 		[0, 21],
// 		[1, 23],
// 		[1, 21],
// 		[0, 23],
// 	])
// ); //	true
// console.log(
// 	pairOfShoes([
// 		[0, 21],
// 		[1, 23],
// 		[1, 21],
// 		[1, 23],
// 	])
// ); //	false

// console.log(pairOfShoes([[1,41],
//  [1,40],
//  [1,45],
//  [0,42],
//  [0,42],
//  [0,42]])) // false

// function combs(comb1, comb2) {

// 	let result = comb1.length + comb2.length

// 	let c1 = [...comb1.split('').map(t=>t==="*" ? 1 : 0)]
// 	let c2 = comb2.split('').map(t=>t==="*" ? 1 : 0)
// 	let arr = []
// 	for(let offset=(-c2.length); offset < c1.length; offset++){
// 		console.log(c1,c2)
// 		arr[offset + c2.length] = [
// 			Math.abs(offset) + c1.length,
// 			true
// 		]
// 		const aligned = new Array(arr[arr.length-1])
// 		for(let i=0; i<aligned.length; i++){

// 			aligned[i] = offset < 0
// 				? c2[i] +
// 		}

// 		// aligned = new Array()
// 	}

// 	return arr
// }

// function combs(comb1, comb2) {
// 	const filler = new Array(comb2.length);
// 	filler.fill(0);

// 	const static = [
// 		...filler,
// 		...comb1.split("").map(t => (t === "*" ? 1 : 0)),
// 		...filler,
// 	];
// 	const moving = comb2.split("").map(t => (t === "*" ? 1 : 0));
// 	const mL = moving.length;
// 	const sL = static.length;
// 	const sL0 = comb1.length;

// 	let aligned = [];
// 	for (let offset = 0; offset <= sL - mL; offset++) {
// 		aligned[offset] = static.map((x, i) => {
// 			if (i >= offset && i < offset + mL) {
// 				return static[i] + moving[i - offset];
// 			} else {
// 				return static[i];
// 			}
// 		});

// 		aligned[offset].splice(Math.max(offset + mL, mL + sL0), mL); //trim right
// 		aligned[offset].splice(0, Math.min(offset, mL)); // trim left
// 	}

// 	return Math.min(
// 		...aligned.filter(arr => !arr.includes(2)).map(arr => arr.length)
// 	);
// }

// console.log(combs("*.*.*", "*.*"));

function stringsCrossover(inputArray, result) {
	let count = 0
	for(let i=0; i<inputArray.length-1; i++){
		for(let j=i+1; j<inputArray.length; j++){
			console.log(i,j)
			let match = 1
			for(let k=0; k<result.length; k++){
				if(result[k] !== inputArray[i][k] && result[k] !== inputArray[j][k]) {
					match = 0
					break
				}
			}
			count += match

		}
	}
	return count
}
// get permutations
// test purmutations ( result [i] === perm[j][0][i] || result[i] === perm[j][1][i])

console.log(stringsCrossover(['abc', 'aaa', 'aba', 'bab', 'bba','wwb'], 'bbb'))
