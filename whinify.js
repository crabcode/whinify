targets = [
	'input[type="text"]',
	'textarea'
];

function whinify(element, event)
{
	const key = event.key;
	
	if (/^[a-zA-Z]$/.test(key) && !event.ctrlKey)
	{
		event.preventDefault();
		
		const value = element.value;
		const start = element.selectionStart;
		const end = element.selectionEnd;
		
		let modKey = start % 2 == 1 ? key.toUpperCase() : key.toLowerCase();
		
		element.value = value.substring(0, start) + modKey + value.substring(end);
		element.setSelectionRange(start + 1, start + 1);
	}
}

window.onload = () => document.querySelectorAll(targets.join(",")).forEach(element => element.addEventListener("keydown", event => whinify(element, event)));