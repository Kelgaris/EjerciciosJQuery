$(document).ready(function(){
    $('.botonTarea').click(function(){
        var tarea = $(".inputTarea").val();
        $('.lista').prepend('<div class="tarea"><p>'+tarea+'</p><button class="completar"><i class="fas fa-thumbs-up"></i></button><button class="eliminar"><i class="fas fa-thumbs-down"></i></button>');
    });

    $('.inputTarea').keyup(function(e){
        var tarea = $(".inputTarea").val();
        if(e.keyCode == 13){
            $('.lista').prepend('<div class="tarea"><p>'+tarea+'</p><button class="completar"><i class="fas fa-thumbs-up"></i></button><button class="eliminar"><i class="fas fa-thumbs-down"></i></button>');     
        }
    });

    $(document).on('click', '.completar', function(){
        $(this).closest('.tarea').css('background-color', 'rgb(141, 230, 163)');
    });
    
    $(document).on('click', '.eliminar', function(){
        $(this).closest('.tarea').remove();
    });
});