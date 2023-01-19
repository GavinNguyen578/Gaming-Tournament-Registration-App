// IIFE -- Immediately Invoked Function Expression
(function(){

    function Start()
    {
        console.log("App Started...");

        let deleteButtons = document.querySelectorAll('.btn-danger');
        
        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?")) 
                {
                    event.preventDefault();
                    window.location.assign('/tournament-list');
                }
            });
        }
    }

    window.addEventListener("load", Start);

})();

const form = document.querySelector('form');
const contactSubmitButton = document.querySelector('#contactSubmit');
const nameField = document.querySelector('#nameTextField');
const emailField = document.querySelector('#emailTextField');
const messageField = document.querySelector('#messageTextField');
const name = nameField.value;
const email = emailField.value;
const message = messageField.value;


// Listen for the input event on the text fields
nameField.addEventListener('input', (event) => {
    // Reset the error message for the name field
    nameField.setCustomValidity('');
  });
  
  emailField.addEventListener('input', (event) => {
    // Reset the error message for the email field
    emailField.setCustomValidity('');
  });
  
  messageField.addEventListener('input', (event) => {
    // Reset the error message for the message field
    messageField.setCustomValidity('');
  });
  

// Listen for the submit event on the form
contactSubmitButton.addEventListener('click', (event) => {
    if (nameField.value !== "" && emailField.value !== "" && messageField.value !== "") {
  // Prevent page reload
  event.preventDefault();

  // Prevent the submit button from being clicked again
  contactSubmitButton.disabled = true;

  // Gray out the submit button
  contactSubmitButton.style.backgroundColor = '#ccc';

  // Create a container element for the "Submitted!" message
  const submittedMessageContainer = document.createElement('div');
  submittedMessageContainer.id = 'submitted-message-container';
  submittedMessageContainer.classList.add('submitted-message');

  // Add a "Submitted!" message next to the submit button
  const submittedMessage = document.createElement('p');
  submittedMessage.id = 'submitted-message';
  submittedMessage.innerHTML = 'Submitted!';
  submittedMessageContainer.appendChild(submittedMessage);

  // Insert the message container next to the submit button
  contactSubmitButton.parentNode.insertBefore(submittedMessageContainer, contactSubmitButton.nextSibling);

  // Position the message container directly next to the submit button
  submittedMessageContainer.style.position = 'absolute';
  submittedMessageContainer.style.left = `${contactSubmitButton.offsetLeft + contactSubmitButton.offsetWidth}px`;
  submittedMessageContainer.style.top = `${contactSubmitButton.offsetTop}px`;
  submittedMessageContainer.style.paddingLeft = '15px';
  submittedMessageContainer.style.transform = 'translateY(-25%)';

    } else {
        event.preventDefault();

            if (nameField.value === "") {
                nameField.setCustomValidity('Please fill all fields.');
                nameField.reportValidity();
            }
            else if (emailField.value === "") {
                emailField.setCustomValidity('Please fill all fields.');
                emailField.reportValidity();
            }
            else if (messageField.value === "") {
                messageField.setCustomValidity('Please fill all fields.');
                messageField.reportValidity();
            }
            
            
            
        }
});





