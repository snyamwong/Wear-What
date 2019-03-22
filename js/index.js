/*
    Validates Wear What index page form
*/
function validateForm(evt) {
    /*
        Validates radio group
    */
    function validateRadio(radio_group, row) {
        for(var i = 0; i < radio_group.length; i++) {
            if(radio_group[i].checked) {
                row.style.border = 'none'
                return true
            }
        }

        evt.preventDefault()
        row.style.border = 'thin solid red'
        return false
    }

    /*
        Validates text input
    */
    function validateText(text, row) {
        for(var i = 0; i < location.length; i++) {
            if(text[i].value == '' || text[i].value == null) {
                evt.preventDefault()
                row.style.border = 'thin solid red'
                return false
            }
        }

        return true
    }

    var instructions = document.getElementById('instructions')
    var gender_row = document.getElementById('gender-row')
    var gender_radio_group = document.getElementsByName('gender')
    var attire_row = document.getElementById('attire-row')
    var attire_radio_group = document.getElementsByName('attire')
    var location_row = document.getElementById('location-row')
    var location = document.getElementsByName('location')

    // validate all form groups
    var location_valid = validateText(location, location_row)
    var attire_valid = validateRadio(attire_radio_group, attire_row)
    var gender_valid = validateRadio(gender_radio_group, gender_row)

    // Informs users of what fields are missing
    if(!location_valid || !attire_valid || !gender_valid) {
        instructions.scrollIntoView()
        instructions.innerHTML = 'Form is incomplete, but you need to select/fill out: <br><br>'
        if(!gender_valid) {
            instructions.innerHTML += 'Gender <br>'
        }
        if(!attire_valid) {
            instructions.innerHTML += 'Attire <br>'
        }
        if(!location_valid) {
            instructions.innerHTML += 'Location <br>'
        }
        instructions.style.color = 'red'
    }
}

/*
    Scrolls to the next section of the form
*/
function createListenersForForm() {
    function createListeners(row, elements) {
        for(var i = 0; i < elements.length; i++) {
            elements[i].addEventListener('click', () => {
                var next_row = row.nextElementSibling
                next_row.scrollIntoView()
            })
        }
    }

    var gender_row = document.getElementById('gender-row')
    var gender_radio_group = document.getElementsByName('gender')
    var attire_row = document.getElementById('attire-row')
    var attire_radio_group = document.getElementsByName('attire')

    createListeners(gender_row, gender_radio_group)
    createListeners(attire_row, attire_radio_group)
}

/*
    init script
*/
function init() {
    var btn_submit = document.querySelectorAll('input[type=submit]')
    btn_submit[0].addEventListener('click', validateForm, false)

    createListenersForForm()
}

// Start
init()
