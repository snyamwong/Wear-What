function validateForm(evt) {
    function validateGender(gender_radio_group) {
        for(var i = 0; i < gender_radio_group.length; i++) {
            if(gender_radio_group[i].checked) {
                return
            }
        }

        var row = gender_radio_group[0].parentElement.parentElement.parentElement.parentElement.parentElement
    }

    function validateAttire(attire_radio_group) {
        for(var i = 0; i < attire_radio_group.length; i++) {
            if(attire_radio_group[i].checked) {
                return
            }
        }

        var row = attire_radio_group[0].parentElement.parentElement.parentElement.parentElement.parentElement
    }

    function validateLocation(location) {
        for(var i = 0; i < location.length; i++) {
            if(attire_radio_group[i].checked) {
                return
            }
        }

        var ro = location[0].parentElement.parentElement.parentElement.parentElement.parentElement
    }

    var gender_radio_group = document.getElementsByName('gender')
    var attire_radio_group = document.getElementsByName('attire')
    var location = document.getElementsByName('location')

    validateGender(gender_radio_group)
    validateAttire(attire_radio_group)
    validateLocation(location)
}

// Since you can't get element by type, I use querySelectorAll to get all submit type input
var btn_submit = document.querySelectorAll('input[type=submit]')

// Since there is only one submit button, we just access index 0
btn_submit[0].addEventListener('click', validateForm, false)
