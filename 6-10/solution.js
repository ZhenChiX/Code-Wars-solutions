function isNice(arr) {
	let niceArr = false;

	for (var i in arr) {
		if (arr.includes(arr[i] + 1) || arr.includes(arr[i] - 1)) {
			niceArr = true;
		} else {
			return false;
		}
	}
	return niceArr;
}
