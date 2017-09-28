'use strict';
// click 'check' add class name
// click 'delete' we need to .remove() that item
// click 'add item' OR type something and press enter, we need to
// .append()

$('ul').on('click','.shopping-item-toggle', function(event) {
  $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
});

$('ul').on('click','.shopping-item-delete', function(event) {
  $(this).closest('li').remove();
});

$('#js-shopping-list-form').submit(function(event) {
  event.preventDefault();

  let item = $('.js-shopping-list-entry').val();
	$('form').trigger('reset');
	
  $('ul').append(`
	<li>
	<span class="shopping-item">${item}</span>
	<div class="shopping-item-controls">
		<button class="shopping-item-toggle">
			<span class="button-label">check</span>
		</button>
		<button class="shopping-item-delete">
			<span class="button-label">delete</span>
		</button>
	</div>`);
});
