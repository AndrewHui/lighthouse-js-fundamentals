const instructorWithLongestName = function(instructors) {
  let longNameSpot = 0;
  let longName = "";
  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length > longName.length)   {
      longNameSpot = i;
      longName = instructors[i].name;
      longCourse = instructors[i].course;
    }
  }
  return instructors[longNameSpot];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));