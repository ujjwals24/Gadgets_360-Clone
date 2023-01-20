const showLoading = function() {
    swal({
      title: 'Processing Payment',
      allowEscapeKey: false,
      allowOutsideClick: false,
      timer: 2000,
      onOpen: () => {
        swal.showLoading();
      }
    }).then(
      () => {},
      (dismiss) => {
        if (dismiss === 'timer') {
          swal({ 
            title: 'Payment success',
            type: 'success',
            timer: 2000,
            showConfirmButton: true
          })
        }
      }
    )
  };
  //showLoading();
  
  document.getElementById("fire")
    .addEventListener('click', (event) => {
      showLoading();
    });