This project implement Onion Architecture in Node.JS having an approach towards the OOPs concept. We will use Typescript here as it provides many more features for OOPs.

# What is Onion Architecture ?
Onion Architecture is a project structural pattern that favors us with maintainable and testable code for enterprise systems. It enables us to have a different layer for a different level like Model, DA, Service, Controller, View.

# Advantage :
  ## Loose Coupling
  ## Better maintainability at a different layer
  ## Better testability as projects are divided into layers
  ## Modulour concept
# The Layers :
  ## DA Layer: DataAccess Layer which will specifically deal with Database operation like Read, Insert, Update, and Delete.
  ## Service Layer: This layer will contain our business logic for every api.
  ## Controller Layer: This layer will have all routes defined and call to a specific service layer’s function.
  ## Types: This layer will have all types, interfaceb defined.

