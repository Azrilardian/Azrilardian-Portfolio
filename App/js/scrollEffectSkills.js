const scrollEffectSkills = () => {
	window.addEventListener("scroll", function () {
		function scrollEffectSkills(el) {
			let element = document.querySelector(el);
			const htmlProgressBar = document.querySelector(".html-skills");
			const cssProgressBar = document.querySelector(".css-skills");
			const jsProgressBar = document.querySelector(".js-skills");
			const bootstrapProgressBar = document.querySelector(".bootstrap-skills");
			const tailwindProgressBar = document.querySelector(".tailwind-skills");
			const gitProgressBar = document.querySelector(".git-skills");
			const webpackProgressBar = document.querySelector(".webpack-skills");
			const scssProgressBar = document.querySelector(".scss-skills");
			let elementPosition = element.getBoundingClientRect().top;
			let screenPosition = window.innerHeight / 1.2;
			if (elementPosition == 0) return;
			if (elementPosition < screenPosition) {
				htmlProgressBar.style.width = "100%";
				cssProgressBar.style.width = "100%";
				jsProgressBar.style.width = "80%";
				bootstrapProgressBar.style.width = "80%";
				tailwindProgressBar.style.width = "40%";
				gitProgressBar.style.width = "80%";
				webpackProgressBar.style.width = "60%";
				scssProgressBar.style.width = "80%";
			}
		}

		if (document.querySelector(".skills-container")) scrollEffectSkills(".skills-container");
		else {
			return;
		}
	});
};

export default scrollEffectSkills;
