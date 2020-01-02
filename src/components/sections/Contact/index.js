import React from 'react';
import { Wrapper, FormWrapper, Form, FormHeading, Fieldset, Textarea, Input, Button } from './styles';

export const Contact = () => (
  <Wrapper id="contact">
    <FormWrapper>
    <Form action="//formspree.io/ronnie.bjorkelund+portfolio@gmail.com" method="post">
      <FormHeading>Contact me</FormHeading>
      <Fieldset>
        <Input
          placeholder="Name"
          name="name"
          type="text"
          tabindex="1"
          required
          autofocus
        />
      </Fieldset>
      <Fieldset>
        <Input
          placeholder="Email"
          name="_replyto"
          type="email"
          tabindex="2"
          required
        />
      </Fieldset>
      <Input type="hidden" name="_subject" value="Portfolio contact" />
      <Input type="text" name="_gotcha" style={{display: 'none'}} />
      <Fieldset>
        <Textarea
          placeholder="Message here...."
          name="message"
          tabindex="5"
          required
        ></Textarea>
      </Fieldset>
      <Fieldset>
        <Button type="submit" data-submit="...Sending">
          Submit
        </Button>
      </Fieldset>
    </Form>
    </FormWrapper>
  </Wrapper>
);
