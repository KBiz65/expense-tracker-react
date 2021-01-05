import React from "react";

class PushData extends React.Component {
  constructor() {
    super();
    this.state = {
      expensesArray: {},
    };
  }

  render() {
    console.log("In render: ", this.state.expensesArray);
    return (
      <div>
        {console.log("Hello world!")}
        {console.log("This works")};
      </div>
    );
  }
}

export default PushData;
