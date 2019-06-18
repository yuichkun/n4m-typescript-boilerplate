type obj = {
	a: number,
	b: string
}

function hoge():obj{
	return {
		a: 3,
		b: 'hoge'
	};
}
		

console.log(hoge())