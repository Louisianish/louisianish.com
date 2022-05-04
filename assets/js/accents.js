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
  
  // Insert button value at current caret (cursor) position in textarea
  
  
  // Store everything typed in textarea on reload