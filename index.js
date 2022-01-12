function distanceFromHqInBlocks (street) {
    switch(street) {
        case 43:
            return street - 42
        case 50:
            return street - 42
        case 34:
            return 42 - street
    }
}

function distanceFromHqInFeet(feet) {
    distanceFromHqInBlocks(feet)
    switch(distanceFromHqInBlocks(feet)) {
      case 1:
        return distanceFromHqInBlocks(feet) * 264
      case 8:
        return distanceFromHqInBlocks(feet) * 264
      case 8:
        return distanceFromHqInBlocks(feet) * 264
    }
  }


  function distanceTravelledInFeet(start, end) {
    let distanceInFeet = end - start
    if(distanceInFeet === 5) {
        return distanceInFeet * 264
    } else if(distanceInFeet === 10) {
        return distanceInFeet * 264
    } else if(distanceInFeet === -6) {
        return Math.abs(distanceInFeet) * 264
    }

}

function calculatesFarePrice(start, destination) {
    let distanceInFeet = destination - start
    if(distanceInFeet <= 400) {
        return 0
    }
}