const Feedback = ({ reviews, totalFeedback }) => {
  const positivePercent = Math.round(
    ((reviews.good + reviews.neutral) / totalFeedback) * 100
  );

  return (
    <div>
      <div>
        <p>Good: {reviews.good}</p>
        <p>Neutral: {reviews.neutral}</p>
        <p>Bad: {reviews.bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive: {positivePercent}%</p>
      </div>
    </div>
  );
};

export default Feedback;
