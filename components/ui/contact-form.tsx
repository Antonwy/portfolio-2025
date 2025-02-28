'use client';

import Form from 'next/form';
import Input from './input';
import Link from 'next/link';
import { submitContact } from '@/actions/submit-contact';
import ContactSubmitButton from './contact-submit-button';
import { useActionState, useEffect } from 'react';
import { toast } from 'sonner';

const initialState: { success: boolean | null } = {
  success: null,
};

function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState
  );

  useEffect(() => {
    console.log(state.success);
    if (!state.success) return;

    toast.success('Message sent successfully');
  }, [state.success]);

  const handleTextAreaCommandEnterKey = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (e.key === 'Enter' && e.metaKey) {
      e.preventDefault();

      e.currentTarget.form?.requestSubmit();
    }
  };

  return (
    <Form
      className="flex flex-col gap-2 mt-4 container p-4 w-full max-w-lg"
      aria-labelledby="contact-form-heading"
      action={formAction}
      name="contact"
      disabled={state.success ?? false}
    >
      <div className="sr-only" id="contact-form-heading">
        Contact Form
      </div>
      <div className="sr-only" id="contact-form-description">
        Fill out this form to send me a message. All fields are required.
      </div>
      <div
        aria-describedby="contact-form-description"
        className="grid md:grid-cols-2 gap-2"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <Input
            type="text"
            placeholder="Name"
            name="name"
            id="name"
            autoComplete="name"
            required
            aria-required="true"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            autoComplete="email"
            required
            aria-required="true"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          placeholder="Message"
          name="message"
          id="message"
          rows={5}
          required
          aria-required="true"
          className="p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-white/40 transition-colors resize-vertical text-sm"
          onKeyDown={handleTextAreaCommandEnterKey}
        />
      </div>

      <ContactSubmitButton
        pending={pending}
        disabled={state.success ?? false}
      />

      <div className="flex flex-col gap-1 items-center mt-6">
        <p className="text-sm text-center text-white/40">
          Or connect with me on LinkedIn
        </p>

        <Link
          href="https://www.linkedin.com/in/antonwy/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto py-3 px-4 rounded-lg transition-colors flex items-center gap-2 hover:bg-white/[0.05]"
          aria-label="Connect with me on LinkedIn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-3"
            fill="currentColor"
            viewBox="0 0 310 310"
            aria-hidden="true"
          >
            <path d="M72 100H10c-3 0-5 2-5 5v200c0 2 2 5 5 5h62c3 0 5-3 5-5V105c0-3-2-5-5-5zM41 0a41 41 0 1 0 0 83 41 41 0 0 0 0-83zM230 95c-25 0-43 11-54 23v-13c0-3-2-5-5-5h-60c-3 0-5 2-5 5v200c0 2 2 5 5 5h62c3 0 5-3 5-5v-99c0-34 9-47 33-47 25 0 27 21 27 48v98c0 2 2 5 5 5h62c3 0 5-3 5-5V195c0-50-9-100-80-100z" />
          </svg>
          Connect on LinkedIn
        </Link>
      </div>
    </Form>
  );
}

export default ContactForm;
