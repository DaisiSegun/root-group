const Service = require("../models/sp.model.js");
const createError = require("../utils/createError.js");

const createService = async (req, res, next) => {
  if (!req.isSeller)
    return next(createError(403, "Only a SP can create a Service!"));

  const newService = new Service({
    userId: req.userId,
    ...req.body,
  });

  try {
    const savedService = await newService.save();
    res.status(201).json(savedService);
  } catch (err) {
    next(err);
  }
};

const deleteService = async (req, res, next) => {
  try {
    const service = await Service.findById(req.params.id);
    if (service.userId !== req.userId)
      return next(createError(403, "You can delete only your Service!"));

    await Service.findByIdAndDelete(req.params.id);
    res.status(200).send("Service has been deleted!");
  } catch (err) {
    next(err);
  }
};

const getService = async (req, res, next) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) next(createError(404, "Service not found!"));
    res.status(200).send(service);
  } catch (err) {
    next(err);
  }
};

const getServices = async (req, res, next) => {
  const q = req.query;
  const filters = {
    ...(q.userId && { userId: q.userId }),
    ...(q.cat && { cat: q.cat }),
    ...((q.min || q.max) && {
      price: {
        ...(q.min && { $gt: q.min }),
        ...(q.max && { $lt: q.max }),
      },
    }),
  };

  // Add search query to filters
  if (q.search) {
    filters.title = { $regex: q.search, $options: "i" };
  }

  try {
    const services = await Service.find(filters).sort({ [q.sort]: -1 });
    res.status(200).send(services);
  } catch (err) {
    next(err);
  }
};

module.exports = { createService, deleteService, getService, getServices };
