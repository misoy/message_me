scrollBottom = () => {
  let msgContainer = $('#messages');
  if (msgContainer.length) {
    msgContainer.scrollTop(msgContainer[0].scrollHeight);
  }
}

clearMessageForm = () => {
  $("#message_form").on("ajax:complete", function(event,xhr,status) {
    $('#message_body').val('');
  });
}