import { faker } from '@faker-js/faker';
import { date } from 'assert-plus';
import { magentaBright } from 'colorette';
/// <reference types="cypress"/>


describe('coach_application', () =>{

    it.only('navigation course application', () => {

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

        const epirydateWhatthe = "May, 19, 2023";

        const expireMonth = faker.date.month();
        const expireDate = Math.floor(Math.random()* 30 );
        const expireYear = '2023';

      
        let date = new Date()
        date.setDate(date.getDate())
        let futureDay = faker.date.future()
        let futureMonth = faker.date.month();
        let dateAssert = futureDay +'/'+ futureMonth +'/'+ date.getFullYear()

      
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

         //const datepic = "March 21, 2023";
        // cy.get(':nth-child(10) > .form-group > .form-control').click();
        // cy.get('[aria-label="'+ datepic +'"]').click();


        
        cy.contains('.form-group','Expiry Date').find('input').then(input => {
          cy.wrap(input).click();


          //cy.get('.flatpickr-monthDropdown-months option:selected').should('have.text','April')

          //cy.get('.flatpickr-monthDropdown-months').invoke('prop','value').should('contain','8')
          //cy.get('.flatpickr-monthDropdown-months')
          
              cy.get('.flatpickr-monthDropdown-months option:selected').invoke('text').then(dateAttri => {
                        
                if(!dateAttri.includes(futureMonth)){
              //     //console.log('test')
                 // cy.get('.flatpickr-monthDropdown-months').click()
                 //cy.wrap(dateAttri).click();
                  cy.get('select').select(futureMonth)
                  // cy.get('.flatpickr-next-month').click()
                  // cy.get('[aria-label="'+ expiryDate +'"]').click()
                  cy.get('.flatpickr-day').contains(futureDay).click();
                 // console.log('dateAssert', dateAssert)
                  //cy.wrap(input).invoke('prop','value').should('contain', dateAssert)
                 // selectDayFromCurrent()

                }else{
                  //console.log('hey')
                  //cy.get('[aria-label="'+ expiryDate +'"]').click()
                  cy.get('.flatpickr-day').contains(futureDay).click();
                  //cy.wrap(input).invoke('prop','value').should('contain', dateAssert)
                }
            })

          
          
          
       
        })

        //cy.get('.flatpickr-monthDropdown-months')

       // cy.get('.dayContainer').contains("March 21, 2023").click();
       
    
        //cy.get('#vs1__combobox').
        
        // timezone
        // cy.get('#vs1__combobox').click()
        // cy.get('#vs1__option-'+timzoneIndex).click();
        // // right to work in austrlia
        // cy.get('#vs2__combobox').click();
        // cy.get('#vs2__option-'+rightsToWork).click();
        // //working with the children
        // cy.get('#vs3__combobox').click();
        // cy.get('#vs3__option-'+workingWithChildren).click();
        // //criminal check
        // cy.get('#vs4__combobox').click();
        // cy.get('#vs4__option-'+criminalCheck).click();


        
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

    it('datepicker', () => {

      // accessing the url site
      cy.visit('/', {
        auth: {
          username: 'tcn',
          password: 'tcn@1919',
        },
      });
      cy.get(':nth-child(10) > .form-group > .form-control').click();
      // cy.contains(':nth-child(10) > .form-group > .form-control').find('input').then(input => {
      //   cy.wrap(input).click();
      // })
      // cy.get(':nth-child(10) > .form-group > .form-control').click();
      // cy.get('.flatpickr-months').invoke('attr', '.flatpickr-monthDropdown-month').then(dateAttribute => {
      //   if(!dateAttribute.includes('April')){
      //     cy.get('.flatpickr-next-month').click();

      //   }else{
      //     const datepic = "May 21, 2023";
      //     cy.get(':nth-child(10) > .form-group > .form-control').click();
      //     cy.get('[aria-label="'+ datepic +'"]').click();
      //   }

      // })

      // navigating the course application page
      // cy.get('ul > :nth-child(6) > a').click()
      // cy.get('.text-center > .btn-primary').click()

      // cy.get(':nth-child(10) > .form-group > .form-control').then(input => {
      //   //cy.get('.dayContainer').contains('19').click();
      //   cy.wrap(input).invoke('prop','value').should('contain', "March 21, 2023");
      // })
      //cy.get(':nth-child(10) > .form-group > .form-control').invoke('prop','value').should('contain', 'May 21, 2023');

    })
})