import editLayout from './layouts/contact.edit';

export default {
    name: "contact",
    displayNameSingular: "Contact",
    displayNamePlural: "Contacts",
    fields: [
        {
            name: "name",
            type: "string",
            displayName: "Name",
            help: "Name should have 10 or less characters",
            invalid: [
                {
                    condition: function (m) {
                        return m.name && m.name.length > 10;
                    },
                    message: 'Name is too big.'
                }
            ]
        },
        {
            name: "email",
            type: "string",
            displayName: "E-mail"
        }
    ],
    layouts: [editLayout],
    clientActions: []
};