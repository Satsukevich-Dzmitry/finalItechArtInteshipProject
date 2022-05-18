export class UserNameCheck {

    static XSSPAYLOAD = 'value\"><img src=x onerror=alert("xss");>'

    alertStub = null

    visitRegisterPage() {
        cy.visit('/');
        this.alertStub = cy.stub();
        cy.on('window:alert', this.alertStub);
        cy.contains('Sign up').click();
        return this
    }
    performRegistration() {
        const userStub = {
            email: 'mail@mail.com',
            password: '12345678',
            name: 'test',
        }

        cy.get('input[name=email]').type(userStub.email);
        cy.get('input[name=password]').type(userStub.password);
        cy.get('input[name=confirmPassword]').type(userStub.password);
        cy.get('input[name=name]').type(userStub.name);

        cy.get('button[type=submit]').click();
        return this
    }
    validateNicknameOnHeader() {
        cy.get('a[href="/profilePage"]').should('contain', UserNameCheck.XSSPAYLOAD)
            .then(() => {
                this.validateNoAlertCalledOnMainPage()
            });
        return this
    }
    validateNoAlertCalledOnMainPage() {
        cy.wait(500).then(() => {
            expect(this.alertStub.callCount).to.equal(0);
        })
        return this
    }

    visitRecepiePage() {
        this.alertStub = cy.stub();
        cy.on('window:alert', this.alertStub);
        cy.visit('/search/recepies');
        return this
    }

    findRecepieAndOpenItWithotAlert() {
        cy.contains('Cy-test-xss').click().then(() => {
            cy.wait(500).then(() => {
                expect(this.alertStub.callCount).to.equal(0);
            })
        })
    }
}

export const userNameCheck = new UserNameCheck();