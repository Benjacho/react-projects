import React, {Component} from 'react';

class ExpenseItem extends Component {
  constructor(props) {
    super(props);
    this.expense = props.expense
  }

  render() {
    return (
      <div className="card flex items-center justify-between">
        <div className="basis-1/2 flex items-center">
          <div className="flex-col card bg-gray-500  text-center">
            <p className="text-indigo-100">{this.expense.date.toLocaleString('en-US', {month: 'long'})}</p>
            <p className="text-indigo-100">{this.expense.date.toLocaleString('en-US', {day: '2-digit'})}</p>
            <p className="text-indigo-100">{this.expense.date.getFullYear()}</p>
          </div>
          <div className="ml-4">
            <h1 className="text-xl">{this.expense.title}</h1>
          </div>
        </div>
        <div className="basis-1/2 flex justify-end">
          <div className="justify-end">
          <p className="card bg-indigo-600 text-indigo-100">{this.expense.amount}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ExpenseItem;
