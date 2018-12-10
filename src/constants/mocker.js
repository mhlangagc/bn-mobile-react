import Bigneon from 'bn-api-node';

/* eslint-disable camelcase */
const MOCK_VENUES = [
  {
    address: '123 main St',
    city: 'San Francisco',
    country: 'US',
    created_at: new Date('2018-10-18T15:00:33'),
    id: '3',
    is_private: false,
    latitude: 30.0,
    longitude: -90.0,
    maximum_capacity: 300,
    modified_at: new Date('2018-10-18T15:00:33'),
    name: 'The Cool Venue Place',
    organization_id: null,
    phone: '555-555-1234',
    postal_code: '12345',
    region_id: null,
    state: 'CA',
  }
]

const MOCK_TT_EV1 = [
  {
    created_at: new Date('2018-10-18T15:00:33'),
    description: 'These tickets are so fancy you wouldnt even believe',
    end_date: new Date('2018-10-22T15:00:33'),
    event_id: '22',
    id: '1',
    increment: 1,
    limit: 5,
    name: 'Fancy Tickets',
    ticket_pricing: [
      {
        created_at: new Date('2018-10-18T15:00:33'),
        description: 'Early bird pricing',
        end_date: new Date('2018-10-22T15:00:33'),
        id: '1',
        name: 'Early Bird Fancy Tickets',
        price_in_cents: 10000,
        start_date: new Date('2018-10-18T15:00:33'),
        ticket_type_id: '1',
        updated_at: new Date('2018-10-18T15:00:33'),
      },
    ],
    quantity: 50,
    start_date: new Date('2018-10-18T15:00:33'),
    updated_at: new Date('2018-10-18T15:00:33'),
  },
  {
    created_at: new Date('2018-10-18T15:00:33'),
    description: 'These tickets are so normal you wouldnt even believe',
    end_date: new Date('2018-10-22T15:00:33'),
    event_id: '22',
    id: '2',
    increment: 1,
    limit: 10,
    name: 'Normal Tickets',
    ticket_pricing: [
      {
        created_at: new Date('2018-10-18T15:00:33'),
        description: 'Early bird pricing',
        end_date: new Date('2018-10-22T15:00:33'),
        id: '2',
        name: 'Early Bird Normal Tickets',
        price_in_cents: 5000,
        start_date: new Date('2018-10-18T15:00:33'),
        ticket_type_id: '2',
        updated_at: new Date('2018-10-18T15:00:33'),
      },
      {
        created_at: new Date('2018-10-18T15:00:33'),
        description: 'Normal pricing',
        end_date: new Date('2018-10-22T15:00:33'),
        id: '44',
        name: 'Normal Tickets',
        price_in_cents: 6000,
        start_date: new Date('2018-10-18T15:00:33'),
        ticket_type_id: '2',
        updated_at: new Date('2018-10-18T15:00:33'),
      },
    ],
    quantity: 200,
    start_date: new Date('2018-10-18T15:00:33'),
    updated_at: new Date('2018-10-18T15:00:33'),
  }
]

const MOCK_TT_EV2 = [
  {
    created_at: new Date('2018-10-18T15:00:33'),
    description: 'These tickets are so fancy you wouldnt even believe',
    end_date: new Date('2018-10-22T15:00:33'),
    event_id: '23',
    id: '3',
    increment: 1,
    limit: 5,
    name: 'Fancy Tickets',
    ticket_pricing: [
      {
        created_at: new Date('2018-10-18T15:00:33'),
        description: 'Early bird pricing',
        end_date: new Date('2018-10-22T15:00:33'),
        id: '3',
        name: 'Early Bird Fancy Tickets',
        price_in_cents: 10000,
        start_date: new Date('2018-10-18T15:00:33'),
        ticket_type_id: '3',
        updated_at: new Date('2018-10-18T15:00:33'),
      },
    ],
    quantity: 50,
    start_date: new Date('2018-10-18T15:00:33'),
    updated_at: new Date('2018-10-18T15:00:33'),
  },
  {
    created_at: new Date('2018-10-18T15:00:33'),
    description: 'These tickets are so normal you wouldnt even believe',
    end_date: new Date('2018-10-22T15:00:33'),
    event_id: '23',
    id: '4',
    increment: 1,
    limit: 10,
    name: 'Normal Tickets',
    ticket_pricing: [
      {
        created_at: new Date('2018-10-18T15:00:33'),
        description: 'Early bird pricing',
        end_date: new Date('2018-10-22T15:00:33'),
        id: '4',
        name: 'Early Bird Normal Tickets',
        price_in_cents: 5000,
        start_date: new Date('2018-10-18T15:00:33'),
        ticket_type_id: '4',
        updated_at: new Date('2018-10-18T15:00:33'),
      },
    ],
    quantity: 200,
    start_date: new Date('2018-10-18T15:00:33'),
    updated_at: new Date('2018-10-18T15:00:33'),
  }
]

