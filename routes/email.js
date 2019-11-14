$(function() {
    $("#initial-message").on("click", function() {
      $("#subject-input").val("Invoice");
      $("#message-input").val(
        "Please find attached an invoice for my recent work for you. I appreciate your prompt attention in remitting this payment. Please let me know if you have any question."
      );
    });
  
    $("#reminder-message").on("click", function() {
      $("#subject-input").val("Payment Reminder");
      $("#message-input").val(
        "This is a reminder that payment has not been received for the attached invoice. Please send as soon as possible."
      );
    });
  
  //   $('#i_file').change( function(event) {
  //     var tmppath = URL.createObjectURL(event.target.files[0]);
  //         $("img").fadeIn("fast").attr('src',URL.createObjectURL(event.target.files[0]));
  //         $("#disp_tmp_path").html(tmppath);
  //     });
  
    $("#email").on("click", function() {
      console.log("hello");
      var serviceInput = $("#service-input")
        .val()
        .trim();
      var email = $("#email-input")
        .val()
        .trim();
      var password = $("#password-input")
        .val()
        .trim();
      var subject = $("#subject-input")
        .val()
        .trim();
      var message = $("#message-input")
        .val()
        .trim();
      var path = $("#path-input")
        .val()
        .trim();
  
      var email = {
        serviceInput: serviceInput,
        email: email,
        password: password,
        subject: subject,
        message: message,
        path: path
      };
      $.ajax("/email/send", {
        type: "POST",
        data: email
      }).then(function(data) {
        console.log("yes, you did it", data);
        $("#service-input").val("");
        $("#email-input").val("");
        $("#password-input").val("");
        $("#subject-input").val("");
        $("#message-input").val("");
      });
    });
  });
