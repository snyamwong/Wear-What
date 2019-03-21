function init() {
    // Since you can't get element by type, I use querySelectorAll to get all submit type input

    // Since there is only one submit button, we just access index 0
    btn_submit[0].addEventListener('click', validateForm, false)

    createListenersForForm(gender_row, gender_radio_group)
    createListenersForForm(attire_row, attire_radio_group)
}

function validateForm(evt) {
    function validateRadio(radio_group, row) {
        for(var i = 0; i < radio_group.length; i++) {
            if(radio_group[i].checked) {
                row.style.border = 'none'
                return
            }
        }

        row.style.border = 'thin solid red'
    }

    function validateText(text, row) {
        for(var i = 0; i < location.length; i++) {
            if(text[i].value == '' || text[i].value == null) {
                row.style.border = 'thin solid red'
                return
            }
        }

        row.style.border = 'none'
    }

    var location_row = document.getElementById('location-row')
    var location = document.getElementsByName('location')

    validateRadio(gender_radio_group, gender_row)
    validateRadio(attire_radio_group, attire_row)
    validateText(location, location_row)
}

function createListenersForForm(row, elements) {
    for(var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', () => {
            var next_row = row.nextElementSibling
            next_row.scrollIntoView()
        })
    }
}

var btn_submit = document.querySelectorAll('input[type=submit]')
var gender_row = document.getElementById('gender-row')
var gender_radio_group = document.getElementsByName('gender')
var attire_row = document.getElementById('attire-row')
var attire_radio_group = document.getElementsByName('attire')

init()
