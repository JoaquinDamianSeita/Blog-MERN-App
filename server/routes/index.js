const express = require("express");
const router = express.Router();
const Post = require("../models/post");

const { checkJwt, checkJwtPermissions } = require("../authz/check-jwt");

//.......................Posts routes manager.................................................

router.get("/posts", function (req, res) {
  Post.find(function (err, posts) {
    if (err) {
      console.log(err);
    } else {
      res.json(posts);
    }
  });
});

//con este get obtengo un documento en especifico de la base de datos
router.get("/posts/:id", function (req, res) {
  Post.findById(req.params.id, function (err, post) {
    if (!post) {
      res.status(404).send("No post found");
    } else {
      res.json(post);
    }
  });
});

router.post("/posts",checkJwt, function (req, res) {
  let post = new Post(req.body.body);
  post
    .save()
    .then(function (post) {
      res.send(post);
    })
    .catch(function (err) {
      res.status(422).send(`Post add failed ${err}`);
    });
});

router.patch("/posts/:id", checkJwt, function (req, res) {
  Post.findByIdAndUpdate(req.params.id, req.body)
    .then(function () {
      res.json("Post Updated");
    })
    .catch(function (err) {
      res.status(422).send("Post update failed.");
    });
});

router.delete("/posts/:id", checkJwt, function (req, res) {
  Post.findById(req.params.id, function (err, post) {
    if (!post) {
      res.status(404).send("Post not found");
    } else {
      Post.findByIdAndRemove(req.params.id)
        .then(function () {
          res.status(200).json("Post deleted");
        })
        .catch(function (err) {
          res.status(400).send("Post delete failed.");
        });
    }
  });
});

module.exports = router;
