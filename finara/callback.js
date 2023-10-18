function redirectToWhatsApp() {
    // Ganti '1234567890' dengan nomor WhatsApp yang ingin Anda tuju
    var phoneNumber = '1234567890';
  
    // Ganti 'Halo! Saya tertarik dengan produk ini.' dengan pesan yang ingin Anda tampilkan
    var message = 'Halo! Saya tertarik dengan produk ini.';
  
    // Membentuk URL WhatsApp dengan nomor tujuan dan pesan
    var url = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);
  
    // Membuka WhatsApp di tab baru
    window.open(url, '_blank');
  }

function redirectToWhatsApp(phoneNumber, amount, message) {
    var url = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent('Saya ingin membeli ' + amount + ' Genesis Crystal untuk ' + message);
  
    window.open(url, '_blank');
  }

  function showPopup(phoneNumber, amount, message) {
    var popup = document.getElementById('popup');
    var popupAmount = document.getElementById('popupAmount');
    var popupPrice = document.getElementById('popupPrice');
  
    popupAmount.textContent = amount + ' Genesis Crystal';
    popupPrice.textContent = '$' + amount.toFixed(2);
  
    popup.style.display = 'flex';
  }
  
  function hidePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
  }
  