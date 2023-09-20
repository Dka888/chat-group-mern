import { Channel } from "../types/Channel";
import { Message } from "../types/Message";
import { User } from "../types/User";

export const url = 'http://localhost:3333/api';

export async function getChannels() {
   const response = await fetch(`${url}/channels`);
   console.log(response)
   return response.json(); 
} 

export async function getUsers() {
   const response = await fetch(`${url}/users`);
   console.log(response)
   return response.json(); 
}

export async function getMessages() {
   const response = await fetch(`${url}/messages`);
   return response.json();
}

export async function loginUser(email: string, password: string) {
   const body = {
      email,
      password,
   }
   const response = await fetch(`${url}/users/login`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      redirect: "follow",
      referrerPolicy: "no-referrer",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
   });

   return response.json();
}

export async function registerUser(user: Omit<User, '_id'>) {
   const response = await fetch(`${url}/users/register`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      redirect: "follow",
      referrerPolicy: "no-referrer",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   });
   
   return response.json();
}

export async function createChannel(channel: Omit<Channel,'_id'>) {
   const response =  await fetch(`${url}/channels`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      redirect: "follow",
      referrerPolicy: "no-referrer",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(channel),
   })

   return response.json();
}

export async function createMessage(message: Omit<Message,'_id' | 'created'>) {
   const response = await fetch(`${url}/messages`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      redirect: "follow",
      referrerPolicy: "no-referrer",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
   });
   console.log(response.json())
   return response.json();
}