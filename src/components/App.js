import { useState } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addFeedback = e => {
    const { name } = e.currentTarget;
    switch (name) {
      case 'good':
        setGood(prev => (prev + 1))
        break;
      case 'neutral':
        setNeutral(prev => (prev + 1))
        break;
      case 'bad':
        setBad(prev => (prev + 1));
        break;
      default: return;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    if (good > 0) {
      const sum = (good * 100) / countTotalFeedback();
      return sum.toFixed(0);
    }
    return 0
  };
  const option = Object.keys({ good, neutral, bad })

  return (
    <div style={{ padding: 40 }}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={option} onLeaveFeedback={addFeedback}></FeedbackOptions>
      </Section>
      <Section title='Statistics'>
        {countTotalFeedback() !== 0 ? <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={Number(countPositiveFeedbackPercentage())}></Statistics> : <Notification message='No feedback given'></Notification>}
      </Section>
    </div>
  )
}












