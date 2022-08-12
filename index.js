// Add your code here
// const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify({
//       dogName: "Byron",
//       dogBreed: "Poodle",
//     }),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject);

// function submitData(nameString, emailString){
//     return(
//         // Storing the user data in the API
//         fetch('http://localhost:3000/users', {
//             method: 'POST',
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json",
//             },
//             body: JSON.stringify({
//                 name: nameString,
//                 email: emailString
//             })
//         })
//         .then(response => response.json())

//         // Printing the id number to the screen
//         .then((object) => {
//             const element = document.createElement('h1')
//             element.textContent = object.id
//             document.body.append(element)
//         })
//         // if the promise is a failure, print its message property
//         .catch((err) => {
//             alert(err.message)
//             const errorElement = document.createElement('p')
//             errorElement.textContent = err.message
//             document.body.append(errorElement)
//         })
//     )
// }

function submitData( name, email ) {
    return fetch( 'http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify( {
          name,
          email
        } )
      } )
      .then( function ( response ) {
        return response.json()
      } )
      .then( function ( object ) {
        document.body.innerHTML = object[ "id" ]
      } )
      .catch( function ( error ) {
        document.body.innerHTML = error.message
      } )
  }