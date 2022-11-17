const App = () => {
  const [userInput, setUserInput] = React.useState("");
  const [display, setDisplay] = React.useState("");
  const [answer, setAnswer] = React.useState(0);

  const addUserInput = (entry) => {
    if (answer) {
      let prevAnswer = answer;
      allClear();
      entry = prevAnswer + entry;
    }

    setUserInput((prevUserInput) => prevUserInput + entry);
    setDisplay((prevUserInput) => prevUserInput + entry);
  };

  const calculate = () => {
    setDisplay((prevDisplay) => prevDisplay + "=");
    setAnswer(eval(userInput));
    setUserInput();
  };

  const allClear = () => {
    setUserInput("");
    setDisplay("");
    setAnswer(0);
  };

  const handleKeyPress = (event) => {
    if (event.key.match(/\d|[\+\-\/\*]/)) {
      addUserInput(event.key);
    } else if (event.keyCode === 8) {
      // allClear();
      setDisplay((prevDisplay) => prevDisplay.slice(0, -1));
      setUserInput((prevUserInput) => prevUserInput.slice(0, -1));
    } else if (event.keyCode === 13) {
      calculate();
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="container-xl primary">
      <div className="row">
        <button
          onClick={calculate}
          className="btn btn-success col-8"
          id="equals"
        >
          =
        </button>

        <button onClick={allClear} className="btn btn-danger col-4" id="clear">
          AC
        </button>
      </div>

      <div className="row">
        <button
          onClick={() => addUserInput("0")}
          className="btn btn-primary col-6"
          id="zero"
        >
          0
        </button>
        <button
          onClick={() => addUserInput(".")}
          className="btn btn-dark col-3"
          id="decimal"
        >
          .
        </button>

        <button
          onClick={() => addUserInput("*")}
          className="btn btn-dark col-3"
          id="multiply"
        >
          x
        </button>
      </div>
      <div className="row">
        <button
          onClick={() => addUserInput("1")}
          className="btn btn-primary col"
          id="one"
        >
          1
        </button>
        <button
          onClick={() => addUserInput("2")}
          className="btn btn-primary col"
          id="two"
        >
          2
        </button>
        <button
          onClick={() => addUserInput("3")}
          className="btn btn-primary col"
          id="three"
        >
          3
        </button>
        <button
          onClick={() => addUserInput("/")}
          className="btn btn-dark col"
          id="divide"
        >
          /
        </button>
      </div>
      <div className="row">
        <button
          onClick={() => addUserInput("4")}
          className="btn btn-primary col"
          id="four"
        >
          4
        </button>
        <button
          onClick={() => addUserInput("5")}
          className="btn btn-primary col"
          id="five"
        >
          5
        </button>
        <button
          onClick={() => addUserInput("6")}
          className="btn btn-primary col"
          id="six"
        >
          6
        </button>
        <button
          onClick={() => addUserInput("-")}
          className="btn btn-dark col"
          id="subtract"
        >
          -
        </button>
      </div>
      <div className="row">
        <button
          onClick={() => addUserInput("7")}
          className="btn btn-primary col"
          id="seven"
        >
          7
        </button>
        <button
          onClick={() => addUserInput("8")}
          className="btn btn-primary col"
          id="eight"
        >
          8
        </button>
        <button
          onClick={() => addUserInput("9")}
          className="btn btn-primary col"
          id="nine"
        >
          9
        </button>
        <button
          onClick={() => addUserInput("+")}
          className="btn btn-dark col"
          id="add"
        >
          +
        </button>
      </div>
      <div id="display">
        <input type="text" value={display} disabled></input>
      </div>
      <div id="answer">{answer}</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
