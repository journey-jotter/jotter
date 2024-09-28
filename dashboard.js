document.querySelector('.search-btn').addEventListener('click', function() {
  let city = document.querySelector('input[placeholder="Select your city"]').value;
  let hotelType = document.querySelector('input[placeholder="Choose Hotel type"]').value;
  let range = document.querySelector('input[placeholder="Choose a range"]').value;

  // Example of handling search logic
  if (city && hotelType && range) {
      alert(`Searching for ${hotelType} hotels in ${city} within a rent range of ${range}.`);
  } else {
      alert('Please fill in all fields.');
  }
});
