import { faker } from '@faker-js/faker';
import { magentaBright } from 'colorette';
/// <reference types="cypress"/>


describe('coach_application', () =>{

    it('navigation course application', () => {

        // faker field
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const email = faker.internet.email();
        const phoneNumber = faker.phone.phoneNumber('501-###-###');
        const url = faker.internet.url();
        const cardNumber = faker.random.numeric(16, { allowLeadingZeros: true })
        const expiryDate = faker.date.future();   
        const timzoneIndex = Math.floor(Math.random() * 587)
        const rightsToWork = Math.floor(Math.random()* 4 );
        const visaSubNum = faker.random.numeric(16, { allowLeadingZeros: true })
        const visaValidtoDate = faker.date.future();   
        const workingWithChildren = Math.floor(Math.random()* 3 );
        const criminalCheck = Math.floor(Math.random()* 3 );
      

   
        // accessing the url site
        cy.visit('/', {
            auth: {
              username: 'tcn',
              password: 'tcn@1919',
            },
          });
        
        // navigating the course application page
          cy.get('ul > :nth-child(6) > a').click()
          cy.get('.text-center > .btn-primary').click()

        // create new course application

        //cy.get('#first_name').type(emailadd);
        cy.get('#first_name').type(firstName);
        cy.get('#last_name').type(lastName);
        cy.get('#email').type(email);
        cy.get('#phone').type(phoneNumber);
        cy.get('#linkedin').type(url);
        cy.get('#card_number').type(cardNumber);

        const datepic = "May 21, 2023";
        cy.get(':nth-child(10) > .form-group > .form-control').click();
        cy.get('[aria-label="'+ datepic +'"]').click();

        //cy.get('.flatpickr-monthDropdown-months')

       // cy.get('.dayContainer').contains("March 21, 2023").click();
       
    
        //cy.get('#vs1__combobox').
        
        // timezone
        cy.get('#vs1__combobox').click()
        cy.get('#vs1__option-'+timzoneIndex).click();
        // right to work in austrlia
        cy.get('#vs2__combobox').click();
        cy.get('#vs2__option-'+rightsToWork).click();
        //working with the children
        cy.get('#vs3__combobox').click();
        cy.get('#vs3__option-'+workingWithChildren).click();
        //criminal check
        cy.get('#vs4__combobox').click();
        cy.get('#vs4__option-'+criminalCheck).click();

        // cy.get('#vs1__combobox').click();
        // cy.get('#vs1__listbox')
        //  // .find('#vs1__listbox')
        //   .eq('#vs1__option-'+timzoneIndex)
        //   .click();
         
        // cy.get('#vs1__combobox')
        // //.find('[aria-owns="vs1__listbox"]')
        // .its('length')
        // .then(numOptions => {
        // const randomIndex = Math.floor(Math.random() * numOptions)
        // cy.get('#vs1__combobox')
        //  // .find('[aria-owns="vs1__listbox"]')
        //   .eq('#vs1__option-'+randomIndex)
        //   .click()
        //  })
         
      
    })

    it.only('datepicker', () => {

      // accessing the url site
      cy.visit('/', {
        auth: {
          username: 'tcn',
          password: 'tcn@1919',
        },
      });
    
      // navigating the course application page
      cy.get('ul > :nth-child(6) > a').click()
      cy.get('.text-center > .btn-primary').click()

      cy.get(':nth-child(10) > .form-group > .form-control').then(input => {
        //cy.get('.dayContainer').contains('19').click();
        cy.wrap(input).invoke('prop','value').should('contain', "March 21, 2023");
      })
      //cy.get(':nth-child(10) > .form-group > .form-control').invoke('prop','value').should('contain', 'May 21, 2023');

    })
})