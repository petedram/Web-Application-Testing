import React, { useEffect, useState } from "react";
import { Label, Header } from 'semantic-ui-react';

export default function Display(props) {
console.log('from Display', props)
    return (
        <div>
        <Header block>Display</Header>
        <Label.Group size='huge'>
          <Label circular color='black'>Ball {props.ball}</Label>
          <Label circular color='black'>Strike {props.strike}</Label>
          <Label circular color='black'>Foul {props.foul}</Label>
          <Label circular color='black'>Hit {props.hit}</Label>
        </Label.Group>
        </div>
      );
}
  
  

