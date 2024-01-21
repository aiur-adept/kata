function findUniq(arr) {
	let map = {};
	for (let i = 0; i < arr.length; i++) {
		map[arr[i]] = (map[arr[i]] || 0 ) + 1
	}
	for (const key in map) {
		if (map[key] == 1) {
			return key;
		}
	}
}

// should output true
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2)
