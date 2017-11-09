(function ($) {
  function handle_show_code () {
		var the_trigger = $('.show-me-the-code');
		var the_code = the_trigger.next('pre');

		the_code.hide();

		the_trigger.text('Show Code');
		the_trigger.addClass('toggle-code');

		the_trigger.on('click', function(event){

			event.preventDefault();

			var $this = $(this),
				the_code = $this.next('pre');

			the_code.slideToggle();

			$this.toggleClass('code-shown btn-red');

			$this.text(
				($this.hasClass('code-shown')) ? 'Hide Code' : 'Show Code'
			);

		});

	}

	handle_show_code();


	//======= PLACE YOUR CUSTOM CODE BELOW THIS LINE ==========

	//======= YOUR CUSTOM CODE SHOULD END ABOVE THIS LINE ==========


})(jQuery);
