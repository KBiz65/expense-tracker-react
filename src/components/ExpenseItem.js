import React from "react";

class ExpenseItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props,
    };
  }

  render() {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });

    return (
      <div className="container expense-item-container">
        <div className="row expense-row">
          <div
            className="expense-row-item-id"
            id={this.state.items.item.id}
          ></div>
          <div className="col col-sm-3 expense-row-item">
            {this.state.items.item.date}
          </div>
          <div className="col col-sm-2 expense-row-item">
            {this.state.items.item.type}
          </div>
          <div className="col col-sm-3 expense-row-item">
            {this.state.items.item.merchant}
          </div>
          <div className="col col-sm-2 expense-row-item">
            {formatter.format(Number(this.state.items.item.amount))}
          </div>
          <button
            className="col col-sm-1 btn btn-sm btn-outline-danger expense-row-item"
            onClick={this.state.items.handleDeleteExpense}
          >
            X
          </button>
        </div>
      </div>
    );
  }
}

export default ExpenseItem;
