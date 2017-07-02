
export default class Person{
  constructor(json){
    this.json = json;
  }
  
  get people(){
    if (!this.ok) return null;
    let peeps = [];
    for (let peep of this.json.result){
      peeps.push({firstname: peep.firstname, lastname: peep.lastname});
    }
    return peeps;
  }
  
  get ok(){
    return this.json.meta && this.json.meta.structure === "array" && this.json.meta.type === "Person";
  }
}