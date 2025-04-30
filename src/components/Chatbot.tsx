import React from 'react';

const Chatbot: React.FC = () => {
  return (
    <div style={styles.body}>
      <div style={styles.chatbotContainer}>
        <h2 style={styles.heading}>Talk to Our Retail Assistant</h2>
        <iframe
          style={styles.iframe}
          allow="microphone;"
          src="https://console.dialogflow.com/api-client/demo/embedded/1c12e60f-dfa2-4f2e-95c5-cb518d999b09"
        />
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  body: {
    fontFamily: "'Poppins', sans-serif",
    margin: 0,
    padding: 0,
    background: 'linear-gradient(to right, #E8F0FF, #FDEBFF)', // Soft gradient
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  chatbotContainer: {
    width: '90%',
    maxWidth: '500px',
    backgroundColor: '#ffffff',
    padding: '25px',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
    border: '2px solid #dfe6f3',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  iframe: {
    width: '100%',
    height: '450px',
    border: '2px solid #cbd5e1',
    borderRadius: '12px',
    backgroundColor: '#f9fafc',
  },
  heading: {
    fontSize: '22px',
    fontWeight: 500,
    color: '#343a40',
    marginBottom: '20px',
    borderBottom: '2px solid #e0e0e0',
    paddingBottom: '10px',
  },
};

export default Chatbot;