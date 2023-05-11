//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/proof/create/fill-in-proof-details', function(request, response) {

    var inputtype = request.session.data['inputtype']
    if (inputtype == "spreadsheet"){
        response.redirect("/proof/create/upload-spreadsheet")
    } else {
        response.redirect("/proof/create/fill-in-proof-details")
    }
})


router.post('/proof/check/enter-proof-id', function(request, response) {

    var inputtype = request.session.data['inputtype']
    if (inputtype == "spreadsheet"){
        response.redirect("/proof/check/upload-spreadsheet")
    } else {
        response.redirect("/proof/check/enter-proof-id")
    }
})
