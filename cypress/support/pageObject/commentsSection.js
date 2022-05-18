export class CommentsSection {
    static XSSCommetnPayload = "Hello, here is possible xss :) <img src=x onerror=alert('xss');>"
    static AllowedTagText = '<h4>xss</h4>'
    alertStub = null
    visitCommetnsPage() {
        this.alertStub = cy.stub();
        cy.on('window:alert', this.alertStub);
        cy.visit('search/recepies');
    }

    openRecipeAndCheckForAlert() {
        cy.contains('Cy-test-xss').click().then(() => {
            cy.wait(500).then(() => {
                expect(this.alertStub.callCount).to.equal(0);
            })
        })
    }

    openRecipeAndValidateAllowedTags() {
        cy.contains('Cy-test-xss').click().then(() => {
            cy.wait(500).then(() => {
                cy.contains('h4', 'xss').should('exist')
            })
        })
    }

}

export const commentsSection = new CommentsSection();