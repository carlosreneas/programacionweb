var views = Object.create({
    find: function (selector) {
        var node = document.querySelector(selector);
        return {
            node: node,
            html: function (text) {
                if(this.node != null) {
                    this.node.innerHTML = text;
                }
            },
            css: function (attrs) {
                for (var key in attrs) {
                    this.node.style[key] = attrs[key];
                }
            },
            click: function (onclick) {
                this.node.addEventListener('click', onclick);
            },
            on: function (method, func) {
                this.node.addEventListener(method, func);
            },
            children: function () {
                var children = this.node.childNodes;
                return {
                    children: children,
                    removeClass: function (_class) {
                        for (var i = 0; i < this.children.length; i++) {
                            var c = this.children[i].classList;
                            if (c) {
                                c.remove(_class);
                            }
                        }
                    },
                    addClass: function (_class) {
                        for (var i = 0; i < this.children.length; i++) {
                            var c = this.children[i].classList;
                            if (!c) {
                                this.children[i].classList = [];
                            }
                            this.children[i].classList.add(_class);
                        }
                    },
                    at: function (index) {
                        return
                    }
                }
            }
        }
    }
});
