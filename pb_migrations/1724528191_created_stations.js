/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "wymr6rd9vk2yz6i",
    "created": "2024-08-24 19:36:31.520Z",
    "updated": "2024-08-24 19:36:31.520Z",
    "name": "stations",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0tnxfila",
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
        "id": "vuvfmyq4",
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
  const collection = dao.findCollectionByNameOrId("wymr6rd9vk2yz6i");

  return dao.deleteCollection(collection);
})
