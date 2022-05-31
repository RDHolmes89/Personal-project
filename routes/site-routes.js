const express = require('express');
const siteCtrl = require('../controllers/site-controller');
const router = express.Router();

router.route('/')
    .get(siteCtrl.index);


router.route('/login')
    .get(siteCtrl.login)
    .post(siteCtrl.login_post);

router.route('/create')
    .get(siteCtrl.create)
    .post(siteCtrl.create_post);

router.route('/auth/google')
    .get(siteCtrl.google_get);

router.route('/auth/google/profile')
    .get(siteCtrl.google_redirect_get);

router.route('/profile')
    .get(siteCtrl.profile);

router.route('/logout')
    .get(siteCtrl.logout);

router.route('/maps')
    .get(siteCtrl.maps);

router.route('/about')
    .get(siteCtrl.about);

router.route('/contact')
    .get(siteCtrl.contact);

module.exports = router;