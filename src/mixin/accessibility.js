var keys = {
    tab: 9,
    enter: 13,
    esc: 27,
    space: 32,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
}
export default {
    data() {
        return {
            sliderObj: null,
            keys: keys,
            tabIndexNew: 0
        }
    },
    mounted(){
        // console.log(this.$refs.scrollbar);
        this.tabsFunction();
    },
    methods: {
        setSlider(slider) { 
            var self = this
            this.sliderObj = slider
            this.sliderObj.on('slideChange', (e) => {
                this.tabIndex = e.activeIndex
                self.isActive(e.activeIndex);
                if(document.querySelector('body .pressRelease')){
                    this.FilterClose()
                }
            });
            
        },
        tabsFunction(){
            (function () {
                var tablist = document.querySelectorAll('.customTabs [role="tablist"]')[0];
                var tabs;
                var panels;
                function generateArrays () {
                    tabs = document.querySelectorAll('.customTabs [role="tab"]');
                    panels = document.querySelectorAll('.customTabs [role="tabpanel"]');
                };
                generateArrays();
              
                // For easy reference
                var keys = {
                  end: 35,
                  home: 36,
                  left: 37,
                  up: 38,
                  right: 39,
                  down: 40,
                  delete: 46
                };
              
                // Add or substract depending on key pressed
                var direction = {
                  37: -1,
                  38: -1,
                  39: 1,
                  40: 1
                };
              
                // Bind listeners
                for (let i = 0; i < tabs.length; ++i) {
                  addListeners(i);
                };
              
                function addListeners (index) {
                  tabs[index].addEventListener('keydown', keydownEventListener,false);
                  tabs[index].addEventListener('keyup', keyupEventListener,false);
              
                  // Build an array with all tabs (<button>s) in it
                  tabs[index].index = index;
                };
              
                // Handle keydown on tabs
                function keydownEventListener (event) {
                  var key = event.keyCode;
                //   console.log(key)
                  switch (key) {
                    case keys.end:
                      event.preventDefault();
                      // Activate last tab
                      activateTab(tabs[tabs.length - 1]);
                      break;
                    case keys.home:
                      event.preventDefault();
                      // Activate first tab
                      activateTab(tabs[0]);
                      break;
              
                    // Up and down are in keydown
                    // because we need to prevent page scroll >:)
                    case keys.up:
                    case keys.down:
                      determineOrientation(event);
                      break;
                  };
                };
              
                // Handle keyup on tabs
                function keyupEventListener (event) {
                  var key = event.keyCode;
              
                  switch (key) {
                    case keys.left:
                    case keys.right:
                      determineOrientation(event);
                      break;
                  };
                };
                function determineOrientation (event) {
                  var key = event.keyCode;
                  var vertical = tablist.getAttribute('aria-orientation') == 'vertical';
                  var proceed = false;
              
                  if (vertical) {
                    if (key === keys.up || key === keys.down) {
                      event.preventDefault();
                      proceed = true;
                    };
                  }
                  else {
                    if (key === keys.left || key === keys.right) {
                      proceed = true;
                    };
                  };
              
                  if (proceed) {
                    switchTabOnArrowPress(event);
                  };
                };
              
                // Either focus the next, previous, first, or last tab
                // depening on key pressed
                function switchTabOnArrowPress (event) {
                  var pressed = event.keyCode;
              
                  for (let x = 0; x < tabs.length; x++) {
                    tabs[x].addEventListener('focus', focusEventHandler);
                  };
              
                  if (direction[pressed]) {
                    var target = event.target;
                    if (target.index !== undefined) {
                      if (tabs[target.index + direction[pressed]]) {
                        tabs[target.index + direction[pressed]].focus();
                      }
                      else if (pressed === keys.left || pressed === keys.up) {
                        // focusLastTab();
                      }
                      else if (pressed === keys.right || pressed == keys.down) {
                        // focusFirstTab();
                      };
                    };
                  };
                };
              
                // Activates any given tab panel
                function activateTab (tab, setFocus) {
                  setFocus = setFocus || true;
                  var parent = tab.closest(".customTabs")
                  var controls = tab.getAttribute('aria-controls');
                  deactivateTabs(controls);
                  tab.removeAttribute('tabindex');
                  tab.setAttribute('aria-selected', 'true');
                  parent.querySelector(`#${controls}`).removeAttribute('hidden')
                  parent.querySelector(`#${controls}`).removeAttribute('style')
                  parent.querySelector(`#${controls}`).classList.add('active');
              
                  // Set focus when required
                  if (setFocus) {
                    tab.focus();
                    tab.click();
                  };
                };
                

                function getSiblings (parent) {
                    // for collecting siblings
                    let siblings = []; 
                    // if no parent, return no sibling
                    if(parent.parentNode){        
                        // first child of the parent node
                        let sibling  = parent.parentNode.firstChild;
                        // collecting siblings
                        while (sibling) {
                            if (sibling.nodeType === 1 && sibling !== parent) {
                                siblings.push(sibling);
                            }
                            sibling = sibling.nextSibling;
                        }
                    }
                    
                    return siblings;
                };
                // Deactivate all tabs and tab panels
                function deactivateTabs (panelEle) {
                    let panels = getSiblings(document.querySelector(`#${panelEle}`));
                    panels.map(panel=>{
                        panel.setAttribute('tabindex', '-1');
                        panel.setAttribute('aria-selected', 'false');
                        panel.removeEventListener('focus', focusEventHandler);
                        panel.classList.remove('active')
                    });
                };
                function focusEventHandler (event) {
                  var target = event.target;
                  setTimeout(() => {
                    checkTabFocus(target);
                  }, 100);
                };
              
                // Only activate tab on focus if it still has focus after the delay
                function checkTabFocus (target) {
                 let focused = document.activeElement;
                  if (target === focused) {
                    activateTab(target, false);
                  };
                };
              }());
        }
    },
}