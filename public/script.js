document.getElementById("btnRegis").addEventListener("click", async () => {
  window.location.href = "/regisPasien";
})
document.getElementById("btnRegis2").addEventListener("click", async () => {
  window.location.href = "/regisPasien";
})
localStorage.setItem('pasien',true)
localStorage.setItem('BASE_URL', window.location.origin + '/api')
document.getElementById("btnLogin").addEventListener("click", async () => {
  const myData = {}
  myData['email'] = $('#email').val()
  myData['password'] = $('#password').val()
  $.ajax({
    type: "POST",
    url: localStorage.getItem('BASE_URL')+'/pasien/login',
    data: JSON.stringify(myData),
    contentType: "application/json",
    dataType: "json",
  }).done(function(response) {
    if(response.success){
      localStorage.setItem('Token', response.token)
      localStorage.setItem('name', response.data.nama)
      alert("Login "+ response.message) 
      window.location.href = "/home";
    }else{
      alert(response.message) 
    }
    
  }).fail(function(response) {
    alert('Error: ' + response.message)
  })            
})

function pleaseLogin() {
  $('#alert').append(`
  <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Silahkan login atau registrasi terlebih dahulu...
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`)
  window.location.href = '/#alert'
}