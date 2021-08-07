//Restaurant seat tracker

//Create restaurant object
let restaurant = {
    name: 'KFC', 
    guestCapacity: 75, 
    guestCount: 0,
    //Check availability method
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    //Seat party method
    seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize
    },
    //Remove party method
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
    }
}

//Add 72 to the guest count
restaurant.seatParty(72)

//Check availability for 4 seats
console.log(restaurant.checkAvailability(4))

//Remove 5 from the guest count
restaurant.removeParty(5)

//Check availability for 4 seats
console.log(restaurant.checkAvailability(4))


