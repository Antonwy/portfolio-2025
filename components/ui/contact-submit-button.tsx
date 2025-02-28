'use client';

import { Loader2, SendIcon } from 'lucide-react';
import Button from './button';

type ContactSubmitButtonProps = {
  pending: boolean;
  disabled?: boolean;
};

function ContactSubmitButton({ pending, disabled }: ContactSubmitButtonProps) {
  return (
    <Button
      type="submit"
      className="mx-auto py-3"
      disabled={pending || disabled}
    >
      {pending ? (
        <Loader2 className="size-4 animate-spin" aria-hidden="true" />
      ) : (
        <SendIcon className="size-4" aria-hidden="true" />
      )}
      <span>Send</span>
    </Button>
  );
}

export default ContactSubmitButton;
