function login(){
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  
  if ((username === 'Zainab' && password === 'Ravenclaw') || (username === 'HeyItzSushi' && password === 'Gryffindor') || (username === '' && password === '') || (username === '' && password === '')){
    window.location.href= 'home.html';
  }
  }
