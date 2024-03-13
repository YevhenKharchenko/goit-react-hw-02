import { useState } from 'react';
import { useEffect } from 'react';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {
  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem('reviews');

    if (savedReviews !== null) {
      return JSON.parse(savedReviews);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;

  const updateFeedback = feedbackType => {
    setReviews({
      ...reviews,
      [feedbackType]: reviews[feedbackType] + 1,
    });

    localStorage.setItem('reviews', JSON.stringify(reviews));
  };

  const resetFeedback = () => {
    setReviews({
      good: 0,
      neutral: 0,
      bad: 0,
    });

    localStorage.setItem('reviews', JSON.stringify(reviews));
  };

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback reviews={reviews} totalFeedback={totalFeedback} />
      ) : (
        false
      )}
      {!totalFeedback && <Notification />}
    </>
  );
}

export default App;
