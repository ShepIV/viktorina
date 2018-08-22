$( document ).ready(function() {
    var currentBlock = 1
   $('.bn').click(function () {
     $("#unblock" + currentBlock)[0].style.display = 'none'
     currentBlock++
     $("#unblock" + currentBlock)[0].style.display = 'block'
    })
});