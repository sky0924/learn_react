import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease, setDiff } from "../modules/counter";

function CounterContainer({ number, diff, increase, decrease, setDiff }) {
  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={increase}
      onDecrease={decrease}
      onSetDiff={setDiff}
    />
  );
}

const mapStateToProps = (state) => ({
  number: state.counter.number,
  diff: state.counter.diff,
});

const mapDispatchToProps = {
  increase,
  decrease,
  setDiff,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

// const enhance = connect(mapStateToProps, mapDispatchToProps);
// export defualt enhance(CounterContainer);
