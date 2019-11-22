import { DataQuality } from '../DataQuality'
import { DensityGroup } from '../DensityGroup'
import { FlightEvent } from '../FlightEvent'
import { FlightIdentity } from '../FlightIdentity'
import { ULD } from '../ULD'
import { Volume } from '../Volume'
import { Weight } from '../Weight'

export interface Booked extends FlightEvent {
    numberOfPieces: number
    weight?: Weight
    uld?: ULD[]
    timeOfEvent: string // TODO
    timeOfEventTimePartQuality: DataQuality
    otherServiceInformation?: string
    flight?: FlightIdentity
    dateOfScheduledDeparture?: string // TODO
    origin: string // TODO
    destination: string // TODO
    estimatedTimeOfDeparture: string // TODO
    timeOfScheduledArrival?: string // TODO
    estimatedTimeOfArrival?: string // TODO
    volume?: Volume
    densityGroup: DensityGroup
}
