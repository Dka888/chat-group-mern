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