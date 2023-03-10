import { faker } from '@faker-js/faker';
import { date } from 'assert-plus';
import { select } from 'async';
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
        const timzoneIndex = Math.floor(Math.random() * 587)
        const rightsToWork = Math.floor(Math.random()* 4 ); //'Visa with work rights'
        const var_workInAustralia = 'Visa with work rights';
        const visaSubNum = faker.random.numeric(16, { allowLeadingZeros: true })
        const workingWithChildren = Math.floor(Math.random()* 3 );
        const criminalCheck = Math.floor(Math.random()* 3 );
      
        let date = new Date()
        date.setDate(date.getDate()+10)
        let futureDay = date.getDate()
        let futureMonth = faker.date.month().toString();
      
        // logs
        cy.log(date.getDate())
        cy.log(futureMonth)
      
        // accessing the url site
        cy.visit('/', {
            auth: {
              username: 'tcn',
              password: 'tcn@1919',
            },
          });
       // cy.wait(4000);
        // navigating the course application page
          cy.get('ul > :nth-child(6) > a').click()
          cy.get('.text-center > .btn-primary').click()

        // create new course application

        //cy.get('#first_name').type(emailadd);
        cy.get('#first_name').type(firstName);
        cy.get('#last_name').type(lastName);
        cy.get('#email').type(email);
        cy.get('#phone').type(phoneNumber);

        // timezone
        cy.get('#vs1__combobox').click()
        cy.get('#vs1__option-'+timzoneIndex).click();
        cy.get('#linkedin').type(url);

        // if work in australia == "visa with woek rights"
        // Visa subclass number and valid to date

        cy.get('#vs2__combobox').then(listRightToWork => {
          cy.wrap(listRightToWork).click();  
          cy.get('#vs2__option-'+rightsToWork).click();
          cy.get('#vs2__combobox > .vs__selected-options > .vs__selected').invoke('text').then(rightToWorkSelected => {                       
                if(rightToWorkSelected.includes(var_workInAustralia)){              
                  cy.log('not visa')
                  cy.get('#visa').type(visaSubNum);
                  // valid to date
                      cy.contains('.form-group','Valid To Date').find('input').then(input => {
                          cy.wrap(input).click();         
                                  
                                  cy.get('.open > .flatpickr-months > .flatpickr-month > .flatpickr-current-month > .flatpickr-monthDropdown-months option:selected').invoke('text').then(validToDateSelected => {
                                    cy.log(validToDateSelected)
                                    if(!validToDateSelected.includes(futureMonth)){

                                      cy.wrap(input).click();
                                      cy.get('.open > .flatpickr-months > .flatpickr-month > .flatpickr-current-month > .flatpickr-monthDropdown-months').select(futureMonth)
                                      cy.get('.arrowLeft > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer').contains(futureDay).click();

                                    }else{
                                      cy.wrap(input).click();
                                      cy.get('.flatpickr-day').contains(futureDay).click();

                                    }
                            })
                          
                         })

                }
            })                         
        })

       //working with the children
        cy.get('#vs3__combobox').click();
        cy.get('#vs3__option-'+workingWithChildren).click();

        // card number
        cy.get('#card_number').type(cardNumber);
        // expiry date
        cy.contains('.form-group','Expiry Date').find('input').then(input => {
          cy.wrap(input).click();         
              cy.get('.open > .flatpickr-months > .flatpickr-month > .flatpickr-current-month > .flatpickr-monthDropdown-months option:selected').invoke('text').then(dateAttri => {
                   cy.log(dateAttri)     
                if(!dateAttri.includes(futureMonth)){

                  cy.wrap(input).click();
                  cy.get('.open > .flatpickr-months > .flatpickr-month > .flatpickr-current-month > .flatpickr-monthDropdown-months').select(futureMonth)
                  cy.get('.arrowTop > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer').contains(futureDay).click()

                }else{
                  cy.wrap(input).click();
                  cy.get('.flatpickr-day').contains(futureDay).click();

                }
            })
                          
        })

        //criminal check
        cy.get('#vs4__combobox').click();
        cy.get('#vs4__option-'+criminalCheck).click();

        // upload resume
        cy.get('#file').attachFile({
          filePath: 'resume_1.pdf',
          mimeType: 'application/pdf'
        });
      
        //submit button
        cy.get('.d-flex > .btn-primary').click()
      
    })

})