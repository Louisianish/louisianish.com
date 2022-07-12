// Copy text to clipboard

function myFunction() {
    var copyText = document.getElementById('input');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    
    var tooltip = document.getElementById('myTooltip');
    tooltip.innerHTML = 'Copied to clipboard';
  }
  
  function outFunc() {
    var tooltip = document.getElementById('myTooltip');
    tooltip.innerHTML = 'Copy text';
  }
  
  
  // Accent buttons
  
  var form = document.querySelector('form');
  var input = document.querySelector('input');
  var buttons = document.querySelector('accentButtons');
  
    // Event Handlers
  function handleSubmitForm(e) {
      e.preventDefault();
      // let input = document.querySelector('input');
    
      if (input.value != '')
          addTodo(input.value);
      input.value = '';
  }
  
  // Accent Mark Buttons
  function valueButton(e) {
      form.input.value += e.value;
  }
  
  // Refocus cursor in textarea after clicking accent button
  document.getElementById('accentButtons').onclick = function() {
      document.getElementById('input').focus();
  }
  
  // Insert button value at current caret (cursor) position in textarea (from https://www.codeproject.com/Articles/13748/JavaScript-Virtual-Keyboard?fbclid=IwAR1PX7Nm-ARW_J-W9xss_BuYBSTtXbe8Pz9LG7Sck6gh9KDTqlYt7g6L5yY)
  function insertAtCaret(ctrl, val)
    {
        if(insertionS != insertionE) deleteSelection(ctrl);

        if(isgecko && document.createEvent && !window.opera)
        {
            var e = document.createEvent("KeyboardEvent");

            if(e.initKeyEvent && ctrl.dispatchEvent)
            {
                e.initKeyEvent("keypress", // in DOMString typeArg,
                    false,                 // in boolean canBubbleArg,
                    true,                  // in boolean cancelableArg,
                    null,                  // in nsIDOMAbstractView viewArg,
                    false,                 // in boolean ctrlKeyArg,
                    false,                 // in boolean altKeyArg,
                    false,                 // in boolean shiftKeyArg,
                    false,                 // in boolean metaKeyArg,
                    null,                  // key code;
                    val.charCodeAt(0));    // char code.

                ctrl.dispatchEvent(e);
            }
        }
        else
        {
            var tmp =
                (document.selection &&
                !window.opera) ? ctrl.value.replace(/\r/g,"") : ctrl.value;
            ctrl.value =
                tmp.substring(0,
                insertionS) + val + tmp.substring(insertionS,
                tmp.length);
        }

        setRange(ctrl, insertionS + val.length, insertionS + val.length);
    }
  
  // Store everything typed in textarea on reload