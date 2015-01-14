var myArgs = process.argv.slice(2),
	sum = 0;

for (var i = 0, arg; arg = myArgs[i]; i++) {
	sum += Number(arg);
}

console.log(sum);