import { DataQuality } from '../DataQuality'
import { FlightEvent } from '../FlightEvent'
import { FlightIdentity } from '../FlightIdentity'
import { ULD } from '../ULD'
import { Weight } from '../Weight'

export interface ArrivalDocumentationReceived extends FlightEvent {
    numberOfPieces: number
    weight?: Weight
    uld?: ULD[]
    timeOfEvent: string
    timeOfEventTimePartQuality: DataQuality
    otherServiceInformation?: string
    flight?: FlightIdentity
    dateOfScheduledArrival: string // TODO: date
    actualTimeOfArrival?: string // TODO: date
    destination: string // TODO: IATAAirportCode

}
