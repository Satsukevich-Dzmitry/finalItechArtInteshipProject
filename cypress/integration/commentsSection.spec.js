import { CommentsSection, commentsSection } from '../support/pageObject/commentsSection.js';

describe('Comments section checks', () => {
    beforeEach('intercept recepies api calls', () => {
        cy.intercept('GET', '/recepies', [{
            author: "newuser@mail.com",
            authorId: 20,
            commentsCount: 2,
            description: "Xss test",
            directions: "xss test",
            id: "QaBpf37j5vhIONqikWyEA",
            img: "https://cdn.image4.io/itechartfinal/download.jfif",
            ingredients: ["anything"],
            likes: 1,
            title: "Cy-test-xss",
            views: 13,
        }
        ])
        cy.intercept('GET', '/recepiesComments', [
            {
                "body": CommentsSection.XSSCommetnPayload,
                "postId": "QaBpf37j5vhIONqikWyEA",
                "authorId": 29,
                "creationTime": 1652812244847,
                "id": "kFMgVrXcG5skjvYvmkDhk"
            }
        ])
        commentsSection.visitCommetnsPage()
    })

    it('should not trigger xss after visiting recepie page', () => {
        commentsSection.openRecipeAndCheckForAlert()
    })
    it('should left allowed tags in comment', () => {
        cy.intercept('GET', '/recepiesComments', [
            {
                "body": CommentsSection.AllowedTagText,
                "postId": "QaBpf37j5vhIONqikWyEA",
                "authorId": 29,
                "creationTime": 1652812244847,
                "id": "kFMgVrXcG5skjvYvmkDhk"
            }
        ])
        commentsSection.openRecipeAndValidateAllowedTags()
    })
})
