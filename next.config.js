const withCSS = require("@zeit/next-css");
require("dotenv").config();

const {
  APIURL,
  APIKEY,
  PROJECTID,
  BRANCH,
  CDNBASE,
  GRAPHCMSID,
  GRAPHCMSURL,
  auth0domain,
  auth0clientId,
  auth0clientSecret,
  auth0scope,
  auth0redirectUri,
  auth0postLogoutRedirectUri,
  auth0cookieSecret,
} = process.env;

module.exports = withCSS({
  publicRuntimeConfig: {
    graphcms: {
      APIURL,
      APIKEY,
      PROJECTID,
      BRANCH,
      CDNBASE,
      GRAPHCMSID,
      GRAPHCMSURL,
    },
  },
  serverRuntimeConfig: {
    auth: {
      auth0domain,
      auth0clientId,
      auth0clientSecret,
      auth0scope,
      auth0redirectUri,
      auth0postLogoutRedirectUri,
    },
    cookieSecret: auth0cookieSecret,
  },
});
