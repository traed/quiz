/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "1d7c6xz7f7njk0h",
    "created": "2024-08-24 19:31:23.989Z",
    "updated": "2024-08-24 19:31:23.989Z",
    "name": "maps",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "liggrehn",
        "name": "competition",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "jrc7se9xo2k58wt",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "sczvmrxq",
        "name": "name",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("1d7c6xz7f7njk0h");

  return dao.deleteCollection(collection);
})
