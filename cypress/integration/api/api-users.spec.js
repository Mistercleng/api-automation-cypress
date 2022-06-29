

context('Users requests ', ()=> {

  const apiBaseUrl = Cypress.config("apiBaseUrl")  
  const Tool = require('./user_validations')
  const user_tool = new Tool()



  it('Users() - verify users status code 200', () => {
    cy.request(`${apiBaseUrl}api/users`)
    .then((res) => {
      expect(res).property('status').to.equal(200)
    })
  })

  it('Users() - verify users body not empty', () => {
    cy.request(`${apiBaseUrl}api/users`)
    .then((res) => {
      expect(res.body).is.not.empty
    })
  })

  it('Users() - verify get user id not null', () => {
    cy.request(`${apiBaseUrl}api/users`)
    .then((res) => {
      expect(res.body[0].id).is.not.null
    })
  })

  it('Users() - verify get user name not null', () => {
    cy.request(`${apiBaseUrl}api/users`)
    .then((res) => {
      expect(res.body[0].name).is.not.null
    })
  })


  it('Users() - verify get user name more than two chars', () => {
    cy.request(`${apiBaseUrl}api/users`)
    .then((res) => {
      expect(res.body[0].name).to.have.length.above(3) 
    })
  })

  it('Users() - verify get user name less than 30', () => {
    cy.request(`${apiBaseUrl}api/users`)
    .then((res) => {
      expect(res.body[0].name).to.have.length.below(30) 
    })
  })

  it('Users() - verify get user with name Vinicius', () => {
    cy.request(`${apiBaseUrl}api/users`)
    .then((res) => {
      console.log(res.body[0])
      expect(res.body[0]).to.have.property('name','Vini Test 2') 
    })
  })

  it('Users() - verify get email not null', () => {
    cy.request(`${apiBaseUrl}api/users`)
    .then((res) => {
      expect(res.body[0].email).is.not.null
    })
  })

  it('Users() - verify get email is a valid email', () => {
    cy.request(`${apiBaseUrl}api/users`)
    .then((res) => {
      assert.isTrue(user_tool.validateEmail(res.body[0].email))
    })
  })



  it('Users() - verify get user email more than two chars', () => {
    cy.request(`${apiBaseUrl}api/users`)
    .then((res) => {
      expect(res.body[0].email).to.have.length.above(4) 
    })
  })

  it('Users() - verify get user email less than 30', () => {
    cy.request(`${apiBaseUrl}api/users`)
    .then((res) => {
      expect(res.body[0].email).to.have.length.below(30) 
    })
  })


  it('Users() - verify get birthDate is valid', () => {
    cy.request(`${apiBaseUrl}api/users`)
    .then((res) => {
      assert.isTrue(user_tool.validateBirthday(res.body[0].birthDate))
    })
  })

  it('Users() - verify get phone is valid', () => {
    cy.request(`${apiBaseUrl}api/users`)
    .then((res) => {
      assert.isTrue(user_tool.phonenumber(res.body[0].phone))
    })
  })
  

  it('Users() - verify get user type not be more than 1', () => {
    cy.request(`${apiBaseUrl}api/users`)
    .then((res) => {
      expect(res.body[0].type).not.have.length.above(1) 
    })
  })

  it('Users() - verify get deleted return false', () => {
    cy.request(`${apiBaseUrl}api/users`)
    .then((res) => {
      expect(res.body[0].deleted).is.false
    })
  })
  


})