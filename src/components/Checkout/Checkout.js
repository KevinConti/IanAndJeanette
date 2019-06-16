import React from "react"

const Checkout = class extends React.Component {
  // Initialise Stripe.js with your publishable key.
  // You can find your key in the Dashboard:
  // https://dashboard.stripe.com/account/apikeys

  constructor()
  {
    super();
    this.testPublicKey = "pk_test_stGXngvsAJBlw1f5FIDGh86k00bjUUw7NM";
    this.state = {
        "plan":"plan_FGM1SZyKBlCIK6",
        "donationAmountProps": "hidden mb-4",
        "buttonText": "Donate"
    }
  }
  

  componentDidMount() {
    this.stripe = window.Stripe(this.testPublicKey, {
      betas: ["checkout_beta_4"],
    })
  }

  getQuantity = (event) => {
    event.preventDefault();
    if(this.state.shouldProcessPayment)
    {
        this.redirectToCheckout();
    }
    else
    {
        //Clicking for the first time
        console.log(event);
        //Do a sliding animation here
        this.setState({
        "buttonText":"Confirm",
        "donationAmountProps":"mb-4",
        "shouldProcessPayment":true
    });
    }
  }

  storeQuantity = (event) => {
      if (event.target.value.substring(0,1) != "$")
      {
          event.target.value = "$" + event.target.value;
      }
      let valueWithoutDollarSign = event.target.value.substring(1, event.target.value.length)
      
      
      this.setState({"quantity": valueWithoutDollarSign});
  } 

  async redirectToCheckout() {
      let parsedQuantity = parseInt(this.state.quantity)
      if (isNaN(parsedQuantity))
      {
          alert("Amount must be a whole number, sorry!");
          return;
      }
    const { error } = await this.stripe.redirectToCheckout({
      items: [{plan: this.state.plan, quantity: parsedQuantity}],
      successUrl: `http://localhost:8000/page-2/`,
      cancelUrl: `http://localhost:8000/`,
    })

    if (error) {
      console.warn("Error:", error)
    }
  }

  render() {
    return (
    <div className="">
        
        <button
        className={"bg-blue-600 rounded text-2xl text-center font-semibold text-white hover:text-black inline-block px-24 -mt-6 mb-4 py-1 hover:bg-yellow-500 shadow-md"}
        onClick={event => this.getQuantity(event)}
      >
        {this.state.buttonText}
      </button>
      <div className={this.state.donationAmountProps}>
            <input 
            onChange={ this.storeQuantity }
            className="shadow border rounded w-4032 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Donation amount" />
        </div>
    </div>
    )
  }
}

export default Checkout