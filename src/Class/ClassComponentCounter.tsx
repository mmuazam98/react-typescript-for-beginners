import { Component } from "react";

type CounterProps = {
  message: string;
};

type CounterState = {
  count: number;
};

// if no props => <{},StateType>
// if no state => <PropsType>
//  if both => <PropsType,StateType>
export class Counter extends Component<CounterProps, CounterState> {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  render() {
    return (
      <section>
        <h1>Class Component</h1>
        <button onClick={this.handleClick}>
          {this.props.message} - {this.state.count}
        </button>
      </section>
    );
  }
}
