export default class Errors {
    constructor(){
      this.errors = {}
    }

    get(field){
      //console.log(this.errors[field])
      if(this.errors[field]) {
        return this.errors[field][0]
      }
    }

    record(errors){
      this.errors = errors;
    }

    any(){
      return Object.keys(this.errors).length > 0;
    }

    clear(field) {
        if (field) {
          delete this.errors[field];
          //this.errors = _.clone(this.errors);
        }

        if (!this.any()) {
          //this.errors = {};
        }

    }
  };