const MOCK_EVENTS = [
  {
    additional_info: 'This is additional info',
    age_limit: 21,
    artists: [
      {
        artist_id: '1',
        created_at: new Date('2018-10-18T15:00:33'),
        event_id: '22',
        id: '1',
        rank: 5,
        set_time: new Date('2018-10-24T19:30:33'),
        updated_at: new Date('2018-10-18T15:00:33'),
      },
      {
        artist_id: '2',
        created_at: new Date('2018-10-18T15:00:33'),
        event_id: '22',
        id: '2',
        rank: 6,
        set_time: new Date('2018-10-24T20:30:33'),
        updated_at: new Date('2018-10-18T15:00:33'),
      }
    ],
    created_at: '2018-10-18 03:33:33',
    door_time: new Date('2018-10-24T18:00:00'),
    event_start: new Date('2018-10-24T19:00:00'),
    id: '22',
    name: 'Arcade Fire',
    organization: null,
    organization_id: '3',
    promo_image_url: 'https://res.cloudinary.com/bigneon-dev/image/upload/v1537952849/bigneon/euw1rhumwq4jvfoia51f.jpg',
    publish_date: new Date('2018-10-21T18:00:00'),
    status: 'Published',
    ticket_types: MOCK_TT_EV1,
    top_line_info: '',
    total_interest: 80,
    user_is_interested: true,
    venue: MOCK_VENUES[0],
    venue_id: '3',
  },
  {
    additional_info: 'This is additional info',
    age_limit: 18,
    artists: [
      {
        artist_id: '3',
        created_at: new Date('2018-10-18T15:00:33'),
        event_id: '23',
        id: '3',
        rank: 9,
        set_time: new Date('2018-10-24T19:30:33'),
        updated_at: new Date('2018-10-18T15:00:33'),
      },
      {
        artist_id: '4',
        created_at: new Date('2018-10-18T15:00:33'),
        event_id: '23',
        id: '4',
        rank: 16,
        set_time: new Date('2018-10-24T20:30:33'),
        updated_at: new Date('2018-10-18T15:00:33'),
      }
    ],
    created_at: '2018-10-18 03:33:33',
    door_time: new Date('2018-10-31T18:00:00'),
    event_start: new Date('2018-10-31T19:00:00'),
    id: '23',
    name: 'Sufjan Stevens',
    organization: null,
    organization_id: '3',
    promo_image_url: 'https://res.cloudinary.com/bigneon-dev/image/upload/v1537953516/bigneon/ksxxzgt72s6o6dphlmf4.jpg',
    publish_date: new Date('2018-10-21T18:00:00'),
    status: 'Published',
    ticket_types: MOCK_TT_EV2,
    top_line_info: '',
    total_interest: 80,
    user_is_interested: true,
    venue: MOCK_VENUES[0],
    venue_id: '3',
  }
]

