import { FlightEvent } from './FlightEvent'
import { OriginAndDestination } from './OriginAndDestination'
import { OtherCustomsSecurityAndRegulatoryInformation } from './OtherCustomsSecurityAndRegulatoryInformation'
import { Quantity } from './Quantity'

export interface SplitConsignment {
    originAndDestination?: OriginAndDestination
    quantity: Quantity
    totalNumberOfPieces: number
    events?: FlightEvent[]
    otherCustomsSecurityAndRegulatoryInformation?: OtherCustomsSecurityAndRegulatoryInformation
    otherServiceInformation: string
}
