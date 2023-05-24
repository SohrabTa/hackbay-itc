import React, { useEffect } from 'react';
import Confetti from 'react-confetti';

const SummaryPage = () => {
  useEffect(() => {
    // Scroll to the top of the page when component mounts
    window.scrollTo(0, 0);
  }, []);

  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#172f5e',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
  };

  const jumbotronStyle = {
    fontSize: '80px',
    marginBottom: '20px',
  };

  const h2Style = {
    fontSize: '24px',
    marginBottom: '10px',
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#fca311',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '18px',
    cursor: 'pointer',
  };

  return (
    <div style={pageStyle}>
      <div style={jumbotronStyle}>
        <h1>Congratulations!</h1>
      </div>
      <h2>You and your child have completed your own personal adventure!</h2>
      <p>The experience was new and exciting, and you made it through while having fun 😊</p>
      <p>The next adventure is right around the corner 😉</p>
      <button style={buttonStyle}>What's next?</button>
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
      />
    </div>
  );
};

export default SummaryPage;
