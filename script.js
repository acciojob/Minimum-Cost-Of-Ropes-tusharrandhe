function minCostToFormRope(event)
{
	event.preventDefault();
	let input = document.querySelector("input").value;
	let arr = input.split(",");
	arr.sort(function(a,b){return a-b});

	let cost = 0;
	while (arr.length > 1) {
		let result = Number(arr[0]) + Number(arr[1]);
		arr.splice(0,2);
		arr.push(result);
		cost = cost + result;
		arr.sort(function(a,b){return a-b});
	}
	document.getElementById("result").textContent = cost;
}