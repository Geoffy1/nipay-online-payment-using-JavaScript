document.getElementById("payment-form").addEventListener("submit", function(event) {
    var code = document.getElementById("code").value;
    if (code.trim() == "") {
      event.preventDefault(); // prevent form submission
      alert("Please enter a code."); // show error message
    }
  });
  
  paypal.Buttons({
    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: '10.00'
          }
        }]
      });
    },
    onApprove: function(data, actions) {
      return actions.order.capture().then(function(details) {
        document.getElementById("payment-message").innerHTML = "Payment successful. Thank you for using nipay!";
      });
    }
  }).render('#paypal-button-container');
