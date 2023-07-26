define(['pipAPI', 'https://floydy10.github.io/qualtrics-custom-script/fullbiat.js'], function(APIConstructor, iatExtension){
 var API = new APIConstructor();

	
	return iatExtension({
		practiceCategory1 : 
			{
				name : 'Flowers', //Will appear in the data.
				title : {
					media : {word : 'Flowers'}, //Name of the category presented in the task.
					css : {color:'#31b404','font-size':'1.8em'}, //Style of the category title.
					height : 4, //Height (because we need to know where to put the next item in the title)
					startStimulus : { 
					//If you're using a startStimulus, set here. If not, set the parameter showStimuliWithInst to false (see later below)
						media : {word : 'Daffodil, Daisy, Lilac, Lily'}, 
						css : {color:'#31b404','font-size':'1em'}, 
						height : 2
					}
				}, 
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word : 'Daffodil'}, 
					{word : 'Daisy'}, 
					{word : 'Lilac'}, 
					{word : 'Lily'}
				], 
				//Stimulus css (style of the stimuli)
				stimulusCss : {color:'#31b404','font-size':'2em'}
			},	
			practiceCategory2 : 
			{
				name : 'Insects', 
				title : {
					media : {word : 'Insects'}, 
					css : {color:'#31b404','font-size':'1.8em'}, 
					height : 4,
					startStimulus : {
						media : {word : 'Bedbug, Centipede, Flea, Moth'}, 
						css : {color:'#31b404','font-size':'1em'}, 
						height : 2
					}
				}, 
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word : 'Bedbug'}, 
					{word : 'Centipede'}, 
					{word : 'Flea'}, 
					{word : 'Moth'}
				], 
				//Stimulus css
				stimulusCss : {color:'#31b404','font-size':'2em'}
			},
			categories : [  //As many categories you need.
				{
					name : 'Peter Dutton', //Will appear in the data.
					title : {
						media : {word : 'Peter Dutton'}, //Name of the category presented in the task.
						css : {color:'#31b404','font-size':'1.8em'}, //Style of the category title.
						height : 4, //Height (because we need to know where to put the next item in the title)
						startStimulus : { 
						//If you're using a startStimulus, set here. If not, set the parameter showStimuliWithInst to false (see later below)
						media : {image : 'alb1thin.jpg'}, 
							css : {color:'#31b404','font-size':'1em'}, 
							height : 13
						}
					}, 
					stimulusMedia : [ //Stimuli content as PIP's media objects
					{image : 'dut1.jpg'}, 
        			{image : 'dut2.jpg'}, 
        			{image : 'dut3.jpg'}, 
        			{image : 'dut4.jpg'}, 
        			{image : 'dut5.jpg'}, 
        			{image : 'dut6.jpg'}
					], 
					//Stimulus css (style of the stimuli)
					stimulusCss : {color:'#31b404','font-size':'2em'}
				},	
				{
					name : 'Anthony Albanese', 
					title : {
						media : {word : 'Anthony Albanese'}, 
						css : {color:'#31b404','font-size':'1.8em'}, 
						height : 4,
						startStimulus : {
							media : {image : 'alb1thin.jpg'},  
							css : {color:'#31b404','font-size':'1em'}, 
							height : 13
						}
					}, 
					stimulusMedia : [ //Stimuli content as PIP's media objects
					{image : 'alb1.jpg'}, 
        			{image : 'alb2.jpg'}, 
        			{image : 'alb3.jpg'}, 
        			{image : 'alb4.jpg'}, 
        			{image : 'alb5.jpg'}, 
        			{image : 'alb6.jpg'}
					], 
					//Stimulus css
					stimulusCss : {color:'#31b404','font-size':'2em'}
				}
			],
			base_url : {//Where are your images at?
			image : 'https://floydy10.github.io/qualtrics-custom-script/images/'
				
			} 
	});
});