const MOCK_EVENT = {
  "id": "22",
  "name": "It's my party",
  "organization_id": "bb5c0fbb-0b13-4550-bedd-46462f79cda4",
  "venue_id": "05202978-89b6-453b-b353-de5094b166d0",
  "created_at": "2018-10-25T16:41:14.027597",
  "event_start": "2018-11-13T18:00:00",
  "door_time": "2018-11-13T17:00:00",
  "fee_in_cents": null,
  "status": "Published",
  "publish_date": "2018-10-25T16:41:14.640891",
  "promo_image_url": "https://res.cloudinary.com/bigneon-dev/image/upload/v1537953516/bigneon/ksxxzgt72s6o6dphlmf4.jpg",
  "additional_info": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in lacus non magna tincidunt lacinia. Donec ut quam nec sapien tempus luctus id quis magna.',
  "top_line_info": "PepsiCo International presents",
  "age_limit": 21,
  "organization": {
    "id": "bb5c0fbb-0b13-4550-bedd-46462f79cda4",
    "name": "Da Klub"
  },
  "venue": {
    "id": "05202978-89b6-453b-b353-de5094b166d0",
    "region_id": null,
    "organization_id": null,
    "is_private": false,
    "name": "Loftus Versveld Clubhouse",
    "address": "10 Smith Street",
    "city": "Johannesburg",
    "state": "Gauteng",
    "country": "South Africa",
    "postal_code": "1234",
    "phone": "5372639874",
    "created_at": "2018-10-25T16:41:13.190973",
    "updated_at": "2018-10-25T16:41:13.190973"
  },
  "artists": [{
    "id": "7cd3a955-f1de-46ee-acd3-e42b5b2f0b31",
    "organization_id": null,
    "is_private": false,
    "name": "Daft Punk",
    "bio": "Daft Punk are a French electronic music duo from Paris formed in 1993 by Guy-Manuel de Homem-Christo and Thomas Bangalter",
    "image_url": "https://i.ytimg.com/vi/23pYfDKyfBk/maxresdefault.jpg",
    "thumb_image_url": null,
    "website_url": "http://daftpunk.com",
    "youtube_video_urls": ["https://www.youtube.com/channel/UC_kRDKYrUlrbtrSiyu5Tflg"],
    "facebook_username": "DaftPunk",
    "instagram_username": "DaftPunk",
    "snapchat_username": "DaftPunk",
    "soundcloud_username": "DaftPunk",
    "bandcamp_username": "DaftPunk",
    "created_at": "2018-10-25T16:41:13.111032",
    "updated_at": "2018-10-25T16:41:13.111032"
  },{
    "id": "7cd3a955-f1de-46ee-acd3-e42b5b2f0b31",
    "organization_id": null,
    "is_private": false,
    "name": "Arcade Fire",
    "bio": "Daft Punk are a French electronic music duo from Paris formed in 1993 by Guy-Manuel de Homem-Christo and Thomas Bangalter",
    "image_url": "https://i.ytimg.com/vi/23pYfDKyfBk/maxresdefault.jpg",
    "thumb_image_url": null,
    "website_url": "http://daftpunk.com",
    "youtube_video_urls": ["https://www.youtube.com/channel/UC_kRDKYrUlrbtrSiyu5Tflg"],
    "facebook_username": "DaftPunk",
    "instagram_username": "DaftPunk",
    "snapchat_username": "DaftPunk",
    "soundcloud_username": "DaftPunk",
    "bandcamp_username": "DaftPunk",
    "created_at": "2018-10-25T16:41:13.111032",
    "updated_at": "2018-10-25T16:41:13.111032"
  },{
    "id": "7cd3a955-f1de-46ee-acd3-e42b5b2f0b31",
    "organization_id": null,
    "is_private": false,
    "name": "Sufjan Stevens",
    "bio": "Daft Punk are a French electronic music duo from Paris formed in 1993 by Guy-Manuel de Homem-Christo and Thomas Bangalter",
    "image_url": "https://i.ytimg.com/vi/23pYfDKyfBk/maxresdefault.jpg",
    "thumb_image_url": null,
    "website_url": "http://daftpunk.com",
    "youtube_video_urls": ["https://www.youtube.com/channel/UC_kRDKYrUlrbtrSiyu5Tflg"],
    "facebook_username": "DaftPunk",
    "instagram_username": "DaftPunk",
    "snapchat_username": "DaftPunk",
    "soundcloud_username": "DaftPunk",
    "bandcamp_username": "DaftPunk",
    "created_at": "2018-10-25T16:41:13.111032",
    "updated_at": "2018-10-25T16:41:13.111032"
  }],
  "ticket_types": [{
    "id": "3117b0fc-50f3-41fc-b910-0ade54e5b77a",
    "name": "Balcony",
    "status": "Published",
    "quantity": 50,
    "start_date": "2018-10-25T15:00:00",
    "end_date": "2018-11-13T12:00:00",
    "increment": 1,
    "ticket_pricing": [{
      "id": "bd17b717-4cc1-44f4-b5c9-11fc880c6b78",
      "name": "Batch 1",
      "status": "Published",
      "start_date": "2018-10-25T15:00:00",
      "end_date": "2018-11-04T01:30:00",
      "price_in_cents": 2000,
      "fee_in_cents": 100000
    }]
  }, {
    "id": "01e87e2a-df51-424f-a44c-6067f04f5b53",
    "name": "General Access",
    "status": "Published",
    "quantity": 1000,
    "start_date": "2018-10-25T15:00:00",
    "end_date": "2018-11-13T12:00:00",
    "increment": 1,
    "ticket_pricing": [{
      "id": "2b27cfdb-8d09-4f11-ad83-36a2c922167c",
      "name": "Batch 1",
      "status": "Published",
      "start_date": "2018-10-25T15:00:00",
      "end_date": "2018-10-29T09:36:00",
      "price_in_cents": 1000,
      "fee_in_cents": 100000
    }]
  }, {
    "id": "9ef81221-f269-48dc-813e-7d714eb89ea5",
    "name": "VIP",
    "status": "Published",
    "quantity": 20,
    "start_date": "2018-10-25T15:00:00",
    "end_date": "2018-11-13T12:00:00",
    "increment": 1,
    "ticket_pricing": [{
      "id": "14fd1aba-b73d-427d-a3e3-5d60b37bad03",
      "name": "Batch 1",
      "status": "Published",
      "start_date": "2018-10-25T15:00:00",
      "end_date": "2018-11-04T01:30:00",
      "price_in_cents": 10000,
      "fee_in_cents": 100000
    }]
  }],
  "total_interest": 237,
  "user_is_interested": false
}

const mocker = new Bigneon.Mocker({
  'events.index': {
    data: {
      data: {
        data: MOCK_EVENTS,
        paging: {
          dir: 'ASC',
          limit: 20,
          page: 1,
          sort: 'DATE',
          tags: [],
          total: 2,
        },
      },
    },
    reject: false,
  },
  'events.read': {
    data: {
      data: {
        event: MOCK_EVENT,
        artists: MOCK_EVENT.artists,
      }
    },
    reject: false,
  }
})

export default mocker
