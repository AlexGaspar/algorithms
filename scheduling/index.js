var getStopAt = function (job) {
  return job.start + job.duration;
}

var getEarliestCompletion = function (input) {
  var i = input.length - 2;
  var bestJob = input[i + 1];

  // Find best job
  while(i >= 0) {
    var tmp = input[i];

    if(getStopAt(bestJob) >= getStopAt(tmp) && tmp.start < bestJob.start) {
      bestJob = tmp;
    }

    i = i - 1;
  }

  // Remove all the others starting before
  var i = input.length - 1;
  while (i >= 0) {
    var tmp = input[i];

    if(tmp.start < getStopAt(bestJob)) {
      input.splice(i, 1 );
    }

    i = i - 1;
  }

  return [bestJob, input];
};

module.exports = function (input) {
  var jobList = [];

  while (input.length !== 0) {
    array = getEarliestCompletion(input);
    input = array[1];

    jobList.push(array[0]);
  };

  return jobList;
};
