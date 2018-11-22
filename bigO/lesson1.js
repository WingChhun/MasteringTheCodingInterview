
/*
- Big O
	- Big O Asymptomptic Analysis

- Any coder can solve a problem
	- How well is the problem solved?
		- What makes good code from great code?

- Important in Google, FaceBook, Amazon - Big companies need to be well versed in this topic
- Important in understanding Data structures


- Q1 - What is good code?
	- Readable
		- Is your code just generally clean
		- Can others understand your code?
	- Scalable
		- Code that can Scale
		- A term that describes this `scalable code`

- What does this mean?
	- There's a good way of baking a cake and a bad way	

- Runtime 
 - Certain time it takes to run a program
	  - Effiency?
	 - How to measure the performance 
		  - What does scalable mean? How can Big O help us measure the scalability
*/

//Example 1



//NOTE: Need to run this in chrome for the use of performance
const nemo = [ 'dory', ' hello' , 'world', 'nigel', 'squirt', 'gill', 'hank', 'nemo'];

function findNemo(array) {

	//* Javascript can measure time
		let t0 = performance.now();
	for (let i = 0; i < array.length; i++) {

	

		if (array[0] === 'nemo') {
			console.log('Found Nemo');
		}
	}

	let t1 = performance.now();

console.log("Call to find nemo took", `${t1 - t0} milliseconds` );

}

//* Run findNemo
findNemo(nemo);
