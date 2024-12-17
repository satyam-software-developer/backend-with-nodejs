import events from "events";

class FitnessTracker extends events.EventEmitter {
  constructor() {
    super();
    this.progress = 0;
    this.goal = 1000;
  }

  addExercise(exercise) {
    // Update the progress by adding the calories burned by the exercise
    this.progress += exercise.caloriesBurned;

    // Check if the goal is reached
    if (this.progress >= this.goal) {
      // If the goal is reached, emit a 'goalReached' event
      this.emit('goalReached');

      // Note: In real-world application, you might want to include more details
      // in the emitted event, such as the achieved progress or the goal itself.
      // For simplicity, we emit a simple event without additional data.
    }
  }
}

const Solution = () => {
  const tracker = new FitnessTracker(); // Create an instance of FitnessTracker

  // Define listener that sends a congratulatory message to the user upon reaching their fitness goal
  tracker.on('goalReached', () => {
    console.log("Congratulations! You have reached your fitness goal");
    // In a real application, you might send a message to the user through email, push notification, etc.
  });

  // Simulate adding exercise
  tracker.addExercise({ name: "Running", caloriesBurned: 500 });
  tracker.addExercise({ name: "Weightlifting", caloriesBurned: 600 });
};

Solution();

export { FitnessTracker, Solution };
