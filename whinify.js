targets = [
	'input[type=text]',
	'textarea'
];

function whinify(element, event)
{
	let input;

	if (!event.data)
	{
		if (event.inputType != "insertFromPaste") return;	
		input = element.value;
	}
	else
		input = event.data;
	
	const length = input.length;
	const value = element.value;
	const start = element.selectionStart - length;
	const end = element.selectionEnd;
	
	let output = value.substring(0, start);
	
	for (let i = 0; i < length; i++)
		output += (start+i) % 2 == 1 ? input[i].toUpperCase() : input[i].toLowerCase();
			
	element.value = output + value.substring(end);
	element.setSelectionRange(start + length, start + length);
}

window.onload = () => document.querySelectorAll(targets.join(",")).forEach(element => element.addEventListener("input", e => whinify(element, e)));