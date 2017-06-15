// This function assumes you are tracking a basic click event. 
// selector is the class or id of the node that triggers the click event
// category is the Category label that will display in Google Analytics
// action is the action that triggers the event. Most likely click.
// label is the Event label that will display in Google Analytics

/* 
To use this function copy and past into your main js file. Call the function and enter the relevant information for selector, category, action and label. 
*/
function gaTrackEvents(selector, category, action, label) {
	// uncomment the code below to verify your variables are being passed to the function and your trigger node is working on click.
	//console.log(selector+', '+category+', '+action+', '+label);

	$(selector).on('click', function(){
		ga('send', {
			hitType: 'event',
			eventCategory: category,
			eventAction: action,
			eventLabel: label
		});
	});
}