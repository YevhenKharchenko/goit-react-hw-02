import css from './Options.module.css';

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className={css.optionsWrapper}>
      <button
        className={(css.btn, css.good)}
        onClick={() => {
          updateFeedback('good');
        }}
      >
        Good
      </button>
      <button
        className={(css.btn, css.neutral)}
        onClick={() => {
          updateFeedback('neutral');
        }}
      >
        Neutral
      </button>
      <button
        className={(css.btn, css.bad)}
        onClick={() => {
          updateFeedback('bad');
        }}
      >
        Bad
      </button>
      {totalFeedback > 0 ? (
        <button className={(css.btn, css.reset)} onClick={resetFeedback}>
          Reset
        </button>
      ) : (
        false
      )}
    </div>
  );
};

export default Options;
