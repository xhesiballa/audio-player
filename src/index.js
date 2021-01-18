import {Howl, Howler} from 'howler';


console.log('hello world');

function handleFileSelect(evt) {
	evt.stopPropagation();
	evt.preventDefault();

	let files = evt.dataTransfer.files; // FileList object.
	let file = files[0];
	const reader = new FileReader();
	console.log(file.name);

	reader.addEventListener("load", () => {
	    // convert image file to base64 string
    	let result = reader.result;
    	// console.log(result);
    	let sound = new Howl({
		  src: [result]
		});
		// sound.play();
		console.log(result);
		console.log(result.replace(/^.*;base64,/, ''));
	}, false);

	if (file) {
	    reader.readAsDataURL(file);
	}

}	

function handleDragOver(evt) {
	evt.stopPropagation();
	evt.preventDefault();
	evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
}

// Setup the dnd listeners.
var dropZone = document.getElementById('drop_zone');
dropZone.addEventListener('dragover', handleDragOver, false);
dropZone.addEventListener('drop', handleFileSelect, false);

// var sound = new Howl({
//   src: ['sound.mp3']
// });

// sound.play();
