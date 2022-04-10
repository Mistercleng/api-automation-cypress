

context('Users requests ', ()=> {

  const baseUrl = Cypress.config("baseUrl")  
  const Tool = require('./user_validations')
  const user_tool = new Tool()

  // function validateEmail(email) 
  //   {
  //       var email_regex = /\S+@\S+\.\S+/;
  //       return email_regex.test(email);
  //   }

  // function validateBirthday(testDate) 
  //   {
  //     var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
  //     return date_regex.test(testDate);
      
  //   }

  // function phonenumber(phone) {
  //     var phon_regex = /^\(?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$/;
  //     return phon_regex.test(phone)
  //   }
  
  // function onlynumberCPFAndElevenDigits(cpf) {
  //     var cpf_regex = /[0-9]{11}/;
  //     return cpf_regex.test(cpf)
  //  }

     
  // function onlyValidTypeUsers(type) {
  //   var type_valid =  "C" || "A" || "P"
  //   if(type === type_valid){
  //     return true 
  //   }else{
  //     return false
  //   }  
  // }


  it('Users() - verify users status code 200', () => {
    cy.request(`${baseUrl}/users`)
    .then((res) => {
      expect(res).property('status').to.equal(200)
    })
  })

  it('Users() - verify users body not empty', () => {
    cy.request(`${baseUrl}/users`)
    .then((res) => {
      expect(res.body).is.not.empty
    })
  })

  it('Users() - verify get user id not null', () => {
    cy.request(`${baseUrl}/users`)
    .then((res) => {
      expect(res.body.data.users[0].id).is.not.null
    })
  })

  it('Users() - verify get user name not null', () => {
    cy.request(`${baseUrl}/users`)
    .then((res) => {
      expect(res.body.data.users[0].name).is.not.null
    })
  })


  it('Users() - verify get user name more than two chars', () => {
    cy.request(`${baseUrl}/users`)
    .then((res) => {
      expect(res.body.data.users[0].name).to.have.length.above(2) 
    })
  })

  it('Users() - verify get user name less than 30', () => {
    cy.request(`${baseUrl}/users`)
    .then((res) => {
      expect(res.body.data.users[0].name).to.have.length.below(30) 
    })
  })

  it('Users() - verify get user with name Vinicius', () => {
    cy.request(`${baseUrl}/users`)
    .then((res) => {
      expect(res.body.data.users[0].name).to.be.equal('Vinicius Almeida') 
    })
  })

  it('Users() - verify get email not null', () => {
    cy.request(`${baseUrl}/users`)
    .then((res) => {
      expect(res.body.data.users[0].email).is.not.null
    })
  })

  it('Users() - verify get email is a valid email', () => {
    cy.request(`${baseUrl}/users`)
    .then((res) => {
      assert.isTrue(user_tool.validateEmail(res.body.data.users[0].email))
    })
  })



  it('Users() - verify get user email more than two chars', () => {
    cy.request(`${baseUrl}/users`)
    .then((res) => {
      expect(res.body.data.users[0].email).to.have.length.above(4) 
    })
  })

  it('Users() - verify get user email less than 30', () => {
    cy.request(`${baseUrl}/users`)
    .then((res) => {
      expect(res.body.data.users[0].email).to.have.length.below(30) 
    })
  })


  it('Users() - verify get birthDate is valid', () => {
    cy.request(`${baseUrl}/users`)
    .then((res) => {
      assert.isTrue(user_tool.validateBirthday(res.body.data.users[0].birthDate))
    })
  })

  it('Users() - verify get phone is valid', () => {
    cy.request(`${baseUrl}/users`)
    .then((res) => {
      assert.isTrue(user_tool.phonenumber(res.body.data.users[0].phone))
    })
  })
  
  it('Users() - verify get cpf is 11 digits and numeric', () => {
    cy.request(`${baseUrl}/users`)
    .then((res) => {
      assert.isTrue(user_tool.onlynumberCPFAndElevenDigits(res.body.data.users[0].cpf))
    })
  })

  it('Users() - verify get user type is valid', () => {
    cy.request(`${baseUrl}/users`)
    .then((res) => {
      assert.isTrue(user_tool.onlyValidTypeUsers(res.body.data.users[0].type))
    })
  })

  it('Users() - verify get user type not be more than 1', () => {
    cy.request(`${baseUrl}/users`)
    .then((res) => {
      expect(res.body.data.users[0].type).not.have.length.above(1) 
    })
  })

  it('Users() - verify get deleted return false', () => {
    cy.request(`${baseUrl}/users`)
    .then((res) => {
      expect(res.body.data.users[0].deleted).is.false
    })
  })
  


})