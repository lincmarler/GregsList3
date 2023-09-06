import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class CarsService {
    async getOneCar(carId) {
        const car = await dbContext.Cars.findById(carId)
        return car
    }
    async createCar(carData) {
        const car = await dbContext.Cars.create(carData)
        return car
    }
    async getCars() {
        const cars = await dbContext.Cars.find()
        return cars
    }
    async removeCar(carId) {
        const carToRemove = await dbContext.Cars.findById(carId)
        if (!carToRemove) {
            throw new BadRequest("No car at id: " + carId)
        }
        await carToRemove.remove()
        return `remove the ${carToRemove.make} ${carToRemove.model}. deleted`
    }
}

export const carsService = new CarsService()