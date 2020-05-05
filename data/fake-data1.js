export default
  [{
    "id": 1,
    "created": "2020-04-26T22:39:50.984Z",
    "updated": "2020-04-26T22:39:50.984Z",
    "summary": "Evento 1",
    "description": "Descripción prolongada del evento 1",
    "color": "#F00",
    "creator": {
      "id": 1,
      "email": "test@test.com",
      "displayName": "Test Test",
      "self": true
    },
    "start": "2020-05-04T22:43:52.214Z",
    "end": "2020-05-05T03:43:52.214Z",
    "attendees": [
      {
        "id": 1,
        "email": "test@test.com",
        "displayName": "Test Test",
        "organizer": true,
        "self": true,
        "responseStatus": true
      },
      {
        "id": 2,
        "email": "test2@test.com",
        "displayName": "Test2 Test",
        "organizer": false,
        "self": false,
        "responseStatus": false
      },
      {
        "id": 3,
        "email": "test3@test.com",
        "displayName": "Test3 Test",
        "organizer": false,
        "self": false,
        "responseStatus": null
      }
    ]
  },
  {
    "id": 2,
    "created": "2020-05-26T22:39:50.984Z",
    "updated": "2020-04-26T22:39:50.984Z",
    "summary": "Evento 2",
    "description": "Descripción prolongada del evento 2",
    "color": "#0F0",
    "creator": {
      "id": 2,
      "email": "test2@test.com",
      "displayName": "Test2 Test",
      "self": false
    },
    "start": "2020-05-08T22:43:52.214Z",
    "end": "2020-04-27T23:43:52.214Z",
    "attendees": [
      {
        "id": 1,
        "email": "test@test.com",
        "displayName": "Test Test",
        "organizer": false,
        "self": false,
        "responseStatus": true
      },
      {
        "id": 2,
        "email": "test2@test.com",
        "displayName": "Test2 Test",
        "organizer": true,
        "self": false,
        "responseStatus": true
      },
      {
        "id": 3,
        "email": "test3@test.com",
        "displayName": "Test3 Test",
        "organizer": false,
        "self": false,
        "responseStatus": false
      }
    ]
  }]