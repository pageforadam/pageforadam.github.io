function askQuestions() {
	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
	var fullName = firstName + ' ' + lastName;

	// Print the user's full name into the console
	console.log(fullName);

	var age = prompt('How old are you?')
	age = parseInt(age);
	console.log(age);

	if (age >= 18) {
		console.log('User is an adult');
	} else if (age >= 13) {
		console.log('User is a teenager');
	} else {
		console.log('User is a child');
	}


	if (firstName.toLowerCase() == 'general' && lastName.toLowerCase() != 'assembly') {
		console.log('Hello General!');
	}



	var faveColour = prompt('What is your favourite colour?').toLowerCase();
	if (faveColour === 'red' ||
		faveColour === 'blue' ||
		faveColour === 'green' ||
		faveColour === 'yellow') {
		// Change the heading to this colour
	$('h1').css('color', faveColour);
	}

}
	// When the page has loaded
	$(function () {

		//Hide all the content
		$('h3').next().hide();

		//When the user clicks the image, ask questions
		$('img').on('click', askQuestions);

		// When the user clicks a heading
		$('h3').on('click', function () {

			// Toggle the next element
			$(this).next().slideToggle(300);

		});


	});