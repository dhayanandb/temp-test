import { DiscrepancyCode } from '../DiscrepancyCode'
import { FlightEvent } from '../FlightEvent'
import { FlightIdentity } from '../FlightIdentity'
import { ULD } from '../ULD'
import { Weight } from '../Weight'

export interface Discrepancy extends FlightEvent {
    numberOfPieces: number
    weight?: Weight
    uld?: ULD[]
    timeOfEvent: string
    otherServiceInformation?: string
    flight?: FlightIdentity
    airportOfDiscrepancy: string // TODO: IATAAirportCode
    discrepancyCode: DiscrepancyCode
}
