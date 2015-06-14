$('.open-album').click(function(e) {
    var el, id = $(this).data('open-id');
    if(id){
        el = $('.image-show[rel=' + id + ']:eq(0)');
        e.preventDefault();
        el.click();
    }
});