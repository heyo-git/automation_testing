import { faker } from '@faker-js/faker';
import { date } from 'assert-plus';
import { select } from 'async';
import { magentaBright } from 'colorette';
/// <reference types="cypress"/>

describe('Academy Course Application', () =>{

    it('step1_personal_details', () =>{
        cy.visit('/', {
            auth: {
              username: 'tcn',
              password: 'tcn@1919',
            },
          });


        // faker test data
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const dateofBirt = faker.date.between('2020-01-01T00:00:00.000Z', '2030-01-01T00:00:00.000Z')
        const currentDate = new Date();
        //const gender
        const homePhone = faker.phone.number();
        const workPhone = faker.phone.number();
        const mobile = faker.phone.number();
        const email = faker.internet.email();
        
        const home_streetAddress = faker.address.streetAddress();
        const home_suburb = faker.address.state();
        const home_state = Math.floor(Math.random() * 7);
        const home_postcode = faker.address.zipCode();
        //const home_country

        // use it to check if home address will be same to postal address
        const sameAsHomeAdd = true;

        const postal_streetAddress = faker.address.streetAddress();
        const postal_suburb = faker.address.state();
        const postal_state = Math.floor(Math.random() * 7);
        const postal_postcode = faker.address.zipCode();

        const countryYouBorn = Math.floor(Math.random() * 240);
        const speakAlanguage = true;
        const otherLanguage = Math.floor(Math.random() * 90)
        const aboriginalOrTorres = true;
        const haveDisability = true;
        const selectDisability = Math.floor(Math.random() * 8)

        // start here //
        cy.get('#first_name').type(firstName);
        cy.get('#last_name').type(lastName);
        cy.log(currentDate.toLocaleDateString())

        // Select the datepicker element
        cy.get('.input').click();
            
        // Select the desired date
        const selectedDate = new Date(2022, 2, 15); // March 15, 2023
        const month = selectedDate.toLocaleString('default', { month: 'short' });
        const year = selectedDate.getFullYear();
        const day = selectedDate.getDate();

        cy.get('.numInput').type('2022');
        cy.log(month)
        cy.get('.flatpickr-monthDropdown-months').select('February');
        cy.contains('.flatpickr-day', day.toString()).click();
        // Verify that the selected date is displayed in the input field
        cy.get('.input').should('have.value', '15/02/2022');

        //gender
        cy.get(':nth-child(1) > .form-check-label').click()

        cy.get('#home_phone').type(homePhone)
        cy.get('#work-phone').type(workPhone)
        cy.get(':nth-child(9) > .form-group > .form-control').type(mobile)
        cy.get('#email').type(email)

        // home address
        cy.get('.form-group > input[id="street"]').type(home_streetAddress)
        cy.get('.form-group > input[id="suburb"]').type(home_suburb)
        //state
        cy.get('#vs1__combobox').then(cmb1 =>{
            cy.wrap(cmb1).click()
            cy.get('#vs1__option-'+home_state).click()
        })
        cy.get('.form-group > input[id="postcode"]').type(home_postcode)
        

        // postal address
        cy.get('.form-group > input[id="postal-street"]').type(postal_streetAddress)
        cy.get('.form-group > input[id="postal-suburb"]').type(postal_suburb)
        //state
        cy.get('#vs3__combobox').then(cmb3 =>{
            cy.wrap(cmb3).click()
            cy.get('#vs3__option-'+postal_state).click()
        })
        cy.get('.form-group > input[id="postal-postcode"]').type(postal_postcode)
       
        
        //speak a language
        cy.get('.form-check form-check-inline > .form-check-input > label[for="yes"]').click()

        // cy.get('#vs1__option-'+home_state).click()
        // cy.contains('.form-group', 'Postcode').find('input').then(inputPostalCode => {
        //     cy.wrap(inputPostalCode).type(home_postcode)
        // })

        // cy.contains('.form-group', 'Street Address').find('input').then(inputStreetAdd => {
        //     cy.wrap(inputStreetAdd).type(home_streetAddress)
        // })
    })

})