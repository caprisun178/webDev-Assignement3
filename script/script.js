
const components = document.querySelectorAll(".dish-card");

components.forEach(currentComponent => {
    // create new section for items
    const priceSection = document.createElement("div")
    priceSection.classList.add("price-section")

    // Create Fav button
    const favButton = document.createElement("button");
    favButton.textContent = "Favorite";

    // Create new Price label
    const priceLabel = document.createElement("span");
    priceLabel.textContent = "$5.00";

    // Append button and label to price section
    priceSection.appendChild(favButton);
    priceSection.appendChild(priceLabel);

    // Append price section to dish card
    currentComponent.appendChild(priceSection);
});

// Grab main section
const main = document.querySelector("main");

// Create new total section
const totalSection = document.createElement("div")
totalSection.classList.add("total-section")

// Create Section Header
const totalsHeader = document.createElement("h2")
totalsHeader.textContent =  "Total Section"
totalsHeader.id = "total-header"

// Create Total Label and default to $0
const totalLabel = document.createElement("label")
totalLabel.textContent = "$ 0.00"

totalSection.appendChild(totalsHeader)
totalSection.appendChild(totalLabel)

main.appendChild(totalSection)




