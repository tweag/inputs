# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.0.0-alpha.1](https://github.com/promptworks/react-forms/compare/v2.0.0-alpha.0...v2.0.0-alpha.1) (2019-10-27)


### Bug Fixes

* add "aria-labelledby" to input if there is an error label ([a60ed76](https://github.com/promptworks/react-forms/commit/a60ed765fe01b143d4a14d090b2a9ff2ac3a3300))
* add disabled support and classes to field, add fieldset__body ([a8c49f5](https://github.com/promptworks/react-forms/commit/a8c49f52b427a05328c64ba3230baab4eaa3365b))
* add radio group to formik inputs ([efb5356](https://github.com/promptworks/react-forms/commit/efb5356012e9d92a11243d665e9e6b14cfaaf7fd))
* add tests for radio group ([75379eb](https://github.com/promptworks/react-forms/commit/75379eb3b7cf4e0d415238ba70088ce16f35e5e4))
* aria-labelledby should use label id ([264955a](https://github.com/promptworks/react-forms/commit/264955ad3c53e3ebaa97c8404c210bfd4d041b83))
* feedback and removing fieldset ([c5968fa](https://github.com/promptworks/react-forms/commit/c5968fa716ec912b834aa89e20b83c4fc76ca154))
* never use index as key and pass name prop through ([d311aa8](https://github.com/promptworks/react-forms/commit/d311aa8cd9aa4b30051e5d3c1aacf67cfdd9be5e))
* radio group test fix, allow string options ([106a1bc](https://github.com/promptworks/react-forms/commit/106a1bc8665805f932b12e3ce4a5d4efdf6affed))
* refactor itBehavesLikeaField setup function ([013849b](https://github.com/promptworks/react-forms/commit/013849b97902cde4d8f8c9682dfd17ff46c15d64))
* regenerate snaps ([7839e95](https://github.com/promptworks/react-forms/commit/7839e95b3422fe3f90756705092a2824dff914b8))
* remove passed radio group options, don't redeclare theme vars ([abf6749](https://github.com/promptworks/react-forms/commit/abf6749357949398d180a2b672d3e2376a10955b))
* remove radio component, put everything in radiogroup ([71a20b3](https://github.com/promptworks/react-forms/commit/71a20b3968fea0f2a4d6ff7614d5109a940654d3))
* remove radio from index.ts ([8a1d9ad](https://github.com/promptworks/react-forms/commit/8a1d9ad8e3e40757a38b4c5610883a1d60731151))


### Features

* add a ToggleButton component ([5fcbdea](https://github.com/promptworks/react-forms/commit/5fcbdeaae41294439c897b26e7f7215ca150d36a))
* enable inline radio group ([aea0867](https://github.com/promptworks/react-forms/commit/aea08670d25c7c4c76f68ccd33ec2ec5619f91a1))
* make the error message class name consistent ([41a17e6](https://github.com/promptworks/react-forms/commit/41a17e6fdcc997158c4d048385f192338aeca113))
* radio and radioGroup in react-baseline-inputs ([bc7f017](https://github.com/promptworks/react-forms/commit/bc7f0173521694ba0e49ab3fe5477c3dfd905a31))
* test with jest-axe ([e45da46](https://github.com/promptworks/react-forms/commit/e45da467d985353cc074e3ea2539016308376c1e))





# [2.0.0-alpha.0](https://github.com/promptworks/react-forms/compare/v1.5.0...v2.0.0-alpha.0) (2019-10-21)


### Bug Fixes

* add react hooks testing back ([f279532](https://github.com/promptworks/react-forms/commit/f2795325c86ac7069e304466c7dc893f4b735601))
* export more interfaces to get the build to succeed ([d45f8f4](https://github.com/promptworks/react-forms/commit/d45f8f42499a28a034a183b61d5c86d66505f2ca))
* fix file type and update formik example ([ebdd814](https://github.com/promptworks/react-forms/commit/ebdd814e9c4cdd50ccef13b46dd1e0c1eca3d279))
* fix type errors in the example apps ([a18d854](https://github.com/promptworks/react-forms/commit/a18d854e23885c7a9a6ef4f5dec05e749afa53aa))
* get our types in order ([386d456](https://github.com/promptworks/react-forms/commit/386d4569b46d198f95b00d3a4dc6d1378f428e68))
* get the tests to pass ([7d4646e](https://github.com/promptworks/react-forms/commit/7d4646ed09c0be67c3fd74970e28c1e268b38bcd))
* repair types for file input... again ([b52a22a](https://github.com/promptworks/react-forms/commit/b52a22aa6b644795907b05ae0d30127bbde5918c))
* require label and rename wrap to wrapper ([5d57278](https://github.com/promptworks/react-forms/commit/5d57278c1d42703a32413305399c60da690c9dc4))
* trim the classnames ([80a3297](https://github.com/promptworks/react-forms/commit/80a329776d88b67e2dffe15f759dcacfef9fa940))
* update snapshots ([8358951](https://github.com/promptworks/react-forms/commit/835895103e9005faabe475577f7c7d5ef6ca8b64))
* update yarn.lock ([9e349fd](https://github.com/promptworks/react-forms/commit/9e349fd62cbe1193c7a22f8c5ea598fa39992b54))


### Code Refactoring

* rename Input to TextInput ([50548f6](https://github.com/promptworks/react-forms/commit/50548f6a098a6ce7b5cdf113952d8294ddb18236))


### Features

* add a field component ([8f43bd3](https://github.com/promptworks/react-forms/commit/8f43bd34be04fb9b198479d81ae04453f3957fe2))
* add a theme prop ([6b884fb](https://github.com/promptworks/react-forms/commit/6b884fb141e3aec8c0c699165ae0eeb60feeb990))
* conditional label, large, small ([1319934](https://github.com/promptworks/react-forms/commit/13199349622dbff8d86762c4e9cc00cc998890c7))
* export the field ([477be56](https://github.com/promptworks/react-forms/commit/477be569fb2340c4c49149424c2b3070f6282bea))
* only append the suffix if this is not the first input ([242a4e9](https://github.com/promptworks/react-forms/commit/242a4e9b9be7a2b59207218dcb40a904cac71fc8))
* remove date-fns ([902ff4e](https://github.com/promptworks/react-forms/commit/902ff4e63365acab7bad34691591a3267dd2ba65))
* separate file input with multiple ([684efd1](https://github.com/promptworks/react-forms/commit/684efd1857f5b1a355fc3d803e64e0262ece9e67))
* update formik-inputs to wrap react-baseline-inputs ([a7ffc77](https://github.com/promptworks/react-forms/commit/a7ffc77d45c8dc66b6985a864d72ac63137a6ada))


### BREAKING CHANGES

* renamed Input to TextInput





# [1.5.0](https://github.com/promptworks/react-baseline-inputs/compare/v1.4.1...v1.5.0) (2019-10-01)


### Features

* add a textarea component ([b6f88f5](https://github.com/promptworks/react-baseline-inputs/commit/b6f88f5))





## [1.4.1](https://github.com/promptworks/react-baseline-inputs/compare/v1.4.0...v1.4.1) (2019-09-30)


### Bug Fixes

* allow the user to type a date ([7c78249](https://github.com/promptworks/react-baseline-inputs/commit/7c78249))





# [1.4.0](https://github.com/promptworks/react-baseline-inputs/compare/v1.3.0...v1.4.0) (2019-09-20)


### Features

* remove the graphql prefix from error messages ([c3fc86d](https://github.com/promptworks/react-baseline-inputs/commit/c3fc86d))





# [1.3.0](https://github.com/promptworks/react-baseline-inputs/compare/v1.3.0-alpha.0...v1.3.0) (2019-09-16)

# [1.3.0-alpha.0](https://github.com/promptworks/react-baseline-inputs/compare/v1.2.2-alpha.0...v1.3.0-alpha.0) (2019-08-04)


### Features

* expose the static input ([143d486](https://github.com/promptworks/react-baseline-inputs/commit/143d486))





## [1.2.2-alpha.0](https://github.com/promptworks/react-baseline-inputs/compare/v1.2.1...v1.2.2-alpha.0) (2019-08-02)


### Bug Fixes

* add testID to datepickers ([ebb78ad](https://github.com/promptworks/react-baseline-inputs/commit/ebb78ad))





## [1.2.1](https://github.com/promptworks/react-baseline-inputs/compare/v1.2.0...v1.2.1) (2019-08-01)


### Bug Fixes

* check if navigator is defined ([6fd6704](https://github.com/promptworks/react-baseline-inputs/commit/6fd6704))
* do not format parcel dist files ([06d0b68](https://github.com/promptworks/react-baseline-inputs/commit/06d0b68))
* remove commented out code ([c3703f0](https://github.com/promptworks/react-baseline-inputs/commit/c3703f0))
* use the checked property to avoid rerender ([42dd869](https://github.com/promptworks/react-baseline-inputs/commit/42dd869))





# [1.2.0](https://github.com/promptworks/react-baseline-inputs/compare/v1.1.0...v1.2.0) (2019-08-01)


### Features

* provide default class names for validation states ([48b130f](https://github.com/promptworks/react-baseline-inputs/commit/48b130f))





# [1.1.0](https://github.com/promptworks/react-baseline-inputs/compare/v1.0.0...v1.1.0) (2019-08-01)


### Features

* accept class names, styles, and extra props for validation states ([6721c63](https://github.com/promptworks/react-baseline-inputs/commit/6721c63))





# [1.0.0](https://github.com/promptworks/react-baseline-inputs/compare/v0.6.12...v1.0.0) (2019-07-31)

**Note:** Version bump only for package react-forms
