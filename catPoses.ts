// Cat poses data - all 32x32 patterns using same color system
// 0 = outline, 1 = belly, 2 = fur1, 3 = fur2, 4 = ear, 5 = transparent

export const catPoses = {
  sitting: {
    sit1: [      
      [5, 5, 5, 5, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 5, 0, 4, 4, 4, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 4, 4, 0, 5, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 5, 0, 4, 4, 4, 4, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 4, 4, 4, 0, 5, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 5, 0, 4, 1, 1, 4, 4, 0, 5, 5, 5, 5, 5, 5, 5, 5, 0, 4, 4, 1, 4, 0, 5, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 5, 0, 4, 1, 1, 1, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 1, 1, 4, 0, 5, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 0, 4, 4, 1, 1, 1, 1, 4, 4, 3, 3, 4, 3, 3, 3, 4, 4, 1, 1, 1, 4, 3, 0, 5, 5, 5, 5, 5, 5, 5], 
      [5, 5, 0, 4, 4, 1, 4, 4, 4, 4, 4, 3, 3, 4, 3, 3, 4, 4, 4, 4, 4, 1, 4, 3, 0, 5, 5, 5, 5, 5, 5, 5], 
      [5, 5, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 3, 4, 3, 4, 4, 4, 4, 4, 4, 3, 3, 3, 0, 5, 5, 5, 5, 5, 5, 5], 
      [0, 0, 0, 0, 0, 4, 4, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 4, 4, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5], 
      [5, 5, 0, 3, 4, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0, 4, 4, 0, 4, 4, 4, 3, 0, 5, 5, 5, 5, 5, 5, 5], 
      [5, 5, 0, 0, 0, 4, 4, 4, 4, 4, 2, 0, 0, 0, 2, 2, 4, 4, 4, 4, 4, 0, 0, 3, 0, 5, 5, 5, 5, 5, 5, 5], 
      [5, 0, 0, 0, 4, 4, 4, 4, 4, 0, 2, 2, 0, 2, 2, 0, 2, 2, 4, 4, 4, 4, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5], 
      [5, 5, 5, 0, 3, 4, 4, 4, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 4, 3, 3, 0, 5, 5, 5, 5, 0, 0, 0, 5], 
      [5, 5, 5, 5, 0, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 0, 5, 5, 5, 5, 0, 4, 4, 4, 0], 
      [5, 5, 5, 5, 5, 0, 0, 0, 4, 2, 2, 2, 2, 2, 2, 2, 4, 3, 3, 3, 0, 0, 5, 5, 5, 5, 0, 4, 4, 4, 4, 0], 
      [5, 5, 5, 5, 5, 5, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 5, 5, 5, 5, 0, 4, 4, 4, 0, 5],
      [5, 5, 5, 5, 5, 5, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 5, 5, 5, 0, 3, 3, 3, 0, 5], 
      [5, 5, 5, 5, 5, 0, 4, 4, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 5, 5, 0, 4, 3, 0, 5, 5], 
      [5, 5, 5, 5, 5, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 5, 0, 4, 4, 0, 5, 5],
      [5, 5, 5, 5, 5, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 5, 0, 3, 3, 0, 5, 5],
      [5, 5, 5, 5, 5, 0, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 0, 5, 5, 0, 4, 3, 0, 5],
      [5, 5, 5, 5, 5, 0, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 5, 0, 4, 4, 0, 5],
      [5, 5, 5, 5, 5, 0, 4, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 0, 0, 4, 4, 4, 4, 4, 4, 0, 5, 0, 4, 4, 0, 5],
      [5, 5, 5, 5, 5, 0, 4, 0, 2, 2, 2, 0, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 3, 3, 3, 0, 0, 3, 3, 0, 5],
      [5, 5, 5, 5, 5, 0, 3, 4, 0, 2, 0, 3, 3, 3, 4, 0, 0, 4, 4, 4, 4, 4, 3, 3, 3, 3, 0, 0, 4, 3, 0, 5],
      [5, 5, 5, 5, 5, 0, 4, 4, 0, 2, 0, 4, 4, 4, 3, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 0, 3, 4, 4, 0, 5],
      [5, 5, 5, 5, 5, 0, 3, 4, 0, 3, 0, 4, 4, 4, 3, 0, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 4, 3, 0, 5, 5],
      [5, 5, 5, 5, 5, 0, 2, 4, 0, 3, 0, 4, 4, 4, 3, 0, 3, 3, 4, 4, 4, 4, 4, 3, 3, 3, 0, 3, 3, 0, 5, 5],
      [5, 5, 5, 5, 0, 2, 2, 4, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 3, 4, 4, 4, 4, 3, 3, 0, 3, 3, 0, 5, 5, 5],
      [5, 5, 5, 0, 2, 2, 0, 4, 0, 2, 2, 0, 2, 2, 0, 0, 2, 2, 2, 4, 4, 4, 4, 3, 3, 0, 0, 0, 5, 5, 5, 5],
      [5, 5, 5, 0, 2, 0, 0, 4, 0, 2, 0, 0, 2, 2, 0, 2, 0, 2, 2, 4, 4, 4, 3, 3, 0, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5]
    ],
    sit2: [
      [5, 5, 5, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 0, 4, 4, 4, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 4, 4, 4, 0, 5, 5, 5, 5, 5, 5],
      [5, 5, 0, 4, 4, 4, 4, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 4, 4, 4, 4, 0, 5, 5, 5, 5, 5, 5],
      [5, 5, 0, 4, 1, 1, 4, 4, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 4, 4, 1, 1, 4, 0, 5, 5, 5, 5, 5, 5],
      [5, 5, 0, 4, 1, 1, 1, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 1, 1, 1, 4, 0, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 0, 4, 1, 1, 1, 1, 4, 4, 3, 3, 4, 3, 3, 3, 4, 4, 1, 1, 1, 1, 4, 3, 0, 5, 5, 5, 5, 5, 5, 5], 
      [5, 5, 0, 4, 4, 1, 4, 4, 4, 4, 3, 3, 4, 3, 3, 4, 4, 4, 4, 4, 1, 4, 3, 3, 0, 5, 5, 5, 5, 5, 5, 5], 
      [5, 5, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 3, 4, 3, 4, 4, 4, 4, 4, 4, 3, 3, 3, 0, 5, 5, 5, 5, 5, 5, 5], 
      [0, 0, 0, 0, 0, 4, 4, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 4, 4, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5], 
      [5, 5, 0, 3, 4, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0, 4, 4, 0, 4, 4, 4, 3, 0, 5, 5, 5, 5, 5, 5, 5], 
      [5, 5, 0, 0, 0, 4, 4, 4, 4, 4, 2, 0, 0, 0, 2, 2, 4, 4, 4, 4, 4, 0, 0, 3, 0, 5, 5, 5, 5, 5, 5, 5], 
      [5, 0, 0, 0, 4, 4, 4, 4, 4, 0, 2, 2, 0, 2, 2, 0, 2, 2, 4, 4, 4, 4, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5], 
      [5, 5, 5, 0, 3, 4, 4, 4, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 4, 3, 3, 0, 5, 5, 5, 0, 0, 0, 0, 5], 
      [5, 5, 5, 5, 0, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 0, 5, 5, 5, 0, 4, 4, 4, 4, 0], 
      [5, 5, 5, 5, 5, 0, 0, 0, 4, 2, 2, 2, 2, 2, 2, 2, 4, 3, 3, 3, 0, 0, 5, 5, 5, 0, 4, 4, 4, 4, 4, 0], 
      [5, 5, 5, 5, 5, 5, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 5, 5, 5, 0, 4, 4, 4, 0, 5, 5],
      [5, 5, 5, 5, 5, 5, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 5, 5, 0, 3, 3, 3, 0, 5, 5], 
      [5, 5, 5, 5, 5, 0, 4, 4, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 5, 0, 4, 3, 0, 5, 5, 5], 
      [5, 5, 5, 5, 5, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 0, 4, 4, 0, 5, 5, 5],
      [5, 5, 5, 5, 5, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 0, 3, 3, 0, 5, 5, 5],
      [5, 5, 5, 5, 5, 0, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 0, 5, 0, 4, 3, 0, 5, 5],
      [5, 5, 5, 5, 5, 0, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 4, 4, 0, 5, 5],
      [5, 5, 5, 5, 5, 0, 4, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 0, 0, 4, 4, 4, 4, 4, 4, 0, 0, 4, 4, 0, 5, 5],
      [5, 5, 5, 5, 5, 0, 4, 0, 2, 2, 2, 0, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 3, 3, 3, 0, 3, 3, 0, 5, 5],
      [5, 5, 5, 5, 5, 0, 3, 4, 0, 2, 0, 3, 3, 3, 4, 0, 0, 4, 4, 4, 4, 4, 3, 3, 3, 3, 0, 4, 3, 0, 5, 5],
      [5, 5, 5, 5, 5, 0, 4, 4, 0, 2, 0, 4, 4, 4, 3, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 0, 4, 4, 0, 5, 5],
      [5, 5, 5, 5, 5, 0, 3, 4, 0, 3, 0, 4, 4, 4, 3, 0, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 3, 0, 5, 5, 5],
      [5, 5, 5, 5, 5, 0, 2, 4, 0, 3, 0, 4, 4, 4, 3, 0, 3, 3, 4, 4, 4, 4, 4, 3, 3, 3, 0, 3, 0, 5, 5, 5],
      [5, 5, 5, 5, 0, 2, 2, 4, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 3, 4, 4, 4, 4, 3, 3, 0, 3, 0, 5, 5, 5, 5],
      [5, 5, 5, 0, 2, 2, 0, 4, 0, 2, 2, 0, 2, 2, 0, 0, 2, 2, 2, 4, 4, 4, 4, 3, 3, 0, 0, 5, 5, 5, 5, 5],
      [5, 5, 5, 0, 2, 0, 0, 4, 0, 2, 0, 0, 2, 2, 0, 2, 0, 2, 2, 4, 4, 4, 3, 3, 0, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5]
    ],
    sit3: [
      [5, 5, 5, 5, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 5, 0, 4, 4, 4, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 4, 4, 0, 5, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 5, 0, 4, 4, 4, 4, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 4, 4, 4, 0, 5, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 5, 0, 4, 1, 1, 4, 4, 0, 5, 5, 5, 5, 5, 5, 5, 5, 0, 4, 4, 1, 4, 0, 5, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 5, 0, 4, 1, 1, 1, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 1, 1, 4, 0, 5, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 0, 4, 4, 1, 1, 1, 1, 4, 4, 3, 3, 4, 3, 3, 3, 4, 4, 1, 1, 1, 4, 3, 0, 5, 5, 5, 5, 5, 5, 5], 
      [5, 5, 0, 4, 4, 1, 4, 4, 4, 4, 4, 3, 3, 4, 3, 3, 4, 4, 4, 4, 4, 1, 4, 3, 0, 5, 5, 5, 5, 5, 5, 5], 
      [5, 5, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 3, 4, 3, 4, 4, 4, 4, 4, 4, 3, 3, 3, 0, 5, 5, 5, 5, 5, 5, 5], 
      [0, 0, 0, 0, 0, 4, 4, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 4, 4, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5], 
      [5, 5, 0, 3, 4, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0, 4, 4, 0, 4, 4, 4, 3, 0, 5, 5, 5, 5, 5, 5, 5], 
      [5, 5, 0, 0, 0, 4, 4, 4, 4, 4, 2, 0, 0, 0, 2, 2, 4, 4, 4, 4, 4, 0, 0, 3, 0, 5, 5, 5, 5, 5, 5, 5], 
      [5, 0, 0, 0, 4, 4, 4, 4, 4, 0, 2, 2, 0, 2, 2, 0, 2, 2, 4, 4, 4, 4, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5], 
      [5, 5, 5, 0, 3, 4, 4, 4, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 4, 3, 3, 0, 5, 5, 5, 5, 0, 0, 0, 5], 
      [5, 5, 5, 5, 0, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 0, 5, 5, 5, 5, 0, 4, 4, 4, 0], 
      [5, 5, 5, 5, 5, 0, 0, 0, 4, 2, 2, 2, 2, 2, 2, 2, 4, 3, 3, 3, 0, 0, 5, 5, 5, 5, 0, 4, 4, 4, 4, 0], 
      [5, 5, 5, 5, 5, 5, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 5, 5, 5, 5, 0, 4, 4, 4, 0, 5],
      [5, 5, 5, 5, 5, 5, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 5, 5, 5, 0, 3, 3, 3, 0, 5], 
      [5, 5, 5, 5, 5, 0, 4, 4, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 5, 5, 0, 4, 3, 0, 5, 5], 
      [5, 5, 5, 5, 5, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 5, 0, 4, 4, 0, 5, 5],
      [5, 5, 5, 5, 5, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 5, 0, 3, 3, 0, 5, 5],
      [5, 5, 5, 5, 5, 0, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 0, 5, 5, 0, 4, 3, 0, 5],
      [5, 5, 5, 5, 5, 0, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 5, 0, 4, 4, 0, 5],
      [5, 5, 5, 5, 5, 0, 4, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 0, 0, 4, 4, 4, 4, 4, 4, 0, 5, 0, 4, 4, 0, 5],
      [5, 5, 5, 5, 5, 0, 4, 0, 2, 2, 2, 0, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 3, 3, 3, 0, 0, 3, 3, 0, 5],
      [5, 5, 5, 5, 5, 0, 3, 4, 0, 2, 0, 3, 3, 3, 4, 0, 0, 4, 4, 4, 4, 4, 3, 3, 3, 3, 0, 0, 4, 3, 0, 5],
      [5, 5, 5, 5, 5, 0, 4, 4, 0, 2, 0, 4, 4, 4, 3, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 0, 3, 4, 4, 0, 5],
      [5, 5, 5, 5, 5, 0, 3, 4, 0, 3, 0, 4, 4, 4, 3, 0, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 4, 3, 0, 5, 5],
      [5, 5, 5, 5, 5, 0, 2, 4, 0, 3, 0, 4, 4, 4, 3, 0, 3, 3, 4, 4, 4, 4, 4, 3, 3, 3, 0, 3, 3, 0, 5, 5],
      [5, 5, 5, 5, 0, 2, 2, 4, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 3, 4, 4, 4, 4, 3, 3, 0, 3, 3, 0, 5, 5, 5],
      [5, 5, 5, 0, 2, 2, 0, 4, 0, 2, 2, 0, 2, 2, 0, 0, 2, 2, 2, 4, 4, 4, 4, 3, 3, 0, 0, 0, 5, 5, 5, 5],
      [5, 5, 5, 0, 2, 0, 0, 4, 0, 2, 0, 0, 2, 2, 0, 2, 0, 2, 2, 4, 4, 4, 3, 3, 0, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5]
],
    sit4: [
      // Both ears perked up more
      [5, 5, 5, 5, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 5, 0, 4, 4, 4, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 4, 4, 4, 0, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 0, 4, 4, 4, 4, 4, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 4, 4, 4, 4, 4, 0, 5, 5, 5, 5, 5, 5],
      [5, 5, 0, 4, 1, 1, 4, 4, 4, 0, 5, 5, 5, 5, 5, 5, 5, 5, 0, 4, 4, 4, 1, 1, 4, 0, 5, 5, 5, 5, 5, 5],
      [5, 5, 0, 4, 1, 1, 1, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 1, 1, 1, 4, 0, 5, 5, 5, 5, 5, 5, 5],
      [5, 0, 4, 4, 1, 1, 1, 1, 4, 4, 4, 3, 3, 4, 3, 3, 4, 4, 4, 1, 1, 1, 1, 4, 4, 0, 5, 5, 5, 5, 5, 5], 
      [5, 0, 4, 4, 1, 4, 4, 4, 4, 4, 4, 3, 3, 4, 3, 4, 4, 4, 4, 4, 4, 1, 4, 4, 4, 0, 5, 5, 5, 5, 5, 5], 
      [5, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 3, 4, 3, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 0, 5, 5, 5, 5, 5, 5], 
      [0, 0, 0, 0, 0, 4, 4, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5], 
      [5, 5, 0, 3, 4, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0, 4, 4, 0, 4, 4, 4, 3, 0, 5, 5, 5, 5, 5, 5, 5], 
      [5, 5, 0, 0, 0, 4, 4, 4, 4, 4, 2, 0, 0, 0, 2, 2, 4, 4, 4, 4, 4, 0, 0, 3, 0, 5, 5, 5, 5, 5, 5, 5], 
      [5, 0, 0, 0, 4, 4, 4, 4, 4, 0, 2, 2, 0, 2, 2, 0, 2, 2, 4, 4, 4, 4, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5], 
      [5, 5, 5, 0, 3, 4, 4, 4, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 4, 3, 3, 0, 5, 5, 5, 5, 5, 0, 0, 0], 
      [5, 5, 5, 5, 0, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 0, 5, 5, 5, 5, 5, 0, 4, 4, 4], 
      [5, 5, 5, 5, 5, 0, 0, 0, 4, 2, 2, 2, 2, 2, 2, 2, 4, 3, 3, 3, 0, 0, 5, 5, 5, 5, 5, 0, 4, 4, 4, 4], 
      [5, 5, 5, 5, 5, 5, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 5, 5, 5, 5, 5, 0, 4, 4, 4, 0],
      [5, 5, 5, 5, 5, 5, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 5, 5, 5, 5, 0, 3, 3, 3, 0], 
      [5, 5, 5, 5, 5, 0, 4, 4, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 5, 5, 5, 0, 4, 3, 0, 5], 
      [5, 5, 5, 5, 5, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 5, 5, 0, 4, 4, 0, 5],
      [5, 5, 5, 5, 5, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 5, 5, 0, 3, 3, 0, 5],
      [5, 5, 5, 5, 5, 0, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 0, 5, 5, 5, 0, 4, 3, 0],
      [5, 5, 5, 5, 5, 0, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 5, 5, 0, 4, 4, 0],
      [5, 5, 5, 5, 5, 0, 4, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 0, 0, 4, 4, 4, 4, 4, 4, 0, 5, 5, 0, 4, 4, 0],
      [5, 5, 5, 5, 5, 0, 4, 0, 2, 2, 2, 0, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 3, 3, 3, 0, 5, 0, 3, 3, 0],
      [5, 5, 5, 5, 5, 0, 3, 4, 0, 2, 0, 3, 3, 3, 4, 0, 0, 4, 4, 4, 4, 4, 3, 3, 3, 3, 0, 5, 0, 4, 3, 0],
      [5, 5, 5, 5, 5, 0, 4, 4, 0, 2, 0, 4, 4, 4, 3, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 0, 5, 0, 4, 4, 0],
      [5, 5, 5, 5, 5, 0, 3, 4, 0, 3, 0, 4, 4, 4, 3, 0, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 0, 4, 3, 0, 5],
      [5, 5, 5, 5, 5, 0, 2, 4, 0, 3, 0, 4, 4, 4, 3, 0, 3, 3, 4, 4, 4, 4, 4, 3, 3, 3, 0, 0, 3, 3, 0, 5],
      [5, 5, 5, 5, 0, 2, 2, 4, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 3, 4, 4, 4, 4, 3, 3, 0, 0, 3, 3, 0, 5, 5],
      [5, 5, 5, 0, 2, 2, 0, 4, 0, 2, 2, 0, 2, 2, 0, 0, 2, 2, 2, 4, 4, 4, 4, 3, 3, 0, 0, 0, 0, 5, 5, 5],
      [5, 5, 5, 0, 2, 0, 0, 4, 0, 2, 0, 0, 2, 2, 0, 2, 0, 2, 2, 4, 4, 4, 3, 3, 0, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5]
    ],
    sit5: [
      [5, 5, 5, 5, 5, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 5, 5, 0, 4, 4, 4, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 4, 4, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 5, 0, 4, 4, 4, 4, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 4, 4, 4, 0, 5, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 0, 4, 1, 1, 4, 4, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 4, 4, 1, 4, 0, 5, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 0, 4, 1, 1, 1, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 1, 1, 1, 4, 0, 5, 5, 5, 5, 5, 5, 5, 5],
      [5, 0, 3, 4, 1, 1, 1, 1, 4, 4, 3, 3, 4, 3, 3, 3, 4, 4, 1, 1, 1, 1, 4, 4, 0, 5, 5, 5, 5, 5, 5, 5], 
      [5, 0, 3, 3, 4, 1, 4, 4, 4, 4, 3, 3, 4, 3, 3, 4, 4, 4, 4, 4, 1, 4, 4, 4, 0, 5, 5, 5, 5, 5, 5, 5], 
      [5, 0, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 3, 4, 3, 4, 4, 4, 4, 4, 4, 3, 3, 3, 0, 5, 5, 5, 5, 5, 5, 5], 
      [0, 0, 0, 0, 0, 4, 4, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 4, 4, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5], 
      [5, 5, 0, 3, 4, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0, 4, 4, 0, 4, 4, 4, 3, 0, 5, 5, 5, 5, 5, 5, 5], 
      [5, 5, 0, 0, 0, 4, 4, 4, 4, 4, 2, 0, 0, 0, 2, 2, 4, 4, 4, 4, 4, 0, 0, 3, 0, 5, 5, 5, 5, 5, 5, 5], 
      [5, 0, 0, 0, 4, 4, 4, 4, 4, 0, 2, 2, 0, 2, 2, 0, 2, 2, 4, 4, 4, 4, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5], 
      [5, 5, 5, 0, 3, 4, 4, 4, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 4, 3, 3, 0, 5, 5, 5, 5, 0, 0, 0, 5], 
      [5, 5, 5, 5, 0, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 0, 5, 5, 5, 5, 0, 4, 4, 4, 0], 
      [5, 5, 5, 5, 5, 0, 0, 0, 4, 2, 2, 2, 2, 2, 2, 2, 4, 3, 3, 3, 0, 0, 5, 5, 5, 5, 0, 4, 4, 4, 4, 0], 
      [5, 5, 5, 5, 5, 5, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 5, 5, 5, 5, 0, 4, 4, 4, 0, 5],
      [5, 5, 5, 5, 5, 5, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 5, 5, 5, 0, 3, 3, 3, 0, 5], 
      [5, 5, 5, 5, 5, 0, 4, 4, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 5, 5, 0, 4, 3, 0, 5, 5], 
      [5, 5, 5, 5, 5, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 5, 0, 4, 4, 0, 5, 5],
      [5, 5, 5, 5, 5, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 5, 0, 3, 3, 0, 5, 5],
      [5, 5, 5, 5, 5, 0, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 0, 5, 5, 0, 4, 3, 0, 5],
      [5, 5, 5, 5, 5, 0, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 5, 0, 4, 4, 0, 5],
      [5, 5, 5, 5, 5, 0, 4, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 0, 0, 4, 4, 4, 4, 4, 4, 0, 5, 0, 4, 4, 0, 5],
      [5, 5, 5, 5, 5, 0, 4, 0, 2, 2, 2, 0, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 3, 3, 3, 0, 0, 3, 3, 0, 5],
      [5, 5, 5, 5, 5, 0, 3, 4, 0, 2, 0, 3, 3, 3, 4, 0, 0, 4, 4, 4, 4, 4, 3, 3, 3, 3, 0, 0, 4, 3, 0, 5],
      [5, 5, 5, 5, 5, 0, 4, 4, 0, 2, 0, 4, 4, 4, 3, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 0, 3, 4, 4, 0, 5],
      [5, 5, 5, 5, 5, 0, 3, 4, 0, 3, 0, 4, 4, 4, 3, 0, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 4, 3, 0, 5, 5],
      [5, 5, 5, 5, 5, 0, 2, 4, 0, 3, 0, 4, 4, 4, 3, 0, 3, 3, 4, 4, 4, 4, 4, 3, 3, 3, 0, 3, 3, 0, 5, 5],
      [5, 5, 5, 5, 0, 2, 2, 4, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 3, 4, 4, 4, 4, 3, 3, 0, 3, 3, 0, 5, 5, 5],
      [5, 5, 5, 0, 2, 2, 0, 4, 0, 2, 2, 0, 2, 2, 0, 0, 2, 2, 2, 4, 4, 4, 4, 3, 3, 0, 0, 0, 5, 5, 5, 5],
      [5, 5, 5, 0, 2, 0, 0, 4, 0, 2, 0, 0, 2, 2, 0, 2, 0, 2, 2, 4, 4, 4, 3, 3, 0, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5]
    ],
    sit6: [
      [5, 5, 5, 5, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 5, 0, 4, 4, 4, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 4, 4, 0, 5, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 5, 0, 4, 4, 4, 4, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 4, 4, 4, 0, 5, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 5, 0, 4, 1, 1, 4, 4, 0, 5, 5, 5, 5, 5, 5, 5, 5, 0, 4, 4, 1, 4, 0, 5, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 5, 0, 4, 1, 1, 1, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 1, 1, 4, 0, 5, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 0, 4, 4, 1, 1, 1, 1, 4, 4, 3, 3, 4, 3, 3, 3, 4, 4, 1, 1, 1, 4, 3, 0, 5, 5, 5, 5, 5, 5, 5], 
      [5, 5, 0, 4, 4, 1, 4, 4, 4, 4, 4, 3, 3, 4, 3, 3, 4, 4, 4, 4, 4, 1, 4, 3, 0, 5, 5, 5, 5, 5, 5, 5], 
      [5, 5, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 3, 4, 3, 4, 4, 4, 4, 4, 4, 3, 3, 3, 0, 5, 5, 5, 5, 5, 5, 5], 
      [0, 0, 0, 0, 0, 4, 4, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 4, 4, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5], 
      [5, 5, 0, 3, 4, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0, 4, 4, 0, 4, 4, 4, 3, 0, 5, 5, 5, 5, 5, 5, 5], 
      [5, 5, 0, 0, 0, 4, 4, 4, 4, 4, 2, 0, 0, 0, 2, 2, 4, 4, 4, 4, 4, 0, 0, 3, 0, 5, 5, 5, 5, 5, 5, 5], 
      [5, 0, 0, 0, 4, 4, 4, 4, 4, 0, 2, 2, 0, 2, 2, 0, 2, 2, 4, 4, 4, 4, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5], 
      [5, 5, 5, 0, 3, 4, 4, 4, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 4, 3, 3, 0, 5, 5, 5, 0, 0, 0, 0, 5], 
      [5, 5, 5, 5, 0, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 0, 5, 5, 5, 0, 4, 4, 4, 4, 0], 
      [5, 5, 5, 5, 5, 0, 0, 0, 4, 2, 2, 2, 2, 2, 2, 2, 4, 3, 3, 3, 0, 0, 5, 5, 5, 0, 4, 4, 4, 4, 4, 0], 
      [5, 5, 5, 5, 5, 5, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 5, 5, 5, 0, 4, 4, 4, 0, 5, 5],
      [5, 5, 5, 5, 5, 5, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 5, 5, 0, 3, 3, 3, 0, 5, 5], 
      [5, 5, 5, 5, 5, 0, 4, 4, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 5, 0, 4, 3, 0, 5, 5, 5], 
      [5, 5, 5, 5, 5, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 0, 4, 4, 0, 5, 5, 5],
      [5, 5, 5, 5, 5, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 0, 3, 3, 0, 5, 5, 5],
      [5, 5, 5, 5, 5, 0, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 0, 5, 0, 4, 3, 0, 5, 5],
      [5, 5, 5, 5, 5, 0, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 4, 4, 0, 5, 5],
      [5, 5, 5, 5, 5, 0, 4, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 0, 0, 4, 4, 4, 4, 4, 4, 0, 0, 4, 4, 0, 5, 5],
      [5, 5, 5, 5, 5, 0, 4, 0, 2, 2, 2, 0, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 3, 3, 3, 0, 3, 3, 0, 5, 5],
      [5, 5, 5, 5, 5, 0, 3, 4, 0, 2, 0, 3, 3, 3, 4, 0, 0, 4, 4, 4, 4, 4, 3, 3, 3, 3, 0, 4, 3, 0, 5, 5],
      [5, 5, 5, 5, 5, 0, 4, 4, 0, 2, 0, 4, 4, 4, 3, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 0, 4, 4, 0, 5, 5],
      [5, 5, 5, 5, 5, 0, 3, 4, 0, 3, 0, 4, 4, 4, 3, 0, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 3, 0, 5, 5, 5],
      [5, 5, 5, 5, 5, 0, 2, 4, 0, 3, 0, 4, 4, 4, 3, 0, 3, 3, 4, 4, 4, 4, 4, 3, 3, 3, 0, 3, 0, 5, 5, 5],
      [5, 5, 5, 5, 0, 2, 2, 4, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 3, 4, 4, 4, 4, 3, 3, 0, 3, 0, 5, 5, 5, 5],
      [5, 5, 5, 0, 2, 2, 0, 4, 0, 2, 2, 0, 2, 2, 0, 0, 2, 2, 2, 4, 4, 4, 4, 3, 3, 0, 0, 5, 5, 5, 5, 5],
      [5, 5, 5, 0, 2, 0, 0, 4, 0, 2, 0, 0, 2, 2, 0, 2, 0, 2, 2, 4, 4, 4, 3, 3, 0, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5]
],
  }
};

export default catPoses;