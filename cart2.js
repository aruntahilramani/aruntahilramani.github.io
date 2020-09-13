$('a.removeWrap').on('click touchstart', function()  {
    event.preventDefault();
    $(this).parent().parent().parent().hide(400);

  })

  // Just for testing, show all items
  $('a.btn.continue').on('click touchstart', function()  {
    $('li.items').show(400);
  })