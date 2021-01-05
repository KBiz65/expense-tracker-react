import React from "react";

class ExpenseItem extends React.Component {
  constuctor(props) {
    super(props);
    this.state = {
      items: props,
    };
  }

  render() {
    return (
      <div className="container expense-item">
        <div className="row expense-labels">
          <div className="col col-sm-3">Date</div>
          <div className="col col-sm-3">Type</div>
          <div className="col col-sm-3">Merchant</div>
          <div className="col col-sm-3">Amount</div>
        </div>
        <div className="row expense-row">
          <div className="col col-sm-3">{this.items.props.date}</div>
          <div className="col col-sm-3">{this.items.props.type}</div>
          <div className="col col-sm-3">{this.items.props.merchant}</div>
          <div className="col col-sm-3">{this.items.props.amount}</div>
        </div>
      </div>
    );
  }
}

export default ExpenseItem;
