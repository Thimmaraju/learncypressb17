describe("API Test automation demno", () => {


    it("Verify list of users APi", () => {

        cy.request("GET", "https://reqres.in/api/users?page=2").then((response) => {

            expect(response.status).to.equal(200)
            expect(response.body).to.have.property("total_pages", 2)

            expect(response.body.data[0].email).to.equal("michael.lawson@reqres.in")
        })
    })


    it("Verify Create user APi", () => {

        const payload = {
            "name": "Nagamani",
            "job": "learner"
        }
        cy.request("POST", "https://reqres.in/api/users", payload ).then((response) => {

            expect(response.status).to.equal(201)

            expect(response.body).to.have.property("name", "Nagamani")
            expect(response.body).to.have.property("job", "learner")

            
        })
    })


    it("Verify Add employee APi", () => {

     
        cy.request({
            method: "POST",
            url : "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees",
            headers:{

                Cookie: Cypress.env("cookivalue"),
                Referer: "https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee",
                Host: "opensource-demo.orangehrmlive.com",
                Origin: "https://opensource-demo.orangehrmlive.com"
            },
            body: {
                "firstName": "Anand",
                "middleName": "",
                "lastName": "KB",
                "empPicture": null,
                "employeeId": "0447"
            }
        }).then((response) => {

            expect(response.status).to.equal(200)

        })
    })
})