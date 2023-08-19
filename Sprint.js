fetch('./sprint.json')
  .then(function(response){
    return(response).json();
  })
  
  .then(vehicles => {
    vehicles.forEach(vehicle => { 
      detailStr +=
      "<li>" + getCar(vehicle) + "<br>" + getDetails(vehicle) + "<br>" + getPotentialProfit(vehicle) + "<br><br>" + "</li>";
      console.log(detailStr);
    });

    detailStr += "</ul>";
    document.body.innerHTML = detailStr;
  })

.catch(error => {
  console.error(error);
});

function getCar(vehicle){
  return `${vehicle.year} ${vehicle.make} ${vehicle.model}`;
}

function getDetails (vehicle){
  return `Style - ${vehicle.style}, Plate Number - ${vehicle.plateNum}, Serial Number - ${vehicle.serialNum}, Mileage - ${vehicle.mileage}, Condition - ${vehicle.condition}`;
}

function getMarkup (vehicle){
  return vehicle.salePrice - vehicle.cost;
}

function getPotentialProfit (vehicle){
  return `If this vehicle sells for full price the profit will be $${getMarkup(vehicle)}.`;
}

