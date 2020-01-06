import React from 'react';

import {
  FormWrapper,
  Form,
  FormHeading,
  Fieldset,
  Textarea,
  Input,
  Button,
} from './styles';

export const ContactForm = () => {
  return (
    <FormWrapper>
      <Form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <FormHeading>Contact me</FormHeading>
        <Fieldset>
          <Input
            placeholder="Name"
            required
            autofocus
            type="text"
            name="name"
          />
        </Fieldset>
        <Fieldset>
          <Input placeholder="Email" required type="email" name="email" />
        </Fieldset>
        <Fieldset>
          <Textarea
            placeholder="Message here...."
            name="message"
            required
          ></Textarea>
        </Fieldset>
        <Fieldset>
          <Button type="submit">Submit</Button>
        </Fieldset>
      </Form>
    </FormWrapper>
  );
};
