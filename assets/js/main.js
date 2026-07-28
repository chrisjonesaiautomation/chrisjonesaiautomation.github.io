// Only hide .reveal elements once this script has actually loaded and run —
// otherwise (blocked script, slow network, etc.) content just stays visible.
document.documentElement.classList.add('js');

// Close the mobile nav after a link is tapped
document.querySelectorAll('.nav__links a').forEach(function (link) {
	link.addEventListener('click', function () {
		var toggle = document.getElementById('nav-toggle');
		if (toggle) toggle.checked = false;
	});
});

// Footer year
var yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Scroll-reveal for elements marked .reveal
if ('IntersectionObserver' in window) {
	var observer = new IntersectionObserver(
		function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add('reveal--visible');
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.15 }
	);

	document.querySelectorAll('.reveal').forEach(function (el) {
		observer.observe(el);
	});
} else {
	document.querySelectorAll('.reveal').forEach(function (el) {
		el.classList.add('reveal--visible');
	});
}
