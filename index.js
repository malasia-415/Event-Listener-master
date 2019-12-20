$(function() {

  $('#js-shopping-list-form').submit(function(e){
    e.preventDefault();
    let item = $('#shopping-list-entry').val();
    let templete = `<li>
    <span class="shopping-item">${item}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div></li>`
    $('.shopping-list').append(templete);
  });

  $(document).on('click','.shopping-item-delete',function(){
    $(this).closest('li').remove();
  });

  $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
     $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });

  $('#shopping-item shopping-item__checked',function(){
    $(this).button('span').slice();
  });
});

