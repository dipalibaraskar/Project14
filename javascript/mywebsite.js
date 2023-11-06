
// Write your code here
document.addEventListener("DOMContentLoaded", function () {
  // console.log("DOM content loaded successfully!");
  //alertFunction();


  var toggleswitch_input = document.getElementById('toggleswitch');
  var outputtext = document.getElementById('status');

  var path = window.location.pathname;
  var currentPage = path.split("/").pop();

  toggleswitch_input.addEventListener('change', function () {
    // alert("outputtext testing");
    document.body.classList.toggle('dark');

    // if (this.checked) {
    //      document.body.classList.toggle('dark');
    // } else {
    //     document.body.classList.toggle('dark');
    // }
  });



  // alert(page);
  // console.log(page);


  function alertFunction() {
    alert("DOM content loaded successfully testing");
  }


  const images = document.querySelectorAll('#slider img');
  const previousImage = document.getElementById("prev");
  const nextImage = document.getElementById("next");

  let currentIndex = 0;

  function reset() {
    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove('active');
    }
  }

  function initializeSlider() {
    reset();
    images[currentIndex].classList.add('active');
  }

  function slideLeft() {
    reset();
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    images[currentIndex].classList.add('active');
  }

  function slideRight() {
    reset();
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    images[currentIndex].classList.add('active');
  }

  if (currentPage == "index.html") {
    initializeSlider();


    previousImage.addEventListener('click', function () {
      slideLeft();
    });

    nextImage.addEventListener('click', function () {
      slideRight();
    });
  }


  // Write your code below
  const items = document.querySelectorAll('.item:not(:first-child)');
  const options = {
    threshold: 0.5
  }


  function addSlideIn(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide-in');
      } else {
        entry.target.classList.remove('slide-in');
      }
    });
  }
  const observer = new IntersectionObserver(addSlideIn, options)

  items.forEach(item => {
    observer.observe(item);
  });

  //code for form validation

  // Write your code here
  // Get all the necessary DOM elements
  const form = document.getElementById('exampleForm')
  const submitButton = document.querySelector('#buttonValidation')
  const successMessage = document.getElementById('form-submitted-msg')

  // Store all form elements in an array by spreading the elements property of the form
  const formElements = [...form.elements]

  // Create function to check if all form elements are valid
  const allInputsValid = () => {
    const valid = formElements.every((element) => {
      if (element.nodeName === 'SELECT') {
        return element.value !== 'Please select an option'
      } else {
        return element.checkValidity()
      }
    })


    return valid
  }


  // Define a function to handle changes to any form element
  const handleChange = () => {
    // Use the forEach() function to execute the provided function once for each element in the formElements array
    formElements.forEach((element) => {
      // If the element is invalid and is not a button, a select dropdown, a checkbox, or a radio button, style it with a red border and red text
      if (!element.checkValidity()
        && element.nodeName !== 'BUTTON'
        && element.nodeName !== 'SELECT'
        && element.type !== 'checkbox'
        && element.type !== 'radio'
      ) {
        element.style.borderColor = 'red'
        element.nextElementSibling.style.color = 'red'
        element.nextElementSibling.style.display = 'block'
        element.previousElementSibling.style.color = 'red'
      }

      // If the element is valid, reset its style to the original colors
      // The conditions are the same as above for excluding certain elements
      if (element.checkValidity()
        && element.nodeName !== 'BUTTON'
        && element.nodeName !== 'SELECT'
        && element.type !== 'checkbox'
        && element.type !== 'radio'
      ) {
        element.style.borderColor = '#CED4DA'
        element.nextElementSibling.style.color = '#CED4DA'
        element.nextElementSibling.style.display = 'none'
        element.previousElementSibling.style.color = '#212529'
      }

      // If the element is a checkbox or a radio button and is invalid, style it with a red border and red text
      if (!element.checkValidity()
        && (element.type === 'checkbox'
          || element.type === 'radio')
      ) {
        element.style.borderColor = 'red'
        element.nextElementSibling.style.color = 'red'
      }

      // If the checkbox or radio button is valid, reset its style to the original colors
      if (element.checkValidity()
        && (element.type === 'checkbox'
          || element.type === 'radio')
      ) {
        element.style.borderColor = '#CED4DA'
        element.nextElementSibling.style.color = '#212529'
      }

      // If the element is a select dropdown and the default option is selected, style it with a red border and red text
      if (element.nodeName === 'SELECT'
        && element.value === 'Please select an option'
      ) {
        element.style.borderColor = 'red'
        element.nextElementSibling.style.color = 'red'
        element.nextElementSibling.style.display = 'block'
        element.previousElementSibling.style.color = 'red'
      }

      // If an option other than the default is selected in the dropdown, reset its style to the original colors
      if (element.nodeName === 'SELECT'
        && element.value !== 'Please select an option'
      ) {
        element.style.borderColor = '#CED4DA'
        element.nextElementSibling.style.color = '#CED4DA'
        element.nextElementSibling.style.display = 'none'
        element.previousElementSibling.style.color = '#212529'
      }
    })

    // If all form elements are valid, enable the submit button; otherwise, disable it
    if (allInputsValid()) {
      submitButton.removeAttribute('disabled', '')
    } else {
      submitButton.setAttribute('disabled', '')
    }
  }



  // Define a function to handle form submission
  const handleSubmit = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault()

    // If all form elements are valid after the form submission, display a success message, reset the form, and disable the submit button
    if (allInputsValid()) {

      var formJsonValue = {};
      // get all the inputs into an array.
      let username = (document.getElementById("username")).value; 
      let email = (document.getElementById("email")).value;  
      let Password = (document.getElementById("password")).value; 
      let Address = (document.getElementById("address")).value;

      formJsonValue.username = username;
      formJsonValue.email = email;
      formJsonValue.Password = Password;
      formJsonValue.Address = Address; 

      alert(JSON.stringify(formJsonValue));

 
      console.log("Form Json Data Captured As : ", JSON.stringify(formJsonValue));

      successMessage.style.display = 'block'
      form.reset()
      submitButton.setAttribute('disabled', '')

      // Hide the success message after 3 seconds
      setTimeout(() => {
        successMessage.style.display = 'none'
      }, 3000);
     
    }

  }

  // Add event listener to each form element
  formElements.forEach((element) => {
    element.addEventListener('change', handleChange)
  })

  // Add submit listener to the form
  form.addEventListener('submit', (e) => handleSubmit(e))



});


document.addEventListener("readystatechange", function () {
  console.log("Ready state changed: " + document.readyState)
})

window.addEventListener("load", function () {
  console.log("Page loaded successfully!")
});



// const checkbox = document.getElementById('mode-toggle');
// alert("testing2");
// checkbox.addEventListener('change', (e) => {
//     alert("This is");
//     document.body.classList.toggle('dark');

// }

// );

// document.getElementById('exampleForm').addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent the default form submission

//   // Get form elements by name
//   const username = document.querySelector('input[name="username"]').value;
//   const email = document.querySelector('input[name="email"]').value;
//   const password = document.querySelector('input[name="password"]').value;
//   const address = document.querySelector('input[name="address"]').value;

//   // Create a JSON object with the form data
//   const formData = {
//     name: username,
//     email: email,
//     name: password,
//     name: address
//   };

//   // Convert the JSON object to a JSON string
//   const jsonData = JSON.stringify(formData);

//   // You can now use jsonData as needed, for example, send it to a server.
//   console.log(jsonData);
// });
