import PropTypes from 'prop-types';

function Form({ date, setDate, daysMonthsYears, setDaysMonthsYears }) {
  return (
    <form className="main_form">
      <label htmlFor="main_date" className="main_date">
        <span>Data: </span>
        <input
          type="date"
          id="main_date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>

      <label htmlFor="more_days">
        <span>+/- Dias:</span>
        <input
          type="number"
          id="more_days"
          className="number_input"
          value={daysMonthsYears.days}
          onChange={(e) =>
            setDaysMonthsYears({
              ...daysMonthsYears,
              days: e.target.value,
            })
          }
        />
      </label>

      <label htmlFor="more_months">
        <span>+/- Meses:</span>
        <input
          type="number"
          id="more_months"
          className="number_input"
          value={daysMonthsYears.months}
          onChange={(e) =>
            setDaysMonthsYears({
              ...daysMonthsYears,
              months: e.target.value,
            })
          }
        />
      </label>

      <label htmlFor="more_years">
        <span>+/- Anos:</span>
        <input
          type="number"
          id="more_years"
          className="number_input"
          value={daysMonthsYears.years}
          onChange={(e) =>
            setDaysMonthsYears({
              ...daysMonthsYears,
              years: e.target.value,
            })
          }
        />
      </label>
    </form>
  );
}

export default Form;

Form.propTypes = {
  date: PropTypes.string.isRequired,
  setDate: PropTypes.func.isRequired,
  daysMonthsYears: PropTypes.shape({
    days: PropTypes.number.isRequired,
    months: PropTypes.number.isRequired,
    years: PropTypes.number.isRequired,
  }).isRequired,
  setDaysMonthsYears: PropTypes.func.isRequired,
};
