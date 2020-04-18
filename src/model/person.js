class User {
    /*
     * PROPRIEDADES
     * idUser
     * nmUser
     * dsUser
     * dsNickname
     * dsPassword
     * dsEmail
     * dsLogin
     *
     */
    constructor(user) {
      Object.assign(this, user);
    }
  
    set nmUser(name) {
      this._nmUser = name;
    }
  
    get nmUser() {
      return this._nmUser;
    }
  
    set dsNickname(dsNickname) {
      this._dsNickname = dsNickname;
    }
  
    get dsNickname() {
      return this._dsNickname;
    }
   
    set nrAge(dsNickname) {
      this._nrAge = dsNickname;
    }
  
    get nrAge() {
      return this._nrAge;
    }
  }
  
  module.exports = User;
  