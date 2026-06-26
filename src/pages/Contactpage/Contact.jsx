import { useState } from 'react';
import styles from './contact.module.css';
import SubHeroImg from '../../components/SubHeroImg';
import Guarantees from '../../components/Guarantees';

const INIT = { name:'', email:'', subject:'', phone:'', message:'' };

export default function Contact() {
  const [form, setForm] = useState(INIT);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const set = (k, v) => { setForm(f => ({ ...f, [k]: v })); setErrors(e => ({ ...e, [k]: '' })); };

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.email.trim())   e.email   = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const Field = ({ id, label, required, type='text', placeholder='' }) => (
    <div className={styles.fieldGroup}>
      <label htmlFor={id} className={styles.label}>{label}{required && <span className={styles.req}>*</span>}</label>
      <input id={id} type={type} value={form[id]} placeholder={placeholder}
        onChange={e => set(id, e.target.value)}
        className={`${styles.input} ${errors[id] ? styles.inputError : ''}`} />
      {errors[id] && <span className={styles.errorMsg}>{errors[id]}</span>}
    </div>
  );

  return (
    <div className={styles.contactPage}>
      <SubHeroImg pageName="Contact" />

      <div className={styles.contactBody}>
        {/* Info */}
        <div className={styles.infoPanel}>
          <h2>Get In Touch</h2>
          {[
            ['📍','Address','400 University Drive Suite 200, Coral Gables, FL 33134 USA'],
            ['📞','Phone','+1 (305) 555-0123'],
            ['⏰','Working Hours','Mon–Fri: 9 am – 6 pm'],
            ['✉️','Email','hello@furnidan.com'],
          ].map(([icon,label,val]) => (
            <div key={label} className={styles.infoItem}>
              <span className={styles.infoIcon}>{icon}</span>
              <div>
                <p className={styles.infoLabel}>{label}</p>
                <p className={styles.infoVal}>{val}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        {submitted ? (
          <div className={styles.successCard}>
            <div className={styles.successIcon}>✓</div>
            <h2>Message Sent!</h2>
            <p>Thanks for reaching out. We'll get back to you within 24 hours.</p>
            <button onClick={() => { setSubmitted(false); setForm(INIT); }} className={styles.sendAgainBtn}>
              Send Another
            </button>
          </div>
        ) : (
          <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
            <Field id="name"    label="Your Name"    required />
            <Field id="email"   label="Email Address" required type="email" placeholder="you@example.com" />
            <Field id="subject" label="Subject" placeholder="How can we help?" />
            <Field id="phone"   label="Phone Number" type="tel" placeholder="+234…" />
            <div className={styles.fieldGroup}>
              <label htmlFor="message" className={styles.label}>Message<span className={styles.req}>*</span></label>
              <textarea id="message" value={form.message} onChange={e => set('message', e.target.value)}
                className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`} rows={5}
                placeholder="Write your message here…" />
              {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
            </div>
            <button type="submit" className={styles.submitBtn}>Send Message</button>
          </form>
        )}
      </div>

      <Guarantees />
    </div>
  );
}
