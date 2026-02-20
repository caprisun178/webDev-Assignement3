// Keep a running total
let runningTotal = 0;


// Grab main section
const main = document.querySelector("main");

// Create new total section
const totalSection = document.createElement("div");
totalSection.classList.add("total-section");

// Create Section Header
const totalsHeader = document.createElement("h2");
totalsHeader.textContent = "Favorites";
totalsHeader.id = "total-header";

// Create favorites list
const favList = document.createElement("ul");
favList.id = "favorites-list";

// Create Total Label and default to $0
const totalLabel = document.createElement("p");
totalLabel.id = "total-price";
totalLabel.textContent = "$0.00";

totalSection.appendChild(totalsHeader);
totalSection.appendChild(favList);
totalSection.appendChild(totalLabel);

main.appendChild(totalSection);

// Add button + price tag to each dish card on page load
const components = document.querySelectorAll(".dish-card");

components.forEach((currentComponent, index) => {
// Create price section
const priceSection = document.createElement("div");
priceSection.classList.add("price-section");

// Give each dish an id for lookup/removal
currentComponent.dataset.dishId = `dish-${index}`;

// Store price as a number
currentComponent.dataset.price = "5.00";

// Try to find a name from the card
const nameEl = currentComponent.querySelector("h4");
currentComponent.dataset.name = nameEl ? nameEl.textContent.trim() : `Dish ${index + 1}`;

// Create Fav button
const favButton = document.createElement("button");
favButton.type = "button";
favButton.textContent = "Add to Favorites";
favButton.addEventListener("click", handleClick);

// Create Price label
const priceLabel = document.createElement("span");
priceLabel.classList.add("price-label");
priceLabel.textContent = `$${parseFloat(currentComponent.dataset.price).toFixed(2)}`;

// Append
priceSection.appendChild(favButton);
priceSection.appendChild(priceLabel);
currentComponent.appendChild(priceSection);

  function handleClick(event) {
    const button = event.target;
    const dishCard = button.closest(".dish-card");

    const favList = document.querySelector("#favorites-list");
    const totalPriceEl = document.querySelector("#total-price");

    const dishId = dishCard.dataset.dishId;
    const dishName = dishCard.dataset.name;
    const price = parseFloat(dishCard.dataset.price);

    const isSelected = dishCard.classList.contains("dish-card-show");

    if (!isSelected) {
      // Highlight card
      dishCard.classList.add("dish-card-show");
      button.textContent = "Remove from Favorites";

      // Add text-only entry to summary list
      const li = document.createElement("li");
      li.dataset.dishId = dishId;
      li.textContent = `${dishName} — $${price.toFixed(2)}`;
      favList.appendChild(li);

      // Update total
      runningTotal += price;
      totalPriceEl.textContent = `$${runningTotal.toFixed(2)}`;
    } else {
      // Remove highlight
      dishCard.classList.remove("dish-card-show");
      button.textContent = "Add to Favorites";

      // Remove matching list item
      const existing = favList.querySelector(`li[data-dish-id="${dishId}"]`);
      if (existing) {
        favList.removeChild(existing);
      }

      // Update total
      runningTotal -= price;
      totalPriceEl.textContent = `$${runningTotal.toFixed(2)}`;
    }
  }
});