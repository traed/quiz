/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "kokesfyqs3q530h",
    "created": "2024-08-24 19:24:47.297Z",
    "updated": "2024-08-24 19:24:47.297Z",
    "name": "question_response",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vlbvttx7",
        "name": "question",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "4ho9vt4jydolppv",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("kokesfyqs3q530h");

  return dao.deleteCollection(collection);
})
