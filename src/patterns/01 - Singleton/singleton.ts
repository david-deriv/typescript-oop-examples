class StateStore {
  /**
   * A private constructor ensures that we can't create a new instance of this class
   * using the new keyword. The only way to get an instance of this class is to call
   * the static method `getInstance`
   * @private
   */
  private constructor() {}

  /**
   * We statically store the single instance of this class that should be returned
   * everytime `StateStore.getInstance()` is called
   * @private
   */
  private static instance: StateStore;

  /**
   * The method that ensures that we only ever have a single instance of this class, as
   * this is the only way to get this instance we can guarantee it is always singleton.
   */
  static getInstance(): StateStore {
    if (!StateStore.instance) {
      StateStore.instance = new StateStore();
    }
    return StateStore.instance;
  }
}

// This will not transpile!
// const stateStore = new StateStore();

// The only way to create or get an instance is to call the static method.
const stateStore1 = StateStore.getInstance();
const stateStore2 = StateStore.getInstance(); // Will return the same instance as the first call.

console.log(stateStore1 === stateStore2); // true