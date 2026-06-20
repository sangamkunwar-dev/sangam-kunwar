'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Get a free access key from web3forms.com
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Contact Me</h2>
        <p style={styles.subheading}>Drop a line and let's build something cool.</p>
        
        <form onSubmit={onSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Name</label>
            <input type="text" name="name" required style={styles.input} placeholder="John Doe" />
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input type="email" name="email" required style={styles.input} placeholder="you@example.com" />
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.label}>Message</label>
            <textarea name="message" required rows="4" style={styles.textarea} placeholder="Your message..."></textarea>
          </div>
          
          <button type="submit" style={styles.button}>Send Message</button>
        </form>
        {result && <p style={styles.resultText}>{result}</p>}
      </div>
    </div>
  );
}

// Quick Inline CSS Styles
const styles = {
  container: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f3f4f6', fontFamily: 'sans-serif' },
  card: { background: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px' },
  heading: { margin: '0 0 8px 0', textAlign: 'center', color: '#1f2937' },
  subheading: { margin: '0 0 24px 0', textAlign: 'center', color: '#4b5563', fontSize: '14px' },
  formGroup: { marginBottom: '16px' },
  label: { display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: '500', color: '#374151' },
  input: { width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #d1d5db', boxSizing: 'border-box' },
  textarea: { width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #d1d5db', boxSizing: 'border-box', resize: 'vertical' },
  button: { width: '100%', padding: '12px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' },
  resultText: { textAlign: 'center', marginTop: '12px', fontSize: '14px', color: '#2563eb', fontWeight: '500' }
};