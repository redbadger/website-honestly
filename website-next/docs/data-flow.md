---
layout: default
title: Data Flow
---

# Website Next data flow

Website Next is a mostly static isomorphic React site.

Rather than having its own database it consumes a GraphQL API exposed by the
[Badger Brain][brain] application, which in turn gets its data from a managed
third party content management system called [Prismic][prismic] and [Workable][workable].

[brain]: https://github.com/redbadger/badger-brain
[prismic]: https://prismic.io
[workable]: https://redbadger.workable.com/

The data flow looks like this:


    Prismic / Workable -> Badger Brain -> Website Next

There is no way for Website Next or Badger Brain to post data back into the data sources.

## Updating content

If we want to update the content of the site we log into Prismic or Workable, search for the appropriate document, make our edits, and then save and publish the documents.

Website Next queries BadgerBrain for site data every time a user visits the
site, so the user will always get the latest content in Prismic or Workable.

Content editor's guide can also be found [here][editor-guide].

[editor-guide]: http://webdocs.red-badger.com


## Images

Image content used on Website Next is hosted on a third party image hosting service called [Cloudinary][cloudinary]. The file name is copied into a document's field in Prismic. The URL to the image will then be exposed by Badger Brain for use by React.London or Website next.

Cloudinary is not ideal, and there is an ongoing discussion on the [relevant issue](https://github.com/redbadger/website-next/issues/201). The idea would be to develop a lambda implementation of assets processing pipeline, which would take care of the image resizing, correct format and compression ratio, as well as would upload it to the correct place on AWS S3 bucket.

[cloudinary]: http://cloudinary.com/


## Developing new editable content

If we need to add new content to the site and there is no existing field in
Prismic to contain the content we need to go through the following process.

1. Add the new field to a document schema on Prismic staging
2. Add this new field to the copy of the schema on Badger Brain
3. Update Badger Brain to expose this new field (tests, etc)
4. Get the Badger Brain + Prismic changes reviewed and deployed to production
5. Update the GraphQL query in Website Next to fetch this new data
6. Use this data in the view


## The limitation of Prismic & Badger Brain

The content management system we use, Prismic, has a few limitations in
comparison to a traditional database with custom GUI editor setup. The two
that have the largest impact on our work on React.London and Website Next is that it lacks data
validation features and it has no concept of a required field. As a result of
this it is possible to publish documents that are missing some or all of the
content we require to fully render the site.

In future Badger Brain will hopefully do some amount of data validation and
filtering, but until then we need to program in a defensive manner in
Website Next to avoid crashing when some value is `undefined` or `null`.
