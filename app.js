

//add event listeners
const submitBtn = document.getElementById('location-changes');
submitBtn.addEventListener('click', changesSubmit);

function changesSubmit (){
    const inputValue = document.getElementById('city').value;
    let updatedValue = inputValue.toString().toLowerCase().split(' ').join('+');
    console.log(updatedValue);
   //get the api response
        const xhr = new XMLHttpRequest(updatedValue);
        xhr.open('GET',`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${updatedValue}+point+of+interest&language=en&%20fields=photos,formatted_address,name,rating,formatted_phone_number,website,opening_hours&key=AIzaSyDL-XItdh7EYFQ0JTREsjVFbmmS0IxoOJg`) 
        // `https://maps.googleapis.com/maps/api/${updatedValue}/+point+of+interest&language=en&
        //        fields=photos,formatted_address,name,formatted_phone_number,website,rating,opening_hours&key=AIzaSyDL-XItdh7EYFQ0JTREsjVFbmmS0IxoOJg`)
        
        xhr.onload = function(){
            const response = JSON.parse(this.responseText);
            const responsearr = response.results;
            console.log(responsearr); 
            //  for (let i= 0; i<responsearr.length; i++){
            //     let output = '';
            //     output += {

            //     }

            // // }
            // // let output = '';
            // // response.results.forEach(() => {
            // //     output+= `<li>${re}</li>`
                
            // // });
            //  }
            // reponse.results
            // console.log(response);
            const locations = locationIterator(responsearr);
//grab elements

document.getElementById('next').addEventListener('click', nextLocation);
//no empty starting location
nextLocation();
//show next location

function nextLocation(){
    const currentLocation = locations.next().value;
    if(currentLocation !== undefined){
        document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
           <li class="list-group-item"> name: ${currentLocation.name}</li>
            <li class= "list-group-item">address: ${currentLocation.formatted_address}</li>
             <li class="list-group-item"> price: ${currentLocation.price_level}</li>
        </ul>`
        document.getElementById('image').innerHTML = `
        <img src=${currentLocation.image}>`
    }
    else{
         //no more profiles
      window.location.reload();
    }
   
}

//make event iterator

function locationIterator(locations){
    let nextIndex = 0;
    return{
        next: function(){
            return nextIndex < locations.length ?
            {done: false, value: locations[nextIndex++]}:
            { done: true};
        }
    } ;   

}

        }
        xhr.send();
    
}

//google api




// // update the changes
// function changesSubmit(){
//     //get the city values
//     const inputValue = document.getElementById('city').value;
//     let updatedValue = inputValue.toString().toLowerCase().split(' ').join('+');
//     console.log(updatedValue);
//     //check if input is empty
//     if(inputValue !== ''){
//         googlePlace.getGoogle(updatedValue)
//         .then(data => { console.log(data);
//          //DO WORK HERE 
//          uI.paint;
//         })

//     } 
//     else{
//         console.log('please enter a real city');
//         uI.error();
//     }
//     //clear fields
//     return(updatedValue);
    
    
// };





//console.log('hello');
//hard code data (fetch api later)
// data = [
//     {
//         location:"peru",
//         distance:"200 miles",
//         image:"https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1522169144%2Fmachu-picchu-peru-lead-BUTTERFIELDPERU0318.jpg%3Fitok%3DvUBtnKzp&w=1000&c=sc&poi=face&q=70",
//         rating:"5/10"
//     },
//     {
//         location:"New York",
//         distance:"2 miles",
//         image:"https://cdn7.dissolve.com/p/D246_38_095/D246_38_095_1200.jpg",
//         rating:"5/10"
//     },
//     {
//         location:"Italy",
//         distance:"400 miles",
//         image:"https://media.timeout.com/images/105124053/630/472/image.jpg",
//         rating:"5/10"
//     },
// ]

// const locations = locationIterator(data);
// //grab elements

// document.getElementById('next').addEventListener('click', nextLocation);
// //no empty starting location
// nextLocation();
// //show next location

// function nextLocation(){
//     const currentLocation = locations.next().value;
//     if(currentLocation !== undefined){
//         document.getElementById('profileDisplay').innerHTML = `
//         <ul class="list-group">
//             <li class= "list-group-item">location: ${currentLocation.location}</li>
//             <li class="list-group-item"> distance: ${currentLocation.distance}</li>
//             <li class="list-group-item"> rating: ${currentLocation.rating}</li>
//         </ul>`
//         document.getElementById('image').innerHTML = `
//         <img src=${currentLocation.image}>`
//     }
//     else{
//          //no more profiles
//       window.location.reload();
//     }
   
// }

// //make event iterator

// function locationIterator(locations){
//     let nextIndex = 0;
//     return{
//         next: function(){
//             return nextIndex < locations.length ?
//             {done: false, value: locations[nextIndex++]}:
//             { done: true};
//         }
//     } ;   

// }