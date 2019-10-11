// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('header');
    
    const span = document.createElement('span');
    span.classList.add('date');
    span.textContent = ('MARCH 28, 2019');
    
    const h1 = document.createElement('h1');
    h1.textContent = ('Lambda Times');
    
    const span2 = document.createElement('span');
    span2.classList.add('temp');
    span2.textContent = ('98°');
    
    headerDiv.appendChild(span)
    headerDiv.appendChild(h1)
    headerDiv.appendChild(span2)
    
    return headerDiv;
}

console.log(Header());


let headerContainer = document.querySelector('.header-container'); // selecting the .header-container div in Javascript
  
let applyHeader = Header(); // turning the header function into a variable so that we use it as an argument

headerContainer.appendChild(applyHeader); // attaching the header function to the HTML by passing it as an argument
