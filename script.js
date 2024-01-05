$("#contactForm").submit(function(event) 
     {
         /* stop form from submitting normally */
         event.preventDefault();

         /* get some values from elements on the page: */
         var $form = $( this ),
             $submit = $form.find( 'button[type="submit"]' ),
             name_value = $form.find( 'input[name="name"]' ).val(),
             email_value = $form.find( 'input[name="email"]' ).val(),
             message_value = $form.find( 'textarea[name="message"]' ).val(),
             url = $form.attr('action');

         /* Send the data using post */
         var posting = $.post( url, { 
                           name: name_value, 
                           email: email_value, 
                           message: message_value 
                       });

         posting.done(function( data )
         {
             /* Put the results in a div */
             $( "#contactResponse" ).html(data);

             /* Change the button text. */
             $submit.text('Sent, Thank you');

             /* Disable the button. */
             $submit.attr("disabled", true);
         });
    });
