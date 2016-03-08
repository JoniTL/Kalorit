function calculate() {
	var weight = document.bmrForm.weight.value
	var height = document.bmrForm.height.value
	var age = document.bmrForm.age.value
	var activityradio = document.bmrForm.activity.value
	var sexradio = document.bmrForm.sex.value
																				
	var BmrMultiplier = 0

	if (document.getElementById('r1').checked) {
		BmrMultiplier = 1.2
	}else if (document.getElementById('r2').checked){
		BmrMultiplier = 1.375
	}else if (document.getElementById('r3').checked){
		BmrMultiplier = 1.55
	}else if (document.getElementById('r4').checked){
		BmrMultiplier = 1.725
	}else if (document.getElementById('r5').checked){
		BmrMultiplier = 1.9
	}

	var bmr = 0
	var calories = 0
	var caloriesd = 0
	var dcalories = 0
	var dcalriesd = 0
	var joules = 0
	var fjoules = 0
	var mjoules = 0
	var jouleMultiplier = 4.1868

	if (document.getElementById('male').checked) {
		bmr = 66.5
		caloriesd = BmrMultiplier * (bmr + (13.75 * weight) + (5.003*height) - (6.755 * age))
		dcaloriesd = caloriesd.toFixed(0)
		document.bmrForm.calories.value = dcaloriesd
		joules = jouleMultiplier * dcaloriesd
		mjoules = joules.toFixed(0)
		document.bmrForm.joules.value = mjoules
	}else if (document.getElementById('female').checked){
		bmr = 655.1;
		calories = BmrMultiplier * (bmr + (9.563 * weight) + (1.850 * height) - (4.676 * age))
		dcalories = calories.toFixed(0)
		document.bmrForm.calories.value = dcalories
		joules = jouleMultiplier * calories
		fjoules = joules.toFixed(0)
		document.bmrForm.joules.value = fjoules
	}				
}