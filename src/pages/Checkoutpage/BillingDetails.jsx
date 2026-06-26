import { useState } from 'react';
import styles from './checkoutpagecss/billingdetails.module.css';

const INITIAL = {
  firstName: '', lastName: '', company: '', country: '',
  streetAddress: '', city: '', province: '', zip: '',
  phone: '', email: '', notes: '',
};
const REQUIRED = ['firstName', 'lastName', 'country', 'streetAddress', 'city', 'zip', 'phone', 'email'];

export default function BillingDetails({ onSubmit }) {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});

  const set = (key, val) => {
    setForm(f => ({ ...f, [key]: val }));
    setErrors(e => ({ ...e, [key]: '' }));
  };

  const validate = () => {
    const errs = {};
    REQUIRED.forEach(k => { if (!form[k].trim()) errs[k] = 'This field is required'; });
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Please enter a valid email address';
    if (form.phone && !/^\+?[\d\s\-()]{7,}$/.test(form.phone)) errs.phone = 'Please enter a valid phone number';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      const firstKey = Object.keys(errs)[0];
      document.getElementById('field-' + firstKey)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    onSubmit(form);
  };

  const Field = ({ id, label, required, half, type = 'text', placeholder = '' }) => (
    <div className={`${styles.fieldGroup} ${half ? styles.half : ''}`} id={'field-' + id}>
      <label htmlFor={id} className={styles.label}>
        {label}{required && <span className={styles.req}>*</span>}
      </label>
      <input
        id={id} type={type} value={form[id]} placeholder={placeholder}
        onChange={e => set(id, e.target.value)}
        className={`${styles.input} ${errors[id] ? styles.inputError : ''}`}
      />
      {errors[id] && <span className={styles.errorMsg}>{errors[id]}</span>}
    </div>
  );

  return (
    <form className={styles.billingForm} onSubmit={handleSubmit} noValidate>
      <h2 className={styles.formTitle}>Billing Details</h2>
      <div className={styles.formGrid}>
        <Field id="firstName"     label="First Name"           required half />
        <Field id="lastName"      label="Last Name"            required half />
        <Field id="company"       label="Company Name (optional)" />
        <Field id="country"       label="Country / Region"     required placeholder="e.g. Nigeria" />
        <Field id="streetAddress" label="Street Address"       required placeholder="House number and street name" />
        <Field id="city"          label="Town / City"          required />
        <Field id="province"      label="State / Province" />
        <Field id="zip"           label="Postcode / ZIP"       required half />
        <Field id="phone"         label="Phone"                required half type="tel" placeholder="+234…" />
        <Field id="email"         label="Email Address"        required type="email" placeholder="you@example.com" />
      </div>
      <div className={styles.notesGroup}>
        <label htmlFor="notes" className={styles.label}>Order Notes (optional)</label>
        <textarea id="notes" value={form.notes} onChange={e => set('notes', e.target.value)}
          className={styles.textarea} rows={4}
          placeholder="Notes about your order, e.g. special delivery instructions" />
      </div>
      <button type="submit" id="billing-submit" style={{ display: 'none' }} />
    </form>
  );
}
