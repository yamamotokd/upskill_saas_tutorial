/* global $ */
//Document ready
$(document).on('turbolinks:load', function(){
    var theForm = $('#pro_form');
    var submitBtn = $('#form-submit-btn')
    //Set Strip public key
    Stripe.setPublishableKey( $('meta[name="stripe-key"]').attr('content') );
    
    //When user clicks form submit btn
    submitBtn.click(function(event){
        //prevent default submission behavior
        event.preventDefault()
        submitBtn.val("Processing").prop('disabled',true);
        
        //Collect the credit card fields.
        var ccNum = $('#card_number').val(),
            cvcNum = $('#card_code').val(),
            expMonth = $('#card_month').val(),
            expYear = $('#card_year').val();
            
        //use stripe js library to check for card errors
        var error = false;
        
        //validate card number
        if(!Stripe.card.validateCardNumber(ccNum)) {
            error = true;
            alert('The credit card number appears to be invalid.')
        }
        
         //validate card CVC number
        if(!Stripe.card.validateCVC(cvcNum) {
            error = true;
            alert('The CVC number appears to be invalid.')
        }
        
         //validate card experation date
        if(!Stripe.card.validateExpiry(expMonth,expYear) {
            error = true;
            alert('The expiration date appears to be invalid.')
        }
        
        if(error) {
            //If there are card errors dont send to stripe.
            submitBtn.prop('disabled', false).val("Sign Up")
        } else{
            //Send the card info to Stripe
            Stripe.createToken({
                number: ccNum,
                cvc: cvcNum,
                exp_month: expMonth,
                exp_year: expYear
            }, stripeResponseHandler);
            return false;
    });
    
    //Collect the credit card fields.
    function stripeResponseHandler(status, response) {
        var token = response.id
        
        //Inject card token in a hidden field.
        theForm.append( $('<input type="hidden" name="user[stripe_card_token]">').val(token) );
        //Submit form to our rails app
        theForm.get(0).submit()
    }
});