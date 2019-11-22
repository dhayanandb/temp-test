import { DataQuality } from '../DataQuality'
import { FlightEvent } from '../FlightEvent'
import { FlightIdentity } from '../FlightIdentity'
import { ULD } from '../ULD'
import { Weight } from '../Weight'

export interface Departed extends FlightEvent {
    numberOfPieces: number
    weight?: Weight
    uld?: ULD[]
    timeOfEvent: string
    timeOfEventTimePartQuality: DataQuality
    otherServiceInformation?: string
    flight?: FlightIdentity
    dateOfScheduledDeparture?: string // TODO
    origin: string // TODO
    destination: string // TODO
    estimatedTimeOfArrival?: string // TODO
    timeOfScheduledArrival?: string // TODO
}
