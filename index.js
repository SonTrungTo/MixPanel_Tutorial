require('dotenv').config();
const { MIXPANEL_TOKEN } = process.env;
const mixpanel = require('mixpanel-browser');

mixpanel.init(MIXPANEL_TOKEN, {
    debug: true
});
mixpanel.track('Sign up', {
    $city,
    $region
});
