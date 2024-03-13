const Feedback = ({ reviews: { good, neutral, bad }, totalFeedback }) => {
  const positivePercent = Math.round(((good + neutral) / totalFeedback) * 100);

  return (
    <div>
      <div>
        <p>
          <b>Good:</b> {good}
        </p>
        <p>
          <b>Neutral:</b> {neutral}
        </p>
        <p>
          <b>Bad:</b> {bad}
        </p>
        <p>
          <b>Total:</b> {totalFeedback}
        </p>
        <p>
          <b>Positive:</b> {positivePercent}%
        </p>
      </div>
    </div>
  );
};

export default Feedback;
