scrollBottom = () => {
  let msgContainer = $('#messages');
  if (msgContainer.length) {
    msgContainer.scrollTop(msgContainer[0].scrollHeight);
  }
}
