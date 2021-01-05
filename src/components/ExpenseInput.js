import React from "react";
// import ExpenseButton from "./ExpenseButton";

class ExpenseInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expenses: [] };

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(event) {
  //   console.log("handleChange called");

  //   const value = event.target.value;
  //   this.setState({
  //     ...this.state,
  //     [event.target.name]: value,
  //   });
  // }

  handleSubmit(event) {
    // console.log("event: ", event);
    // console.log(this.state);
    let randomId = Math.random();
    let expense = {
      id: randomId,
      date: event.target.date.value,
      type: event.target.type.value,
      merchant: event.target.merchant.value,
      amount: event.target.amount.value,
    };
    console.log("expense: ", expense);
    this.setState({
      ...this.state,
      [randomId]: expense,
    });

    console.log(this.state.expenses);
    alert("Expense for " + expense.merchant + " added");
    event.preventDefault();
  }

  render() {
    return (
      <div className="expense-input-container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-row expense-input-content">
            <div className="form-group col-sm-3">
              <label className="col col-sm-.5 col-form-label">Date:</label>
              <input
                className="form-control form-control-lg"
                type="date"
                id="date"
                name="date"
                value={this.state.date}
              ></input>
            </div>

            <div className="form-group col-sm-3">
              <label className="col col-sm-.5 col-form-label">Type:</label>
              <select
                className="col col-sm-2.5 form-control-lg"
                id="type"
                name="type"
                value={this.state.type}
              >
                <option value="Cash">Cash</option>
                <option value="Credit">Credit</option>
                <option value="Crypto">Crypto</option>
              </select>
            </div>

            <div className="form-group col-sm-3">
              <label className="col col-sm-.5 col-form-label">Merchant:</label>
              <input
                className="form-control form-control-lg"
                type="text"
                id="merchant"
                name="merchant"
                value={this.state.expenses.merchant}
              ></input>
            </div>

            <div className="form-group col-sm-3">
              <label className="col col-sm-.5 col-form-label">Amount:</label>
              <input
                className="form-control form-control-lg"
                type="text"
                id="amount"
                name="amount"
                value={this.state.amount}
              ></input>
            </div>
          </div>

          <button className="btn btn-success" type="submit" id="data-button">
            ENTER
          </button>

          {/* <ExpenseButton /> */}
        </form>
      </div>
    );
  }
}
export default ExpenseInput;
