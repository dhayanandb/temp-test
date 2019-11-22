import { DataQuality } from '../DataQuality'
import { FlightEvent } from '../FlightEvent'
import { ULD } from '../ULD'
import { Weight } from '../Weight'

export interface Delivered extends FlightEvent {
    numberOfPieces: number
    weight?: Weight
    uld?: ULD[]
    timeOfEvent: string
    timeOfEventTimePartQuality: DataQuality
    otherServiceInformation?: string
    airportOfDelivery: string // TODO: 	IATAAirportCode
    deliveryToName?: string
}
