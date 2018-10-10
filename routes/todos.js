var express = require("express");
var router = express.Router();
var db = require("../models");
var helpers = require("../helpers/todos");

// INDEX and CREATE routes (short-hand form)
router.route("/")
    .get(helpers.getTodos)
    .post(helpers.createTodo);

// SHOW, UPDATE, DELETE
router.route("/:todoId")
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo);

module.exports = router;