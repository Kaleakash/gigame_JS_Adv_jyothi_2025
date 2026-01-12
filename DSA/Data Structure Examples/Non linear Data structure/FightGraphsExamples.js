class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addCities(city) {
        if (!this.adjacencyList[city]) {
            this.adjacencyList[city] = [];
            console.log(`${city} has been added to the graph.`);
        }else {
            console.log(`${city} already exists in the graph.`);
        }
    }
    addRoute(city1, city2,price) {
        if (this.adjacencyList[city1] && this.adjacencyList[city2]) {
            this.adjacencyList[city1].push({ city: city2, price: price });
            console.log(`Route from ${city1} to ${city2} with price ${price} has been added.`);
        }else {
            console.log("One or both cities do not exist in the graph.");
        }
    }

    getDirectedFlight(city) {
        return this.adjacencyList[city].length > 0 ? this.adjacencyList[city] : "No flights available from this city.";
    }

    displayAllFlightRoute() {
        console.log("All Flight Routes:");
        for (let city in this.adjacencyList) {
            //console.log(city)
            let routes = this.adjacencyList[city].map(route => `${route.city} (Price: ${route.price})`).join(", ");
            console.log(`${city} -> ${routes}`);
        }
    }
}

let flightGraph = new Graph();
flightGraph.addCities("Delhi");          // []
flightGraph.addCities("Mumbai");         //[]
flightGraph.addCities("Bangalore");      //[]
flightGraph.addCities("Chennai");        //[]
flightGraph.addCities("Kolkata");        //[]
flightGraph.addCities("Delhi");  // Attempt to add duplicate city
  flightGraph.addRoute("Delhi", "Mumbai", 5000);
  flightGraph.addRoute("Delhi", "Bangalore", 6000);
flightGraph.addRoute("Mumbai", "Delhi",5800);
flightGraph.addRoute("Mumbai", "Chennai", 7000);
flightGraph.addRoute("Bangalore", "Kolkata", 8000);
flightGraph.addRoute("Chennai", "Mumbai", 7500);
//flightGraph.addRoute("Kolkata", "Delhi", 9000);
flightGraph.addRoute("Pune", "Delhi", 4000); // Attempt to add route with non-existent city
console.log("Flights from Delhi:", flightGraph.getDirectedFlight("Delhi"));
console.log("Flights from Kolkata:", flightGraph.getDirectedFlight("Kolkata"));
console.log("-----------------------------");
flightGraph.displayAllFlightRoute();