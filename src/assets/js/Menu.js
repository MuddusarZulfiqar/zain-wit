/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 *   Supplemental JS for the disclosure menu keyboard behavior
 */

let exports = {};
import { gsap } from "gsap";
var Nav = function(domNode) {
    this.rootNode = domNode;
    this.triggerNodes = [];
    this.controlledNodes = [];
    this.openIndex = null;
    this.useArrowKeys = true;
};

Nav.prototype.init = function() {
    var buttons = this.rootNode.querySelectorAll('button[aria-expanded][aria-controls]');
    for (var i = 0; i < buttons.length; i++) {
        var button = buttons[i];
        var menu = button.parentNode.querySelector('ul');
        if (menu) {
            // save ref to button and controlled menu
            this.triggerNodes.push(button);
            this.controlledNodes.push(menu);

            // collapse menus
            button.setAttribute('aria-expanded', 'false');
            this.toggleMenu(menu, false);

            // attach event listeners
            menu.addEventListener('keydown', this.handleMenuKeyDown.bind(this));
            button.addEventListener('click', this.handleButtonClick.bind(this));
            button.addEventListener('keydown', this.handleButtonKeyDown.bind(this));
        }
    }

    //this.rootNode.addEventListener('focusout', this.handleBlur.bind(this));
};

Nav.prototype.toggleMenu = function(domNode, show) {
    if (domNode) {
        if (show) {
            gsap.to(domNode, { height: 'auto' });
            domNode.classList.add("show");
        } else {
            gsap.to(domNode, { height: 0 });
            domNode.classList.remove("show");
        }
    }
};

Nav.prototype.toggleExpand = function(index, expanded) {
    // close open menu, if applicable
    if (this.openIndex !== index) {
        this.toggleExpand(this.openIndex, false);
    }

    // handle menu at called index
    if (this.triggerNodes[index]) {
        this.openIndex = expanded ? index : null;
        this.triggerNodes[index].setAttribute('aria-expanded', expanded);
        this.triggerNodes[index].parentNode.classList.toggle("active");
        this.toggleMenu(this.controlledNodes[index], expanded);
    }
};

Nav.prototype.controlFocusByKey = function(keyboardEvent, nodeList, currentIndex) {
    switch (keyboardEvent.key) {
        case 'ArrowUp':
        case 'ArrowLeft':
            keyboardEvent.preventDefault();
            if (currentIndex > -1) {
                var prevIndex = Math.max(0, currentIndex - 1);
                nodeList[prevIndex].focus();
            }
            break;
        case 'ArrowDown':
        case 'ArrowRight':
            keyboardEvent.preventDefault();
            if (currentIndex > -1) {
                var nextIndex = Math.min(nodeList.length - 1, currentIndex + 1);
                nodeList[nextIndex].focus();
            }
            break;
        case 'Home':
            keyboardEvent.preventDefault();
            nodeList[0].focus();
            break;
        case 'End':
            keyboardEvent.preventDefault();
            nodeList[nodeList.length - 1].focus();
            break;
    }
};

/* Event Handlers */
Nav.prototype.handleBlur = function(event) {
    var menuContainsFocus = this.rootNode.contains(event.relatedTarget);
    if (!menuContainsFocus && this.openIndex !== null) {
        this.toggleExpand(this.openIndex, false);
    }
};

Nav.prototype.handleButtonKeyDown = function(event) {
    var targetButtonIndex = this.triggerNodes.indexOf(document.activeElement);

    // close on escape
    if (event.key === 'Escape') {
        this.toggleExpand(this.openIndex, false);
    }

    // move focus into the open menu if the current menu is open
    else if (this.useArrowKeys && this.openIndex === targetButtonIndex && event.key === 'ArrowDown') {
        event.preventDefault();
        this.controlledNodes[this.openIndex].querySelector('a').focus();
    }

    // handle arrow key navigation between top-level buttons, if set
    else if (this.useArrowKeys) {
        this.controlFocusByKey(event, this.triggerNodes, targetButtonIndex);
    }
};

Nav.prototype.handleButtonClick = function(event) {
    var button = event.target;
    var buttonIndex = this.triggerNodes.indexOf(button);
    var buttonExpanded = button.getAttribute('aria-expanded') === 'true';
    this.toggleExpand(buttonIndex, !buttonExpanded);
};

Nav.prototype.handleMenuKeyDown = function(event) {
    if (this.openIndex === null) {
        return;
    }

    var menuLinks = Array.prototype.slice.call(this.controlledNodes[this.openIndex].querySelectorAll('a'));
    var currentIndex = menuLinks.indexOf(document.activeElement);

    // close on escape
    if (event.key === 'Escape') {
        this.triggerNodes[this.openIndex].focus();
        this.toggleExpand(this.openIndex, false);
    }

    // handle arrow key navigation within menu links, if set
    else if (this.useArrowKeys) {
        this.controlFocusByKey(event, menuLinks, currentIndex);
    }
};

// switch on/off arrow key navigation
Nav.prototype.updateKeyControls = function(useArrowKeys) {
    this.useArrowKeys = useArrowKeys;
};

/* Initialize Disclosure Menus */

window.addEventListener('load', function(event) {
    var menus = document.querySelectorAll('.mainNav');
    var disclosureMenus = [];

    for (var i = 0; i < menus.length; i++) {
        disclosureMenus[i] = new Nav(menus[i]);
        disclosureMenus[i].init();
    }

    // listen to arrow key checkbox
    // var arrowKeySwitch = document.getElementById('arrow-behavior-switch');
    // arrowKeySwitch.addEventListener('change', function (event) {
    //   var checked = arrowKeySwitch.checked;
    //   for (var i = 0; i < disclosureMenus.length; i++) {
    //     disclosureMenus[i].updateKeyControls(checked);
    //   }
    // });

    // fake link behavior
    // var links = document.querySelectorAll('[href="#mythical-page-content"]');
    // var examplePageHeading = document.getElementById('mythical-page-heading');
    // for (var i = 0; i < links.length; i++) {
    //   links[i].addEventListener('click', function (event) {
    //     var pageTitle = event.target.innerText;
    //     examplePageHeading.innerText = pageTitle;

    //     // handle aria-current
    //     for (var n = 0; n < links.length; n++) {
    //       links[n].removeAttribute('aria-current');
    //     }
    //     this.setAttribute('aria-current', 'page');
    //   });
    // }
}, false);

export default exports;