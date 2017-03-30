document.addEventListener("DOMContentLoaded", function (event) {
    var contactName = '#contact-form';
    var button, form, children;

    Element.prototype.remove = function () {
        this.parentElement.removeChild(this);
    }
    NodeList.prototype.remove = HTMLCollection.prototype.remove = function () {
        for (var i = this.length - 1; i >= 0; i--) {
            if (this[i] && this[i].parentElement) {
                this[i].parentElement.removeChild(this[i]);
            }
        }
    }

    // all expected nodes ant their validations
    children = {
        "document": {
            regex: /^[0-9]+$/,
            required: true,
            node: undefined,
            nodeName: "document",
            dumpVal: "123456",
            len: 14,
            field: "Documento"
        },
        "name": {
            regex: /^[a-zA-Z ñÑ]+$/,
            required: true,
            node: undefined,
            nodeName: "name",
            dumpVal: "cristhian",
            len: 30,
            field: "Nombre"
        },
        "last_name": {
            regex: /^[a-zA-Z ñÑ]+$/,
            required: true,
            node: undefined,
            nodeName: "last_name",
            dumpVal: "leon",
            len: 30,
            field: "Apellido"
        },
        "phone": {
            regex: /^\d+$/,
            required: true,
            node: undefined,
            nodeName: "phone",
            dumpVal: "5757555",
            len: 7,
            field: "Teléfono"
        },
        "email": {
            regex: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            required: true,
            node: undefined,
            nodeName: "email",
            len: 50,
            dumpVal: "cris.leonardoleon@gmail.com",
            field: "Email"
        },
        "type": {
            regex: /^[a-zA-Z]+$/,
            required: true,
            node: undefined,
            nodeName: "type",
            dumpVal: "queja",
            len: 30,
            field: "Tipo"
        }
    };

    // capture inputs in variables
    for (var key in children) {
        var node = views.find(contactName + " #" + children[key].nodeName);
        children[key].node = node;
        node = node.node;
        // eliminar, solo para llenar el formulario con datos de prueba
        // node.value = (children[key].dumpVal);
        // recordar eliminar
    }

    var messages = {
        show: function (text) {
            var icon = text.type == 'error' ? 'fa-close' : 'fa-check';

            var div = document.createElement('div');
            var m = '<div class="body">' +
                '<i class="fa ' + icon + '"></i>' +
                '<h4 class="text-center">' + text.text + '</h4>' +
                '<span class="super-small">Este mensaje se cerrará automaticamente</span>' +
                '</div>';

            div.innerHTML = m;
            div.id = "messages"

            views.find('body').node.appendChild(div);
            views.find('#main').node.classList.add('blur');

            setTimeout(function () {
                views.find('body #messages').node.remove();
                views.find('#main').node.classList.remove('blur');
            }, 2000);
        }
    }

    // triger when click on submit form
    views.find(contactName + " #submit").click(function () {
        validate();
    });

    // validates the form for being correct all fields
    function validate() {

        var data = {};

        for (var key in children) {

            var node = children[key];
            var regex = node.regex;
            var value = node.node.node.value;

            if (!regex.test(value)) {
                messages.show({
                    text: "El campo " + node.field + " es inválido.",
                    type: "error"
                });
                return false;
            }

            if (node.required && value == "") {
                messages.show({
                    text: "El campo " + node.field + " no puede ser vacío.",
                    type: "error"
                });
                return false;
            }

            if (node.len && value.length > node.len) {
                messages.show({
                    text: "El campo " + node.field + " debe tener máximo " + node.len + " caracteres.",
                    type: "error"
                });
                return false;
            }

            data[key] = value;
        }

        // validation for message
        var textarea = (views.find(contactName + " #message")).node;
        if (textarea.value == "") {
            messages.show({
                text: "Debes dejarnos tu mensaje.",
                type: "error"
            });
            return false;
        }

        if (textarea.value.length > 500) {
            messages.show({
                text: "Maximo 500 caracteres en tu mensaje.",
                type: "error"
            });
            return false;
        }

        data["message"] = textarea.value;
        send(data);
        return false;
    }

    // package the info and send it to "server""
    function send(data) {

        messages.show({
            text: "Tu mensaje ha sido enviado. En breve nos pondremos en contacto contigo.",
            type: "success"
        });
        // TODO: implement send form to server
    }

});