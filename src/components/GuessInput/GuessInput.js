import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");
  const [submittedGuess, setSubmittedGuess] = React.useState({ guess: "" });
  return (
    <div>
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmittedGuess({ guess });
          console.log({ guess });
          setGuess("");
        }}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={guess}
          onChange={(event) => setGuess(event.target.value.toUpperCase())}
          pattern="[A-Z]{5}"
          title="Must be a five letter word."
          maxLength={5}
        />
      </form>
    </div>
  );
}

export default GuessInput;
