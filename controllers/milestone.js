"use strict";

const User = require("../models/user");
const Milestone = require("../models/milestone");
const mongoose = require("mongoose");
const enumerated = require("../middlewares/enumStructures");
const utils = require("../middlewares/utils");

function createMilestone(req, res) {
  let milestone = new Milestone();

  milestone.author = req.body.author;
  milestone.week = req.body.week;
  milestone.title = req.body.title;
  milestone.description = req.body.description;
  milestone.category = req.body.category;
  milestone.level = req.body.level;

  milestone.save((err, MilestoneStored) => {
    if (err)
      return res
        .status(500)
        .send({ message: `Error al crear milestone: ${err}` });

    User.find(
      { role: enumerated.role[2], role: enumerated.role[3] },
      (err, users) => {
        if (!err && users) {
          users.forEach(u => {
            utils
              .check(u.milestonesCollection, MilestoneStored)
              .then(content => {
                u.save((err, uSaved) => {
                  console.log(uSaved);
                });
              });
          });
        }

        res.status(200).send({ message: MilestoneStored });
      }
    );
  });
}

function getMilestones(req, res) {
  Milestone.find()
    .populate("author")
    .exec((err, milestones) => {
      if (err)
        return res
          .status(500)
          .send({ message: `Error al realizar la petición: ${err}` });
      if (!milestones)
        return res.status(404).send({ message: "No existen milestones" });

      res.status(200).send({ milestones });
    });
}

function getMilestone(req, res) {
  let milestoneId = req.params.milestoneId;

  Milestone.findById(milestoneId)
    .populate("author")
    .exec((err, milestone) => {
      if (err)
        return res
          .status(500)
          .send({ message: `Error al realizar peticion: ${err}` });
      if (!milestone)
        return res.status(404).send({ message: `El milestone no existe` });
      res.status(200).send({ milestone });
    });
}

function getMilestoneByWeek(req, res) {
  let weekNumber = req.params.weekNumber;

  Milestone.find({ week: weekNumber })
    .populate("author")
    .exec((err, milestones) => {
      if (err)
        return res
          .status(500)
          .send({ message: `Error al realizar la petición: ${err}` });
      if (!milestones)
        return res
          .status(404)
          .send({ message: "No existen milestones para esa semana" });

      res.status(200).send(milestones);
    });
}

function getMilestoneByCategory(req, res) {
  let cat = req.params.category;

  Milestone.find({ category: cat })
    .populate("author")
    .exec((err, milestones) => {
      if (err)
        return res
          .status(500)
          .send({ message: `Error al realizar la petición: ${err}` });
      if (!milestones)
        return res
          .status(404)
          .send({ message: "No existen milestones con esa categoría" });

      res.status(200).send(milestones);
    });
}

function updateMilestone(req, res) {
  let updated = req.body;

  let milestoneId = req.params.milestoneId;
  Milestone.findByIdAndUpdate(milestoneId, updated, (err, oldMilestone) => {
    if (err)
      return res
        .status(500)
        .send({ message: `Error al actualizar milestone: ${err}` });
    if (!oldMilestone)
      return res.status(404).send({ message: "El milestone no existe" });
    res.status(200).send({ oldMilestone });
  });
}

function deleteMilestone(req, res) {
  let milestoneId = req.params.milestoneId;

  Milestone.findById(milestoneId, (err, milestone) => {
    if (err)
      return res
        .status(500)
        .send({ message: `Error al borrar milestone: ${err}` });
    if (!milestone)
      return res.status(404).send({ message: `El milestone no existe` });
    milestone.remove(err => {
      if (err)
        return res
          .status(500)
          .send({ message: `Error al borrar milestone: ${err}` });
      res.status(200).send({ message: "El milestone ha sido borrado" });
    });
  });
}

module.exports = {
  createMilestone,
  getMilestone,
  updateMilestone,
  deleteMilestone,
  getMilestones,
  getMilestoneByWeek,
  getMilestoneByCategory
};
