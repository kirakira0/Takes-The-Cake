import React from "react";
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

const Order = () => {
  return (
    <div>
      <h3>Order</h3>
      <Form>
        <FormGroup>
          <Label for='name'>名前：</Label>
          <Input 
            type='text' 
            name='name' />
        </FormGroup>
        <FormGroup>
          <Label for='message'>メッセージ：</Label>
          <Input 
            type='textarea' 
            name='message' />
        </FormGroup>
        <Button>申し出る</Button>
      </Form>
    </div>
  );
};

export default Order;