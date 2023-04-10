const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Get all relevant elements
const statusElements = document.querySelectorAll('.status');
const reserveButtons = document.querySelectorAll('.reserve');
const checkoutButtons = document.querySelectorAll('.checkout');
const checkinButtons = document.querySelectorAll('.checkin');

// Update each book element based on its status
for (let i = 0; i < statusElements.length; i++) {
  const statusText = statusElements[i].textContent.trim().toLowerCase();
  const status = STATUS_MAP[statusText];

  // Update status text color
  statusElements[i].style.color = status.color;

  // Enable/disable buttons
  reserveButtons[i].disabled = !status.canReserve;
  checkoutButtons[i].disabled = !status.canCheckout;
  checkinButtons[i].disabled = !status.canCheckIn;

  // Set button color to black and grayscale
  reserveButtons[i].style.color = 'black';
  checkoutButtons[i].style.color = 'black';
  checkinButtons[i].style.color = 'black';
  reserveButtons[i].style.filter = 'grayscale(100%)';
  checkoutButtons[i].style.filter = 'grayscale(100%)';
  checkinButtons[i].style.filter = 'grayscale(100%)';
}