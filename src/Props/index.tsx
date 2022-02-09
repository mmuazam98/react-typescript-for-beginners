import * as React from "react";

import { Greet } from "./Greet";
import { User } from "./User";
import { UserList } from "./UserList";

import { Status } from "./Status";
import { Container } from "./Container";
import { Heading } from "./Heading";
import { Button, EventHandlerButton } from "./Buttons";
import { Input } from "./Input";
import { Style } from "./Style";

export const Props = () => {
  const name = {
    fname: "John",
    lname: "Doe",
  };
  const users = [
    {
      id: 1,
      name: "John",
    },
    {
      id: 2,
      name: "Jane",
    },
    {
      id: 3,
      name: "Joe",
    },
  ];
  const handleClick = () => console.log("Button clicked");
  const handleClick2 = (e: React.MouseEvent<HTMLButtonElement>) => console.log(e);

  const [value, setValue] = React.useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <section>
      <h1>Props</h1>
      {/* Basic props (string, boolean, number) -  
            isLoggedIn -> required  = boolean
            name -> required  = string
            notifications -> optional = string  
      */}
      <Greet isLoggedIn={true} name="Muazam" notifications={10} />
      {/*
            Object props
            name -> required => Object => {
                fname -> required = string,
                lname: ->optional = string
            }
            
      */}
      <User name={name} />
      {/* 
        Array props
        users -> required = Array => {
            id -> required = number
            name -> required = string
        }[]
      */}
      <UserList users={users} />
      {/* 
        props with predefined values (loading, error, success)
      */}
      <Status status="loading" />

      {/* 
        pass in children to a component
      */}
      <Container>
        <Heading>Heading Component with Children</Heading>
      </Container>

      {/* 
        pass functions\event handlers as props
        handleClick -> required = () => void
      */}
      <Button handleClick={handleClick} />
      <EventHandlerButton handleClick={handleClick2} />

      {/* 
        pass in value and change handler
      */}
      <Input value={value} handleChange={handleChange} />

      {/* pass in css styles */}
      <Style styles={{ border: "1px solid grey", margin: "10px", padding: "10px" }} />
    </section>
  );
};
