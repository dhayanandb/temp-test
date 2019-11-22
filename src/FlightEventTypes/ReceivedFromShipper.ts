import { DataQuality } from '../DataQuality'
import { DensityGroup } from '../DensityGroup'
import { FlightEvent } from '../FlightEvent'
import { ULD } from '../ULD'
import { Volume } from '../Volume'
import { Weight } from '../Weight'

export interface ReceivedFromShipper extends FlightEvent {
    numberOfPieces: number
    weight?: Weight
    uld?: ULD[]
    timeOfEvent: string
    timeOfEventTimePartQuality: DataQuality
    otherServiceInformation?: string
    airportOfReceipt: string // TODO: IATAAirportCode
    receivedFromName?: string
    volume?: Volume
    densityGroup?: DensityGroup
}
