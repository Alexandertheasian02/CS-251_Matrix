const searchInput = document.querySelector('#search');
const suggestions = document.querySelector('#suggestions');

const pages = {
	"Physics EM MCQ": "physics-em-mcq.html",
	"Physics EM Structured & Essay": "physics-em-str-ess.html",
	"English": "english.html",
	"Sinhala": "sinhala.html",
	"Sinhala Part 1": "sinhala-yrs-mcq.html",
	"Sinhala Part 2": "sinhala-yrs-essay.html",
};

function showSuggestions() {
	const inputValue = searchInput.value.toLowerCase();
	suggestions.innerHTML = '';
	const matches = Object.keys(pages).filter(page => page.toLowerCase().includes(inputValue));
	if (inputValue.length > 0 && matches.length > 0) {
		for (let match of matches) {
			const li = document.createElement('li');
			li.innerText = match;
			li.addEventListener('click', () => {
				window.location.href = pages[match];
			});
			suggestions.appendChild(li);
		}
		suggestions.style.display = 'block';
	} else {
		suggestions.style.display = 'none';
	}
}

searchInput.addEventListener('input', showSuggestions);
