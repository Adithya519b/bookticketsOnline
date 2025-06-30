const buslayout = document.querySelector(".buslayout");
const confirmBtn = document.getElementById('confirm');
let availableseats=document.getElementById('avbl');
let totalSeats = 28;

  // Get reserved seats from localStorage or initialize
const reservedSeats = JSON.parse(localStorage.getItem('reservedSeats')) || [];
  // Generate seats
  for (let i = 1; i <= totalSeats; i++) {
  const seat = document.createElement('div');
      seat.classList.add('seat');
      seat.innerHTML=`<img src="seat.png"></img>`
      seat.value=i;

      // If seat is already reserved
      if (reservedSeats.includes(i)) {
        seat.classList.add('reserved');
      }

      // Click to select
      seat.addEventListener('click', () => {
        if (!seat.classList.contains('reserved')) {
          seat.classList.toggle('selected');
        }
      });

      buslayout.appendChild(seat);
    }

    // Confirm booking
    confirmBtn.addEventListener('click', () => {
      
      
      const selectedSeats = document.querySelectorAll('.seat.selected');
      if (selectedSeats.length === 0) {
        alert("Please select at least one seat!");
        return;
      }

      selectedSeats.forEach(seat => {
        seat.classList.remove('selected');
        seat.classList.add('reserved');
        reservedSeats.push(parseInt(seat.value));
       
      });

 
      // Save to localStorage
      localStorage.setItem('reservedSeats', JSON.stringify(reservedSeats));
      alert("Booking Confirmed!");
     
      
    });
    if(reservedSeats.length>=totalSeats){
      availableseats.innerText="Filled"
    }
    console.log(reservedSeats.length)
    
    
  