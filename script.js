const container = document.querySelector('.container')
const count = document.getElementById('count')
const amount = document.getElementById('amount')
const select = document.getElementById('movie')
const seats = document.querySelectorAll('.seat:not(.reserved)')

calcTotal()

container.addEventListener('click',function(e){
  if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')){
    e.target.classList.toggle('selected')
    calcTotal()
  }
})

select.addEventListener('change', function(){
  calcTotal()
})

function calcTotal(){
  const selected_seats = document.querySelectorAll('.seat.selected')
  let selected_seats_count = selected_seats.length

  let selected_seats_array = []
  let seats_array = []

  selected_seats.forEach(seat => selected_seats_array.push(seat))
  seats.forEach(seat => seats_array.push(seat))

  let selected_seats_indexz = selected_seats_array.map(seat => seats_array.indexOf(seat))
  console.log(selected_seats_indexz)

  count.innerHTML = selected_seats_count
  amount.textContent = select.value * selected_seats_count
  save_to_locale_storage(selected_seats_indexz)
}

// function get_from_locale_storage(){
//   const selected_seats = JSON.parse(localStorage.getItem('selected_seats'))
// }


function save_to_locale_storage(indexz){
  localStorage.setItem('selected_seats',JSON.stringify(indexz))
}