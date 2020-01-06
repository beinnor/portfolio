import React from 'react';

import {
  FormWrapper,
  Form,
  FormHeading,
  Fieldset,
  Textarea,
  Input,
  Button,
  Label,
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
          <Label htmlFor="name">Name</Label>
          <Input
            placeholder="Name"
            required
            type="text"
            id="name"
            name="name"
          />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="email">Email</Label>
          <Input
            placeholder="Email"
            required
            type="email"
            id="email"
            name="email"
          />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="message">Your message</Label>
          <Textarea
            placeholder="Message here...."
            id="message"
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
