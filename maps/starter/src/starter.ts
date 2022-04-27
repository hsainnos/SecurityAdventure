WA.onInit().then(() => {


    const elevatorSubscription2= WA.room.onEnterLayer("zones/zone2").subscribe(() => {
        WA.nav.goToRoom("../secureCoding/secure_coding_map.json")
    })


})