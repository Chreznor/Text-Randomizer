const fullTexts = require('./data.js')
const randomText = document.querySelector('.random-text');
const randomTextBtn = document.querySelector('#random-text-btn');
const outputResultsBtn = document.querySelector('#output-results-btn');
const bodyArea = document.querySelector('#textarea2');
const conclusionArea = document.querySelector('#textarea3');
const resultsContainer = document.querySelector('#results-container')
const copyTextareaBtn = document.querySelector('.copy-text');
//let fullTexts = require('./data');

//Materialize stuff

$(document).ready(function() {
    $('select').material_select();
});

//Materialize stuff

const dividedTexts = {
	intro: [],
	bodyParts: [],
	conclusion: []
}

function splitTexts (texts) {
	fullTexts.forEach(text => {
		splitAndArrange(text);
	})
}


function splitAndArrange (fullText) {
	fullText = fullText.split('</p>');
	fullText.pop();
	dividedTexts.intro.push(fullText.shift());
	dividedTexts.conclusion.push(fullText.pop());
	fullText.forEach(text => {
		dividedTexts.bodyParts.push(text);
	});
}

splitTexts(fullTexts);

function randomizeText() {
	const selectedValue = parseFloat(document.getElementById('select_path').value);
	console.log(selectedValue);
	let i = 0;

	randomText.value = dividedTexts.intro[Math.floor(Math.random() * dividedTexts.intro.length)] + '</p>';
	$('#textarea1').trigger('autoresize');

	if (selectedValue) {
		let text = ''
		while (i<selectedValue) {
			text += dividedTexts.bodyParts[Math.floor(Math.random() * dividedTexts.bodyParts.length)]  + '</p>';
			i++;
		}
		bodyArea.value = text;
	} else {
			bodyArea.value = dividedTexts.bodyParts[Math.floor(Math.random() * dividedTexts.bodyParts.length)]  + '</p>';
	};


	$('#textarea2').trigger('autoresize');

	conclusionArea.value =  dividedTexts.conclusion[Math.floor(Math.random() * dividedTexts.conclusion.length)]  + '</p>';
	$('#textarea3').trigger('autoresize');
};

function displayResults() {
	resultsContainer.innerHTML = `${randomText.value}
	 															${bodyArea.value}
															  ${conclusionArea.value}`;
};

function copyToClipboard(text) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
};


outputResultsBtn.addEventListener('click', displayResults);
randomTextBtn.addEventListener('click', randomizeText);
copyTextareaBtn.addEventListener('click', function(event) {

	copyToClipboard(resultsContainer.innerHTML);
});
