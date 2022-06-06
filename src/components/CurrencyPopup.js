import React, { useState } from "react";

class CurrencyPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false
    };
  }

  render() {
    return (
      <div className={`popup ${this.props.isOpen ? "popup_opened" : ""}`} onClick={this.props.closePopup}>
        {/* <div className="popup__overlay"></div> */}
        <ul className="popup-currency">
          <li><button className="popup-currency__element">$ USD</button></li>
          <li><button className="popup-currency__element">€ EUR</button></li>
          <li><button className="popup-currency__element">¥ JPY</button></li>
        </ul>
      </div>
    )
  }
}


export default CurrencyPopup;