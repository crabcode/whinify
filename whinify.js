targets = [
	'input[type=text]',
	'textarea'
];

function whinify(element, event)
{
	const key = event.data;
	
	if (/^[a-zA-Z]$/.test(key))
	{
		event.preventDefault();
		
		const value = element.value;
		const start = element.selectionStart - 1;
		const end = element.selectionEnd;
		
		let modKey = start % 2 == 1 ? key.toUpperCase() : key.toLowerCase();
		
		element.value = value.substring(0, start) + modKey + value.substring(end);
		element.setSelectionRange(start + 1, start + 1);
	}
}

window.onload = () => document.querySelectorAll(targets.join(",")).forEach(element => element.addEventListener("input", event => whinify(element, event)));