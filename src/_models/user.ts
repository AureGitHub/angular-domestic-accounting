export class User {

 
    constructor(
    public id: number,
    public username: string,
    public name: string,
    public idRol: number,
    public expires: number,
    public token: string) {
       
   }
    public password: string
    public esAdmin() : boolean{return this.idRol==1};
   
}