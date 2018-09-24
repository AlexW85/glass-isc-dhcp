/**
 * Created by cmiles on 8/9/2017.
 */
var express = require('express');
var router = express.Router();
var fs = require('file-system');
var template_render = require('../core/render-template.js');

router.get('/', function(req, res, next) {

	api_template = template_render.get_template("api_examples");

	res.send (
		template_render.get_index_template(
            api_template,
			req.url
		)
	);

});

module.exports = router;
