import Errors from './Errors.js';

export default class Form {
  constructor(data){
    this.originalData = data;
    for (let field in data) {
      this[field] = data[field];
    }

    this.errors = new Errors();
  }

  getData(){
    let fields = {};

    for (let property in this.originalData){
      fields[property] = this[property];
    }
    return fields;
  }

  post(url){
    return this.submit('post', url)
  }

  submit(requestType, url){
    console.log(this.getData());

    console.log('registering....aaa');
    console.log(url);
    return new Promise((resolve, reject) => {
      axios[requestType](url, this.getData())
        .then(response => {
          //console.log(response)
          resolve(response.data)
        })
        .catch(error => {
          console.log(error)
          if (error.response !== undefined) {
            this.errors.record(error.response.data.errors)
            reject(error.response.data.errors)
          }
        })
    });
  }
}
