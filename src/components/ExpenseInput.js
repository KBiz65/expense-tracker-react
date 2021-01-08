import React from "react";
import ExpenseButton from "./ExpenseButton";
import ExpenseItem from "./ExpenseItem";

class ExpenseInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [],
      date: "",
      type: "",
      merchant: "",
      amount: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteExpense = this.handleDeleteExpense.bind(this);
  }

  componentDidMount() {
    const storage = JSON.parse(localStorage.getItem("expenseItems"));

    storage &&
      this.setState({
        expenses: storage,
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.expenses !== this.state.expenses) {
      console.log("ComponentDidUpdate was called");
      console.log("prevState.expenses: ", prevState.expenses);
      console.log("this.state.expenses: ", this.state.expenses);
      localStorage.clear();
      localStorage.setItem("expenseItems", JSON.stringify(this.state.expenses));
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let randomId = Math.random();
    let expenseArray = this.state.expenses;
    expenseArray.push({
      id: randomId,
      date: event.target.date.value,
      type: event.target.type.value,
      merchant: event.target.merchant.value,
      amount: event.target.amount.value,
    });

    expenseArray.sort((a, b) => {
      let dateA = new Date(a.date),
        dateB = new Date(b.date);
      return dateB - dateA;
    });

    this.setState({
      ...this.state,
      expenses: expenseArray,
      date: "",
      type: "",
      merchant: "",
      amount: "",
    });

    localStorage.setItem("expenseItems", JSON.stringify(this.state.expenses));

    alert("Expense for " + event.target.merchant.value + " added");
  }

  handleDeleteExpense(event) {
    let expenseArray = this.state.expenses;
    let expenseToDelete = event.target.parentElement.firstChild;

    const deleteExpenseFromArray = expenseArray.filter(
      (item) => item.id !== Number(expenseToDelete.id)
    );

    console.log("deleteExpFromArr: ", deleteExpenseFromArray);
    this.setState({
      ...this.state,
      expenses: deleteExpenseFromArray,
    });
  }

  render() {
    const expenseItems = this.state.expenses.map((item) => (
      <ExpenseItem
        key={item.id}
        item={item}
        expenseArray={this.state.expenses}
        handleDeleteExpense={this.handleDeleteExpense}
      />
    ));

    return (
      <div className="expense-body-container">
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
                  onChange={this.handleChange}
                ></input>
              </div>

              <div className="form-group col-sm-3">
                <label className="col col-sm-.5 col-form-label">Type:</label>
                <select
                  className="col col-sm-2.5 form-control-lg"
                  id="type"
                  name="type"
                  value={this.state.type}
                  onChange={this.handleChange}
                >
                  <option value="Cash">Cash</option>
                  <option value="Credit">Credit</option>
                  <option value="Crypto">Crypto</option>
                </select>
              </div>

              <div className="form-group col-sm-3">
                <label className="col col-sm-.5 col-form-label">
                  Merchant:
                </label>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  id="merchant"
                  name="merchant"
                  value={this.state.merchant}
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
                ></input>
              </div>
            </div>

            <ExpenseButton />
          </form>
        </div>
        <div className="row expense-labels">
          <div className="col col-sm-3 expense-labels-item">Date</div>
          <div className="col col-sm-2 expense-labels-item">Type</div>
          <div className="col col-sm-3 expense-labels-item">Merchant</div>
          <div className="col col-sm-2 expense-labels-item">Amount</div>
          <div className="col col-sm-1 expense-labels-item">Delete</div>
        </div>
        <div className="expense-item">{expenseItems}</div>
      </div>
    );
  }
}
export default ExpenseInput;
