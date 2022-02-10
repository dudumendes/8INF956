export default class MemoryRobot {
  constructor() {}

  buildComponent(amount) {
    this.initializeConfiguration()
    this.collectCores(amount)
    this.mountCores()
    this.testProcessing()
    this.reset()
  }

  initializeConfiguration() {
    console.log("Initializing configuration...")
  }

  collectChips(amount) {
    console.log("Collecting " + amount + " chips...")
  }

  mountChips() {
    console.log("Mounting chips...")
  }

  storageTest() {
    console.log("Testing storage...")
  }

  reset() {
    console.log("Reseting...")
  }
}