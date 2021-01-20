
import{User_id} from "./User1";
export class App_id{
   id_app: number; 
}
export class App{
   id_app: App_id;
   scope: string;
   name: string;
   url: string;
   users:User_id[]; 
}