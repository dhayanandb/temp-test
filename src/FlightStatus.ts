import { FlightEvent } from './FlightEvent'
import { OriginAndDestination } from './OriginAndDestination'
import { Quantity } from './Quantity'

export interface FlightStatus {
    airWaybillNumber: string
    originAndDestination: OriginAndDestination
    quantity: Quantity
    totalNumberOfPieces: number
    events: FlightEvent[]
}
