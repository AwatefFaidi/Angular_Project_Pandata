import { Users } from "./users";
export class Applications{
   id: Number;
   scope: string;
   name: string;
   url: string;
   users:Users[]; 
}