// function adjacentElementsProduct(inputArray) {
//     let max = 0;
//     for(let i=0; i<inputArray.length-1; i++){
// 		console.log(inputArray[i],inputArray[i+1])
// 		if(inputArray[i]*inputArray[i+1] > max){
//             console.log("ismax",inputArray[i]*inputArray[i+1])
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
// 	console.log(shapeArea(i))
// })

// function makeArrayConsecutive2(statues) {
// 	let max = statues[0];
// 	let min = statues[0];
// 	for(statue of statues){
// 		if(statue < min) min = statue
// 		if(statue > max) max = statue
// 	}
// 	console.log(max, min, statues.length)
// 	return max - min - statues.length + 1
// }

// console.log(makeArrayConsecutive2([0,3]))

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
// 	console.log(sequence)
// 	if(sequence.length < 3) return true
// 	if(sequence.length === 3){
// 		if(sequence[0] < sequence[1] || sequence[0] < sequence[2] || sequence[1] < sequence[2]) {
// 			console.log('3, true')
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
// 	console.log('start:',s)
// 	if(s.length < 3) return true
// 	if(s.length === 3){
// 		if(s[0] < s[1] || s[0] < s[2] || s[1] < s[2]) return true
// 		else return false
// 	}else{
// 		let removed = 0
// 		let i = 1
// 		while( i<s.length ){
// 			// console.log('i='+i,s)
// 			if (s[i-1]>=s[i]){
// 				removed+=1
// 				// console.log("removed="+removed)
// 				if(removed>1) return false
// 				else{
// 					if( i === s.length-1 || s[i-1] < s[i+1]){		// IF remove [i] resolves, remove
// 						s.splice(i,1)
// 					}else if( i===1 || s[i-2] < s[i]){	// ELSEIF remove [i-1] resolves, remove
// 						s.splice(i-1,1)
// 					}else{						// ELSE return false
// 						return false
// 					}
// 					// console.log("new s=",s)
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
// 	console.log(almostIncreasingSequence(test))
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
// 	console.log(matrixElementsSum(arr))
// })

// function commonCharacterCount(s1, s2) {
// 	const arr1 = s1.split('')
// 	const arr2 = s2.split('')
// 	let count = 0
//     for(let i=0; i<arr1.length; i++){
//         for(let j=0; j<arr2.length; j++){
//             if( arr1[i] === arr2[j] ){
// 				console.log(i,arr1[i],j,arr2[j],arr2)
//                 count += 1
// 				arr2.splice(j,1)
// 				j = arr2.length
//             }
//         }
//     }
// 	return count
// }

// console.log(commonCharacterCount('aabcc', 'adcaa'))

// let test = 'abcde'
// console.log(
// test[2].toUpperCase(),
// test
// )

// function isLucky(n) {
//     const str  = n.toString()
// 	console.log(str, str.substr(0, str.length/2).split('').reduce((tot,num) =>{return tot + parseInt(num)},0))
//     return str.substr(0, str.length/2).split('').reduce((tot,num) =>{return tot + parseInt(num)},0) === str.substr(str.length/2, str.length).split('').reduce((tot,num) =>{return tot + parseInt(num)},0)
// }
// console.log(isLucky(1230))

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
// console.log(sortByHeight(test))

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
// 	console.log("RIP inputstring", inputString);
// 	let newString = inputString
// 	for (let i = 0; i < newString.length; i++) {
// 		console.log('for loop ',i,newString[i])
// 		if (newString[i] === "(") {
// 			let revString = reverseInParentheses(newString.slice(i+1))
// 			console.log('input',newString,'rev',revString, 'i', i)
// 			newString = newString.split('')
// 			console.log('newString array 1',newString)
// 			newString.splice(i+1,revString.length,...revString.split(''))

// 			console.log('newString array 2', newString)
// 			newString = newString.join('')
// 			console.log('newString', newString)
// 			i+=revString.length+1
// 			console.log(i)
// 		} else if (newString[i] === ")") {
// 			let result = newString.slice(0, i).split("").reverse().join("");
// 			console.log('reversed, result', result)
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
// 				// console.log('arr:',arr,'revArr',revArr)
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
// console.log("test", reverseInParentheses(test));


// function addBorder(picture) {
// 	const res = picture.map((line)=>`*${line}*`)
// 	res.push('*'.repeat(res[0].length))
// 	res.unshift('*'.repeat(res[0].length))
// 	return res

// }

// console.log(addBorder([
// 	"abcd",
// 	"efgh",
// 	"ijkl"
// ]))


// var twoSum = function(nums, target) {
//     for(let i=0;i<nums.length;i++){
// 		console.log(nums.slice(i+1))
//         if(nums.slice(i+1).indexOf(target-nums[i]) !== -1){
//             return [i, i+1 + nums.slice(i+1).indexOf(target-nums[i])]
//         }
//     }
// };

// console.log(twoSum([3,2,4,4,3,5,7,9],6))


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

// console.log(areSimilar([1,2,3],[1,3,2]))



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

// console.log(arrayChange([-5,1,0,-3,1]))

// function palindromeRearranging(inputString) {
//     const arr = inputString.split('').sort()
//     console.log(arr)
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

//     console.log(arr)
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
//         console.log(arr[i-1], arr[i], letterCount, oddCount)
//     }
//     if(letterCount%2 === 1) {
//         oddCount+=1
//         if(oddCount > 1)return false
//     }
//     return true
// }

// console.log(palindromeRearranging('afabbccd'))


// function isIPv4Address(inputString) {
//     const arr = inputString.split('.')
//     console.log(arr)
//     if(arr.length === 4) {
//         for(n of arr){
//             console.log(n.split('').forEach((d)=>{
//                 console.log('digit',d);
//                 return parseInt(d)}))
//         }
//         return true
//     }else return false
// }
// console.log(isIPv4Address('1.1.1.1a'))

///////////////////////////////////////////////////
// 
//
//
///////////////////////////////////////////////////

// unoptimized, works
// function avoidObstacles(inputArray){
//     inputArray.sort((a,b)=>a-b)
//     console.log(inputArray)
//     const max = inputArray[inputArray.length-1]+1
//     for(let i=2; i<=max; i++){
//         console.log('i=',i)
//         let complies = ()=>{
//             for(let j=i; j<=max; j+=i ){
//                 console.log('j',j)
//                 if(inputArray.includes(j)) return false
//             }
//             return true
//         }
//         console.log('complies', i, complies())
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
//     console.log('result',avoidObstacles(test))  
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
//     console.log('test',boxBlur(test))
// })



// // boxBlur(image) = [[5, 4], 
// //                   [4, 4]]

// //          image = [[1, 1, 1], 
// //          [1, 7, 1], 
// //          [1, 1, 1]]

// //          boxBlur(image) = [[1]]

function minesweeper(matrix) {

}

// For

// matrix = [[true, false, false],
//           [false, true, false],
//           [false, false, false]]
// the output should be

// minesweeper(matrix) = [[1, 2, 1],
//                        [2, 1, 1],
//                        [1, 1, 1]]
