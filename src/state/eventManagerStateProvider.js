import {Container} from 'unstated'
import {server} from '../constants/Server'

const SCAN_MESSAGE_TIMEOUT = 3000;

/* eslint-disable camelcase */
export class EventManagerContainer extends Container {
  constructor(props = {}) {
    super(props);

    this.state = {
      loggedIn: false,
      statusMessage: '',
      statusIcon: '',
      ticketInfo: {},
      scanType: 'redeem',
      scanResult: null,
      events: [],
      eventToScan: {},
    }
  }

  get events() {
    return this.state.events
  }

  // TODO: filter by live vs upcoming?
  getEvents = async () => {
    const {data} = await server.events.index()

    this.setState({
      // lastUpdate: DateTime.local(),
      events: data.data,
      paging: data.paging,
    })
  }

  scanForEvent = async (event) => {
    this.setState({eventToScan: event});
  }

  _transfer = async () => {
    try {
      const _result = await server.tickets.transfer.receive(this.state.ticketInfo);

      this.setState({scanType: '', statusMessage: 'Successfully Transferred', ticketInfo: {}});
    } catch (e) {
      this.setState({statusMessage: e.message || 'Error From Server', ticketInfo: {}});
    }
  };

  _resetScanResult = () => {
    setTimeout(() => {
      this.setState({scanResult: null});
    }, SCAN_MESSAGE_TIMEOUT)
  }

  redeem = async (ticket) => {
    const event_id = this.state.eventToScan.id

    try {
      await server.events.tickets.redeem({
        event_id,
        ticket_id: ticket.data.id,
        redeem_key: ticket.data.redeem_key,
      })
     this.setState({scanResult: 'success'}, this._resetScanResult)
    } catch (e) {
      if (!e.response) {
        throw e
      }

      const {error} = e.response.data

      switch (error) {
      case 'Ticket has already been redeemed.':
        return this.setState({scanResult: 'alreadyRedeemed'}, this._resetScanResult)
      default:
        return this.setState({scanResult: 'serverError', ticketInfo: {}}, this._resetScanResult)
      }
    }
  }
}
