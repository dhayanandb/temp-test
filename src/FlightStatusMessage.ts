import { FlightStatus } from './FlightStatus'
import { Message } from './Message'

export interface FlightStatusMessage extends Message, FlightStatus {
    type: string
}
