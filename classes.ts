class Vehicle {
//   public drive(): void {
//     console.log(`I'm driving`)
//   }
  public stop(): void {
    console.log(`I've stooped`)
  }
}
class Car1 extends Vehicle {
  private drive(): void {
    console.log('I am a car1 and I am driving')
  }
  startDrivingProcess(): void {
    this.drive()
  }
}

const vehicle = new Vehicle()
// vehicle.drive()  метод переопределен в классе Car1
vehicle.stop()

const car1 = new Car1()
car1.startDrivingProcess()
// car1.drive() приватный метод класса
car1.stop()
