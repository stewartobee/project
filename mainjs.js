
 
	$(document).ready(function() {
		$('.textcolora').on('click', function() {
			$('.inserthtml').load("http://stewartscore.co.uk/premierleague_fixtures.html");
			$('.wrapper_hp').hide();
			$('.subtitle').hide();
		
		});
});

	$(document).ready(function() {
		$('.textcolorb').on('click', function() {
			$('.inserthtml').load("http://stewartscore.co.uk/championship_fixtures.html");
		
		});
});


	$(document).ready(function() {
		$('.headerleveltwoa').hide();
});

 
	$(document).ready(function() {
		$('#loneseca').on('mouseenter', function() {
			$('.headerleveltwoa').show();
			
			$('#loneseca').css('border-left', '5px solid yellow');
			$('.navspacingtwo').css('background-color', 'rgba(44, 42, 42, 0.90)');
		});
});

	$(document).ready(function() {
		$('#loneseca').on('mouseenter', function() {
			$('.headerleveltwob').hide();
			$('.headerleveltwoc').hide();
			$('.headerleveltwod').hide();
			$('.headerleveltwoe').hide();		
		});
});

	$(document).ready(function() {
		$('#loneseca').on('mouseleave', function() {

			$('.headerleveltwoa').hide();
			$('.headerleveltwob').hide();
			$('.headerleveltwoc').hide();
			$('.headerleveltwod').hide();
			$('.headerleveltwoe').hide();

			$('#loneseca').css('border-left', '0px solid yellow');
			$('.navspacingtwo').css('background-color', 'transparent');	
		});
});

/* Keeping the opened section showing while hovering over as a user ––> */


	$(document).ready(function() {
		$('.headerleveltwoa').on('mouseenter', function() {
			$('.headerleveltwoa').show();
			$('#loneseca').css('border-left', '5px solid yellow');
			$('#loneseca').css('background-position-x', 'left');
			$('#loneseca').css('background-position-y', 'bottom');
			$('.textcolorlonea').css('color', 'black');

			$('.navspacingtwo').css('background-color', 'rgba(44, 42, 42, 0.90)');

		});
});

	$(document).ready(function() {
		$('.headerleveltwoa').on('mouseleave', function() {
			$('.headerleveltwoa').hide();
			$('#loneseca').css('border-left', '0px solid yellow');
			$('#loneseca').css('background-position-x', 'right');
			$('#loneseca').css('background-position-y', 'bottom');
			$('.textcolorlonea').css('color', 'white');

			$('.navspacingtwo').css('background-color', 'transparent');	
		});
});

