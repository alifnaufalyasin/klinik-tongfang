
umum(0)      
  
function umum(id) {
  $('#listDokter').empty()
  $.ajax({
    type: "GET",
    url: localStorage.getItem('BASE_URL')+'/dokter/get/'+id,
    dataType: "json"
  }).done(function(response) {
    if(response.success){
      response.data.map((data,index)=>{
        $('#listDokter').append(`
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Dr. ${data.nama}</h5>
            </div>
            <div class="card-body">
              <div class="img-dr">
                <img src="../images/resource/doctor_default_seo.png" />
              </div>
              <div class="info-dr">
                <p class="card-text">
                  Dokter pada bidang ${data.bidang} yang memiliki pengalaman ${data.pengalaman}.
                </p>
              </div>
            </div>
            <center>
            <a style="color: white;" onclick="pilih(${data.id_dokter})" class="btn btn-success">Pilih Dokter</a>
            </center>
          </div>
        </div>`)
      })
    }else{
      alert(response.message) 
    }
  }).fail(function(response) {
    alert('Error: ' + response.message)
  })        
}

function pilih(id) {
  const myData = {}
  myData['id_dokter'] = Number(id),
  $.ajax({
    headers: {
      'Authorization' : 'Bearer ' + localStorage.getItem('Token')
    },
    type: "POST",
    url: localStorage.getItem('BASE_URL')+'/medis/add',
    data: myData,
    entType: "application/json",
    dataType: "json",
  }).done(function(response) {
    if(response.success){
      alert(response.message+' pilih dokter') 
      window.location.href = "/inputData";
    }else{
      alert(response.message) 
    }
    
  }).fail(function(response) {
    alert('Error: ' + response.message)
  })            
}