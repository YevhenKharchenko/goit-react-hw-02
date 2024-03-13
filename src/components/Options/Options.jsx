const Options = ({ updateFeedback, totalFeedback }) => {
  return (
    <div onClick={updateFeedback}>
      <button>Good</button>
      <button>Neutral</button>
      <button>Bad</button>
      {totalFeedback > 0 ? <button>Reset</button> : false}
    </div>
  );
};

export default Options;
