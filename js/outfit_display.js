window.addEventListener("load", function(e) {
	var form = document.getElementById("form_grid");
	var radios = document.getElementsByClassName("buttons");
	var labels = document.getElementsByClassName("option");
	form.addEventListener("submit", function(e) {
		for(var i = 0; i < radios.length; i++) {
			if(radios[i].checked == true) {
				if(radios[i].name == "upper") {
					var picked = document.getElementById("middle_upper");
					picked.src = radios[i].nextElementSibling.src;
					picked.style.opacity = "1";
					picked.style.width = "175px";
					picked.style.height = "175px";
				} else if(radios[i].name == "lower") {
					var picked = document.getElementById("middle_lower");
					picked.src = radios[i].nextElementSibling.src;
					picked.style.opacity = "1";
					picked.style.width = "175px";
					picked.style.height = "175px";
				} else {
					var picked = document.getElementById("middle_foot");
					picked.src = radios[i].nextElementSibling.src;
					picked.style.opacity = "1";
					picked.style.width = "175px";
					picked.style.height = "175px";
				}
			}
		}
		for(var i = 0; i < labels.length; i++) {
			if(labels[i].id != "upper_option_two" && labels[i].id != "lower_option_two" && labels[i].id != "foot_option_two") {
				labels[i].style.display = "none";
			}
		}
		document.getElementById("submit").style.display = "none";
		e.preventDefault();
	});
});
