let nav_menu = document.querySelector('.nav_menu_main')
let nav_menu_toggle = document.querySelector('.nav_menu_toggle')
let nav_menu_toggle_icon = document.querySelector('.menu_toggle_icon')

nav_menu_toggle.addEventListener('click', () => {
  nav_menu.classList.toggle('active')
  nav_menu_toggle_icon.setAttribute(
    'name',
    nav_menu.classList.contains('active') ? 'close-outline' : 'menu-outline'
  )
})

let sr = ScrollReveal({
  distance: '50px',
  delay: 300,
  duration: 2300,
})

sr.reveal('.logo', {
  origin: 'bottom',
})
sr.reveal('.nav_menu', {
  origin: 'top',
})
sr.reveal('.nav_list', {
  interval: 200,
  origing: 'top',
  mobile: false,
})
sr.reveal('.heading', {
  origing: 'bottom',
})
sr.reveal('.nipay-content .paragraphs', {
  origing: 'bottom',
  delay: 700,
})
sr.reveal('.btns', {
  origing: 'bottom',
  delay: 800,
})

sr.reveal('.nipay-image img', {
  origing: 'top',
  delay: 800,
})

sr.reveal('.features-item', {
  interval: 200,
  origin: 'top',
})

sr.reveal('.features-image', {
  origing: 'top',
  delay: 800,
})
document
  .getElementById('payment-form')
  .addEventListener('submit', function (event) {
    var code = document.getElementById('code').value
    if (code.trim() == '') {
      event.preventDefault() // prevent form submission
      alert('Please enter a code.') // show error message
    }
  })

paypal
  .Buttons({
    createOrder: function (data, actions) {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: '10.00',
            },
          },
        ],
      })
    },
    onApprove: function (data, actions) {
      return actions.order.capture().then(function (details) {
        document.getElementById('payment-message').innerHTML =
          'Payment successful. Thank you for using nipay!'
      })
    },
  })
  .render('#paypal-button-container')
