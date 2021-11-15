$(document).ready(function(){
    $('#signup-formid').validate({
        rules:{
            fname:{
               required:true,
               minlength:4,
               maxlenght:6
            },
            sname:{
                required:true,
                minlength:4
            },
            emailAddress:{
                required:true,
                email:true
            },
            passwordjf:{
                minlength:6
            },
            dayjs:{
                required:true
            },
            gender:{
                required:true
            }
        },
        messages:{
            fname:{
                required:"Enter first name",
                mnilenght:"Enter atleast 4 character"
            },
            sname:{
                required:"Enter surname",
                mnilenght:"Enter atleast 4 character"
            },
        }

    })
})