/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "jrc7se9xo2k58wt",
    "created": "2024-08-24 19:09:39.092Z",
    "updated": "2024-08-24 19:09:39.092Z",
    "name": "competitions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "9kztxkpq",
        "name": "name",
        "type": "text",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "bq5n00jd",
        "name": "start",
        "type": "date",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "odol7ioh",
        "name": "end",
        "type": "date",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "wo4d2ngs",
        "name": "inital_team_status",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "created",
            "awaiting_approval",
            "accepted",
            "incomplete",
            "awaiting_checkin",
            "checkedin",
            "checkedout",
            "deleted"
          ]
        }
      },
      {
        "system": false,
        "id": "umctknt5",
        "name": "payment",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
        }
      },
      {
        "system": false,
        "id": "usd0n60v",
        "name": "app_config",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
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
  const collection = dao.findCollectionByNameOrId("jrc7se9xo2k58wt");

  return dao.deleteCollection(collection);
})
