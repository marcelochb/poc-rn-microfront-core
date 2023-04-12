# POC Microfront Core
  Com o objetivo de separam a lógica de negócio em um microfront (package) a parte.


### Technologies used

- React Native
- Typescript
- Tsyringe (inject dependency to clean architecture)
- Axios

## Project structure

```
Project
├── __tests__: Unit tests
|   ├── modules
│   │   ├── loan | payment | pix
│   │   │   ├── domain: Usecase unit test.
│   │   │   ├── external: Datasource unit test.
│   │   │   ├── infra: Repository unit test.
│   │   │   ├── presenter: Controller unit test.
├── src
│   ├── core: Tools used by all project.
│   │   ├── constants: Inject dependency and state control.
│   │   ├── services: Api service (axios).
│   ├── modules: Project's modules (clean code pattern).
│   │   ├── loan: Loan module with clean architecture layers.
│   │   │   ├── domain: Entities, Usecases and Repositorie's interface.
│   │   │   ├── external: Datasources.
│   │   │   ├── infra: Repositories, Models and Datasources' interface.
│   │   │   ├── presenter: Sub-modules.
│   │   │   │   ├── binds: Inject dependecy of module.
│   │   │   │   ├── create: Controller, interface and bind..
│   │   │   │   │   ├── bind: Inject dependecy of module.
│   │   │   │   │   ├── controller: Controller (hooks), manipulation data.
│   │   │   │   │   ├── interface: Controller interface.
│   │   │   │   ├── detail: Controller, interface and bind..
│   │   │   │   ├── list: Controller, interface and bind..
│   │   ├── payment: Payment module with clean architecture layers.
│   │   ├── pix: Pix module with clean architecture layers.

```