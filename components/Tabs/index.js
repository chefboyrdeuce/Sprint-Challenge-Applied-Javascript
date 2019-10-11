// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function createTab(topic) {
    const tabDiv = document.createElement('div')
    tabDiv.classList.add('tab')
    tabDiv.textContent = (topic)
    
    return tabDiv
}

// console.log(createTab())

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then((response) => {
        console.log(response)
        response.data.topics.forEach((topic) => {
            console.log(topic)
            const tabComponent = createTab(topic)
            let topicsContainer = document.querySelector('.topics')
            topicsContainer.appendChild(tabComponent)
        })

    })
    .catch((error) => {
        console.log('Network request was unsuccesful')
        console.log(error)
    })