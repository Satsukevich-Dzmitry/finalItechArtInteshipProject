import { UserNameCheck, userNameCheck } from '../support/pageObject/index.js';

describe('User name checks', () => {
    beforeEach('intercept register command', () => {
        cy.intercept('POST', '/register', {
            user: {
                email: "mail@mail.com",
                name: UserNameCheck.XSSPAYLOAD,
                likedRecipes: [],
                likedCookBooks: [],
                id: 27
            }
        }).as('registerUser')

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
                "body": "normal comment",
                "postId": "QaBpf37j5vhIONqikWyEA",
                "authorId": 20,
                "creationTime": 1632736914742,
                "id": "pI_0Rb_kmDy1JvDvtOct5"
            },
            {
                "body": "Hello, here is xss :)",
                "postId": "QaBpf37j5vhIONqikWyEA",
                "authorId": 29,
                "creationTime": 1652812244847,
                "id": "kFMgVrXcG5skjvYvmkDhk"
            }
        ])
        userNameCheck.visitRegisterPage()
    })

    it('should not trigger xss after registration', () => {
        userNameCheck.performRegistration().validateNicknameOnHeader()
    })

    it('should not trigger xss from comments', () => {
        userNameCheck.visitRecepiePage().findRecepieAndOpenItWithotAlert()
    })
})
