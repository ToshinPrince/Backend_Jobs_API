const getAllJobs = async (req, res) => {
  res.send("Get all Jobs");
};

const getJob = async (req, res) => {
  res.send("Get Job");
};

const createJob = async (req, res) => {
  res.send("Create Jobs");
};

const updateJob = async (req, res) => {
  res.send("Update Job");
};

const deleteJob = async (req, res) => {
  res.send("Delete Job");
};

model.expoers = { getAllJobs, getJob, createJob, updateJob, deleteJob };
