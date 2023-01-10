<p align="center">
    <img src="https://github.com/garronej/keycloakify-advanced-starter/workflows/ci/badge.svg?branch=main">
</p>

A auth theme for Kotini eco-system.

# ⚠️ Remember to update package.json ⚠️

# Quick start

```bash
yarn
yarn keycloak # Build the theme one time (some assets will be copied to 
              # public/keycloak_static, they are needed to dev your page outside of Keycloak)
yarn start # See the Hello World app
# Uncomment line 15 of src/KcApp/kcContext, reload https://localhost:3000
# You can now develop your Login pages.

# Think your theme is ready? Run
yarn keycloak
# Read the instruction printed on the console to see how to test
# your theme on a real Keycloak instance.
```

# Introduction

This repo constitutes an easily reusable CI setup for SPA React App that generates Keycloaks's theme
using [keycloakify](https://github.com/InseeFrLab/keycloakify).
