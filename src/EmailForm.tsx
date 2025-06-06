import { useForm, ValidationError } from '@formspree/react';
import "./EmailForm.css";

export default function EmailForm() {
  const [state, handleSubmit] = useForm("meokezbk");
  if (state.succeeded) {
      return <p>Thanks for sharing! We promise not to spam you.</p>;
  }
  return (
    <form className="email-form" onSubmit={handleSubmit}>
      <label htmlFor="email">
        Want to learn more?
        <br/>
        Input your email to get updates:
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="Keep me in the weave"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}