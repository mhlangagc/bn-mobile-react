import {Container} from 'unstated'
import {server} from '../constants/Server'

// Hardcoding for now, will probably be replaced by a URL,
// and <Image source={{uri: ticket.imageUrl}} ... />
const sampleImages = {
  image1: require('../../assets/ticket-event.png'),
  image2: require('../../assets/ticket-event-2.png'),
}
const sampleTickets = {
  upcoming: [
    {
      quantity: 3,
      name: 'Explosions In The Sky',
      venue: 'Fox Theater',
      location: 'Oakland, CA',
      date: 'Tue, July 21st',
      starts: '7:30pm',
      ends: '12:30am',
      image: sampleImages.image1,
      qrCode: '',
      id: 1,
    },
    {
      quantity: 3,
      name: 'Tycho',
      venue: 'Fox Theater',
      location: 'Oakland, CA',
      date: 'Tue, July 21st',
      starts: '7:30pm',
      ends: '12:30am',
      image: sampleImages.image2,
      qrCode: '',
      id: 2,
    },
  ],
  past: [
    {
      quantity: 3,
      name: 'Tycho',
      venue: 'Fox Theater',
      location: 'Oakland, CA',
      date: 'Tue, January 21st',
      starts: '7:30pm',
      ends: '12:30am',
      image: sampleImages.image2,
      qrCode: '',
      id: 3,
    },
    {
      quantity: 3,
      name: 'Explosions In The Sky',
      venue: 'Fox Theater',
      location: 'Oakland, CA',
      date: 'Tue, January 21st',
      starts: '7:30pm',
      ends: '12:30am',
      image: sampleImages.image1,
      qrCode: '',
      id: 4,
    },
  ],
  transfer: [
    {
      quantity: 1,
      name: 'Tycho',
      venue: 'Fox Theater',
      location: 'Oakland, CA',
      date: 'Tue, January 21st',
      starts: '7:30pm',
      ends: '12:30am',
      image: sampleImages.image2,
      qrCode: '',
      id: 5,
    },
    {
      quantity: 1,
      name: 'Explosions In The Sky',
      venue: 'Fox Theater',
      location: 'Oakland, CA',
      date: 'Tue, January 21st',
      starts: '7:30pm',
      ends: '12:30am',
      image: sampleImages.image1,
      qrCode: '',
      id: 6,
    },
  ],
}

class TicketsContainer extends Container {
  constructor(props = {}) {
    super(props);

    this.state = {
      tickets: sampleTickets,
      purchasedTicketId: false,
    };
  }

  addTicket = (ticket) => {
    const tickets = [...this.state.tickets, ticket]

    this.setState({tickets})
  }

  setPurchasedTicket = (purchasedTicketId) => {
    this.setState({purchasedTicketId})
  }
}

export {
  TicketsContainer,
}
