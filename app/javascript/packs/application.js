// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all';

import '../stylesheets/application.css'
import '../stylesheets/custom.css'


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
$(document).on('turbolinks:load', function(){
    // $('.ui.dropdown').dropdown();
    $('.message .close').on('click', function(){
      $(this).closest('.message').transition('fade');
    });

    (function($) {
        "use strict";
        
        // Options for Message
        //----------------------------------------------
      var options = {
          'btn-loading': '<i class="fa fa-spinner fa-pulse"></i>',
          'btn-success': '<i class="fa fa-check"></i>',
          'btn-error': '<i class="fa fa-remove"></i>',
          'msg-success': 'All Good! Redirecting...',
          'msg-error': 'Wrong login credentials!',
          'useAJAX': true,
      };
    
        // Login Form
        //----------------------------------------------
        // Validation
      $("#login-form").validate({
          rules: {
          lg_username: "required",
            lg_password: "required",
        },
          errorClass: "form-invalid"
      });
      
        // Form Submission
      $("#login-form").submit(function() {
          remove_loading($(this));
            
            if(options['useAJAX'] == true)
            {
                // Dummy AJAX request (Replace this with your AJAX code)
              // If you don't want to use AJAX, remove this
            dummy_submit_form($(this));
            
              // Cancel the normal submission.
              // If you don't want to use AJAX, remove this
            return false;
            }
      });
        
        // Register Form
        //----------------------------------------------
        // Validation
      $("#register-form").validate({
          rules: {
          reg_username: "required",
            reg_password: {
                  required: true,
                  minlength: 5
              },
               reg_password_confirm: {
                  required: true,
                  minlength: 5,
                  equalTo: "#register-form [name=reg_password]"
              },
              reg_email: {
              required: true,
                  email: true
              },
              reg_agree: "required",
        },
          errorClass: "form-invalid",
          errorPlacement: function( label, element ) {
            if( element.attr( "type" ) === "checkbox" || element.attr( "type" ) === "radio" ) {
                element.parent().append( label ); // this would append the label after all your checkboxes/labels (so the error-label will be the last element in <div class="controls"> )
            }
                else {
                label.insertAfter( element ); // standard behaviour
            }
        }
      });
    
      // Form Submission
      $("#register-form").submit(function() {
          remove_loading($(this));
            
            if(options['useAJAX'] == true)
            {
                // Dummy AJAX request (Replace this with your AJAX code)
              // If you don't want to use AJAX, remove this
            dummy_submit_form($(this));
            
              // Cancel the normal submission.
              // If you don't want to use AJAX, remove this
            return false;
            }
      });
    
        // Forgot Password Form
        //----------------------------------------------
        // Validation
      $("#forgot-password-form").validate({
          rules: {
          fp_email: "required",
        },
          errorClass: "form-invalid"
      });
      
        // Form Submission
      $("#forgot-password-form").submit(function() {
          remove_loading($(this));
            
            if(options['useAJAX'] == true)
            {
                // Dummy AJAX request (Replace this with your AJAX code)
              // If you don't want to use AJAX, remove this
            dummy_submit_form($(this));
            
              // Cancel the normal submission.
              // If you don't want to use AJAX, remove this
            return false;
            }
      });
    
        // Loading
        //----------------------------------------------
      function remove_loading($form)
      {
          $form.find('[type=submit]').removeClass('error success');
          $form.find('.login-form-main-message').removeClass('show error success').html('');
      }
    
      function form_loading($form)
      {
        $form.find('[type=submit]').addClass('clicked').html(options['btn-loading']);
      }
      
      function form_success($form)
      {
          $form.find('[type=submit]').addClass('success').html(options['btn-success']);
          $form.find('.login-form-main-message').addClass('show success').html(options['msg-success']);
      }
    
      function form_failed($form)
      {
          $form.find('[type=submit]').addClass('error').html(options['btn-error']);
          $form.find('.login-form-main-message').addClass('show error').html(options['msg-error']);
      }
    
        // Dummy Submit Form (Remove this)
        //----------------------------------------------
        // This is just a dummy form submission. You should use your AJAX function or remove this function if you are not using AJAX.
      function dummy_submit_form($form)
      {
          if($form.valid())
          {
              form_loading($form);
              
              setTimeout(function() {
                  form_success($form);
              }, 2000);
          }
      }
        
    })(jQuery);
    
  });
