# Whinify

![Whinify in action](https://github.com/crabcode/whinify/blob/main/whinify.gif)

Simple, automated complainy-case for your website!

## Installation

It's easy! Just download the whinify.js script and include it like so:

```<script src="path_to_file/whinify.js" defer></script>```

And you're done!

## Customization

By default, the script attaches itself to all `<textarea>` and `<input type="text">` elements it finds in your page.

If you want to add, remove, or target specific element IDs and classes, you can do so by changing the `target` array in the whinify.js file:

```
targets = [
    'input[type=text]',
    'textarea',
    '#elementID',
    '.myClass'
];
```