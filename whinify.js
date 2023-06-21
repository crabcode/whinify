targets = [
	'input[type=text]',
	'textarea'
];

function whinify(element)
{
	const value = element.value;
	const start = element.selectionStart - 1;
	const end = element.selectionEnd;
	const key = value.substring(start, end);
		
	let modKey = start % 2 == 1 ? key.toUpperCase() : key.toLowerCase();
		
	element.value = value.substring(0, start) + modKey + value.substring(end);
	element.setSelectionRange(start + 1, start + 1);
}

window.onload = () => document.querySelectorAll(targets.join(",")).forEach(element => element.addEventListener("input", e => whinify(element)));