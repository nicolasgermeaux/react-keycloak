import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "http://auth.local.orpea-belgium.com/",
 realm: "react-app-keycloak",
 clientId: "react-auth",
});


export default keycloak;