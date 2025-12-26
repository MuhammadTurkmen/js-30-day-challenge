// Your task: Complete this scope visualizer
function scopeVisualizer() {
  const globalData = "Global Information";

  function outerLayer() {
    const outerData = "Outer Layer Data";

    function innerLayer() {
      const innerData = "Inner Layer Data";

      // Show what each layer can access
      console.log("=== Inner Layer Access ===");
      console.log("Inner data:", innerData);
      console.log("Outer data:", outerData); // Can access Outer Layer Data
      console.log("Global data:", globalData); // Can access Global Information

      return {
        fromInner: [innerData, outerData, globalData],
      };
    }

    console.log("\n=== Outer Layer Access ===");
    console.log("Outer data:", outerData);
    console.log("Global data:", globalData);
    // console.log("Inner data:", innerData); // Can't access - comment this out, yes the outer layer can't access inner layer

    return {
      fromOuter: [outerData, globalData],
      inner: innerLayer(),
    };
  }

  console.log("\n=== Global Layer Access ===");
  console.log("Global data:", globalData);
  // Can't access outerData or innerData from here

  return {
    fromGlobal: [globalData],
    outer: outerLayer(),
  };
}

// Run it
scopeVisualizer();