/* Keeping the opened section showing while hovering over as a user––> */

	$(document).ready(function() {
		$('.headerleveltwob').hide();
});


	$(document).ready(function() {
		$('#lonesecb').on('mouseenter', function() {
			$('.headerleveltwob').show();	

			$('#lonesecb').css('border-left', '5px solid yellow');
			$('.navspacingtwo').css('background-color', 'rgba(44, 42, 42, 0.90)');

		});
});
 
	$(document).ready(function() {
		$('#lonesecb').on('mouseenter', function() {
			$('.headerleveltwoa').hide();
			$('.headerleveltwoc').hide();
			$('.headerleveltwod').hide();	
			$('.headerleveltwoe').hide();	

		});
});


	$(document).ready(function() {
		$('#lonesecb').on('mouseleave', function() {

			$('.headerleveltwoa').hide();
			$('.headerleveltwob').hide();
			$('.headerleveltwoc').hide();
			$('.headerleveltwod').hide();
			$('.headerleveltwoe').hide();	

			$('#lonesecb').css('border-left', '1px solid white');
			$('.navspacingtwo').css('background-color', 'transparent');	
		});
});

	$(document).ready(function() {
		$('.headerleveltwob').on('mouseenter', function() {
			$('.headerleveltwob').show();	
			$('#lonesecb').css('border-left', '5px solid yellow');
			$('#lonesecb').css('background-position-x', 'left');
			$('#lonesecb').css('background-position-y', 'bottom');
			$('.textcolorloneb').css('color', 'black');

				$('.navspacingtwo').css('background-color', 'rgba(44, 42, 42, 0.90)');

		});
});


	$(document).ready(function() {
		$('.headerleveltwob').on('mouseleave', function() {
			$('.headerleveltwob').hide();
			$('#lonesecb').css('border-left', '1px solid white');
			$('#lonesecb').css('background-position-x', 'right');
			$('#lonesecb').css('background-position-y', 'bottom');
			$('.textcolorloneb').css('color', 'white');

			$('.navspacingtwo').css('background-color', 'transparent');	
		});
});


	$(document).ready(function() {
		$('.headerleveltwoc').hide();
});

	$(document).ready(function() {
		$('#lonesecc').on('mouseenter', function() {
			$('.headerleveltwoc').show();	

			$('#lonesecc').css('border-left', '5px solid yellow');
			$('.navspacingtwo').css('background-color', 'rgba(44, 42, 42, 0.90)');
		});
});

	$(document).ready(function() {
		$('#lonesecc').on('mouseenter', function() {
			$('.headerleveltwoa').hide();
			$('.headerleveltwob').hide();	
			$('.headerleveltwod').hide();	
			$('.headerleveltwoe').hide();	
		});
});

	$(document).ready(function() {
		$('#lonesecc').on('mouseleave', function() {

			$('.headerleveltwoa').hide();
			$('.headerleveltwob').hide();
			$('.headerleveltwoc').hide();
			$('.headerleveltwod').hide();
			$('.headerleveltwoe').hide();

			$('#lonesecc').css('border-left', '1px solid white');	
			$('.navspacingtwo').css('background-color', 'transparent');		
		});
});

	$(document).ready(function() {
		$('.headerleveltwoc').on('mouseenter', function() {
			$('.headerleveltwoc').show();	

			$('#lonesecc').css('border-left', '5px solid yellow');
			$('#lonesecc').css('background-position-x', 'left');
			$('#lonesecc').css('background-position-y', 'bottom');

			$('.textcolorlonec').css('color', 'black');

				$('.navspacingtwo').css('background-color', 'rgba(44, 42, 42, 0.90)');

		});
});

	$(document).ready(function() {
		$('.headerleveltwoc').on('mouseleave', function() {
			$('.headerleveltwoc').hide();

			$('#lonesecc').css('border-left', '1px solid white');
			$('#lonesecc').css('background-position-x', 'right');
			$('#lonesecc').css('background-position-y', 'bottom');

			$('.textcolorlonec').css('color', 'white');

			$('.navspacingtwo').css('background-color', 'transparent');	
		});
});

	$(document).ready(function() {
		$('.headerleveltwod').hide();
});

	$(document).ready(function() {
		$('#lonesecd').on('mouseenter', function() {
			$('.headerleveltwod').show();	

			$('#lonesecd').css('border-left', '5px solid yellow');
			$('.navspacingtwo').css('background-color', 'rgba(44, 42, 42, 0.90)');

		});
});

	$(document).ready(function() {
		$('#lonesecd').on('mouseenter', function() {
			$('.headerleveltwoa').hide();	
			$('.headerleveltwob').hide();	
			$('.headerleveltwoc').hide();	
			$('.headerleveltwoe').hide();	

		});
});

	$(document).ready(function() {
		$('#lonesecd').on('mouseleave', function() {

			$('.headerleveltwoa').hide();
			$('.headerleveltwob').hide();
			$('.headerleveltwoc').hide();
			$('.headerleveltwod').hide();
			$('.headerleveltwoe').hide();		

			$('#lonesecd').css('border-left', '1px solid white');
			$('.navspacingtwo').css('background-color', 'transparent');	
		});
});

	$(document).ready(function() {
		$('.headerleveltwod').on('mouseenter', function() {
			$('.headerleveltwod').show();	


			$('#lonesecd').css('border-left', '5px solid yellow');
			$('#lonesecd').css('background-position-x', 'left');
			$('#lonesecd').css('background-position-y', 'bottom');


			$('.textcolorloned').css('color', 'black');

			$('.navspacingtwo').css('background-color', 'rgba(44, 42, 42, 0.90)');
		});
});

	$(document).ready(function() {
		$('.headerleveltwod').on('mouseleave', function() {
			$('.headerleveltwod').hide();


			$('#lonesecd').css('border-left', '1px solid white');
			$('#lonesecd').css('background-position-x', 'right');
			$('#lonesecd').css('background-position-y', 'bottom');

			$('.textcolorloned').css('color', 'white');

				$('.navspacingtwo').css('background-color', 'transparent');	
		});
});

	$(document).ready(function() {
		$('.headerleveltwoe').hide();
});

	$(document).ready(function() {
		$('#lonesece').on('mouseenter', function() {
			$('.headerleveltwoe').show();	

			$('#lonesece').css('border-left', '5px solid yellow');
			$('.navspacingtwo').css('background-color', 'rgba(44, 42, 42, 0.90)');
		});
});

	$(document).ready(function() {
		$('#lonesece').on('mouseenter', function() {
			$('.headerleveltwoa').hide();
			$('.headerleveltwob').hide();
			$('.headerleveltwoc').hide();
			$('.headerleveltwod').hide();

		});
});

	$(document).ready(function() {
		$('#lonesece').on('mouseleave', function() {

			$('.headerleveltwoa').hide();
			$('.headerleveltwob').hide();
			$('.headerleveltwoc').hide();
			$('.headerleveltwod').hide();
			$('.headerleveltwoe').hide();	

			$('#lonesece').css('border-left', '1px solid white');
			$('.navspacingtwo').css('background-color', 'transparent');		
		});
});

	$(document).ready(function() {
		$('.headerleveltwoe').on('mouseenter', function() {
			$('.headerleveltwoe').show();


			$('#lonesece').css('border-left', '5px solid yellow');
			$('#lonesece').css('background-position-x', 'left');
			$('#lonesece').css('background-position-y', 'bottom');
			
			$('.textcolorlonee').css('color', 'black');	

				$('.navspacingtwo').css('background-color', 'rgba(44, 42, 42, 0.90)');

		});
});

	$(document).ready(function() {
		$('.headerleveltwoe').on('mouseleave', function() {
			$('.headerleveltwoe').hide();

			$('#lonesece').css('border-left', '1px solid white');
			$('#lonesece').css('background-position-x', 'right');
			$('#lonesece').css('background-position-y', 'bottom');

			$('.textcolorlonee').css('color', 'white');

				$('.navspacingtwo').css('background-color', 'transparent');	
		});
});
