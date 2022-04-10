   class UsersValidation{  
     validateEmail(email) 
    {
        var email_regex = /\S+@\S+\.\S+/;
        return email_regex.test(email);
    }

     validateBirthday(testDate) 
    {
      var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
      return date_regex.test(testDate);
      
    }

     phonenumber(phone) {
      var phon_regex = /^\(?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$/;
      return phon_regex.test(phone)
    }
  
     onlynumberCPFAndElevenDigits(cpf) {
      var cpf_regex = /[0-9]{11}/;
      return cpf_regex.test(cpf)
   }

     
    onlyValidTypeUsers(type) {
    var type_valid =  "C" || "A" || "P"
    if(type === type_valid){
      return true 
    }else{
      return false
    }  
  }
} module.exports = UsersValidation
