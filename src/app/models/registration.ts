export class Registration{
  public id:string|null=null;
  constructor(
    public kidName:string,
    public kidLastName:string,
    public kidAges:number,
    public email:string,
    public phone:number,
    public kidClass:string
  ) {
  }

}
