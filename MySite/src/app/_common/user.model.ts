export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    token?: string;
};
export class RegisterUser {
     public username:string;
     public password:string;
     public email:string
     public firstName:string;
     public lastName:string;
     public matchingPassword: string;
     public gender: string;
     public phoneNumber: string;
     public dateOfBirth: string;  
     public isAgreed: boolean;    
};