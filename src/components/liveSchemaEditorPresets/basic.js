export default
{
    "entities": [{
        "name": "contact",
        "fields": [{
            "name": "type",
            "type": "string",
            "displayName": "Type",
            "component": "lookup",
            "options": [{
                "value": "one",
                "text": "Person"
            }, {
                "value": "two",
                "text": "Company"
            }]
        }, {
            "name": "name",
            "type": "string",
            "displayName": "Name"
        }, {
            "name": "date",
            "type": "date",
            "displayName": "Date or birth"
        }]
    }, {
        "name": "phone",
        "fields": [{
            "name": "number",
            "type": "string"
        }]
    }],
    "layouts": [{
        "name": "contact-edit",
        "fields": [{
            "name": "type"
        }, {
            "name": "name"
        }, {
            "name": "date"
        }]
    }, {
        "name": "phone-edit",
        "fields": [{
            "name": "number"
        }]
    }]
}