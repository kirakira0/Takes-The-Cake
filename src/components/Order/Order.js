import React from "react";
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

const Order = () => {
  return (
    <div>
      <h3>Order</h3>
      <Form>
        <FormGroup>
          <Label for='name'>Name：</Label>
          <Input 
            type='text' 
            name='name' />
        </FormGroup>
        <FormGroup>
          <Label for='message'>Message：</Label>
          <Input 
            type='textarea' 
            name='message' />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default Order;